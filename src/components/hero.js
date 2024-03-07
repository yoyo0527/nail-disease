import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/graynail3.jpg'),
    title: '灰指甲',
  },
  {
    id: 2,
    image: require('../assets/images/clubbing4.png'),
    title: '杵狀指',
  },
  {
    id: 3,
    image: require('../assets/images/beaus.jpg'),
    title: '博氏線',
  },
  {
    id: 4,
    image: require('../assets/images/blackline.jpg'),
    title: '縱向黑甲症',
  },
  {
    id: 5,
    image: require('../assets/images/whitedot8.png'),
    title: '白甲',
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
                    className="slide-image d-block"
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