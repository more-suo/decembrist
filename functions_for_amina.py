# coding=utf-8
import subprocess
import os

compile = {
    "python": "python3 -m py_compile {0}.py",
    "cpp": "g++ -o {0} {0}.cpp",
    "c": "gcc -o {0} {0}.c",
}

run = {
    "python": "python3 {0}.py",
    "cpp": "g++ -o {0} {0}.cpp & ./{0}",
    "c": "gcc -o {0} {0}.c & ./{0}",
}


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
    possible_errors = ['OSError: [Errno 27] File too large\n',
                       "MemoryError\n",
                       "TimeLimit\n"
                       "File size limit exceeded(core dumped)\n", ]

    error_file = open("./error", 'w')

    process = subprocess.Popen(compile[language].format(program_name), shell=True, stderr=error_file)
    process.wait()

    if os.path.getsize("./error") != 0:
        status = "CE"
        return status

    files = Files()
    process = subprocess.Popen(run[language].format(program_name),
                               shell=True,
                               stdin=files.input,
                               stdout=files.output,
                               stderr=files.error)

    try:
        process.communicate(timeout=2)
    except subprocess.TimeoutExpired:
        files.error.write('TimeLimit\n')
        process.kill()
    process.kill()
    files.close()

    with open("./error", "r") as error_file:
        try:
            error_text = error_file.readlines()[-1]
            print(error_text[:len(error_text)-1])
        except IndexError:
            return "NoErrors"

    if error_text == "TimeLimit\n":
        return "TL"
    elif error_text == "OSError: [Errno 27] File too large\n" or \
            error_text == "File size limit exceeded (core dumped)\n":
        return "OL"
    elif error_text == "MemoryError\n":
        return "ME"
    elif error_text not in possible_errors:
        return "RE"
