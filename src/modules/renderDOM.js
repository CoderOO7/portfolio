import { projectController } from "./controllers/projects";

const renderDOM = (() => {
  const projects = (() => {
    function list() {
      projectController.getProjects().forEach((project) => {
        const projectListEl = document.querySelector(".project-list");
        const projectListItem = document.createElement("li");
        projectListItem.classList.add("project-list-item");
        projectListItem.innerHTML = `
                <article class="flex flex-col h-full shadow-md p-4">
                  <a href="${project.liveLink}" class="relative flex hover-trigger" target="_blank">
                      <img src="${project.imagePath}" class="h-60 w-full object-cover rounded-md shadow-md" alt="Project Image">
                      <div class="absolute opacity-0 flex justify-center items-center rounded-md bg-black w-full h-full hover-target">
                          <ion-icon name="link-outline" class="text-8xl transform rotate-45 text-white"></ion-icon>
                      </div>
                  </a>
                  <div class="flex flex-col py-4 border-t-2 border-grey-800 h-full">
                      <h3 class="text-2xl font-bold">${project.title}</h3>
                      <p class="leading-relaxed pt-4">${project.description}</p>
                      <div class="flex space-x-4 pt-4 mt-auto">
                          <a href="${project.liveLink}" target="_blank"><ion-icon name="link-outline" class="text-2xl transform rotate-45 hover:text-blue-600"></ion-icon></a>
                          <a href="${project.sourceCodeLink}" target="_blank"><ion-icon name="logo-github" class="text-2xl hover:text-blue-600"></ion-icon></a>
                      </div>
                  </div>
            </article>`
        ;
        projectListEl.append(projectListItem);
      });
    }

    return { list };
  })();

  return {
    projects,
  };
})();

export { renderDOM };
