// src/pages/demo/DemoAccess.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const roles = [
  { name: "EV User", desc: "Discover stations and manage your charging queue.", link: "/app/user" },
  { name: "Station Manager", desc: "Manage station chargers, queues and charging sessions.", link: "/app/manager" },
  { name: "System Admin", desc: "Monitor the platform, stations, managers and users.", link: "/app/admin" },
];

const Card = ({ role }) => (
  <div className="card flex-1 mb-sm" style={{ minWidth: "250px" }}>
    <h3 className="text-center">{role.name}</h3>
    <p className="text-center">{role.desc}</p>
    <div className="flex justify-center mt-sm">
      <NavLink to={role.link} className="btn-primary">Explore Dashboard</NavLink>
    </div>
  </div>
);

const DemoAccess = () => (
  <section className="container mt-xl text-center">
    <h2 className="mb-md">Explore Plug&Sync</h2>
    <p className="mb-md">Development Demo — Not Real Authentication</p>
    <div className="flex justify-between flex-wrap gap-md">
      {roles.map(r => (
        <Card key={r.name} role={r} />
      ))}
    </div>
  </section>
);

export default DemoAccess;
