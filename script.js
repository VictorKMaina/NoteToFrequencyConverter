const keys = {
    C: 261.63,
    C_sharp: 277.18,
    D_flat: 277.18,
    D: 293.66,
    D_sharp: 311.13,
    E_flat: 311.13,
    E: 329.63,
    F: 349.23,
    F_sharp: 369.99,
    G_flat: 369.99,
    G: 392.00,
    G_sharp: 415.30,
    A_flat: 415.30,
    A: 440.00,
    A_sharp: 466.16,
    B_flat: 466.16,
    B: 493.88,
}

function round(value, precision){
    const multiplier = Math.pow(10, precision || 0)
    return Math.round(value * multiplier) / multiplier
}

function findKeyFrequency(key, octave = 4){
    const base_freq = key
    const freq = base_freq * (2 ** (octave - 4))
    return round(freq, 2)
}

console.log(findKeyFrequency(keys.C))