import { initRouter } from "./router.js";
import { initFormulario } from "./formulario.js";
import { initProjetos } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initFormulario();
  initProjetos();
});
