import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AppHeader from './header';
import AppHero from './hero';
import AppAbout from './about';
import AppServices from './services';
import AppWorks from './works';
import AppTeams from './teams';
import AppTestimonials from './testimonials';
import AppPricing from './pricing';
import AppBlog from './blog';
import AppContact from './contact';
import AppFooter from './footer';

export function Home() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        {/* <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact /> */}
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export function Purpose() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppServices />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

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
        {/* <AppTestimonials /> */}
        <AppBlog />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export function Videopage() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        {/* <AppWorks /> */}
        <AppTeams />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}
