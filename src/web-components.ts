import { defineCustomElement } from "vue";
import Project from "./Project.vue";

const ProjectCe = defineCustomElement(Project, {shadowRoot: false});
customElements.define('ce-project', ProjectCe)