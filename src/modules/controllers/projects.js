import {projectData} from "../data.js";

function projectFactory(
  title,
  description,
  imagePath,
  liveLink,
  sourceCodeLink
) {
  return {
    title,
    description,
    imagePath,
    liveLink,
    sourceCodeLink,
  };
}

const projectController = (() => {
  const _projectStore = [];

  function _createProject(projectObj) {
    const {
      title,
      description,
      imagePath,
      liveLink,
      sourceCodeLink,
    } = projectObj;
    const newProject = projectFactory(
      title,
      description,
      imagePath,
      liveLink,
      sourceCodeLink
    );
    return newProject;
  }

  function addProject(projectObj) {
    const newProject = _createProject(projectObj);
    _projectStore.push(newProject);
  }

  function getProjects() {
    return [..._projectStore];
  }

  (function addSampleProjects() {

    projectData.get().forEach(project=>{
      addProject(project);
    });

  })();

  return {
    addProject,
    getProjects,
  };
})();

export { projectController };
