
export const dummyGenerator = (num: number) => {
    const dummyTodos = [];
    for (let i = 0; i < num; i++) {
        const dummyTodo = {
            id: randomIdGenerator(),
            content: tasks[Math.floor(Math.random() * tasks.length)],
            isCheck: false,
            createdAt: new Date().toJSON()
        }
        dummyTodos.push(dummyTodo)
    }
    return dummyTodos;
}

const randomIdGenerator = () => {
    let id = ''

    for (let i = 0; i < 10; i++) {
        if (i % 2) {
            id = id + Math.floor(Math.random() * 10)
        } else {
            id = id + String.fromCharCode(Math.floor((Math.random() * 58) + 65))
        }
        
    }
    
    return id;
}

const tasks = ['Javascript', 'Java', 'Ruby', 'Go', 'Typescript', 'Python', 'C', 'C#', 'C++', 'Spring', 'React', 'Vue', 'Angular', 'Node']