import { Content } from "./Pages/About/AboutApp";
import { SliderNew } from "./Pages/Projects/ProjectsApp";
import { Header } from "./components/Header/HeaderApp";
import Navbar from "./components/Navbar/NavbarApp";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Content />
      < SliderNew />
    </>
  );
}

export default App;
