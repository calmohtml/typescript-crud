import { ToDoElement } from "../Interface";

interface Props {
  task: ToDoElement;
  deleteTask(deleteTask: string): void;
}

export const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <li>
      <h3>{task.task}</h3>
      <h4>{task.deadline}</h4>
      <button onClick={() => deleteTask(task.task)}>X</button>
    </li>
  );
};
