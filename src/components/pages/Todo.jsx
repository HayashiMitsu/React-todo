import React, {useState} from 'react';
import InputText from '../organisms/InputText';
import TodoItem from '../organisms/TodoItem';
import Container from '@material-ui/core/Container';

export default function Todo() {

    const [todos, setTodo] = useState([
        {
            task: 'React.js',
            key: 0
        },
        {
            task: 'Vue.js',
            key: 1
        },
    ]);

    const [task, setTask] = useState('');

    const handleNewTask = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        console.log(todos)
        let i = Math.random();
        e.preventDefault()
        if(task === '') return
        setTodo(todos => [...todos,{
            task, 
            key: {i}
        }])
        setTask('')
    }
    const handleDelete = (chipToDelete) => () => {
        setTodo((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Container component='main' maxWidth='xs'>
            <div>
                <InputText
                    handleNewTask={handleNewTask}
                    handleSubmit={handleSubmit}
                />
                <TodoItem 
                    handleDelete={handleDelete}
                    todos={todos}
                />
            </div>
        </Container>
    )
}