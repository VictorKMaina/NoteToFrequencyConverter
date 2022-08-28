import math

class Key:
    """
    Frequency of each key in octave 0
    """
    C = 261.63
    C_sharp = D_flat = 277.18
    D = 293.66	
    D_sharp = E_flat = 311.13
    E = 329.63
    F = 349.23
    F_sharp = G_flat = 369.99
    G = 392.00
    G_sharp = A_flat = 415.30
    A = 440.00
    A_sharp = B_flat = 466.16
    B = 493.88

def find_Freq_By_Octave(octave, key):
    base_freq = key
    freq = base_freq * (2 ** (octave - 4))
    return round(freq, 2)

print(
    find_Freq_By_Octave(8, Key.A)
)