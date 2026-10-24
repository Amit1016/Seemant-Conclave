// =====================================================================
//  ALL WEBSITE CONTENT LIVES IN THIS ONE FILE.
//  Edit the text below, save, and push to GitHub — the site updates itself.
//
//  Photos: put image files in  public/images/  and write the path here,
//  e.g.  image: "/images/village-stay.jpg"
//  Leave  image: null  to show a grey placeholder box instead.
// =====================================================================

export const site = {
  name: "Seemant Youth Conclave",
  tagline: "Journeys to India's first villages",
  description:
    "A youth conclave that takes students to India's border villages to understand their lifestyle, challenges and opportunities.",
  organiser: "[ORGANISING INSTITUTION]",
  email: "connect@example.org",
  phone: "[PHONE]",
  location: "[CITY], [STATE], India",
  instagram: "https://www.instagram.com/[HANDLE]",
  instagramHandle: "@[HANDLE]",

  // Paste your Google Form links here. Until then, buttons go to the Register page.
  applyFormUrl: "", // e.g. "https://forms.gle/xxxxxxxx"
  applyFormEmbedUrl: "", // the form's "Send > <> embed" src link
  volunteerFormUrl: "",

  // The edition currently open for applications (shown in the top button).
  currentEdition: { label: "Conclave 2027", slug: "conclave-2027" },
};

// Scrolling photo strip at the top of the home page
export const stripPhotos = [
  { tag: "Village stay", caption: "Evening with a host family", image: null },
  { tag: "Dialogue", caption: "Gram sabha with the sarpanch", image: null },
  { tag: "First village", caption: "Walk to the last road", image: null },
  { tag: "Livelihoods", caption: "Artisans at work", image: null },
  { tag: "Landscape", caption: "Sunrise over the border plains", image: null },
  { tag: "Conclave", caption: "Team presentations", image: null },
  { tag: "Culture", caption: "Folk music by the fire", image: null },
  { tag: "Learning", caption: "School visit and games", image: null },
];

// Three themes of the programme
export const pillars = [
  {
    icon: "home",
    title: "Live the lifestyle",
    text: "Stay with families and share the daily rhythms of life at the edge of the country.",
  },
  {
    icon: "alert",
    title: "Understand the challenges",
    text: "Hear first-hand about distance, water, health, schooling, migration and security.",
  },
  {
    icon: "sprout",
    title: "Find the opportunities",
    text: "Work with villagers on ideas in tourism, enterprise, technology and policy.",
  },
];

export const partners = [
  {
    name: "[ORGANISING INSTITUTION]",
    description: "[One-line description of the institution]",
    url: "#",
    logo: null,
  },
  {
    name: "[PARTNER ORGANISATION]",
    description: "[One-line description of the partner]",
    url: "#",
    logo: null,
  },
];

export const audience = [
  {
    title: "Future policymakers",
    text: "See how governance and schemes reach the farthest village.",
  },
  {
    title: "Curious explorers",
    text: "Experience the culture, food and landscapes of the frontier.",
  },
  {
    title: "Aspiring changemakers",
    text: "Find real problems and work on them with the people who face them.",
  },
];

export const gains = [
  { title: "Ground-level understanding", text: "Link what you read about border regions to lives you have seen." },
  { title: "Critical thinking", text: "Question assumptions and form your own informed views." },
  { title: "Lasting connections", text: "Friendships with peers, mentors and village communities." },
  { title: "Team problem-solving", text: "Build and pitch ideas with students from other institutions." },
  { title: "A national perspective", text: "See why the frontier matters to the whole country." },
  { title: "Future opportunities", text: "Pathways to internships, research and follow-up projects." },
];

export const gallery = [
  { alt: "Students with villagers", image: null },
  { alt: "Village landscape", image: null },
  { alt: "Community dialogue", image: null },
  { alt: "Local crafts", image: null },
  { alt: "Evening reflection circle", image: null },
  { alt: "Team at work", image: null },
  { alt: "Group photo", image: null },
];

export const mentors = [
  { theme: "Governance", name: "[NAME]", role: "[Role]", org: "[Organisation]", image: null },
  { theme: "Border development", name: "[NAME]", role: "[Role]", org: "[Organisation]", image: null },
  { theme: "Rural livelihoods", name: "[NAME]", role: "[Role]", org: "[Organisation]", image: null },
  { theme: "Grassroots innovation", name: "[NAME]", role: "[Role]", org: "[Organisation]", image: null },
];

// Field notes (testimonials). Add real ones after the first edition.
export const testimonials = [
  {
    institution: "[INSTITUTION]",
    place: "[Village] • [Month Year]",
    quote: "[Participant reflection, one or two sentences.]",
    programme: "[Programme / degree]",
  },
  {
    institution: "[INSTITUTION]",
    place: "[Village] • [Month Year]",
    quote: "[Participant reflection, one or two sentences.]",
    programme: "[Programme / degree]",
  },
  {
    institution: "[INSTITUTION]",
    place: "[Village] • [Month Year]",
    quote: "[Participant reflection, one or two sentences.]",
    programme: "[Programme / degree]",
  },
];

// Each conclave edition gets its own page at /conclaves/<slug>/
export const conclaves = [
  {
    slug: "conclave-2027",
    title: "Conclave 2027",
    edition: "1st Edition",
    location: "[BORDER DISTRICT, STATE]",
    dates: "[START – END DATE]",
    status: "Applications open", // or "Completed"
    seats: "[N]",
    fee: "[FEE or 'Fully sponsored']",
    deadline: "[APPLICATION DEADLINE]",
    image: null,
    summary:
      "Seven days in the border villages of [DISTRICT], living with host families and meeting the people who shape life at the frontier.",
    villages: [
      { name: "[VILLAGE NAME]", note: "[Distance from border, what it is known for]", image: null },
      { name: "[VILLAGE NAME]", note: "[Distance from border, what it is known for]", image: null },
      { name: "[VILLAGE NAME]", note: "[Distance from border, what it is known for]", image: null },
    ],
    days: [
      { day: "Day 01", title: "Arrival", text: "Orientation on the region's history, geography and border life." },
      { day: "Days 02–03", title: "Live the village", text: "Stay with host families and join their daily routines." },
      { day: "Day 04", title: "Listening to challenges", text: "Dialogues with sarpanches, teachers, health workers and youth." },
      { day: "Day 05", title: "Guardians of the frontier", text: "Interaction with border administration [subject to permission]." },
      { day: "Day 06", title: "Meeting changemakers", text: "NGOs, officials and local entrepreneurs share what works." },
      { day: "Day 07", title: "The conclave", text: "Teams present opportunity ideas back to the community." },
    ],
  },
];

// Blog posts appear on /blog/ and each gets a page at /blog/<slug>/
export const posts = [
  {
    slug: "why-the-first-villages",
    title: "Why we call them the first villages",
    category: "Our Idea",
    date: "[Month Year]",
    readTime: "4 min read",
    image: null,
    excerpt: "The thinking behind Seemant Youth Conclave, and why the border is the right place to start.",
    body: [
      "[Write the first paragraph of your story here.]",
      "[Each item in this list becomes a new paragraph on the page.]",
      "[Add as many paragraphs as you like.]",
    ],
  },
  {
    slug: "preparing-for-the-first-edition",
    title: "Preparing for our first edition",
    category: "Updates",
    date: "[Month Year]",
    readTime: "3 min read",
    image: null,
    excerpt: "Site visits, conversations with sarpanches and planning the journey for our first cohort.",
    body: [
      "[Write the first paragraph of your story here.]",
      "[Each item in this list becomes a new paragraph on the page.]",
    ],
  },
];

export const faqs = [
  { q: "Who can apply?", a: "[Eligibility: UG / PG / PhD students from any discipline, age limits, etc.]" },
  { q: "Is there a fee?", a: "[Fee details, what it covers, scholarships if any.]" },
  { q: "Are travel, stay and food arranged?", a: "[Pick-up point, accommodation, meals.]" },
  { q: "Do I need permits to visit the border area?", a: "[Permits and ID requirements, and who arranges them.]" },
  { q: "Will I get a certificate?", a: "[Certificate or credit details.]" },
];

export const team = [
  { name: "[NAME]", role: "Programme Lead", image: null },
  { name: "[NAME]", role: "Field Coordinator", image: null },
  { name: "[NAME]", role: "Student Coordinator", image: null },
];
