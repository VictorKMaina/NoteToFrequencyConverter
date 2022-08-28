import math

octaves = [0, 1, 2, 3, 4, 5, 6, 7, 8]
freqOfA = [27.5, 55, 110, 220, 440, 880, 1760, 3520, 7040]

def find_C(min_freq, max_freq):
    diff = max_freq - min_freq
    note_increment = diff / 13
    math.log
    print(note_increment)
    b_flat = min_freq + (note_increment)
    return b_flat

print(find_C(440, 880))