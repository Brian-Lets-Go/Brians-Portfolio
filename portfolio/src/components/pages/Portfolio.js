
import Project  from "./Projects";
import PostUp from '../../assets/Post-Up.PNG';
import MakiMaku from '../../assets/Maki-Maku.PNG';
import Lebowski from '../../assets/Lebowski.PNG';
import WeatherDashboard from '../../assets/Weather-Dashboard.PNG';
import RunBuddy from '../../assets/Run-Buddy.PNG';
import EmployeeTracker from '../../assets/Employee-Tracker.PNG';

const projects = [
  {
    id: 0,
    title: "Post-Up",
    languages: "js, node, handlebars, express",
    image: PostUp,
    description: "Post your pick up games and attend the most popular games",
    repo: "https://github.com/Brian-Lets-Go/Post-Up",
    live: "https://guarded-waters-75502.herokuapp.com/",
  },
  {
    id: 1,
    title: "MakiMaku",
    languages: "js, materialize",
    image: MakiMaku,
    description: "Create the perfect date night with a great take out meal and blockbuster movie",
    repo: "https://github.com/camilleNicoleT/MakiMaku",
    live: "https://camillenicolet.github.io/MakiMaku/",
  },
  {
    id: 2,
    title: "MarketZero",
    languages: "MongoDB, React, Express, Node",
    image: Lebowski,
    description: "Navigate your next Lebowski convention with this Lebowski themed e-commerce app",
    repo: "https://github.com/Brian-Lets-Go/MarketZero",
    live: "https://stormy-gorge-49394.herokuapp.com/", 
  },
  {
    id: 3,
    title: "Weather Dashboard",
    languages: "js, html, css, ",
    image: WeatherDashboard,
    description: "Search for weather conditions around the world",
    repo: "https://github.com/Brian-Lets-Go/weather-dashboad",
    live: "https://brian-lets-go.github.io/weather-dashboad/",
  },
  {
    id: 4,
    title: "Run Buddy",
    languages: "html, css",
    image: RunBuddy,
    description: "Browse and hire trainers to meet your running needs",
    repo: "https://github.com/Brian-Lets-Go/run-buddy",
    live: "https://brian-lets-go.github.io/run-buddy/",
  },
  {
    id: 5,
    title: "Employee Tracker",
    languages: "node",
    image: EmployeeTracker,
    description: "Manage your business and track employees, managers, departments and salaries",
    repo: "https://github.com/Brian-Lets-Go/employee-tracker",
    live: "https://github.com/Brian-Lets-Go/employee-tracker",
  },
];

export function Portfolio() {
  return (
    <div>
      <Project projects={projects} />
    </div>
  );
}
