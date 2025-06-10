import "./App.css";
import movies from "./assets/movies.json";

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
          return (
            <section>
              <h2>{title.category}</h2>
              <div>
                {title.images.map((url) => {
                  // console.log(elem); https://res.cloudinary.com/lereacteur-apollo/image/upload/v1643642943/react-new-exercices/netflix2022/reprendre%20avec/AAAABd4eOiOZFaZT1-9l68Ra0uC-4kl3zMSPkeA5TyDu8v_KNgAAvifmM8boe5G2kexKSdk2uznXcDIJIlBoz4RA6p-q0_E_xg9maq.webp
                  return (
                    <img src={url} alt="Couverture d'un film ou d'une série" />
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default App;
