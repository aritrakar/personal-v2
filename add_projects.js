//import { items } from "./projectsData";

const items = [
  {
    Name: "Statpy",
    Description:
      "A small Python package built for analysis of statistical distributions (Gaussian, Binomial and Poisson).",
    Used: "Python",
    Demo: "https://pypi.org/project/statpy/",
    Github: "https://github.com/aritrakar/statpy",
  },
  {
    Name: "DocDash",
    Description:
      "A personal health-care and medical consultation management system for doctors and patients featuring video calling.",
    Used: "React.js, Firebase, Vonage Video API, Material-UI, Lottie Animations",
    Demo: "https://docdash.netlify.app/docdash/",
    Github: "https://github.com/aritrakar/doctor-dashboard",
  },
  {
    Name: "Spotify clone",
    Description: "IN PROGRESS. A simple one-page mini-clone of Spotify.",
    Used: "React.js, Context API, Spotify API",
    Demo: "",
    Github: "https://github.com/aritrakar/spotify-clone-v1",
  },
  {
    Name: "JARVIS v1",
    Description:
      "A personal AI voice assistant that can execute different commands issued to it by voice. Check README.md for more details.",
    Used: "Python, Tensorflow",
    Demo: "",
    Github:
      "https://github.com/aritrakar/Python-Projects/tree/master/Chatbot/Speech%20To%20Text",
  },
  {
    Name: "Pathfinding Visualizer",
    Description: "Inspired by Clement Mihailescu.",
    Used: "React.js, JavaScript, CSS, HTML",
    Demo: "https://aritrakar.github.io/pathfinding_visualizer/",
    Github: "https://github.com/aritrakar/pathfinding_visualizer",
  },
  {
    Name: "Tic-Tac-Toe",
    Description:
      "A Tic-Tac-Toe player (no GUI) implementing the Minimax algorithm with Alpha-Beta pruning.",
    Used: "Python",
    Demo: "",
    Github:
      "https://github.com/aritrakar/Python-Projects/tree/master/Tic%20Tac%20Toe",
  },
  {
    Name: "Stocks Visualizer",
    Description:
      "An interface to visualize stocks (in the Indian National Stock Exchange) dyanmically in real-time using Matplotlib animations.",
    Used: "Python, Matplotlib",
    Demo: "https://aritrakar.github.io/pathfinding_visualizer/",
    Github: "https://github.com/aritrakar/pathfinding_visualizer",
  },
  {
    Name: "WhatsApp Chatbot v1",
    Description:
      "A simple chatbot that can respond to basic greetings and conversation hooks, fetch YouTube video Demos, news and Wikipedia articles.",
    Used: "Python, Selenium, BeautifulSoup",
    Demo: "",
    Github:
      "https://github.com/aritrakar/Python-Projects/tree/master/Chatbot/V1",
  },
  {
    Name: "Blackjack simulator",
    Description:
      "A very simple Blackjack simulator that can play with the user.",
    Used: "Python",
    Demo: "",
    Github:
      "https://github.com/aritrakar/Python-Projects/tree/master/Blackjack",
  },
  {
    Name: "Clock",
    Description: "A simple sleek clock.",
    Used: "Python, Matplotlib",
    Demo: "https://github.com/aritrakar/Python-Projects/blob/master/Clock/Python%20Clock%20GIF.gif",
    Github: "https://github.com/aritrakar/Python-Projects/tree/master/Clock",
  },
  {
    Name: "OpenCV Experiments",
    Description:
      "Experiments with OpenCV: simple image manipulation, color detection, face detection using Haar Cascades.",
    Used: "Python, OpenCV",
    Demo: "",
    Github: "https://github.com/aritrakar/Python-Projects/tree/master/OpenCV",
  },
  {
    Name: "COIVD-19 Tracker v1",
    Description:
      "A simple single-page app with the latest stats on the pandemic.",
    Used: "React.js, JavaScript, CSS, HTML",
    Demo: "https://aritrakar.github.io/covid-tracker-v1/",
    Github: "https://github.com/aritrakar/covid-tracker-v1",
  },
  {
    Name: "Krypto v1",
    Description: "A simple cryptocurrency dashboard.",
    Used: "React.js, JavaScript, CSS, HTML",
    Demo: "https://aritrakar.github.io/krypto-v1/",
    Github: "https://github.com/aritrakar/krypto-v1",
  },
  {
    Name: "To Do App",
    Description: "First React.js project. Simple To-Do app.",
    Used: "React.js, JavaScript, CSS, HTML",
    Demo: "https://aritrakar.github.io/todo/",
    Github: "https://github.com/aritrakar/JS/tree/master/To%20Do",
  },
  {
    Name: "ColorPicker",
    Description:
      "Generates a random background color (RGB or Hex) and sets the color accordingly. Simple JS exercise.",
    Used: "JavaScript, CSS, HTML",
    Demo: "https://aritrakar.github.io/ProjectsHub/ColorPicker/index.html",
    Github: "https://github.com/aritrakar/JS/tree/master/ColorPicker",
  },
  {
    Name: "Pong",
    Description:
      "An attempt to recreate the classic game. See if you can beat the computer!",
    Used: "JavaScript, CSS, HTML",
    Demo: "https://aritrakar.github.io/ProjectsHub/Pong/index.html",
    Github: "https://github.com/aritrakar/JS/tree/master/pong",
  },
  {
    Name: "Bouncing Balls",
    Description:
      'Simple single-player game to "devour" the moving balls in the least time.',
    Used: "JavaScript, CSS, HTML",
    Demo: "https://aritrakar.github.io/ProjectsHub/Bouncing%20Balls/index2.html",
    Github: "https://github.com/aritrakar/JS/tree/master/bouncing-balls",
  },
];

// Get the compiled code by editing the following:
//https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=FAYw9gdgzgLgBAQQA5LgXjgCmHOAeAEwEsA3OIgtAIiQCcwArAUxBgEkYmBbAdQAswAGyZUAfDlz5iJcZMmFSsufL4AmJcvmx6EAOaiAQmACuEEET1wDAQ0GCoDx1DwB6bZH0TNrtRuV4kP00AZSIuJGE4KAtdYQBaCOsATyZaOF1rLiY4GDA4KgImEhNaKhy-bK4wEhi4ACNbe3IIcuzha1gvTRywpgA6OA6CIY6uuVdAsflAgClrEmtgkFoiJBgAGjgACQAVAFkAGQBWTYBhYOCAZgmg-WlySio6sBhcrjEp8etP5T5aJgAZtQ-K8kFAAFwuFy6IgwPjGOp9cBcFzWFYwWjWADWaJcM2CLgxTCYLi4HU4tBcz1M5j0cQadigVB-chgaN0TBg1AA-nVBNYIFjmd1lP9BNQIGAwEgmBBUnBJf8Aal_qUWXBbt4wroorQQNRtVBobD4XU4qoACx9JB6Mq2LlUGFwhFlFya-So924PDfEVyP6A4GgiFQtGwzE42h9J2mvpEMAuAAK9GYrCgWwRLiMNJiAFJVAAGGyMlwWQoAD1UfRBXEEwr9uDZtA5Dt5_MF9YbYolUplcrSisBKtSne6XskABFuGB1a5rO7XNJbovFF0VzI1384G6JOvxABKADcwGABDAIGMWQgMGjnIAosIrzADEk2ARMDQUywYFA4uBr9YFgjvufTWCgsoEKcfBEII77IEgR5AA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=script&lineWrap=true&presets=react&prettier=true&targets=&version=7.14.7&externalPlugins=

// import {items} from "./projectsData";

// const App = (name, description, used, demo, github) => {
//   return (
//   <div id="projectItemWhole">
//     <div>
//       <div>
//         <h2>
//           <strong>{name}</strong>
//         </h2>
//         <p>{description}</p>
//         <p>{used}</p>
//         <div id="bottom">
//           {demo ? <a
//             href={demo}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Demo
//           </a> : ""}
//           {github ?
//             <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src="imgs/github-24.png" alt="github" />
//           </a>: ""}
//         </div>
//       </div>
//     </div>
//     <hr />
//   </div> )
// };

// //document.getElementById("projects-container").appendChild(App);

// for (let item in items) {
//   console.log("Getting")
// 	document.getElementById("projects-container").appendChild(App(item.Name, item.Description, item.Used, item.Demo, item.Github));
// }

// https://stackoverflow.com/questions/30430982/can-i-use-jsx-without-react-to-inline-html-in-script

// Compiled code:
const App = (name, description, used, demo, github) => {
  return React.createElement(
    "div",
    {
      id: "projectItemWhole",
    },
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          React.createElement("strong", null, name)
        ),
        React.createElement("p", null, description),
        React.createElement("p", null, used),
        React.createElement(
          "div",
          {
            id: "bottom",
          },
          demo
            ? React.createElement(
                "a",
                {
                  href: demo,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                "Demo"
              )
            : "",
          github
            ? React.createElement(
                "a",
                {
                  href: github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                React.createElement("img", {
                  id: "github",
                  src: "imgs/github-24.png",
                  alt: "github",
                })
              )
            : ""
        )
      )
    ),
    React.createElement("hr", null)
  );
};

// Add id properties
for (let i = items.length - 1; i >= 0; i--) {
  items[i].id = i + 1;
}

// "Render" elements
for (let item of items) {
  document
    .getElementById("projects-container")
    .appendChild(
      App(item.Name, item.Description, item.Used, item.Demo, item.Github)
    );
}
