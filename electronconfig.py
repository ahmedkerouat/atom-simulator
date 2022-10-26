def electron_config(atomic_num):
    orbitals = "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 6f 7d 7f".split()
    possible_electrons = dict(s=2, p=6, d=10, f=14)
    electron_count = 0
    result = []
    for i in orbitals:
        if electron_count < atomic_num:
            orbital = "".join(j for j in i if j in 'spdf')
            result.append(i+str(possible_electrons[orbital]))
            electron_count += possible_electrons[orbital]
        else:
            break
    if electron_count > atomic_num:
        dif = electron_count-atomic_num
        last_electron_pos = result[-1].find(orbital)+1
        last_electrons = int(result[-1][last_electron_pos:])
        new_num = last_electrons - dif
        result[-1] = result[-1][:last_electron_pos] + str(new_num)
    config_result = (' '.join(result))
