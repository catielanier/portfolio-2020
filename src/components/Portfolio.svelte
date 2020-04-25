<script>
  const portfolioPieces = [
    {
      title: "NoteZ",
      tools: "React / Material UI / Hooks / i18n / Node.js / Express / MongoDB",
      description:
        "This note app is designed for the storage and retrieval of notes meant for specific scenarios, such as matchups within competitive gaming. You are also able to further filter the notes based on specified data, so as to make them easier to read.",
      previewLink: "https://checkthenotez.com",
      githubRepo: "notez",
      imageName: "notez"
    },
    {
      title: "Vue Blog",
      tools: "Vue / Node.js / Express / MongoDB",
      description:
        "A Vue full stack app that I built to create a simple content management system and frontend for a blog. It allows for new user creation, user admin to create multiple authors, posting and commenting.",
      previewLink: "https://blog.coreylanier.com",
      githubRepo: "vue-blog",
      imageName: "blog"
    },
    {
      title: "Name Changer",
      tools: "React / API / Node.js / Express / Firebase",
      description:
        "A web app I created for iCademy Middle East that utilizes the Canvas LMS API to allow teachers to rename their course items in bulk by automating the renaming process. It features a Node.js proxy server to handle updating the data on the Canvas API, and a Firebase to track and undo changes.",
      previewLink: "https://icad-name-changer.now.sh",
      githubRepo: "name-changer",
      imageName: "name-changer"
    },
    {
      title: "Stream This",
      tools: "React / Sass / API",
      description:
        "This app is able to find available live streams on the Twitch service, and list them on your page by most popular, and allow you to click through to the stream. It also works around Twitch's limtations on maximum API calls per minute.",
      previewLink: "https://coreylanier.com/twitchfinder",
      githubRepo: "twitch_app_project5",
      imageName: "twitch"
    },
    {
      title: "Maxshop",
      tools: "HTML / Sass / jQuery",
      description:
        "A simple PSD wireframe conversion I made during bootcamp. This shows off great usage of Flexbox and CSS Grid which helps to maintain viewability on responsive design.",
      previewLink: "https://maxshop.coreylanier.com",
      githubRepo: "corey_lanier_project2",
      imageName: "maxshop"
    }
  ];
</script>

<style>
  h3 {
    font-family: "Comfortaa", sans-serif;
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 0;
  }
  .grid-container {
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 35px;
  }
  p.tools {
    margin-top: 0;
    font-size: 1.5rem;
    color: #b3cde0;
  }
  .link {
    font-family: "Arvo", serif;
    font-size: 2rem;
    margin-bottom: 25px;
  }
  .link a {
    text-decoration: underline;
    color: #0557a3;
  }
  span {
    color: #fff;
    transition: all 0.5s ease-in-out;
  }

  .link a:hover span {
    color: #0557a3;
  }
</style>

<section id="portfolio">
  <h2>Portfolio</h2>
  {#each portfolioPieces as piece, index}
    <div class="grid-container" key={index}>
      <div>
        <h3>{piece.title}</h3>
        <p class="tools">{piece.tools}</p>
        <p>{piece.description}</p>
        <div class="link">
          <a href={piece.previewLink} target="_blank">
            <span>View the project online.</span>
          </a>
        </div>
        <div class="link">
          <a
            href={`https://github.com/lanierc/${piece.githubRepo}`}
            target="_blank">
            <span>View the source code.</span>
          </a>
        </div>
      </div>
      <div />
    </div>
  {/each}
</section>
