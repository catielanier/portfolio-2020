import App from "./App.svelte";
import Typed from "typed.js";
import SmoothScroll from "smooth-scroll";

const app = new App({
  target: document.body,
});

const typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
  loopCount: Infinity,
  smartBackspace: true,
});

const voiceOfGodTyped = new Typed("#typedVog", {
  stringsElement: "#voice-of-god",
  typeSpeed: 45,
  backSpeed: 0,
  loop: false
})

const scroll = new SmoothScroll('a[href*="#"]');

export default app;
