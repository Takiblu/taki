import "./index.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { FiveM } from "./components/FiveM";
import { GitHubSection } from "./components/GitHubSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <FiveM />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
