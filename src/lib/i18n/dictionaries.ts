// Central i18n dictionary. `en` is the source of truth for shape; `vi` and `lo` must match.
// Add a new string here (all three locales) and reference it via `getDictionary(locale)`.
// AIM is positioned as SV Digital Software's AI & data platform (not an investment product).

export const en = {
  header: {
    nav: {
      solution: "SOLUTION",
      technologies: "TECHNOLOGIES",
      aim: "AIM",
      company: "COMPANY",
      recruit: "RECRUIT",
      news: "NEWS",
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
    groupCompanies: "Group Companies",
    nav: {
      solution: "SOLUTION",
      technologies: "TECHNOLOGIES",
      aim: "AIM",
    },
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
    news: [
      { date: "2025/4/14 10:00", title: "SV Digital Software participates in Snowflake Summit 2025" },
      { date: "2024/11/20 09:00", title: "AlphaCrafter featured at AWS re:Invent 2024" },
    ],
  },
  solutions: {
    heading: "SOLUTIONS",
    dataSolution: {
      title: "DATA SOLUTION",
      desc: "SV Digital Software builds modern data platforms that turn raw data into decisions. From data warehouse design and pipeline engineering to analytics and AI-ready infrastructure, we deliver secure, scalable data foundations. Our flagship product \"AlphaCrafter\" — a generative AI data agent operating directly within data warehouses — won the Grand Prize at the Japan Financial Innovation Award 2024.",
      learnMore: "Learn more",
    },
    aim: {
      title: "AIM AI PLATFORM",
      subtitle: "(SV Digital Software AI Platform)",
      desc: "AIM is our core AI and data platform — the engineering foundation behind our products. It combines independently developed AI algorithms with production-grade software to turn complex data into reliable forecasts and decisions. AIM powers the AI investment product \"ROBOPRO\", built in collaboration with SaveZust, with over $250M in assets under management.",
      learnMore: "Learn more",
    },
  },
  companyTeaser: {
    heading: "COMPANY",
    desc: "SV Digital Software is a group company of SaveZust Holdings. As a member of the SaveZust Group, which aims to create new financial solutions and realize a prosperous future, we combine our AI and system development technologies with our financial expertise to provide cutting-edge technology that meets the needs of our customers.",
    readMore: "Read more",
  },
  recruitTeaser: {
    heading: "RECRUIT",
    desc: "We are engineers and makers. By the values of crafting with excellence, thinking bold, building together, earning trust and embracing change, we ship digital products that last. If that resonates — come build the next version with us.",
    readMore: "Read more",
  },
  newsTeaser: {
    heading: "NEWS",
    viewAll: "View All",
    items: [
      { date: "2025.04.14", title: "SV Digital Software participates in Snowflake Summit 2025" },
      { date: "2024.11.20", title: "AlphaCrafter featured at AWS re:Invent 2024 — Generative AI data agent demo" },
    ],
  },
  solutionPage: {
    heroTitle: "SOLUTION",
    heading: "SOLUTIONS",
    dataSolution: {
      title: "DATA SOLUTION",
      desc: "SV Digital Software designs and builds enterprise data platforms end to end — data warehouse architecture, ETL/ELT pipelines, analytics dashboards and AI-ready infrastructure. Our flagship product \"AlphaCrafter\" is a generative AI data agent that operates directly inside the data warehouse, turning natural-language questions into live analyses. Products built on this technology won the Grand Prize at the Japan Financial Innovation Award 2024.",
      contactUs: "Contact us",
    },
    aim: {
      title: "AIM AI PLATFORM",
      subtitle: "(SV Digital Software AI Platform)",
      desc: "AIM is our core AI and data platform — where software engineering meets data intelligence. Independently developed AI algorithms, delivered through production-grade systems, turn complex data into reliable medium to long term forecasts. AIM powers the AI investment product \"ROBOPRO\", built in collaboration with SaveZust, with over $250M in assets under management.",
      learnMore: "Learn more",
    },
    cta: {
      title: "Have a project in mind?",
      desc: "Don't hesitate to reach out. We'd love to walk you through how we apply cutting-edge technology to your project — and how SV Digital Software's experienced team delivers projects of every scale, from a single feature to a full platform.",
      contactUs: "Contact Us",
    },
  },
  aimPage: {
    heroTitle: "AIM",
    heroSubtitle: "",
    intro: {
      title: "AIM",
      para1: "AIM is SV Digital Software's core AI and data platform — the engineering foundation behind our products. We combine independently developed AI algorithms with production-grade software to turn complex data into clear, reliable signals that businesses can act on.",
      para2: "Born in the demanding domain of quantitative finance, AIM analyses large volumes of market and operational data to produce disciplined, medium to long term forecasts. The same platform now powers the AI investment product \"ROBOPRO\", built in collaboration with SaveZust, with over $250M in assets under management — and can be applied far beyond finance.",
      bullets: [
        "Data-driven forecasting with independently developed AI",
        "Medium to long term horizon — robust against short-term noise",
        "Reliable, risk-aware decision support",
        "Proven at scale inside ROBOPRO (>$250M AUM)",
      ],
    },
    stats: [
      { value: "$250M+", label: "AUM powered by AIM via ROBOPRO" },
      { value: "No. 1", label: "FSA ranking — cumulative return & Sharpe ratio" },
      { value: "Since 2022", label: "AIM operating in production" },
    ],
    howItWorks: {
      title: "HOW AIM WORKS",
      cards: [
        { step: "01", title: "Data ingestion", desc: "Collects and cleanses market, macro, and operational data at scale into a unified, secure data warehouse." },
        { step: "02", title: "AI forecasting", desc: "Our proprietary algorithms produce medium to long term forecasts and regime signals with full traceability." },
        { step: "03", title: "Delivery & integration", desc: "Insights are delivered as signals, APIs, or a managed product — integrated directly into your systems." },
      ],
    },
    robopro: {
      label: "PRODUCT",
      title: "ROBOPRO — AI investment powered by AIM",
      desc: "Jointly developed with SaveZust. Evaluated by the Financial Services Agency as No. 1 in cumulative return and Sharpe ratio among domestic asset managers.",
      learnMore: "Learn about ROBOPRO",
    },
    cta: {
      title: "Explore AIM for your business",
      desc: "Whether you are in finance or another data-driven industry — let's discuss how the AIM platform can power your next product.",
      contactUs: "Contact Us",
    },
  },
  companyPage: {
    heroTitle: "COMPANY",
    info: {
      heading: "COMPANY INFORMATION",
      rows: [
        { label: "Company Name", value: "SV Digital Software Co., Ltd." },
        { label: "Date of Establishment", value: "July 8, 2022" },
        { label: "Head Office Location", value: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom" },
        { label: "Capital", value: "USD 67,000 (as of March 2026)" },
        { label: "Business Lines", value: "Custom software development · Data & AI platform engineering · Cloud modernization · Digital transformation consulting" },
        { label: "Core Technologies", value: "TypeScript / React / Next.js · Python · LLM & Generative AI · Snowflake / dbt · AWS / GCP / Azure" },
        { label: "Representative Director & CEO", value: "James Whitfield" },
        { label: "Representative Director, CAO", value: "Sarah Mitchell" },
        { label: "Director", value: "Oliver Hartley" },
        { label: "Director", value: "Daniel Brooks" },
        { label: "Director", value: "Emma Collins" },
        { label: "Standing Corporate Auditor", value: "Richard Foster" },
        { label: "Executive Officer, CTO", value: "Marcus Reid" },
      ],
    },
    history: {
      heading: "COMPANY HISTORY",
      items: [
        { year: "2022.07", text: "SV Digital Software Co., Ltd. established in Tokyo — founded on the belief that great software turns complex data into clear decisions." },
        { year: "2022.10", text: "R&D of the AIM platform begins: our internally developed AI forecasting engine, designed from day one to run in production." },
        { year: "2023.05", text: "AIM proves itself under the strictest requirements — deployed in production to power quantitative decision-making at scale." },
        { year: "2023.11", text: "Data engineering practice established — certified across Snowflake, dbt and the major cloud providers, delivering enterprise data foundations." },
        { year: "2024.11", text: "AlphaCrafter, our generative AI data agent, featured at AWS re:Invent 2024 — live demos of natural-language analytics inside the data warehouse." },
        { year: "2025.03", text: "AlphaCrafter wins the Grand Prize at the Google Cloud Generative AI Innovation Awards." },
        { year: "2025.06", text: "AIM & AlphaCrafter recognized across the industry — SV Digital Software expands its product and delivery teams to serve clients beyond finance." },
      ],
    },
    achievements: {
      heading: "PRODUCTS & FLAGSHIP PROJECTS",
      items: [
        { title: "AlphaCrafter", desc: "Generative AI data agent that lives inside the data warehouse — answer business questions in natural language and get live, governed analyses. Grand Prize, Japan Financial Innovation Award 2024.", meta: "Generative AI / Data Agent" },
        { title: "AIM Platform", desc: "Our AI & data platform: independent algorithms, production-grade engineering, medium to long term forecasts powering ROBOPRO with over $250M in assets under management.", meta: "AI Platform / Forecasting" },
        { title: "Enterprise Delivery", desc: "Full-cycle software delivery for data-intensive businesses — from architecture and cloud migration to managed operations, with security and quality built in.", meta: "Custom Software / Cloud" },
      ],
      note: "*Includes the achievements of our predecessor company.",
    },
    awards: {
      heading: "AWARD-WINNING TRACK RECORD",
      items: [
        { date: "2017.04.06", title: "MUFG Fintech Accelerator Program \"Runner-up Prize\"", desc: "Selected from hundreds of applicants and partnered with kabu.com Securities — the foundation of our experience building mission-critical software for highly regulated industries." },
        { date: "2023.05.16", title: "AIM in production: No. 1 in cumulative return & Sharpe ratio (FSA report)", desc: "The AIM platform's production track record was evaluated as No. 1 in the Financial Services Agency's KPI report — proof that our engineering holds up under real-world pressure." },
        { date: "2025.03.17", title: "Grand Prize — 3rd Google Cloud Generative AI Innovation Awards", desc: "Our AI data agent \"AlphaCrafter\" won the Grand Prize for exploring data warehouses and generating analyses from natural-language questions." },
        { date: "2025.06.05", title: "Nikkei Trendy \"2025 Robo-Advisor Grand Prize\"", desc: "ROBOPRO, powered by our AIM platform, recorded the highest returns among major robo-advisors in Nikkei Trendy's comparison (July 2025 issue)." },
      ],
    },
    map: {
      address: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom",
      viewMap: "View Google Map",
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
  newsPage: {
    heroTitle: "NEWS",
    viewMore: "View More",
    showLess: "Show Less",
    items: [
      { date: "2025.04.14", title: "SV Digital Software participates in Snowflake Summit 2025 — Booth demo of AlphaCrafter" },
      { date: "2025.03.17", title: "AlphaCrafter wins Grand Prize at the 3rd Google Cloud Generative AI Innovation Awards" },
      { date: "2024.11.20", title: "AlphaCrafter featured at AWS re:Invent 2024 — live demo of generative AI data agent" },
      { date: "2024.09.10", title: "AIM platform v2 released — new integration APIs, enterprise-grade security and expanded forecasting capabilities" },
      { date: "2024.06.05", title: "SV Digital Software launches a generative AI consulting practice for enterprise clients" },
      { date: "2024.01.18", title: "Our engineering team doubles as we take on larger platform builds" },
      { date: "2023.11.09", title: "Data engineering practice certified across Snowflake, dbt and major cloud providers" },
      { date: "2023.08.22", title: "SV Digital Software open-sources an internal data pipeline toolkit" },
      { date: "2023.05.16", title: "AIM reaches a production milestone — deployed at scale to power data-driven decision-making" },
      { date: "2023.02.14", title: "SV Digital Software becomes Snowflake Solutions Partner" },
      { date: "2022.12.15", title: "AIM platform v1 enters production" },
      { date: "2022.09.01", title: "SV Digital Software opens its first dedicated R&D studio" },
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
  },
};

export type Dictionary = typeof en;

export const vi: Dictionary = {
  header: {
    nav: {
      solution: "GIẢI PHÁP",
      technologies: "CÔNG NGHỆ",
      aim: "MỤC TIÊU",
      company: "CÔNG TY",
      recruit: "TUYỂN DỤNG",
      news: "TIN TỨC",
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
    groupCompanies: "Công ty thành viên",
    nav: {
      solution: "GIẢI PHÁP",
      technologies: "CÔNG NGHỆ",
      aim: "MỤC TIÊU",
    },
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
    news: [
      { date: "2025/4/14 10:00", title: "SV Digital Software tham gia Snowflake Summit 2025" },
      { date: "2024/11/20 09:00", title: "AlphaCrafter góp mặt tại AWS re:Invent 2024" },
    ],
  },
  solutions: {
    heading: "GIẢI PHÁP",
    dataSolution: {
      title: "GIẢI PHÁP DỮ LIỆU",
      desc: "SV Digital Software xây dựng các nền tảng dữ liệu hiện đại, biến dữ liệu thô thành quyết định kinh doanh. Từ thiết kế kho dữ liệu, xây dựng pipeline đến phân tích và hạ tầng sẵn sàng cho AI, chúng tôi cung cấp nền tảng dữ liệu an toàn và mở rộng được. Sản phẩm chủ lực \"AlphaCrafter\" — tác nhân dữ liệu AI tạo sinh hoạt động trực tiếp trong kho dữ liệu — đã giành Giải Đặc biệt tại Japan Financial Innovation Award 2024.",
      learnMore: "Tìm hiểu thêm",
    },
    aim: {
      title: "NỀN TẢNG AI AIM",
      subtitle: "(Nền tảng AI SV Digital Software)",
      desc: "AIM là nền tảng AI và dữ liệu cốt lõi của chúng tôi — nền móng kỹ thuật đằng sau các sản phẩm. AIM kết hợp các thuật toán AI tự phát triển với phần mềm chuẩn production để biến dữ liệu phức tạp thành dự báo và quyết định đáng tin cậy. AIM vận hành sản phẩm đầu tư AI \"ROBOPRO\", phát triển cùng SaveZust, với tổng tài sản quản lý hơn 250 triệu USD.",
      learnMore: "Tìm hiểu thêm",
    },
  },
  companyTeaser: {
    heading: "CÔNG TY",
    desc: "SV Digital Software là công ty thành viên của SaveZust Holdings. Là một phần của Tập đoàn SaveZust, hướng tới việc tạo ra các giải pháp tài chính mới và hiện thực hóa tương lai thịnh vượng, chúng tôi kết hợp công nghệ AI và phát triển hệ thống với chuyên môn tài chính để cung cấp công nghệ tiên tiến đáp ứng nhu cầu của khách hàng.",
    readMore: "Đọc thêm",
  },
  recruitTeaser: {
    heading: "TUYỂN DỤNG",
    desc: "Chúng tôi là những kỹ sư và người làm sản phẩm. Với các giá trị theo đuổi chất lượng, dám nghĩ dám làm, cùng nhau kiến tạo, chính trực và luôn đổi mới, chúng tôi tạo nên những sản phẩm số bền vững. Nếu điều đó chạm đến bạn — hãy cùng xây phiên bản tiếp theo.",
    readMore: "Đọc thêm",
  },
  newsTeaser: {
    heading: "TIN TỨC",
    viewAll: "Xem tất cả",
    items: [
      { date: "2025.04.14", title: "SV Digital Software tham gia Snowflake Summit 2025" },
      { date: "2024.11.20", title: "AlphaCrafter góp mặt tại AWS re:Invent 2024 — Demo tác nhân dữ liệu AI tạo sinh" },
    ],
  },
  solutionPage: {
    heroTitle: "GIẢI PHÁP",
    heading: "GIẢI PHÁP",
    dataSolution: {
      title: "GIẢI PHÁP DỮ LIỆU",
      desc: "SV Digital Software thiết kế và xây dựng nền tảng dữ liệu doanh nghiệp trọn vẹn — kiến trúc kho dữ liệu, pipeline ETL/ELT, dashboard phân tích và hạ tầng sẵn sàng cho AI. Sản phẩm chủ lực \"AlphaCrafter\" là tác nhân dữ liệu AI tạo sinh hoạt động trực tiếp trong kho dữ liệu, chuyển câu hỏi ngôn ngữ tự nhiên thành phân tích theo thời gian thực. Các sản phẩm xây dựng trên công nghệ này đã giành Giải Đặc biệt tại Japan Financial Innovation Award 2024.",
      contactUs: "Liên hệ",
    },
    aim: {
      title: "NỀN TẢNG AI AIM",
      subtitle: "(Nền tảng AI SV Digital Software)",
      desc: "AIM là nền tảng AI và dữ liệu cốt lõi của chúng tôi — nơi kỹ thuật phần mềm gặp gỡ trí tuệ dữ liệu. Các thuật toán AI tự phát triển, vận hành qua hệ thống đạt chuẩn production, biến dữ liệu phức tạp thành dự báo trung - dài hạn đáng tin cậy. AIM điều hành sản phẩm đầu tư AI \"ROBOPRO\", phát triển cùng SaveZust, với tổng tài sản quản lý hơn 250 triệu USD.",
      learnMore: "Tìm hiểu thêm",
    },
    cta: {
      title: "Bạn có dự án nào trong đầu không?",
      desc: "Đừng ngần ngại liên hệ với chúng tôi để tìm hiểu thêm về cách chúng tôi áp dụng công nghệ tiên tiến vào dự án của bạn — và năng lực mạnh mẽ của SV Digital Software trong việc triển khai các dự án ở mọi quy mô với đội ngũ nhân tài giàu kinh nghiệm.",
      contactUs: "Liên hệ",
    },
  },
  aimPage: {
    heroTitle: "MỤC TIÊU",
    heroSubtitle: "",
    intro: {
      title: "MỤC TIÊU",
      para1: "AIM là nền tảng AI và dữ liệu cốt lõi của SV Digital Software — nền móng kỹ thuật đằng sau các sản phẩm của chúng tôi. Chúng tôi kết hợp các thuật toán AI tự phát triển với phần mềm chuẩn production để biến dữ liệu phức tạp thành tín hiệu rõ ràng, đáng tin cậy mà doanh nghiệp có thể hành động.",
      para2: "Ra đời trong lĩnh vực tài chính định lượng đòi hỏi khắt khe, AIM phân tích khối lượng lớn dữ liệu thị trường và vận hành để tạo ra dự báo trung - dài hạn có kỷ luật. Cùng nền tảng này hiện vận hành sản phẩm đầu tư AI \"ROBOPRO\", phát triển cùng SaveZust, với tổng tài sản quản lý hơn 250 triệu USD — và có thể ứng dụng rộng rãi vượt ra ngoài lĩnh vực tài chính.",
      bullets: [
        "Dự báo dựa trên dữ liệu với AI tự phát triển",
        "Tầm nhìn trung - dài hạn — vững vàng trước biến động ngắn hạn",
        "Hỗ trợ ra quyết định đáng tin cậy, ý thức về rủi ro",
        "Đã được chứng minh ở quy mô lớn trong ROBOPRO (>250 triệu USD AUM)",
      ],
    },
    stats: [
      { value: "250 triệu USD+", label: "AUM do AIM vận hành qua ROBOPRO" },
      { value: "Số 1", label: "Xếp hạng FSA — lợi nhuận lũy kế & tỷ lệ Sharpe" },
      { value: "Từ 2022", label: "AIM hoạt động trong production" },
    ],
    howItWorks: {
      title: "CÁCH AIM HOẠT ĐỘNG",
      cards: [
        { step: "01", title: "Thu thập dữ liệu", desc: "Thu thập và làm sạch dữ liệu thị trường, vĩ mô và dữ liệu vận hành ở quy mô lớn vào một kho dữ liệu thống nhất, bảo mật." },
        { step: "02", title: "Dự báo bằng AI", desc: "Các thuật toán độc quyền tạo ra dự báo trung - dài hạn và tín hiệu trạng thái thị trường với khả năng truy vết đầy đủ." },
        { step: "03", title: "Triển khai & tích hợp", desc: "Insight được cung cấp dưới dạng tín hiệu, API hoặc sản phẩm quản lý — tích hợp trực tiếp vào hệ thống của bạn." },
      ],
    },
    robopro: {
      label: "SẢN PHẨM",
      title: "ROBOPRO — Đầu tư AI vận hành bởi AIM",
      desc: "Đồng phát triển cùng SaveZust. Được Cơ quan Dịch vụ Tài chính đánh giá là Số 1 về lợi nhuận lũy kế và tỷ lệ Sharpe trong số các nhà quản lý tài sản trong nước.",
      learnMore: "Tìm hiểu về ROBOPRO",
    },
    cta: {
      title: "Khám phá AIM cho doanh nghiệp của bạn",
      desc: "Dù bạn hoạt động trong lĩnh vực tài chính hay bất kỳ ngành nào dựa trên dữ liệu — hãy cùng thảo luận cách nền tảng AIM có thể thúc đẩy sản phẩm tiếp theo của bạn.",
      contactUs: "Liên hệ",
    },
  },
  companyPage: {
    heroTitle: "CÔNG TY",
    info: {
      heading: "THÔNG TIN CÔNG TY",
      rows: [
        { label: "Tên công ty", value: "SV Digital Software Co., Ltd." },
        { label: "Ngày thành lập", value: "8 tháng 7, 2022" },
        { label: "Địa chỉ trụ sở chính", value: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom" },
        { label: "Vốn điều lệ", value: "67.000 USD (tính đến tháng 3/2026)" },
        { label: "Lĩnh vực hoạt động", value: "Phát triển phần mềm theo yêu cầu · Nền tảng Dữ liệu & AI · Hiện đại hóa Cloud · Tư vấn chuyển đổi số" },
        { label: "Công nghệ cốt lõi", value: "TypeScript / React / Next.js · Python · LLM & AI tạo sinh · Snowflake / dbt · AWS / GCP / Azure" },
        { label: "Giám đốc đại diện & CEO", value: "James Whitfield" },
        { label: "Giám đốc đại diện, CAO", value: "Sarah Mitchell" },
        { label: "Giám đốc", value: "Oliver Hartley" },
        { label: "Giám đốc", value: "Daniel Brooks" },
        { label: "Giám đốc", value: "Emma Collins" },
        { label: "Kiểm toán viên thường trực", value: "Richard Foster" },
        { label: "Giám đốc điều hành, CTO", value: "Marcus Reid" },
      ],
    },
    history: {
      heading: "LỊCH SỬ CÔNG TY",
      items: [
        { year: "2022.07", text: "Thành lập SV Digital Software Co., Ltd. tại Tokyo — khởi đầu từ niềm tin rằng phần mềm tốt biến dữ liệu phức tạp thành quyết định rõ ràng." },
        { year: "2022.10", text: "Khởi động R&D nền tảng AIM: cỗ máy dự báo AI do chúng tôi tự phát triển, được thiết kế ngay từ đầu để vận hành trong môi trường production." },
        { year: "2023.05", text: "AIM chứng minh năng lực dưới những yêu cầu khắt khe nhất — triển khai trong production để hỗ trợ ra quyết định định lượng ở quy mô lớn." },
        { year: "2023.11", text: "Thành lập đội ngũ kỹ thuật dữ liệu — đạt chứng nhận trên Snowflake, dbt và các nền tảng cloud lớn, cung cấp nền tảng dữ liệu doanh nghiệp." },
        { year: "2024.11", text: "AlphaCrafter, tác nhân dữ liệu AI tạo sinh của chúng tôi, góp mặt tại AWS re:Invent 2024 — demo trực tiếp phân tích bằng ngôn ngữ tự nhiên ngay trong kho dữ liệu." },
        { year: "2025.03", text: "AlphaCrafter giành Giải Đặc biệt tại Google Cloud Generative AI Innovation Awards." },
        { year: "2025.06", text: "AIM & AlphaCrafter được công nhận rộng rãi — SV Digital Software mở rộng đội ngũ sản phẩm và triển khai để phục vụ khách hàng vượt ra ngoài lĩnh vực tài chính." },
      ],
    },
    achievements: {
      heading: "SẢN PHẨM & DỰ ÁN TIÊU BIỂU",
      items: [
        { title: "AlphaCrafter", desc: "Tác nhân dữ liệu AI tạo sinh sống ngay trong kho dữ liệu — đặt câu hỏi bằng ngôn ngữ tự nhiên và nhận phân tích trực tiếp, có kiểm soát. Giải Đặc biệt, Japan Financial Innovation Award 2024.", meta: "AI tạo sinh / Tác nhân dữ liệu" },
        { title: "Nền tảng AIM", desc: "Nền tảng AI & dữ liệu của chúng tôi: thuật toán tự phát triển, kỹ thuật chuẩn production, dự báo trung - dài hạn vận hành ROBOPRO với hơn 250 triệu USD tài sản quản lý.", meta: "Nền tảng AI / Dự báo" },
        { title: "Triển khai doanh nghiệp", desc: "Cung cấp phần mềm trọn vòng đời cho doanh nghiệp dữ liệu lớn — từ kiến trúc và di chuyển cloud đến vận hành, với bảo mật và chất lượng được xây sẵn.", meta: "Phần mềm theo yêu cầu / Cloud" },
      ],
      note: "*Bao gồm thành tựu của công ty tiền thân.",
    },
    awards: {
      heading: "THÀNH TÍCH GIẢI THƯỞNG",
      items: [
        { date: "2017.04.06", title: "Chương trình Tăng tốc Fintech MUFG \"Giải Á quân\"", desc: "Được chọn từ hàng trăm ứng viên và hợp tác cùng kabu.com Securities — nền tảng cho kinh nghiệm xây dựng phần mềm trọng yếu cho các ngành có quy định nghiêm ngặt." },
        { date: "2023.05.16", title: "AIM trong production: Số 1 về lợi nhuận lũy kế & tỷ lệ Sharpe (báo cáo FSA)", desc: "Thành tích vận hành thực tế của nền tảng AIM được đánh giá là Số 1 trong báo cáo KPI của Cơ quan Dịch vụ Tài chính — minh chứng rằng kỹ thuật của chúng tôi đứng vững dưới áp lực thực tế." },
        { date: "2025.03.17", title: "Giải Đặc biệt — Google Cloud Generative AI Innovation Awards lần 3", desc: "Tác nhân dữ liệu AI \"AlphaCrafter\" giành Giải Đặc biệt nhờ khả năng khám phá kho dữ liệu và tạo phân tích từ câu hỏi ngôn ngữ tự nhiên." },
        { date: "2025.06.05", title: "Nikkei Trendy \"Giải Robo-Advisor 2025\"", desc: "ROBOPRO, vận hành bởi nền tảng AIM của chúng tôi, ghi nhận lợi nhuận cao nhất trong số các robo-advisor lớn theo so sánh của Nikkei Trendy (ấn bản tháng 7/2025)." },
      ],
    },
    map: {
      address: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom",
      viewMap: "Xem Google Map",
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
  newsPage: {
    heroTitle: "TIN TỨC",
    viewMore: "Xem thêm",
    showLess: "Thu gọn",
    items: [
      { date: "2025.04.14", title: "SV Digital Software tham gia Snowflake Summit 2025 — Demo AlphaCrafter tại gian hàng" },
      { date: "2025.03.17", title: "AlphaCrafter giành Giải Đặc biệt tại Google Cloud Generative AI Innovation Awards lần 3" },
      { date: "2024.11.20", title: "AlphaCrafter góp mặt tại AWS re:Invent 2024 — demo trực tiếp tác nhân dữ liệu AI tạo sinh" },
      { date: "2024.09.10", title: "Ra mắt nền tảng AIM v2 — API tích hợp mới, bảo mật cấp doanh nghiệp và khả năng dự báo mở rộng" },
      { date: "2024.06.05", title: "SV Digital Software ra mắt dịch vụ tư vấn AI tạo sinh cho khách hàng doanh nghiệp" },
      { date: "2024.01.18", title: "Đội ngũ kỹ sư của chúng tôi tăng gấp đôi khi đảm nhận các dự án nền tảng lớn hơn" },
      { date: "2023.11.09", title: "Bộ phận kỹ thuật dữ liệu đạt chứng nhận trên Snowflake, dbt và các nhà cung cấp cloud lớn" },
      { date: "2023.08.22", title: "SV Digital Software mã nguồn mở bộ công cụ pipeline dữ liệu nội bộ" },
      { date: "2023.05.16", title: "AIM đạt cột mốc production — triển khai ở quy mô lớn để hỗ trợ ra quyết định dựa trên dữ liệu" },
      { date: "2023.02.14", title: "SV Digital Software trở thành Đối tác Giải pháp Snowflake" },
      { date: "2022.12.15", title: "Nền tảng AIM v1 đi vào production" },
      { date: "2022.09.01", title: "SV Digital Software mở studio R&D chuyên dụng đầu tiên" },
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
  },
};

export const lo: Dictionary = {
  header: {
    nav: {
      solution: "ວິທີແກ້ໄຂ",
      technologies: "ເທັກໂນໂລຢີ",
      aim: "AIM",
      company: "ບໍລິສັດ",
      recruit: "ຮັບສະໝັກງານ",
      news: "ຂ່າວສານ",
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
    groupCompanies: "ບໍລິສັດໃນເຄືອ",
    nav: {
      solution: "ວິທີແກ້ໄຂ",
      technologies: "ເທັກໂນໂລຢີ",
      aim: "AIM",
    },
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
    news: [
      { date: "2025/4/14 10:00", title: "SV Digital Software ຮ່ວມງານ Snowflake Summit 2025" },
      { date: "2024/11/20 09:00", title: "AlphaCrafter ຖືກນຳສະເໜີໃນ AWS re:Invent 2024" },
    ],
  },
  solutions: {
    heading: "ວິທີແກ້ໄຂ",
    dataSolution: {
      title: "ວິທີແກ້ໄຂຂໍ້ມູນ",
      desc: "SV Digital Software ສ້າງແພລດຟອມຂໍ້ມູນທີ່ທັນສະໄໝ ເພື່ອປ່ຽນຂໍ້ມູນດິບໃຫ້ເປັນການຕັດສິນໃຈ. ຕັ້ງແຕ່ການອອກແບບຄັງຂໍ້ມູນ ແລະ ວິສະວະກຳ pipeline ຈົນເຖິງການວິເຄາະ ແລະ ໂຄງລ່າງທີ່ພ້ອມສຳລັບ AI, ພວກເຮົາສົ່ງມອບພື້ນຖານຂໍ້ມູນທີ່ປອດໄພ ແລະ ຂະຫຍາຍໄດ້. ຜະລິດຕະພັນຫຼັກ \"AlphaCrafter\" — ຕົວແທນຂໍ້ມູນ AI ສ້າງສັນ ທີ່ເຮັດວຽກໂດຍກົງພາຍໃນຄັງຂໍ້ມູນ — ໄດ້ຮັບລາງວັນໃຫຍ່ໃນ Japan Financial Innovation Award 2024.",
      learnMore: "ຮຽນຮູ້ເພີ່ມເຕີມ",
    },
    aim: {
      title: "ແພລດຟອມ AI ຂອງ AIM",
      subtitle: "(ແພລດຟອມ AI ຂອງ SV Digital Software)",
      desc: "AIM ແມ່ນແພລດຟອມ AI ແລະ ຂໍ້ມູນຫຼັກຂອງພວກເຮົາ — ພ້ນຖານວິສະວະກຳເບື້ອງຫຼັງຜະລິດຕະພັນຂອງພວກເຮົາ. ມັນປະສົມປະສານອັນກໍຣິທຶມ AI ທີ່ພັດທະນາເອງ ກັບ ຊອບແວລະດັບ production ເພື່ອປ່ຽນຂໍ້ມູນທີ່ຊັບຊ້ອນໃຫ້ເປັນການຄາດການ ແລະ ການຕັດສິນໃຈທີ່ເຊື່ອຖືໄດ້. AIM ຂັບເຄື່ອນຜະລິດຕະພັນການລົງທຶນ AI \"ROBOPRO\", ພັດທະນາຮ່ວມກັບ SaveZust, ມີຊັບສິນພາຍໃຕ້ການບໍລິຫານຫຼາຍກວ່າ $250M.",
      learnMore: "ຮຽນຮູ້ເພີ່ມເຕີມ",
    },
  },
  companyTeaser: {
    heading: "ບໍລິສັດ",
    desc: "SV Digital Software ແມ່ນບໍລິສັດໃນເຄືອຂອງ SaveZust Holdings. ໃນຖານະສະມາຊິກຂອງກຸ່ມ SaveZust, ເຊິ່ງມຸ່ງສ້າງວິທີແກ້ໄຂທາງການເງິນໃໝ່ ແລະ ສ້າງອະນາຄົດທີ່ຈະເລີນ, ພວກເຮົາປະສົມປະສານເທັກໂນລຢີ AI ແລະ ການພັດທະນາລະບົບ ກັບ ຄວາມຊ່ຽວຊານທາງການເງິນ ເພື່ອສະໜອງເທັກໂນໂລຢີລ້ຳສະໄໝທີ່ຕອບສະໜອງຄວາມຕ້ອງການຂອງລູກຄ້າ.",
    readMore: "ອ່ານເພີ່ມເຕີມ",
  },
  recruitTeaser: {
    heading: "ຮັບສະໝັກງານ",
    desc: "ພວກເຮົາແມ່ນວິສະວະກອນ ແລະ ນັກສ້າງ. ດ້ວຍຄຸນຄ່າຂອງການສ້າງສັນຢ່າງເປັນເລີດ, ຄິດຢ່າງກ້າຫານ, ສ້າງຮ່ວມກັນ, ສ້າງຄວາມໄວ້ເນື້ອເຊື່ອໃຈ ແລະ ອ້ອມຮັບການປ່ຽນແປງ, ພວກເຮົາສົ່ງມອບຜະລິດຕະພັນດິຈິຕອນທີ່ຍືນຍົງ. ຖ້າສິ່ງນີ້ກົງໃຈທ່ານ — ມາສ້າງເວີຊັນຕໍ່ໄປກັບພວກເຮົາ.",
    readMore: "ອ່ານເພີ່ມເຕີມ",
  },
  newsTeaser: {
    heading: "ຂ່າວສານ",
    viewAll: "ເບິ່ງທັງໝົດ",
    items: [
      { date: "2025.04.14", title: "SV Digital Software ຮ່ວມງານ Snowflake Summit 2025" },
      { date: "2024.11.20", title: "AlphaCrafter ຖືກນຳສະເໜີໃນ AWS re:Invent 2024 — ສາທິດຕົວແທນຂໍ້ມູນ AI ສ້າງສັນ" },
    ],
  },
  solutionPage: {
    heroTitle: "ວິທີແກ້ໄຂ",
    heading: "ວິທີແກ້ໄຂ",
    dataSolution: {
      title: "ວິທີແກ້ໄຂຂໍ້ມູນ",
      desc: "SV Digital Software ອອກແບບ ແລະ ສ້າງແພລດຟອມຂໍ້ມູນລະດັບວິສາຫະກິດແບບຄົບວົງຈອນ — ໂຄງສ້າງຄັງຂໍ້ມູນ, pipeline ETL/ELT, ແດຊບອດວິເຄາະ ແລະ ໂຄງລ່າງທີ່ພ້ອມສຳລັບ AI. ຜະລິດຕະພັນຫຼັກ \"AlphaCrafter\" ແມ່ນຕົວແທນຂໍ້ມູນ AI ສ້າງສັນ ທີ່ເຮັດວຽກໂດຍກົງພາຍໃນຄັງຂໍ້ມູນ, ປ່ຽນຄຳຖາມພາສາທຳມະຊາດໃຫ້ເປັນການວິເຄາະແບບສົດ. ຜະລິດຕະພັນທີ່ສ້າງດ້ວຍເທັກໂນໂລຢີນີ້ໄດ້ຮັບລາງວັນໃຫຍ່ໃນ Japan Financial Innovation Award 2024.",
      contactUs: "ຕິດຕໍ່ພວກເຮົາ",
    },
    aim: {
      title: "ແພລດຟອມ AI ຂອງ AIM",
      subtitle: "(ແພລດຟອມ AI ຂອງ SV Digital Software)",
      desc: "AIM ແມ່ນແພລດຟອມ AI ແລະ ຂໍ້ມູນຫຼັກຂອງພວກເຮົາ — ບ່ອນທີ່ວິສະວະກຳຊອບແວພົບກັບປັນຍາຂໍ້ມູນ. ອັນກໍຣິທຶມ AI ທີ່ພັດທະນາເອງ, ສົ່ງມອບຜ່ານລະບົບລະດັບ production, ປ່ຽນຂໍ້ມູນທີ່ຊັບຊ້ອນໃຫ້ເປັນການຄາດການໄລຍະກາງເຖິງຍາວທີ່ເຊື່ອຖືໄດ້. AIM ຂັບເຄື່ອນຜະລິດຕະພັນການລົງທຶນ AI \"ROBOPRO\", ພັດທະນາຮ່ວມກັບ SaveZust, ມີຊັບສິນພາຍໃຕ້ການບໍລິຫານຫຼາຍກວ່າ $250M.",
      learnMore: "ຮຽນຮູ້ເພີ່ມເຕີມ",
    },
    cta: {
      title: "ທ່ານມີໂປຣເຈັກໃນໃຈບໍ?",
      desc: "ຢ່າລັງເລທີ່ຈະຕິດຕໍ່ພວກເຮົາ ເພື່ອຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບວິທີທີ່ພວກເຮົານຳໃຊ້ເທັກໂນໂລຢີລ້ຳສະໄໝເຂົ້າໃນໂປຣເຈັກຂອງທ່ານ — ແລະ ຄວາມສາມາດທີ່ເຂັ້ມແຂງຂອງ SV Digital Software ໃນການສົ່ງມອບໂປຣເຈັກໃນທຸກຂະໜາດ ດ້ວຍທີມບຸກຄະລາກອນທີ່ມີປະສົບການ.",
      contactUs: "ຕິດຕໍ່ພວກເຮົາ",
    },
  },
  aimPage: {
    heroTitle: "AIM",
    heroSubtitle: "",
    intro: {
      title: "AIM",
      para1: "AIM ແມ່ນແພລດຟອມ AI ແລະ ຂໍ້ມູນຫຼັກຂອງ SV Digital Software — ພື້ນຖານວິສະວະກຳເບື້ອງຫຼັງຜະລິດຕະພັນຂອງພວກເຮົາ. ພວກເຮົາປະສົມປະສານອັນກໍຣິທຶມ AI ທີ່ພັດທະນາເອງ ກັບ ຊອບແວລະດັບ production ເພື່ອປ່ຽນຂໍ້ມູນທີ່ຊັບຊ້ອນໃຫ້ເປັນສັນຍານທີ່ຊັດເຈນ, ເຊ່ອຖືໄດ້ ທີ່ທຸລະກິດສາມາດນຳໃຊ້ໄດ້.",
      para2: "ເກີດຂຶ້ນໃນຂົງເຂດການເງິນເຊິງປະລິມານທີ່ເຂັ້ມງວດ, AIM ວິເຄາະຂໍ້ມູນຕະຫຼາດ ແລະ ການດຳເນີນການປະລິມານຫຼວງຫຼາຍ ເພື່ອສ້າງການຄາດການໄລຍະກາງເຖິງຍາວທີ່ມີວິໄນ. ແພລດຟອມດຽວກັນນີ້ຂັບເຄື່ອນຜະລິດຕະພັນການລົງທຶນ AI \"ROBOPRO\", ພັດທະນາຮ່ວມກັບ SaveZust, ມີຊັບສິນພາຍໃຕ້ການບໍລິຫານຫຼາຍກວ່າ $250M — ແລະ ສາມາດນຳໃຊ້ໄດ້ໄກເກີນຂອບເຂດການເງິນ.",
      bullets: [
        "ການຄາດການໂດຍອີງຂໍ້ມູນດ້ວຍ AI ທີ່ພັດທະນາເອງ",
        "ໄລຍະເວລາກາງເຖິງຍາວ — ແຂງແຮງຕໍ່ສຽງລົບກວນໄລຍະສັ້ນ",
        "ການສະໜັບສະໜູນການຕັດສິນໃຈທີ່ເຊື່ອຖືໄດ້, ຮັບຮູ້ຄວາມສ່ຽງ",
        "ພິສູດແລ້ວໃນຂະໜາດໃຫຍ່ພາຍໃນ ROBOPRO (>$250M AUM)",
      ],
    },
    stats: [
      { value: "$250M+", label: "AUM ຂັບເຄື່ອນໂດຍ AIM ຜ່ານ ROBOPRO" },
      { value: "ອັນດັບ 1", label: "ອັນດັບ FSA — ຜົນຕອບແທນສະສົມ & ອັດຕາສ່ວນ Sharpe" },
      { value: "ຕັ້ງແຕ່ 2022", label: "AIM ເຮັດວຽກໃນ production" },
    ],
    howItWorks: {
      title: "ວິທີການເຮັດວຽກຂອງ AIM",
      cards: [
        { step: "01", title: "ການນຳເຂົ້າຂໍ້ມູນ", desc: "ເກັບກຳ ແລະ ທຳຄວາມສະອາດຂໍ້ມູນຕະຫຼາດ, ມະຫາພາກ ແລະ ການດຳເນີນການໃນຂະໜາດໃຫຍ່ ເຂົ້າສູ່ຄັງຂໍ້ມູນດຽວທີ່ປອດໄພ." },
        { step: "02", title: "ການຄາດການດ້ວຍ AI", desc: "ອັນກໍຣິທຶມສະເພາະຂອງພວກເຮົາສ້າງການຄາດການໄລຍະກາງເຖິງຍາວ ແລະ ສັນຍານສະພາບຕະຫຼາດ ພ້ອມການຕິດຕາມຄົບຖ້ວນ." },
        { step: "03", title: "ການສົ່ງມອບ & ການເຊື່ອມໂຍງ", desc: "ເຊີງເລິກຖືກສົ່ງມອບເປັນສັນຍານ, API, ຫຼື ຜະລິດຕະພັນທີ່ມີການບໍລິຫານ — ເຊື່ອມໂຍງໂດຍກົງເຂົ້າລະບົບຂອງທ່ານ." },
      ],
    },
    robopro: {
      label: "ຜະລິດຕະພັນ",
      title: "ROBOPRO — ການລົງທຶນ AI ຂັບເຄື່ອນໂດຍ AIM",
      desc: "ພັດທະນາຮ່ວມກັບ SaveZust. ຖືກປະເມີນໂດຍອົງການບໍລິການທາງການເງິນ ເປັນອັນດັບ 1 ນຜົນຕອບແທນສະສົມ ແລະ ອັດຕາສ່ວນ Sharpe ໃນບັນດາຜູ້ບໍລິຫານຊັບສິນພາຍໃນປະເທດ.",
      learnMore: "ຮຽນຮູ້ກ່ຽວກັບ ROBOPRO",
    },
    cta: {
      title: "ສຳຫຼວດ AIM ສຳລັບທຸລະກິດຂອງທ່ານ",
      desc: "ບໍ່ວ່າທ່ານຈະຢູ່ໃນຂະແໜງການເງິນ ຫຼື ອຸດສາຫະກຳທີ່ຂັບເຄື່ອນດ້ວຍຂໍ້ມູນອື່ນ — ມາປຶກສາກັນວ່າແພລດຟອມ AIM ສາມາດຂັບເຄື່ອນຜະລິດຕະພັນຕໍ່ໄປຂອງທ່ານໄດ້ແນວໃດ.",
      contactUs: "ຕິດຕໍ່ພວກເຮົາ",
    },
  },
  companyPage: {
    heroTitle: "ບໍລິສັດ",
    info: {
      heading: "ຂໍ້ມູນບໍລິສັດ",
      rows: [
        { label: "ຊື່ບໍລິສັດ", value: "SV Digital Software Co., Ltd." },
        { label: "ວັນທີກໍ່ຕັ້ງ", value: "8 ກໍລະກົດ 2022" },
        { label: "ທີ່ຕັ້ງສຳນັກງານໃຫຍ່", value: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom" },
        { label: "ທຶນຈົດທະບຽນ", value: "USD 67,000 (ເຖິງເດືອນມີນາ 2026)" },
        { label: "ສາຍທຸລະກິດ", value: "ການພັດທະນາຊອບແວຕາມຄວາມຕ້ອງການ · ວິສະວະກຳແພລດຟອມຂໍ້ມູນ & AI · ການທັນສະໄໝ Cloud · ການປຶກສາການປ່ຽນແປງດິຈິຕອນ" },
        { label: "ເທັກໂນໂລຢີຫຼັກ", value: "TypeScript / React / Next.js · Python · LLM & AI ສ້າງສັນ · Snowflake / dbt · AWS / GCP / Azure" },
        { label: "ຜູ້ອຳນວຍການຕົວແທນ & CEO", value: "James Whitfield" },
        { label: "ຜູ້ອຳນວຍການຕົວແທນ, CAO", value: "Sarah Mitchell" },
        { label: "ກຳມະການ", value: "Oliver Hartley" },
        { label: "ກຳມະການ", value: "Daniel Brooks" },
        { label: "ກຳມະການ", value: "Emma Collins" },
        { label: "ຜູ້ກວດສອບປະຈຳ", value: "Richard Foster" },
        { label: "ຜູ້ບໍລິຫານ, CTO", value: "Marcus Reid" },
      ],
    },
    history: {
      heading: "ປະຫວັດບໍລິສັດ",
      items: [
        { year: "2022.07", text: "ກໍ່ຕັ້ງ SV Digital Software Co., Ltd. ຢູ່ໂຕກຽວ — ກໍ່ຕັ້ງດ້ວຍຄວາມເຊື່ອວ່າຊອບແວທີ່ດີປ່ຽນຂໍ້ມູນທີ່ຊັບຊ້ອນໃຫ້ເປັນການຕັດສິນໃຈທີ່ຊັດເຈນ." },
        { year: "2022.10", text: "ເລີ່ມ R&D ແພລດຟອມ AIM: ເຄື່ອງຈັກຄາດການ AI ທີ່ພັດທະນາພາຍໃນ, ອອກແບບຕັ້ງແຕ່ວັນທຳອິດໃຫ້ເຮັດວຽກໃນ production." },
        { year: "2023.05", text: "AIM ພິສູດຕົວເອງພາຍໃຕ້ຂໍ້ກຳນົດທີ່ເຂັ້ມງວດທີ່ສຸດ — ນໃຊ້ໃນ production ເພື່ອຂັບເຄື່ອນການຕັດສິນໃຈເຊິງປະລິມານໃນຂະໜາດໃຫຍ່." },
        { year: "2023.11", text: "ສ້າງຕັ້ງການປະຕິບັດວິສະວະກຳຂໍ້ມູນ — ໄດ້ຮັບການຮັບຮອງທົ່ວ Snowflake, dbt ແລະ ຜູ້ໃຫ້ບໍລິການ cloud ຫຼັກ, ສົ່ງມອບພື້ນຖານຂໍ້ມູນລະດັບວິສາຫະກິດ." },
        { year: "2024.11", text: "AlphaCrafter, ຕົວແທນຂໍ້ມູນ AI ສ້າງສັນຂອງພວກເຮົາ, ຖືກນຳສະເໜີໃນ AWS re:Invent 2024 — ສາທິດການວິເຄາະພາສາທຳມະຊາດພາຍໃນຄັງຂໍ້ມູນແບບສົດ." },
        { year: "2025.03", text: "AlphaCrafter ຊະນະລາງວັນໃຫຍ່ໃນ Google Cloud Generative AI Innovation Awards." },
        { year: "2025.06", text: "AIM & AlphaCrafter ໄດ້ຮັບການຍອມຮັບທົ່ວອຸດສາຫະກຳ — SV Digital Software ຂະຫຍາຍທີມຜະລິດຕະພັນ ແລະ ການສົ່ງມອບ ເພື່ອບໍລິການລູກຄ້າເກີນຂອບເຂດການເງິນ." },
      ],
    },
    achievements: {
      heading: "ຜະລິດຕະພັນ & ໂປຣເຈັກຫຼັກ",
      items: [
        { title: "AlphaCrafter", desc: "ຕົວແທນຂໍ້ມູນ AI ສ້າງສັນ ທີ່ຢູ່ພາຍໃນຄັງຂໍ້ມູນ — ຕອບຄຳຖາມທຸລະກິດດ້ວຍພາສາທຳມະຊາດ ແລະ ໄດ້ຮັບການວິເຄາະແບບສົດທີ່ມີການຄວບຄຸມ. ລາງວັນໃຫຍ່, Japan Financial Innovation Award 2024.", meta: "AI ສ້າງສັນ / ຕົວແທນຂໍ້ມູນ" },
        { title: "ແພລດຟອມ AIM", desc: "ແພລດຟອມ AI & ຂໍ້ມູນຂອງພວກເຮົາ: ອັນກໍຣິທຶມເອກະລາດ, ວິສະວະກຳລະດັບ production, ການຄາດການໄລຍະກາງເຖິງຍາວ ຂັບເຄື່ອນ ROBOPRO ມີຊັບສິນພາຍໃຕ້ການບໍລິຫານຫຼາຍກວ່າ $250M.", meta: "ແພລດຟອມ AI / ການຄາດການ" },
        { title: "ການສົ່ງມອບວິສາຫະກິດ", desc: "ການສົ່ງມອບຊອບແວຄົບວົງຈອນສຳລັບທຸລະກິດທີ່ໃຊ້ຂໍ້ມູນເຂັ້ມຂຸ້ນ — ຕັ້ງແຕ່ໂຄງສ້າງ ແລະ ການຍ້າຍ cloud ຈົນເຖິງການດຳເນີນການທີ່ມີການບໍລິຫານ, ພ້ອມຄວາມປອດໄພ ແລະ ຄຸນນະພາບ.", meta: "ຊອບແວຕາມຄວາມຕ້ອງການ / Cloud" },
      ],
      note: "*ລວມຜົນງານຂອງບໍລິສັດບູພະການ.",
    },
    awards: {
      heading: "ຜົນງານທີ່ໄດ້ຮັບລາງວັນ",
      items: [
        { date: "2017.04.06", title: "ໂປຣແກຣມ MUFG Fintech Accelerator \"ລາງວັນຮອງຊະນະເລີດ\"", desc: "ຖືກເລືອກຈາກຜູ້ສະໝັກຫຼາຍຮ້ອຍຄົນ ແລະ ເປັນພາຄີກັບ kabu.com Securities — ພື້ນຖານຂອງປະສົບການສ້າງຊອບແວທີ່ສຳຄັນຕໍ່ພາລະກິດສຳລັບອຸດສາຫະກຳທີ່ມີການຄວບຄຸມເຂັ້ມງວດ." },
        { date: "2023.05.16", title: "AIM ໃນ production: ອັນດັບ 1 ໃນຜົນຕອບແທນສະສົມ & ອັດຕາສ່ວນ Sharpe (ລາຍງານ FSA)", desc: "ຜົນງານ production ຂອງແພລດຟອມ AIM ຖືກປະເມີນເປັນອັນດັບ 1 ໃນລາຍງານ KPI ຂອງອົງການບໍລິການທາງການເງິນ — ຫຼັກຖານວ່າວິສະວະກຳຂອງພວກເຮົາທົນທານພາຍໃຕ້ແຮງກົດດັນໃນໂລກຈິງ." },
        { date: "2025.03.17", title: "ລາງວັນໃຫຍ່ — Google Cloud Generative AI Innovation Awards ຄັ້ງທີ 3", desc: "ຕົວແທນຂໍ້ມູນ AI \"AlphaCrafter\" ຂອງພວກເຮົາຊະນະລາງວັນໃຫຍ່ ສຳລັບການສຳຫຼວດຄັງຂໍ້ມູນ ແລະ ສ້າງການວິເຄາະຈາກຄຳຖາມພາສາທຳມະຊາດ." },
        { date: "2025.06.05", title: "Nikkei Trendy \"ລາງວັນໃຫຍ່ Robo-Advisor 2025\"", desc: "ROBOPRO, ຂັບເຄື່ອນໂດຍແພລດຟອມ AIM ຂອງພວກເຮົາ, ບັນທຶກຜົນຕອບແທນສູງສຸດໃນບັນດາ robo-advisor ຫຼັກ ໃນການປຽບທຽບຂອງ Nikkei Trendy (ສະບັບເດືອນກໍລະກົດ 2025)." },
      ],
    },
    map: {
      address: "12 King Street, Westminster, London SW1Y 6QY, United Kingdom",
      viewMap: "ເບິ່ງແຜນທີ່ Google",
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
  newsPage: {
    heroTitle: "ຂ່າວສານ",
    viewMore: "ເບິ່ງເພີ່ມ",
    showLess: "ຫຍໍ້ລົງ",
    items: [
      { date: "2025.04.14", title: "SV Digital Software ຮ່ວມງານ Snowflake Summit 2025 — ສາທິດ AlphaCrafter ທີ່ບູດ" },
      { date: "2025.03.17", title: "AlphaCrafter ຊະນະລາງວັນໃຫຍ່ໃນ Google Cloud Generative AI Innovation Awards ຄັ້ງທີ 3" },
      { date: "2024.11.20", title: "AlphaCrafter ຖືກນຳສະເໜີໃນ AWS re:Invent 2024 — ສາທິດສົດຕົວແທນຂໍ້ມູນ AI ສ້າງສັນ" },
      { date: "2024.09.10", title: "ເປີດຕົວແພລດຟອມ AIM v2 — API ເຊື່ອມໂຍງໃໝ່, ຄວາມປອດໄພລະດັບວິສາຫະກິດ ແລະ ຄວາມສາມາດຄາດການທີ່ຂະຫຍາຍ" },
      { date: "2024.06.05", title: "SV Digital Software ເປີດບໍລິການທີ່ປຶກສາ AI ສ້າງສັນ ສຳລັບລູກຄ້າວິສາຫະກິດ" },
      { date: "2024.01.18", title: "ທີມວິສະວະກອນຂອງພວກເຮົາເພີ່ມຂຶ້ນເປັນສອງເທົ່າ ເມື່ອຮັບໂປຣເຈັກແພລດຟອມຂະໜາດໃຫຍ່ຂຶ້ນ" },
      { date: "2023.11.09", title: "ພະແນກວິສະວະກຳຂໍ້ມູນໄດ້ຮັບການຮັບຮອງເທິງ Snowflake, dbt ແລະ ຜູ້ໃຫ້ບໍລິການ cloud ຫຼັກ" },
      { date: "2023.08.22", title: "SV Digital Software ເປີດເຜີຍລະຫັດແຫຼ່ງ (open-source) ຊຸດເຄື່ອງມື pipeline ຂໍ້ມູນພາຍໃນ" },
      { date: "2023.05.16", title: "AIM ບັນລຸຈຸດສຳຄັນໃນ production — ນຳໃຊ້ໃນຂະໜາດໃຫຍ່ເພື່ອຂັບເຄື່ອນການຕັດສິນໃຈໂດຍອີງຂໍ້ມູນ" },
      { date: "2023.02.14", title: "SV Digital Software ກາຍເປັນຄູ່ຮ່ວມວິທີແກ້ໄຂ Snowflake" },
      { date: "2022.12.15", title: "ແພລດຟອມ AIM v1 ເຂົ້າສູ່ production" },
      { date: "2022.09.01", title: "SV Digital Software ເປີດສະຕູດິໂອ R&D ສະເພາະທຳອິດ" },
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
  },
};

export const dictionaries = { en, vi, lo };
