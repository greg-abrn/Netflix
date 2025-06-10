const Section = (props) => {
  return (
    <section>
      <h2>{props.title.category}</h2>
      <div>
        {title.images.map((url, i) => {
          // console.log(elem); https://res.cloudinary.com/lereacteur-apollo/image/upload/v1643642943/react-new-exercices/netflix2022/reprendre%20avec/AAAABd4eOiOZFaZT1-9l68Ra0uC-4kl3zMSPkeA5TyDu8v_KNgAAvifmM8boe5G2kexKSdk2uznXcDIJIlBoz4RA6p-q0_E_xg9maq.webp
          return (
            <img key={i} src={url} alt="Couverture d'un film ou d'une série" />
          );
        })}
      </div>
    </section>
  );
};

export default Section;
