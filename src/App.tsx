import { FC, useState, ChangeEvent } from "react";
import { TodoTask } from "./components/TodoTask";
import { ToDoElement } from "./Interface";

export const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ToDoElement[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      task,
      deadline,
    };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };

  const deleteTask = (taskToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.task != taskToDelete;
      })
    );
  };

  return (
    <main className="App">
      <header>
        <h1>Hello!</h1>
      </header>
      <section>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Write a task..."
          onChange={handleChange}
        />
        <input
          type="number"
          name="deadline"
          id="deadline"
          placeholder="Deadline"
          onChange={handleChange}
        />
        <button type="submit" onClick={addTask}>
          Create
        </button>
      </section>
      <section>
        <ul>
          {todoList.map((task: ToDoElement, key: number) => (
            <TodoTask key={key} task={task} deleteTask={deleteTask} />
          ))}
        </ul>
      </section>
    </main>
  );
};
