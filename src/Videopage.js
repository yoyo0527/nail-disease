import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './design.css'
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppTeams from './components/teams';
import AppFooter from './components/footer';

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
  