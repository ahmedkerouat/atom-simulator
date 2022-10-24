from vpython import *
from atom import Atom

time = 0  # Time in simulation.
dt = 0.01  # Time step size.

a = 1
z = 4

atom = Atom(a, z)
atom.get_points()
atom.build()

while (time <= 1000):
    rate(100)  # Number of frames/loops per second.

    atom.animate(time)
    time = time + dt
