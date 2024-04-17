import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/Carouselimg.png'),
  },
  {
    id: 2,
    image: require('../assets/images/Carouselimg2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/Carouselimg3.jpg'),
  },
  {
    id: 4,
    image: require('../assets/images/Carouselimg4.jpg'),
  },

]

function AppHero() {
  return (
    <section id="home" >
       <Carousel className="custom-carousel">
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="slide-image d-block img-fluid"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  {/* <Carousel.Caption>
                    <h2 style={{color:'white'}}><b>{hero.title}</b></h2>
                  </Carousel.Caption>              */}
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;