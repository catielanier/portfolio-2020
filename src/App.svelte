<script>
  import MenuBar from "./components/MenuBar.svelte";
  const languageGreetings = [
    "Hello all",
    "大家好",
    "여러분 안녕하세요",
    "皆さんこんにちは",
    "Saluton al ĉiuj"
  ];
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<div>
  <MenuBar />
  <h1>{languageGreetings[0]}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</div>
