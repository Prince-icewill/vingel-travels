// Central content store. Swap these values for CMS/API data later —
// components never hardcode copy, so this is the only file editors need to touch.

// Direct Pexels CDN links — free for commercial use, no attribution required,
// no API key needed. IDs below were sourced from real Pexels photo pages.
export const pexels = (id, width = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

// Reusable general-purpose travel photography (hero, about, gallery filler)
export const stockPhotos = {
  passportPlanner: 7235894, // flat lay: passport, map, compass
  passportCompass: 7235904, // passport + compass close-up
  consultation: 8441861, // advisor meeting with clients
};

export const brand = {
  name: "Vingel Travels & Tours",
  shortName: "Vingel Travels",
  phone: "+234 803 638 6134",
  phoneHref: "tel:+2348036386134",
  whatsappHref: "https://wa.me/2348036386134",
  email: "info@vingeltravels.com",
  location: "Lagos, Nigeria",
  hours: "Mon–Sat: 8AM–6PM (WAT) · 24/7 WhatsApp support",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Eligibility Checker", href: "/eligibility" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = [
  { value: "1,000+", label: "Travelers served" },
  { value: "95%", label: "Visa success rate" },
  { value: "50+", label: "Destinations" },
  { value: "24/7", label: "Advisor support" },
];

// Consultation is intentionally first — every other service routes back to it.
export const services = [
  {
    slug: "consultation",
    icon: "compass",
    title: "Travel & Visa Consultation",
    tag: "Start here",
    description:
      "A one-on-one session with a Vingel advisor to map the right visa category, route, and timeline before you spend a naira on documents.",
    points: ["30-min strategy session", "Personalized document roadmap", "Honest eligibility assessment"],
    featured: true,
  },
  {
    slug: "visa-assistance",
    icon: "file-text",
    title: "Visa Assistance",
    description:
      "End-to-end visa filing across tourist, business, study, work, family, medical, and transit categories, handled by advisors who track embassy requirements weekly.",
    points: ["Tourist · Business · Study · Work", "Family · Medical · Transit", "95% success rate"],
  },
  {
    slug: "flight-booking",
    icon: "plane",
    title: "Flight Booking",
    description:
      "International and domestic fares sourced across airline and consolidator networks, plus group booking desks for 10 or more travelers.",
    points: ["International & domestic", "Group bookings", "Fare-hold options"],
  },
  {
    slug: "hotel-reservations",
    icon: "hotel",
    title: "Hotel Reservations",
    description:
      "From budget-friendly stays to five-star and boutique properties worldwide, matched to your itinerary and visa's proof-of-accommodation needs.",
    points: ["Worldwide inventory", "Luxury & boutique", "Budget-friendly options"],
  },
  {
    slug: "travel-insurance",
    icon: "shield-check",
    title: "Travel Insurance",
    description:
      "Most Schengen and long-stay visas require proof of medical coverage — we match you to a policy that satisfies embassy rules and protects your trip.",
    points: ["Medical coverage", "Trip cancellation", "Embassy-compliant policies"],
  },
  {
    slug: "study-abroad",
    icon: "graduation-cap",
    title: "Study Abroad",
    description:
      "Guidance from university shortlist to admission letter to student visa filing, across the UK, Canada, US, and EU institutions.",
    points: ["University shortlisting", "Admission support", "Student visa filing"],
  },
  {
    slug: "holiday-packages",
    icon: "palmtree",
    title: "Holiday Packages",
    description:
      "Curated getaways for couples, families, and solo adventurers — from all-inclusive resort weeks to multi-country itineraries.",
    points: ["Family & couple packages", "Luxury escapes", "Adventure itineraries"],
  },
  {
    slug: "corporate-travel",
    icon: "briefcase",
    title: "Corporate Travel",
    description:
      "A dedicated desk for business travel management — booking, itinerary changes, and reporting for teams that travel often.",
    points: ["Dedicated account manager", "Itinerary management", "Consolidated invoicing"],
  },
  {
    slug: "airport-pickup",
    icon: "car",
    title: "Airport Pickup",
    description: "Meet-and-greet and private transfers on arrival, so the first hour of a trip feels as premium as the rest of it.",
    points: ["Private chauffeurs", "Flight tracking", "Meet & greet"],
  },
  {
    slug: "document-verification",
    icon: "folder-open",
    title: "Document Verification",
    description: "A professional pass on your documents before submission, catching the small errors that cause embassy delays.",
    points: ["Pre-submission review", "Translation guidance", "Notarization support"],
  },
  {
    slug: "visa-appeal",
    icon: "scale",
    title: "Visa Appeal Assistance",
    description: "If you've been refused, we review the refusal letter, identify what went wrong, and rebuild a stronger application.",
    points: ["Refusal letter review", "Case rebuild", "Re-application strategy"],
  },
];

export const whyChoose = [
  { icon: "compass", title: "Professional Consultation", text: "Every journey starts with an honest, expert assessment — not a sales pitch." },
  { icon: "trending-up", title: "High Success Rate", text: "A 95% visa success rate built on document precision and embassy familiarity." },
  { icon: "handshake", title: "Trusted Experts", text: "Advisors who track visa policy changes across 50+ destinations, weekly." },
  { icon: "zap", title: "Fast Response", text: "Real answers within hours, not days — WhatsApp support runs 24/7." },
  { icon: "search", title: "Transparent Process", text: "Clear fees, clear timelines, and no requirement surprises mid-application." },
  { icon: "star", title: "Client Satisfaction", text: "Over 1,000 travelers served, from first-time tourists to relocating families." },
  { icon: "globe", title: "Worldwide Destinations", text: "Active guidance across North America, Europe, the Gulf, and beyond." },
  { icon: "landmark", title: "Proven Experience", text: "Years of on-the-ground experience navigating embassy requirements." },
];

const destinationsRaw = [
  {
    code: "CA", name: "Canada", photoId: 11862814, region: "North America", visaTime: "2–4 weeks", fee: "₦200,000",
    blurb: "Study, work, and visitor pathways with strong PR routes.",
    overview: "Canada remains one of the most sought-after destinations for Nigerians — combining world-class universities, clear skilled-migration pathways, and a visitor visa process that rewards well-documented applications.",
    requirements: ["Valid international passport (6+ months validity)", "Proof of funds / sponsorship", "Purpose-specific supporting documents (admission letter, invitation, employment letter)", "Travel history (if any)", "Biometrics appointment"],
    embassy: "Canadian High Commission, Abuja",
    weather: "Cold winters (Nov–Mar), mild summers (Jun–Aug)",
    bestTime: "June to September",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    faqs: [
      { q: "Do I need an invitation letter for a Canada visitor visa?", a: "Not mandatory, but it strengthens your application if you're visiting family or friends." },
      { q: "How much should I show in savings?", a: "There's no fixed figure — advisors typically recommend enough to comfortably cover your stay, assessed case by case." },
    ],
  },
  {
    code: "GB", name: "United Kingdom", photoId: 30624831, region: "Europe", visaTime: "3 weeks", fee: "₦230,000",
    blurb: "Visitor, student, and Skilled Worker visa support.",
    overview: "The UK offers a well-defined visa system across visitor, study, and Skilled Worker routes, with processing times that are generally predictable when documentation is complete.",
    requirements: ["Valid international passport", "Bank statements (6 months)", "Accommodation proof", "CAS letter (for students)", "Sponsor certificate (for Skilled Worker route)"],
    embassy: "British High Commission, Abuja / Lagos",
    weather: "Mild, often rainy year-round",
    bestTime: "May to September",
    cities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    faqs: [
      { q: "Can I work on a UK visitor visa?", a: "No — visitor visas do not permit employment; a work-specific visa is required." },
      { q: "How long does a Skilled Worker visa take?", a: "Typically 3 weeks after biometrics, assuming a valid Certificate of Sponsorship." },
    ],
  },
  {
    code: "IT", name: "Italy", photoId: 2064827, region: "Europe", visaTime: "10–15 days", fee: "₦120,000",
    blurb: "Schengen visitor visas and long-stay study routes.",
    overview: "Italy's Schengen visa grants access across 27 European countries, making it a strong choice for both leisure travel and academic pursuits at Italian universities.",
    requirements: ["Valid passport", "Schengen travel insurance", "Confirmed round-trip flight itinerary", "Hotel booking or invitation letter", "Bank statement (3 months)"],
    embassy: "Italian Embassy, Abuja",
    weather: "Hot summers, mild winters",
    bestTime: "April to June, September to October",
    cities: ["Rome", "Milan", "Florence", "Venice"],
    faqs: [
      { q: "Does an Italy Schengen visa let me visit other EU countries?", a: "Yes — a Schengen visa permits travel across all Schengen-area member states." },
      { q: "How far in advance should I apply?", a: "At least 3–4 weeks before your travel date to allow for processing." },
    ],
  },
  {
    code: "DE", name: "Germany", photoId: 1963082, region: "Europe", visaTime: "2–3 weeks", fee: "₦120,000",
    blurb: "Study visas and the EU Blue Card for skilled workers.",
    overview: "Germany combines tuition-friendly public universities with a strong post-study work pathway, and its EU Blue Card is one of Europe's most accessible skilled-migration routes.",
    requirements: ["Valid passport", "Blocked account proof (students)", "Admission letter or employment contract", "Health insurance", "CV and qualification certificates (Blue Card)"],
    embassy: "German Embassy, Abuja",
    weather: "Cold winters, warm summers",
    bestTime: "May to September",
    cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    faqs: [
      { q: "What is a blocked account?", a: "A German bank account holding a set amount to prove you can support yourself as a student — released to you in monthly installments." },
    ],
  },
  {
    code: "FR", name: "France", photoId: 532826, region: "Europe", visaTime: "10–15 days", fee: "₦120,000",
    blurb: "Schengen tourism, business, and student visas.",
    overview: "France's Campus France process for students and its broader Schengen visa system make it accessible for both study and short-stay travel.",
    requirements: ["Valid passport", "Campus France registration (students)", "Proof of accommodation", "Travel insurance", "Financial proof"],
    embassy: "French Embassy, Abuja / Lagos",
    weather: "Temperate, warm summers",
    bestTime: "April to June, September",
    cities: ["Paris", "Nice", "Lyon", "Marseille"],
    faqs: [{ q: "Is Campus France mandatory for student visas?", a: "Yes — it's a required step before applying for a long-stay student visa." }],
  },
  {
    code: "BE", name: "Belgium", photoId: 20595735, region: "Europe", visaTime: "10–15 days", fee: "₦120,000",
    blurb: "Schengen access with strong EU-wide onward travel.",
    overview: "As an EU and Schengen member with Brussels at its center, Belgium offers convenient onward travel across Europe alongside straightforward visitor visa processing.",
    requirements: ["Valid passport", "Schengen insurance", "Proof of accommodation", "Bank statement", "Return flight itinerary"],
    embassy: "Belgian Embassy, Abuja",
    weather: "Mild, often overcast",
    bestTime: "May to September",
    cities: ["Brussels", "Antwerp", "Bruges"],
    faqs: [{ q: "Can I use a Belgium visa to travel to France?", a: "Yes, a Belgian Schengen visa permits travel throughout the Schengen zone." }],
  },
  {
    code: "NL", name: "Netherlands", photoId: 18744171, region: "Europe", visaTime: "10–15 days", fee: "₦120,000",
    blurb: "Schengen visas and highly-skilled migrant routes.",
    overview: "The Netherlands pairs an efficient Schengen visitor process with a well-regarded highly-skilled migrant visa for professionals sponsored by recognized employers.",
    requirements: ["Valid passport", "Employer sponsorship (skilled migrant route)", "Proof of accommodation", "Travel insurance", "Financial proof"],
    embassy: "Dutch Embassy, Abuja",
    weather: "Mild, windy, wet winters",
    bestTime: "April to September",
    cities: ["Amsterdam", "Rotterdam", "The Hague"],
    faqs: [{ q: "Do I need a recognized sponsor for the skilled migrant visa?", a: "Yes — your employer must be registered as a recognized sponsor with Dutch immigration." }],
  },
  {
    code: "AU", name: "Australia", photoId: 4062614, region: "Oceania", visaTime: "3–6 weeks", fee: "₦260,000",
    blurb: "Visitor, student, and skilled migration visas.",
    overview: "Australia's points-based skilled migration system and globally-ranked universities make it a strong long-term destination, alongside a straightforward eVisitor and visitor visa process.",
    requirements: ["Valid passport", "Genuine Temporary Entrant statement", "Health insurance", "Proof of funds", "Skills assessment (skilled migration)"],
    embassy: "Australian High Commission, Abuja",
    weather: "Seasons reversed — summer Dec–Feb",
    bestTime: "September to November, March to May",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    faqs: [{ q: "How long does skilled migration take?", a: "Timelines vary widely by occupation and points score — often several months, so early planning matters." }],
  },
  {
    code: "US", name: "United States", photoId: 32839124, region: "North America", visaTime: "Varies", fee: "₦250,000",
    blurb: "B1/B2 visitor visas with interview preparation support.",
    overview: "US visitor visas require an in-person embassy interview — we prepare clients thoroughly on documentation and interview readiness to strengthen their case.",
    requirements: ["Valid passport", "DS-160 confirmation page", "Visa interview appointment", "Proof of ties to Nigeria", "Financial documentation"],
    embassy: "US Embassy, Abuja / Consulate, Lagos",
    weather: "Varies widely by region",
    bestTime: "Spring and Fall",
    cities: ["New York", "Los Angeles", "Chicago", "Miami"],
    faqs: [{ q: "What's the biggest reason for B1/B2 refusals?", a: "Insufficient proof of strong ties (job, property, family) compelling a return to Nigeria." }],
  },
  {
    code: "AE", name: "Dubai (UAE)", photoId: 29497729, region: "Middle East", visaTime: "3–5 days", fee: "₦90,000",
    blurb: "Fast-turnaround tourist and business visas.",
    overview: "Dubai's rapid visa turnaround and direct flights from Lagos make it one of the fastest and most convenient destinations to process, ideal for short leisure or business trips.",
    requirements: ["Valid passport", "Passport photo", "Confirmed return flight", "Hotel booking"],
    embassy: "UAE Embassy, Abuja",
    weather: "Hot year-round, mild winters",
    bestTime: "November to March",
    cities: ["Dubai", "Abu Dhabi", "Sharjah"],
    faqs: [{ q: "Can I get a Dubai visa on arrival?", a: "Nigerian passport holders require a visa in advance — it is not available on arrival." }],
  },
  {
    code: "TR", name: "Turkey", photoId: 15418709, region: "Europe/Asia", visaTime: "3–5 days", fee: "₦60,000",
    blurb: "E-visa and sticker visa support for visitors.",
    overview: "Turkey's e-visa system offers one of the fastest, most affordable entry routes for Nigerian travelers, spanning both European and Asian culture across two continents.",
    requirements: ["Valid passport", "Passport photo", "Return flight itinerary", "Proof of accommodation"],
    embassy: "Turkish Embassy, Abuja",
    weather: "Mediterranean — hot summers, mild winters",
    bestTime: "April to June, September to November",
    cities: ["Istanbul", "Antalya", "Cappadocia"],
    faqs: [{ q: "Is Turkey's e-visa enough, or do I need to visit the embassy?", a: "Most Nigerian tourist applicants qualify for the e-visa without an embassy visit." }],
  },
  {
    code: "MT", name: "Malta", photoId: 17583396, region: "Europe", visaTime: "10–15 days", fee: "₦120,000",
    blurb: "Schengen access with a growing student visa market.",
    overview: "Malta offers Schengen access through a smaller, less-congested visa process, alongside a growing number of English-taught university and language-school programs.",
    requirements: ["Valid passport", "Schengen insurance", "Proof of accommodation", "Financial proof", "Enrollment letter (students)"],
    embassy: "Consular processing via designated Schengen partner",
    weather: "Mediterranean — mild year-round",
    bestTime: "April to June, September to October",
    cities: ["Valletta", "Sliema", "St. Julian's"],
    faqs: [{ q: "Is English widely spoken in Malta?", a: "Yes — English is an official language alongside Maltese." }],
  },
  {
    code: "IE", name: "Ireland", photoId: 14367157, region: "Europe", visaTime: "4–6 weeks", fee: "₦180,000",
    blurb: "Visitor and study visas outside the Schengen zone.",
    overview: "Ireland sits outside the Schengen zone with its own visa system, offering strong English-language study options and a post-study work visa (Stamp 1G) for graduates.",
    requirements: ["Valid passport", "Proof of funds", "Letter of acceptance (students)", "Private medical insurance", "Evidence of ties to Nigeria"],
    embassy: "Irish Embassy, Abuja",
    weather: "Mild, wet year-round",
    bestTime: "May to September",
    cities: ["Dublin", "Cork", "Galway"],
    faqs: [{ q: "Does an Irish visa let me travel to the rest of Europe?", a: "No — Ireland is not part of the Schengen area, so a separate Schengen visa is needed for onward EU travel." }],
  },
  {
    code: "ES", name: "Spain", photoId: 18602897, region: "Europe", visaTime: "10–15 days", fee: "₦120,000",
    blurb: "Schengen tourism, study, and non-lucrative visas.",
    overview: "Spain combines classic Schengen tourism access with growing options for students and remote workers via its non-lucrative and digital nomad visa routes.",
    requirements: ["Valid passport", "Schengen insurance", "Proof of accommodation", "Financial proof", "Round-trip flight booking"],
    embassy: "Spanish Embassy, Abuja",
    weather: "Hot summers, mild winters",
    bestTime: "April to June, September to October",
    cities: ["Madrid", "Barcelona", "Seville"],
    faqs: [{ q: "What is Spain's non-lucrative visa?", a: "A long-stay visa for those who can support themselves financially without working for a Spanish employer." }],
  },
];

export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/\s+/g, "-");

export const destinations = destinationsRaw.map((d) => ({ ...d, slug: slugify(d.name) }));

export const faqCategories = [
  {
    category: "Getting Started",
    items: [
      { q: "How do I start the visa application process?", a: "Book a free consultation — your advisor reviews your goals and gives you a personalized document roadmap before anything is filed." },
      { q: "How much does a consultation cost?", a: "Your first consultation is free. Any paid services are discussed transparently before you commit." },
      { q: "Which countries do you cover?", a: "We actively support 14+ destinations including Canada, the UK, the Schengen countries, the US, Australia, the UAE, and Turkey." },
    ],
  },
  {
    category: "Visa Process",
    items: [
      { q: "What's your visa success rate?", a: "95%, built on document precision and staying current with embassy requirement changes." },
      { q: "What if my visa is refused?", a: "Our Visa Appeal Assistance service reviews your refusal letter, identifies the gap, and rebuilds a stronger application." },
      { q: "How long does processing take?", a: "It varies by country and visa type — from 3 days (UAE, Turkey) to several weeks (US, Australia). Each country page has specific timelines." },
    ],
  },
  {
    category: "Payments & Booking",
    items: [
      { q: "How do I pay for services?", a: "Payment details are shared transparently during your consultation, with no hidden fees mid-application." },
      { q: "Can I book flights and hotels separately from visa services?", a: "Yes — every service can be booked independently or bundled together." },
    ],
  },
  {
    category: "Support",
    items: [
      { q: "What are your support hours?", a: "Our office operates Mon–Sat, 8AM–6PM WAT, with WhatsApp support available 24/7." },
      { q: "Do you offer support after I've traveled?", a: "Yes — our team remains reachable for questions about extensions, renewals, or future trips." },
    ],
  },
];

export const galleryImages = [
  { photoId: 8441861, caption: "Advisory consultation in progress" },
  { photoId: 7235894, caption: "Planning a journey, document by document" },
  { photoId: 7235904, caption: "Passport and travel essentials" },
  { photoId: 11862814, caption: "Canada — a top study & visitor destination" },
  { photoId: 29497729, caption: "Dubai — fast-turnaround visa processing" },
  { photoId: 30624831, caption: "United Kingdom — study & Skilled Worker routes" },
  { photoId: 2064827, caption: "Italy — Schengen visa access across Europe" },
  { photoId: 18602897, caption: "Spain — sun, culture, and Schengen access" },
  { photoId: 4062614, caption: "Australia — study & skilled migration pathways" },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Vingel Travels made our honeymoon absolutely perfect. Every detail was taken care of, and we had the most amazing experience in Bali.",
  },
  {
    name: "Amaka O.",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "My Canada study visa was approved in three weeks. The document checklist my advisor gave me removed all the guesswork.",
  },
  {
    name: "Tunde A.",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "I'd been refused a UK visa once before. Vingel rebuilt my application and it was approved on the second attempt.",
  },
  {
    name: "Chidinma E.",
    location: "Abuja, Nigeria",
    rating: 5,
    text: "Booked flights, hotel, and travel insurance for our family trip to Dubai in a single call. Genuinely stress-free.",
  },
];

const blogPostsRaw = [
  {
    category: "Visa Tips",
    title: "7 Documents Embassies Reject Most Often — and How to Avoid It",
    excerpt: "The small formatting and translation mistakes that quietly sink otherwise strong applications.",
    readTime: "6 min read",
    date: "July 2026",
    body: [
      {
        paragraphs: [
          "Most visa refusals aren't about weak cases — they're about avoidable document errors. Embassies process thousands of applications a week, and reviewers are trained to flag inconsistencies fast. Here are the seven issues we see most often, and how to fix each one before you submit.",
        ],
      },
      {
        heading: "1. Bank statements that don't match your DS-160 or application form",
        paragraphs: [
          "If your form states a certain occupation and income, but your bank statement shows irregular deposits or a different employer name, that mismatch gets noticed immediately. Keep your stated income, your bank records, and your employment letter consistent down to the naira.",
        ],
      },
      {
        heading: "2. Photos that don't meet exact specifications",
        paragraphs: [
          "Background color, head size, and image age requirements vary slightly by country. A photo that was fine for one visa application is often rejected for another. Always check the specific photo requirements for the exact country and visa type you're applying for — don't reuse an old photo.",
        ],
      },
      {
        heading: "3. Invitation letters with missing or inconsistent details",
        paragraphs: [
          "An invitation letter that doesn't match your stated travel dates, or that's missing the host's ID and contact details, raises red flags. If you're visiting family or friends, the letter should include their status in the destination country and their relationship to you.",
        ],
      },
      {
        heading: "4. Uncertified or inconsistent translations",
        paragraphs: [
          "Documents in a language other than the embassy's working language usually need a certified translation, not just a personal one. Uncertified translations, or translations with different spellings of names than your passport, are a common rejection trigger.",
        ],
      },
      {
        heading: "5. Passport photos or bio pages that are damaged or unclear",
        paragraphs: [
          "Water damage, faded ink, or a scan that's too dark to read your details causes unnecessary delays. Scan or photograph your passport bio page in good lighting, and replace a damaged passport before applying if you can.",
        ],
      },
      {
        heading: "6. Proof of accommodation that doesn't cover your full stay",
        paragraphs: [
          "A hotel booking that only covers three of your ten travel days, or that doesn't match your stated itinerary, suggests an incomplete or inconsistent plan. Make sure your accommodation proof — whether a booking or an invitation — covers every night of your trip.",
        ],
      },
      {
        heading: "7. Travel insurance that doesn't meet the minimum coverage",
        paragraphs: [
          "Schengen applications specifically require a minimum of €30,000 in medical coverage, valid for the entire Schengen Area and your full travel period. A policy with a lower limit, or one that excludes certain countries in your itinerary, will be rejected on sight.",
        ],
      },
      {
        heading: "The fastest fix",
        paragraphs: [
          "Every one of these issues is caught during a proper pre-submission document review — which is exactly what we do for every client before their file goes to the embassy. It's far cheaper to fix a formatting issue at home than to lose an application fee and months of waiting to a preventable rejection.",
        ],
      },
    ],
  },
  {
    category: "Study Abroad",
    title: "Canada vs. UK for Nigerian Students: A 2026 Comparison",
    excerpt: "Tuition, work rights, and post-study visa pathways compared side by side.",
    readTime: "8 min read",
    date: "July 2026",
    body: [
      {
        paragraphs: [
          "For years, Canada was the default answer for Nigerian students weighing study-abroad options — relatively affordable tuition, generous post-study work rights, and a clear road to permanent residency. In 2026, that comparison has shifted meaningfully, and the right choice now depends heavily on your specific goals.",
        ],
      },
      {
        heading: "Canada in 2026: tighter, but still PR-focused",
        paragraphs: [
          "Canada introduced a national cap on new study permits in 2026, a significant reduction from prior years, alongside heightened scrutiny of applicants' ties to their home country. This has made approvals noticeably harder to secure than in previous intakes, even for well-qualified applicants.",
          "The upside hasn't disappeared: graduates from eligible institutions can still access a Post-Graduation Work Permit of up to three years, and that Canadian work experience remains one of the strongest assets for an Express Entry permanent residency application. Note that as of late 2024, most PGWP applicants must also submit proof of a language test result as part of eligibility.",
        ],
      },
      {
        heading: "The UK in 2026: faster, more predictable processing",
        paragraphs: [
          "The UK's student visa process has stayed comparatively straightforward — a Confirmation of Acceptance for Studies (CAS) from a licensed university, proof of tuition plus living costs (roughly £1,171/month outside London or £1,529/month in London, held for at least 28 days), and a standard decision timeline of about three weeks after biometrics.",
          "Its Graduate Route visa allows international graduates to stay and work for two years (three for PhD holders) with no job restrictions — but it's worth knowing this route doesn't count toward permanent settlement (ILR). To stay long-term, UK graduates typically need to switch to a Skilled Worker visa with employer sponsorship.",
        ],
      },
      {
        heading: "Which one fits your goals?",
        paragraphs: [
          "If your priority is a clearer, faster route to permanent residency and you're prepared for a more competitive application process, Canada's PGWP-to-Express-Entry pathway is still the stronger long-term play. If your priority is faster processing, more predictable approval, and flexibility to work in any role after graduating — even without an immediate PR plan — the UK's current system is the more forgiving option.",
          "Either way, immigration rules in both countries continue to shift through 2026 — always confirm current caps, fees, and eligibility directly with IRCC (Canada) or UKVI (UK), or through a consultation with an advisor tracking both systems in real time.",
        ],
      },
    ],
  },
  {
    category: "Immigration News",
    title: "Schengen Visa Rule Changes to Watch This Year",
    excerpt: "What's changing across France, Germany, and Italy's application processes.",
    readTime: "7 min read",
    date: "July 2026",
    body: [
      {
        paragraphs: [
          "2026 has brought some of the most significant changes to Schengen border management in over a decade — but the core visa process most applicants care about has stayed largely intact. Here's what's actually different, and what hasn't changed at all.",
        ],
      },
      {
        heading: "What's changed",
        paragraphs: [
          "The Entry/Exit System (EES) became fully operational across Schengen borders on April 10, 2026. It replaces manual passport stamping with digital biometric registration — fingerprints and a photo — recorded every time you enter or exit the zone, making overstay tracking automatic.",
          "France has removed its airport transit visa requirement for several previously-affected nationalities, effective the same date, with Germany reportedly planning a similar move. A digital Schengen visa pilot — eventually replacing the physical sticker in your passport with a barcode linked to your passport chip — is also in early rollout, though full replacement isn't expected until 2027–2028.",
        ],
      },
      {
        heading: "What's coming, but not yet required",
        paragraphs: [
          "ETIAS (European Travel Information and Authorisation System) is expected to launch in the final quarter of 2026, but it will only apply to travelers who currently enter Schengen visa-free — not to applicants who already require a visa. If you need a Schengen visa today, ETIAS doesn't change your process at all.",
        ],
      },
      {
        heading: "What hasn't changed",
        paragraphs: [
          "The fundamentals remain the same: the 90-days-within-any-180-day rule still applies across the entire zone, standard documentation requirements are unchanged (passport, photos, bank statements, travel insurance), the mandatory minimum travel insurance coverage is still €30,000, and you still apply at the consulate of the country where you'll spend the most time.",
          "Bulgaria and Romania completed their accession into the Schengen Area, with land border checks lifted from January 1, 2025 — bringing the zone to 29 member countries.",
        ],
      },
      {
        heading: "What this means for your application",
        paragraphs: [
          "If your documentation was solid before, it's still solid now. The main practical impact is at the border itself, not in the application process — expect biometric registration when you land, and make sure your passport meets validity requirements well before your trip, since EES enforcement has made overstays far easier to catch.",
        ],
      },
    ],
  },
  {
    category: "Travel Tips",
    title: "How to Pack for a Multi-Country Schengen Trip",
    excerpt: "Fitting four countries and three climates into one carry-on, without the stress.",
    readTime: "5 min read",
    date: "July 2026",
    body: [
      {
        paragraphs: [
          "A single Schengen visa can take you across 29 countries — but packing for a trip that might swing from Mediterranean heat in Spain to alpine chill in Switzerland takes a bit of strategy.",
        ],
      },
      {
        heading: "Layer, don't duplicate",
        paragraphs: [
          "Pack a versatile base layer (breathable tops, one lightweight sweater, one packable jacket) rather than separate outfits for each climate. A packable rain shell doubles as wind protection and covers unpredictable weather in northern Europe.",
        ],
      },
      {
        heading: "Keep your documents in one place — and copy everything",
        paragraphs: [
          "Carry your passport, visa, travel insurance certificate, and accommodation proof for every country in a single document folder. Keep digital copies in your email and a physical photocopy separate from the originals, in case anything is lost.",
        ],
      },
      {
        heading: "Plan around checked-bag realities",
        paragraphs: [
          "Budget carriers within Europe often have tighter and more expensive baggage allowances than your international flight in. Traveling with one carry-on and a compressible packing cube system saves money and makes train travel between cities far less stressful.",
        ],
      },
      {
        heading: "Don't forget the small stuff",
        paragraphs: [
          "A universal EU plug adapter, a portable charger, comfortable walking shoes broken in before you travel, and a printed copy of your itinerary matching your visa application. Immigration officers may ask about your onward travel plans at any border, so keep it consistent with what you declared.",
        ],
      },
    ],
  },
  {
    category: "Travel Guides",
    title: "A First-Timer's Guide to Dubai in 4 Days",
    excerpt: "Where to stay, what to see, and how to budget your first trip to the UAE.",
    readTime: "6 min read",
    date: "July 2026",
    body: [
      {
        paragraphs: [
          "Dubai remains one of the fastest and most convenient destinations for Nigerian travelers — direct flights from Lagos, a visa that typically processes in 3–5 days, and enough to fill four days without ever feeling rushed.",
        ],
      },
      {
        heading: "Day 1: Downtown Dubai",
        paragraphs: [
          "Start at the Burj Khalifa — book the 'At the Top' observation deck slot for sunset. Spend the evening at Dubai Mall and the Dubai Fountain show just outside it, which runs on a set schedule every 30 minutes after dark.",
        ],
      },
      {
        heading: "Day 2: Old Dubai and the souks",
        paragraphs: [
          "Cross Dubai Creek by abra (traditional water taxi) to explore the Gold Souk and Spice Souk in Deira. This is also the best day to try Emirati cuisine at a local restaurant rather than a hotel buffet.",
        ],
      },
      {
        heading: "Day 3: Desert safari",
        paragraphs: [
          "A half-day desert safari — dune bashing, camel riding, and a Bedouin-style dinner — is worth booking through a reputable operator rather than the cheapest option you find, since safety standards vary considerably.",
        ],
      },
      {
        heading: "Day 4: Palm Jumeirah and Marina",
        paragraphs: [
          "Spend your last day at Palm Jumeirah's beaches or JBR (Jumeirah Beach Residence), then close out the trip with a Dubai Marina dinner cruise before your flight.",
        ],
      },
      {
        heading: "Budgeting tips",
        paragraphs: [
          "Dubai can be done comfortably on a mid-range budget if you mix a few splurges (the Burj Khalifa, one nice dinner) with metro travel and budget-to-mid hotels away from the priciest beachfront strip. Nigerian passport holders need a visa arranged before travel — it is not available on arrival — so build in processing time before you book flights.",
        ],
      },
    ],
  },
  {
    category: "Countries Nigerians Can Visit",
    title: "12 Countries Nigerians Can Visit Visa-Free or on Arrival",
    excerpt: "A practical shortlist for travelers who want to skip the embassy queue entirely.",
    readTime: "7 min read",
    date: "July 2026",
    body: [
      {
        paragraphs: [
          "As of 2026, Nigerian passport holders have visa-free, visa-on-arrival, or eVisa access to roughly 44–46 destinations worldwide. Here are twelve worth knowing, grouped by how easy they are to enter.",
        ],
      },
      {
        heading: "Fully visa-free (no fee, no pre-approval)",
        paragraphs: [
          "Ghana, Benin, Côte d'Ivoire, Senegal, and Togo — all ECOWAS member states allow Nigerians to enter without a visa and stay up to 90 days, under the ECOWAS Free Movement Protocol. Beyond West Africa, Barbados and Dominica in the Caribbean also offer completely visa-free entry, popular for honeymoon and leisure travel.",
        ],
      },
      {
        heading: "Visa on arrival",
        paragraphs: [
          "Rwanda issues a visa on arrival at Kigali International Airport for roughly $50, valid for 30 days — or you can apply online in advance through Rwanda's immigration portal. The Maldives grants a free 30-day visitor permit on arrival, provided you carry proof of onward travel, confirmed accommodation, and sufficient funds. Ethiopia and Cambodia also offer straightforward visa-on-arrival access for Nigerian travelers.",
        ],
      },
      {
        heading: "eVisa (apply online before you travel)",
        paragraphs: [
          "Kenya now uses an Electronic Travel Authorisation (eTA) system — apply online before travel for about $30, typically approved within 72 hours. Turkey and Bahrain also operate straightforward eVisa systems that avoid an embassy visit entirely.",
        ],
      },
      {
        heading: "What to carry, even for visa-free countries",
        paragraphs: [
          "Regardless of category, always travel with: a passport valid for at least six months, a return or onward flight ticket, proof of accommodation, evidence of sufficient funds, and your yellow fever vaccination card — a common requirement across Africa. Visa-free access is not an automatic right; border officers can still deny entry if you can't demonstrate intent to return home.",
        ],
      },
      {
        heading: "Worth remembering",
        paragraphs: [
          "The UK, US, Canada, France, Germany, the UAE, and most Schengen countries still require a traditional visa for Nigerian citizens. These easier destinations are a great way to build travel history on your passport — which can genuinely help future applications to the more document-intensive countries.",
        ],
      },
    ],
  },
  {
    category: "Latest Embassy Updates",
    title: "US Embassy Abuja: Current Interview Wait Times",
    excerpt: "What applicants are seeing right now, and how to plan your application around it.",
    readTime: "5 min read",
    date: "July 2026",
    body: [
      {
        paragraphs: [
          "US visa wait times for Nigerian applicants remain among the longest globally in 2026. Here's the current picture, and two policy changes every applicant should know before booking a US trip.",
        ],
      },
      {
        heading: "Current B1/B2 wait times",
        paragraphs: [
          "Early-2026 data shows B1/B2 (visitor) visa appointment wait times running approximately 200–300 days at the Abuja embassy and 250–400 days at the Lagos consulate. These figures shift regularly as the State Department releases new appointment slots, so always check the current wait time directly on the U.S. Mission Nigeria appointment system before finalizing travel plans.",
          "Employment-based visa categories (H, L, O, P, Q, R) move considerably faster — typically 4–10 weeks for an interview appointment, since these categories receive priority scheduling worldwide.",
        ],
      },
      {
        heading: "Two important policy changes to know",
        paragraphs: [
          "Effective January 21, 2026, the U.S. State Department paused immigrant visa issuance to nationals of several countries, including Nigeria, tied to public-benefits usage concerns — immigrant visa applicants can still submit applications and attend interviews, but should expect this to affect processing.",
          "Also effective January 21, 2026, Nigerian nationals found otherwise eligible for a B1/B2 visa may be required to post a bond of up to $15,000 at the discretion of the consular officer during the interview. This requirement applies regardless of which location you apply from.",
        ],
      },
      {
        heading: "How to plan around this",
        paragraphs: [
          "Apply as early as possible — given current wait times, that can mean applying six months to a year before your intended travel date for a visitor visa. Keep your documentation airtight, since administrative processing after refusal or flagging can add weeks or months on top of the wait. If your travel purpose fits an employment-based category, that route is dramatically faster than B1/B2 right now.",
          "Because these figures and policies can change month to month, always verify current wait times on travel.state.gov and confirm bond or documentation requirements directly with the embassy before your interview.",
        ],
      },
    ],
  },
];

export const blogPosts = blogPostsRaw.map((p) => ({ ...p, slug: slugify(p.title) }));

export const checklists = [
  { country: "Canada", type: "Tourist Visa Checklist", file: "/checklists/canada-tourist-visa-checklist.pdf" },
  { country: "United Kingdom", type: "Visitor Visa Checklist", file: "/checklists/uk-visitor-visa-checklist.pdf" },
  { country: "Italy", type: "Tourist Visa Checklist", file: "/checklists/italy-tourist-visa-checklist.pdf" },
  { country: "Schengen", type: "General Checklist", file: "/checklists/schengen-general-checklist.pdf" },
  { country: "Study Abroad", type: "Student Visa Checklist", file: "/checklists/study-abroad-visa-checklist.pdf" },
  { country: "Business", type: "Business Visa Checklist", file: "/checklists/business-visa-checklist.pdf" },
];
