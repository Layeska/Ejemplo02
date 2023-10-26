import TaskItem from "./TaskItem";
import useTaskStore from "./store/useTaskStore";
import { useState } from "react";

const TaskList = () => {
    const { tasks, addTask } = useTaskStore();
    const [newTaskText, setNewTaskText] = useState('');

    // Generador de ID para nuevas tareas
    let taskId = 1;

    const handleAddTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask = { id: taskId++, text: newTaskText, completed: false };
            addTask(newTask);
            setNewTaskText('');
        }
    };

    console.log(newTaskText)

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <div style={{ marginBottom: '10px' }}>
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        {
            tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))
        }
        </div>
    );
};

export default TaskList;
