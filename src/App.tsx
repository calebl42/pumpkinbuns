import "./index.css";
import Gallery from "./Gallery";
import { useState } from "react";

export function App() {
  const [ currentCategory, setCurrentCategory ] = useState("chilling");

  return (
    <>
      <header>
        <h1>
          Pumpkin's Bakery
        </h1>
        <nav>
          <a href="#" onClick={(e) => setCurrentCategory('chilling')}>chilling</a>
          <a href="#" onClick={(e) => setCurrentCategory('running')}>running</a>
          <a href="#" onClick={(e) => setCurrentCategory('eating')}>eating</a>
          <a href="#" onClick={(e) => setCurrentCategory('sleeping')}>sleeping</a>
        </nav>
      </header>
      <main>
        <Gallery category={currentCategory}/>
      </main>
      <footer>
        2025 Caleb Lee
      </footer>
    </>
  );
}

export default App;
