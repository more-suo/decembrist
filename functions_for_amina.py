# coding=utf-8
import subprocess
import os


class Files:
    def __init__(self, input_file='input', output_file='output', error_file='error'):
        self.input = open(input_file, 'r')
        self.output = open(output_file, 'w')
        self.error = open(error_file, 'w')

    def close(self):
        self.input.close()
        self.output.close()
        self.error.close()


def check(program_name, language):
    possible_errors = ["OSError: [Errno 27] File too large\n",
                       "MemoryError\n",
                       "TimeLimit\n"]
    files = Files()

    def python():
        process = subprocess.Popen('python3 {}'.format(program_name),
                                   shell=True,
                                   stdin=files.input,
                                   stdout=files.output,
                                   stderr=files.error)
        try:
            (outs, errs) = process.communicate(timeout=2)
        except subprocess.TimeoutExpired:
            files.error.write('TimeLimit\n')
            process.kill()
        process.kill()
        files.close()
        error_size = os.path.getsize("./error")
        output_size = os.path.getsize("./output")
        # print(error_size, output_size)

        with open("./error", "r") as error_file:
            try:
                error_text = error_file.readlines()[-1]
            except IndexError:
                error_text = "no errors"
        # print(error_text[:-1], error_text in possible_errors)

        if error_text not in possible_errors and output_size == 0:
            status = "CE"
            print(status, process.returncode)
        elif error_size != 0 and output_size != 0:
            if error_text == "TimeLimit\n":
                status = "TL"
                print(status, process.returncode)
            elif error_text == "OSError: [Errno 27] File too large\n":
                status = "OL"
                print(status, process.returncode)
            elif error_text == "MemoryError\n":
                status = "ME"
                print(status, process.returncode)
            else:
                status = "RE"
                print(status, process.returncode)

        elif error_size == 0:
            print("checking")

    # def cpp():
    #     process = subprocess.Popen('g++ {}'.format(program_name),
    #                                shell=True,
    #                                stdin=files.input,
    #                                stdout=files.output,
    #                                stderr=files.error)
    #
    if language == "py":
        python()
    # elif language == "cpp":
    #     cpp()
    # elif language == "pabc":
    #     pass
    else:
        print("no valid language")


# вывод ошибки
def input_error(error):
    args = 'echo {0} > error'.format(error)
    subprocess.Popen(args, shell=True, stdout=subprocess.PIPE)
