from vpython import *


time = 0  # Time in simulation.
dt = 0.01  # Time step size.


electron = sphere(radius=0.1, color=vector(
    1, 1, 0), make_trail=True, retain=300, trail_color=vector(1, 1, 1), opacity=1.0)

proton = sphere(radius=0.35, color=vector(
    1, 0, 0), opacity=1.0)

while (time <= 1000):
    rate(100)  # Number of frames/loops per second.
    electron.pos.x = cos(time)
    electron.pos.y = sin(time)
    time = time + dt
