import { LuLinkedin, LuGithub } from "react-icons/lu";
import { RiSwordLine } from "react-icons/ri";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import Snapgram from "../assets/project_snapgram.jpg";
import CssGen from "../assets/project_css_gen.jpg";
import Movix from "../assets/project_movix.jpg";

export const navLinks = [
  {
    url: "/#",
    name: "Home",
  },
  {
    url: "/#about",
    name: "About",
  },

  {
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "C++",
  "JavaScript (ES+)",
  "React Js",
  "Redux Toolkit",
  "Tailwind",
  "API Handling",
];

export const social_links = [
  {
    url: "https://github.com/Tapesh-1308/",
    icon: <LuGithub className="w-[22px] h-[22px]" />,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/tapesh-dua-b49872216/",
    icon: <LuLinkedin className="w-[22px] h-[22px]" />,
    name: "Linkedin",
  },
  {
    url: "https://auth.geeksforgeeks.org/user/tapeshdua420/",
    icon: <SiGeeksforgeeks className="w-[22px] h-[22px]" />,
    name: "GeeksforGeeks",
  },
  {
    url: "https://leetcode.com/tapeshdua/",
    icon: <SiLeetcode className="w-[22px] h-[22px]" />,
    name: "Leetcode",
  },
  {
    url: "https://cssbattle.dev/player/dev_tapesh_dua",
    icon: <RiSwordLine className="w-[22px] h-[22px]" />,
    name: "CSS Battle",
  },
];

export const mainProjects = [
  {
    title: "Snapgram",
    description:
      "I built a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, JavaScript, and more.",
    tags: ["React", "Appwrite", "React Query", "Infinite Scroll", "ShadCn"],
    github: "https://github.com/Tapesh-1308/snapgram",
    demo: "https://snapgram-omega.vercel.app/",
    image: Snapgram,
  },
  {
    title: "CSS Generator",
    description:
      "This web app is a powerful css generator developed using React and Context API. Users can generate shadows, gradients and glassmorphism like effects and get CSS code in one single click.",
    tags: ["React", "Context API", "CSS Code", "Tailwind CSS"],
    github: "https://github.com/Tapesh-1308/css-generator",
    demo: "https://css-generator-by-tapesh.vercel.app/",
    image: CssGen,
  },
  {
    title: "Movix",
    description:
      "Movix app is one the best movies database application made using TMDB API. Infinte scrolling, skeleton loading and filters made this project really awesome. And SCSS is used for designing of this website.",
    tags: ["React", "Redux", "API", "SCSS", "Infinte Scroll", "Filter Search"],
    github: "https://github.com/Tapesh-1308/movix-by-tapesh",
    demo: "https://movix-by-tapesh.vercel.app/",
    image: Movix,
  },
];

export const otherProjects = [
  {
    title: "Youtube CLone",
    description:
      "Crafted using React's Context API and Rapid API, my YouTube Clone boasts a true-to-form UI. Infinite scrolling feature ensures an immersive content.",
    tags: ["React", "RapidAPI", "Infinite Scroll", "Context", "Tailwind"],
    github: "https://github.com/Tapesh-1308/tapesh-youtube-clone",
    demo: "https://tapesh-youtube-clone.vercel.app/",
  },
  {
    title: "Dynamic Currency Converter",
    description:
      "Seamless currency conversion using my React-powered tool. Switch b/w currencies real-time data from a reliable API.",
    tags: ["React", "API", "Tailwind"],
    github: "https://github.com/Tapesh-1308/currency-converter",
    demo: "https://currency-converter-by-tapesh.vercel.app/",
  },
  {
    title: "Github Profile Previewer",
    description:
      "Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.",
    tags: ["HTML", "CSS", "JavaScript", "Github API"],
    github: "https://github.com/Tapesh-1308/github-profile-previewer",
    demo: "https://tapesh-1308.github.io/github-profile-previewer/",
  },
  {
    title: "Simple Todo App",
    description:
      "Organize your tasks effortlessly with my ToDo app. Built with HTML, CSS, and JavaScript, this tool lets you add, delete, and mark tasks as done.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/Tapesh-1308/todo-app",
    demo: "https://tapesh-1308.github.io/todo-app/",
  },
  {
    title: "Scientific Calculator",
    description:
      "This calculator provides a lifelike feel, complete with a responsive design for various devices. Switch effortlessly between light and dark modes.",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/Tapesh-1308/super-calculator",
    demo: "https://tapesh-1308.github.io/super-calculator/",
  },
  {
    title: "GeeksforGeeks Landing Page Clone",
    description:
      "The clone closely resembles the original GeeksforGeeks landing page. This clone is designed to be responsive and adapts to different screen sizes.",
    tags: ["HTML", "Vanilla CSS"],
    github: "https://github.com/Tapesh-1308/GeeksforGeeks-Clone",
    demo: "https://tapesh-1308.github.io/GeeksforGeeks-Clone/",
  },
  {
    title: "Notes App",
    description:
      "Organize your notes easily with my straightforward Notes App. Built with HTML, CSS, and JavaScript,with the power of local storage and markdown parser.",
    tags: ["HTML", "CSS", "JavaScript", "Markdown Parser"],
    github: "https://github.com/Tapesh-1308/todo-app",
    demo: "https://tapesh-1308.github.io/todo-app/",
  },
  {
    title: "Password Generator",
    description:
      "Simple UI crafted using HTML, CSS, and JS, this tool offers multiple filters for customizing your passwords. Copy your generated passwords with a single click.",
    tags: ["HTML5", "CSS", "JavaScript", "DOM"],
    github: "https://github.com/Tapesh-1308/password-generator",
    demo: "https://tapesh-1308.github.io/password-generator/",
  },
  {
    title: "Random Jokes",
    description:
      "Developed with HTML, CSS, and JavaScript, this web app pulls jokes dynamically from an API, ensuring a constant supply of humor.",
    tags: ["HTML5", "CSS", "JavaScript", "DOM", "API"],
    github: "https://github.com/Tapesh-1308/random-jokes-generator",
    demo: "https://tapesh-1308.github.io/random-jokes-generator/",
  },
];
