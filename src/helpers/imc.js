export const levels = [
    {
        title: 'Magreza',
        color: '#96a3ab',
        icon: 'down',
        imc: [0, 18.5]
    },
    {
        title: 'Normal',
        color: '#0ead69',
        icon: 'up',
        imc: [18.6, 24.9]
    },
    {
        title: 'Sobrepeso',
        color: '#e2b036',
        icon: 'down',
        imc: [24.5, 30]
    },
    {
        title: 'Obesidade',
        color: '#c3423f',
        icon: 'down',
        imc: [30.1, 99]
    }
];

export const calculateIMC = (height, weight) => {
    const imc = weight / ( height * height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelsCopy = {...levels[i]}
            levelsCopy.yourIMC = parseFloat(imc.toFixed(2));
            return levelsCopy;
        }
    }

    return null;
}