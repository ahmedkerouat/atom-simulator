from vpython import *
from atom import Atom

run = True
dt = 100  # Time step size.
time = 0

A = 1  # Number of nucleons
Z = 1  # Number of charges / Atomic Number

names = []
symbols = []
charges = []
menus = []
neutrons_list = []
for i in range(250):
    neutrons_list.append(str(i))

file = open("nuclides.txt")
informations = file.readlines()

for _ in informations:
    information = _.split()
    names.append(information[0])
    symbols.append(information[1])
    charges.append(information[2])
file.close()

if 0 < Z <= 118 and type(A) == int and type(Z) == int:

    atom = Atom(A, Z)
    atom.get_info()
    atom.get_electron_configuration()

    def recreate(menu):
        atom.z = [i for i, j in enumerate(
            menu.choices) if j == menu.selected][0] + 1
        for menu in menus:
            menu.selected = str(menu.choices[atom.z - 1])
        atom.get_electron_configuration()
        atom.get_info()
        if atom.stable == "stable":
            atom.a = int(atom.stable_isotops[0])
        else:
            atom.a = atom.z * 2
        for i in atom.stable_isotops:
            if int(i) == atom.a:
                atom.stability = True
        m4.selected = str(atom.a - atom.z)
        t1.text = ("\n\nElectron Configuration: " + atom.config_result + "\n\nStable: " +
                   str(atom.stability) + "\n\nStable Isotops: " + atom.stable_isotops_text)
        atom.delete()
        if atom.a >= 4:
            atom.get_points()
        atom.build()

    def neutron_slider(menu):
        atom.a = atom.z + int(menu.selected)
        atom.get_info()
        t1.text = ("\n\nElectron Configuration: " + atom.config_result + "\n\nStable: " +
                   str(atom.stability) + "\n\nStable Isotops: " + atom.stable_isotops_text)
        atom.delete()
        atom.get_electron_configuration()
        if atom.a >= 4:
            atom.get_points()
        atom.build()

    scene.append_to_caption("\n\n Name: ")
    m1 = menu(choices=names, bind=recreate, selected=atom.name)
    scene.append_to_caption("\n\nSymbol: ")
    m2 = menu(choices=symbols, bind=recreate, selected=atom.symbol)
    scene.append_to_caption("\n\nAtomic Number: ")
    m3 = menu(choices=charges, bind=recreate, selected=str(atom.z))
    scene.append_to_caption("\n\nNeutron Number: ")
    m4 = menu(choices=neutrons_list, bind=neutron_slider,
              selected=str((atom.a - atom.z)))
    t1 = wtext(text=("\n\nElectron Configuration: " + atom.config_result + "\n\nStable: " +
               str(atom.stability) + "\n\nStable Isotops: " + atom.stable_isotops_text))

    menus = [m1, m2, m3]

    if A >= 4:
        atom.get_points()
    atom.build()

    while run:
        rate(100)  # Number of frames/loops per second.
        atom.animate()
        time += dt  # Keeping track of time.*
else:
    print("Error")
