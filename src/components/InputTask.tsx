import { useState } from "react";
import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

export default function InputTask(props: any) {
  const options = [
    { key: "deporte", text: "Deporte", value: "deporte" },
    { key: "casa", text: "Casa", value: "casa" },
    { key: "oficina", text: "Oficina", value: "oficina" },
    { key: "otra", text: "Otra", value: "otra" },
  ];

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
    //Crear la tarea
    //Limpiar los inputs
  };

  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu tarea..."
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
            placeholder="Categoria"
            value={task.categoryTask}
            onChange={onChangeCategory}
          />
          <Button type="submit" color="violet" onClick={onSubtmitTask}>
            Añadir tarea
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
}
//cap 38
