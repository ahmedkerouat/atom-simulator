from vpython import *
from random import random, randint


class Atom():

    def __init__(self, A, Z):

        self.a = A  # Number of Nucleons
        self.z = Z  # Charge Number
        self.stable = "unstable"
        self.stability = False

        self.electrons = []
        self.stable_isotops = []
        self.stable_isotops_text = ""
        self.particles = []

        self.name = ""
        self.symbol = ""

        self.counter = 0

        self.temp_a = self.a
        self.temp_z = self.z

    def get_info(self):
        self.stable = "unstable"
        self.stability = False
        self.stable_isotops_text = ""
        file = open("nuclides.txt")
        informations = file.readlines()
        data = (informations[self.z - 1]).split()

        self.stable_isotops = []

        self.name = data[0]
        self.symbol = data[1]

        if len(data) > 3:
            self.stable = "stable"

        if self.stable == "stable":
            for i in range(3, len(data)):
                self.stable_isotops.append(data[i])

        for i in self.stable_isotops:
            if int(i) == self.a:
                self.stability = True

        file.close()

        for isotop in self.stable_isotops:
            self.stable_isotops_text += self.name+"-"+isotop+" "
        if self.stable == "unstable":
            self.stable_isotops_text = "None"

    def get_points(self):

        self.temp_a = self.a
        self.temp_z = self.z

        # Avoiding lag
        if self.a > 20:
            self.temp_a = round(sqrt(self.a) * 2)
            self.temp_z = round(sqrt(self.z) * 2)

        r = sqrt(self.temp_a) * 0.15
        best_closest_d = 0
        best_points = []
        points = [(r, 0, 0) for i in range(self.temp_a)]
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
            for i in range(self.temp_a):
                for j in range(self.temp_a):
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
            if electron_count < self.z:
                orbital = "".join(j for j in i if j in 'spdf')
                self.result.append(i+str(possible_electrons[orbital]))
                electron_count += possible_electrons[orbital]
            else:
                break
        if electron_count > self.z:
            dif = electron_count - self.z
            last_electron_pos = self.result[-1].find(orbital)+1
            last_electrons = int(self.result[-1][last_electron_pos:])
            new_num = last_electrons - dif
            self.result[-1] = self.result[-1][:last_electron_pos] + \
                str(new_num)
        self.config_result = (" ".join(self.result))

    def point(self, j, k, r):
        theta = random() * 1.5 * pi
        return j + cos(theta) * r, k + sin(theta) * r

    def build(self):
        if self.a >= 4:
            for _, coords in zip(range(1, self.temp_a + 1), self.best_points):
                self.counter += 1
                if self.counter <= self.temp_z:
                    proton = sphere(radius=0.35, color=vector(
                        1, 0, 0), opacity=1.0, pos=vector(*coords))
                    self.particles.append(proton)
                else:
                    neutron = sphere(radius=0.35, color=vector(
                        0, 0, 1), opacity=1.0, pos=vector(*coords))
                    self.particles.append(neutron)
        else:
            for i in range(self.a):
                self.counter += 1
                if self.counter <= self.z:
                    proton = sphere(radius=0.35, color=vector(
                        1, 0, 0), opacity=1.0, pos=vector(i * randint(-1, 1) * 0.13, randint(-1, 1) * 0.12 * i, randint(-1, 1) * 0.1 * i))
                    self.particles.append(proton)
                else:
                    neutron = sphere(radius=0.35, color=vector(
                        0, 0, 1), opacity=1.0, pos=vector(i * randint(-1, 1) * 0.12, randint(-1, 1) * 0.13 * i, randint(-1, 1) * 0.1 * i))
                    self.particles.append(neutron)

        conf = self.config_result.split()
        conf.sort()
        temp = ""
        shells = []
        for element in conf:
            v = 0
            for char in element:
                v += 1
                if v == 2:
                    temp += " "
                if char != element[1]:
                    temp += char
                if char == element[len(element) - 1] and v != 1:
                    temp += " "

        temp = temp.split()
        for _ in range(len(temp) // 2):
            shells.append(0)
        for i in range(1, len(temp) + 1):
            if i % 2 == 0:
                shells[int(temp[i - 2]) - 1] += int(temp[i - 1])

        r = 0
        for h in shells:
            r += 1
            for i in range(1, int(h) + 1):
                xy = self.point(0, 0,
                                (r * 0.7 * sqrt(self.a)))
                electron = sphere(radius=(0.1 + 0.03 * sqrt(self.a)), color=vector(
                    1, 1, 0), make_trail=True, retain=400, trail_color=vector(1, 1, 1), opacity=1.0, pos=vector(*xy, 0))
                self.electrons.append(electron)
                self.particles.append(electron)

    def delete(self):
        for electron in self.electrons:
            electron.clear_trail()
        for particle in self.particles:
            self.counter = 0
            particle.visible = False
            del particle

    def animate(self):
        for electron in self.electrons:

            r = sqrt(electron.pos.x*electron.pos.x +
                     electron.pos.y*electron.pos.y)

            g = atan2(electron.pos.y, electron.pos.x)

            electron.pos.x = r * cos(0.02 + g)
            electron.pos.y = r * sin(0.02 + g)
