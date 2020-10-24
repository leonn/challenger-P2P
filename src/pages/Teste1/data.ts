const values = [
    { id: 'AB',value: 5 },{id: 'BC',value: 4
        
        
    },
    {
        id: 'CD',
        value: 8
    },
    {
        id: 'DC',
        value: 8
    },
    {
        id: 'DE',
        value: 6
    },
    {
        id: 'AD',
        value: 5
    },
    {
        id: 'CE',
        value: 2
    },
    {
        id: 'EB',
        value: 3
    },
    {
        id: 'AE',
        value: 7
    },
];

const dataQuestions = [
    {
    label: 'A distância da rota A-B-C.',
    routes: ['A', 'B', 'C']
    },
    {
    label: 'A distância da rota A-D.',
    routes: ['B', 'C']
    },
    {
    label: 'A distância da rota A-D-C.',
    routes: ['A', 'D', 'C']
    },
    {
    label: 'A distância da rota A-E-B-C-D.',
    routes: ['A', 'E', 'B', 'C', 'D']
    },
    {
    label: 'A distância da rota A-E-D.',
    routes: ['A', 'E','D']
    },
    {
    label: 'A distância da rota A-B-C.',
    routes: ['A', 'B','C']
    }
];

export { dataQuestions, values };