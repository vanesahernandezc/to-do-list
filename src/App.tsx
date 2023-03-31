import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import Container from "./components/Container";
import InputTask from "./components/InputTask";

function App() {
  return (
    <Container>
      <>
        <Header />
        <InputTask />
      </>
    </Container>
  );
}

export default App;
