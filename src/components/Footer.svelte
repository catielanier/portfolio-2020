<style>
  footer {
    margin: 40px auto 20px;
    width: 100%;
    max-width: 1280px;
    background: #b3cde0;
    font-family: "Neuton", sans-serif;
    font-weight: 700;
    color: #252835;
    font-size: 2rem;
    border-radius: 5px;
    padding: 5px 10px 11.5px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .framework {
    text-align: right;
  }

  a {
    color: #252835;
    text-decoration: underline;
  }

  a span {
    transition: all 0.3s ease-in-out;
  }

  a:hover span {
    color: #fff;
  }

  @media (max-width: 414px) {
    footer {
      width: 90%;
      font-size: 1.8rem;
      padding-bottom: 10px;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
    .framework {
      text-align: left;
    }
  }
</style>

<footer>
  <div class="copyright">© 2020 Corey Lanier, all rights reserved.</div>
  <div class="framework">
    Created using
    <a href="https://svelte.dev" target="_blank">
      <span>Svelte</span>
    </a>
  </div>
</footer>
