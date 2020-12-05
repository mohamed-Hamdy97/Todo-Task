export const intialTodos = [
    {
        id: 'dfsdfgsdf',
        title: 'do your tasks ',
        description: 'do homework of node.js and android',
        priority: 'high',
        startDate: new Date(),
        endDate: new Date(),
        status: 'toDo',
        assignedTo: 'Mohamed'
    },
    {
        id: 'dfsdfgassdf',
        title: 'do your tasks ',
        description: 'do homework of node.js and android ',
        priority: 'high',
        startDate: new Date(),
        endDate: new Date(),
        status: 'toDo',
        assignedTo: 'Marwa'
    },
    {
        id: '124ds',
        title: 'do your home work',
        description: 'do homework of node.js and android',
        priority: 'medium',
        startDate: new Date(),
        endDate: new Date(),
        status: 'inProgress',
        assignedTo: 'Ikin'
    },
    {
        id: 'dfsdfgsdfdsafsa',
        title: 'bla bla bla bla',
        description: 'do homework of node.js and android ',
        priority: 'low',
        startDate: new Date(),
        endDate: new Date(),
        status: 'done',
        assignedTo: 'Mohamed'
    }
]

//plus feature to add to the store 
// export const simulateUsers = [
//     {
//         id: 'sadas54sdafsf',
//         name: 'ahmed',
//         todos: []
//     }
// ]

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatToDoItem(title, description, priority, startDate, endDate, status, assignedTo) {
    return {
        id: generateUID(),
        title: title,
        description,
        priority,
        startDate,
        endDate,
        status,
        assignedTo,
    }
}

export function formateDate(date) {
    const day = new Date(date).getDate()
    const month = new Date(date).getMonth()
    const year = new Date(date).getFullYear()
    return `${day}/${month}/${year}`
}