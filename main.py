from vpython import *
from atom import Atom

run = True
dt = 100  # Time step size.
time = 0

A = 6  # Number of nucleons
Z = 3  # Number of charges / Atomic Number

if 0 < Z <= 118 and type(A) == int and type(Z) == int:

    atom = Atom(A, Z)
    if A >= 4:
        atom.get_points()
    atom.get_electron_configuration()
    atom.build()

    while run:
        rate(100)  # Number of frames/loops per second.
        atom.animate()
        time += dt  # Keeping track of time.
else:
    print("Error")
