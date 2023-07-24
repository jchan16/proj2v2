import Container from 'react-bootstrap/Container';
import Slide from './components/slide';
import Barf from './components/barf';

function Homef(){
  return (
    
    <div className="Content">
      <Barf />

    <h3 className="display-4 text-center mt-5"> Bienvenue au Club de Football Addersfield</h3>

    <Container>
      <div className="mx-auto w-50 mt-5">
        <p>Nous sommes le Club de Football Addersfield. CFA a été créée pour offrir aux joueurs de la communauté l'occasion de se réunir, de développer leurs compétences et de profiter du beau jeu de soccer. Dirigé par des entraîneurs dévoués et passionnés par le sport, CFA offre un environnement favorable et inclusif pour les joueurs de tous âges et niveaux de compétence. Qu'il s'agisse de ligues de jeunes, de tournois pour adultes ou de matchs amicaux, CFA déborde toujours d'énergie et d'un esprit de rivalité amicale. En mettant l'accent sur le travail d'équipe, l'esprit sportif et la croissance personnelle, CFA est une partie dynamique de l'Addersfield, rassemblant les gens et favorisant l'amour du jeu.</p>
      </div>
    </Container>
      <div className ="d-flex mx-auto justify-content-center mt-5 w-50 h-50">
        <Slide />
      </div>

  </div>
  );

}

export default Homef;