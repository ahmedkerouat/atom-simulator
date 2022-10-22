from vpython import *
from atom import Atom

time = 0  # Time in simulation.
dt = 0.01  # Time step size.

hydrogen = Atom(1, 1)
hydrogen.build()
while (time <= 1000):
    rate(100)  # Number of frames/loops per second.

    hydrogen.animate(time)

    time = time + dt
