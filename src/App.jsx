import "./App.css";
import movies from "./assets/movies.json";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <header>
        <a href="https://www.netflix.com/browse">
          <img
            src="https://lereacteur-react-netflix.netlify.app/assets/logo-a79c3484.png"
            alt="logo de Netflix"
          />
        </a>
      </header>

      <main>
        {movies.map((title, index) => {
          // console.log(elem.category); // {category: 'Reprendre avec', images: Array(27)}
          return <Section key={index} />;
        })}
      </main>
    </>
  );
};

export default App;
