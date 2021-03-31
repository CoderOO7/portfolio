const data = (() => {
  const projectData = (() => {
    const _staticProjectStore = [
      {
        title: "Kreditpay",
        description: `Kreditpay is a minimal loan management system build using MERN stack. It's an online platform where you as a customer can take a loan with ease.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113032972-02939580-9180-11eb-853e-a1fbe729e55c.jpg",
        liveLink: "https://kreditpay.netlify.com/",
        sourceCodeLink: "https://github.com/CoderOO7/kreditpay/",
      },
      {
        title: "Todoroll",
        description: `A todo extension made to focus on daily goals and improve your productivity.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113032064-f4914500-917e-11eb-997f-c6d5ba1edab1.png",
        liveLink: "https://todoroll.netlify.app/",
        sourceCodeLink: "https://github.com/CoderOO7/todoroll/",
      },

      {
        title: "Weather App",
        description: `A weather web app created in Vanilla JavaScript using openWeather API. It provide you the
                      current weather forecast for searched city. 
                      `,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/106535542-58382280-64ee-11eb-8bdc-dd21ffcfcba6.png",
        liveLink: "https://coderoo7.github.io/weather-app/",
        sourceCodeLink: "https://github.com/CoderOO7/weather-app/",
      },
      {
        title: "Gifs Gallery",
        description: `Gifs Gallery is a small project created using giphy API to fetch the searched gifs. Made this project in vanilla JS to hone my api skills.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/106055358-29344200-60e5-11eb-88ba-4795dc9cf8eb.png",
        liveLink: "https://coderoo7.github.io/gifs-gallery/",
        sourceCodeLink: "https://github.com/coderoo7/gifs-gallery/",
      },
      {
        title: "TodoList",
        description: `A personal todolist web app with cloud support created
                         using Vanilla JavaScript(ES6).This project is build by taking account of solid principles and design patterns
                        for making code modular and reusable.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113033980-20152f00-9181-11eb-911d-eca07c1e45fb.png",
        liveLink: "https://coderoo7.github.io/todo-list/",
        sourceCodeLink: "https://github.com/coderoo7/todo-list/",
      },
      {
        title: "Foodshala",
        description: `A restaurant web app portal that allow customers to order food from
                        various restaurant stores and allow various restaurant store to sell their food items using this portal.
                    `,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113033614-bd239800-9180-11eb-8438-7ec20c333d99.png",
        liveLink: "https://foodshaalaa.herokuapp.com/",
        sourceCodeLink: "https://github.com/coderoo7/foodshala/",
      },
      {
        title: "TicTacToe",
        description: `An online TicTacToe(Noughts and Crosses) game with matrix look to give you some nerd
                        feel, built using HTML5, CSS3, and JavaScript ES6.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113033939-14c20380-9181-11eb-8e0b-aa41094e00ed.png",
        liveLink: "https://coderoo7.github.io/TicTacToe/",
        sourceCodeLink: "https://github.com/CoderOO7/TicTacToe/",
      },
      {
        title: "Restuarant Page",
        description: `A restaurant page template that load the dynamic content to DOM, built using HTML5, CSS3, JavaScript ES6.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113101027-ba11c180-91eb-11eb-97dc-8c96f703a51d.jpg",
        liveLink: "https://coderoo7.github.io/restaurant-page/",
        sourceCodeLink: "https://github.com/coderoo7/restaurant-page/",
      },
      {
        title: "Digital Library",
        description: `It's a sample CRUD web app allow you to add your favourite books and movies online,
                        built using HTML5, CSS3, Javascript ES6 and firebase as backend..`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113033608-bb59d480-9180-11eb-9ce8-c6d8346e3a09.png",
        liveLink: "https://coderoo7.github.io/Digital-library/",
        sourceCodeLink: "https://github.com/CoderOO7/Digital-library/",
      },
      {
        title: "Calculator",
        description: `An online calculator with basic arithmetic features controlled by either the mouse or
                        keyboard, built using HTML5, CSS3, and JavaScript ES6.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113033603-b9901100-9180-11eb-9bdb-0af136479b44.png",
        liveLink: "https://coderoo7.github.io/Calculator/",
        sourceCodeLink: "https://github.com/CoderOO7/Calculator/",
      },
      {
        title: "Etch-A-Sketch",
        description: `A simple sketch pad made using HTML5/CSS3, JavaScript(ES6) to improve
                        DOM manipulation skills.`,
        imagePath:
          "https://user-images.githubusercontent.com/67546884/113033612-bbf26b00-9180-11eb-86c7-1b9f61d439a8.png",
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
