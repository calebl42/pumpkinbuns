import "./index.css";
import Gallery from "./Gallery";

export function App() {
  return (
    <>
      <header>
        <h1>
          Pumpkin's Bakery
        </h1>
        <nav>
          <a href="#">eating</a>
          <a href="#">sleeping</a>
          <a href="#">running</a>
          <a href="#">grooming</a>
          <a href="#">idk</a>
        </nav>
      </header>
      <main>
        <Gallery />
      </main>
      <footer>
        2025 Caleb Lee
      </footer>
    </>
  );
}

export default App;
