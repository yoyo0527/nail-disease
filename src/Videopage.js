import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../design.css'
import AppHeader from './header';
import AppHero from './hero';
import AppTeams from './teams';
import AppFooter from './footer';

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
  