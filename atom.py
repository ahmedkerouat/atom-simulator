from vpython import *


class Atom():

    def __init__(self, a_atom, z_atom):

        self.a_atom = a_atom
        self.z_atom = z_atom

        self.nucleons = []
        self.electrons = []

    def build(self):
        proton = sphere(radius=0.35, color=vector(
            1, 0, 0), opacity=1.0, pos=vector(0, 0, 0))

        for electron in range(1, self.z_atom + 1):
            electron = sphere(radius=0.1, color=vector(
                1, 1, 0), make_trail=True, retain=300, trail_color=vector(1, 1, 1), opacity=1.0)
            self.electrons.append(electron)

    def animate(self, time):
        for electron in self.electrons:
            electron.pos.x = cos(time)
            electron.pos.y = sin(time)
