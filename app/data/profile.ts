export const personalData = {
  personal_email: "gaaf0809@gmail.com",
  work_email: "gid.achmad@gmail.com",
  linkedin: "https://www.linkedin.com/in/gid-achmad/",
  whatsapp: "62881023669910",
  github: "https://github.com/gidachmad",
};

export const about = {
  description_en: "Frontend Web Developer with 3 years of professional experience building and maintaining web applications using in-house Angular JavaScript Framework. I enjoy using TailwindCSS to create modern, responsive user interfaces. Adaptable developer with a fast learning curve and strong exposure to diverse project environmentn.",
  description_id: "Saya adalah seorang pengembang serba bisa dengan fokus utama pada Frontend Web Development. Dengan pengalaman profesional selama 3 tahun menggunakan framework JavaScript seperti Angular dan React.js, saya senang membangun antarmuka modern menggunakan Tailwind CSS. Saya percaya diri dengan kemampuan adaptasi dan kecepatan belajar saya.",
  description_jp: "私は主にフロントエンド・ウェブ開発に取り組むマルチスキルの開発者です。AngularやReact.jsといったJavaScriptフレームワークの使用経験があり、Tailwind CSSを使ったモダンなUI構築を楽しんでいます。プログラミングだけでなく、データサイエンスやフリーランスのスキルも学び続けています。私の夢は、インドネシアの田舎で穏やかに暮らしながら、海外の都市で働く人々に匹敵する収入を得ることです。",
};

const experiencePuti = {
  company: "Direktorat Pusat Teknologi dan Informasi Universitas Telkom",
  role: "Frontend Web Developer",
  month_start: 12,
  year_start: 2022,
  month_end: 3,
  year_end: 2025,
  description_en: "Frontend Web Developer at the Directorate of Information and Technology, Telkom University. The applications I developed and maintained are used internally by employees within the Telkom University organization.",
  description_id: "Frontend Web Developer di Direktorat Pusat Informasi dan Teknologi, Universitas Telkom. Aplikasi yang saya kembangkan dan pelihara digunakan secara internal oleh pegawai di lingkungan organisasi Universitas Telkom.",
  description_jp: "Telkom大学情報技術センター所属のフロントエンド・ウェブ開発者。私が開発したアプリケーションは、Telkom大学組織内の社員によって社内利用されています。",
  description_list: [
    "Developed and maintained multiple internal web applications using an in-house Angular framework",
    "Implemented reusable UI components and followed internal design and coding standards.",
    "Collaborated with backend developers and stakeholders to deliver features aligned with business requirements.",
    "Improved application usability and maintainability for internal employee usage.",
    "Performed bug fixing, feature enhancement, and routine maintenance across active projects.",
    "Worked in an internal enterprise environment supporting operational and informational systems.",
  ],
  project_list: [
    "Situ - Service Desk [Internal Service Desk Application]",
    "Dashboard Dikti [Internal Reporting Dashboard]",
    "One Data USU [Centralized Data Management System]",
    "Merpati Tel-U News [Internal News & Information Portal]",
  ],
  skill_tag: [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "REST API",
  ],
};

const experienceWorkTelkom = {
  company: "D3 Rekayasa Perangkat Lunak Aplikasi",
  role: "Assistant Lecturer",
  month_start: 6,
  year_start: 2022,
  month_end: 12,
  year_end: 2022,
  description_en: "Become Assistant Lecturer for Associate's degree, Computer Software Engineering Telkom University on following subject ",
  description_id: "Menjadi Asisten Dosen untuk Program D3 Rekayasa Perangkat Lunak Aplikasi di Universitas Telkom.",
  description_jp: "テルコム大学における応用ソフトウェア工学の短期大学課程 (D3) の助教となる",
  description_list: [
    "Develop and maintain Situ - Service desk",
  ],
  project_list: [
    "Database System 1 & 2",
    "Web Programming 1",
  ],
  skill_tag: [
    "NoSQL",
    "HTML",
    "JavaScript",
    "CSS",
  ],
};

// const experienceStudyD3Telkom = {
//   company: "D3 Rekayasa Perangkat Lunak Aplikasi",
//   gpa: 3.95,
//   max_gpa: 4.0,
//   month_start: 9,
//   year_start: 2020,
//   month_end: 8,
//   year_end: 2023,
//   description_en: "APERTI BUMN Scholarship recipient, Vocational education focused on practical software development fundamentals",
//   description_id: "Penerima Beasiswa APERTI BUMN",
//   description_jp: "APERTI BUMN奨学金受給者",
//   project_list: [],
//   description_list: [
//     "list1",
//     "list2",
//   ],
// };

const experienceStudyS1Telkom = {
  institution: "Telkom University",
  degree: "Bachelor of Informatics (S1)",
  thesis_title: "Optimizing Handwritten Aksara Sunda Optical Character Recognition using EfficientNet-based Model",
  desc: "Developed an end-to-end OCR system for handwritten Sundanese script at word level using EfficientNet-based models.",
  desc_list: [
    "Designed EfficientNet-based ensemble and CTC OCR models",
    "Built custom handwritten word-level dataset (220 classes)",
    "Implemented CNN-BiLSTM-CTC for segmentation-free OCR",
    "Evaluated using CER, WER, F1-score, and accuracy metrics",
  ],
  gpa: 3.88,
  max_gpa: 4.0,
  year: 2025,
};

// const experienceStudyS1Telkom = {
//   company: "S1 Informatics",
//   gpa: 3.88,
//   max_gpa: 4.0,
//   month_start: 9,
//   year_start: 2023,
//   month_end: 8,
//   year_end: 2025,
//   description_en: "Undergraduate academic experience focused on Optical Character Recognition (OCR). Conducted applied research on handwritten Sundanese script recognition using EfficientNet-based models. Worked on dataset preparation, model training, and evaluation with CER and WER metrics.",
//   description_id: "-",
//   description_jp: "-",
//   description_list: [
//   ],
//   project_list: [],
// };

export const workExperience = [
  experiencePuti,
  // experienceWorkTelkom,
];

export const studyExperience = [
  experienceStudyS1Telkom,
  // experienceStudyD3Telkom,
];
