// 管理各個頁面用的components
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
import AppTestimonials from './testimonials';
import AppPricing from './pricing';
import AppContact from './contact';
import Detect from './detect';

// 首頁
export function Home() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        {/* <AppWorks /> */}
        {/* <AppTeams /> */}
        {/* <AppTestimonials /> */}
        {/* <AppPricing /> */}
        {/* <AppBlog /> */}
        {/* <AppContact /> */}
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

// 辨識的疾病
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

// 運用的技術
export function Skill() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppTestimonials />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

// 觀看影片
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

// 前測
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

// 後測
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

//體驗
export function NailDetect() {
  return (
    <div className="home">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <Detect/>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}
