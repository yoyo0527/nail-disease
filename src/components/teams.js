// 觀看影片頁面
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>影片演示</h2>
        </div>
        <Row>
          <iframe className='video-set' src="https://www.youtube.com/embed/UflwfRh_nZY" allowFullScreen/>
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;