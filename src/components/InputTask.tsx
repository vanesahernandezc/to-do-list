import { useState } from "react";
import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

export default function InputTask(props: any) {
  const options = [
    { key: "sports", text: "Sports", value: "sports" },
    { key: "house", text: "House", value: "house" },
    { key: "office", text: "Office", value: "office" },
    { key: "other", text: "Other", value: "other" },
  ];
  const { createTask } = props;
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });

  const [error, setError] = useState(false);
  const onChangeTask = (e: any) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCategory = (e: any, data: any) => {
    setTask({
      ...task,
      [data.name]: data.value,
    });
  };

  const onSubtmitTask = (e: any) => {
    e.preventDefault();
    //Validación si queremos que estén vacíos
    if (task.taskName.trim() === "" || task.categoryTask.trim() === "") {
      setError(true);
      return;
    }
    //eliminar el mensaje previo, en caso q tengamos algún error
    setError(false);
    //asignar un ID
    task.idTask = uuidv4();
    //Crear la tarea y no createTask = task
    createTask(task);
    //Limpiar los inputs
    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    });
  };

  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Type your task"
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="Category"
            value={task.categoryTask}
            onChange={onChangeCategory}
          />
          <Button type="submit" color="violet" onClick={onSubtmitTask}>
            Add Task
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>The task is mandatory</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
}
//cap 38
