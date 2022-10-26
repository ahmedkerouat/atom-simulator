from vpython import *
from random import random, randint


class Atom():

    def __init__(self, atomic_num, num_charges):

        self.atomic_num = atomic_num
        self.num_charges = num_charges

        self.nucleons = []
        self.electrons = []

    def get_points(self):
        r = 1
        n = self.z_atom
        best_closest_d = 0
        best_points = []
        points = [(r, 0, 0) for i in range(n)]
        for simulation in range(10000):
            x = random()*r
            y = random()*r
            z = r-(x**2+y**2)**0.5
            if randint(0, 1):
                x = -x
            if randint(0, 1):
                y = -y
            if randint(0, 1):
                z = -z
            closest_dist = (2*r)**2
            closest_index = None
            for i in range(n):
                for j in range(n):
                    if i == j:
                        continue
                    p1, p2 = points[i], points[j]
                    x1, y1, z1 = p1
                    x2, y2, z2 = p2
                    d = (x1-x2)**2+(y1-y2)**2+(z1-z2)**2
                    if d < closest_dist:
                        closest_dist = d
                        closest_index = i
            if closest_dist > best_closest_d:
                best_closest_d = closest_dist
                self.best_points = points[:]
            points[closest_index] = (x, y, z)

    def get_electron_configuration(self):
        orbitals = "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 6f 7d 7f".split()
        possible_electrons = dict(s=2, p=6, d=10, f=14)
        electron_count = 0
        result = []
        for i in orbitals:
            if electron_count < self.atomic_num:
                orbital = "".join(j for j in i if j in 'spdf')
                result.append(i+str(possible_electrons[orbital]))
                electron_count += possible_electrons[orbital]
            else:
                break
        if electron_count > self.atomic_num:
            dif = electron_count - self.atomic_num
            last_electron_pos = result[-1].find(orbital)+1
            last_electrons = int(result[-1][last_electron_pos:])
            new_num = last_electrons - dif
            result[-1] = result[-1][:last_electron_pos] + str(new_num)
        self.config_result = (' '.join(result))

    def build(self):
        for _, coords in zip(range(1, self.num_charges + 1), self.best_points):
            proton = sphere(radius=0.35, color=vector(
                1, 0, 0), opacity=1.0, pos=vector(*coords))

        for electron in range(1, self.num_charges + 1):
            electron = sphere(radius=0.1, color=vector(
                1, 1, 0), make_trail=True, retain=300, trail_color=vector(1, 1, 1), opacity=1.0, pos=vector(0, 0, 0))
            self.electrons.append(electron)

    def animate(self, time):
        pass
