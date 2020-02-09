import functions_for_amina as f
import resource

resource.setrlimit(resource.RLIMIT_AS, (2**28, 2**28))
resource.setrlimit(resource.RLIMIT_FSIZE, (2**20, 2**20))

program_name = 'program1'
print(f.check(program_name, "c"))

