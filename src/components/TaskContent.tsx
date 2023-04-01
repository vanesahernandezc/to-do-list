import { Header, Icon, Grid } from "semantic-ui-react";
import Task from "./Task";

export default function TaskContent(props: any) {
  const { tasks, deleteTask } = props;

  if (tasks.length === 0) {
    return null;
  }

  return (
    <Grid className="tasks-content">
      <Header as="h2" icon textAlign="center">
        <Icon name="settings" />
        Manage your tasks
      </Header>
      <Grid.Row>
        {tasks.map((task: any, index: number) => (
          <Task key={index} task={task} deleteTask={deleteTask} />
        ))}
      </Grid.Row>
    </Grid>
  );
}
