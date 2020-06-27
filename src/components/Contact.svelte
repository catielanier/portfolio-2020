<script>
  import axios from "axios";
  export let ip;
  export let block;
  let name = "";
  let email = "";
  let message = "";
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .email {
    font-family: "Comfortaa", sans-serif;
    font-size: 1.7rem;
    margin-top: 35px;
  }
  .contact-gap {
    margin-top: 35px;
    max-width: 165px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .contact-gap div img {
    width: 100%;
  }
  input,
  textarea {
    width: 100%;
    background: #252835;
    color: #fff;
    border: 0;
    border-radius: 5px;
    border-bottom: 2px solid #0557a3;
    font-family: "Arvo", serif;
    font-size: 1.8rem;
    transition: 0.5 all ease-in-out;
  }
  input:focus,
  textarea:focus {
    border-bottom: 2px solid #b3cde0;
  }
  input::placeholder,
  textarea::placeholder {
    color: #fff;
  }

  button {
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #b3cde0;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    font-family: "Comfortaa", serif;
    font-size: 1.6rem;
    border: 0;
    background: #252835;
    font-weight: bold;
    border-radius: 0;
  }

  button:hover {
    background: #b3cde0;
    color: #252835;
    box-shadow: 0 0 5px #b3cde0, 0 0 25px #b3cde0, 0 0 50px #b3cde0,
      0 0 200px #b3cde0;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #252835);
  }

  button span {
    position: absolute;
    display: block;
  }

  button span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #b3cde0);
    animation: animate1 1s linear infinite;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #b3cde0);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
  button span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #b3cde0);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #b3cde0);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

  textarea {
    resize: none;
  }

  @media (max-width: 414px) {
    .grid-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr;
      grid-gap: 0;
    }
  }
</style>

<section id="contact">
  <h2>Contact</h2>
  <p>
    Let's create internet masterpieces together! If you want to hire or
    commission me for work, please contact me in one of the ways below.
  </p>
  <div class="grid-container">
    <div>
      <p class="email">Email: iam@coreylanier.com</p>
      <div class="contact-gap">
        <div>
          <a href="https://github.com/lanierc" target="_blank">
            <img src="assets/github.png" alt="Github" />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/cwlanier" target="_blank">
            <img src="assets/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a
            href="https://www.upwork.com/freelancers/~0136715eaa3911f2ac"
            target="_blank">
            <img src="assets/upwork.png" alt="Upwork" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/cwlanier" target="_blank">
            <img src="assets/twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
    <div>
      {#if !block}
        <form action="https://formcarry.com/s/XrxTmMSz33Ei" method="POST">
          <input
            type="text"
            name="name"
            bind:value={name}
            required
            placeholder="Your name" />
          <input
            type="email"
            name="email"
            bind:value={email}
            required
            placeholder="Email address" />
          <textarea
            placeholder="Your message"
            name="message"
            bind:value={message}
            required
            cols="30"
            rows="10" />
          <input type="hidden" name="ip" bind:value={ip} />
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Send email
          </button>
        </form>
      {/if}
    </div>
  </div>
</section>
