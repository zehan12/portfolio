/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; 
const  splashAnimation = "ddd"
// Rename to your file name for custom animation

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
  username: "Zehan Khan",
  title: "Hi all, I'm Zehan Khan",
  subTitle: emoji(
    "I am an aspiring Full Stack Web Developer from India."
    // "A passionate Full Stack Software Developer from India 🚀 having an experience of building Web applications with JavaScript / React.js / Redux / Node.js and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GH0GdCW9ksFbgXLJhydpxyPNPCNwhjBE/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zehan12",
  linkedin: "https://www.linkedin.com/in/zehan-khan-6001a4144/https://www.linkedin.com/in/zehan-khan-6001a4144/",
  gmail: "zehan9211@gmail.com",
  // gitlab: "",
  facebook: "https://https://www.facebook.com/zafar.3760/",
  medium: "https://medium.com/@zehan9211",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About",
  // subTitle: "A MERN FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I am Result-oriented full-stack web developer, passionate about developing user-friendly web applications using MERN Stack."
    ),
    emoji("⚡I enjoy developing websites and a keen interest in solving problems and coming up with effective solutions."),
    emoji("⚡Eager to be a part of a team which gives me ability to learn and grow."),
    emoji("⚡Experience in working on multiple Backened platforms like Node, Express, MongoDB, Postman.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
      style: {
        color: "#764ABC",
      },
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
      style: {
        color: "#764ABC",
      },
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      style: {
        color: "#764ABC",
      },
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
      style: {
        color: "#764ABC",
      },
    },
    {
      skillName: "node.js",
      fontAwesomeClassname: "fab fa-node",
      style: {
        color: "#764ABC",
      },
    },
  
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      style: {
        color: "#764ABC",
      },
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      style: {
        color: "#764ABC",
      },
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws",
    //   style: {
    //     color: "#764ABC",
    //   },
    // },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
      style: {
        color: "#764ABC",
      },
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Masai School",
      // logo: require("./assets/images/masai.png"),
      subHeader: "Full Stack Web Development",
      duration: "April 2021 - May 2022",
      link : "https://www.masaischool.com/"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Rajkiya Engineering College Sonbhadra",
      // logo: require("./assets/images/rec.png"),
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "July 2018 - June 2022",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
      link:"http://recsonbhadra.ac.in/"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Projects"),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Udemy.com Project",
      subtitle:
        "This is a clone of “Udemy.com” in which We implemented some cool functionalities like search for courses, create courses as an instructor, add to cart, add to wishlist and purchased couses many more.",
        techStack : "CSS | MUI | Express.js | Node.js | React.js | Redux | MongoDB",
      // image: require("./assets/images/udemy2.png"),
      footerLink: [
        {
          name: "Demo Link",
          url: "https://udemy-masai.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/anamikarec/udemy.com-project"
        },
        {
          name: "Video Link",
          url: "https://drive.google.com/file/d/1BLI-x_JIPJP_KDZqyP4H6ZFuJ_EFjG54/view"
        }
      ]
    },
    {
      title: "MeetUp-Clone Project",
      subtitle:
        "This is a clone of “MeetUp.com” in which We implemented some cool functionalities like signUp/signIn, searching functionality, attend event functionality, create group and create group functionality and many more.",
        techStack:"React.js | Redux | JavaScript | HTML | CSS",
      // image: require("./assets/images/meetup.png"),
      footerLink: [
        {
          name: "Demo Link",
          url: "https://meet-up-clone.netlify.app/"
        },
        {
          name: "Source Code",
          url: "https://github.com/ayush-code-drops/MeetUp-Clone.git"
        },
        {
          name: "Video Link",
          url: "https://drive.google.com/file/d/1iD--Q8dvfF1gI7dxdR29XxHiEQbINkfQ/view?usp=sharing"
        }
      ]
    },

    {
      title: "Redbus-Clone Project",
      subtitle: "This is a clone of “Redbus.com” in which We implemented some cool functionalities like signUp/signIn, search for buses, book ticket, bus hire, and many more.",
      techStack:"Advanced JavaScript | DOM manipulations | API | Json Server | HTML | CSS",
      // image: require("./assets/images/redbus.png"),
      footerLink: [
        {
          name: "Demo Link",
          url: "https://aiswaryaraja1996.github.io/RedBus-Project/"
        },
        {
          name: "Source Code",
          url : "https://github.com/Aiswaryaraja1996/RedBus-Project.git"
        },
        {
          name: "Video Link",
          url: "https://drive.google.com/file/d/166hhVuxa03OQ1ebq17qxRNYF1o9kbvIK/view?usp=sharing"
        }
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? I will be more happy to answer. My Inbox is open for all. I can help you with HTML5, CSS3, JavaScript, React, Redux, Typescript, MUI, Node.js, Express.js, MongoDB, SQL, MongoDB Atlas, Heroku, Netlify, Github and Opensource Development.",
  // number: "+91 9026675224",
  email_address: "zehan9211@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "zehan9211", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,//remove
  openSource,
  bigProjects,//remove
  achievementSection,
  blogSection,
  talkSection,//remove
  podcastSection,//remove
  contactInfo,
  twitterDetails
};
