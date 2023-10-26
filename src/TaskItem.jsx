import useTaskStore from "./store/useTaskStore";

// Componente para mostrar una tarea y permitir marcarla como completada
const TaskItem = ({task}) => {
  const { toggleTask } = useTaskStore();
  console.log(task)

  return (
    <div style={{ marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ marginLeft: '10px' }}>{task.text}</span>
    </div>
  );
};

export default TaskItem;
