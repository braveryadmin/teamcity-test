<template>
  <div class="blog-wrapper container">
    <div class="blogMostPopular">
      <card v-for='(article, index) in articles' :key='index'
        v-if="index < 2"
        :tip='article.tip'
        :title='article.title'
        :description='article.desc'
        :date='article.date'
        :readtime='article.readtime'
        :img='article.img'
      />
    </div>
    <div class="blogRecent">
      <card v-for='(article, index) in articles' :key='index'
        v-if="index >= 2"
        :tip='article.tip'
        :title='article.title'
        :description='article.desc'
        :date='article.date'
        :readtime='article.readtime'
        :img='article.img'
      />
    </div>
    <learn-more-block/>
  </div>
</template>

<script>
import Card from '../blogCard'
import LearnMoreBlock from '../../uiKit/LearnMoreBlock'
export default {
  name: "blog",
  components: {
    Card,
    LearnMoreBlock
  },
  data() {
    return {
      articles: [
        {
          tip: 'Defi',
          title: 'Types of DeFi, their pros and cons',
          desc: 'Lately, decentralized finance or DeFi has been one of the game changers in the blockchain space… ',
          date: '15 Nov',
          img: '/_nuxt/assets/images/book.png',
          readtime: '10'
        },
        {
          tip: 'Defi',
          title: 'Types of DeFi, their pros and cons',
          desc: 'Lately, decentralized finance or DeFi has been one of the game changers in the blockchain space… ',
          date: '15 Nov',
          img: '/_nuxt/assets/images/book.png',
          readtime: '10'
        },
        {
          tip: 'Defi',
          title: 'Types of DeFi, their pros and cons',
          desc: 'Lately, decentralized finance or DeFi has been one of the game changers in the blockchain space… ',
          date: '15 Nov',
          img: '/_nuxt/assets/images/book.png',
          readtime: '10'
        },
        {
          tip: 'Defi',
          title: 'Types of DeFi, their pros and cons',
          desc: 'Lately, decentralized finance or DeFi has been one of the game changers in the blockchain space… ',
          date: '15 Nov',
          img: '/_nuxt/assets/images/book.png',
          readtime: '10'
        },
        {
          tip: 'Defi',
          title: 'Types of DeFi, their pros and cons',
          desc: 'Lately, decentralized finance or DeFi has been one of the game changers in the blockchain space… ',
          date: '15 Nov',
          img: '/_nuxt/assets/images/book.png',
          readtime: '10'
        },
        {
          tip: 'Defi',
          title: 'Types of DeFi, their pros and cons',
          desc: 'Lately, decentralized finance or DeFi has been one of the game changers in the blockchain space… ',
          date: '15 Nov',
          img: '/_nuxt/assets/images/book.png',
          readtime: '10'
        }
      ]
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  .blog-wrapper {
    margin-top: 64px;
    margin-bottom: 96px;
    @media screen and (min-width: 768px) {
      margin-top: 88px;
      margin-bottom: 224px;
    }
  }
  .blogMostPopular {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 144px;
    gap: 48px;
    & > div {
      flex-basis: calc(50% - 24px);
    }
    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 55px 24px;
    }
  }
  .blogRecent {
    margin-bottom: 224px;
    grid-template-columns: repeat(4, minmax(265px, 1fr));
    grid-gap: 56px 24px;
    display: grid;
    margin-top: 24px;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (min-width: 768px) {
      overflow-x: unset;
      grid-template-columns: repeat(3, minmax(265px, 1fr));
    }
  }
</style>