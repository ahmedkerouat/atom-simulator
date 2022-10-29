from vpython import *
from random import random, randint


class Atom():

    def __init__(self, A, Z):

        self.a = A
        self.num_charges = Z

        self.nucleons = []
        self.electrons = []

        self.counter = 0

    def get_points(self):
        r = sqrt(self.a) * 0.2
        best_closest_d = 0
        best_points = []
        points = [(r, 0, 0) for i in range(self.a)]
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
            for i in range(self.a):
                for j in range(self.a):
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
        self.orbitals = "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 6f 7d 7f".split()
        possible_electrons = dict(s=2, p=6, d=10, f=14)
        electron_count = 0
        self.result = []
        for i in self.orbitals:
            if electron_count < self.num_charges:
                orbital = "".join(j for j in i if j in 'spdf')
                self.result.append(i+str(possible_electrons[orbital]))
                electron_count += possible_electrons[orbital]
            else:
                break
        if electron_count > self.num_charges:
            dif = electron_count - self.num_charges
            last_electron_pos = self.result[-1].find(orbital)+1
            last_electrons = int(self.result[-1][last_electron_pos:])
            new_num = last_electrons - dif
            self.result[-1] = self.result[-1][:last_electron_pos] + \
                str(new_num)
        self.config_result = (" ".join(self.result))

    def point(self, j, k, r):
        theta = random() * 3 * pi
        return j + cos(theta) * r, k + sin(theta) * r

    def build(self):
        for _, coords in zip(range(1, self.a + 1), self.best_points):
            self.counter += 1
            if self.counter >= self.num_charges:
                proton = sphere(radius=0.35, color=vector(
                    1, 0, 0), opacity=1.0, pos=vector(*coords))
            else:
                neutron = sphere(radius=0.35, color=vector(
                    0, 0, 1), opacity=1.0, pos=vector(*coords))

        conf = self.config_result
        for element in self.orbitals:
            conf = conf.replace(element, "")
        r = 0
        for h in conf.split():
            r += 1
            for i in range(1, int(h) + 1):
                xy = self.point(0, 0,
                                (r * 0.5 * sqrt(self.num_charges)))
                electron = sphere(radius=0.1, color=vector(
                    1, 1, 0), make_trail=True, retain=300, trail_color=vector(1, 1, 1), opacity=1.0, pos=vector(*xy, 0))
                self.electrons.append(electron)

    def animate(self):
        for electron in self.electrons:

            r = sqrt(electron.pos.x*electron.pos.x +
                     electron.pos.y*electron.pos.y)

            g = atan2(electron.pos.y, electron.pos.x)

            electron.pos.x = r * cos(0.02 + g)
            electron.pos.y = r * sin(0.02 + g)
