import { Hero, AboutMe, Experience, Projects, Contact } from "./sections"
import Nav from './components/Nav';

const App = () => (
  <main className="relative bg-primary">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <AboutMe />
    </section>
    <section className="padding">
      <Experience />
    </section>
    <section className="padding">
      <Projects />
    </section>
    <section className="padding">
      <Contact />
    </section>
  </main>
)

export default App;