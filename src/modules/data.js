const data = (() => {
  const projectData = (() => {
    const _staticProjectStore = [
      {
        title: "Weather App",
        description: `A weather web app created in Vanilla JavaScript using openWeather API. It provide you the
                      current weather forecast for searched city. 
                      `,
        imagePath: "https://user-images.githubusercontent.com/67546884/106535542-58382280-64ee-11eb-8bdc-dd21ffcfcba6.png",
        liveLink: "https://coderoo7.github.io/weather-app/",
        sourceCodeLink: "https://github.com/CoderOO7/weather-app/",
      },
      {
        title: "Gifs Gallery",
        description: `Gifs Gallery is a small project created using giphy API to fetch the searched gifs. Made this project in vanilla JS to hone my api skills.`,
        imagePath: "https://user-images.githubusercontent.com/67546884/106055358-29344200-60e5-11eb-88ba-4795dc9cf8eb.png",
        liveLink: "https://coderoo7.github.io/gifs-gallery/",
        sourceCodeLink: "https://github.com/coderoo7/gifs-gallery/",
      },
      {
        title: "TodoList",
        description: `A personal todolist web app with cloud support created
                         using Vanilla JavaScript(ES6).This project is build by taking account of solid principles and design patterns
                        for making code modular and reusable.`,
        imagePath: "./assets/images/projects/todo-list.png",
        liveLink: "https://coderoo7.github.io/todo-list/",
        sourceCodeLink: "https://github.com/coderoo7/todo-list/",
      },
      {
        title: "Foodshala",
        description: `A restaurant web app portal that allow customers to order food from
                        various restaurant stores and allow various restaurant store to sell their food items using this portal.
                    `,
        imagePath: "./assets/images/projects/foodshala.png",
        liveLink: "https://foodshaalaa.herokuapp.com/",
        sourceCodeLink: "https://github.com/coderoo7/foodshala/",
      },
      {
        title: "TicTacToe",
        description: `An online TicTacToe(Noughts and Crosses) game with matrix look to give you some nerd
                        feel, built using HTML5, CSS3, and JavaScript ES6.`,
        imagePath: "./assets/images/projects/tictactoe.png",
        liveLink: "https://coderoo7.github.io/TicTacToe/",
        sourceCodeLink: "https://github.com/CoderOO7/TicTacToe/",
      },
      {
        title: "Restuarant Page",
        description: `A restaurant page template that load the dynamic content to DOM, built using HTML5, CSS3, JavaScript ES6.`,
        imagePath: "./assets/images/projects/restaurant.jpeg",
        liveLink: "https://coderoo7.github.io/restaurant-page/",
        sourceCodeLink: "https://github.com/coderoo7/restaurant-page/",
      },
      {
        title: "Digital Library",
        description: `It's a sample CRUD web app allow you to add your favourite books and movies online,
                        built using HTML5, CSS3, Javascript ES6 and firebase as backend..`,
        imagePath: "./assets/images/projects/digital-library.png",
        liveLink: "https://coderoo7.github.io/Digital-library/",
        sourceCodeLink: "https://github.com/CoderOO7/Digital-library/",
      },
      {
        title: "Calculator",
        description: `An online calculator with basic arithmetic features controlled by either the mouse or
                        keyboard, built using HTML5, CSS3, and JavaScript ES6.`,
        imagePath: "./assets/images/projects/calculator.png",
        liveLink: "https://coderoo7.github.io/Calculator/",
        sourceCodeLink: "https://github.com/CoderOO7/Calculator/",
      },
      {
        title: "Etch-A-Sketch",
        description: `A simple sketch pad made using HTML5/CSS3, JavaScript(ES6) to improve
                        DOM manipulation skills.`,
        imagePath: "./assets/images/projects/etch-a-sketch.png",
        liveLink: "https://coderoo7.github.io/Etch-A-Sketch/",
        sourceCodeLink: "https://github.com/CoderOO7/Etch-A-Sketch",
      },
    ];

    function get() {
      return [..._staticProjectStore];
    }

    return {
        get,
    }
  })();

  return {
      projectData,
  }
})();

export const {projectData} = data; 