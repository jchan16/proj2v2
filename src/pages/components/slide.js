import Carousel from 'react-bootstrap/Carousel';

function Slide() {
    // add more detialed alts of each image later
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100 p-0"
          src={require('./images/club.jpg')}
          alt="This is the first image of the carousel. A red bricked building in the the center of the image. The building has arching windows that cover its side and a glass roof.
          The weather outside is rainy and the sky is gray from the all clouds. The foreground has guard rails that encircle a soccer field in the middle ground"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100 p-0"
          src={require('./images/team.jpg')}
          alt="This is the second image of the carousel. The image depicts 6 males huddled together, their arms around eachothers
          shoulders on a empty grass field with the sun behind them. They are all wearing the same uniform, plain red jersey with a white stripe going down the sides
          of the shirt and red shorts. "
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100 p-0"
          src={require('./images/play.jpg')}
          alt="This is the third image of the carousel. The image depicts a male teenager with brown hair and blue jersey passing a soccer ball with his left foot. To the right
          of the blue jersey player, another male teenager with brown straight hair in a red jeresey is recoiling with his arms. To to left of the blue jersey player, a darker skinned player in a red jersey in observing"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default Slide;