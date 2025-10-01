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
          <button onClick={(e) => setCurrentCategory('chilling')}>chilling</button>
          <button onClick={(e) => setCurrentCategory('running')}>running</button>
          <button onClick={(e) => setCurrentCategory('eating')}>eating</button>
          <button onClick={(e) => setCurrentCategory('sleeping')}>sleeping</button>
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
