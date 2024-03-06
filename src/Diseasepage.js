import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../design.css'
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppWorks from './components/works';
import AppTestimonials from './components/testimonials';
import AppBlog from './components/blog';
import AppFooter from './components/footer';

export function Disease() {
    return (
      <div className="home">
        <header id='header'>
          <AppHeader />
        </header>
        <main>
          <AppHero />
          <AppWorks />
          {/* <AppTeams /> */}
          <AppTestimonials />
          <AppBlog />
        </main>
        <footer id="footer">
          <AppFooter />
        </footer>
      </div>
    );
  }
  