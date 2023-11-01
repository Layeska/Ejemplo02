import useTaskStore from "./store/useTaskStore";

// Componente para mostrar una tarea y permitir marcarla como completada
const TaskItem = (task) => {
  const { toggleTask } = useTaskStore();
  console.log(task.task)

  return (
    <div style={{ marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.task.completed}
        onChange={() => toggleTask(task.task.id)}
      />
      <span style={{ marginLeft: '10px' }}>{task.task.text}</span>
    </div>
  );
};

export default TaskItem;
