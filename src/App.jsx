import "./app.scss"
import Hero from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";

const App = () => {
  return <div>
      <section>
        <Navbar/>
        <Hero/>
      </section>
      <section><Services/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>;
};

export default App;
