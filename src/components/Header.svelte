<script>
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
    font-family: "Comfortaa", sans-serif;
    font-size: 8.5rem;
    height: 8.6rem;
  }

  header {
    margin-top: 120px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    align-items: center;
  }
  img {
    width: 100%;
    border-radius: 50%;
    transform: rotateZ(-15deg);
  }
  .header-image {
    border-radius: 45%;
  }
</style>

<header id="#home">
  <div>
    <h1>
      <div id="typed-strings">
        {#each languageGreetings as greeting}
          <p class={`greeting-${greeting.lang}`} key={greeting.lang}>
            {greeting.text}!
          </p>
        {/each}
      </div>
      <span id="typed" />
    </h1>
    <p>
      Hello, my name is Corey Lanier, and I am a multilingual (English,
      Mandarin, Korean, Japanese, Esperanto) web developer based in Toronto. I
      am a graduate of HackerYou's Web Development Immersive, and am completely
      fluent in Front End and Full Stack development.
    </p>
    <p>
      I have a deep passion for writing clean Javascript, and React and Vue.js
      are two of my favourite frameworks to work in. I also enjoy learning and
      teaching new technologies and frameworks that help make designs more
      effective and user friendly.
    </p>
    <p>
      Before starting my career in tech, I lived in China and South Korea for 5
      years teaching English as a Second Language, and am leveraging my
      interpersonal and communication skills to develop clean code. Alongside
      knowledge and skills, I bring curiosity, enthusiasm, and a whole lot of
      care to everything I do.
    </p>
  </div>
  <div>
    <div class="header-image">
      <img src="../assets/corey.jpg" alt="Corey Lanier" />
    </div>
  </div>
</header>
