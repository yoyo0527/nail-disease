import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AppHeader from './header';
import AppHero from './hero';
import AppAbout from './about';
import AppServices from './services';
import AppWorks from './works';
import AppTeams from './teams';
import AppBlog from './blog';
import AppFooter from './footer';
import Beforetestpage from './Beforetest';
import Aftertestpage from './Aftertest';

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

export function Beforetest() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <Beforetestpage/>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export function Aftertest() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        {/* <AppWorks /> */}
        <Aftertestpage/>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}
