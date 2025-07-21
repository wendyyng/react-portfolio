import placespeakLogo from '../assets/placespeak_square_logo.png';
import scwistLogo from '../assets/scwist_logo.jpg';
import opentreeLogo from '../assets/opentree_logo.png';
import cxsLogo from '../assets/cxs_logo.jpg';

export const experience = [
  {
    position_title: "Fullstack Developer",
    company: "CXS Analytics",
    date: "Jan 2025 - Present",
    description: [
      "Building and maintaining APIs (Django, Laravel) and UI (React) for a career development platform with 200K+ users",
      "Refactored monolithic Laravel logic into modular APIs for React frontend",
      "Developed responsive React UI based on Figma designs",
      "Built data pipeline (MongoDB + Airflow) to automate daily reports",
      "Improved API speed via Redis caching and query optimization",
      "Collaborate with PMs/clients to turn specs into shipped features",
    ],
    skills: "JavaScript, React, Python, Django, MongoDB, MySQL",
    website: "https://cxsanalytics.com/",
    company_logo:
      cxsLogo,
  },
  {
    position_title: "Frontend Developer",
    company: "PlaceSpeak",
    date: "May 2023 - Jan 2024",
    description: [
      "Led the homepage redesign project to enhance user experience for regular users",
      "Implemented customized features as per client request for Elections Yukon's Consulatation Topic",
      "Enhanced UI and responsive design of the website using Figma and React",
      "Resolved client-reported frontend issues for various pages including Consultation Topic, Neighborhood, and About pages",
      "Collaborated closely with team members in Agile environment, contributing technical expertise and driving improvements",
    ],
    skills: "JavaScript, React, Redux, Node.js, Python, Django, PostgreSQL, Figma",
    website: "https://placespeak.com/",
    company_logo:
      placespeakLogo,
  },
  {
    position_title: "Web Developer",
    company: "Society for Canadian Women in Science and Technology",
    date: "Oct 2022 - Feb 2023",
    description: [
      "Designed mockups, wireframes, and layouts for 'ms. infinity' program pages using Figma to improve overall functionality and user experience",
      "Consulted with Youth Engagement Director to organize and gather organization's website requirements, ensuring design aligned with organization's goals",
      "Managed project timeline and gathered ideas from team members using Miro, incorporating input into final design",
    ],
    skills: "Figma, UI/UX Design, Project Management",
    website: "https://scwist.ca/programs/ms-infinity/",
    company_logo:
      scwistLogo,
  },
  {
    position_title: "Software Developer",
    company: "OpenTree Education",
    date: "Oct - Dec 2022",
    description: [
      "Worked in agile team and contributed to LMS ‘The Rhizone’ by integrating full calendar feature",
      "Implemented UI of calendar feature and was responsible for communication of data with backend through RESTful APIs",
      "Wrote unit tests for backend using Jest to ensure functionality and scalability of backend codebase",
    ],
    github_link: "https://github.com/OpenTree-Education/rhizone-lms",
    skills: "TypeScript, React, Node.js, Express, Material UI, MySQL, Docker",
    company_logo:
      opentreeLogo,
  }
];
