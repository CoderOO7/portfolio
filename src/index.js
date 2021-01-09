import "./styles.css"
import {renderDOM} from "./modules/renderDOM.js";

(function loadDynamicContent(){
    renderDOM.projects.list();
})();