import { useState } from "react";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import Section from "../Section/Section";
import "./App.css";
import { useTable } from "react-table";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Section>
        <Container>
          {isLoading && <Loader />}
          <p>Stydy helper</p>
        </Container>
      </Section>
    </>
  );
}

export default App;
