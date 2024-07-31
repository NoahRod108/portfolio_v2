import { Hero, AboutMe, Experience, Projects, Contact } from "./sections";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <main className="relative bg-primary">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Projects />
    </section>
    <section className="padding">
      <AboutMe />
    </section>
    <section className="padding">
      <Experience />
    </section>
    <section className="padding">
      <Contact />
    </section>
    <Footer />
  </main>
);

export default App;
