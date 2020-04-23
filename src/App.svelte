<script>
  import MenuBar from "./components/MenuBar.svelte";
  const languageGreetings = [
    {
      text: "Hello all",
      lang: "en"
    },
    {
      text: "大家好",
      lang: "zh"
    },
    {
      text: "여러분 안녕하세요",
      lang: "ko"
    },
    {
      text: "皆さんこんにちは",
      lang: "ja"
    },
    {
      text: "Saluton al ĉiuj",
      lang: "eo"
    }
  ];
</script>

<style>
  h1 {
    color: #ff3e00;
    font-family: "Comfortaa", sans-serif;
    text-transform: uppercase;
    font-size: 5rem;
    height: 5.1rem;
  }
</style>

<div>
  <MenuBar />
  <h1>
    <div id="typed-strings">
      {#each languageGreetings as greeting}
        <p class={`greeting-{greeting.lang}`}>{greeting.text}!</p>
      {/each}
    </div>
    <span id="typed" />
  </h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</div>
