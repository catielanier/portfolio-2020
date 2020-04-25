<script>
  import MenuBar from "./components/MenuBar.svelte";
  import Header from "./components/Header.svelte";
  import Skills from "./components/Skills.svelte";
  import Portfolio from "./components/Portfolio.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import Blog from "./components/Blog.svelte";
  import { onMount } from "svelte";
  import axios from "axios";
  let posts = [];
  let ip;
  onMount(async () => {
    const blogPosts = [];
    const res = await axios({
      url: "http://proxy.hackeryou.com",
      method: "GET",
      dataType: "json",
      params: {
        reqUrl: "https://blog.coreylanier.com/api/posts"
      }
    });
    res.data.data.forEach(item => {
      blogPosts.push(item);
    });
    posts = blogPosts;
    const resIp = await axios.get("https://api.ipify.org?format=json");
    const userIp = resIp.data.ip;
    ip = userIp;
  });
</script>

<MenuBar />
<Header />
<main>
  <Skills />
  <Portfolio />
  <Blog {posts} />
  <Contact {ip} />
</main>
<Footer />
