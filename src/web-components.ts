import { defineCustomElement } from "vue";
import Project from "./Project.ce.vue";

const ProjectCe = defineCustomElement(Project, {shadowRoot: false});
customElements.define('ce-project', ProjectCe)