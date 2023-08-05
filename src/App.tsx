import { Content } from "./Pages/About";
import { SliderNew } from "./Pages/Projects";
import { Header } from "./components/Header";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Content />
      < SliderNew />
      <Content />
    </>
  );
}

export default App;
