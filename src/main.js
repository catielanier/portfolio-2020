import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

import Typed from "typed.js";
const typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
  loopCount: Infinity,
  smartBackspace: true,
});

export default app;
