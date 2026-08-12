import type { ArticleData } from "./types";

export const whatHappensDuringAService: ArticleData = {
  slug: "what-happens-during-an-aircon-service",
  title: "What Actually Happens During an Aircon Service: A Step-by-Step Walkthrough",
  category: "Servicing & Maintenance",
  excerpt:
    "From the moment a technician arrives to the final check before they leave, here's what a general service, chemical wash, and chemical overhaul each actually involve.",
  publishedDate: "11 Aug 2026",
  readTime: "6 min read",
  intro:
    "Most homeowners book an aircon service without knowing exactly what happens once the technician arrives, which makes it hard to tell whether you're getting a thorough job or a rushed one. The three main tiers of service — general, chemical wash, and chemical overhaul — differ mainly in how much of the unit is actually dismantled. Here's what each one looks like in practice.",
  sections: [
    {
      h: "General servicing: the accessible clean",
      body: "A general service starts with the filter, front panel, and blower wheel — the spinning component that pushes cold air into the room, and one of the most common reasons a unit stops feeling cold once it's coated in dust. The filter is removed and cleaned, the panel wiped down, and the blower wheel vacuumed and brushed. From there, the drainage tray is flushed and the condensate pipe vacuumed; a blocked drain is the single most common cause of water leaking from an indoor unit, so this step alone prevents a lot of future call-outs. The visit wraps up with an electrical check and fan motor tighten, since loose connections reduce efficiency over time and are far cheaper to catch early than to repair after they fail. None of this requires removing the unit's internal components, which is why a general service takes around 30 to 45 minutes per unit.",
    },
    {
      h: "Chemical wash: when components come out",
      body: "A chemical wash goes further. The technician sets up a protective cover and collection bag first, so no dirty water runs down the wall or pools on the floor. Filters are soaked and scrubbed with a cleaning agent, and — this is the part a general service can't reach — the blower wheel is fully removed and scrubbed, since it's deep inside the unit and often carries mould that surface cleaning never touches. The fan coil gets the same treatment: cleaning compound applied directly, then flushed through with water to break down mould and bacteria at the source rather than just the surface. Drainage is vacuumed and flushed the same way as a general service, and every internal surface is dried before reassembly — reassembling a wet unit traps moisture and just brings the mould back faster. A chemical wash typically runs 45 to 60 minutes per unit, longer than a general service because the solution needs time to work before rinsing.",
    },
    {
      h: "Chemical overhaul: full dismantle and rebuild",
      body: "A chemical overhaul is every step of a chemical wash, but starting from a full dismantle rather than cleaning components in place. Front cover, blower wheel, water tray, filters, and drainage system are all individually removed — nothing is flushed while still attached to the unit. Each part is then chemically treated, cleaned, and dried on its own before the entire unit is rebuilt from scratch: every component reattached, sealed, and tested before the technician finishes. This is the tier reserved for units that haven't responded to a chemical wash, or that haven't been properly serviced in 12 months or more, and it takes noticeably longer — around 60 to 90 minutes per unit — because a full dismantle and rebuild simply involves more steps than cleaning in place.",
    },
    {
      h: "What should happen at the end, regardless of tier",
      body: "Whichever service you've booked, the visit should end with a final check, not just a pack-up. That means confirming the unit powers on correctly, checking that cooling has actually improved, and the technician cleaning up the work area completely before leaving. If something's found during the visit that the booked service won't fix — refrigerant levels, a failing compressor, a component that needs replacing — you should be told clearly what it is and what it would cost to address, before any additional work happens, not after.",
    },
  ],
  citation: {
    label: "The Complete Guide to Aircon Servicing in Singapore — AirconServices.sg",
    url: "https://airconservices.sg/blog/aircon-servicing-singapore",
  },
  ctaHeading: "Ready to book a service?",
  ctaBody: "WhatsApp us your address and unit count. We'll confirm the right tier for your situation and a slot within the hour.",
};
