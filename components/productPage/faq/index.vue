<template>
  <div class="faq-wrapper container">
    <h1 class="faq-title">FAQ</h1>
    <faq-accordion
      :items="myItems"
    />
  </div>
</template>

<script>
import FaqAccordion from '../../uiKit/FaqAccordion'

export default {
  name: 'Monitoring',
  components:{
    FaqAccordion
  },
  props: {
    
  },
  data() {
    return {
      myItems: [
          {
            title: 'How do you get BTC?',
            value: 'At its core, Bitcoin is a distributed ledger used to record transactions between users. This ledger is stored on thousands of computer systems around the world.\n\rUnlike a traditional transaction ledger, no central authority controls Bitcoin. Instead, computer systems, known as miners, compete to solve a computationally intensive task. Whichever miner solves the task first can add a block of transactions to the blockchain. After each block is added, miners compete again for the right to add the next block.\n\rKnown as proof-of-work, this mining process ensures that all participants converge on a single transaction history — without reliance on a central authority.',
          },
          {
            title: 'How does Bitcoin work?',
            value: 'At its core, Bitcoin is a distributed ledger used to record transactions between users. This ledger is stored on thousands of computer systems around the world.\n\rUnlike a traditional transaction ledger, no central authority controls Bitcoin. Instead, computer systems, known as miners, compete to solve a computationally intensive task. Whichever miner solves the task first can add a block of transactions to the blockchain. After each block is added, miners compete again for the right to add the next block.\n\rKnown as proof-of-work, this mining process ensures that all participants converge on a single transaction history — without reliance on a central authority.',
          },
          {
            title: 'How can I buy Bitcoin?',
            value: 'At its core, Bitcoin is a distributed ledger used to record transactions between users. This ledger is stored on thousands of computer systems around the world.\n\rUnlike a traditional transaction ledger, no central authority controls Bitcoin. Instead, computer systems, known as miners, compete to solve a computationally intensive task. Whichever miner solves the task first can add a block of transactions to the blockchain. After each block is added, miners compete again for the right to add the next block.\n\rKnown as proof-of-work, this mining process ensures that all participants converge on a single transaction history — without reliance on a central authority.',
          },
          {
            title: 'Is Bitcoin legal?',
            value: 'At its core, Bitcoin is a distributed ledger used to record transactions between users. This ledger is stored on thousands of computer systems around the world.\n\rUnlike a traditional transaction ledger, no central authority controls Bitcoin. Instead, computer systems, known as miners, compete to solve a computationally intensive task. Whichever miner solves the task first can add a block of transactions to the blockchain. After each block is added, miners compete again for the right to add the next block.\n\rKnown as proof-of-work, this mining process ensures that all participants converge on a single transaction history — without reliance on a central authority.',
          },
          {
            title: 'How do you invest in Bitcoin?',
            value: 'At its core, Bitcoin is a distributed ledger used to record transactions between users. This ledger is stored on thousands of computer systems around the world.\n\rUnlike a traditional transaction ledger, no central authority controls Bitcoin. Instead, computer systems, known as miners, compete to solve a computationally intensive task. Whichever miner solves the task first can add a block of transactions to the blockchain. After each block is added, miners compete again for the right to add the next block.\n\rKnown as proof-of-work, this mining process ensures that all participants converge on a single transaction history — without reliance on a central authority.',
          }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
 .faq-title {
    text-align: center;
    margin-bottom: 60px;
    
    @media screen and (min-width: 768px) {
      margin-bottom: 84px;
    }
 }
</style>
