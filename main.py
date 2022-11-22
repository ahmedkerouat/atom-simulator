from vpython import *
from atom import Atom

run = True
dt = 100  # Time step size.
time = 0

A = 8  # Number of nucleons
Z = 4  # Number of charges / Atomic Number

names = []
symbols = []
numbers_of_charges = []

file = open("nuclides.txt")
informations = file.readlines()

for _ in informations:
    information = _.split()
    names.append(information[0])
    symbols.append(information[1]) 
    numbers_of_charges.append(information[2]) 
file.close()

if 0 < Z <= 118 and type(A) == int and type(Z) == int:

    atom = Atom(A, Z)
    atom.get_info()

    def recreate():
        atom.num_charges = [i for i,j in enumerate(names) if j == m1.selected][0] + 1
        atom.get_info()
        atom.a = int(atom.stable_isotops[0])
        print(atom.stable_isotops, atom.a)
        atom.delete()
        atom.get_electron_configuration()
        if atom.a >= 4:
            atom.get_points()
        atom.build()


    m1 = menu(choices=names, bind=recreate, selected=atom.name)
    m2 = menu(choices=symbols, bind=recreate, selected=atom.symbol)
    m3 = menu(choices=numbers_of_charges, bind=recreate, selected=str(atom.num_charges))
    atom.get_electron_configuration()
    if A >= 4:
        atom.get_points()
    atom.build()
    print(atom.name, atom.symbol, atom.stability, atom.stable_isotops, atom.config_result)

    while run:
        rate(100)  # Number of frames/loops per second.
        atom.animate()
        time += dt  # Keeping track of time.*
else:
    print("Error")