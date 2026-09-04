// Central i18n dictionary. `en` is the source of truth for shape; `vi` and `lo` must match.
// Add a new string here (all three locales) and reference it via `getDictionary(locale)`.

export const en = {
  header: {
    nav: {
      solution: "SERVICES",
      technologies: "TECHNOLOGIES",
      company: "ABOUT US",
      recruit: "RECRUIT",
    },
    contact: "CONTACT",
    homeAria: "SV Digital Software home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  language: {
    en: "English",
    vi: "Tiếng Việt",
    lo: "ພາສາລາວ",
  },
  marquee: {
    text: "Code never lies, comments sometimes do.",
  },
  footer: {
    headings: {
      services: "SERVICES",
      company: "COMPANY",
      contact: "CONTACT",
    },
    tagline:
      "We design, build and maintain digital products end to end — web applications, mobile apps, enterprise systems and modern data platforms.",
    followUs: "FOLLOW US",
    contact: "CONTACT",
    copyright: "©SV Digital Software Co. Ltd. all rights reserved.",
    companyInfo:
      "SV Digital Software Co., Ltd.\nDigital Software & AI Solutions\nLondon, United Kingdom",
    backToTop: "Back to top",
  },
  contact: {
    heroTitle: "CONTACT",
    heading: "GET IN TOUCH",
    description:
      "We design, build and ship web and software products — from custom applications to data platforms and AI-powered solutions. Tell us about your project and our team will get back to you.",
    notice:
      "Please use the button below to inquire about our business or services. We kindly ask that you refrain from sending sales solicitations, such as those for recruiting services. Depending on the content of your inquiry, it may take some time to respond, or we may not be able to provide a response. Thank you for your understanding.",
    emailButton: "Send an email",
    emailSubject: "Inquiry — SV Digital Software",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Office",
    address: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom",
    hoursLabel: "Office hours",
    hours: "Mon–Fri, 9:00–18:00 (JST)",
    followUs: "Follow us",
  },
  hero: {
    titleLine1: "Beyond Limits with",
    titleLine2: "Digital Software & AI",
    subtitle:
      "SV Digital Software designs and builds digital products, data platforms and AI solutions. We combine cutting-edge engineering with deep domain expertise to deliver software that meets our customers' highest standards.",
    cta: "CONTACT",
  },
  solutions: {
    heading: "SERVICES",
    dataSolution: {
      title: "SERVICES",
      desc: "SV Digital Software designs, builds and maintains digital products end to end — web applications, mobile apps, enterprise systems and modern data platforms. From UX design and system architecture through development, testing and long-term support, our engineering team turns business requirements into secure, scalable software that ships on schedule and grows with your business.",
      learnMore: "Learn more",
    },
  },
  companyTeaser: {
    heading: "COMPANY",
    desc: "SV Digital Software is a software development company delivering digital products end to end — web applications, mobile apps, enterprise systems and data platforms. We combine modern engineering, disciplined quality assurance and long-term support to build secure, scalable software that helps businesses operate efficiently and grow with confidence.",
    readMore: "Read more",
  },
  recruitTeaser: {
    heading: "RECRUIT",
    desc: "We are engineers and makers. By the values of crafting with excellence, thinking bold, building together, earning trust and embracing change, we ship digital products that last. If that resonates — come build the next version with us.",
    readMore: "Read more",
  },
  solutionPage: {
    heroTitle: "SERVICES",
    heading: "SERVICES",
    dataSolution: {
      title: "SERVICES",
      desc: "SV Digital Software delivers custom software end to end — web and enterprise applications, mobile apps, QA and test automation, legacy system modernization and cloud-ready data platforms. One experienced team takes your project from requirements and architecture through development, testing, deployment and ongoing maintenance, giving you a single accountable partner for the entire product lifecycle.",
      contactUs: "Contact us",
    },
    cta: {
      title: "Have a project in mind?",
      desc: "Don't hesitate to reach out. We'd love to walk you through how we apply cutting-edge technology to your project — and how SV Digital Software's experienced team delivers projects of every scale, from a single feature to a full platform.",
      contactUs: "Contact Us",
    },
  },
  services: {
    heroTitle: "SERVICES",
    heading: "SERVICES",
    nav: {
      mobile: "Mobile Solutions",
      custom: "Custom Software Development",
      testing: "Testing Services",
      legacy: "Legacy System Migration",
      lowcode: "Low-code Development",
      cloud: "Cloud Services",
      ai: "AI Solutions",
    },
    groups: {
      outsourcing: "Software Outsourcing Services",
      advanced: "Advanced Technologies",
    },
    crossLinksHeading: "OTHER SERVICES",
    mobile: {
      heroTitle: "Mobile Solutions",
      intro:
        "We design and build native and cross-platform mobile applications for iOS and Android — from concept and UX through launch and ongoing maintenance. Our mobile team ships reliable, performant apps that feel at home on every device.",
      features: {
        heading: "WHAT WE DELIVER",
        items: [
          "Native iOS & Android development",
          "Cross-platform apps (React Native, Flutter)",
          "UI/UX design and interactive prototyping",
          "App Store & Google Play publishing",
          "Post-launch maintenance & support",
        ],
      },
      process: {
        heading: "OUR PROCESS",
        steps: [
          { step: "01", title: "Requirements & analysis", desc: "We gather and evaluate your needs to define the optimal solution and project scope." },
          { step: "02", title: "Design", desc: "We craft the UI and UX flows, turning requirements into intuitive, testable designs." },
          { step: "03", title: "Development", desc: "We build functional prototypes, then complete the app to design and requirements." },
          { step: "04", title: "Testing", desc: "We test on real devices throughout, run UAT and verify integrated functionality." },
          { step: "05", title: "Launch & support", desc: "We publish to the stores after your acceptance and support you through maintenance." },
        ],
      },
      benefits: {
        heading: "WHY CHOOSE US",
        items: [
          "Professional, dedicated mobile team",
          "Reliable delivery on schedule",
          "Fast turnaround without compromising quality",
          "Competitive, transparent cost",
          "Creative, user-first product thinking",
        ],
      },
      projects: {
        heading: "FEATURED PROJECTS",
        items: [
          { title: "Mobile Banking App", desc: "A secure banking app for on-the-go transactions and account management.", stack: ["Spring Boot", "Android", "iOS"] },
          { title: "E-commerce Fulfillment Platform", desc: "An omnichannel e-fulfillment platform spanning web and mobile.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
          { title: "Device Usage Control App", desc: "A parental-control app for managing screen time across devices.", stack: [".NET Core", "PHP", "Android", "iOS"] },
        ],
      },
      cta: {
        title: "Ready to build your mobile app?",
        desc: "Tell us about your idea and we'll show you how our mobile team can turn it into a polished, production-ready product.",
        contactUs: "Contact Us",
      },
    },
    custom: {
      heroTitle: "Custom Software Development",
      intro:
        "We build software to your exact requirements — from design through development, testing and maintenance. Our experienced team handles application development, API integration, legacy modernization and system integration, delivering the most effective and cost-efficient solution for your business.",
      features: {
        heading: "WHAT WE DELIVER",
        items: [
          "Tailored web & enterprise applications",
          "API design, development & integration",
          "Legacy system modernization",
          "Application & workflow integration",
          "Digital transformation & data management",
        ],
      },
      process: {
        heading: "OUR PROCESS",
        steps: [
          { step: "01", title: "Requirements gathering", desc: "We collect your needs, desired outcomes and intended functionality to define the project scope." },
          { step: "02", title: "Analysis & proposal", desc: "We evaluate requirements and recommend solutions that minimize risk and fit your budget." },
          { step: "03", title: "Development", desc: "Our team programs and builds the product to the agreed designs and requirement set." },
          { step: "04", title: "Testing", desc: "Quality control through functional, system, integration, stress and user-acceptance testing." },
          { step: "05", title: "Installation & maintenance", desc: "We finalize deployment and provide ongoing support for stability and long-term quality." },
        ],
      },
      benefits: {
        heading: "WHY CHOOSE US",
        items: [
          "Flexible adjustment to your requirements",
          "A unique product you own and can scale",
          "Independent, self-disciplined engineering team",
          "Built to grow as your business expands",
          "Large capacity for parallel task distribution",
        ],
      },
      projects: {
        heading: "REPRESENTATIVE PROJECTS",
        items: [
          { title: "Car Services Management", desc: "A mobile app for managing automotive services and bookings.", stack: [".NET Core", "AngularJS"] },
          { title: "Work Management ERP", desc: "An internal ERP for task tracking and team workflow.", stack: ["React", "MySQL", "Spring Boot", "AWS"] },
          { title: "Omnichannel E-commerce", desc: "A retail platform unifying web, online and mobile channels.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
        ],
      },
      cta: {
        title: "Have a custom build in mind?",
        desc: "Share your requirements and we'll propose an architecture and roadmap that fits your goals and budget.",
        contactUs: "Contact Us",
      },
    },
    testing: {
      heroTitle: "Testing Services",
      intro:
        "We provide comprehensive software testing across mobile, web and enterprise platforms — catching defects before release so your product ships with confidence. Our QA team combines manual expertise with automation to keep quality high and delivery fast.",
      features: {
        heading: "WHAT WE DELIVER",
        items: [
          "Mobile app testing across devices & resolutions",
          "Automated testing for repeatable coverage",
          "Web application & cross-browser testing",
          "24/7 build-and-test cycles across time zones",
          "Performance, security & regression testing",
        ],
      },
      process: {
        heading: "OUR PROCESS",
        steps: [
          { step: "01", title: "Requirements analysis", desc: "We collect and analyze your requirements to define the testing scope." },
          { step: "02", title: "Test planning", desc: "We develop test plans and strategies once the scope is identified." },
          { step: "03", title: "Test case building", desc: "We create the test scenarios executed during and after development." },
          { step: "04", title: "Environment setup", desc: "We prepare all environments and devices needed for execution." },
          { step: "05", title: "Execution & reporting", desc: "We run test scripts, log every issue and verify fixes with the full team." },
        ],
      },
      benefits: {
        heading: "WHY CHOOSE US",
        items: [
          "Reduced risk by catching defects early",
          "Faster release cycles through automation",
          "Coverage across mobile, web & integration layers",
          "Round-the-clock testing without late shifts",
          "Proven with enterprise-scale projects",
        ],
      },
      capabilities: {
        heading: "CORE TESTING CAPABILITIES",
        items: [
          { title: "Mobile App Testing", desc: "We verify apps across many devices and screen resolutions for a seamless experience." },
          { title: "Automated Testing", desc: "We automate repetitive checks so your team can focus on competitive advantage." },
          { title: "Web Application Testing", desc: "We scan sites to minimize vulnerabilities and fix functional and performance issues." },
          { title: "24/7 Continuous Testing", desc: "We use time-zone differences to run a continuous build-and-test cycle around the clock." },
        ],
      },
      toolsHeading: "TOOLS & COVERAGE",
      cta: {
        title: "Need a reliable QA partner?",
        desc: "Let us take quality off your plate — tell us about your product and we'll build a testing plan around it.",
        contactUs: "Contact Us",
      },
    },
    legacy: {
      heroTitle: "Legacy System Migration",
      intro:
        "We restructure your processes end to end and migrate legacy systems to modern platforms — preserving data integrity and the core features of your established models with minimal disruption. Our engineers and consultants bring broad experience across modern technology stacks.",
      features: {
        heading: "WHAT WE DELIVER",
        items: [
          "End-to-end process restructuring (A to Z)",
          "Data migration with integrity preserved",
          "Legacy-to-modern platform conversion",
          "Feature retention from established models",
          "Full lifecycle support, planning to post-migration",
        ],
      },
      process: {
        heading: "OUR PROCESS",
        steps: [
          { step: "01", title: "Discovery", desc: "We identify your data, formats, locations and impact levels." },
          { step: "02", title: "Backup", desc: "We back up all data before any migration work begins." },
          { step: "03", title: "Planning", desc: "We determine the technical, time and financial requirements." },
          { step: "04", title: "Phased migration & testing", desc: "We migrate in phases and test the system after each stage." },
          { step: "05", title: "Data cleansing & load", desc: "We clean the data, resolve issues and load it into the new system." },
        ],
      },
      benefits: {
        heading: "WHY CHOOSE US",
        items: [
          "Data integrity preserved through the transition",
          "Core features retained from existing models",
          "Minimal issues arising during migration",
          "Support across the full project lifecycle",
          "Engineers experienced across many platforms",
        ],
      },
      values: {
        heading: "WHAT WE GUARANTEE",
        items: [
          { title: "Data integrity", desc: "Your data stays complete and accurate throughout the entire transition." },
          { title: "Feature retention", desc: "The core features of your established models are preserved in the new system." },
          { title: "Minimal disruption", desc: "A staged approach keeps your business running with the fewest issues." },
        ],
      },
      caseStudy: {
        heading: "CASE HIGHLIGHT",
        title: "Flash to HTML5 — K12 education content",
        desc: "We converted thousands of K12 educational content items from legacy Flash to modern HTML5, preserving interactivity while future-proofing delivery across devices.",
        tag: "Education",
      },
      cta: {
        title: "Ready to modernize your systems?",
        desc: "Tell us about your legacy platform and we'll map a safe, staged migration path to a modern foundation.",
        contactUs: "Contact Us",
      },
    },
    lowcode: {
      heroTitle: "Low-code Development",
      intro:
        "We accelerate delivery with visual, configuration-driven low-code platforms — combining prebuilt components with custom extensions so you ship reliable apps in weeks, not quarters.",
      capabilities: {
        heading: "WHAT WE DELIVER",
        items: [
          { title: "Rapid app assembly", desc: "Build forms, screens and reports from visual, configuration-driven tooling." },
          { title: "Workflow automation", desc: "Model business processes with rules, approvals and automated hand-offs." },
          { title: "Integrations", desc: "Connect your data and systems through API connectors and prebuilt components." },
          { title: "Custom extensions", desc: "Add bespoke code exactly where the platform's native capabilities end." },
          { title: "Governance & training", desc: "Hand over ownership, train your team and manage the app lifecycle." },
        ],
      },
      process: {
        heading: "HOW WE DELIVER",
        steps: [
          { step: "01", title: "Model", desc: "Map your domain and processes into data models and workflow diagrams." },
          { step: "02", title: "Compose", desc: "Assemble screens, rules and data flows from the platform's visual tooling." },
          { step: "03", title: "Extend", desc: "Implement custom logic or integrations beyond the platform's native capabilities." },
          { step: "04", title: "Validate", desc: "Run through functional, integration and UAT checkpoints before release." },
          { step: "05", title: "Evolve", desc: "Train your team and govern future change so the app scales with demand." },
        ],
      },
      platforms: {
        heading: "PLATFORMS WE BUILD ON",
        items: ["OutSystems", "Mendix", "Appian", "Microsoft Power Platform", "ServiceNow"],
      },
      benefits: {
        heading: "WHY CHOOSE US",
        items: [
          "Faster delivery on proven low-code platforms",
          "Business teams can own changes without code",
          "Deep integrations with your existing systems",
          "Enterprise-grade security and governance",
          "Upgrade paths when low-code hits its limits",
        ],
      },
      projects: {
        heading: "FEATURED PROJECTS",
        items: [
          { title: "Loan Workflow Automation", desc: "A low-code loan origination workflow with automated approvals and document generation.", stack: ["OutSystems", "PostgreSQL", "REST"] },
          { title: "Field Operations Portal", desc: "A field-inspection portal with offline-ready forms and real-time dashboards.", stack: ["Mendix", "Azure", "Power BI"] },
          { title: "HR Self-service App", desc: "An employee self-service app for leave, onboarding and approvals across devices.", stack: ["Appian", "AWS", "SSO"] },
        ],
      },
      cta: {
        title: "Ship faster with low-code?",
        desc: "Show us the process that hurts and we'll map a low-code path to automate it.",
        contactUs: "Contact Us",
      },
    },
    cloud: {
      heroTitle: "Cloud Services",
      intro:
        "We design, migrate and operate cloud infrastructure that is secure, observable and cost-aware — from landing zones and platform engineering to 24/7 operations.",
      pillars: {
        heading: "OUR CLOUD PILLARS",
        nut: "Security",
        bolt: "Cost Control",
        items: [
          { title: "Land & Migrate", desc: "Assess, plan and migrate workloads to the right cloud with minimal downtime." },
          { title: "Platform & IaC", desc: "Provision landing zones, networks and platforms with infrastructure-as-code." },
          { title: "Observe & Secure", desc: "Instrument monitoring, logging and guardrails from day one." },
          { title: "Operate & Optimize", desc: "Run, tune and continuously optimize for reliability, cost and performance." },
        ],
      },
      certifications: {
        heading: "CERTIFIED & BATTLE-TESTED",
        items: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform"],
      },
      cta: {
        title: "Ready for a well-architected cloud?",
        desc: "Tell us where you run today and where you want to scale — we'll chart the move.",
        contactUs: "Contact Us",
      },
    },
    ai: {
      heroTitle: "AI Solutions",
      intro:
        "We embed AI where it creates measurable value — from data pipelines and feature stores to LLM-powered agents and retrieval. Our AI team pairs research judgement with production discipline.",
      capabilities: {
        heading: "CAPABILITIES",
        items: [
          { title: "Data & Feature Engineering", desc: "Curate, label and transform data into reliable features for training and inference." },
          { title: "Models & Fine-tuning", desc: "Select, fine-tune and evaluate models — from classic ML to LLMs and VLMs." },
          { title: "Retrieval & Agents", desc: "Build RAG pipelines and tool-calling agents that act on your data and workflows." },
        ],
      },
      steps: {
        heading: "FROM DATA TO VALUE",
        headingSuffix: "— How Intelligence Flows",
        items: [
          { step: "Data", desc: "Collect and curate trusted, labeled data from your systems." },
          { step: "Feature", desc: "Engineer features and embeddings that carry the right signal." },
          { step: "Model", desc: "Train, fine-tune and evaluate the right model for the job." },
          { step: "Deploy", desc: "Serve and observe it reliably in production." },
          { step: "Value", desc: "Link every deployment to a measurable business outcome." },
        ],
      },
      stack: {
        heading: "OUR STACK",
        items: ["OpenAI", "Azure AI", "LangChain", "Pinecone", "Snowflake", "dbt"],
      },
      projects: {
        heading: "AI IN PRODUCTION",
        items: [
          { title: "Document Intelligence Agent", desc: "An agent that classifies, extracts and routes documents across enterprise systems.", stack: ["OpenAI", "LangChain", "Azure"] },
          { title: "Demand Forecast Model", desc: "A time-series model improving forecast accuracy across retail channels.", stack: ["Python", "Snowflake", "dbt"] },
          { title: "Support Assistant", desc: "A RAG assistant that answers from your knowledge base with cited sources.", stack: ["RAG", "Pinecone", "Next.js"] },
        ],
      },
      cta: {
        title: "Have an AI use case?",
        desc: "Describe the workflow you want to make intelligent and we'll scope a path from data to deployment.",
        contactUs: "Contact Us",
      },
    },
  },
  companyPage: {
    heroTitle: "COMPANY",
    philosophy: {
      heading: "BUSINESS PHILOSOPHY",
      desc: "SV Digital Software is committed to building a trusted software brand through long-term partnerships on the global IT market. Technology changes quickly, but we believe the most important thing is always relevance — software that truly fits our customers' requirements, delivered with discipline, transparency and care.",
    },
    values: {
      heading: "CORE VALUES",
      items: [
        { title: "Delivery capability", desc: "End-to-end delivery — from requirements and architecture through development, testing, deployment and long-term maintenance." },
        { title: "Global standards", desc: "We adopt international engineering and quality standards so every project meets expectations, anywhere in the world." },
        { title: "People first", desc: "We attract, develop and retain talented engineers — the foundation behind every successful project we ship." },
        { title: "Certified quality", desc: "Disciplined QA processes and internationally recognized quality management practices applied to every release." },
      ],
    },
    vision: {
      heading: "VISION",
      desc: "SV Digital Software aims to become a leading partner in custom software development, legacy system migration & maintenance, and digital transformation — helping businesses modernize with confidence and grow on a solid technology foundation.",
    },
    ceo: {
      label: "MESSAGE FROM THE CEO",
      name: "James Whitfield",
      role: "Representative Director & CEO",
      desc: "Our promise to every client is simple: understand deeply, build honestly and deliver completely. We treat each project as a long-term commitment — and we measure our success by how well your software performs years after launch, not only on delivery day.",
    },
    factSheet: {
      heading: "FACT SHEET",
      rows: [
        { label: "Company Name", value: "SV Digital Software Co., Ltd." },
        { label: "Date of Establishment", value: "July 8, 2022" },
        { label: "Business Lines", value: "Custom software development · Mobile solutions · Testing services · Legacy system migration" },
        { label: "Core Technologies", value: "TypeScript / React / Next.js · Python · Snowflake / dbt · AWS / GCP / Azure" },
      ],
    },
    partners: {
      heading: "TECHNOLOGY PARTNERS",
      desc: "We build on proven, industry-leading platforms and maintain close working relationships with the ecosystems behind them.",
      items: ["AWS", "Google Cloud", "Microsoft Azure", "Snowflake", "dbt", "Docker"],
    },
    awards: {
      heading: "AWARD-WINNING TRACK RECORD",
      items: [
        { date: "2017.04.06", title: "MUFG Fintech Accelerator Program \"Runner-up Prize\"", desc: "Selected from hundreds of applicants and partnered with kabu.com Securities — the foundation of our experience building mission-critical software for highly regulated industries." },
        { date: "2023.08.22", title: "Secure-delivery benchmark — zero major incidents across 3 consecutive years", desc: "Our QA-led delivery process passed every external security review, with no production incident traced to a missed bug or vulnerability." },
        { date: "2025.03.17", title: "Grand Prize — 3rd Google Cloud Innovation Awards", desc: "Our cloud-native data and application platform won the Grand Prize for its reliable architecture, scalable performance and clean developer experience." },
        { date: "2025.06.05", title: "Trust & retention — 100% on-time delivery, 100% repeat-client rate", desc: "All contracted milestones delivered on schedule, with every client choosing to continue into a long-term partnership beyond their first project." },
      ],
    },
    contact: {
      heading: "CONTACT",
      desc: "For inquiries about our solutions, partnerships, or anything else, please reach out via our contact form.",
      contactUs: "Contact Us",
    },
  },
  recruitPage: {
    heroTitle: "RECRUIT",
    intro: "SV Digital Software is a team of engineers and makers. We live by five principles — \"Strive for Excellence in Quality\", \"Think and Act Bold\", \"Stronger Together\", \"Integrity and Trust\" and \"Embrace Change\" — and ship software that matters. If you love building thoughtful products, solving hard problems and sharing ownership of what you craft, there is a place for you here.",
    career: {
      heading: "CAREER OPPORTUNITIES",
      desc: "Our current openings range from platform engineering and applied AI to product design. Every role ships real software with real impact — explore them below and tell us how you would like to contribute.",
    },
    apply: "View Details",
    applySubject: "Job Application — ",
    applyBody:
      "Dear SV Digital Software Hiring Team,\n\nI would like to apply for the {title} position.\n\nFull name: \nEmail: \nPhone: \nLocation: \nYears of experience: \nPortfolio / LinkedIn: \n\nMessage: \n\n\nThank you for your consideration.",
    jobs: [
      { slug: "full-stack-engineer", title: "Full-Stack Engineer — React / Next.js / Node.js", shortTitle: "Full-Stack Engineer", location: "Remote", type: "Full-time", desc: "Design and ship end-to-end web applications — from responsive frontends with React and Next.js to scalable Node.js APIs and databases." },
      { slug: "data-engineer", title: "Data Engineer — Snowflake / dbt / Cloud", shortTitle: "Data Engineer", location: "Remote", type: "Full-time", desc: "Build and maintain modern data platforms — warehouse modelling, dbt transformations and cloud pipelines that turn raw data into trusted analytics." },
      { slug: "ai-engineer", title: "AI Engineer — LLMs & Generative Data Agents", shortTitle: "AI Engineer", location: "Remote", type: "Full-time", desc: "Develop LLM-powered features and generative data agents — retrieval, tool-calling and evaluation for production AI products." },
      { slug: "product-manager", title: "Product Manager — Data & AI Products", shortTitle: "Product Manager", location: "Remote", type: "Full-time", desc: "Own the roadmap for data and AI products — translate customer needs into clear specs and drive delivery with engineering and design." },
      { slug: "platform-engineer", title: "Software Engineer — Platform & Infrastructure", shortTitle: "Software Engineer", location: "Remote", type: "Full-time", desc: "Build the foundations our products run on — CI/CD, cloud infrastructure, observability and developer tooling." },
      { slug: "uiux-designer", title: "UI/UX Designer — Design Systems & Product", shortTitle: "UI/UX Designer", location: "Remote", type: "Full-time", desc: "Craft intuitive interfaces and maintain our design system — from research and wireframes to polished, accessible product screens." },
    ],
    jobDetail: {
      backToJobs: "Back to all positions",
      descriptionHeading: "JOB DESCRIPTION",
      requirementsHeading: "CANDIDATE REQUIREMENTS",
      benefitsHeading: "BENEFITS",
      specialHeading: "WHY JOIN US",
      apply: "Apply for this position",
      benefits: [
        "Competitive salary reviewed twice a year, plus performance bonuses.",
        "Fully remote with flexible working hours across time zones.",
        "Annual leave and public holidays, plus paid sick leave.",
        "Health insurance and a monthly wellbeing allowance.",
        "Annual learning budget for courses, books and conferences.",
        "Company retreats and regular team-building activities.",
        "Modern equipment and a home-office setup allowance.",
      ],
      special: [
        "Work on real products used by real customers, with visible impact.",
        "100% coverage for relevant IT certification exams.",
        "Clear growth path with mentorship and regular one-to-ones.",
        "A small, senior team where your ideas shape how we work.",
      ],
      jobs: {
        "full-stack-engineer": {
          description: [
            "Build and maintain features across the full stack — responsive React / Next.js frontends and Node.js APIs.",
            "Design database schemas and write efficient queries for relational and document stores.",
            "Integrate third-party services and internal APIs, handling authentication, caching and error paths.",
            "Collaborate with designers and product managers to ship polished, accessible user experiences.",
            "Write tests, review pull requests and help raise our engineering standards.",
          ],
          requirements: [
            "2+ years building production web applications with React and Node.js.",
            "Solid understanding of TypeScript, REST / GraphQL APIs and modern frontend tooling.",
            "Experience with at least one relational database (PostgreSQL or MySQL).",
            "Familiarity with Git workflows, code review and CI/CD.",
            "Strong problem-solving skills and clear written communication in English.",
          ],
        },
        "data-engineer": {
          description: [
            "Design and build data pipelines that move and transform data across cloud warehouses.",
            "Model data with dbt and maintain versioned, tested transformations.",
            "Optimise warehouse performance and cost across Snowflake and cloud storage.",
            "Partner with analysts and product teams to deliver trusted, well-documented datasets.",
            "Monitor pipeline health and respond to data-quality incidents.",
          ],
          requirements: [
            "2+ years in data engineering or analytics engineering.",
            "Strong SQL and hands-on experience with dbt and a cloud warehouse (Snowflake preferred).",
            "Experience with at least one cloud platform (AWS, GCP or Azure).",
            "Understanding of data modelling, ELT patterns and data-quality testing.",
            "Comfortable using Python for scripting and automation.",
          ],
        },
        "ai-engineer": {
          description: [
            "Build LLM-powered features — retrieval-augmented generation, tool-calling and agentic workflows.",
            "Design and run evaluations to measure and improve model output quality.",
            "Integrate models into production services with monitoring, guardrails and cost controls.",
            "Prototype generative data agents and move promising ideas into shipped product.",
            "Stay current with the LLM ecosystem and share learnings with the team.",
          ],
          requirements: [
            "2+ years in software engineering with recent hands-on LLM / AI work.",
            "Experience with at least one LLM API (OpenAI, Anthropic or similar) and prompt engineering.",
            "Strong Python and familiarity with vector stores and retrieval systems.",
            "Understanding of evaluation, latency and cost trade-offs in production AI.",
            "Curiosity and rigour when experimenting with new models and techniques.",
          ],
        },
        "product-manager": {
          description: [
            "Own the roadmap for data and AI products from discovery through delivery.",
            "Translate customer and stakeholder needs into clear, prioritised specifications.",
            "Work day-to-day with engineering and design to keep delivery on track.",
            "Define success metrics and use data to guide product decisions.",
            "Communicate progress and trade-offs clearly to stakeholders.",
          ],
          requirements: [
            "3+ years in product management, ideally for technical or data products.",
            "Ability to write crisp specs and user stories that engineers can act on.",
            "Comfort working with engineers on architecture and scope trade-offs.",
            "Strong analytical skills and familiarity with product analytics.",
            "Excellent communication and stakeholder management.",
          ],
        },
        "platform-engineer": {
          description: [
            "Build and maintain the CI/CD pipelines and cloud infrastructure our products run on.",
            "Improve developer experience with tooling, templates and documentation.",
            "Implement observability — logging, metrics and alerting — across services.",
            "Harden infrastructure for security, reliability and cost efficiency.",
            "Support engineering teams and resolve infrastructure incidents.",
          ],
          requirements: [
            "2+ years in platform, DevOps or infrastructure engineering.",
            "Hands-on experience with at least one major cloud (AWS, GCP or Azure).",
            "Experience with containers, Kubernetes and infrastructure-as-code (Terraform).",
            "Familiarity with CI/CD systems and observability tooling.",
            "Strong scripting skills (Bash, Python) and a reliability mindset.",
          ],
        },
        "uiux-designer": {
          description: [
            "Design intuitive interfaces for web and mobile products from research to handoff.",
            "Maintain and evolve our design system for consistency and speed.",
            "Create wireframes, prototypes and high-fidelity screens.",
            "Collaborate with engineers to ensure designs are built accurately and accessibly.",
            "Run usability checks and iterate based on feedback.",
          ],
          requirements: [
            "2+ years designing digital products with a strong portfolio.",
            "Proficiency with Figma and modern design workflows.",
            "Experience building or maintaining a design system.",
            "Understanding of accessibility and responsive design.",
            "Clear communication and comfort working closely with engineers.",
          ],
        },
      },
    },
  },
  technologiesPage: {
    heroTitle: "TECHNOLOGIES",
    intro:
      "We focus on researching and mastering modern technologies, pioneering across many fields. Our teams leverage top-tier frameworks, libraries and tools to build robust, scalable solutions for our clients.",
    categories: {
      frontend: "FRONTEND",
      backend: "BACKEND",
      mobile: "MOBILE",
      cloud: "CLOUD & INFRASTRUCTURE",
      database: "DATABASE",
      ai: "AI & EMERGING TECHNOLOGIES",
    },
    categoryDesc: {
      frontend:
        "Pixel-perfect, fast and accessible interfaces — built with modern component-driven frameworks for a smooth experience on every device.",
      backend:
        "Reliable, secure and scalable server-side systems and APIs that power your business logic and integrate with anything.",
      mobile:
        "Native and cross-platform apps that feel at home on iOS and Android — one codebase, two stores, a consistent experience.",
      cloud:
        "Cloud-native architecture, containers and automated pipelines that keep your product resilient, observable and easy to ship.",
      database:
        "The right data store for every workload — relational, document or in-memory — designed for performance, integrity and scale.",
      ai:
        "From generative AI and LLM integrations to machine learning and computer vision — we turn emerging tech into real product value.",
    },
    projects: {
      heading: "FEATURED PROJECTS",
      viewAll: "View all services",
      items: [
        { title: "Mobile Banking App", desc: "A secure banking application for on-the-go transactions and account management, delivered for iOS and Android.", stack: ["Spring Boot", "Android", "iOS"] },
        { title: "Work Management ERP", desc: "An internal ERP system for task tracking and team workflow, built for a client's daily operations.", stack: ["React", "MySQL", "Spring Boot", "AWS"] },
        { title: "Omnichannel E-commerce", desc: "A retail platform unifying web, online and mobile channels into one seamless shopping experience.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
      ],
    },
  },
};

export type Dictionary = typeof en;

export const vi: Dictionary = {
  header: {
    nav: {
      solution: "DỊCH VỤ",
      technologies: "CÔNG NGHỆ",
      company: "VỀ CHÚNG TÔI",
      recruit: "TUYỂN DỤNG",
    },
    contact: "LIÊN HỆ",
    homeAria: "Trang chủ SV Digital Software",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },
  language: {
    en: "English",
    vi: "Tiếng Việt",
    lo: "ພາສາລາວ",
  },
  marquee: {
    text: "Code không bao giờ nói dối, comment đôi khi thì có.",
  },
  footer: {
    headings: {
      services: "DỊCH VỤ",
      company: "CÔNG TY",
      contact: "LIÊN HỆ",
    },
    tagline:
      "Chúng tôi thiết kế, xây dựng và bảo trì sản phẩm số trọn vẹn — ứng dụng web, ứng dụng di động, hệ thống doanh nghiệp và nền tảng dữ liệu hiện đại.",
    followUs: "THEO DÕI CHÚNG TÔI",
    contact: "LIÊN HỆ",
    copyright: "©SV Digital Software Co. Ltd. Bảo lưu mọi quyền.",
    companyInfo:
      "SV Digital Software Co., Ltd.\nGiải pháp phần mềm số & AI\nLondon, Vương quốc Anh",
    backToTop: "Về đầu trang",
  },
  contact: {
    heroTitle: "LIÊN HỆ",
    heading: "LIÊN HỆ VỚI CHÚNG TÔI",
    description:
      "Chúng tôi thiết kế, xây dựng và vận hành các sản phẩm web và phần mềm — từ ứng dụng theo yêu cầu đến nền tảng dữ liệu và giải pháp AI. Hãy chia sẻ về dự án của bạn và đội ngũ của chúng tôi sẽ phản hồi sớm.",
    notice:
      "Vui lòng sử dụng nút bên dưới để liên hệ về hoạt động kinh doanh hoặc dịch vụ của chúng tôi. Chúng tôi mong bạn không gửi các thư chào hàng, chẳng hạn như dịch vụ tuyển dụng. Tùy thuộc vào nội dung yêu cầu, chúng tôi có thể cần thời gian để phản hồi hoặc có thể không thể phản hồi. Cảm ơn sự thông cảm của bạn.",
    emailButton: "Gửi email",
    emailSubject: "Yêu cầu — SV Digital Software",
    emailLabel: "Email",
    phoneLabel: "Điện thoại",
    addressLabel: "Văn phòng",
    address: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom",
    hoursLabel: "Giờ làm việc",
    hours: "Thứ 2–Thứ 6, 9:00–18:00 (JST)",
    followUs: "Theo dõi chúng tôi",
  },
  hero: {
    titleLine1: "Vượt Mọi Giới Hạn Với",
    titleLine2: "Phần Mềm Số & AI",
    subtitle:
      "SV Digital Software thiết kế và xây dựng các sản phẩm số, nền tảng dữ liệu và giải pháp AI. Chúng tôi kết hợp kỹ thuật tiên tiến với chuyên môn sâu để tạo ra phần mềm đáp ứng những tiêu chuẩn khắt khe nhất của khách hàng.",
    cta: "LIÊN HỆ",
  },
  solutions: {
    heading: "DỊCH VỤ",
    dataSolution: {
      title: "DỊCH VỤ",
      desc: "SV Digital Software thiết kế, xây dựng và bảo trì sản phẩm số trọn vẹn — ứng dụng web, ứng dụng di động, hệ thống doanh nghiệp và nền tảng dữ liệu hiện đại. Từ thiết kế UX, kiến trúc hệ thống đến phát triển, kiểm thử và hỗ trợ dài hạn, đội ngũ kỹ sư của chúng tôi biến yêu cầu kinh doanh thành phần mềm an toàn, có khả năng mở rộng, bàn giao đúng hạn và phát triển cùng doanh nghiệp của bạn.",
      learnMore: "Tìm hiểu thêm",
    },
  },
  companyTeaser: {
    heading: "CÔNG TY",
    desc: "SV Digital Software là công ty phát triển phần mềm cung cấp sản phẩm số trọn vẹn — ứng dụng web, ứng dụng di động, hệ thống doanh nghiệp và nền tảng dữ liệu. Chúng tôi kết hợp kỹ thuật hiện đại, quy trình kiểm thử chặt chẽ và hỗ trợ dài hạn để xây dựng phần mềm an toàn, có khả năng mở rộng, giúp doanh nghiệp vận hành hiệu quả và tăng trưởng bền vững.",
    readMore: "Đọc thêm",
  },
  recruitTeaser: {
    heading: "TUYỂN DỤNG",
    desc: "Chúng tôi là những kỹ sư và người làm sản phẩm. Với các giá trị theo đuổi chất lượng, dám nghĩ dám làm, cùng nhau kiến tạo, chính trực và luôn đổi mới, chúng tôi tạo nên những sản phẩm số bền vững. Nếu điều đó chạm đến bạn — hãy cùng xây phiên bản tiếp theo.",
    readMore: "Đọc thêm",
  },
  solutionPage: {
    heroTitle: "DỊCH VỤ",
    heading: "DỊCH VỤ",
    dataSolution: {
      title: "DỊCH VỤ",
      desc: "SV Digital Software cung cấp phần mềm theo yêu cầu trọn vẹn — ứng dụng web và doanh nghiệp, ứng dụng di động, kiểm thử và tự động hóa kiểm thử, hiện đại hóa hệ thống cũ và nền tảng dữ liệu sẵn sàng cho cloud. Một đội ngũ giàu kinh nghiệm đảm nhận dự án của bạn từ khâu yêu cầu và kiến trúc đến phát triển, kiểm thử, triển khai và bảo trì liên tục — một đối tác duy nhất chịu trách nhiệm cho toàn bộ vòng đời sản phẩm.",
      contactUs: "Liên hệ",
    },
    cta: {
      title: "Bạn có dự án nào trong đầu không?",
      desc: "Đừng ngần ngại liên hệ với chúng tôi để tìm hiểu thêm về cách chúng tôi áp dụng công nghệ tiên tiến vào dự án của bạn — và năng lực mạnh mẽ của SV Digital Software trong việc triển khai các dự án ở mọi quy mô với đội ngũ nhân tài giàu kinh nghiệm.",
      contactUs: "Liên hệ",
    },
  },
  services: {
    heroTitle: "DỊCH VỤ",
    heading: "DỊCH VỤ",
    nav: {
      mobile: "Phát triển ứng dụng di động",
      custom: "Phát triển phần mềm theo yêu cầu",
      testing: "Dịch vụ kiểm thử",
      legacy: "Chuyển đổi hệ thống",
      lowcode: "Phát triển Low-code",
      cloud: "Dịch vụ Cloud",
      ai: "Giải pháp AI",
    },
    groups: {
      outsourcing: "Dịch vụ Gia công phần mềm",
      advanced: "Công nghệ tiên tiến",
    },
    crossLinksHeading: "DỊCH VỤ KHÁC",
    mobile: {
      heroTitle: "Phát triển ứng dụng di động",
      intro:
        "Chúng tôi thiết kế và xây dựng ứng dụng native và đa nền tảng cho iOS và Android — từ ý tưởng, UX đến phát hành và bảo trì. Đội ngũ mobile tạo ra những ứng dụng đáng tin cậy, hiệu năng cao và thân thiện với mọi thiết bị.",
      features: {
        heading: "NHỮNG GÌ CHÚNG TÔI CUNG CẤP",
        items: [
          "Phát triển native iOS & Android",
          "Ứng dụng đa nền tảng (React Native, Flutter)",
          "Thiết kế UI/UX và prototype tương tác",
          "Phát hành lên App Store & Google Play",
          "Bảo trì & hỗ trợ sau ra mắt",
        ],
      },
      process: {
        heading: "QUY TRÌNH CỦA CHÚNG TÔI",
        steps: [
          { step: "01", title: "Thu thập & phân tích yêu cầu", desc: "Thu thập và đánh giá nhu cầu để xác định giải pháp tối ưu và phạm vi dự án." },
          { step: "02", title: "Thiết kế", desc: "Xây dựng luồng UI & UX, biến yêu cầu thành thiết kế trực quan, dễ kiểm thử." },
          { step: "03", title: "Phát triển", desc: "Tạo prototype chức năng, sau đó hoàn thiện ứng dụng theo thiết kế và yêu cầu." },
          { step: "04", title: "Kiểm thử", desc: "Thử nghiệm trên thiết bị thực trong suốt quá trình, chạy UAT và xác minh tích hợp." },
          { step: "05", title: "Ra mắt & hỗ trợ", desc: "Phát hành lên kho ứng dụng sau khi bạn nghiệm thu và đồng hành trong quá trình bảo trì." },
        ],
      },
      benefits: {
        heading: "VÌ SAO CHỌN CHÚNG TÔI",
        items: [
          "Đội ngũ mobile chuyên nghiệp, tận tâm",
          "Giao hàng đáng tin cậy, đúng hạn",
          "Tốc độ nhanh mà không đánh đổi chất lượng",
          "Chi phí cạnh tranh và minh bạch",
          "Tư duy sản phẩm sáng tạo, lấy người dùng làm trung tâm",
        ],
      },
      projects: {
        heading: "DỰ ÁN TIÊU BIỂU",
        items: [
          { title: "Ứng dụng Mobile Banking", desc: "Ứng dụng ngân hàng an toàn cho giao dịch và quản lý tài khoản mọi lúc.", stack: ["Spring Boot", "Android", "iOS"] },
          { title: "Nền tảng E-commerce Fulfillment", desc: "Nền tảng e-fulfillment đa kênh trên cả web và mobile.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
          { title: "Ứng dụng kiểm soát thiết bị", desc: "Ứng dụng kiểm soát dành cho phụ huynh quản lý thời gian dùng thiết bị.", stack: [".NET Core", "PHP", "Android", "iOS"] },
        ],
      },
      cta: {
        title: "Sẵn sàng xây ứng dụng di động?",
        desc: "Chia sẻ ý tưởng và chúng tôi sẽ cho bạn thấy đội ngũ mobile biến nó thành sản phẩm tinh tế, sẵn sàng ra mắt như thế nào.",
        contactUs: "Liên hệ",
      },
    },
    custom: {
      heroTitle: "Phát triển phần mềm theo yêu cầu",
      intro:
        "Chúng tôi xây phần mềm theo đúng yêu cầu của bạn — từ thiết kế đến phát triển, kiểm thử và bảo trì. Đội ngũ giàu kinh nghiệm đảm nhận phát triển ứng dụng, tích hợp API, hiện đại hóa hệ thống và tích hợp luồng nghiệp vụ, mang đến giải pháp hiệu quả và tiết kiệm nhất.",
      features: {
        heading: "NHỮNG GÌ CHÚNG TÔI CUNG CẤP",
        items: [
          "Ứng dụng web & doanh nghiệp theo yêu cầu",
          "Thiết kế, phát triển & tích hợp API",
          "Hiện đại hóa hệ thống legacy",
          "Tích hợp ứng dụng & quy trình nghiệp vụ",
          "Chuyển đổi số & quản trị dữ liệu",
        ],
      },
      process: {
        heading: "QUY TRÌNH CỦA CHÚNG TÔI",
        steps: [
          { step: "01", title: "Thu thập yêu cầu", desc: "Thu thập nhu cầu, kết quả mong muốn và tính năng dự kiến để xác định phạm vi." },
          { step: "02", title: "Phân tích & đề xuất", desc: "Đánh giá yêu cầu và đề xuất giải pháp giảm thiểu rủi ro, phù hợp ngân sách." },
          { step: "03", title: "Phát triển", desc: "Đội ngũ lập trình và xây dựng sản phẩm theo thiết kế và bộ yêu cầu đã thống nhất." },
          { step: "04", title: "Kiểm thử", desc: "Kiểm soát chất lượng qua kiểm thử chức năng, hệ thống, tích hợp, tải và nghiệm thu." },
          { step: "05", title: "Cài đặt & bảo trì", desc: "Hoàn tất triển khai và cung cấp hỗ trợ liên tục để đảm bảo ổn định lâu dài." },
        ],
      },
      benefits: {
        heading: "VÌ SAO CHỌN CHÚNG TÔI",
        items: [
          "Linh hoạt điều chỉnh theo yêu cầu của bạn",
          "Sản phẩm độc quyền bạn sở hữu và có thể mở rộng",
          "Đội ngũ kỹ sư kỷ luật, làm việc độc lập tốt",
          "Dễ nâng cấp khi bạn mở rộng quy mô kinh doanh",
          "Năng lực lớn để phân bổ nhiệm vụ song song",
        ],
      },
      projects: {
        heading: "DỰ ÁN TIÊU BIỂU",
        items: [
          { title: "Quản lý dịch vụ ô tô", desc: "Ứng dụng di động quản lý dịch vụ và đặt lịch ô tô.", stack: [".NET Core", "AngularJS"] },
          { title: "ERP quản lý công việc", desc: "ERP nội bộ theo dõi nhiệm vụ và quy trình làm việc nhóm.", stack: ["React", "MySQL", "Spring Boot", "AWS"] },
          { title: "E-commerce đa kênh", desc: "Nền tảng bán lẻ hợp nhất web, online và mobile.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
        ],
      },
      cta: {
        title: "Bạn có ý tưởng phần mềm riêng?",
        desc: "Chia sẻ yêu cầu và chúng tôi sẽ đề xuất kiến trúc cùng lộ trình phù hợp mục tiêu và ngân sách của bạn.",
        contactUs: "Liên hệ",
      },
    },
    testing: {
      heroTitle: "Dịch vụ kiểm thử",
      intro:
        "Chúng tôi cung cấp dịch vụ kiểm thử toàn diện trên mobile, web và nền tảng doanh nghiệp — phát hiện lỗi trước khi ra mắt để sản phẩm xuất xưởng với sự tự tin. Đội QA kết hợp chuyên môn thủ công và tự động hóa để giữ chất lượng cao và giao hàng nhanh.",
      features: {
        heading: "NHỮNG GÌ CHÚNG TÔI CUNG CẤP",
        items: [
          "Kiểm thử ứng dụng di động trên nhiều thiết bị & độ phân giải",
          "Kiểm thử tự động cho độ bao phủ lặp lại",
          "Kiểm thử ứng dụng web & đa trình duyệt",
          "Chu trình build & test 24/7 theo múi giờ",
          "Kiểm thử hiệu năng, bảo mật & hồi quy",
        ],
      },
      process: {
        heading: "QUY TRÌNH CỦA CHÚNG TÔI",
        steps: [
          { step: "01", title: "Phân tích yêu cầu", desc: "Thu thập và phân tích yêu cầu để xác định phạm vi kiểm thử." },
          { step: "02", title: "Lập kế hoạch kiểm thử", desc: "Xây dựng kế hoạch và chiến lược kiểm thử khi phạm vi đã rõ." },
          { step: "03", title: "Xây dựng kịch bản", desc: "Tạo các kịch bản kiểm thử thực thi trong và sau quá trình phát triển." },
          { step: "04", title: "Chuẩn bị môi trường", desc: "Chuẩn bị mọi môi trường và thiết bị cần thiết cho thực thi." },
          { step: "05", title: "Thực thi & báo cáo", desc: "Chạy script kiểm thử, ghi nhận mọi vấn đề và xác minh sửa lỗi cùng cả đội." },
        ],
      },
      benefits: {
        heading: "VÌ SAO CHỌN CHÚNG TÔI",
        items: [
          "Giảm rủi ro nhờ phát hiện lỗi sớm",
          "Chu trình phát hành nhanh hơn qua tự động hóa",
          "Bao phủ mobile, web & tầng tích hợp",
          "Kiểm thử liên tục không cần làm khuya",
          "Đã được chứng minh ở dự án quy mô doanh nghiệp",
        ],
      },
      capabilities: {
        heading: "NĂNG LỰC KIỂM THỬ CỐT LÕI",
        items: [
          { title: "Kiểm thử ứng dụng di động", desc: "Xác minh ứng dụng trên nhiều thiết bị và độ phân giải để có trải nghiệm liền mạch." },
          { title: "Kiểm thử tự động", desc: "Tự động hóa các bước lặp lại để đội ngũ tập trung vào lợi thế cạnh tranh." },
          { title: "Kiểm thử ứng dụng web", desc: "Quét trang web để giảm thiểu lỗ hổng và khắc phục lỗi chức năng, hiệu năng." },
          { title: "Kiểm thử liên tục 24/7", desc: "Tận dụng chênh lệch múi giờ để chạy chu trình build & test liên tục suốt ngày đêm." },
        ],
      },
      toolsHeading: "CÔNG CỤ & ĐỘ BAO PHỦ",
      cta: {
        title: "Cần một đối tác QA đáng tin?",
        desc: "Hãy để chúng tôi lo chất lượng — kể về sản phẩm của bạn và chúng tôi sẽ xây kế hoạch kiểm thử phù hợp.",
        contactUs: "Liên hệ",
      },
    },
    legacy: {
      heroTitle: "Chuyển đổi hệ thống",
      intro:
        "Chúng tôi tái cấu trúc quy trình trọn vẹn và di chuyển hệ thống legacy sang nền tảng hiện đại — bảo toàn toàn vẹn dữ liệu và các tính năng cốt lõi của mô hình hiện hữu với gián đoạn tối thiểu. Đội ngũ kỹ sư và tư vấn giàu kinh nghiệm trên nhiều nền tảng công nghệ.",
      features: {
        heading: "NHỮNG GÌ CHÚNG TÔI CUNG CẤP",
        items: [
          "Tái cấu trúc quy trình trọn vẹn từ A đến Z",
          "Di chuyển dữ liệu với toàn vẹn được bảo toàn",
          "Chuyển đổi legacy sang nền tảng hiện đại",
          "Giữ lại tính năng của mô hình hiện hữu",
          "Hỗ trợ trọn vòng đời, từ lập kế hoạch đến sau di chuyển",
        ],
      },
      process: {
        heading: "QUY TRÌNH CỦA CHÚNG TÔI",
        steps: [
          { step: "01", title: "Khảo sát", desc: "Xác định dữ liệu, định dạng, vị trí và mức độ tác động." },
          { step: "02", title: "Sao lưu", desc: "Sao lưu toàn bộ dữ liệu trước khi bắt đầu di chuyển." },
          { step: "03", title: "Lập kế hoạch", desc: "Xác định yêu cầu kỹ thuật, thời gian và tài chính." },
          { step: "04", title: "Di chuyển theo giai đoạn & kiểm thử", desc: "Di chuyển theo từng giai đoạn và kiểm thử sau mỗi giai đoạn." },
          { step: "05", title: "Làm sạch & nạp dữ liệu", desc: "Làm sạch dữ liệu, xử lý vấn đề phát sinh và nạp vào hệ thống mới." },
        ],
      },
      benefits: {
        heading: "VÌ SAO CHỌN CHÚNG TÔI",
        items: [
          "Toàn vẹn dữ liệu được bảo toàn suốt chuyển đổi",
          "Tính năng cốt lõi của mô hình cũ được giữ lại",
          "Vấn đề phát sinh tối thiểu trong quá trình di chuyển",
          "Hỗ trợ đầy đủ vòng đời dự án",
          "Kỹ sư giàu kinh nghiệm trên nhiều nền tảng",
        ],
      },
      values: {
        heading: "NHỮNG GÌ CHÚNG TÔI CAM KẾT",
        items: [
          { title: "Toàn vẹn dữ liệu", desc: "Dữ liệu của bạn luôn đầy đủ và chính xác trong suốt quá trình chuyển đổi." },
          { title: "Giữ nguyên tính năng", desc: "Các tính năng cốt lõi của mô hình hiện hữu được giữ lại trong hệ thống mới." },
          { title: "Gián đoạn tối thiểu", desc: "Cách tiếp cận theo giai đoạn giúp doanh nghiệp vận hành với ít vấn đề nhất." },
        ],
      },
      caseStudy: {
        heading: "CASE NỔI BẬT",
        title: "Flash sang HTML5 — nội dung giáo dục K12",
        desc: "Chúng tôi chuyển đổi hàng nghìn nội dung giáo dục K12 từ Flash legacy sang HTML5 hiện đại, giữ nguyên tính tương tác và sẵn sàng cho tương lai trên mọi thiết bị.",
        tag: "Giáo dục",
      },
      cta: {
        title: "Sẵn sàng hiện đại hóa hệ thống?",
        desc: "Kể về nền tảng legacy của bạn và chúng tôi sẽ vạch lộ trình di chuyển an toàn, theo từng giai đoạn lên nền tảng hiện đại.",
        contactUs: "Liên hệ",
      },
    },
    lowcode: {
      heroTitle: "Phát triển Low-code",
      intro:
        "Chúng tôi đẩy nhanh tiến độ bàn giao bằng các nền tảng low-code trực quan, cấu hình-driven — kết hợp thành phần dựng sẵn với phần mở rộng tùy chỉnh để bạn ra mắt ứng dụng tin cậy trong vài tuần thay vì vài quý.",
      capabilities: {
        heading: "CHÚNG TÔI CUNG CẤP",
        items: [
          { title: "Lắp ráp ứng dụng nhanh", desc: "Xây dựng form, màn hình và báo cáo từ công cụ trực quan, cấu hình-driven." },
          { title: "Tự động hóa quy trình", desc: "Mô hình hoá quy trình nghiệp vụ với quy tắc, phê duyệt và chuyển giao tự động." },
          { title: "Tích hợp hệ thống", desc: "Kết nối dữ liệu và hệ thống của bạn qua connector API và thành phần dựng sẵn." },
          { title: "Phần mở rộng tùy chỉnh", desc: "Bổ sung code tùy biến đúng nơi khả năng gốc của nền tảng dừng lại." },
          { title: "Quản trị & đào tạo", desc: "Bàn giao quyền sở hữu, đào tạo đội ngũ và quản lý vòng đời ứng dụng." },
        ],
      },
      process: {
        heading: "CÁCH CHÚNG TÔI THỰC HIỆN",
        steps: [
          { step: "01", title: "Mô hình hoá", desc: "Ánh xạ miền và quy trình của bạn thành mô hình dữ liệu và sơ đồ quy trình." },
          { step: "02", title: "Lắp ghép", desc: "Ghép màn hình, quy tắc và luồng dữ liệu từ công cụ trực quan của nền tảng." },
          { step: "03", title: "Mở rộng", desc: "Triển khai logic tùy chỉnh hoặc tích hợp vượt ngoài khả năng gốc của nền tảng." },
          { step: "04", title: "Kiểm chứng", desc: "Chạy qua các mốc kiểm thử chức năng, tích hợp và UAT trước khi phát hành." },
          { step: "05", title: "Tiến hoá", desc: "Đào tạo đội ngũ và quản trị thay đổi để ứng dụng mở rộng theo nhu cầu." },
        ],
      },
      platforms: {
        heading: "NỀN TẢNG CHÚNG TÔI XÂY DỰNG",
        items: ["OutSystems", "Mendix", "Appian", "Microsoft Power Platform", "ServiceNow"],
      },
      benefits: {
        heading: "VÌ SAO CHỌN CHÚNG TÔI",
        items: [
          "Bàn giao nhanh hơn trên các nền tảng low-code đã kiểm chứng",
          "Đội nghiệp vụ tự thay đổi mà không cần code",
          "Tích hợp sâu với các hệ thống hiện có của bạn",
          "Bảo mật và quản trị đạt chuẩn doanh nghiệp",
          "Lộ trình nâng cấp khi low-code chạm giới hạn",
        ],
      },
      projects: {
        heading: "DỰ ÁN TIÊU BIỂU",
        items: [
          { title: "Tự động hoá quy trình cho vay", desc: "Quy trình khởi tạo khoản vay low-code với phê duyệt tự động và sinh tài liệu.", stack: ["OutSystems", "PostgreSQL", "REST"] },
          { title: "Cổng vận hành hiện trường", desc: "Cổng kiểm tra hiện trường với form hoạt động offline và dashboard thời gian thực.", stack: ["Mendix", "Azure", "Power BI"] },
          { title: "Ứng dụng self-service nhân sự", desc: "Ứng dụng self-service cho nghỉ phép, onboarding và phê duyệt trên mọi thiết bị.", stack: ["Appian", "AWS", "SSO"] },
        ],
      },
      cta: {
        title: "Ra mắt nhanh hơn với low-code?",
        desc: "Cho chúng tôi thấy quy trình đang gây khó và chúng tôi sẽ vạch lộ trình low-code để tự động hoá nó.",
        contactUs: "Liên hệ",
      },
    },
    cloud: {
      heroTitle: "Dịch vụ Cloud",
      intro:
        "Chúng tôi thiết kế, di chuyển và vận hành hạ tầng cloud an toàn, quan sát được và tối ưu chi phí — từ landing zone và kỹ thuật nền tảng đến vận hành 24/7.",
      pillars: {
        heading: "TRỤ CỘT CLOUD CỦA CHÚNG TÔI",
        nut: "Bảo mật",
        bolt: "Kiểm soát chi phí",
        items: [
          { title: "Định vị & Di chuyển", desc: "Đánh giá, lập kế hoạch và di chuyển workload lên đúng cloud với thời gian gián đoạn tối thiểu." },
          { title: "Nền tảng & IaC", desc: "Cấp phát landing zone, mạng và nền tảng bằng infrastructure-as-code." },
          { title: "Quan sát & Bảo mật", desc: "Thiết lập giám sát, log và hàng rào bảo vệ ngay từ ngày đầu." },
          { title: "Vận hành & Tối ưu", desc: "Vận hành, tinh chỉnh và tối ưu liên tục cho độ tin cậy, chi phí và hiệu năng." },
        ],
      },
      certifications: {
        heading: "CHỨNG CHỈ & THỰC CHIẾN",
        items: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform"],
      },
      cta: {
        title: "Sẵn sàng cho một cloud được thiết kế chuẩn?",
        desc: "Kể chúng tôi bạn đang chạy ở đâu và muốn mở rộng tới đâu — chúng tôi sẽ vạch lộ trình di chuyển.",
        contactUs: "Liên hệ",
      },
    },
    ai: {
      heroTitle: "Giải pháp AI",
      intro:
        "Chúng tôi nhúng AI vào nơi tạo ra giá trị đo lường được — từ pipeline dữ liệu và feature store đến agent và retrieval dùng LLM. Đội AI của chúng tôi kết hợp phán đoán nghiên cứu với kỷ luật production.",
      capabilities: {
        heading: "NĂNG LỰC",
        items: [
          { title: "Kỹ thuật dữ liệu & Feature", desc: "Tuyển chọn, gán nhãn và biến đổi dữ liệu thành feature đáng tin cậy cho huấn luyện và suy luận." },
          { title: "Mô hình & Fine-tuning", desc: "Lựa chọn, tinh chỉnh và đánh giá mô hình — từ ML cổ điển đến LLM và VLM." },
          { title: "Retrieval & Agent", desc: "Xây dựng pipeline RAG và agent gọi công cụ hành động trên dữ liệu và quy trình của bạn." },
        ],
      },
      steps: {
        heading: "TỪ DỮ LIỆU ĐẾN GIÁ TRỊ",
        headingSuffix: "— Dòng chảy trí tuệ",
        items: [
          { step: "Dữ liệu", desc: "Thu thập và tuyển chọn dữ liệu đã gán nhãn, đáng tin cậy từ hệ thống của bạn." },
          { step: "Feature", desc: "Kỹ thuật feature và embedding mang đúng tín hiệu." },
          { step: "Mô hình", desc: "Huấn luyện, tinh chỉnh và đánh giá mô hình phù hợp cho bài toán." },
          { step: "Triển khai", desc: "Phục vụ và quan sát nó một cách tin cậy trong production." },
          { step: "Giá trị", desc: "Gắn mỗi lần triển khai với một kết quả kinh doanh đo lường được." },
        ],
      },
      stack: {
        heading: "CÔNG NGHỆ CỦA CHÚNG TÔI",
        items: ["OpenAI", "Azure AI", "LangChain", "Pinecone", "Snowflake", "dbt"],
      },
      projects: {
        heading: "AI TRONG SẢN XUẤT",
        items: [
          { title: "Agent xử lý tài liệu", desc: "Agent phân loại, trích xuất và định tuyến tài liệu giữa các hệ thống doanh nghiệp.", stack: ["OpenAI", "LangChain", "Azure"] },
          { title: "Mô hình dự báo nhu cầu", desc: "Mô hình chuỗi thời gian cải thiện độ chính xác dự báo trên các kênh bán lẻ.", stack: ["Python", "Snowflake", "dbt"] },
          { title: "Trợ lý hỗ trợ", desc: "Trợ lý RAG trả lời từ kho tri thức của bạn kèm nguồn trích dẫn.", stack: ["RAG", "Pinecone", "Next.js"] },
        ],
      },
      cta: {
        title: "Có use case AI?",
        desc: "Mô tả quy trình bạn muốn làm cho thông minh và chúng tôi sẽ vạch lộ trình từ dữ liệu đến triển khai.",
        contactUs: "Liên hệ",
      },
    },
  },
  companyPage: {
    heroTitle: "CÔNG TY",
    philosophy: {
      heading: "TRIẾT LÝ KINH DOANH",
      desc: "SV Digital Software cam kết xây dựng một thương hiệu phần mềm đáng tin cậy thông qua những mối quan hệ hợp tác lâu dài trên thị trường IT toàn cầu. Công nghệ thay đổi nhanh chóng, nhưng chúng tôi tin điều quan trọng nhất luôn là sự phù hợp — phần mềm đáp ứng đúng yêu cầu của khách hàng, được bàn giao với kỷ luật, sự minh bạch và tận tâm.",
    },
    values: {
      heading: "GIÁ TRỊ CỐT LÕI",
      items: [
        { title: "Năng lực phân phối", desc: "Phân phối trọn vẹn từ A đến Z — từ yêu cầu và kiến trúc đến phát triển, kiểm thử, triển khai và bảo trì dài hạn." },
        { title: "Tiêu chuẩn toàn cầu", desc: "Chúng tôi áp dụng các tiêu chuẩn kỹ thuật và chất lượng quốc tế để mọi dự án đều đạt kỳ vọng, ở bất kỳ đâu trên thế giới." },
        { title: "Con người là trung tâm", desc: "Chúng tôi thu hút, đào tạo và giữ chân những kỹ sư tài năng — nền tảng đằng sau mọi dự án thành công mà chúng tôi bàn giao." },
        { title: "Chất lượng được chứng nhận", desc: "Quy trình QA kỷ luật và các thực hành quản lý chất lượng được công nhận quốc tế, áp dụng cho mọi bản phát hành." },
      ],
    },
    vision: {
      heading: "TẦM NHÌN",
      desc: "SV Digital Software hướng tới trở thành đối tác hàng đầu trong lĩnh vực phát triển phần mềm theo yêu cầu, di chuyển & bảo trì hệ thống cũ, và chuyển đổi số — giúp doanh nghiệp hiện đại hóa một cách tự tin và tăng trưởng trên nền tảng công nghệ vững chắc.",
    },
    ceo: {
      label: "THÔNG ĐIỆP TỪ CEO",
      name: "James Whitfield",
      role: "Giám đốc đại diện & CEO",
      desc: "Lời hứa của chúng tôi với mọi khách hàng rất đơn giản: hiểu sâu, xây dựng trung thực và bàn giao trọn vẹn. Chúng tôi coi mỗi dự án là một cam kết lâu dài — và đo lường thành công bằng việc phần mềm của bạn vận hành tốt ra sao nhiều năm sau khi ra mắt, chứ không chỉ ở thời điểm bàn giao.",
    },
    factSheet: {
      heading: "FACT SHEET",
      rows: [
        { label: "Tên công ty", value: "SV Digital Software Co., Ltd." },
        { label: "Ngày thành lập", value: "8 tháng 7, 2022" },
        { label: "Lĩnh vực hoạt động", value: "Phát triển phần mềm theo yêu cầu · Giải pháp di động · Dịch vụ kiểm thử · Chuyển đổi hệ thống cũ" },
        { label: "Công nghệ cốt lõi", value: "TypeScript / React / Next.js · Python · Snowflake / dbt · AWS / GCP / Azure" },
      ],
    },
    partners: {
      heading: "ĐỐI TÁC CÔNG NGHỆ",
      desc: "Chúng tôi xây dựng trên các nền tảng tiên tiến, đã được kiểm chứng trong ngành và duy trì quan hệ hợp tác chặt chẽ với các hệ sinh thái đằng sau chúng.",
      items: ["AWS", "Google Cloud", "Microsoft Azure", "Snowflake", "dbt", "Docker"],
    },
    awards: {
      heading: "THÀNH TÍCH GIẢI THƯỞNG",
      items: [
        { date: "2017.04.06", title: "Chương trình Tăng tốc Fintech MUFG \"Giải Á quân\"", desc: "Được chọn từ hàng trăm ứng viên và hợp tác cùng kabu.com Securities — nền tảng cho kinh nghiệm xây dựng phần mềm trọng yếu cho các ngành có quy định nghiêm ngặt." },
        { date: "2023.08.22", title: "Tiêu chuẩn bàn giao an toàn — 3 năm liên tiếp không có sự cố nghiêm trọng", desc: "Quy trình QA kỷ luật của chúng tôi vượt qua mọi đợt đánh giá bảo mật bên ngoài, không có sự cố nào liên quan tới bug hay lỗ hổng bị sót." },
        { date: "2025.03.17", title: "Giải Đặc biệt — Google Cloud Innovation Awards lần 3", desc: "Nền tảng ứng dụng & dữ liệu cloud-native của chúng tôi giành Giải Đặc biệt nhờ kiến trúc bền vững, hiệu năng mở rộng và trải nghiệm developer tinh gọn." },
        { date: "2025.06.05", title: "Niềm tin & gắn bó dài hạn — bàn giao đúng hạn 100%, tỉ lệ khách hàng quay lại 100%", desc: "Mọi mốc cam kết đều được bàn giao đúng hạn và mọi khách hàng đều tiếp tục hợp tác lâu dài sau dự án đầu tiên." },
      ],
    },
    contact: {
      heading: "LIÊN HỆ",
      desc: "Để được tư vấn về giải pháp, hợp tác hoặc bất kỳ điều gì khác, vui lòng liên hệ qua biểu mẫu của chúng tôi.",
      contactUs: "Liên hệ",
    },
  },
  recruitPage: {
    heroTitle: "TUYỂN DỤNG",
    intro: "SV Digital Software là một đội ngũ kỹ sư và những người làm sản phẩm. Chúng tôi sống cùng năm nguyên tắc — \"Theo đuổi sự xuất sắc về chất lượng\", \"Dám nghĩ dám làm\", \"Mạnh mẽ hơn khi cùng nhau\", \"Chính trực và tin cậy\" và \"Ôm lấy sự thay đổi\" — và tạo ra những phần mềm thực sự có ý nghĩa. Nếu bạn yêu thích việc xây dựng sản phẩm tinh tế, giải những bài toán khó và cùng chia sẻ trách nhiệm với những gì mình tạo ra, nơi này dành cho bạn.",
    career: {
      heading: "CƠ HỘI NGHỀ NGHIỆP",
      desc: "Các vị trí hiện tại của chúng tôi trải dài từ kỹ thuật nền tảng và AI ứng dụng đến thiết kế sản phẩm. Mỗi vai trò đều tạo ra phần mềm thực với tác động thực — hãy khám phá bên dưới và cho chúng tôi biết bạn muốn đóng góp như thế nào.",
    },
    apply: "Xem chi tiết",
    applySubject: "Ứng tuyển vị trí — ",
    applyBody:
      "Kính gửi Bộ phận Tuyển dụng SV Digital Software,\n\nTôi muốn ứng tuyển vị trí {title}.\n\nHọ và tên: \nEmail: \nĐiện thoại: \nĐịa chỉ: \nSố năm kinh nghiệm: \nPortfolio / LinkedIn: \n\nLời nhắn: \n\n\nXin cảm ơn.",
    jobs: [
      { slug: "full-stack-engineer", title: "Kỹ sư Full-Stack — React / Next.js / Node.js", shortTitle: "Kỹ sư Full-Stack", location: "Từ xa", type: "Toàn thời gian", desc: "Thiết kế và phát triển ứng dụng web trọn vẹn — từ frontend responsive với React và Next.js đến API Node.js và cơ sở dữ liệu mở rộng được." },
      { slug: "data-engineer", title: "Kỹ sư Dữ liệu — Snowflake / dbt / Cloud", shortTitle: "Kỹ sư Dữ liệu", location: "Từ xa", type: "Toàn thời gian", desc: "Xây dựng và bảo trì nền tảng dữ liệu hiện đại — mô hình hoá kho dữ liệu, transformation với dbt và pipeline cloud biến dữ liệu thô thành phân tích đáng tin cậy." },
      { slug: "ai-engineer", title: "Kỹ sư AI — LLM & Tác nhân dữ liệu tạo sinh", shortTitle: "Kỹ sư AI", location: "Từ xa", type: "Toàn thời gian", desc: "Phát triển tính năng dựa trên LLM và tác nhân dữ liệu tạo sinh — retrieval, tool-calling và đánh giá cho sản phẩm AI production." },
      { slug: "product-manager", title: "Quản lý Sản phẩm — Sản phẩm Dữ liệu & AI", shortTitle: "Quản lý Sản phẩm", location: "Từ xa", type: "Toàn thời gian", desc: "Sở hữu lộ trình sản phẩm dữ liệu & AI — chuyển nhu cầu khách hàng thành đặc tả rõ ràng và dẫn dắt triển khai cùng kỹ thuật và thiết kế." },
      { slug: "platform-engineer", title: "Kỹ sư Phần mềm — Nền tảng & Hạ tầng", shortTitle: "Kỹ sư Phần mềm", location: "Từ xa", type: "Toàn thời gian", desc: "Xây dựng nền tảng vận hành sản phẩm — CI/CD, hạ tầng cloud, observability và công cụ cho developer." },
      { slug: "uiux-designer", title: "Thiết kế UI/UX — Hệ thống Thiết kế & Sản phẩm", shortTitle: "Thiết kế UI/UX", location: "Từ xa", type: "Toàn thời gian", desc: "Thiết kế giao diện trực quan và duy trì design system — từ nghiên cứu, wireframe đến màn hình sản phẩm hoàn thiện, dễ tiếp cận." },
    ],
    jobDetail: {
      backToJobs: "Quay lại tất cả vị trí",
      descriptionHeading: "MÔ TẢ CÔNG VIỆC",
      requirementsHeading: "YÊU CẦU ỨNG VIÊN",
      benefitsHeading: "QUYỀN LỢI ĐƯỢC HƯỞNG",
      specialHeading: "VÌ SAO NÊN GIA NHẬP",
      apply: "Ứng tuyển vị trí này",
      benefits: [
        "Mức lương cạnh tranh, xét tăng 2 lần/năm, kèm thưởng theo hiệu suất.",
        "Làm việc hoàn toàn từ xa với giờ giấc linh hoạt theo múi giờ.",
        "Nghỉ phép năm và ngày lễ, kèm nghỉ ốm có lương.",
        "Bảo hiểm sức khỏe và phụ cấp wellbeing hằng tháng.",
        "Ngân sách học tập hằng năm cho khóa học, sách và hội thảo.",
        "Company retreat và các hoạt động team-building thường xuyên.",
        "Thiết bị hiện đại và phụ cấp setup văn phòng tại nhà.",
      ],
      special: [
        "Làm việc trên sản phẩm thực, khách hàng thực, với tác động rõ ràng.",
        "Hỗ trợ 100% chi phí thi chứng chỉ IT liên quan.",
        "Lộ trình phát triển rõ ràng với mentor và các buổi 1:1 định kỳ.",
        "Đội ngũ nhỏ, giàu kinh nghiệm, nơi ý tưởng của bạn định hình cách làm việc.",
      ],
      jobs: {
        "full-stack-engineer": {
          description: [
            "Xây dựng và bảo trì tính năng trên toàn bộ stack — frontend responsive với React / Next.js và API Node.js.",
            "Thiết kế schema cơ sở dữ liệu và viết truy vấn hiệu quả cho kho quan hệ và document.",
            "Tích hợp dịch vụ bên thứ ba và API nội bộ, xử lý xác thực, cache và các luồng lỗi.",
            "Phối hợp với designer và product manager để bàn giao trải nghiệm người dùng hoàn thiện, dễ tiếp cận.",
            "Viết test, review pull request và góp phần nâng cao chuẩn kỹ thuật.",
          ],
          requirements: [
            "2+ năm xây dựng ứng dụng web production với React và Node.js.",
            "Hiểu vững TypeScript, REST / GraphQL API và công cụ frontend hiện đại.",
            "Kinh nghiệm với ít nhất một cơ sở dữ liệu quan hệ (PostgreSQL hoặc MySQL).",
            "Quen thuộc với quy trình Git, code review và CI/CD.",
            "Kỹ năng giải quyết vấn đề tốt và giao tiếp viết rõ ràng bằng tiếng Anh.",
          ],
        },
        "data-engineer": {
          description: [
            "Thiết kế và xây dựng pipeline dữ liệu di chuyển và biến đổi dữ liệu trên cloud warehouse.",
            "Mô hình hoá dữ liệu với dbt và duy trì các transformation có version và được kiểm thử.",
            "Tối ưu hiệu năng và chi phí warehouse trên Snowflake và cloud storage.",
            "Phối hợp với analyst và đội sản phẩm để bàn giao dataset đáng tin cậy, có tài liệu.",
            "Giám sát sức khỏe pipeline và xử lý sự cố chất lượng dữ liệu.",
          ],
          requirements: [
            "2+ năm trong data engineering hoặc analytics engineering.",
            "SQL vững và kinh nghiệm thực chiến với dbt cùng cloud warehouse (ưu tiên Snowflake).",
            "Kinh nghiệm với ít nhất một nền tảng cloud (AWS, GCP hoặc Azure).",
            "Hiểu về data modelling, mô hình ELT và kiểm thử chất lượng dữ liệu.",
            "Thoải mái dùng Python cho scripting và tự động hóa.",
          ],
        },
        "ai-engineer": {
          description: [
            "Xây dựng tính năng dựa trên LLM — retrieval-augmented generation, tool-calling và agentic workflow.",
            "Thiết kế và chạy evaluation để đo lường và cải thiện chất lượng đầu ra của model.",
            "Tích hợp model vào dịch vụ production với monitoring, guardrail và kiểm soát chi phí.",
            "Prototype các tác nhân dữ liệu tạo sinh và đưa ý tưởng triển vọng vào sản phẩm.",
            "Cập nhật hệ sinh thái LLM và chia sẻ kiến thức với đội.",
          ],
          requirements: [
            "2+ năm software engineering với kinh nghiệm LLM / AI thực chiến gần đây.",
            "Kinh nghiệm với ít nhất một LLM API (OpenAI, Anthropic hoặc tương tự) và prompt engineering.",
            "Python vững và quen thuộc với vector store và hệ thống retrieval.",
            "Hiểu về evaluation, đánh đổi latency và chi phí trong AI production.",
            "Tò mò và nghiêm ngặt khi thử nghiệm model và kỹ thuật mới.",
          ],
        },
        "product-manager": {
          description: [
            "Sở hữu lộ trình sản phẩm dữ liệu & AI từ khám phá đến bàn giao.",
            "Chuyển nhu cầu khách hàng và stakeholder thành đặc tả rõ ràng, có ưu tiên.",
            "Làm việc hằng ngày với kỹ thuật và thiết kế để giữ tiến độ bàn giao.",
            "Định nghĩa chỉ số thành công và dùng dữ liệu để dẫn dắt quyết định sản phẩm.",
            "Truyền đạt tiến độ và đánh đổi rõ ràng tới stakeholder.",
          ],
          requirements: [
            "3+ năm product management, ưu tiên sản phẩm kỹ thuật hoặc dữ liệu.",
            "Khả năng viết spec và user story sắc nét để kỹ sư triển khai được.",
            "Thoải mái làm việc với kỹ sư về đánh đổi kiến trúc và phạm vi.",
            "Kỹ năng phân tích mạnh và quen thuộc với product analytics.",
            "Giao tiếp xuất sắc và quản lý stakeholder tốt.",
          ],
        },
        "platform-engineer": {
          description: [
            "Xây dựng và bảo trì pipeline CI/CD và hạ tầng cloud mà sản phẩm vận hành trên đó.",
            "Cải thiện trải nghiệm developer với công cụ, template và tài liệu.",
            "Triển khai observability — logging, metrics và alerting — trên toàn bộ dịch vụ.",
            "Củng cố hạ tầng về bảo mật, độ tin cậy và hiệu quả chi phí.",
            "Hỗ trợ đội kỹ thuật và xử lý sự cố hạ tầng.",
          ],
          requirements: [
            "2+ năm trong platform, DevOps hoặc infrastructure engineering.",
            "Kinh nghiệm thực chiến với ít nhất một cloud lớn (AWS, GCP hoặc Azure).",
            "Kinh nghiệm với container, Kubernetes và infrastructure-as-code (Terraform).",
            "Quen thuộc với hệ thống CI/CD và công cụ observability.",
            "Kỹ năng scripting mạnh (Bash, Python) và tư duy hướng độ tin cậy.",
          ],
        },
        "uiux-designer": {
          description: [
            "Thiết kế giao diện trực quan cho sản phẩm web và mobile từ nghiên cứu đến handoff.",
            "Duy trì và phát triển design system để đảm bảo nhất quán và tốc độ.",
            "Tạo wireframe, prototype và màn hình high-fidelity.",
            "Phối hợp với kỹ sư để đảm bảo thiết kế được xây dựng chính xác và dễ tiếp cận.",
            "Chạy kiểm tra usability và lặp lại dựa trên phản hồi.",
          ],
          requirements: [
            "2+ năm thiết kế sản phẩm số với portfolio mạnh.",
            "Thành thạo Figma và quy trình thiết kế hiện đại.",
            "Kinh nghiệm xây dựng hoặc duy trì design system.",
            "Hiểu về accessibility và thiết kế responsive.",
            "Giao tiếp rõ ràng và thoải mái làm việc gần với kỹ sư.",
          ],
        },
      },
    },
  },
  technologiesPage: {
    heroTitle: "CÔNG NGHỆ",
    intro:
      "Chúng tôi tập trung nghiên cứu và làm chủ các công nghệ hiện đại, tiên phong trong nhiều lĩnh vực. Đội ngũ của chúng tôi tận dụng các framework, thư viện và công cụ hàng đầu để xây dựng những giải pháp vững chắc, có khả năng mở rộng cho khách hàng.",
    categories: {
      frontend: "FRONTEND",
      backend: "BACKEND",
      mobile: "MOBILE",
      cloud: "CLOUD & HẠ TẦNG",
      database: "CƠ SỞ DỮ LIỆU",
      ai: "AI & CÔNG NGHỆ MỚI NỔI",
    },
    categoryDesc: {
      frontend:
        "Giao diện đẹp, nhanh và dễ tiếp cận — xây dựng bằng các framework hiện đại theo hướng component cho trải nghiệm mượt mà trên mọi thiết bị.",
      backend:
        "Hệ thống phía server và API đáng tin cậy, bảo mật và có khả năng mở rộng — là nền tảng vận hành logic nghiệp vụ và tích hợp mọi thứ.",
      mobile:
        "Ứng dụng native và đa nền tảng mang cảm giác quen thuộc trên iOS lẫn Android — một codebase, hai kho ứng dụng, trải nghiệm nhất quán.",
      cloud:
        "Kiến trúc cloud-native, container và pipeline tự động giúp sản phẩm bền vững, quan sát được và dễ triển khai.",
      database:
        "Kho dữ liệu phù hợp cho mọi khối lượng công việc — quan hệ, tài liệu hay in-memory — thiết kế để đạt hiệu suất, tính toàn vẹn và khả năng mở rộng.",
      ai:
        "Từ AI tạo sinh và tích hợp LLM đến machine learning và thị giác máy tính — chúng tôi biến công nghệ mới nổi thành giá trị sản phẩm thực.",
    },
    projects: {
      heading: "DỰ ÁN TIÊU BIỂU",
      viewAll: "Xem tất cả dịch vụ",
      items: [
        { title: "Ứng dụng Mobile Banking", desc: "Ứng dụng ngân hàng an toàn cho giao dịch và quản lý tài khoản mọi lúc, triển khai trên iOS và Android.", stack: ["Spring Boot", "Android", "iOS"] },
        { title: "ERP quản lý công việc", desc: "Hệ thống ERP nội bộ theo dõi nhiệm vụ và quy trình làm việc nhóm, xây dựng cho vận hành hằng ngày của khách hàng.", stack: ["React", "MySQL", "Spring Boot", "AWS"] },
        { title: "E-commerce đa kênh", desc: "Nền tảng bán lẻ hợp nhất kênh web, online và mobile thành một trải nghiệm mua sắm liền mạch.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
      ],
    },
  },
};

export const lo: Dictionary = {
  header: {
    nav: {
      solution: "ບໍລິການ",
      technologies: "ເທັກໂນໂລຢີ",
      company: "ກ່ຽວກັບພວກເຮົາ",
      recruit: "ຮັບສະໝັກງານ",
    },
    contact: "ຕິດຕໍ່",
    homeAria: "ໜ້າຫຼັກ SV Digital Software",
    openMenu: "ເປີດເມນູ",
    closeMenu: "ປິດເມນູ",
  },
  language: {
    en: "English",
    vi: "Tiếng Việt",
    lo: "ພາສາລາວ",
  },
  marquee: {
    text: "ໂຄ້ດບໍ່ເຄີຍໂກຫກ, ຄຳເຫັນບາງຄັ້ງກໍໂກຫກ.",
  },
  footer: {
    headings: {
      services: "ບໍລິການ",
      company: "ບໍລິສັດ",
      contact: "ຕິດຕໍ່",
    },
    tagline:
      "ພວກເຮົາອອກແບບ, ພັດທະນາ ແລະ ບຳລຸງຮັກສາຜະລິດຕະພັນດິຈິຕອນແບບຄົບວົງຈອນ — ແອັບເວັບ, ແອັບມືຖື, ລະບົບວິສາຫະກິດ ແລະ ແພລດຟອມຂໍ້ມູນທັນສະໄໝ.",
    followUs: "ຕິດຕາມພວກເຮົາ",
    contact: "ຕິດຕໍ່",
    copyright: "©SV Digital Software Co. Ltd. ສະຫງວນລິຂະສິດ.",
    companyInfo:
      "SV Digital Software Co., Ltd.\nວິທີແກ້ໄຂຊອບແວດິຈິຕອນ & AI\nລອນດອນ, ສະຫະລາຊະອານາຈັກ",
    backToTop: "ກັບຂຶ້ນເທິງ",
  },
  contact: {
    heroTitle: "ຕິດຕໍ່",
    heading: "ຕິດຕໍ່ພວກເຮົາ",
    description:
      "ພວກເຮົາອອກແບບ, ພັດທະນາ ແລະ ສົ່ງມອບຜະລິດຕະພັນເວັບ ແລະ ຊອບແວ — ຕັ້ງແຕ່ແອັບພລິເຄຊັນຕາມຄວາມຕ້ອງການ ຈົນເຖິງແພລດຟອມຂໍ້ມູນ ແລະ ວິທີແກ້ໄຂດ້ວຍ AI. ບອກພວກເຮົາກ່ຽວກັບໂປຣເຈັກຂອງທ່ານ ແລະ ທີມຂອງພວກເຮົາຈະຕິດຕໍ່ກັບ.",
    notice:
      "ກະລຸນາໃຊ້ປຸ່ມດ້ານລຸ່ມເພື່ອສອບຖາມກ່ຽວກັບທຸລະກິດ ຫຼື ບໍລິການຂອງພວກເຮົາ. ພວກເຮົາຂໍຄວາມກະລຸນາໃຫ້ຫຼີກລ່ຽງການສົ່ງຈົດໝາຍຂາຍສິນຄ້າ, ເັ່ນ ໍລິການຈ້າງງານ. ຂຶ້ນກັບເນື້ອໃນຂອງຄຳຖາມ, ອາດໃຊ້ເວລາໃນການຕອບ ຫຼື ພວກເຮົາອາດບໍ່ສາມາດຕອບໄດ້. ຂອບໃຈໃນຄວາມເຂົ້າໃຈຂອງທ່ານ.",
    emailButton: "ສົ່ງອີເມວ",
    emailSubject: "ຄຳຖາມ — SV Digital Software",
    emailLabel: "ອີເມວ",
    phoneLabel: "ໂທລະສັບ",
    addressLabel: "ສຳນັກງານ",
    address: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom",
    hoursLabel: "ເວລາເຮັດວຽກ",
    hours: "ຈັນ–ສຸກ, 9:00–18:00 (JST)",
    followUs: "ຕິດຕາມພວກເຮົາ",
  },
  hero: {
    titleLine1: "ກ້າວຂ້າມຂີດຈຳກັດດ້ວຍ",
    titleLine2: "ຊອບແວດິຈິຕອນ & AI",
    subtitle:
      "SV Digital Software ອອກແບບ ແລະ ພັດທະນາຜະລິດຕະພັນດິຈິຕອນ, ແພລດຟອມຂໍ້ມູນ ແລະ ວິທີແກ້ໄຂ AI. ພວກເຮົາປະສົມປະສານວິສະວະກຳລ້ຳສະໄໝ ັບ ວາມຊ່ຽວຊານເລິກເຊິ່ງ ເພື່ອສົ່ງມອບຊອບແວທີ່ຕອບສະໜອງມາດຕະຖານສູງສຸດຂອງລູກຄ້າ.",
    cta: "ຕິດຕໍ່",
  },
  solutions: {
    heading: "ບໍລິການ",
    dataSolution: {
      title: "ບໍລິການ",
      desc: "SV Digital Software ອອກແບບ, ພັດທະນາ ແລະ ບຳລຸງຮັກສາຜະລິດຕະພັນດິຈິຕອນແບບຄົບວົງຈອນ — ແອັບເວັບ, ແອັບມືຖື, ລະບົບວິສາຫະກິດ ແລະ ແພລດຟອມຂໍ້ມູນທັນສະໄໝ. ຕັ້ງແຕ່ການອອກແບບ UX, ໂຄງສ້າງລະບົບ ຈົນເຖິງການພັດທະນາ, ທົດສອບ ແລະ ຊ່ວຍເຫຼືອໄລຍະຍາວ, ທີມວິສະວະກອນຂອງພວກເຮົາປ່ຽນຄວາມຕ້ອງການທາງທຸລະກິດໃຫ້ເປັນຊອບແວທີ່ປອດໄພ, ຂະຫຍາຍໄດ້, ສົ່ງມອບຕາມກຳນົດ ແລະ ເຕີບໂຕໄປພ້ອມກັບທຸລະກິດຂອງທ່ານ.",
      learnMore: "ຮຽນຮູ້ເພີ່ມເຕີມ",
    },
  },
  companyTeaser: {
    heading: "ບໍລິສັດ",
    desc: "SV Digital Software ແມ່ນບໍລິສັດພັດທະນາຊອບແວ ທີ່ສົ່ງມອບຜະລິດຕະພັນດິຈິຕອນແບບຄົບວົງຈອນ — ແອັບເວັບ, ແອັບມືຖື, ລະບົບວິສາຫະກິດ ແລະ ແພລດຟອມຂໍ້ມູນ. ພວກເຮົາປະສົມປະສານເທັກນິກທັນສະໄໝ, ຂະບວນການທົດສອບທີ່ເຂັ້ມງວດ ແລະ ການຊ່ວຍເຫຼືອໄລຍະຍາວ ເພື່ອສ້າງຊອບແວທີ່ປອດໄພ ແລະ ຂະຫຍາຍໄດ້, ຊ່ວຍໃຫ້ທຸລະກິດດຳເນີນການຢ່າງມີປະສິດທິພາບ ແລະ ເຕີບໂຕຢ່າງໝັ້ນຄົງ.",
    readMore: "ອ່ານເພີ່ມເຕີມ",
  },
  recruitTeaser: {
    heading: "ຮັບສະໝັກງານ",
    desc: "ພວກເຮົາແມ່ນວິສະວະກອນ ແລະ ນັກສ້າງ. ດ້ວຍຄຸນຄ່າຂອງການສ້າງສັນຢ່າງເປັນເລີດ, ຄິດຢ່າງກ້າຫານ, ສ້າງຮ່ວມກັນ, ສ້າງຄວາມໄວ້ເນື້ອເຊື່ອໃຈ ແລະ ອ້ອມຮັບການປ່ຽນແປງ, ພວກເຮົາສົ່ງມອບຜະລິດຕະພັນດິຈິຕອນທີ່ຍືນຍົງ. ຖ້າສິ່ງນີ້ກົງໃຈທ່ານ — ມາສ້າງເວີຊັນຕໍ່ໄປກັບພວກເຮົາ.",
    readMore: "ອ່ານເພີ່ມເຕີມ",
  },
  solutionPage: {
    heroTitle: "ບໍລິການ",
    heading: "ບໍລິການ",
    dataSolution: {
      title: "ບໍລິການ",
      desc: "SV Digital Software ສົ່ງມອບຊອບແວຕາມຄວາມຕ້ອງການແບບຄົບວົງຈອນ — ແອັບເວັບ ແລະ ລະບົບວິສາຫະກິດ, ແອັບມືຖື, ການທົດສອບ ແລະ ການອັດຕະໂນມັດການທົດສອບ, ການປັບປຸງລະບົບເກົ່າໃຫ້ທັນສະໄໝ ແລະ ແພລດຟອມຂໍ້ມູນທີ່ພ້ອມສຳລັບ cloud. ທີມງານທີ່ມີປະສົບການຮັບຜິດຊອບໂປຣເຈັກຂອງທ່ານຕັ້ງແຕ່ການເກັບຄວາມຕ້ອງການ ແລະ ໂຄງສ້າງ ຈົນເຖິງການພັດທະນາ, ທົດສອບ, ນຳໃຊ້ ແລະ ບຳລຸງຮັກສາຕະຫຼອດໄປ — ຄູ່ຮ່ວມງານດຽວທີ່ຮັບຜິດຊອບທັງວົງຈອນຊີວິດຜະລິດຕະພັນ.",
      contactUs: "ຕິດຕໍ່ພວກເຮົາ",
    },
    cta: {
      title: "ທ່ານມີໂປຣເຈັກໃນໃຈບໍ?",
      desc: "ຢ່າລັງເລທີ່ຈະຕິດຕໍ່ພວກເຮົາ ເພື່ອຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບວິທີທີ່ພວກເຮົານຳໃຊ້ເທັກໂນໂລຢີລ້ຳສະໄໝເຂົ້າໃນໂປຣເຈັກຂອງທ່ານ — ແລະ ຄວາມສາມາດທີ່ເຂັ້ມແຂງຂອງ SV Digital Software ໃນການສົ່ງມອບໂປຣເຈັກໃນທຸກຂະໜາດ ດ້ວຍທີມບຸກຄະລາກອນທີ່ມີປະສົບການ.",
      contactUs: "ຕິດຕໍ່ພວກເຮົາ",
    },
  },
  services: {
    heroTitle: "ບໍລິການ",
    heading: "ບໍລິການ",
    nav: {
      mobile: "ພັດທະນາແອັບມືຖື",
      custom: "ພັດທະນາຊອບແວຕາມຄຳຂໍ",
      testing: "ບໍລິການທົດສອບ",
      legacy: "ຍ້າຍລະບົບເກົ່າ",
      lowcode: "ການພັດທະນາ Low-code",
      cloud: "ບໍລິການ Cloud",
      ai: "ວິທີແກ້ໄຂ AI",
    },
    groups: {
      outsourcing: "ບໍລິການ Outsource ຊອບແວ",
      advanced: "ເທັກໂນໂລຢີຂັ້ນສູງ",
    },
    crossLinksHeading: "ບໍລິການອື່ນ",
    mobile: {
      heroTitle: "ພັດທະນາແອັບມືຖື",
      intro:
        "ພວກເຮົາອອກແບບ ແລະ ພັດທະນາແອັບມືຖືທັງແບບ native ແລະ ແບບຂ້າມແພລດຟອມ ຳລັບ iOS ແລະ Android — ຕັ້ງແຕ່ແນວຄິດ ແລະ UX ຈົນເຖິງການເປີດໃຊ້ ແລະ ການບຳລຸງຮັກສາ. ທີມມືຖືຂອງພວກເຮົາສົ່ງມອບແອັບທີ່ເຊື່ອຖືໄດ້, ເຮັດວຽກໄວ ແລະ ໃຊ້ງ່າຍເທິງທຸກອຸປະກອນ.",
      features: {
        heading: "ສິ່ງທີ່ພວກເຮົາສົ່ງມອບ",
        items: [
          "ພັດທະນາແບບ native iOS ແລະ Android",
          "ແອັບຂ້າມແພລດຟອມ (React Native, Flutter)",
          "ອອກແບບ UI/UX ແລະ ເຮັດຕົ້ນແບບ",
          "ເປີດໃຊ້ເທິງ App Store ແລະ Google Play",
          "ບຳລຸງຮັກສາ ແລະ ຊ່ວຍເຫຼືອຫຼັງເປີດໃຊ້",
        ],
      },
      process: {
        heading: "ຂັ້ນຕອນການເຮັດວຽກ",
        steps: [
          { step: "01", title: "ຮວບຮວມ ແລະ ວິເຄາະຄວາມຕ້ອງການ", desc: "ຮວບຮວມ ແລະ ປະເມີນຄວາມຕ້ອງການຂອງທ່ານ ເພື່ອກຳນົດວິທີແກ້ໄຂທີ່ເໝາະສົມ ແລະ ໂຄງ່າງໂປເຈັກ." },
          { step: "02", title: "ອອກແບບ", desc: "ອອກແບບໜ້າຈໍ UI ແລະ ເສັ້ນທາງ UX ເພ່ອປ່ຽນຄວາມຕ້ອງການໃຫ້ເປັນການອອກແບບທີ່ເຂົ້າໃຈງ່າຍ." },
          { step: "03", title: "ພັດທະນາ", desc: "ສ້າງຕົ້ນແບບທີ່ໃຊ້ງານໄດ້ ຈາກນັ້ນພັດທະນາແອັບໃຫ້ຄົບຖ້ວນຕາມການອອກແບບ." },
          { step: "04", title: "ທົດສອບ", desc: "ທົດສອບເທິງອຸປະກອນຈິງຕະຫຼອດຂັ້ນຕອນ ແລະ ຳເນີນການຮັບອງຈາກູ້ໃຊ້ (UAT)." },
          { step: "05", title: "ເປີດໃຊ້ ແລະ ຊ່ວຍເຫຼືອ", desc: "ນຳແອັບຂຶ້ນຮ້ານຫຼັງຈາກທ່ານຕ້ອນຮັບ ແລະ ຊ່ວຍເຫຼືອໃນຊ່ວງບຳລຸງຮັກສາ." },
        ],
      },
      benefits: {
        heading: "ເຫດຜົນທີ່ຄວນເລືອກພວກເຮົາ",
        items: [
          "ທີມມືຖືມືອາຊີບ ແລະ ເຕັມໃຈ",
          "ສົ່ງມອບໄດ້ຕາມເວລາທີ່ກຳນົດ",
          "ເຮັດວຽກໄວ ດຍບໍ່ສູນເສຍຄຸນນະພາບ",
          "ຕົ້ນທຶນແຂ່ງຂັນ ແລະ ປ່ງໃສ",
          "ຄິດສ້າງສັນ ໂດຍເອົາຜູ້ໃ້ເປັນສູນກາງ",
        ],
      },
      projects: {
        heading: "ໂປຣເຈັກໂດດເດັ່ນ",
        items: [
          { title: "ແອັບ Mobile Banking", desc: "ແອັບທະນາຄານທີ່ປອດໄພສຳລັບທຸລະກຳ ແລະ ບໍລິຫານບັນຊີທຸກທີ່.", stack: ["Spring Boot", "Android", "iOS"] },
          { title: "ແພລດຟອມ E-commerce Fulfillment", desc: "ແພລດຟອມ e-fulfillment ຫຼາຍຊ່ອງທາງທັງເວັບ ແລະ ມືື.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
          { title: "ແອັບຄວບຄຸມການໃຊ້ອຸປະກອນ", desc: "ແອັບຄວບຄຸມສຳລັບຜູ້ປົກຄອງໃນການຈັດການເວລາໃຊ້ອຸປະກອນ.", stack: [".NET Core", "PHP", "Android", "iOS"] },
        ],
      },
      cta: {
        title: "ພ້ອມສ້າງແອັບມືຖືຂອງທ່ານບໍ?",
        desc: "ບອກແນວຄິດຂອງທ່ານ ແລະ ພວກເຮົາຈະສະແດງໃຫ້ເຫັນວ່າທີມມືຖືຈະປ່ຽນມັນເປັນຜະລິດຕະພັນທີ່ພ້ອມອອກສູ່ຕະຫຼາດໄດ້ແນວໃດ.",
        contactUs: "ຕິດຕໍ່ພວກເຮົາ",
      },
    },
    custom: {
      heroTitle: "ພັດທະນາຊອບແວຕາມຄຳຂໍ",
      intro:
        "ພວກເຮົາສ້າງຊອບແວຕາມຄວາມຕ້ອງການສະເພາະຂອງທ່ານ — ຕັ້ງແຕ່ອອກແບບ ຈົນເຖິງພັດທະນາ, ທົດສອບ ແລະ ບຳລຸງຮັກສາ. ທີມທີ່ມີປະສົບການຮັບຜິດຊອບທັງການພັດທະນາແອັບ, ການເຊື່ອມໂຍງ API, ການປັບປຸງລະບົບເກົ່າ ແລະ ການເຊື່ອມໂຍງລະບົບ ໂດຍສົ່ງມອບວິທີແກ້ໄຂທີ່ໄດ້ຜົນ ແລະ ປະຢັດທີ່ສຸດ.",
      features: {
        heading: "ສິ່ງທີ່ພວກເຮົາສົ່ງມອບ",
        items: [
          "ແອັບເວັບ ແລະ ອັບວິສາຫະກິດຕາມຄຳຂໍ",
          "ອອກແບບ, ພັດທະນາ ແລະ ເຊື່ອມໂຍງ API",
          "ປັບປຸງລະບົບເກົ່າໃຫ້ທັນສະໄໝ",
          "ເຊື່ອມໂຍງແອັບ ແລະ ຂັ້ນຕອນເຮັດວຽກ",
          "ປ່ຽນແປງດິຈິຕອນ ແລະ ໍລິຫານຂໍ້ມູນ",
        ],
      },
      process: {
        heading: "ຂັ້ນຕອນການເຮັດວຽກ",
        steps: [
          { step: "01", title: "ຮວບຮວມຄວາມຕ້ອງການ", desc: "ຮວບຮວມຄວາມຕ້ອງການ ແລະ ຜົນທີ່ຄາດຫວັງ ເພື່ອກຳນົດໂຄງຮ່າງໂປຣເຈັກ." },
          { step: "02", title: "ວິເຄາະ ແລະ ເໜີແນະ", desc: "ປະເມີນຄວາມຕ້ອງການ ແລະ ເໜີແນະວິທີແກ້ໄຂທີ່ຫຼຸດຜ່ອນຄວາມສ່ຽງ ແລະ ເໝາະກັບງົບປະມານ." },
          { step: "03", title: "ພັດທະນາ", desc: "ທີມຂຽນລະຫັດ ແລະ ສ້າງຜະລິດຕະພັນຕາມການອອກແບບທີ່ຕົກລົງກັນ." },
          { step: "04", title: "ທົດສອບ", desc: "ກວດສອບຄຸນນະພາບດ້ວຍການທົດສອບໜ້າທີ່, ລະບົບ, ການເຊື່ອມໂຍງ ແລະ ການຮັບຮອງຈາກຜູ້ໃຊ້." },
          { step: "05", title: "ຕິດຕັ້ງ ແລະ ບຳລຸງຮັກສາ", desc: "ສຳເລັດການນຳໃຊ້ ແລະ ຊ່ວຍເຫຼືອຕະຫຼອດ ເພື່ອຄວາມໝັ້ນຄົງໃນໄລຍະຍາວ." },
        ],
      },
      benefits: {
        heading: "ເຫດຜົນທີ່ຄວນເລືອກພວກເຮົາ",
        items: [
          "ປັບແຕ່ງຕາມຄວາມຕ້ອງການໄດ້ຢ່າງຄ່ອງຕົວ",
          "ເປັນຜະລິດຕະພັນເອກະລັກທີ່ທ່ານເປັນເຈົ້າຂອງ",
          "ທີມມີວິໄນ ລະ ເຮັດວຽກດ້ວຍຕົນເອງໄດ້ດີ",
          "ອອກແບບມາໃຫ້ຂະຫຍາຍຕາມທຸລະກິດໄດ້",
          "ມີແຮງງານພຽງພໍຮອງຮັບວຽກຂະໜານກັນ",
        ],
      },
      projects: {
        heading: "ໂປຣເຈັກໂດດເດັ່ນ",
        items: [
          { title: "ບໍລິຫານບໍລິການລົດ", desc: "ແອັບມືຖືສຳລັບບໍລິຫານບໍລິການ ແລະ ຈອງລົດ.", stack: [".NET Core", "AngularJS"] },
          { title: "ERP ບໍລິຫານວຽກ", desc: "ERP ພາຍໃນຕິດຕາມໜ້າວຽກ ແລະ ຂັ້ນຕອນເຮັດວຽກທີມ.", stack: ["React", "MySQL", "Spring Boot", "AWS"] },
          { title: "E-commerce ຫຼາຍຊ່ອງທາງ", desc: "ແພລດຟອມຄ້າປີກລວມເວັບ, ອອນລາຍ ແລະ ມືື.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
        ],
      },
      cta: {
        title: "ມີໂຄງການຊອບແວສະເພາະບໍ?",
        desc: "ແບ່ງປັນຄວາມຕ້ອງການຂອງທ່ານ ແລະ ວກເຮົາຈະເໜີໂຄງສ້າງ ແລະ ແຜນການທີ່ເໝາະກັບເປົ້າໝາຍ ລະ ງົບປະມານ.",
        contactUs: "ຕິດຕໍ່ພວກເຮົາ",
      },
    },
    testing: {
      heroTitle: "ບໍລິການທົດສອບ",
      intro:
        "ພວກເຮົາສະໜອງບໍລິການທົດສອບຊອບແວແບບຄົບວົງຈອນທັງແອັບມືຖື, ເວັບ ແລະ ລະບົບວິສາຫະກິດ — ຊ່ວຍຈັບບົກຜ່ອງກ່ອນເປີດໃຊ້ ເພື່ອໃຫ້ຜະລິດຕະພັນຂອງທ່ານອອກສູ່ຕະຫຼາດຢ່າງໝັ້ນໃຈ. ທີມ QA ຂອງພວກເຮົາລວມທັງການທົດສອບດ້ວຍມື ແລະ ານອັດຕະໂນມັດ ເພື່ອຮັກສາຄຸນນະພາບໃຫ້ສູງ ລະ ສົ່ງມອບໄວຂຶ້ນ.",
      features: {
        heading: "ສິ່ງທີ່ພວກເຮົາສົ່ງມອບ",
        items: [
          "ທົດສອບແອັບມືຖືຫຼາຍອປະກອນ ລະ ຫຼາຍຂະໜາດໜ້າຈໍ",
          "ການທົດສອບແບບອັດຕະໂນມັດເພື່ອໃຊ້ຊ້ຳໄດ້",
          "ທົດສອບແອັບເວັບ ແລະ ຼາຍບາວເຊີ",
          "ວົງຈອນ build ແລະ test ຕະຫຼອດ 24 ຊົ່ວໂມງຕາມເຂດເວລາ",
          "ທົດສອບປະສິດທິພາບ, ຄວາມປອດໄພ ລະ ການກັບຄືນ",
        ],
      },
      process: {
        heading: "ຂັ້ນຕອນການເຮັດວຽກ",
        steps: [
          { step: "01", title: "ວິເຄາະຄວາມຕ້ອງການ", desc: "ຮວບຮວມ ແລະ ວິເຄາະຄວາມຕ້ອງການ ເພື່ອກຳນົດຂອບເຂດການທົດສອບ." },
          { step: "02", title: "ວາງແຜນການທົດສອບ", desc: "ສ້າງແຜນ ແລະ ຍຸດທະສາດການທົດສອບຫຼັງຈາກຮູ້ຂອບເຂດແລ້ວ." },
          { step: "03", title: "ຂຽນກໍລະນີທົດສອບ", desc: "ສ້າງສະຖານະການທົດສອບທີ່ຈະໃຊ້ໃນລະຫວ່າງ ແລະ ຫຼັງການພັດທະນາ." },
          { step: "04", title: "ກະກຽມສະພາບແວດລ້ອມ", desc: "ກະກຽມສະພາບແວດລ້ອມ ແລະ ອຸປະກອນທີ່ຕ້ອງການສຳລັບການທົດສອບ." },
          { step: "05", title: "ທົດສອບ ແລະ າຍງານ", desc: "ແລ່ນຕົວທົດສອບ, ບັນທກບົກຜ່ອງ ແລະ ຢັ້ງຢືນການແກ້ໄຂຮ່ວມກັບທີມ." },
        ],
      },
      benefits: {
        heading: "ເຫດຜົນທີ່ຄວນເລືອກພວກເຮົາ",
        items: [
          "ຫຼຸດຄວາມສ່ຽງດ້ວຍການຈັບບົກຜ່ອງຕັ້ງແຕ່ໄວ",
          "ເປີດໃຊ້ໄວຂຶ້ນດ້ວຍການອັດຕະໂນມັດ",
          "ຄຸ້ມຄອງທັງແອັບມືຖື, ເວັບ ແລະ ານເຊື່ອມໂຍງ",
          "ທົດສອບຕະຫຼອດເວລາໂດຍບໍ່ຕ້ອງເຮັດງານກາງຄືນ",
          "ມີປະສົບການກັບໂຄງການຂະໜາດວິສາຫະກິດ",
        ],
      },
      capabilities: {
        heading: "ຄວາມສາມາດທົດສອບຫຼັກ",
        items: [
          { title: "ທົດສອບແອັບມືຖື", desc: "ຢັ້ງຢືນແອັບເທິງຫຼາຍອຸປະກອນ ແລະ ຄວາມລະອຽດໜ້າຈໍ ເພື່ອປະສົບການທີ່ລື່ນໄຫຼ." },
          { title: "ທົດສອບແບບອັດຕະໂນມັດ", desc: "ອັດຕະໂນມັດຂັ້ນຕອນຊ້ຳ ເພື່ອໃຫ້ທີມສຸມໃສ່ຂໍ້ໄດ້ປຽບໃນການແຂ່ງຂັນ." },
          { title: "ທົດສອບແອັບເວັບ", desc: "ສະແກນເວັບໄທ໌ ພື່ອຫຼຸດຊ່ອງໂຫວ່ ແລະ ແກ້ໄຂບັນຫາດ້ານໜ້າທີ່ ແລະ ປະສິດທິພາບ." },
          { title: "ທົດສອບຕໍ່ເນື່ອງ 24/7", desc: "ໃຊ້ຄວາມແຕກຕ່າງເຂດເວລາ ເພື່ອແລ່ນວົງຈອນ build & test ຕະຫຼອດເວລາ." },
        ],
      },
      toolsHeading: "ເຄື່ອງມື & ການຄຸ້ມຄອງ",
      cta: {
        title: "ຕ້ອງການທີມ QA ທີ່ເຊື່ອຖືໄດ້ບໍ?",
        desc: "ໃຫ້ພວກເຮົາເບິ່ງແຍງຄຸນນະພາບ — ເລົ່າກ່ຽວກັບຜະລິດຕະພັນຂອງທ່ານ ແລະ ພວກເຮົາຈະສ້າງແຜນທົດສອບທີ່ເໝາະສົມ.",
        contactUs: "ຕິດຕໍ່ພວກເຮົາ",
      },
    },
    legacy: {
      heroTitle: "ຍ້າຍລະບົບເກົ່າ",
      intro:
        "ພວກເຮົາປັບໂຄງສ້າງຂັ້ນຕອນເຮັດວຽກແບບຄົບວົງຈອນ ແລະ ຍ້າຍລະບົບເກົ່າໄປສູ່ແພລດຟອມທັນສະໄໝ — ໂດຍຮັກສາຄວາມສົມບູນຂອງຂໍ້ມູນ ແລະ ໜ້າທີ່ຫຼັກຂອງລະບົບເກົ່າ ດ້ວຍຜົນກະທົບໜ້ອຍທີ່ສຸດ. ວິສະວະກອນ ແລະ ທີ່ປຶກສາຂອງພວກເຮົາມີປະສົບການກວ້າງຂວາງໃນຫຼາຍແພລດຟອມ.",
      features: {
        heading: "ສິ່ງທີ່ພວກເຮົາສົ່ງມອບ",
        items: [
          "ປັບໂຄງສ້າງຂັ້ນຕອນເຮັດວຽກແບບຄົບວົງຈອນ (A ຫາ Z)",
          "ຍ້າຍຂໍ້ມູນໂດຍຮັກສາຄວາມສົມບູນ",
          "ປ່ຽນລະບົບເກົ່າໄປສູ່ແພລດຟອມທັນສະໄໝ",
          "ຮັກສາໜ້າທີ່ຫຼັກຂອງລະບົບທີ່ໃຊ້ຢູ່",
          "ຊ່ວຍເຫຼືອຄົບຊີວິດໂຄງການ ຕັ້ງແຕ່ວາງແຜນຈົນຫຼັງຍ້າຍ",
        ],
      },
      process: {
        heading: "ຂັ້ນຕອນການເຮັດວຽກ",
        steps: [
          { step: "01", title: "ສຳຫຼວດ", desc: "ກຳນົດຂໍ້ມູນ, ູບແບບ, ຕຳແໜ່ງ ລະ ລະດັບຜົນກະທົບ." },
          { step: "02", title: "ສຳຮອງຂໍ້ມູນ", desc: "ສຳຮອງຂໍ້ມູນທັງໝົດກ່ອນເລີ່ມງານຍ້າຍ." },
          { step: "03", title: "ວາງແຜນ", desc: "ກຳນົດຄວາມຕ້ອງການທາງເຕັກນິກ, ເວລາ ແລະ ງົບປະມານ." },
          { step: "04", title: "ຍ້າຍເທື່ອລະຂັ້ນ ແລະ ທົດສອບ", desc: "ຍ້າຍແບບເທື່ອລະຂັ້ນ ແລະ ົດສອບລະບົບຫຼັງແຕ່ລະຂັ້ນ." },
          { step: "05", title: "ເຮັດຄວາມສະອາດ ແລະ ຫຼດຂໍ້ມູນ", desc: "ເຮັດຄວາມສະອາດຂໍ້ມູນ, ກ້ໄຂບັນຫາ ແລະ ໂຫຼດເຂົ້າລະບົບໃໝ່." },
        ],
      },
      benefits: {
        heading: "ເຫດຜົນທີ່ຄວນເລືອກພວກເຮົາ",
        items: [
          "ຮັກສາຄວາມສົມບູນຂອງຂໍ້ມູນຕະຫຼອດການຍ້າຍ",
          "ຍັງຄົງໜ້າທີ່ຫຼັກຂອງລະບົບເກົ່າໄວ້",
          "ມີບັນຫານ້ອຍທີ່ສຸດໃນຊ່ວງຍ້າຍ",
          "ຊ່ວຍເຫຼືອຄົບທັງຊີວິດໂຄງການ",
          "ທີມມີປະສົບການໃນຫຼາຍແພລດຟອມ",
        ],
      },
      values: {
        heading: "ສິ່ງທີ່ພວກເຮົາຮັບປະກັນ",
        items: [
          { title: "ຄວາມສົມບູນຂອງຂໍ້ມູນ", desc: "ຂໍ້ມູນຂອງທ່ານຍັງຄົບຖ້ວນ ແລະ ຖືກຕ້ອງຕະຫຼອດການປ່ຽນແປງ." },
          { title: "ຮັກສາໜ້າທີ່", desc: "ໜ້າທີ່ຫຼັກຂອງເມົາເດີທີ່ໃຊ້ຢູ່ຖືກຮັກສາໄວ້ໃນລະບົບໃໝ່." },
          { title: "ການກະທົບໜ້ອຍສຸດ", desc: "ວິທີແບບເທື່ອລະຂັ້ນຊ່ວຍໃຫ້ທຸລະກິດດຳເນີນຕໍ່ໄດ້ດ້ວຍບັນຫານ້ອຍສຸດ." },
        ],
      },
      caseStudy: {
        heading: "CASE ໂດດເດັ່ນ",
        title: "Flash ຫາ HTML5 — ເນື້ອຫາການສຶກສາ K12",
        desc: "ພວກເຮົາປ່ຽນເນື້ອຫາການສຶກສາ K12 ຫຼາຍພັນລາຍການຈາກ Flash ເກົ່າ ໄປສູ່ HTML5 ທັນສະໄໝ, ັກສາການຕ້ຕອບ ລະ ພ້ອມສຳລັບອະນາຄົດເທິງທຸກອຸປະກອນ.",
        tag: "ການສຶກສາ",
      },
      cta: {
        title: "ພ້ອມປັບລະບົບເກົ່າໃຫ້ທັນສະໄໝບໍ?",
        desc: "ເລົ່າກ່ຽວກັບລະບົບເກົ່າຂອງທ່ານ ແລະ ພວກເຮົາຈະວາງເສັ້ນທາງຍ້າຍທີ່ປອດໄພ ແບບເທື່ອລະຂັ້ນ ໄປສູ່ພື້ນຖານໃໝ່.",
        contactUs: "ຕິດຕໍ່ພວກເຮົາ",
      },
    },
    lowcode: {
      heroTitle: "ການພັດທະນາ Low-code",
      intro:
        "ພວກເຮົາເລັ່ງການສົ່ງມອບດ້ວຍແພລດຟອມ low-code ແບບເຫັນພາບ, ຂັບເຄື່ອນດ້ວຍການຕັ້ງຄ່າ — ຜະສົມຜະສານອົງປະກອບສຳເລັດຮູບກັບສ່ວນຂະຫຍາຍແບບກຳນົດເອງ ເພື່ອໃຫ້ທ່ານອອກແອັບທີ່ເຊື່ອຖືໄດ້ໃນບໍ່ເທົ່າໃດອາທິດ ແທນທີ່ຈະເປັນບໍ່ເທົ່າໃດໄຕມາດ.",
      capabilities: {
        heading: "ສິ່ງທີ່ພວກເຮົາສົ່ງມອບ",
        items: [
          { title: "ປະກອບແອັບຢ່າງໄວ", desc: "ສ້າງຟອມ, ໜ້າຈໍ ແລະ າຍງານຈາກເຄື່ອງມືແບບເຫັນພາບ, ຂັບເຄື່ອນດ້ວຍການຕັ້ງຄ່າ." },
          { title: "ອັດຕະໂນມັດຂັ້ນຕອນ", desc: "ສ້າງແບບຈຳລອງຂັ້ນຕອນທຸລະກິດດ້ວຍກົດ, ການອະນຸມັດ ແລະ ການສົ່ງຕໍ່ອັດຕະໂນມັດ." },
          { title: "ການເຊື່ອມໂຍງ", desc: "ເຊື່ອມຂໍ້ມູນ ແລະ ລະບົບຂອງທ່ານຜ່ານ connector API ແລະ ອົງປະກອບສຳເລັດຮູບ." },
          { title: "ສ່ວນຂະຫຍາຍແບບກຳນົດເອງ", desc: "ເພີ່ມ code ແບບກຳນົດເອງໃນຈຸດທີ່ຄວາມສາມາດດັ້ງເດີມຂອງແພລດຟອມສິ້ນສຸດ." },
          { title: "ການຄຸ້ມຄອງ & ຝຶກອົບຮົມ", desc: "ສົ່ງມອບສິດເປັນເຈົ້າຂອງ, ຝຶກອົບຮົມທີມ ແລະ ຸ້ມຄອງວົງຈອນຊີວິດຂອງແອັບ." },
        ],
      },
      process: {
        heading: "ວິທີທີ່ພວກເຮົາສົ່ງມອບ",
        steps: [
          { step: "01", title: "ສ້າງແບບຈຳລອງ", desc: "ແປງເຂດວຽກ ແລະ ຂັ້ນຕອນຂອງທ່ານເປັນແບບຈຳລອງຂໍ້ມູນ ແລະ ຜັງຂັ້ນຕອນ." },
          { step: "02", title: "ປະກອບ", desc: "ປະກອບໜ້າຈໍ, ກົດ ແລະ ກະແສຂໍ້ມູນຈາກເຄື່ອງມືແບບເຫັນພາບຂອງແພລດຟອມ." },
          { step: "03", title: "ຂະຫຍາຍ", desc: "ນຳໃຊ້ logic ກຳນົດເອງ ຫຼື ານເຊື່ອມໂຍງທີ່ເກີນຄວາມສາມາດດັ້ງເດີມຂອງແພລດຟອມ." },
          { step: "04", title: "ຢັ້ງຢືນ", desc: "ແລ່ນຜ່ານຈຸດກວດທົດສອບໜ້າທີ່, ການເື່ອມໂຍງ ແລະ UAT ກ່ອນອອກລຸ່ນ." },
          { step: "05", title: "ວິວັດທະນາການ", desc: "ຝຶກອົບຮົມທີມ ແລະ ຄຸ້ມຄອງການປ່ຽນແປງ ເພື່ອໃຫ້ແອັບຂະຫຍາຍຕາມຄວາມຕ້ອງການ." },
        ],
      },
      platforms: {
        heading: "ແພລດຟອມທີ່ພວກເຮົາສ້າງ",
        items: ["OutSystems", "Mendix", "Appian", "Microsoft Power Platform", "ServiceNow"],
      },
      benefits: {
        heading: "ເປັນຫຍັງຄວນເລືອກພວກເຮົາ",
        items: [
          "ສົ່ງມອບໄວຂ້ນເທິງແພລດຟອມ low-code ທີ່ໄດ້ຮັບການຢັ້ງຢືນ",
          "ທີມທຸລະກິດສາມາດປ່ຽນແປງໄດ້ໂດຍບໍ່ຕ້ອງໃຊ້ code",
          "ການເຊື່ອມໂຍງເລິກກັບລະບົບທີ່ມີຢູ່ແລ້ວຂອງທ່ານ",
          "ຄວາມປອດໄພ ແລະ ການຄຸ້ມຄອງລະດັບວິສາຫະກິດ",
          "ເສັ້ນທາງອັບເກຣດເມື່ອ low-code ໄປຮອດຂີດຈຳກັດ",
        ],
      },
      projects: {
        heading: "ໂປຣເຈັກໂດດເດັ່ນ",
        items: [
          { title: "ອັດຕະໂນມັດຂັ້ນຕອນການໃຫ້ກູ້", desc: "ຂັ້ນຕອນການອອກເງິນກູ້ແບບ low-code ພ້ອມການອະນຸມັດອັດຕະໂນມັດ ແລະ ການສ້າງເອກະສານ.", stack: ["OutSystems", "PostgreSQL", "REST"] },
          { title: "ປະຕູການປະຕິບັດການພາກສະໜາມ", desc: "ປະຕູການກວດກາພາກສະໜາມ ພ້ອມຟອມເຮັດວຽກ offline ແລະ dashboard ເວລາຈິງ.", stack: ["Mendix", "Azure", "Power BI"] },
          { title: "ແອັບ self-service ບຸກຄະລາກອນ", desc: "ແອັບ self-service ສຳລັບການລາ, onboarding ແລະ ການອະນຸມັດເທິງທຸກອປະກອນ.", stack: ["Appian", "AWS", "SSO"] },
        ],
      },
      cta: {
        title: "ອອກໄວຂຶ້ນດ້ວຍ low-code?",
        desc: "ສະແດງຂັ້ນຕອນທີ່ກຳລັງສ້າງຄວາມຫຍຸ້ງຍາກ ແລະ ພວກເຮົາຈະວາງເສັ້ນທາງ low-code ເພ່ອອັດຕະໂນມັດມັນ.",
        contactUs: "ຕິດຕໍ່ພວກເຮົາ",
      },
    },
    cloud: {
      heroTitle: "ບໍລິການ Cloud",
      intro:
        "ພວກເຮົາອອກແບບ, ຍ້າຍ ແລະ ດຳເນີນການໂຄງລ່າງ cloud ທີ່ປອດໄພ, ັງເກດດ້ ແລະ ປະຢັດຕົ້ນທຶນ — ຕັ້ງແຕ່ landing zone ແລະ ວິສະວະກຳແພລດຟອມ ຈົນເຖິງການດຳເນີນການ 24/7.",
      pillars: {
        heading: "ເສົາຫຼັກ CLOUD ຂອງພວກເຮົາ",
        nut: "ຄວາມປອດໄພ",
        bolt: "ການຄວບຄຸມຕົ້ນທຶນ",
        items: [
          { title: "ຕັ້ງຖານ & ຍ້າຍ", desc: "ປະເມີນ, ວາງແຜນ ແລະ ຍ້າຍ workload ໄປສູ່ cloud ທີ່ເໝາະສົມ ດ້ວຍເວລາຢຸດຊົ່ວຄາວໜ້ອຍທີ່ສຸດ." },
          { title: "ແພລດຟອມ & IaC", desc: "ຈັດສັນ landing zone, ເຄືອຂ່າຍ ແລະ ແພລດຟອມດ້ວຍ infrastructure-as-code." },
          { title: "ສັງເກດ & ປົກປ້ອງ", desc: "ຕິດຕັ້ງການຕິດຕາມ, ການບັນທຶກ log ແລະ ຮົ້ວປ້ອງກັນຕັ້ງແຕ່ມື້ທຳອິດ." },
          { title: "ດຳເນີນການ & ປັບປຸງ", desc: "ດຳເນີນການ, ປັບແຕ່ງ ແລະ ປັບປຸງຢ່າງຕໍ່ເນື່ອງ ເພື່ອຄວາມເຊື່ອຖື, ຕົ້ນທຶນ ແລະ ປະສິດທິພາບ." },
        ],
      },
      certifications: {
        heading: "ໃບຢັ້ງຢືນ & ຜ່ານການທົດລອງຈິງ",
        items: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform"],
      },
      cta: {
        title: "ພ້ອມສຳລັບ cloud ທີ່ອອກແບບມາດີບໍ?",
        desc: "ບອກພວກເຮົາວ່າທ່ານກຳລັງແລ່ນຢູ່ໃສ ແລະ ຢາກຂະຫຍາຍໄປໃສ — ພວກເຮົາຈະວາງເສັ້ນທາງການຍ້າຍ.",
        contactUs: "ຕິດຕໍ່ພວກເຮົາ",
      },
    },
    ai: {
      heroTitle: "ວິທີແກ້ໄຂ AI",
      intro:
        "ພວກເຮົາຝັງ AI ໃນບ່ອນທີ່ສ້າງມູນຄ່າທີ່ວັດແທກໄດ້ — ຕັ້ງແຕ່ pipeline ຂໍ້ມູນ ແລະ feature store ຈົນເຖິງ agent ແລະ retrieval ທີ່ໃຊ້ LLM. ທີມ AI ຂອງພວກເຮົາຜະສົມການຕັດສິນໃຈດ້ານການຄົ້ນຄວ້າກັບວິໄນດ້ານການຜະລິດ.",
      capabilities: {
        heading: "ຄວາມສາມາດ",
        items: [
          { title: "ວິສະວະກຳຂໍ້ມູນ & Feature", desc: "ຄັດເລືອກ, ກນົດປ້າຍ ແລະ ແປງຂໍ້ມູນເປັນ feature ທີ່ເຊື່ອຖືໄດ້ ສຳລັບການຝຶກ ແລະ ການສະຫຼຸບ." },
          { title: "ໂມເດວ & Fine-tuning", desc: "ເລືອກ, ປັບແຕ່ງ ແລະ ະເມີນມເດວ — ັ້ງແຕ່ ML ແບບດັ້ງເດີມ ຈົນເຖິງ LLM ແລະ VLM." },
          { title: "Retrieval & Agent", desc: "ສ້າງ pipeline RAG ແລະ agent ທີ່ເອີ້ນເຄື່ອງມື ເພື່ອກະທຳເທິງຂໍ້ມູນ ແລະ ຂັ້ນຕອນຂອງທ່ານ." },
        ],
      },
      steps: {
        heading: "ຈາກຂໍ້ມູນສູ່ມູນຄ່າ",
        headingSuffix: "— ກະແສຂອງປັນຍາ",
        items: [
          { step: "ຂໍ້ມູນ", desc: "ເກັບກຳ ແລະ ຄັດເລືອກຂໍ້ມູນທີ່ກຳນົດປ້າຍ, ເຊື່ອຖືໄດ້ ຈາກລະບົບຂອງທ່ານ." },
          { step: "Feature", desc: "ສ້າງ feature ແລະ embedding ທີ່ມີສັນຍານທີ່ຖືກຕ້ອງ." },
          { step: "ໂມເດວ", desc: "ຝຶກ, ປັບແຕ່ງ ແລະ ປະເມີນໂມເດວທີ່ເໝາະສົມສຳລັບວຽກ." },
          { step: "ນຳໃຊ້", desc: "ໃຫ້ບໍລິການ ແລະ ັງເກດມັນຢ່າງເຊື່ອຖືໄດ້ໃນ production." },
          { step: "ມູນຄ່າ", desc: "ເຊື່ອມທຸກການນຳໃຊ້ກັບຜົນລັບທຸລະກິດທີ່ວັດແທກໄດ້." },
        ],
      },
      stack: {
        heading: "ເທັກໂນໂລຢີຂອງພວກເຮົາ",
        items: ["OpenAI", "Azure AI", "LangChain", "Pinecone", "Snowflake", "dbt"],
      },
      projects: {
        heading: "AI ໃນການຜະລິດ",
        items: [
          { title: "Agent ຈັດການເອກະສານ", desc: "Agent ທີ່ຈຳແນກ, ດຶງຂໍ້ມູນ ແລະ ສົ່ງຕໍ່ເອກະສານລະຫວ່າງລະບົບວິສາຫະກິດ.", stack: ["OpenAI", "LangChain", "Azure"] },
          { title: "ໂມເດວຄາດຄະເນຄວາມຕ້ອງການ", desc: "ໂມເດວອະນຸກົມເວລາ ທີ່ປັບປຸງຄວາມຖືກຕ້ອງຂອງການຄາດຄະເນໃນຊ່ອງທາງການຄ້າ.", stack: ["Python", "Snowflake", "dbt"] },
          { title: "ຜູ້ຊ່ວຍການສະໜັບສະໜູນ", desc: "ຜູ້ຊ່ວຍ RAG ທີ່ຕອບຈາກຄັງຄວາມຮູ້ຂອງທ່ານ ພ້ອມແຫຼ່ງອ້າງອີງ.", stack: ["RAG", "Pinecone", "Next.js"] },
        ],
      },
      cta: {
        title: "ມີ use case AI ບໍ?",
        desc: "ອະທິບາຍຂັ້ນຕອນທີ່ທ່ານຢາກເຮັດໃຫ້ມີປັນຍາ ແລະ ພວກເຮົາຈະວາງເສັ້ນທາງຈາກຂໍ້ມູນສູ່ການນຳໃຊ້.",
        contactUs: "ຕິດຕໍ່ພວກເຮົາ",
      },
    },
  },
  companyPage: {
    heroTitle: "ບໍລິສັດ",
    philosophy: {
      heading: "ປັດຊະຍາທຸລະກິດ",
      desc: "SV Digital Software ມຸ່ງໝັ້ນສ້າງແບຣນຊອບແວທີ່ໜ້າເຊື່ອຖື ຜ່ານການເປັນຄູ່ຮ່ວມງານໄລຍະຍາວໃນຕະຫຼາດ IT ສາກົນ. ເທັກໂນໂລຢີປ່ຽນແປງໄວ, ແຕ່ພວກເຮົາເຊື່ອວ່າສິ່ງສຳຄັນທີ່ສຸດແມ່ນຄວາມເໝາະສົມ — ຊອບແວທີ່ຕອບສະໜອງຄວາມຕ້ອງການຈິງຂອງລູກຄ້າ, ສົ່ງມອບດ້ວຍຄວາມມີວິໄນ, ຄວາມໂປ່ງໃສ ແລະ ຄວາມເອົາໃຈໃສ່.",
    },
    values: {
      heading: "ຄຸນຄ່າຫຼັກ",
      items: [
        { title: "ຄວາມສາມາດໃນການສົ່ງມອບ", desc: "ສົ່ງມອບຄົບວົງຈອນ — ຕັ້ງແຕ່ການເກັບຄວາມຕ້ອງການ ແລະ ໂຄງສ້າງ ຈົນເຖິງການພັດທະນາ, ທົດສອບ, ນຳໃຊ້ ແລະ ບຳລຸງຮັກສາໄລຍະຍາວ." },
        { title: "ມາດຕະຖານສາກົນ", desc: "ພວກເຮົາຮັບເອົາມາດຕະຖານວິສະວະກຳ ແລະ ຄຸນນະພາບສາກົນ ເພື່ອໃຫ້ທຸກໂປຣເຈັກບັນລຸຄວາມຄາດຫວັງ ໃນທຸກບ່ອນໃນໂລກ." },
        { title: "ຄົນເປັນສູນກາງ", desc: "ພວກເຮົາດຶງດູດ, ພັດທະນາ ແລະ ຮັກສາວິສະວະກອນທີ່ມີຄວາມສາມາດ — ພື້ນຖານຢູ່ເບື້ອງຫຼັງທຸກໂປຣເຈັກທີ່ປະສົບຜົນສຳເລັດ." },
        { title: "ຄຸນນະພາບທີ່ໄດ້ຮັບການຢັ້ງຢືນ", desc: "ຂະບວນການ QA ທີ່ມີວິໄນ ແລະ ການປະຕິບັດການຈັດການຄຸນນະພາບທີ່ໄດ້ຮັບການຍອມຮັບສາກົນ ໃຊ້ກັບທຸກການອອກລຸ່ນ." },
      ],
    },
    vision: {
      heading: "ວິໄສທັດ",
      desc: "SV Digital Software ມຸ່ງເປັນຄູ່ຮ່ວມງານຊັ້ນນຳໃນການພັດທະນາຊອບແວຕາມຄວາມຕ້ອງການ, ການຍ້າຍ ແລະ ບຳລຸງຮັກສາລະບົບເກົ່າ ແລະ ການປ່ຽນແປງດິຈິຕອນ — ຊ່ວຍໃຫ້ທຸລະກິດປັບປຸງໃຫ້ທັນສະໄໝຢ່າງໝັ້ນໃຈ ແລະ ເຕີບໂຕເທິງພື້ນຖານເທັກໂນໂລຢີທີ່ແຂງແຮງ.",
    },
    ceo: {
      label: "ຂໍ້ຄວາມຈາກ CEO",
      name: "James Whitfield",
      role: "ຜູ້ອຳນວຍການຕົວແທນ & CEO",
      desc: "ຄຳໝັ້ນສັນຍາຂອງພວກເຮົາຕໍ່ລູກຄ້າທຸກຄົນງ່າຍດາຍ: ເຂົ້າໃຈຢ່າງເລິກເຊິ່ງ, ສ້າງຢ່າງຊື່ສັດ ແລະ ສົ່ງມອບຢ່າງຄົບຖ້ວນ. ພວກເຮົາຖືທຸກໂປຣເຈັກເປັນຄວາມຮັບຜິດຊອບໄລຍະຍາວ — ແລະ ວັດແທກຄວາມສຳເລັດດ້ວຍການທີ່ຊອບແວຂອງທ່ານເຮັດວຽກໄດ້ດີແຄ່ໄຫນຫຼາຍປີຫຼັງຈາກເປີດຕົວ, ບໍ່ແມ່ນແຄ່ໃນມື້ສົ່ງມອບ.",
    },
    factSheet: {
      heading: "FACT SHEET",
      rows: [
        { label: "ຊື່ບໍລິສັດ", value: "SV Digital Software Co., Ltd." },
        { label: "ວັນທີກໍ່ຕັ້ງ", value: "8 ກໍລະກົດ 2022" },
        { label: "ສາຍທຸລະກິດ", value: "ການພັດທະນາຊອບແວຕາມຄວາມຕ້ອງການ · ວິທີແກ້ໄຂມືຖື · ບໍລິການທົດສອບ · ການຍ້າຍລະບົບເກົ່າ" },
        { label: "ເທັກໂນໂລຢີຫຼັກ", value: "TypeScript / React / Next.js · Python · Snowflake / dbt · AWS / GCP / Azure" },
      ],
    },
    partners: {
      heading: "ຄູ່ຮ່ວມເທັກໂນໂລຢີ",
      desc: "ພວກເຮົາສ້າງເທິງແພລດຟອມທີ່ພິສູດແລ້ວ ແລະ ເປັນຊັ້ນນຳຂອງອຸດສາຫະກຳ, ພ້ອມຮັກສາຄວາມສຳພັນໃນການເຮັດວຽກຢ່າງໃກ້ຊິດກັບລະບົບນິເວດຢູ່ເບື້ອງຫຼັງພວກມັນ.",
      items: ["AWS", "Google Cloud", "Microsoft Azure", "Snowflake", "dbt", "Docker"],
    },
    awards: {
      heading: "ຜົນງານທີ່ໄດ້ຮັບລາງວັນ",
      items: [
        { date: "2017.04.06", title: "ໂປຣແກຣມ MUFG Fintech Accelerator \"ລາງວັນຮອງຊະນະເລີດ\"", desc: "ຖືກເລືອກຈາກຜູ້ສະໝັກຫຼາຍຮ້ອຍຄົນ ແລະ ເປັນພາຄີກັບ kabu.com Securities — ພື້ນຖານຂອງປະສົບການສ້າງຊອບແວທີ່ສຳຄັນຕໍ່ພາລະກິດສຳລັບອຸດສາຫະກຳທີ່ມີການຄວບຄຸມເຂັ້ມງວດ." },
        { date: "2023.08.22", title: "ມາດຕະຖານການສົ່ງມອບທີ່ປອດໄພ — 3 ປີຕິດຕໍ່ກັນໂດຍບໍ່ມີເຫດການຮ້າຍແຮງ", desc: "ຂະບວນການ QA ທີ່ມີວິໄນຂອງພວກເຮົາຜ່ານທຸກການປະເມີນຄວາມປອດໄພຈາກພາຍນອກ ໂດຍບໍ່ມີເຫດການໃດທີ່ເກີດຈາກ bug ຫຼື ຊ່ອງໂຫວ່ທີ່ຖືກປ່ອຍເລີຍ." },
        { date: "2025.03.17", title: "ລາງວັນໃຫຍ່ — Google Cloud Innovation Awards ຄັ້ງທີ 3", desc: "ແພລດຟອມແອັບພລິເຄຊັນ ແລະ ຂໍ້ມູນ cloud-native ຂອງພວກເຮົາຊະນະລາງວັນໃຫຍ່ ດ້ວຍສະຖາປັດຕະຍະກຳທີ່ໝັ້ນຄົງ, ປະສິດທິພາບທີ່ຂະຫຍາຍໄດ້ ແລະ ປະສົບການ developer ທີ່ສະອາດ." },
        { date: "2025.06.05", title: "ຄວາມໄວ້ເນື້ອເຊື່ອໃຈ ແລະ ການຮ່ວມມືໄລຍະຍາວ — ສົ່ງມອບຕາມກຳນົດ 100%, ອັດຕາລູກຄ້າກັບມາ 100%", desc: "ທຸກເສົາຫຼັກທີ່ສັນຍາໄວ້ຖືກສົ່ງມອບຕາມກຳນົດ ແລະ ລູກຄ້າທຸກລາຍເລືອກສືບຕໍ່ການຮ່ວມມືໄລຍະຍາວຫຼັງຈາກໂປຣເຈັກທຳອິດ." },
      ],
    },
    contact: {
      heading: "ຕິດຕໍ່",
      desc: "ສຳລັບຄຳຖາມກ່ຽວກັບວິທີແກ້ໄຂ, ການເປັນພາຄີ, ຫຼື ສິ່ງອື່ນໃດກໍຕາມ, ກະລຸນາຕິດຕໍ່ຜ່ານແບບຟອມຂອງພວກເຮົາ.",
      contactUs: "ຕິດຕໍ່ພວກເຮົາ",
    },
  },
  recruitPage: {
    heroTitle: "ຮັບສະໝັກງານ",
    intro: "SV Digital Software ແມ່ນທີມຂອງວິສະວະກອນ ແລະ ນັກສ້າງ. ພວກເຮົາດຳລົງຊີວິດຕາມຫຼັກການຫ້າຢ່າງ — \"ມຸ່ງເປັນເລີດໃນຄຸນນະພາບ\", \"ຄິດ ແລະ ກະທຳຢ່າງກ້າຫານ\", \"ເຂັ້ມແຂງຂຶ້ນເມື່ອຢູ່ນຳກັນ\", \"ຄວາມຊື່ສັດ ແລະ ຄວາມໄວ້ເນື້ອເຊື່ອໃຈ\" ແລະ \"ອ້ອມຮັບການປ່ຽນແປງ\" — ແລະ ສົ່ງມອບຊອບແວທີ່ມີຄວາມໝາຍ. ຖ້າທ່ານຮັກການສ້າງຜະລິດຕະພັນທີ່ມີຄວາມຄິດ, ກ້ໄຂບັນຫາທີ່ຍາກ ແລະ ແບ່ງປັນຄວາມເປັນເຈົ້າຂອງໃນສິ່ງທີ່ທ່ານສ້າງ, ມີບ່ອນສຳລັບທ່ານຢ່ນີ້.",
    career: {
      heading: "ໂອກາດອາຊີບ",
      desc: "ຕຳແໜ່ງທີ່ເປີດຮັບປັດຈຸບັນຂອງພວກເຮົາກວມເອົາຕັ້ງແຕ່ວິສະວະກຳແພລດຟອມ ແລະ AI ປະຍຸກ ຈົນເຖິງການອອກແບບຜະລິດຕະພັນ. ທຸກຕຳແໜ່ງສົ່ງມອບຊອບແວຈິງທີ່ມີຜົນກະທົບຈິງ — ສຳຫຼວດດ້ານລຸ່ມ ແລະ ບອກພວກເຮົາວ່າທ່ານຢາກປະກອບສ່ວນແນວໃດ.",
    },
    apply: "ເບິ່ງລາຍລະອຽດ",
    applySubject: "ສະໝັກຕຳແໜ່ງ — ",
    applyBody:
      "ຮຽນ ພະແນກຮັບສະໝັກງານ SV Digital Software,\n\nຂ້ອຍຢາກສະໝັກຕຳແໜ່ງ {title}.\n\nຊື່ ແລະ ນາມສະກຸນ: \nອີເມວ: \nໂທລະສັບ: \nທີ່ຢູ່: \nຈຳນວນປີປະສົບການ: \nPortfolio / LinkedIn: \n\nຂໍ້ຄວາມ: \n\n\nຂອບໃຈ.",
    jobs: [
      { slug: "full-stack-engineer", title: "ວິສະວະກອນ Full-Stack — React / Next.js / Node.js", shortTitle: "ວິສະວະກອນ Full-Stack", location: "ຈາກໄກ", type: "ເຕັມເວລາ", desc: "ອອກແບບ ແລະ ພັດທະນາແອັບເວັບຄົບວົງຈອນ — ຕັ້ງແຕ່ frontend responsive ດ້ວຍ React ແລະ Next.js ຈົນເຖິງ API Node.js ແລະ ຖານຂໍ້ມູນທີ່ຂະຫຍາຍໄດ້." },
      { slug: "data-engineer", title: "ວິສະວະກອນຂໍ້ມູນ — Snowflake / dbt / Cloud", shortTitle: "ວິສະວະກອນຂໍ້ມູນ", location: "ຈາກໄກ", type: "ເຕັມເວລາ", desc: "ສ້າງ ແລະ ບຳລຸງຮັກສາແພລດຟອມຂໍ້ມູນທັນສະໄໝ — ານສ້າງແບບຈຳລອງຄັງຂໍ້ມູນ, transformation ດ້ວຍ dbt ແລະ pipeline cloud." },
      { slug: "ai-engineer", title: "ວິສະວະກອນ AI — LLM & ຕົວແທນຂໍ້ມູນສ້າງສັນ", shortTitle: "ວິສະວະກອນ AI", location: "ຈາກໄກ", type: "ເຕັມເວລາ", desc: "ພັດທະນາຟີເຈີທີ່ໃຊ້ LLM ແລະ ຕົວແທນຂໍ້ມູນສ້າງສັນ — retrieval, tool-calling ແລະ ການປະເມີນສຳລັບຜະລິດຕະພັນ AI ໃນ production." },
      { slug: "product-manager", title: "ຜູ້ຈັດການຜະລິດຕະພັນ — ຜະລິດຕະພັນຂໍ້ມູນ & AI", shortTitle: "ຜູ້ຈັດການຜະລິດຕະພັນ", location: "ຈາກໄກ", type: "ເຕັມເວລາ", desc: "ຮັບຜິດຊອບແຜນງານຜະລິດຕະພັນຂໍ້ມູນ & AI — ແປຄວາມຕ້ອງການລູກຄ້າເປັນສະເປັກທີ່ຊັດເຈນ ແລະ ນຳພາການສົ່ງມອບ." },
      { slug: "platform-engineer", title: "ວິສະວະກອນຊອບແວ — ແພລດຟອມ & ໂຄງລ່າງ", shortTitle: "ວິສະວະກອນຊອບແວ", location: "ຈາກໄກ", type: "ເຕັມເວລາ", desc: "ສ້າງພື້ນຖານທີ່ຜະລິດຕະພັນຂອງພວກເຮົາເຮັດວຽກ — CI/CD, ໂຄງລ່າງ cloud, observability ແລະ ເຄື່ອງມືສຳລັບ developer." },
      { slug: "uiux-designer", title: "ນັກອອກແບບ UI/UX — ລະບົບອອກແບບ & ຜະລິດຕະພັນ", shortTitle: "ນັກອອກແບບ UI/UX", location: "ຈາກໄກ", type: "ເຕັມເວລາ", desc: "ອອກແບບໜ້າຈໍທີ່ເຂົ້າໃຈງ່າຍ ແລະ ຮັກສາ design system — ຕັ້ງແຕ່ການຄົ້ນຄວ້າ, wireframe ຈົນເຖິງໜ້າຈໍຜະລິດຕະພັນທີ່ສົມບູນ." },
    ],
    jobDetail: {
      backToJobs: "ກັບຄືນຫາທຸກຕຳແໜ່ງ",
      descriptionHeading: "ລາຍລະອຽດວຽກ",
      requirementsHeading: "ເງື່ອນໄຂຜູ້ສະໝັກ",
      benefitsHeading: "ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ",
      specialHeading: "ເປັນຫຍັງຄວນຮ່ວມງານ",
      apply: "ສະໝັກຕຳແໜ່ງນີ້",
      benefits: [
        "ເງິນເດືອນແຂ່ງຂັນ, ພິຈາລະນາເພີ່ມ 2 ຄັ້ງ/ປີ, ພ້ອມໂບນັດຕາມຜົນງານ.",
        "ເຮັດວຽກຈາກໄກຢ່າງສົມບູນ ດ້ວຍເວລາຢດຢ່ນຕາມເຂດເວລາ.",
        "ວັນລາປະຈຳປີ ແລະ ວັນພັກ, ພ້ອມວັນລາເຈັບໄຂ້ທີ່ມີເງິນ.",
        "ປະກັນສຸຂະພາບ ແລະ ເງິນອຸດໜູນ wellbeing ລາຍເດືອນ.",
        "ງົບການຮຽນຮູ້ປະຈຳປີ ສຳລັບຫຼັກສູດ, ປຶ້ມ ແລະ ງານປະຊຸມ.",
        "Company retreat ແລະ ກິດຈະກຳ team-building ເປັນປະຈຳ.",
        "ອຸປະກອນທັນສະໄ ແລະ ງິນອຸດໜູນຕັ້ງຫ້ອງການຢູ່ເຮືອນ.",
      ],
      special: [
        "ເຮັດວຽກເທິງຜະລິດຕະພັນຈິງ, ລກຄ້າຈິງ, ດ້ວຍຜົນກະທົບທີ່ຊັດເຈນ.",
        "ສະໜັບສະໜູນ 100% ຄ່າສອບເສັງໃບຢັ້ງຢືນ IT ທີ່ກ່ຽວຂ້ອງ.",
        "ເສັ້ນທາງເຕີບໂຕທີ່ຊັດເຈນ ພ້ອມ mentor ແລະ ການພົບ 1:1 ເປັນປະຈຳ.",
        "ທີມນ້ອຍ, ມີປະສົບການ, ບ່ອນທີ່ແນວຄິດຂອງທ່ານກຳນົດວິທີເຮັດວຽກ.",
      ],
      jobs: {
        "full-stack-engineer": {
          description: [
            "ສ້າງ ແລະ ບຳລຸງຮັກສາຟີເຈີທົ່ວ stack — frontend responsive ດ້ວຍ React / Next.js ແລະ API Node.js.",
            "ອອກແບບ schema ຖານຂໍ້ມູນ ແລະ ຂນ query ທີ່ມີປະສິດທິພາບ ສຳລັບຄັງ relational ແລະ document.",
            "ເຊື່ອມໂຍງບໍລິການພາຍນອກ ແລະ API ພາຍໃນ, ຈັດການ authentication, cache ແລະ ເສັ້ນທາງຂໍ້ຜິດພາດ.",
            "ຮ່ວມມືກັບ designer ແລະ product manager ເພື່ອສົ່ງມອບປະສົບການຜູ້ໃຊ້ທີ່ສົມບູນ ແລະ ເຂົ້າເຖິງໄດ້.",
            "ຂຽນ test, review pull request ແລະ ່ວຍຍົກສູງມາດຕະຖານວິສະວະກຳ.",
          ],
          requirements: [
            "2+ ປີ ສ້າງແອັບເວັບ production ດ້ວຍ React ແລະ Node.js.",
            "ເຂົ້າໃຈແໜ້ນ TypeScript, REST / GraphQL API ແລະ ເຄື່ອງມື frontend ທັນສະໄໝ.",
            "ປະສົບການກັບຖານຂໍ້ມູນ relational ຢ່າງໜ້ອຍໜຶ່ງ (PostgreSQL ຫຼື MySQL).",
            "ຄຸ້ນເຄີຍກັບ Git workflow, code review ແລະ CI/CD.",
            "ທັກສະແກ້ໄຂບັນຫາດີ ແລະ ການສື່ສານຂຽນຊັດເຈນເປັນພາສາອັງກິດ.",
          ],
        },
        "data-engineer": {
          description: [
            "ອອກແບບ ແລະ ສ້າງ pipeline ຂໍ້ມູນ ເຄື່ອນຍ້າຍ ແລະ ແປງຂໍ້ມູນເທິງ cloud warehouse.",
            "ສ້າງແບບຈຳລອງຂໍ້ມູນດ້ວຍ dbt ແລະ ຮັກສາ transformation ທີ່ມີ version ແລະ ຖືກທົດສອບ.",
            "ປັບປຸງປະສິດທິພາບ ແລະ ຕົ້ນທຶນ warehouse ເທິງ Snowflake ແລະ cloud storage.",
            "ຮ່ວມມືກັບ analyst ແລະ ທີມຜະລິດຕະພັນ ເພື່ອສົ່ງມອບ dataset ທີ່ເຊື່ອືໄດ້ ແລະ ມີເອກະສານ.",
            "ຕິດຕາມສຸຂະພາບ pipeline ແລະ ຕອບສະໜອງເຫດການຄຸນນະພາບຂໍ້ມູນ.",
          ],
          requirements: [
            "2+ ປີ ໃນ data engineering ຫື analytics engineering.",
            "SQL ແ້ນ ແລະ ປະສົບການຈິງກັບ dbt ແລະ cloud warehouse (ແນະນຳ Snowflake).",
            "ປະສົບການກັບແພລດຟອມ cloud ຢ່າງໜ້ອຍໜຶ່ງ (AWS, GCP ຫຼື Azure).",
            "ເຂົ້າໃຈ data modelling, ແບບ ELT ແລະ ການທົດສອບຄຸນນະພາບຂໍ້ມູນ.",
            "ສະດວກໃຊ້ Python ສລັບ scripting ແລະ ການອັດຕະໂນມັດ.",
          ],
        },
        "ai-engineer": {
          description: [
            "ສ້າງຟີເຈີທີ່ໃຊ້ LLM — retrieval-augmented generation, tool-calling ແລະ agentic workflow.",
            "ອອກແບບ ແລະ ແລ່ນ evaluation ເພື່ອວັດແທກ ແລະ ປັບປຸງຄຸນນະພາບຜົນລັບຂອງ model.",
            "ເຊື່ອມໂຍງ model ເຂົ້າບໍລິການ production ດ້ວຍ monitoring, guardrail ແລະ ການຄວບຄຸມຕົ້ນທຶນ.",
            "ສ້າງຕົ້ນແບບຕົວແທນຂໍ້ມູນສ້າງສັນ ແລະ ນຳແນວຄິດທີ່ມີທ່າແຮງເຂົ້າຜະລິດຕະພັນ.",
            "ຕິດຕາມລະບົບນິເວດ LLM ແລະ ບ່ງປັນຄວາມຮູ້ກັບທີມ.",
          ],
          requirements: [
            "2+ ປີ ໃນ software engineering ດ້ວຍປະສົບການ LLM / AI ຈິງເມື່ອບໍ່ດົນມານີ້.",
            "ປະສົບການກັບ LLM API ຢ່າງໜ້ອຍໜຶ່ງ (OpenAI, Anthropic ຫຼື ຄ້າຍກັນ) ແລະ prompt engineering.",
            "Python ແ້ນ ແລະ ຄ້ນເຄີຍກັບ vector store ແລະ ລະບົບ retrieval.",
            "ເຂົ້າໃຈ evaluation, ການແລກປ່ຽນ latency ແລະ ຕົ້ນທຶນ ໃນ AI production.",
            "ຢາກຮູ້ຢາກເຫັນ ແລະ ເຂັ້ມງວດ ເມື່ອທົດລອງ model ແລະ ເຕັກນິກໃໝ່.",
          ],
        },
        "product-manager": {
          description: [
            "ຮັບຜິດຊອບແຜນງານຜະລິດຕະພັນຂໍ້ມູນ & AI ຕັ້ງແຕ່ການຄົ້ນພົບຈົນເຖິງການສົ່ງມອບ.",
            "ແປຄວາມຕ້ອງການລູກຄ້າ ແລະ stakeholder ເປັນສະເປັກທີ່ຊັດເຈນ, ມີລຳດັບຄວາມສຳຄັນ.",
            "ເຮັດວຽກປະຈຳວັນກັບທີມວິສະວະກຳ ລະ ອກແບບ ເພື່ອຮັກສາຄວາມຄືບໜ້າ.",
            "ກຳນົດຕົວຊີ້ວັດຄວາມສຳເລັດ ແລະ ໃຊ້ຂໍ້ມູນນຳການຕັດສິນໃຈຜະລິດຕະພັນ.",
            "ສື່ສານຄວາມຄືບໜ້າ ແລະ ການແລກປ່ຽນຢ່າງຊັດເຈນກັບ stakeholder.",
          ],
          requirements: [
            "3+ ປີ ນ product management, ແນະນຳຜະລິດຕະພັນເຕັກນິກ ຫຼື ຂໍ້ມູນ.",
            "ຄວາມສາມາດຂຽນ spec ແລະ user story ທີ່ຊັດເຈນ ໃຫ້ວິສະວະກອນປະຕິບັດໄດ້.",
            "ສະດວກເຮັດວຽກກັບວິສະວະກອນ ກ່ຽວກັບການແລກປ່ຽນສະຖາປັດຕະຍະກຳ ແລະ ຂອບເຂດ.",
            "ທັກສະວິເຄາະແຂງ ແລະ ຄ້ນເຄີຍກັບ product analytics.",
            "ການສື່ສານດີເລີດ ແລະ ການບໍລິຫານ stakeholder ດີ.",
          ],
        },
        "platform-engineer": {
          description: [
            "ສ້າງ ແລະ ບຳລຸງຮັກສາ pipeline CI/CD ແລະ ໂຄງລ່າງ cloud ທີ່ຜະລິດຕະພັນເຮັດວຽກເທິງນັ້ນ.",
            "ປັບປຸງປະສົບການ developer ດ້ວຍເຄື່ອງມື, template ແລະ ເອກະສານ.",
            "ປະຕິບັດ observability — logging, metrics ແລະ alerting — ທົ່ວບໍລິການ.",
            "ເສີມຄວາມແຂງແຮງໂຄງລ່າງ ດ້ານຄວາມປອດໄພ, ຄວາມໜ້າເຊື່ອຖື ແລະ ປະສິດທິພາບຕົ້ນທຶນ.",
            "ສະໜັບສະໜູນທີມວິສະວະກຳ ແລະ ແກ້ໄຂເຫດການໂຄງລ່າງ.",
          ],
          requirements: [
            "2+ ປີ ນ platform, DevOps ຫຼື infrastructure engineering.",
            "ປະສົບການຈິງກັບ cloud ໃຫຍ່ຢ່າງໜ້ອຍໜຶ່ງ (AWS, GCP ຫື Azure).",
            "ປະສົບການກັບ container, Kubernetes ແລະ infrastructure-as-code (Terraform).",
            "ຄຸ້ນເຄີຍກັບລະບົບ CI/CD ແລະ ຄື່ອງມື observability.",
            "ທັກສະ scripting ແຂງ (Bash, Python) ແລະ ນວຄິດເນັ້ນຄວາມໜ້າເຊື່ອຖື.",
          ],
        },
        "uiux-designer": {
          description: [
            "ອອກແບບໜ້າຈໍທີ່ເຂົ້າໃຈງ່າຍ ສຳລັບຜະລິດຕະພັນເວັບ ແລະ ມືຖື ຕັ້ງແຕ່ການຄົ້ນຄວ້າຈົນເຖິງ handoff.",
            "ຮັກສາ ແລະ ພັດທະນາ design system ເພື່ອຄວາມສອດຄ່ອງ ແລະ ຄວາມໄວ.",
            "ສ້າງ wireframe, prototype ແລະ ໜ້າຈໍ high-fidelity.",
            "ຮ່ວມມືກັບວິສະວະກອນ ເພື່ອໃຫ້ການອອກແບບຖືກສ້າງຢ່າງຖືກຕ້ອງ ແລະ ເຂົ້າເຖິງໄດ້.",
            "ແລ່ນການກວດ usability ແລະ ປັບປຸງຕາມຄຳຕິຊົມ.",
          ],
          requirements: [
            "2+ ປີ ອອກແບບຜະລິດຕະພັນດິຈິຕອນ ດ້ວຍ portfolio ແຂງ.",
            "ຊຳນານ Figma ແລະ ຂະບວນການອອກແບບທັນສະໄໝ.",
            "ປະສົບການສ້າງ ຫຼື ຮັກສາ design system.",
            "ເຂົ້າໃຈ accessibility ແລະ ການອອກແບບ responsive.",
            "ການສື່ສານຊັດເຈນ ແລະ ສະດວກເຮັດວຽກໃກ້ກັບວິສະວະກອນ.",
          ],
        },
      },
    },
  },
  technologiesPage: {
    heroTitle: "ເທັກໂນລຢີ",
    intro:
      "ພວກເຮົາສຸມໃສ່ການຄົ້ນຄວ້າ ແລະ ຄອບຄອງເທັກໂນໂລຢີທັນສະໄໝ, ຸກເບີກໃນຫຼາຍຂົງເຂດ. ທີມຂອງພວກເຮົານຳໃຊ້ framework, ໄລບຣາຣີ ແລະ ເຄື່ອງມືຊັ້ນນຳ ເພື່ອສ້າງວິທີແກ້ໄຂທີ່ແຂງແຮງ ແລະ ຂະຫຍາຍໄດ້ສຳລັບລູກຄ້າ.",
    categories: {
      frontend: "FRONTEND",
      backend: "BACKEND",
      mobile: "MOBILE",
      cloud: "CLOUD & ໂຄງລ່າງ",
      database: "ຖານຂໍ້ມູນ",
      ai: "AI & ເທັກໂນໂລຢີໃໝ່",
    },
    categoryDesc: {
      frontend:
        "ໜ້າຈໍສວຍ, ໄວ ແລະ ເຂົ້າເຖິງໄດ້ — ສ້າງດ້ວຍ framework ທັນສະໄໝແບບ component ເພື່ອປະສົບການລື່ນໄຫຼໃນທຸກອຸປະກອນ.",
      backend:
        "ລະບົບຝັ່ງເຊີບເວີ ແລະ API ທີ່ເຊື່ອຖືໄດ້, ປອດໄພ ແລະ ຂະຫຍາຍໄດ້ — ເປັນພື້ນຖານຂັບເຄື່ອນ logic ທຸລະກິດ ແລະ ເຊື່ອມໂຍງທຸກສິ່ງ.",
      mobile:
        "ແອັບ native ແລະ ຂ້າມແພລດຟອມ ທີ່ໃຫ້ຄວາມຮູ້ສຶກຄຸ້ນເຄີຍໃນ iOS ແລະ Android — ຄອດດຽວ, ສອງຮ້ານ, ປະສົບການສອດຄ່ອງ.",
      cloud:
        "ສະຖາປັດຕະຍະກຳ cloud-native, container ແລະ pipeline ອັດຕະໂນມັດ ທີ່ຮັກສາຜະລິດຕະພັນໃຫ້ທົນທານ, ສັງເກດໄດ້ ແລະ ງ່າຍຕໍ່ການສົ່ງມອບ.",
      database:
        "ຄັງຂໍ້ມູນທີ່ເໝາະສຳລັບທຸກວຽກ — ຄວາມສຳພັນ, ເອກະສານ ຫຼື in-memory — ອອກແບບເພື່ອປະສິດທິພາບ, ຄວາມຖືກຕ້ອງ ແລະ ການຂະຫຍາຍ.",
      ai:
        "ຕັ້ງແຕ່ AI ສ້າງສັນ ແລະ ການເຊື່ອມໂຍງ LLM ຈົນເຖິງ machine learning ແລະ ການເບິ່ງເຫັນ — ພວກເຮົາປ່ຽນເທັກໂນໂລຢີໃໝ່ໃຫ້ເປັນມູນຄ່າຜະລິດຕະພັນຈິງ.",
    },
    projects: {
      heading: "ໂປຣເຈັກໂດດເດັ່ນ",
      viewAll: "ເບິ່ງບໍລິການທັງໝົດ",
      items: [
        { title: "ແອັບ Mobile Banking", desc: "ແອັບທະນາຄານທີ່ປອດໄພສຳລັບທຸລະກຳ ແລະ ບໍລິຫານບັນຊີທຸກທີ່, ພັດທະນາເທິງ iOS ແລະ Android.", stack: ["Spring Boot", "Android", "iOS"] },
        { title: "ERP ບໍລິຫານວຽກ", desc: "ລະບົບ ERP ພາຍໃນຕິດຕາມໜ້າວຽກ ແລະ ຂັ້ນຕອນເຮັດວຽກທີມ, ສ້າງສຳລັບການດຳເນີນການປະຈຳວັນຂອງລູກຄ້າ.", stack: ["React", "MySQL", "Spring Boot", "AWS"] },
        { title: "E-commerce ຫຼາຍຊ່ອງທາງ", desc: "ແພລດຟອມຄ້າປີກລວມຊ່ອງທາງເວັບ, ອອນລາຍ ແລະ ມືຖືເປັນປະສົບການຊື້ເຄື່ອງທີ່ລື່ນໄຫຼ.", stack: ["OpenCart", "PHP", "iOS", "Android"] },
      ],
    },
  },
};

export const dictionaries = { en, vi, lo };

