import Task from "./Task";
const Tasks = (props) => {
  // tasks, onDelete, onToggle
  return (
    <>
      {props.tasks.map((task, index) => (
        <Task
          key={index}
          // key={task.id}
          task={task}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      ))}
    </>
  );
};
export default Tasks;
