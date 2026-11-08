// src/pages/public/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { demoStations } from "../../demoData/stations";
import { Card } from "../../components/common/Card";

const Hero = () => (
  <section className="container mt-xl text-center" id="hero">
    <h1 className="mb-sm">Find a charger. Know your place. Keep moving.</h1>
    <p className="mb-md">
      Plug&Sync helps EV drivers discover nearby charging stations,
      see real‑time availability, join digital queues and track their turn.
    </p>
    <div className="flex justify-center gap-sm">
      <Link to="/demo-access" className="btn-primary">Get Started</Link>
      <a href="#how-it-works" className="btn-outline">How It Works</a>
    </div>
    {/* Placeholder visual */}
    <div
      className="mt-md"
      style={{
        height: "300px",
        background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary-muted-lime))",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-md)",
      }}
    />
  </section>
);

const HowItWorks = () => (
  <section className="container mt-xl" id="how-it-works">
    <h2 className="text-center mb-md">How It Works</h2>
    <div className="flex justify-between gap-md flex-wrap">
      {["Discover a charging station.", "Check reported availability.", "Join the digital queue.", "Track your charging turn."]
        .map((txt, i) => (
          <Card key={i} className="flex-1" style={{ minWidth: "200px" }}>
            <h3 className="text-center">Step {i + 1}</h3>
            <p className="text-center">{txt}</p>
          </Card>
        ))}
    </div>
  </section>
);

const Features = () => (
  <section className="container mt-xl" id="features">
    <h2 className="text-center mb-md">Features</h2>
    <div className="flex justify-between gap-md flex-wrap">
      {[
        ["Charging Station Discovery", "Locate stations, view address and connector types."],
        ["Digital Queue Management", "Join queues without waiting physically."],
        ["Queue Position Tracking", "See your place in real‑time."],
        ["Charging Session Updates", "Get notifications when your turn starts."],
        ["Station Management", "(Demo) Managers can edit charger status."]
      ].map(([title, desc], i) => (
        <Card key={i} className="flex-1" style={{ minWidth: "200px" }}>
          <h3 className="text-center">{title}</h3>
          <p className="text-center">{desc}</p>
        </Card>
      ))}
    </div>
  </section>
);

const StationPreview = () => (
  <section className="container mt-xl" id="station-preview">
    <h2 className="text-center mb-md">Station Discovery Preview (Demo)</h2>
    <div className="flex flex-wrap justify-between gap-md">
      {demoStations.map(st => (
        <Card key={st.id} className="mb-sm" style={{ minWidth: "250px" }}>
          <h4>{st.name}</h4>
          <p>{st.locality} (DEMO DATA)</p>
          <p>Connectors: {st.connectorTypes.join(", ")}</p>
          <p>Power: {st.power} kW</p>
          <p>Available: {st.availableChargers}/{st.totalChargers}</p>
        </Card>
      ))}
    </div>
    <p className="text-center mt-sm" style={{ fontStyle: "italic" }}>
      These are example localities in Indore – **DEMO DATA only**.
    </p>
  </section>
);

const WhyPlugSync = () => (
  <section className="container mt-xl" id="why">
    <h2 className="text-center mb-md">Why Plug&Sync?</h2>
    <p className="text-center">
      Uncertainty at charging stations wastes time and battery life.
      Plug&Sync reduces that friction by giving you clear visibility
      into charger availability and queue coordination, letting you plan
      trips confidently.
    </p>
  </section>
);

const FinalCTA = () => (
  <section className="container mt-xl text-center" id="cta">
    <h2 className="mb-sm">Ready to try the demo?</h2>
    <Link to="/demo-access" className="btn-primary">Explore Plug&Sync</Link>
    <p className="mt-sm">Development Demo — Not Real Authentication</p>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <HowItWorks />
    <Features />
    <StationPreview />
    <WhyPlugSync />
    <FinalCTA />
  </>
);

export default Home;
