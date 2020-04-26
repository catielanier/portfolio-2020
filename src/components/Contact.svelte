<script>
  import axios from "axios";
  export let ip;
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
    font-family: "Comfortaa", serif;
    border: 0;
    border-radius: 5px;
    margin-top: 15px;
    background: #b3cde0;
    color: #252835;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px 20px 15px;
    cursor: pointer;
  }

  .hvr-rotate {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-rotate:hover,
  .hvr-rotate:focus,
  .hvr-rotate:active {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
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
      </div>
    </div>
    <div>
      <form action="https://formcarry.com/s/XrxTmMSz33Ei" method="POST">
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
        <button type="submit" class="hvr-rotate">Send email</button>
      </form>
    </div>
  </div>
</section>
