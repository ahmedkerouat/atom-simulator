from vpython import *
from atom import Atom

time = 0  # Time in simulation.
dt = 0.01  # Time step size.

A = 1  # Number of nucleons
Z = 4  # Number of charges / Atomic Number

atom = Atom(A, Z)
atom.get_points()
atom.get_electron_configuration()
atom.build()

while (time <= 1000):
    rate(100)  # Number of frames/loops per second.
    # atom.animate(time)
    time = time + dt
