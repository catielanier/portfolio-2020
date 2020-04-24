<script>
  import { onMount } from "svelte";
  import axios from "axios";
  onMount(async () => {
    const res = await fetch("https://api.ipify.org?format=json");
    const json = await res.json();
    ip = json.ip;
  });
  let ip;
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
    max-width: 85px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    font-family: "Neuton", serif;
    font-size: 2.4rem;
    border: 0;
    border-radius: 5px;
    padding-bottom: 15px;
    margin-top: 15px;
    background: #b3cde0;
    color: #252835;
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
          <a href="https://github.com/lanierc">
            <img src="assets/github.png" alt="Github" />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/cwlanier">
            <img src="assets/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
    <div>
      <form action="https://formspree.io/iam@coreylanier.com" method="POST">
        <input
          type="text"
          name="name"
          bind:value={name}
          placeholder="Your name" />
        <input
          type="email"
          name="email"
          bind:value={email}
          placeholder="Email address" />
        <textarea
          placeholder="Your message"
          name="message"
          bind:value={message}
          cols="30"
          rows="10" />
        <input type="hidden" name="ip" bind:value={ip} />
        <button type="submit">Send email</button>
      </form>
    </div>
  </div>
</section>
