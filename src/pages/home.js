import Container from 'react-bootstrap/Container';
import Slide from './components/slide';
import Bar from './components/bar';

function Home(){
  return (
    
    <div className="Content">
      <Bar />

    <h3 className="display-4 text-center mt-5"> Welcome to Addersfield Soccer Club</h3>

    <Container bg="secondary">
      <div className="mx-auto w-50 mt-5">
        <p>We are Addersfield Soccer Club. ASC was formed to provide an opportunity for players in the community to come together, develop their skills, and enjoy the beautiful game of soccer. Led by dedicated coaches who are passionate about the sport, ASC offers a supportive and inclusive environment for players of all ages and skill levels. Whether it's youth leagues, adult tournaments, or friendly matches, ASC is always buzzing with energy and a spirit of friendly rivalry. With a focus on teamwork, sportsmanship, and personal growth, ASC  is a vibrant part of the Addersfield, bringing people together and fostering a love for the game</p>
      </div>
    </Container>
      <div className ="d-flex mx-auto justify-content-center mt-5 w-50 h-50">
        <Slide />
      </div>

  </div>
  );

}

export default Home;