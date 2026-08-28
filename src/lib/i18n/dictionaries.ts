// Central i18n dictionary. `en` is the source of truth for shape; `vi` must match.
// Add a new string here (both `en` and `vi`) and reference it via `useLocale().dict`.
// TODO(rebrand): AIM = "SV Digital Software Investment Management" — the acronym no longer matches the brand name.

export const en = {
  header: {
    nav: {
      solution: "SOLUTION",
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
  },
  marquee: {
    text: "Code never lies, comments sometimes do.",
  },
  footer: {
    groupCompanies: "Group Companies",
    nav: {
      solution: "SOLUTION",
      aim: "AIM",
    },
    contact: "CONTACT",
    privacyPolicy: "Privacy Policy",
    sitePolicy: "Site Policy",
    securityPolicy: "Security Policy",
    emailDisclaimer: "SHARING CONFIDENTIAL INFORMATION WITHIN THE GROUP",
    copyright: "©SV Digital Software Co. Ltd. all rights reserved.",
    companyInfo:
      "SV Digital Software Co., Ltd.\nFinancial Instruments Business Operator\n(Investment Advisory and Agency Business)\nRegistration Number 3453\nMember Association: Japan Investment Advisers Association",
    backToTop: "Back to top",
  },
  hero: {
    titleLine1: "Beyond Limits in",
    titleLine2: "Finance with Data Science",
    subtitle:
      "SV Digital Software is a technology company that develops solutions for investment management, research, analysis and system integration for the financial industry. We combine cutting-edge technology with financial expertise to provide solutions that meet our customers' high standards.",
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
      desc: "As a Snowflake Solutions Partner, SV Digital Software supports clients from environment setup through to data analytics and utilization. We have also developed \"AlphaCrafter\" — a generative AI data agent operating directly within data warehouses. Utilizing this technology, SBI Securities' product won the Grand Prize at the Japan Financial Innovation Award 2024.",
      learnMore: "Learn more",
    },
    aim: {
      title: "AIM investment model",
      subtitle: "(SV Digital Software Investment Management)",
      desc: "SV Digital Software provides asset management solutions that meet our clients' needs, using cutting-edge research and medium to long term market forecasts that utilize our independently developed AI algorithms. AIM is used in the AI investment \"ROBOPRO\", which was developed in collaboration with FOLIO and has over ¥40B in AUM.",
      learnMore: "Learn more",
    },
  },
  companyTeaser: {
    heading: "COMPANY",
    desc: "SV Digital Software is a group company of FOLIO Holdings. As a member of the FOLIO Group, which aims to create new financial solutions and realize a prosperous future, we combine our AI and system development technologies with our financial expertise to provide cutting-edge technology that meets the needs of our customers.",
    readMore: "Read more",
  },
  recruitTeaser: {
    heading: "RECRUIT",
    desc: "SV Digital Software values five principles: \"Strive for Excellence in Quality\", \"Think and Act Bold\", \"Stronger Together\", \"Integrity and Trust\" and \"Embrace Change\". We look forward to working with future colleagues who share these principles and can help us provide new value that goes Beyond Limits.",
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
      desc: "As a Snowflake Solutions Partner, SV Digital Software supports clients from environment setup through to data analytics and utilization. We have also developed \"AlphaCrafter\" — a generative AI data agent operating directly within data warehouses. Utilizing this technology, SBI Securities' product won the Grand Prize at the Japan Financial Innovation Award 2024.",
      contactUs: "Contact us",
    },
    aim: {
      title: "AIM investment model",
      subtitle: "(SV Digital Software Investment Management)",
      desc: "SV Digital Software provides asset management solutions that meet our clients' needs, using cutting-edge research and medium to long term market forecasts that utilize our independently developed AI algorithms. AIM is used in the AI investment \"ROBOPRO\", which was developed in collaboration with FOLIO and has over ¥40B in AUM.",
      learnMore: "Learn more",
    },
    cta: {
      title: "Interested in our solutions?",
      desc: "For inquiries about our solutions, partnerships, or anything else, please reach out via our contact form.",
      contactUs: "Contact Us",
    },
  },
  aimPage: {
    heroTitle: "AIM",
    heroSubtitle: "SV Digital Software Investment Management",
    intro: {
      title: "AIM investment model",
      para1: "SV Digital Software provides asset management solutions that meet our clients' needs, using cutting-edge research and medium to long term market forecasts that utilize our independently developed AI algorithms.",
      para2: "AIM (SV Digital Software Investment Management) is our core quantitative model — it analyses a wide range of market data to generate disciplined, portfolio construction signals. AIM is used in the AI investment \"ROBOPRO\", which was developed in collaboration with FOLIO and has over ¥40B in AUM.",
      bullets: [
        "Data-driven market forecasting with proprietary AI",
        "Medium to long term horizon — avoids noise-driven churn",
        "Risk-aware portfolio construction",
        "Proven track record inside ROBOPRO (>¥40B AUM)",
      ],
    },
    stats: [
      { value: "¥40B+", label: "AUM via ROBOPRO" },
      { value: "No. 1", label: "FSA ranking — cumulative return & Sharpe ratio" },
      { value: "Since 2022", label: "Operating AIM in production" },
    ],
    howItWorks: {
      title: "How AIM works",
      cards: [
        { step: "01", title: "Data ingestion", desc: "Collects and cleanses market, macro, and alternative data at scale into a unified warehouse." },
        { step: "02", title: "AI forecasting", desc: "Our proprietary algorithms produce medium to long term forecasts and regime signals." },
        { step: "03", title: "Portfolio delivery", desc: "Forecasts are translated into risk-aware allocations, delivered as signals or as a managed product." },
      ],
    },
    robopro: {
      label: "PRODUCT",
      title: "ROBOPRO — AI investment powered by AIM",
      desc: "Jointly developed with FOLIO. Evaluated by the Financial Services Agency as No. 1 in cumulative return and Sharpe ratio among domestic asset managers.",
      learnMore: "Learn about ROBOPRO",
    },
    cta: {
      title: "Explore AIM for your needs",
      desc: "Whether you are an institutional investor, asset manager, or platform partner — let's discuss how AIM can fit your mandate.",
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
        { label: "Head Office Location", value: "1-6-4 Hirakawacho, Chiyoda-ku, Tokyo 102-0093, H1O Hirakawacho 703" },
        { label: "Capital", value: "JPY 10,000,000 (as of March 2026)" },
        { label: "Representative Director, CEO & CAIO", value: "Tomoya Kitayama" },
        { label: "Representative Director, CAO", value: "Maiko Mizuno" },
        { label: "Director", value: "Morifumi Yotsumoto" },
        { label: "Director", value: "Kazuyuki Ishikawa" },
        { label: "Director", value: "Shinichiro Kai" },
        { label: "Standing Corporate Auditor", value: "Kazuhiko Osone" },
        { label: "Executive Officer, CTO", value: "Andreas Alexelis" },
      ],
    },
    history: {
      heading: "Company History",
      items: [
        { year: "2022.07", text: "SV Digital Software Co., Ltd. established." },
        { year: "2022.10", text: "Registered as Financial Instruments Business Operator (Investment Advisory and Agency Business)." },
        { year: "2023.05", text: "ROBOPRO evaluated as No. 1 in cumulative return and Sharpe ratio by the Financial Services Agency." },
        { year: "2024.11", text: "AlphaCrafter featured at AWS re:Invent 2024." },
        { year: "2025.03", text: "AlphaCrafter wins Grand Prize at Google Cloud Generative AI Innovation Awards." },
        { year: "2025.06", text: "ROBOPRO wins Nikkei Trendy \"2025 Robo-Advisor Grand Prize\"." },
      ],
    },
    achievements: {
      heading: "Achievements with Business Partners",
      items: [
        { title: "SBI Securities", desc: "Snowflake data platform & AlphaCrafter introduction — Japan Financial Innovation Award 2024 Grand Prize.", meta: "Financial Services / Data Platform" },
        { title: "FOLIO", desc: "Joint development of ROBOPRO — AI-driven asset management with ¥40B+ AUM.", meta: "Asset Management / AI" },
        { title: "MUFG", desc: "Fintech Accelerator Program Runner-up Prize (2017) — AlpacaSearch for kabu.com.", meta: "Fintech / Search" },
      ],
      note: "*Includes the achievements of our predecessor company.",
    },
    awards: {
      heading: "Award-winning track record",
      items: [
        { date: "2017.04.06", title: "MUFG Fintech Accelerator Program \"Runner-up Prize\"", desc: "kabu.com Securities announced a partnership with us. We participated in the MUFG Fintech Accelerator Program and won the Runner-up Prize. Later launched AlpacaSearch for kabu.com." },
        { date: "2023.05.16", title: "Financial Services Agency: \"Robopro is No. 1 in Cumulative Return and Sharpe Ratio\"", desc: "In the report on KPIs showing investment performance of domestic asset management companies, ROBOPRO was evaluated as No. 1." },
        { date: "2025.03.17", title: "Grand Prize — 3rd Google Cloud Generative AI Innovation Awards", desc: "Our AI data agent \"AlphaCrafter\" won the Grand Prize, exploring data warehouses and generating analyses." },
        { date: "2025.06.05", title: "Nikkei Trendy \"2025 Robo-Advisor Grand Prize\"", desc: "ROBOPRO recorded the highest returns among major Robo-Advisors in Nikkei Trendy's comparison (July 2025 issue)." },
      ],
    },
    map: {
      address: "1-6-4 Hirakawacho, Chiyoda-ku, Tokyo 102-0093, H1O Hirakawacho 703",
      viewMap: "View Google Map",
    },
    groupCompanies: {
      heading: "GROUP COMPANIES",
      visitSite: "Visit site",
    },
    contact: {
      heading: "CONTACT",
      desc: "For inquiries about our solutions, partnerships, or anything else, please reach out via our contact form.",
      contactUs: "Contact Us",
    },
  },
  recruitPage: {
    heroTitle: "RECRUIT",
    intro: "SV Digital Software values five principles: \"Strive for Excellence in Quality\", \"Think and Act Bold\", \"Stronger Together\", \"Integrity and Trust\" and \"Embrace Change\". We look forward to working with future colleagues who share these principles and can help us provide new value that goes Beyond Limits In Finance.",
    career: {
      heading: "CAREER OPPORTUNITIES",
      desc: "Complete list of our current job openings can be viewed from the link below. We look forward to applications from individuals who share SV Digital Software's vision and enthusiasm for our services.",
      viewPositions: "View Our Open Positions",
    },
    jobs: [
      { title: "Data Engineer — Snowflake / dbt", location: "Tokyo / Remote", type: "Full-time" },
      { title: "AI Engineer — LLMs & Data Agents", location: "Tokyo / Remote", type: "Full-time" },
      { title: "Quant Researcher — AIM Models", location: "Tokyo", type: "Full-time" },
      { title: "Product Manager — Financial Data Platform", location: "Tokyo", type: "Full-time" },
    ],
  },
  newsPage: {
    heroTitle: "NEWS",
    viewMore: "View More",
    items: [
      { date: "2025.04.14", title: "SV Digital Software participates in Snowflake Summit 2025 — Booth demo of AlphaCrafter" },
      { date: "2025.03.17", title: "AlphaCrafter wins Grand Prize at the 3rd Google Cloud Generative AI Innovation Awards" },
      { date: "2024.11.20", title: "AlphaCrafter featured at AWS re:Invent 2024 — live demo of generative AI data agent" },
      { date: "2024.09.10", title: "SBI Securities' AlphaCrafter-powered product wins Japan Financial Innovation Award 2024 Grand Prize" },
      { date: "2023.05.16", title: "Financial Services Agency evaluates ROBOPRO as No. 1 in cumulative return and Sharpe ratio" },
      { date: "2023.02.14", title: "SV Digital Software becomes Snowflake Solutions Partner" },
    ],
  },
};

export type Dictionary = typeof en;

export const vi: Dictionary = {
  header: {
    nav: {
      solution: "GIẢI PHÁP",
      aim: "AIM",
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
  },
  marquee: {
    text: "Code không bao giờ nói dối, comment đôi khi thì có.",
  },
  footer: {
    groupCompanies: "Công ty thành viên",
    nav: {
      solution: "GIẢI PHÁP",
      aim: "AIM",
    },
    contact: "LIÊN HỆ",
    privacyPolicy: "Chính sách bảo mật",
    sitePolicy: "Chính sách trang web",
    securityPolicy: "Chính sách bảo mật thông tin",
    emailDisclaimer: "CHIA SẺ THÔNG TIN BẢO MẬT TRONG TẬP ĐOÀN",
    copyright: "©SV Digital Software Co. Ltd. Bảo lưu mọi quyền.",
    companyInfo:
      "SV Digital Software Co., Ltd.\nNhà điều hành kinh doanh công cụ tài chính\n(Kinh doanh tư vấn và đại lý đầu tư)\nSố đăng ký 3453\nHiệp hội thành viên: Hiệp hội Cố vấn Đầu tư Nhật Bản",
    backToTop: "Về đầu trang",
  },
  hero: {
    titleLine1: "Vượt Mọi Giới Hạn",
    titleLine2: "Tài Chính Bằng Khoa Học Dữ Liệu",
    subtitle:
      "SV Digital Software là công ty công nghệ phát triển các giải pháp về quản lý đầu tư, nghiên cứu, phân tích và tích hợp hệ thống cho ngành tài chính. Chúng tôi kết hợp công nghệ tiên tiến với chuyên môn tài chính để cung cấp các giải pháp đáp ứng tiêu chuẩn cao của khách hàng.",
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
      desc: "Là Đối tác Giải pháp Snowflake, SV Digital Software hỗ trợ khách hàng từ thiết lập môi trường đến phân tích và khai thác dữ liệu. Chúng tôi cũng đã phát triển \"AlphaCrafter\" — tác nhân dữ liệu AI tạo sinh hoạt động trực tiếp trong kho dữ liệu. Nhờ công nghệ này, sản phẩm của SBI Securities đã giành Giải Đặc biệt tại Japan Financial Innovation Award 2024.",
      learnMore: "Tìm hiểu thêm",
    },
    aim: {
      title: "Mô hình đầu tư AIM",
      subtitle: "(Quản lý Đầu tư SV Digital Software)",
      desc: "SV Digital Software cung cấp các giải pháp quản lý tài sản đáp ứng nhu cầu của khách hàng, sử dụng nghiên cứu tiên tiến và dự báo thị trường trung - dài hạn dựa trên các thuật toán AI do chúng tôi tự phát triển. AIM được sử dụng trong sản phẩm đầu tư AI \"ROBOPRO\", phát triển cùng FOLIO với tổng tài sản quản lý hơn 40 tỷ yên.",
      learnMore: "Tìm hiểu thêm",
    },
  },
  companyTeaser: {
    heading: "CÔNG TY",
    desc: "SV Digital Software là công ty thành viên của FOLIO Holdings. Là một phần của Tập đoàn FOLIO, hướng tới việc tạo ra các giải pháp tài chính mới và hiện thực hóa tương lai thịnh vượng, chúng tôi kết hợp công nghệ AI và phát triển hệ thống với chuyên môn tài chính để cung cấp công nghệ tiên tiến đáp ứng nhu cầu của khách hàng.",
    readMore: "Đọc thêm",
  },
  recruitTeaser: {
    heading: "TUYỂN DỤNG",
    desc: "SV Digital Software coi trọng năm nguyên tắc: \"Theo đuổi sự xuất sắc về chất lượng\", \"Dám nghĩ dám làm\", \"Mạnh mẽ hơn khi cùng nhau\", \"Chính trực và tin cậy\" và \"Ôm lấy sự thay đổi\". Chúng tôi mong được đồng hành cùng những đồng nghiệp tương lai chia sẻ các nguyên tắc này và cùng tạo ra giá trị mới vượt mọi giới hạn.",
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
      desc: "Là Đối tác Giải pháp Snowflake, SV Digital Software hỗ trợ khách hàng từ thiết lập môi trường đến phân tích và khai thác dữ liệu. Chúng tôi cũng đã phát triển \"AlphaCrafter\" — tác nhân dữ liệu AI tạo sinh hoạt động trực tiếp trong kho dữ liệu. Nhờ công nghệ này, sản phẩm của SBI Securities đã giành Giải Đặc biệt tại Japan Financial Innovation Award 2024.",
      contactUs: "Liên hệ",
    },
    aim: {
      title: "Mô hình đầu tư AIM",
      subtitle: "(Quản lý Đầu tư SV Digital Software)",
      desc: "SV Digital Software cung cấp các giải pháp quản lý tài sản đáp ứng nhu cầu của khách hàng, sử dụng nghiên cứu tiên tiến và dự báo thị trường trung - dài hạn dựa trên các thuật toán AI do chúng tôi tự phát triển. AIM được sử dụng trong sản phẩm đầu tư AI \"ROBOPRO\", phát triển cùng FOLIO với tổng tài sản quản lý hơn 40 tỷ yên.",
      learnMore: "Tìm hiểu thêm",
    },
    cta: {
      title: "Quan tâm đến giải pháp của chúng tôi?",
      desc: "Để được tư vấn về giải pháp, hợp tác hoặc bất kỳ điều gì khác, vui lòng liên hệ qua biểu mẫu của chúng tôi.",
      contactUs: "Liên hệ",
    },
  },
  aimPage: {
    heroTitle: "AIM",
    heroSubtitle: "Quản lý Đầu tư SV Digital Software",
    intro: {
      title: "Mô hình đầu tư AIM",
      para1: "SV Digital Software cung cấp các giải pháp quản lý tài sản đáp ứng nhu cầu của khách hàng, sử dụng nghiên cứu tiên tiến và dự báo thị trường trung - dài hạn dựa trên các thuật toán AI do chúng tôi tự phát triển.",
      para2: "AIM (Quản lý Đầu tư SV Digital Software) là mô hình định lượng cốt lõi của chúng tôi — phân tích nhiều loại dữ liệu thị trường để tạo ra các tín hiệu xây dựng danh mục có kỷ luật. AIM được sử dụng trong sản phẩm đầu tư AI \"ROBOPRO\", phát triển cùng FOLIO với tổng tài sản quản lý hơn 40 tỷ yên.",
      bullets: [
        "Dự báo thị trường dựa trên dữ liệu với AI độc quyền",
        "Tầm nhìn trung - dài hạn — tránh biến động do nhiễu",
        "Xây dựng danh mục có ý thức về rủi ro",
        "Thành tích đã được chứng minh trong ROBOPRO (>40 tỷ yên AUM)",
      ],
    },
    stats: [
      { value: "40 tỷ yên+", label: "AUM qua ROBOPRO" },
      { value: "Số 1", label: "Xếp hạng FSA — lợi nhuận lũy kế & tỷ lệ Sharpe" },
      { value: "Từ 2022", label: "Vận hành AIM trong thực tế" },
    ],
    howItWorks: {
      title: "Cách AIM hoạt động",
      cards: [
        { step: "01", title: "Thu thập dữ liệu", desc: "Thu thập và làm sạch dữ liệu thị trường, vĩ mô và dữ liệu thay thế ở quy mô lớn vào một kho dữ liệu thống nhất." },
        { step: "02", title: "Dự báo bằng AI", desc: "Các thuật toán độc quyền của chúng tôi tạo ra dự báo trung - dài hạn và tín hiệu về trạng thái thị trường." },
        { step: "03", title: "Triển khai danh mục", desc: "Các dự báo được chuyển thành phân bổ có ý thức về rủi ro, cung cấp dưới dạng tín hiệu hoặc sản phẩm quản lý." },
      ],
    },
    robopro: {
      label: "SẢN PHẨM",
      title: "ROBOPRO — Đầu tư AI vận hành bởi AIM",
      desc: "Đồng phát triển cùng FOLIO. Được Cơ quan Dịch vụ Tài chính đánh giá là Số 1 về lợi nhuận lũy kế và tỷ lệ Sharpe trong số các nhà quản lý tài sản trong nước.",
      learnMore: "Tìm hiểu về ROBOPRO",
    },
    cta: {
      title: "Khám phá AIM cho nhu cầu của bạn",
      desc: "Dù bạn là nhà đầu tư tổ chức, nhà quản lý tài sản hay đối tác nền tảng — hãy cùng thảo luận cách AIM phù hợp với mục tiêu của bạn.",
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
        { label: "Địa chỉ trụ sở chính", value: "1-6-4 Hirakawacho, Chiyoda-ku, Tokyo 102-0093, H1O Hirakawacho 703" },
        { label: "Vốn điều lệ", value: "10.000.000 yên (tính đến tháng 3/2026)" },
        { label: "Giám đốc đại diện, CEO & CAIO", value: "Tomoya Kitayama" },
        { label: "Giám đốc đại diện, CAO", value: "Maiko Mizuno" },
        { label: "Giám đốc", value: "Morifumi Yotsumoto" },
        { label: "Giám đốc", value: "Kazuyuki Ishikawa" },
        { label: "Giám đốc", value: "Shinichiro Kai" },
        { label: "Kiểm toán viên thường trực", value: "Kazuhiko Osone" },
        { label: "Giám đốc điều hành, CTO", value: "Andreas Alexelis" },
      ],
    },
    history: {
      heading: "Lịch sử công ty",
      items: [
        { year: "2022.07", text: "Thành lập SV Digital Software Co., Ltd." },
        { year: "2022.10", text: "Đăng ký Nhà điều hành kinh doanh công cụ tài chính (Kinh doanh tư vấn và đại lý đầu tư)." },
        { year: "2023.05", text: "ROBOPRO được Cơ quan Dịch vụ Tài chính đánh giá Số 1 về lợi nhuận lũy kế và tỷ lệ Sharpe." },
        { year: "2024.11", text: "AlphaCrafter góp mặt tại AWS re:Invent 2024." },
        { year: "2025.03", text: "AlphaCrafter giành Giải Đặc biệt tại Google Cloud Generative AI Innovation Awards." },
        { year: "2025.06", text: "ROBOPRO giành \"Giải Robo-Advisor 2025\" của Nikkei Trendy." },
      ],
    },
    achievements: {
      heading: "Thành tựu cùng đối tác kinh doanh",
      items: [
        { title: "SBI Securities", desc: "Nền tảng dữ liệu Snowflake & giới thiệu AlphaCrafter — Giải Đặc biệt Japan Financial Innovation Award 2024.", meta: "Dịch vụ tài chính / Nền tảng dữ liệu" },
        { title: "FOLIO", desc: "Đồng phát triển ROBOPRO — quản lý tài sản bằng AI với hơn 40 tỷ yên AUM.", meta: "Quản lý tài sản / AI" },
        { title: "MUFG", desc: "Giải Á quân Chương trình Tăng tốc Fintech (2017) — AlpacaSearch cho kabu.com.", meta: "Fintech / Tìm kiếm" },
      ],
      note: "*Bao gồm thành tựu của công ty tiền thân.",
    },
    awards: {
      heading: "Thành tích giải thưởng",
      items: [
        { date: "2017.04.06", title: "Chương trình Tăng tốc Fintech MUFG \"Giải Á quân\"", desc: "kabu.com Securities công bố hợp tác với chúng tôi. Chúng tôi tham gia Chương trình Tăng tốc Fintech MUFG và giành Giải Á quân. Sau đó ra mắt AlpacaSearch cho kabu.com." },
        { date: "2023.05.16", title: "Cơ quan Dịch vụ Tài chính: \"Robopro Số 1 về lợi nhuận lũy kế và tỷ lệ Sharpe\"", desc: "Trong báo cáo về KPI thể hiện hiệu quả đầu tư của các công ty quản lý tài sản trong nước, ROBOPRO được đánh giá là Số 1." },
        { date: "2025.03.17", title: "Giải Đặc biệt — Google Cloud Generative AI Innovation Awards lần 3", desc: "Tác nhân dữ liệu AI \"AlphaCrafter\" của chúng tôi giành Giải Đặc biệt, khám phá kho dữ liệu và tạo ra các phân tích." },
        { date: "2025.06.05", title: "Nikkei Trendy \"Giải Robo-Advisor 2025\"", desc: "ROBOPRO ghi nhận lợi nhuận cao nhất trong số các Robo-Advisor lớn theo so sánh của Nikkei Trendy (ấn bản tháng 7/2025)." },
      ],
    },
    map: {
      address: "1-6-4 Hirakawacho, Chiyoda-ku, Tokyo 102-0093, H1O Hirakawacho 703",
      viewMap: "Xem Google Map",
    },
    groupCompanies: {
      heading: "CÔNG TY THÀNH VIÊN",
      visitSite: "Truy cập trang",
    },
    contact: {
      heading: "LIÊN HỆ",
      desc: "Để được tư vấn về giải pháp, hợp tác hoặc bất kỳ điều gì khác, vui lòng liên hệ qua biểu mẫu của chúng tôi.",
      contactUs: "Liên hệ",
    },
  },
  recruitPage: {
    heroTitle: "TUYỂN DỤNG",
    intro: "SV Digital Software coi trọng năm nguyên tắc: \"Theo đuổi sự xuất sắc về chất lượng\", \"Dám nghĩ dám làm\", \"Mạnh mẽ hơn khi cùng nhau\", \"Chính trực và tin cậy\" và \"Ôm lấy sự thay đổi\". Chúng tôi mong được đồng hành cùng những đồng nghiệp tương lai chia sẻ các nguyên tắc này và cùng tạo ra giá trị mới vượt mọi giới hạn trong tài chính.",
    career: {
      heading: "CƠ HỘI NGHỀ NGHIỆP",
      desc: "Danh sách đầy đủ các vị trí tuyển dụng hiện tại có thể xem qua liên kết bên dưới. Chúng tôi mong nhận được hồ sơ từ những cá nhân chia sẻ tầm nhìn và nhiệt huyết của SV Digital Software với các dịch vụ của chúng tôi.",
      viewPositions: "Xem vị trí tuyển dụng",
    },
    jobs: [
      { title: "Kỹ sư Dữ liệu — Snowflake / dbt", location: "Tokyo / Từ xa", type: "Toàn thời gian" },
      { title: "Kỹ sư AI — LLM & Tác nhân Dữ liệu", location: "Tokyo / Từ xa", type: "Toàn thời gian" },
      { title: "Nhà nghiên cứu Định lượng — Mô hình AIM", location: "Tokyo", type: "Toàn thời gian" },
      { title: "Quản lý Sản phẩm — Nền tảng Dữ liệu Tài chính", location: "Tokyo", type: "Toàn thời gian" },
    ],
  },
  newsPage: {
    heroTitle: "TIN TỨC",
    viewMore: "Xem thêm",
    items: [
      { date: "2025.04.14", title: "SV Digital Software tham gia Snowflake Summit 2025 — Demo AlphaCrafter tại gian hàng" },
      { date: "2025.03.17", title: "AlphaCrafter giành Giải Đặc biệt tại Google Cloud Generative AI Innovation Awards lần 3" },
      { date: "2024.11.20", title: "AlphaCrafter góp mặt tại AWS re:Invent 2024 — demo trực tiếp tác nhân dữ liệu AI tạo sinh" },
      { date: "2024.09.10", title: "Sản phẩm vận hành bởi AlphaCrafter của SBI Securities giành Giải Đặc biệt Japan Financial Innovation Award 2024" },
      { date: "2023.05.16", title: "Cơ quan Dịch vụ Tài chính đánh giá ROBOPRO Số 1 về lợi nhuận lũy kế và tỷ lệ Sharpe" },
      { date: "2023.02.14", title: "SV Digital Software trở thành Đối tác Giải pháp Snowflake" },
    ],
  },
};

export const dictionaries = { en, vi };
