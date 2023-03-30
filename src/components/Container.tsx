import { Container as ContainerContent } from "semantic-ui-react";

export default function Container({ children }: { children: JSX.Element }) {
  return <ContainerContent text>{children}</ContainerContent>;
}
