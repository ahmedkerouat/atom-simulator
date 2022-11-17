from vpython import *
from atom import Atom

run = True
dt = 100  # Time step size.
time = 0

A = 6  # Number of nucleons
Z = 3  # Number of charges / Atomic Number

wtext(text="\nNeutrons : " + str(A - Z) + "\nProtons : " + str(Z) + "\nElectrons : " + str(Z))


if 0 < Z <= 118 and type(A) == int and type(Z) == int:

    atom = Atom(A, Z)
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