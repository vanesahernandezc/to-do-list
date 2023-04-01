import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import Container from "./components/Container";
import InputTask from "./components/InputTask";
import { useEffect, useState } from "react";
import TaskContent from "./components/TaskContent";

function App() {
  // pasar las tareas a localstorage, vemos desde el primer momento si initialTask lo tiene vacío o hay algo
  let checkItem = localStorage.getItem("tasks");

  let initialTasks = checkItem ? JSON.parse(checkItem) : [];
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (task: any) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: any) => {
    const currentTask = tasks.filter((task: any) => task.idTask !== id);
    setTasks(currentTask);
  };

  return (
    <Container>
      <>
        <Header />
        <InputTask createTask={createTask} />
        <TaskContent tasks={tasks} deleteTask={deleteTask} />
      </>
    </Container>
  );
}

export default App;
