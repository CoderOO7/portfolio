/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CoderOO7",
  title: "Hi all, I'm Shubham",
  subTitle: emoji(
    "Backend-focused Full Stack Developer 🚀 with 5+ years of experience building scalable microservices and high-performance web applications. I specialize in Node.js, React, Java and cloud-based architectures, with a strong focus on performance, reliability, and clean system design."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FuS0km6VwneAomsmu1RLW6DXPMkfa1rI/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/coderoo7",
  linkedin: "https://www.linkedin.com/in/coderoo7/",
  outlook: "shubhamyadav.70007@outlook.com",
  twitter: "https://x.com/coderoo7",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/v
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "BACKEND-FOCUSED FULL STACK DEVELOPER BUILDING SCALABLE SYSTEMS & HIGH-PERFORMANCE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Design and build scalable microservices and REST/GraphQL APIs using Node.js and modern backend frameworks"
    ),
    emoji(
      "⚡ Optimize system performance, handle concurrency, and improve reliability for high-traffic applications"
    ),
    emoji(
      "⚡ Develop responsive frontends with React/Next.js and integrate seamlessly with backend services"
    ),
    emoji(
      "⚡ Work with cloud services (AWS, GCP), CI/CD pipelines, and monitoring tools to ship production-ready systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dronacharya College Of Engineering",
      logo: require("./assets/images/dronacharyaLogo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2016  - May 2020",
      desc: "Ranked in the top 10% of the program. Built a solid foundation in computer science and pursued my passion for programming through key courses such as Software Engineering, Web Security, and Operating Systems.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "System Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "Paypal",
      companylogo: require("./assets/images/paypalLogo.jpeg"),
      date: "April 2025 – March 2026",
      desc: "Worked on backend systems powering device fingerprinting and authentication flows.Improved login success rate by 12% and reduced latency while enhancing CI/CD reliability and test coverage.",
      descBullets: []
    },
    {
      role: "Software Development Engineer",
      company: "Nference",
      companylogo: require("./assets/images/nferenceLogo.avif"),
      date: "Oct 2025 – Dec 2025",
      desc: "Contributed to frontend modernization by migrating from CRA to Vite. Improved build performance by 30% and enhanced overall developer experience."
    },
    {
      role: "Software Development Engineer",
      company: "Fuelbuddy",
      companylogo: require("./assets/images/fuelbuddyLogo.jpeg"),
      date: "Sep 2023 – Sep 2024",
      desc: "Built and scaled backend microservices for KYC, analytics, and high-volume transactions. Improved processing efficiency by up to 60% and automated onboarding for 10,000+ users."
    },
    {
      role: "Software Development Engineer",
      company: "klubworks",
      companylogo: require("./assets/images/klubworksLogo.png"),
      date: "Dec 2022 - Jul 2023",
      desc: "Optimized backend performance and reduced API response time from 1 minute to 150ms. Developed scalable systems for financial workflows and improved user onboarding experience."
    },
    {
      role: "Software Development Engineer",
      company: "Definitive HealthCare (Analytical Wizards)",
      companylogo: require("./assets/images/awLogo.png"),
      date: "Apr 2021 - Nov 2022",
      desc: "Contributed to a low-code platform enabling rapid dashboard development. Reduced development time from days to hours and improved system performance significantly."
    },
    {
      role: "Software Development Engineer",
      company: "Dresma",
      companylogo: require("./assets/images/dresmaLogo.jpeg"),
      date: "April 2020 – March 2021",
      desc: "Built and optimized backend services for image processing and retail automation platforms.Improved system reliability and handled high-volume data workflows efficiently."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   projectName: "Saayahealth",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://saayahealth.com/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://dev.to/coderoo7/what-is-google-cloud-platform-47k7",
      title: "What is Google Cloud Platform?",
      description:
        "Well today my Uncle asked me about what is Google Cloud Platform as he is helping his grand-daughter to complete her holiday homework.This article is dedicated to him."
    },
    {
      url: "https://dev.to/coderoo7/scoping-in-javascript-6ke",
      title: "Scoping in Javascript?",
      description:
        "It determine the area or region upto which your varibale, function and objects can be accessed in your code or scope determine the visibility of variable in code."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Agentic AI",
      subtitle: "lorem ipsum",
      slides_url: "https://bit.ly/coderoo7-slides",
      event_url: "https://example.com"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-92119211",
  email_address: "xyz@abc.com"
};

// Twitter Section

const twitterDetails = {
  userName: "CoderOO7", //Replace "twitter" with your twitter username wiout @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
