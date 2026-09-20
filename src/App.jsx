import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const features = [
  {
    eyebrow: "Project Management",
    title: "Work together, wherever you are",
    description:
      "Manage your projects with confidence and keep every idea, task and conversation in one beautifully organized workspace.",
    action: "Get started",
    visual: "workspace",
  },
  {
    eyebrow: "Work together",
    title: "Bring your team up to speed",
    description:
      "Connect your work, share feedback and make progress visible with a simple, flexible space built for collaboration.",
    action: "Try Whitepace",
    visual: "orbit",
    reverse: true,
  },
  {
    eyebrow: "Use as Extension",
    title: "Your work, everywhere you are",
    description:
      "Access your notes from your computer, phone or tablet by synchronising with the services you already use.",
    action: "Try Taskey",
    visual: "extension",
    dark: true,
  },
  {
    eyebrow: "100% your data",
    title: "Your data belongs to you",
    description:
      "The app is open source and your notes are saved to an open format, so you will always have access to them.",
    action: "Read more",
    visual: "security",
    reverse: true,
  },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <section className="page-section bg-white">
          <div className="page-container space-y-24 md:space-y-32">
            {features.map((feature) => (
              <FeatureSection key={feature.title} {...feature} />
            ))}
          </div>
        </section>
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
