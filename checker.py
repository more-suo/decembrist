# coding=utf-8
import subprocess
import resource

task = {
    'tl': 5,  # in sec
    'ml': 128,  # in MB,
}


# запуск проверки программы c названием program_name
def run(program_name):
    # type: (string) -> process
    args = 'python3 {0} < in > out; python3 {0} < in 2> err'.format(program_name)
    run_process = subprocess.Popen(args, shell=True, stdout=subprocess.PIPE)
    return run_process


# вывод ошибки
def input_error(error):
    args = 'echo {0} > err'.format(error)
    subprocess.Popen(args, shell=True, stdout=subprocess.PIPE)


try:
    program = run('program1.py')
    resource.prlimit(program.pid, resource.RLIMIT_AS, (task['ml'] * 2 ** 20, task['ml'] * 2 ** 20))
    resource.setrlimit(resource.RLIMIT_FSIZE, (task['ml'] * 2 ** 20, task['ml'] * 2 ** 20))
    outs, errs = program.communicate(timeout=task['tl'])

except subprocess.TimeoutExpired:
    program.kill()
    print('TL')
    input_error('TL: time limit did fuck ur program')

program.kill()
