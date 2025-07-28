import cbanner from "../../assets/course-banner.jpg";
import BioInf from "../../assets/bioInformatics.jpg";
import Research from "../../assets/Research.png";
import DataAnalysis from "../../assets/Analysis.jpg";
import AiandML from "../../assets/Ai.jpg";
import Scientific from "../../assets/Science.jpg";

export const landingPage = {
  headline: "Your Research, Our Expertise, Write, Analyze, Publish with Confidence",
  subheadline:
    "Professional support in thesis and research paper writing, editing, proofreading, data analysis, scientific consultancy, and advanced training.",
  vision:
    "At SciScribe, we envision a world where scientific discovery thrives through integrity, clarity, and collaboration. We aim to strengthen global research efforts by making expert scientific communication, data insight, and consultancy universally accessible and ethically grounded.",
  mission: [
    {
      title: "Clear & Impactful Writing",
      description:
        "Professional editing, proofreading, and manuscript polishing enhance readability and preserve the authenticity of your research.",
    },
    {
      title: "Data Analysis & Insight",
      description:
        "Rigorous statistical and bioinformatics analysis using trusted tools, paired with clear interpretation to help you draw meaningful conclusions.",
    },
    {
      title: "Scientific Consultancy",
      description:
        "Expert guidance on methodology, study design, and publication strategy—all delivered with transparency and responsibility.",
    },
    {
      title: "Ethical Training & Capacity Building",
      description:
        "Practical workshops and personalized mentorship in scientific writing, research design, and bioinformatics, designed to empower you with skills and confidence.",
    },
  ],
  commitments: [
    "Upholding Academic Integrity",
    "Fostering Inclusivity",
    "Personalizing Support",
    "Delivering Excellence",
  ],
  bodyContent:
    "Welcome to SciScribe, where scientific ideas are nurtured, refined, and transformed into impactful research. Whether you're a graduate student navigating your thesis, a researcher preparing a manuscript, or a professional seeking advanced training in bioinformatics and research methodology, our team is here to support your journey.",
  whyChooseUs: [
    "Expertise in multiple scientific disciplines",
    "Transparent, ethical, and confidential practices",
    "Personalized support for every stage of research",
    "Hands-on training to build real-world skills",
  ],
  callToAction: ["Get Started", "Explore Our Services"],
};

export const aboutUsPage = {
  story:
    "SciScribe was born out of a need, one that many researchers face. Amidst the pressure to publish, analyze, and write with precision, there often isn’t enough support for early-career scientists. We stepped in to bridge that gap.",
  mission:
    "To elevate scientific communication by offering reliable, ethical, and personalized support services to researchers worldwide.",
  values: [
    "Accuracy and Clarity",
    "Academic Integrity",
    "Accessibility and Inclusion",
    "Lifelong Learning",
  ],
  teamDescription:
    "A diverse team of PhDs, data analysts, editors, and educators, all committed to helping you succeed.",
};

export const servicesPage = {
  services: [
    {
      route: "/services/editing-proofreading",
      title: "Editing & Proofreading",
      description: "Perfect your manuscript with clarity and polish.",
      bannerText: "Messy drafts, looming submissions – we’ll help you shine.",
      image1: "assets/services/editing1.png",
      image2: "assets/services/editing2.png",
      middleImg: "assets/services/lab.png",
      steps: [
        "Step-by-step thesis help",
        "Tailored for students",
        "Plagiarism-safe writing",
        "Hands-on training",
        "Made for tight schedules"
      ]
    },
    {
      route: "/services/scientific-consultancy",
      title: "Scientific Consultancy",
      description: "Expert guidance for designing and executing research.",
      bannerText: "Let’s bring clarity and confidence to your study design.",
      image1: "assets/services/consult1.png",
      image2: "assets/services/consult2.png",
      middleImg: "assets/services/lab.png",
      steps: [
        "One-on-one expert sessions",
        "Tailored methodology support",
        "Clear publication strategy",
        "Remote or on-site consultancy",
        "Institutional collaboration options"
      ]
    },
    {
      route: "/services/data-analysis",
      title: "Data Analysis",
      description: "Statistical and bioinformatics support made easy.",
      bannerText: "Confused by stats? We simplify data and drive insight.",
      image1: "assets/services/data1.png",
      image2: "assets/services/data2.png",
      middleImg: "assets/services/lab.png",
      steps: [
        "R, SPSS, Python support",
        "Graphical and statistical summaries",
        "Interpreted reports",
        "Bioinformatics pipelines",
        "Training + analysis combos"
      ]
    },
    {
      route: "/services/ai-ml-training",
      title: "AI & Machine Learning Training",
      description: "Hands-on ML workshops tailored for researchers.",
      bannerText: "Future-proof your skills with ML for science.",
      image1: "assets/services/ai1.png",
      image2: "assets/services/ai2.png",
      middleImg: "assets/services/lab.png",
      steps: [
        "Beginner to advanced content",
        "Real biological datasets",
        "Python & R workflows",
        "Interactive, practical learning",
        "Custom modules for teams"
      ]
    },
    {
      route: "/services/scientific-writing",
      title: "Scientific Writing & Communication",
      description: "Clarity, structure, and confidence in every sentence.",
      bannerText: "Write for impact. Publish with pride.",
      image1: "assets/services/write1.png",
      image2: "assets/services/write2.png",
      middleImg: "assets/services/lab.png",
      steps: [
        "Scientific writing crash course",
        "Reviewer-focused editing",
        "Writing labs & assignments",
        "Publication preparation",
        "Email + abstract mastery"
      ]
    },
    {
      route: "/services/in-person-seminars",
      title: "In-Person Seminars & Institutional Trainings",
      description: "Custom on-site training for universities & groups.",
      bannerText: "We come to you. Learn together, grow stronger.",
      image1: "assets/services/seminar1.png",
      image2: "assets/services/seminar2.png",
      middleImg: "assets/services/lab.png",
      steps: [
        "Group workshops",
        "Interactive content",
        "Flexible scheduling",
        "Custom topics per request",
        "Follow-up support & materials"
      ]
    }
  ]
};


export const coursesPage = {
  intro: {
    heading: "Learn with SciScribe: Science Made Simple",
    description:
      "We offer practical, hands-on courses designed for students, researchers, and early-career professionals looking to build skills in:",
      image: cbanner,
  },
  courses: [
    {
      title: "Bioinformatics Foundations",
      slug: "bioinformatics",
      description:
        "Understand key databases, tools, and workflows used in genomics, transcriptomics, and molecular biology research. Designed for beginners and life science researchers transitioning into computational biology.",
      image: BioInf,
    },
    {
      title: "Research Methodology Bootcamp",
      slug: "research-methods",
      description:
        "Master the essentials of study design, sampling, data collection, and literature review techniques. Ideal for thesis planning and academic research proposals.",
      image: Research,
    },
    {
      title: "Scientific Writing for Publication",
      slug: "scientific-writing",
      description:
        "Learn to craft well-structured manuscripts, write compelling abstracts, and handle peer review feedback. Suited for researchers preparing papers for submission.",
      image: Scientific,
    },
    {
      title: "Data Analysis with R and SPSS",
      slug: "data-analysis",
      description:
        "Gain hands-on experience in analyzing biological or social science data. Learn practical steps in data cleaning, visualization, and statistical testing using R and SPSS.",
      image: DataAnalysis,
    },
    {
      title: "Introduction to AI & ML for Researchers",
      slug: "ai-ml",
      description:
        "Explore the basics of artificial intelligence and machine learning, with a focus on how these technologies are transforming biological and health data analysis. No prior coding required.",
      image: AiandML,
    },
  ],
  flexibleLearning: [
    "Self-paced video courses",
    "Live sessions with instructors",
    "Certification upon completion",
    "In-person group trainings for institutions available on request",
  ],
};

export const pricingPage = {
  intro:
    "We believe quality academic support should be accessible to everyone. Our pricing is designed to suit different needs, from one-time edits to ongoing mentoring.",
  pricing: {
    editing: [
      { service: "Proofreading", price: "From $30 per document" },
      { service: "Manuscript Editing", price: "From $50 per paper" },
      { service: "Formatting", price: "From $25 per document" },
    ],
    analysis: [
      { service: "Basic Analysis", price: "From $100 per dataset" },
      { service: "Advanced Statistical/Bioinformatics Analysis", price: "From $150" },
    ],
    consultancy: [
      { service: "Project Consultation", price: "From $60 per hour" },
      { service: "Methodology Design and Review", price: "Custom pricing" },
      { service: "On-site Seminars/Workshops", price: "Contact us for institutional rates" },
    ],
    training: [
      { service: "Self-paced Courses", price: "From $40" },
      { service: "Live Workshops", price: "From $80" },
      { service: "AI & ML Training", price: "Starting at $90" },
      { service: "In-person Training Packages", price: "Custom quotes available" },
    ],
  },
  offers: [
    "Bundle offers for editing + training",
    "Discounts for students from low-income countries",
  ],
  callToAction:
    "Let’s bring your research to life — ethically, professionally, and confidently.",
};

export const coreValues = [
  {
    value: "Integrity",
    meaning: "Ethical standards in editing, analysis, and advice",
  },
  {
    value: "Clarity",
    meaning: "Every document is polished for transparency & impact",
  },
  {
    value: "Collaboration",
    meaning: "You’re part of our team—scientific goals drive our work",
  },
  {
    value: "Empowerment",
    meaning: "We equip you with skills that extend beyond individual projects",
  },
  {
    value: "Innovation",
    meaning: "Continuous incorporation of best practices and emerging tools",
  },
];

export const howWeServe = [
  "Tailoring edits and proofreads that highlight clarity and rigor.",
  "Providing consultancy that helps you design reproducible results.",
  "Delivering data services with transparency and actionable insight.",
  "Leading capacity-building initiatives grounded in respect and scientific advancement.",
];


export const missionPoints = landingPage.mission;
export const commitments = landingPage.commitments;
