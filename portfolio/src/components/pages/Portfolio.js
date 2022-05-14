
import Project  from "./Projects";

const projects = [
  {
    id: 0,
    title: "Post-Up",
    languages: "js, node, handlebars, express",
    image: "../../assets/Post-Up.PNG",
    description: "Post your pick up games and attend the most popular games",
    repo: "https://github.com/Brian-Lets-Go/Post-Up",
    live: "https://guarded-waters-75502.herokuapp.com/",
  },
  {
    id: 1,
    title: "MakiMaku",
    languages: "js, materialize",
    image: "../../assets/Maki-Maku.PNG",
    description: "Create the perfect date night with a great take out meal and blockbuster movie",
    repo: "https://github.com/camilleNicoleT/MakiMaku",
    live: "https://camillenicolet.github.io/MakiMaku/",
  },
  {
    id: 2,
    title: "Tech Blog",
    languages: "js, html, handlebars, bcrypt. dotenv",
    image: "../../assets/Tech-Blog.PNG",
    description: "Blog about all the latest news and devices here",
    repo: "https://github.com/Brian-Lets-Go/Tech-Blog",
    live: "https://evening-peak-47422.herokuapp.com/", 
  },
  {
    id: 3,
    title: "Weather Dashboard",
    languages: "js, html, css, ",
    image: "../../assets/Weather-Dashboard.PNG",
    description: "Search for weather conditions around the world",
    repo: "https://github.com/Brian-Lets-Go/weather-dashboad",
    live: "https://brian-lets-go.github.io/weather-dashboad/",
  },
  {
    id: 4,
    title: "Run Buddy",
    languages: "html, css",
    image: "../../assets/Run-Buddy.PNG",
    description: "Browse and hire trainers to meet your running needs",
    repo: "https://github.com/Brian-Lets-Go/run-buddy",
    live: "https://brian-lets-go.github.io/run-buddy/",
  },
  {
    id: 5,
    title: "Employee Tracker",
    languages: "node",
    image: "../../assets/Employee-Tracker.PNG",
    description: "Manage your business and track employees, managers, departments and salaries",
    repo: "https://github.com/Brian-Lets-Go/employee-tracker",
    live: "https://github.com/Brian-Lets-Go/employee-tracker",
  },
];

export function Portfolio() {
  return (
    <div>
      <p className="portfolio-content">Portfolio</p>
      <Project projects={projects} />
    </div>
  );
}
