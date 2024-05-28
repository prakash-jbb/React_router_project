import { useState } from "react";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <Home />
      <Contact />
      <About />
      <Footer /> */}
    </>
  );
}

export default App;
