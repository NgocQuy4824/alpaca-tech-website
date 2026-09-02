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
      viewPositions: "View Our Open Positions",
    },
    jobs: [
      { title: "Full-Stack Engineer — React / Next.js / Node.js", location: "London, UK / Remote", type: "Full-time" },
      { title: "Data Engineer — Snowflake / dbt / Cloud", location: "London, UK / Remote", type: "Full-time" },
      { title: "AI Engineer — LLMs & Generative Data Agents", location: "London, UK / Remote", type: "Full-time" },
      { title: "Product Manager — Data & AI Products", location: "London, UK / Remote", type: "Full-time" },
      { title: "Software Engineer — Platform & Infrastructure", location: "London, UK", type: "Full-time" },
      { title: "UI/UX Designer — Design Systems & Product", location: "London, UK / Remote", type: "Full-time" },
    ],
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
      viewPositions: "Xem vị trí tuyển dụng",
    },
    jobs: [
      { title: "Kỹ sư Full-Stack — React / Next.js / Node.js", location: "London, Anh / Từ xa", type: "Toàn thời gian" },
      { title: "Kỹ sư Dữ liệu — Snowflake / dbt / Cloud", location: "London, Anh / Từ xa", type: "Toàn thời gian" },
      { title: "Kỹ sư AI — LLM & Tác nhân dữ liệu tạo sinh", location: "London, Anh / Từ xa", type: "Toàn thời gian" },
      { title: "Quản lý Sản phẩm — Sản phẩm Dữ liệu & AI", location: "London, Anh / Từ xa", type: "Toàn thời gian" },
      { title: "Kỹ sư Phần mềm — Nền tảng & Hạ tầng", location: "London, Anh", type: "Toàn thời gian" },
      { title: "Thiết kế UI/UX — Hệ thống Thiết kế & Sản phẩm", location: "London, Anh / Từ xa", type: "Toàn thời gian" },
    ],
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
      viewPositions: "ເບິ່ງຕຳແໜ່ງທີ່ເປີດຮັບ",
    },
    jobs: [
      { title: "ວິສະວະກອນ Full-Stack — React / Next.js / Node.js", location: "ລອນດອນ, ອັງກິດ / ຈາກໄກ", type: "ເຕັມເວລາ" },
      { title: "ວິສະວະກອນຂໍ້ມູນ — Snowflake / dbt / Cloud", location: "ລອນດອນ, ອັງກິດ / ຈາກໄກ", type: "ເຕັມເວລາ" },
      { title: "ວິສະວະກອນ AI — LLM & ຕົວແທນຂໍ້ມູນສ້າງສັນ", location: "ລອນດອນ, ອັງກິດ / ຈາກໄກ", type: "ເຕັມເວລາ" },
      { title: "ຜູ້ຈັດການຜະລິດຕະພັນ — ຜະລິດຕະພັນຂໍ້ມູນ & AI", location: "ລອນດອນ, ອັງກິດ / ຈາກໄກ", type: "ເຕັມເວລາ" },
      { title: "ວິສະວະກອນຊອບແວ — ແພລດຟອມ & ໂຄງລ່າງ", location: "ລອນດອນ, ອັງກິດ", type: "ເຕັມເວລາ" },
      { title: "ນັກອອກແບບ UI/UX — ລະບົບອອກແບບ & ຜະລິດຕະພັນ", location: "ລອນດອນ, ອັງກິດ / ຈາກໄກ", type: "ເຕັມເວລາ" },
    ],
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
