import type { ImageMetadata } from "astro";

import pumpRoom from "../assets/img/pump-room.jpg";
import sprinklerLayout from "../assets/img/sprinkler-layout.jpg";
import mvwsLayout from "../assets/img/mvws-layout.jpg";
import pumpSkid from "../assets/img/pump-skid.jpg";
import watermistSpray from "../assets/img/watermist-spray.jpg";
import cleanAgentLayout from "../assets/img/clean-agent-layout.jpg";
import gasCylinderBank from "../assets/img/gas-cylinder-bank.jpg";
import co2Cylinders from "../assets/img/co2-cylinders.jpg";
import kitchenSuppressionLayout from "../assets/img/kitchen-suppression-layout.jpg";
import kitchenSuppression from "../assets/img/kitchen-suppression.jpg";
import conventionalAlarm from "../assets/img/conventional-alarm.jpg";
import addressableAlarm from "../assets/img/addressable-alarm.jpg";
import gasDetector from "../assets/img/gas-detector.jpg";
import extinguisher from "../assets/img/extinguisher.png";
import extinguisherWall from "../assets/img/extinguisher-wall.jpg";

export const company = {
  name: "Ignis & Electrical Protection LLP",
  shortName: "Ignis Electrical",
  tagline: "Your safety is our sole focus.",
  phones: ["+91 79063 45834", "+91 96543 78708"],
  email: "igniselectrical@outlook.com",
  website: "https://ignis-india.in",
  address: ["27/229 Trilokpuri", "New Delhi 110091", "India"],
  // Used by the floating WhatsApp button. Set to "" to hide it.
  whatsapp: "917906345834",
  // Optional form backend (Formspree, Web3Forms, etc.). When empty the
  // contact form opens the visitor's email app with the message filled in.
  formEndpoint: "",
  about:
    "Ignis & Electrical Protection LLP is a fire and electrical protection design consultancy, safety auditor, and technology and service provider. We operate nationally from our office in New Delhi.",
};

export const tel = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export interface System {
  name: string;
  summary: string;
  image?: ImageMetadata;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  intro: string;
  image: ImageMetadata;
  // "contain" for cut-out product shots that shouldn't be cropped
  imageFit?: "cover" | "contain";
  systems: System[];
}

export const services: Service[] = [
  {
    slug: "fire-fighting-systems",
    name: "Fire Fighting Systems",
    short: "Hydrant, sprinkler and spray systems, with the pump rooms that drive them.",
    intro:
      "Our fire fighting systems are designed to give uncompromising protection, so your facility is ready for any emergency. We size, design and install the full water-based network, from the pump room to the last sprinkler head.",
    image: pumpRoom,
    systems: [
      {
        name: "Hydrant system",
        summary: "Internal and yard hydrants, hose reels and landing valves fed from a dedicated fire main.",
        image: pumpRoom,
      },
      {
        name: "Sprinkler system",
        summary: "Automatic wet and dry sprinkler networks laid out to the hazard class of each area.",
        image: sprinklerLayout,
      },
      {
        name: "Medium velocity water spray (MVWS)",
        summary: "Deluge spray protection for transformers, cable galleries and storage tanks.",
        image: mvwsLayout,
      },
      {
        name: "Fire pump room",
        summary: "Main, standby and jockey pump sets, skid-mounted or built in place, with controls.",
        image: pumpSkid,
      },
    ],
  },
  {
    slug: "fire-suppression-systems",
    name: "Fire Suppression Systems",
    short: "Clean agent, CO₂, water mist and kitchen systems for rooms water can't protect.",
    intro:
      "Using current suppression technology, we deliver systems tailored to the risk that contain and put out a fire before it spreads, without damaging the equipment around it.",
    image: gasCylinderBank,
    systems: [
      {
        name: "FM200 & Novec 1230 clean agent",
        summary: "Total flooding for server rooms, control rooms and archives. Safe for people and electronics.",
        image: cleanAgentLayout,
      },
      {
        name: "CO₂ flooding system",
        summary: "High-pressure CO₂ banks for unoccupied electrical rooms, DG sets and machinery spaces.",
        image: co2Cylinders,
      },
      {
        name: "Water mist system",
        summary: "Fine mist that cools and smothers a fire with a fraction of the water a sprinkler uses.",
        image: watermistSpray,
      },
      {
        name: "Kitchen hood suppression",
        summary: "Wet chemical protection over cooking lines, linked to automatic fuel shut-off.",
        image: kitchenSuppression,
      },
      {
        name: "Cylinder banks & manifolds",
        summary: "Agent storage, manifolds and release panels installed and commissioned as one system.",
        image: gasCylinderBank,
      },
    ],
  },
  {
    slug: "fire-alarm-systems",
    name: "Fire Alarm Systems",
    short: "Conventional and addressable detection, plus gas leak detection.",
    intro:
      "Our fire alarm systems detect accurately and respond fast, protecting lives and property with dependable early warning.",
    image: addressableAlarm,
    systems: [
      {
        name: "Conventional fire alarm",
        summary: "Zoned detection for smaller sites, with smoke and heat detectors, call points and sounders.",
        image: conventionalAlarm,
      },
      {
        name: "Addressable fire alarm",
        summary: "Every device reports its exact location, and the panel can control fans, lifts, dampers and pumps.",
        image: addressableAlarm,
      },
      {
        name: "Gas leak detection",
        summary: "LPG, PNG and toxic gas detectors with local alarms and automatic shut-off.",
        image: gasDetector,
      },
    ],
  },
  {
    slug: "refilling-hydro-testing",
    name: "Refilling & Hydro Testing",
    short: "Extinguisher refilling and pressure testing, so every unit works when pulled.",
    intro:
      "Through expert refilling and thorough hydrostatic testing, we make sure your fire safety equipment is always charged and ready.",
    image: extinguisher,
    imageFit: "contain",
    systems: [
      {
        name: "Extinguisher refilling",
        summary: "ABC powder, CO₂, foam, water and clean agent extinguishers, refilled and tagged.",
        image: extinguisher,
      },
      {
        name: "Hydrostatic pressure testing",
        summary: "Cylinder shells tested at rated pressure, with records kept for inspection.",
        image: co2Cylinders,
      },
      {
        name: "Supply & replacement",
        summary: "New extinguishers and signage where a unit fails testing or a layout changes.",
        image: extinguisherWall,
      },
    ],
  },
  {
    slug: "annual-maintenance",
    name: "Annual Maintenance",
    short: "Scheduled servicing that keeps installed systems compliant and working.",
    intro:
      "Our annual maintenance contracts keep your fire protection systems in peak condition and in line with the safety standards they were designed to.",
    image: pumpSkid,
    systems: [
      {
        name: "Preventive maintenance visits",
        summary: "Scheduled checks of pumps, valves, panels, detectors and suppression systems.",
        image: pumpSkid,
      },
      {
        name: "Breakdown support",
        summary: "Fault diagnosis and repair to bring a system back into service.",
        image: pumpRoom,
      },
      {
        name: "Service records",
        summary: "Visit reports and logs ready for fire NOC renewals and insurer audits.",
        image: conventionalAlarm,
      },
    ],
  },
  {
    slug: "fire-training-audit",
    name: "Fire Training & Audit",
    short: "Site safety audits, staff training and evacuation drills.",
    intro:
      "We provide thorough fire safety training and audits, giving your team the knowledge and tools to keep the site safe and compliant.",
    image: extinguisherWall,
    systems: [
      {
        name: "Fire & electrical safety audit",
        summary: "A site inspection against code, with a written report of gaps ranked by risk.",
        image: kitchenSuppressionLayout,
      },
      {
        name: "Staff training",
        summary: "Hands-on extinguisher use, alarm response and first actions in a fire.",
        image: extinguisherWall,
      },
      {
        name: "Mock evacuation drills",
        summary: "Planned drills that test exits, assembly points and fire warden roles.",
        image: conventionalAlarm,
      },
    ],
  },
];

// The way Ignis takes on a project, from the company description.
export const process = [
  {
    name: "Design",
    text: "Hazard study, system selection, drawings and hydraulic calculations.",
  },
  {
    name: "Execute",
    text: "Turnkey installation or project management support for your contractor.",
  },
  {
    name: "Audit & train",
    text: "Commissioning checks, safety audits and training for the people on site.",
  },
  {
    name: "Maintain",
    text: "Annual maintenance so the system still works years after handover.",
  },
];

// Capability cards, in the spirit of NewAge's six "why us" tiles.
export const capabilities = [
  {
    icon: "ri-draft-line",
    title: "Design consultancy",
    text: "Fire and electrical protection designed around your building and its risks.",
  },
  {
    icon: "ri-clipboard-line",
    title: "Safety audits",
    text: "Independent inspections that show what needs fixing before an inspector does.",
  },
  {
    icon: "ri-team-line",
    title: "Training",
    text: "Practical fire safety training for staff, wardens and maintenance teams.",
  },
  {
    icon: "ri-building-2-line",
    title: "Project management",
    text: "PMC support that keeps contractors on drawing, on schedule and on code.",
  },
  {
    icon: "ri-key-2-line",
    title: "Turnkey execution",
    text: "One team from design through supply, installation and commissioning.",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Annual management",
    text: "Maintenance contracts that keep systems inspected, serviced and recorded.",
  },
];

// TODO(ignis): confirm these sectors match the work you take on.
export const industries = [
  { icon: "ri-building-line", name: "Commercial buildings & offices" },
  { icon: "ri-store-2-line", name: "Malls & retail" },
  { icon: "ri-hospital-line", name: "Hospitals & healthcare" },
  { icon: "ri-hotel-line", name: "Hotels & restaurants" },
  { icon: "ri-server-line", name: "Data centres & server rooms" },
  { icon: "ri-community-line", name: "Residential towers" },
  { icon: "ri-building-4-line", name: "Factories & warehouses" },
  { icon: "ri-flashlight-line", name: "Electrical substations" },
  { icon: "ri-graduation-cap-line", name: "Schools & institutions" },
];

// Add client names and certifications here. Each section only appears on
// the site once it has entries, so nothing placeholder ever goes live.
export const clients: string[] = [];
export const certifications: { name: string; detail: string }[] = [];

export const heroSlides = [
  { image: pumpRoom, caption: "Fire pump room, hydrant & sprinkler system" },
  { image: gasCylinderBank, caption: "Clean agent suppression cylinder bank" },
  { image: pumpSkid, caption: "Skid-mounted fire pump set" },
];
