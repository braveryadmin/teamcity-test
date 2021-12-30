<template>
  <body vs-theme="dark">
    <div id="app" class="index" style="overflow-x: hidden;">
      <Header />
      <breadcrumbs :items="breadcrumbs"/> 
      <h1 class="blog-title">Beaver Dealer Blog</h1>
      <blog-list/>
      <Footer />
    </div>
  </body>
</template>

<script>
import Header from "../components/indexPage/Header";
import Footer from "../components/indexPage/Footer";
import BlogList from '../components/blogPage/blogList';
import Breadcrumbs from '../components/uiKit/Breadcrumbs';

export default {
  name: "blog",
  components: {
    Header,
    Footer,
    BlogList,
    Breadcrumbs
  },
  data() {
    return {
      width: null,
      breadcrumbs: [
        {
          link: '/',
          name: 'Home'
        },
        {
          name: 'Blog'
        },
      ],
    }
  },
  methods: {
    updateWidth() {
      if (process.browser){
        this.width = window.innerWidth
        console.log('window', this.width)
      }
    },
  },
  created() {
    if (process.browser){
      window.addEventListener('resize', this.updateWidth)
      this.updateWidth()
    }
  },
  beforeMount: () => {
    // themeSwitcher();
  },
  head: {
    title: "Beaver Dealer. Blog.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "There will be a superfast cryptocurrency exchanger with KYC and transparent commissions."
      }
    ]
  }
}
</script>

<style lang="scss">
  .blog-title {
    margin: 0;
    margin-top: 45px;
    font-weight: bold;
    text-align: center;
  }
</style>