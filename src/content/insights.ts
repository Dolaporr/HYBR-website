export type InsightArticle = {
  title: string;
  subtitle: string;
  cardTitle: string;
  summary: string;
  author: string;
  date: string;
  topics: string;
  intro: string[];
  sections: Array<{
    heading: string;
    kicker: string;
    paragraphs: string[];
  }>;
  bottomLine: string[];
};

export const innovationSweetSpotArticle: InsightArticle = {
  title: "The Innovation Sweet Spot: 5 Practical Ways to Confirm Problem-Solution Fit",
  subtitle: "How leaders can replace promising assumptions with evidence before they commit to scale.",
  cardTitle: "The Innovation Sweet Spot",
  summary: "Five practical ways to confirm problem-solution fit before a good idea becomes an expensive detour.",
  author: "HYBR Editorial",
  date: "September 15, 2025",
  topics: "Strategy, Product Development, Applied Research",
  intro: [
    "Imagine this: you have just launched a new solution inside your company. The pitch was strong, the prototype looked good and the early response was encouraging. Three months later, adoption stalls, customers churn and budgets shrink. The difficult question arrives too late: did we ever solve the right problem?",
    "Problem-solution fit is the point where a real customer problem, a viable business model and a delivery capability meet. HYBR's Innovation Series webinar explored how leaders can find that evidence earlier, when decisions are still inexpensive to change.",
  ],
  sections: [
    {
      heading: "1. Test willingness to pay",
      kicker: "Praise is cheap. Payment is proof.",
      paragraphs: [
        "Positive feedback can be useful, but it is not the same as a commitment. One B2B founder only understood the difference after securing 50 paying customers, not after collecting a long list of interested leads.",
        "Try a pre-sale, a deposit-backed landing page or a paid pilot. A small financial commitment is often the clearest signal that the problem matters enough to change behaviour.",
      ],
    },
    {
      heading: "2. Map and test your riskiest assumptions",
      kicker: "Not every unknown can break the opportunity.",
      paragraphs: [
        "List the assumptions behind an initiative and identify the two that would do the most damage if they were wrong. A government recycling programme, for example, might look operationally sound until a local test reveals that households will not separate waste at home.",
        "Run a short workshop, surface six assumptions and rank them by impact and uncertainty. Then design the fastest credible test for the assumptions at the top of the list.",
      ],
    },
    {
      heading: "3. Run staged, rapid experiments",
      kicker: "Small bets reveal the truth faster and at a lower cost.",
      paragraphs: [
        "Big bets fail big. A sequence of small experiments lets a team see what customers actually do before committing major resources. Use an evidence ladder: landing page, prototype, pilot, then rollout.",
        "At every stage, decide whether to stop, pivot or scale. The purpose is not to create activity; it is to create enough evidence for the next decision.",
      ],
    },
    {
      heading: "4. Track activation and retention, not just sign-ups",
      kicker: "Attention is not adoption.",
      paragraphs: [
        "A fintech product can attract thousands of downloads and still lose most users in its first week. Sign-ups alone conceal whether people reach the moment of value and return to it.",
        "Track activation, retention and paid conversion. These measures reveal whether a solution is becoming part of a customer's real workflow, not simply earning a first click.",
      ],
    },
    {
      heading: "5. Use local, low-tech fixes before heavy builds",
      kicker: "Innovation does not always mean more technology.",
      paragraphs: [
        "The quickest route to a better service may be a simple change to communication, process or delivery. Jumia's SMS delivery notifications are a useful reminder that practical, local interventions can remove friction before a large technology build is needed.",
        "Ask: what is the cheapest way to deliver this promise today? Test it with real users before writing code or buying more infrastructure.",
      ],
    },
  ],
  bottomLine: [
    "Problem-solution fit is evidence, not enthusiasm. It appears where customer need, business viability and delivery capability meet.",
    "Before the next major investment, identify the riskiest assumption, design a small test and measure whether people actually activate, return or pay. That is how a good idea earns the right to scale.",
  ],
};

export const fromGuessingToKnowingArticle: InsightArticle = {
  title: "From Guessing to Knowing",
  subtitle: "Exploring how leaders can use disciplined discovery, development, and deployment to reduce risk before major investments are made.",
  cardTitle: "From Guessing to Knowing",
  summary: "How leaders can replace confidence that has not been tested with evidence that can guide a major decision.",
  author: "HYBR Group",
  date: "May 12, 2026",
  topics: "Innovation Strategy, Discovery, Evidence-Led Growth",
  intro: [
    "A CEO sits at the head of a boardroom table. The slides are polished, the market opportunity is attractive, the financial model is confident and the product roadmap is ambitious. Everyone wants the decision to be yes. But beneath the confidence sits a quieter truth.",
    "No one has spoken to enough customers. No one has tested the riskiest assumption. No one has proven that the market behaves the way the spreadsheet suggests. Adoption may still fail because of price, trust, habit, workflow, regulation, distribution or internal capability.",
    "This is how expensive decisions begin - not with recklessness, but with confidence that has not yet earned the right to be called evidence.",
  ],
  sections: [
    {
      heading: "The Problem Is Not Uncertainty. The Problem Is Pretending We Have Solved It.",
      kicker: "Leadership always requires judgment under uncertainty.",
      paragraphs: [
        "Markets move, customers change, competitors surprise, technology advances and regulation shifts. The issue is not that leaders must decide before everything is clear. That is the job.",
        "The issue is that many organisations do not know the difference between what they know, what they assume, what they hope is true and what they have not tested at all. That gap is where innovation by guesswork lives.",
        "They build before they understand. They scale before they validate. They launch before they learn. They measure activity and mistake it for progress. This is not a failure of effort. It is a failure of system.",
      ],
    },
    {
      heading: "Why the Cost of Guesswork Is Rising",
      kicker: "The environment around leaders is becoming less forgiving.",
      paragraphs: [
        "Digital transformation, AI investment, startup growth and public-sector execution all expose the same danger: weak evidence can become an expensive commitment when strategy, execution, people, process and adoption are not aligned.",
        "The pattern is consistent across sectors. Organisations do not fail only because they lack ideas. They fail because they do not learn fast enough before committing too much.",
      ],
    },
    {
      heading: "The Leaders Who Move from Guessing to Knowing",
      kicker: "Knowing is designed through observation, experimentation and feedback.",
      paragraphs: [
        "The most effective innovators are not those who predict the future with perfect accuracy. They build disciplined systems for reducing uncertainty: from assumption to discovery, from discovery to evidence, from evidence to decision and from execution back to learning.",
        "Methods such as Intuit's Follow Me Home and Amazon's Working Backwards begin with the real customer experience rather than an internal desire to launch. The lesson is not to copy another organisation. It is to design the way your own organisation learns.",
      ],
    },
    {
      heading: "The Leadership Shift: From Heroic Instinct to Disciplined Learning",
      kicker: "Instinct still matters. Evidence makes it more useful.",
      paragraphs: [
        "Old leadership says, 'I believe this will work.' Better leadership asks, 'What would have to be true for this to work?' Old leadership says, 'Let us launch.' Better leadership asks, 'What have we tested, what did we learn and what still scares us?'",
        "Great leaders do not eliminate uncertainty. They eliminate unnecessary guessing by making learning a deliberate part of the operating system.",
      ],
    },
    {
      heading: "HYBR's 3D Framework: Discover, Develop, Deploy",
      kicker: "A practical operating logic for evidence-led innovation.",
      paragraphs: [
        "Discover identifies what leaders do not yet know: the real customer need, the hidden market barrier, the operational constraint, the adoption risk and the assumption nobody has said out loud. Discovery replaces expensive assumptions with usable truth.",
        "Develop shapes, tests and improves ideas before major investment. Teams prototype, test value propositions, validate demand, stress-test business models and build minimum viable evidence. A weak idea exposed early is avoided waste, not failure.",
        "Deploy moves validated solutions into execution, adoption, measurement and scale. It is the difference between innovation theatre and measurable progress, requiring alignment, partner coordination, performance tracking and feedback loops.",
      ],
    },
    {
      heading: "What Leaders Can Do This Week",
      kicker: "The move from guessing to knowing can begin in the next meeting.",
      paragraphs: [
        "Separate facts from assumptions. Identify the riskiest assumption in the initiative. Talk to the people closest to the problem. Test the behaviour that needs to be true before committing significant capital.",
        "Build learning loops into execution and measure evidence rather than activity. Before approving the next major investment, ask: what would have to be true for this to work - and how can we test that quickly?",
      ],
    },
  ],
  bottomLine: [
    "Most organisations do not need another innovation slogan. They need a clear diagnosis of where guesswork is entering the system and what it may already be costing them.",
    "The future belongs to leaders who learn faster: leaders who do not confuse movement with progress, confidence with truth or a beautiful presentation with market evidence.",
  ],
};

export const fastestWayToWasteIdeaArticle: InsightArticle = {
  title: "The Fastest Way to Waste a Good Idea",
  subtitle: "Why speed built on untested assumptions sends organisations towards expensive mistakes sooner.",
  cardTitle: "The Fastest Way to Waste a Good Idea",
  summary: "A practical guide to moving quickly with evidence instead of racing ahead on assumptions.",
  author: "HYBR Group",
  date: "July 2026",
  topics: "Innovation Strategy, Customer Evidence, Product Development",
  intro: [
    "Leaders are under pressure to innovate at speed. But when speed is built on untested assumptions, organisations do not reach the market faster. They reach expensive mistakes sooner.",
    "A project can look like progress while the most important question remains unanswered: do customers need this enough to change what they currently do? When that answer is missing, teams can be moving fast without being sure they are moving in the right direction.",
  ],
  sections: [
    {
      heading: "Guesswork rarely looks like guesswork",
      kicker: "It arrives dressed as confidence.",
      paragraphs: [
        "A leader has seen a similar idea succeed elsewhere. A competitor has launched something new. A trusted customer likes the initial concept. Soon, a hypothesis becomes a plan, the plan becomes a budget and the budget becomes a deadline.",
        "Five friendly customers are not market validation. A pilot designed to impress stakeholders is not proof that a solution will work. Activity can be reported while evidence remains thin.",
      ],
    },
    {
      heading: "Launching faster is not the same as learning faster",
      kicker: "Movement is not necessarily progress.",
      paragraphs: [
        "A product can launch on time and still solve the wrong problem. A pilot can attract participants and create no lasting behaviour change. A platform can meet every technical requirement and still be avoided by the people expected to use it.",
        "The real measure of innovation speed is how quickly an organisation moves from an assumption to credible evidence, and from that evidence to a better decision.",
      ],
    },
    {
      heading: "Evidence-driven speed",
      kicker: "Test the uncertainties that matter before they become large commitments.",
      paragraphs: [
        "Evidence-driven speed does not mean endless research or waiting for perfect information. It means identifying the assumptions that matter most and testing them with customers before they become expensive commitments.",
        "Intuit's Design for Delight, Amazon's Working Backwards and the United Kingdom Government Service Standard each demonstrate the same principle: customer learning needs to be built into how decisions are made.",
      ],
    },
    {
      heading: "The Speed Without Guesswork Review",
      kicker: "Seven questions before the next major investment.",
      paragraphs: [
        "What decision are we actually making? What must be true for this idea to work? Which assumption could destroy the opportunity? What evidence do we have? What is the fastest credible test? What result would change our decision? Can the organisation deliver the promise?",
        "These questions do not slow innovation. They prevent teams from spending months answering the wrong question beautifully.",
      ],
    },
    {
      heading: "The missing bridge between insight and action",
      kicker: "Customer insight only matters when it changes the next decision.",
      paragraphs: [
        "Many organisations already collect feedback, commission studies and speak with customers. The missing capability is moving systematically from insight to decision, decision to solution and solution to real-world execution.",
        "HYBR's 3D Framework provides that bridge: Discover the real problem and distinguish evidence from assumptions; Develop propositions and prototypes while risks are inexpensive; Deploy in real conditions, then measure and strengthen what works.",
      ],
    },
  ],
  bottomLine: [
    "In uncertain times, leaders cannot afford to move slowly. But they can afford guesswork even less.",
    "The organisations that shape what comes next will learn faster, decide smarter and turn customer insight into confident action.",
  ],
};

export const systemsMindsetWebinar = {
  title: "The Systems Mindset: A Smarter Way To Solve Complex Problems",
  speakerOne: "Adeyinka Aderombi, Chief Information Officer, Rex Insurance",
  speakerTwo: "Soromfe Uzomah, Principal Program Manager, Microsoft",
  href: "/insights/webinars",
};

export const publicPowerWebinar = {
  title: "Public Power, Private Ingenuity: Innovating with Government for Scalable Impact",
  speakers: "Chinedu Ugwu-Chinwuba & Ure Utah",
  date: "May 2025",
  duration: "1:10:35",
  href: "/insights/webinars/specific-webinar",
  youtubeEmbed: "https://www.youtube-nocookie.com/embed/GxIj0bnFzQ4?start=380",
  summary: "A conversation on practical collaboration between government and innovators to create scalable impact.",
  topics: ["Government Innovation", "Public-Private Collaboration", "Scalable Impact"],
};

export const businessModelsWebinar = {
  title: "Create Business Models That Work",
  speakers: "Emmanuel Obinne",
  date: "October 2025",
  duration: "59:17",
  href: "/insights/webinars/specific-webinar?masterclass=business-models",
  youtubeEmbed: "https://www.youtube-nocookie.com/embed/AhNm_PdrzC4?start=7",
  summary: "Learn how to design and validate business models before you scale.",
  topics: ["Business Models", "Validation", "Growth Strategy"],
};

export const innovationFellowshipNews = {
  kind: "NEWS",
  title: "What Can You Become in a Year?",
  shortTitle: "What Can You Become in a Year?",
  summary:
    "Inside HYBR's Innovation Fellowship, young graduates are given difficult problems, real responsibility and the support to discover abilities they may not yet know they have.",
  compactSummary:
    "Inside HYBR's Innovation Fellowship, young graduates are given difficult problems, real responsibility and support to discover new abilities.",
  cardSummary:
    "Inside HYBR's Innovation Fellowship, young graduates are given difficult problems, real responsibility and the support to discover abilities they may not yet know they have.",
  href: "/insights/news/fellowship",
};

export const spctaNewsFeature = {
  kind: "NEWS",
  eyebrow: "HYBR LABS FEATURE",
  title: "A Bottle, A Broken Supply Chain, and the Venture Built to Fix It",
  shortTitle: "SPCTA Completes IHS DeepTech Accelerator",
  summary:
    "SPCTA steps into public view with a platform for waste recovery and circular supply chains.",
  compactSummary:
    "SPCTA steps into public view with a platform for waste recovery and circular supply chains.",
  cardSummary:
    "After the IHS DeepTech Accelerator, SPCTA is building the physical systems between discarded materials and the factories that need them.",
  author: "HYBR Editorial",
  date: "April 2026",
  topics: "Deep Technology, Circular Economy, Industrial Infrastructure",
  readingTime: "8 minutes",
  heroImage: {
    src: "/insights/spcta/bottle-news-page.jpg",
    alt: "Materials and activity inside a recycling and recovery operation.",
    caption:
      "The Convergence brought founders, industry leaders and ecosystem partners together at the Ilorin Innovation Hub.",
  },
  images: {
    operations: {
      src: "/insights/spcta/traceability.png",
      alt: "Materials being handled within a recovery operation.",
      caption:
        "Every industrial supply chain begins with physical work: collecting, separating and preparing material.",
    },
    recovery: {
      src: "/insights/spcta/accelerator-room.jpg",
      alt: "The IHS DeepTech Accelerator creating room for new industrial ventures.",
      caption:
        "The work is about creating a dependable route from fragmented recovery to industrial demand.",
    },
    partners: {
      src: "/figma-assets/image-fills/1958cc39abc0ad658a9c5454fb531e80c31f464e-optimized.jpg",
      alt: "People working together around a table.",
      caption:
        "The venture was refined through field learning, technical collaboration and commercial scrutiny.",
    },
    material: {
      src: "/figma-assets/image-fills/d50005e607480723ef80c8b7ba3864acdbcd1a39.png",
      alt: "A close view of hands working with materials.",
      caption:
        "Traceability, handling and consistent quality are part of what turns material into a reliable input.",
    },
    cohort: {
      src: "/home/people.png",
      alt: "A group of people gathered together.",
      caption:
        "The accelerator created room to challenge assumptions, strengthen the market case and prepare for the next stage.",
    },
  },
  facts: [
    ["Programme", "Ilorin Innovation Hub Accelerator, powered by IHS Nigeria."],
    ["Launch weekend", "January 15-17, 2026 at Ilorin Innovation Hub, Kwara State."],
    ["Demo Day", "April 17, 2026, with 19 ventures showcased."],
    ["Partners", "Kwara State Government, IHS Nigeria, Ilorin Innovation Hub, Future Africa, Accelerate Africa and Co-creation Hub."],
  ],
  audiences: [
    {
      title: "Investors and strategic partners",
      copy: "Help finance and deploy recovery sites, processing capacity and the systems that make material supply more dependable.",
      href: "mailto:sales@hybrgroup.net?subject=SPCTA%20Industrial%20partnership",
      linkLabel: "Start a conversation",
    },
    {
      title: "Industry, government and development organisations",
      copy: "Explore stronger circular-material systems that create operational value, local enterprise and more resilient infrastructure.",
      href: "mailto:sales@hybrgroup.net?subject=SPCTA%20Industrial%20collaboration",
      linkLabel: "Explore collaboration",
    },
    {
      title: "Leaders working on the next hard problem",
      copy: "HYBR helps teams turn a real system constraint into a venture and an operating model that can grow.",
      href: "/what-we-do/services",
      linkLabel: "Work with HYBR",
    },
  ],
  intro: [
    "On April 17, 2026, 19 young companies gathered at the Ilorin Innovation Hub in Kwara State to present their businesses before investors, corporate executives, government representatives and potential partners.",
    "Among the nine accelerator companies was SPCTA Industrial, a venture addressing a stubborn problem in Africa's circular economy: recyclable materials exist in large quantities, but the infrastructure needed to collect, sort, process and move them reliably to industry remains thin.",
    "SPCTA is building the infrastructure intended to connect informal collectors and small recycling businesses with manufacturers and recyclers that need recovered material of the right quality, in predictable quantities, delivered consistently and at a workable cost.",
  ],
  sections: [
    {
      heading: "What Ilorin Asked SPCTA to Prove",
      kicker: "A dependable supply network for materials that would otherwise be discarded.",
      paragraphs: [
        "Manufacturers and recyclers need recovered materials of the right quality, in predictable quantities, delivered consistently and at a workable cost. Informal collectors and small recycling businesses often lack suitable equipment, aggregation centres, reliable buyers, operating capital and usable data.",
        "SPCTA's model combines community-based Waste+Energy Banks, larger processing and aggregation facilities, digital traceability, logistics and relationships with industrial buyers. It is less a conventional recycling campaign than an attempt to construct a supply network.",
      ],
    },
    {
      heading: "Building beyond software",
      kicker: "Deep technology companies must work under real operating conditions.",
      paragraphs: [
        "The accelerator began with a call for applications in November 2025, built around a belief that Africa's industrial future could not be built through software alone. Its founders were working with hardware, engineering, artificial intelligence, connected devices and new commercial models.",
        "A company installing energy equipment, processing waste or moving physical goods must contend with machinery, maintenance, land, electricity, transport, supply contracts, working capital and the behaviour of people throughout the chain.",
        "SPCTA sat at the intersection of waste, infrastructure, logistics, industrial demand and the use of operating data to make a fragmented market more dependable.",
      ],
    },
    {
      heading: "From a promising model to a disciplined business",
      kicker: "The accelerator tested how the model would work in the market.",
      paragraphs: [
        "Over three months, SPCTA and the other founders were pressed to examine who would pay, what would be built first, how equipment would be maintained, how revenue would be earned, how margins would be protected and what evidence would persuade a customer or investor to commit.",
        "The team emerged with sharper thinking, stronger feedback, new relationships and greater clarity about what would be required to scale. Its customer problem became more precise: enabling industrial companies to obtain recycled feedstock with sufficient quality, quantity, consistency and cost control.",
        "Waste collection is often treated as an environmental or social activity. SPCTA is trying to make it part of a reliable industrial supply chain.",
      ],
    },
    {
      heading: "The programme at a glance",
      kicker: "A partnership built around place, infrastructure and serious venture building.",
      paragraphs: [
        "The Ilorin Innovation Hub began running programmes in February 2025. IHS Nigeria appointed Future Africa and Co-creation Hub as programme managers, with Future Africa overseeing accelerator, corporate innovation and technical leadership initiatives.",
        "Accelerate Africa worked with the Africa Deep Tech Community and Trapezion Africa to support the accelerator, while technical experts from the Africa Deep Tech Foundation participated in the launch and mentorship process.",
        "The programme brought together public infrastructure, corporate support, venture-development expertise and technical mentors around companies solving problems that could not be addressed through software alone.",
        "SPCTA's future now depends on turning introductions into pilots, supply agreements, industrial off-take relationships and suitable financing.",
        "Next stage: prove the operating model one facility, one material stream and one customer relationship at a time.",
      ],
    },
    {
      heading: "The applause is over",
      kicker: "The work that matters starts after Demo Day.",
      paragraphs: [
        "A Demo Day can create visibility. It cannot prove that a company can operate at scale. SPCTA must show that its Waste+Energy Banks can collect and process dependable volumes, that material quality can meet industrial standards, that equipment can remain operational and that each site can eventually support itself financially.",
        "The company also needs credible traceability, so companies buying recycled materials can understand where those materials came from, how they were processed and what environmental results were achieved.",
        "SPCTA is working on an unfashionable but consequential part of the circular economy: the physical systems between discarded materials and the factories that need them. Ilorin gave the company a stage, mentors and a sharper argument. What matters now is whether it can turn that argument into infrastructure that moves materials every day.",
      ],
    },
  ],
  pullQuotes: [
    "SPCTA is building the physical systems between discarded materials and the factories that need them.",
    "Waste collection is often treated as an environmental or social activity. SPCTA is trying to make it part of a reliable industrial supply chain.",
    "What matters now is whether SPCTA can turn that argument into infrastructure that moves materials every day.",
  ],
};

export const absaDiscoveryNews: InsightArticle & { kind: "NEWS"; href: string; compactSummary: string } = {
  kind: "NEWS",
  href: "/insights/news/absa-discovery",
  title: "Beyond the Obvious: How Absa Expanded Its Innovation Radar Across Africa",
  subtitle: "How Absa connected strategic priorities with emerging ventures across African innovation ecosystems.",
  cardTitle: "Beyond the Obvious",
  summary: "From 2021 to 2024, HYBR supported Absa's Digital Partnerships ecosystem to turn a broad market search into a disciplined discovery capability.",
  compactSummary: "How Absa turned a broad market search into a disciplined discovery capability across Africa.",
  author: "HYBR Editorial",
  date: "2021-2024",
  topics: "Innovation Scouting, Financial Services, Digital Partnerships",
  intro: [
    "Absa wanted a disciplined way to connect real business priorities with emerging technology ventures across Africa. HYBR helped extend the search from broad market possibilities to opportunities worth investigating.",
    "The challenge was not finding startups. It was identifying ventures whose technology, proposition, market relevance and readiness could support a meaningful enterprise partnership.",
  ],
  sections: [
    {
      heading: "Start with the business need",
      kicker: "Strategic discovery begins with context, not a database.",
      paragraphs: [
        "The initial search focused on seven publicly disclosed territories, including advanced data and analytics, artificial intelligence, digital adoption, inclusive banking, connected ecosystems, cashless economies and internal operations.",
        "This gave the programme a practical filter: which external capabilities could matter to something the bank was actually trying to achieve?",
      ],
    },
    {
      heading: "A continent of possibilities",
      kicker: "Pan-African discovery requires local intelligence.",
      paragraphs: [
        "African innovation ecosystems differ by market, regulation, infrastructure, capital networks and customer behaviour. HYBR combined structured research with ecosystem relationships to surface ventures relevant to Absa's priorities.",
        "The goal was to improve the signal between what was emerging outside the organisation and what could create value inside it.",
      ],
    },
    {
      heading: "Building a discovery engine",
      kicker: "A repeatable process narrows uncertainty.",
      paragraphs: [
        "The work moved from defining strategic priorities, through search and scouting, to screening, matching, engaging and testing the strongest opportunities. Each stage helped turn a wide field of possibility into a smaller number of credible partnership hypotheses.",
        "Discovery is not about putting more startups in the room. It is about improving the signal-to-noise ratio.",
      ],
    },
    {
      heading: "Discovery as a capability",
      kicker: "The market keeps moving.",
      paragraphs: [
        "Across the multi-year engagement, discovery became a way to observe how technologies, founders and business models were evolving across African markets. It extended Absa's field of view and created a more structured route from external possibility to internal relevance.",
        "The broader lesson is simple: the advantage is not more information. It is knowing where to look, what to pay attention to and which possibilities are worth pursuing.",
      ],
    },
  ],
  bottomLine: [
    "The future is already being built somewhere. Discovery is how organisations find the parts that matter to them.",
    "HYBR helps teams make sense of unfamiliar markets, emerging technologies and external innovation, then turn a wide field of possibility into opportunities worth developing.",
  ],
};
