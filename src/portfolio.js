/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Splash screen disabled as requested
};

//SEO Related settings
const seo = {
  title: "Umer Mujahid's Portfolio",
  description:
    "Full Stack Developer & ML Engineer | Building intelligent, scalable products with Full stack development, ml models, llm, and deployment. Computer Science student at FAST-NUCES.",
  og: {
    title: "Umer Mujahid - Full Stack Developer & ML Engineer",
    type: "website",
    url: "https://umer-mujahid.vercel.app/",
    image: "https://umer-mujahid.vercel.app/thumbnail.png",
  },
};

//Home Page
const greeting = {
  title: "Umer Mujahid",
  logo_name: "UmerMujahid",
  nickname: "Full Stack Developer & ML Engineer",
  subTitle:
    "Full Stack Developer & ML Engineer | Building intelligent products using Full stack development, ml models, llm, deployment etc. CS undergraduate at FAST-NUCES with passion for creating impactful products.",
  resumeLink: "/AI_ML_Resume.pdf",
  portfolio_repository: "https://github.com/UmerMujahid",
  githubProfile: "https://github.com/UmerMujahid",
  profileImage: "compressed.jpeg",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/UmerMujahid",
  // linkedin: "https://www.linkedin.com/in/umer-mujahid/",
  // gmail: "umermujahid4738@gmail.com",
  // facebook: "https://www.facebook.com/umer.mujahid.752",
  // twitter: "https://x.com/UmerMuj84031882",
  // instagram: "https://www.instagram.com/umer_mujahid/"

  {
    name: "Github",
    link: "https://github.com/UmerMujahid",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/umer-mujahid/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "X-Twitter",
    link: "https://x.com/UmerMuj84031882",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/umer.mujahid.752",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/umer_mujahid/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building NLP pipelines with BioBERT for medical text classification achieving 97.6% accuracy",
        "⚡ Developing deep learning models for Computer Vision using TensorFlow and PyTorch with transfer learning",
        "⚡ Integrating AI agents with LLMs (Google Gemini, Claude) for intelligent automation and data analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: "4px",
            borderRadius: "8px",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: "4px",
            borderRadius: "8px",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "NLP",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive, modern web applications using React.js with Redux Toolkit for state management",
        "⚡ Developing scalable backend APIs with Node.js, Express.js and MongoDB for production-grade systems",
        "⚡ Implementing real-time features with REST APIs, authentication, and multi-role access control",
      ],
      softwareSkills: [
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
            backgroundColor: "white",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Redux Toolkit",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
      ],
    },
    {
      title: "Databases & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working with both NoSQL (MongoDB) and SQL databases (MySQL, SQL Server) for various use cases",
        "⚡ Version control with Git/GitHub, API testing with Postman, and development tools optimization",
        "⚡ Setting up CI/CD pipelines and deployment workflows for production applications",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F1502F",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "logos:visual-studio-code",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI / UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#00C4CC",
          },
        },
        {
          skillName: "Adobe",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#FF0000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/UmerMujahid",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/umer-mujahid/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/umermujahid",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "FAST-NUCES Lahore",
      subtitle: "BS Computer Science",
      logo_path: "fast_nuces.png",
      alt_name: "FAST-NUCES",
      duration: "08/2023 - 07/2027",
      descriptions: [
        "⚡ Pursuing BS Computer Science with a strong focus on AI, Machine Learning, and Full Stack Development",
        "⚡ CGPA: 3.62/4.00 - Consistently achieving Dean's List of Honour (4x recipient)",
        "⚡ Coursework includes Data Structures, Algorithms, Databases, AI, NLP, Web Development, and Cloud Computing",
      ],
      website_link: "https://lhr.nu.edu.pk/",
    },
    {
      title: "Govt. College Lahore",
      subtitle: "HSSC (Pre-Engineering)",
      logo_path: "gcu.png",
      alt_name: "Government College Lahore",
      duration: "11/2021 - 08/2023",
      descriptions: [
        "⚡ Completed Higher Secondary School Certificate (Pre-Engineering) with excellent grades",
        "⚡ Achieved 90.00% in HSSC examinations",
        "⚡ Merit-based scholarship recipient from Punjab Government for outstanding academic performance",
      ],
      website_link: "https://gcu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Intro to Neural Networks",
      subtitle: "- Advanced AI Course",
      logo_path: "neural_network_logo.png",
      certificate_link: "https://github.com/UmerMujahid",
      alt_name: "Neural Networks",
      color_code: "#8C151599",
    },
    {
      title: "Full React Course",
      subtitle: "- React.js Mastery",
      logo_path: "react_logo.png",
      certificate_link: "https://github.com/UmerMujahid",
      alt_name: "React",
      color_code: "#61DAFB99",
    },
    {
      title: "AI Agent Development Workshops",
      subtitle: "- Google ADK & LLM Integration",
      logo_path: "google_logo.png",
      certificate_link: "https://github.com/UmerMujahid",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Web Development Course",
      subtitle: "- Full Stack MERN",
      logo_path: "mern_logo.png",
      certificate_link: "https://github.com/UmerMujahid",
      alt_name: "Web Development",
      color_code: "#F7DF1E99",
    },
    {
      title: "React Basics",
      subtitle: "- Frontend Fundamentals",
      logo_path: "react_logo.png",
      certificate_link: "https://github.com/UmerMujahid",
      alt_name: "React",
      color_code: "#61DAFB99",
    },
    {
      title: "Node Backend Course",
      subtitle: "- Backend Development",
      logo_path: "node_logo.png",
      certificate_link: "https://github.com/UmerMujahid",
      alt_name: "Node.js",
      color_code: "#33993399",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Currently pursuing my passion for Full Stack Development and AI/ML. I have interned at ECOM Wizz working on web operations and doing research with my professor. As a volunteer, I actively contribute to community development programs, organizing workshops on leadership and technical skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Development Projects",
          company: "Personal & Academic Projects",
          company_url: "https://github.com/UmerMujahid",
          logo_path: "mern1.png",
          duration: "2023 - Present",
          location: "Lahore, Pakistan",
          description:
            "Building production-grade web applications and AI-integrated systems using Full stack development, ml models, llm, deployment etc. Implemented real-time blood donor locator, AI recruitment platform, and shopping mall management system. Each project showcases full-stack development capabilities with focus on scalability and user experience.",
          color: "#00A8E8",
        },
        {
          title: "AI & ML Research & Development",
          company: "Academic & Research Projects",
          company_url: "https://github.com/UmerMujahid",
          logo_path: "ai.png",
          duration: "2024 - Present",
          location: "Lahore, Pakistan",
          description:
            "Conducting research and building AI models including NLP clinical inheritance patterns, lung cancer classification, and location intelligence agents. Working with modern AI frameworks and deploying models for real-world applications.",
          color: "#9D4EDD",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern - Web Development & SEO",
          company: "ECOM Wizz",
          company_url: "https://github.com/UmerMujahid",
          logo_path: "ecom.png",
          duration: "June 2024 - July 2024",
          location: "Lahore, Pakistan",
          description:
            "Developed and managed website operations while implementing SEO best practices to optimize online presence. Worked on performance optimization and search engine visibility improvements.",
          color: "#4285F4",
        },
        {
          title: "Intern - Artificial Intelligence",
          company: "DecodeLabs",
          company_url: "",
          logo_path: "decode.png",
          duration: "1st June 2026 - 1st July 2026",
          location: "Remote | Summer Internship",
          description:
            "Collaborated on building various AI-driven solutions, including intelligent chatbots, personalized recommendation systems, and robust classification models. Leveraged modern machine learning frameworks to train and deploy these data-centric models effectively.",
          color: "#F4B400",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Development Volunteer",
          company: "Islami Jamiat Talba",
          company_url: "https://ijk.org.pk/",
          logo_path: "ijt.png",
          duration: "Feb 2021 - Present",
          location: "Lahore, Pakistan",
          description:
            "Actively contribute to organizing community outreach programs engaging local youth. Facilitate workshops on leadership development, personal growth, and technical skill building for students in the community.",
          color: "#06D6A0",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// GitHub OpenSource data
const openSource = {
  githubUserName: "UmerMujahid",
  githubToken: process.env.REACT_APP_GITHUB_TOKEN || "",
  githubConvertedToken: btoa(process.env.REACT_APP_GITHUB_TOKEN || ""), // Base64 encoded token dynamically
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myimage.png",
    description:
      "I'm passionate about building intelligent, scalable applications. Feel free to reach out via email or connect with me on LinkedIn. I'm open to collaborations, freelance opportunities, and discussing interesting projects!",
  },
  blogSection: {
    title: "Projects & Work",
    subtitle:
      "Check out my latest projects on GitHub showcasing full-stack development and AI/ML implementations.",
    link: "https://github.com/UmerMujahid",
    avatar_image_path: "projects_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Fazaia Housing Society Phase 1, Lahore, Pakistan",
    locality: "Lahore",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "",
    streetAddress: "Fazaia Housing Society Phase 1",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/JbJWE9ToG3ewiR7UA",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+92 333-6724862",
  },
};

// Alias for backward compatibility with Contact component
const contactInfo = {
  title: "Contact Me",
  subtitle: "Feel free to reach out via email or LinkedIn",
  number: "+92 333-6724862",
  email_address: "umermujahid4738@gmail.com",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  contactInfo,
  openSource,
};
