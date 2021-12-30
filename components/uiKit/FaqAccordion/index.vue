<template>
<section class="faq" ref="rootEl">
  <div class="faq-wrapper">
    <transition name="accordion-fade-slide" mode="out-in">
      <div v-if="showAccordion" class="accordion">
        <div
          class="accordion__item"
          v-for="(item, i) in items"
          :key="`accordion-item-${i}`"
        >
          <div :class="generateQuestionClasses(i)" @click="makeActive(i)">
            <p class="accordion__title-text" v-html="item[questionProperty]"></p>
            <button :class="generateButtonClasses(i)"></button>
          </div>
            <collapse-transition>
              <div v-if="i === activeQuestionIndex">
                  <div class="accordion__value">
                    <slot v-bind="item">
                      <div v-html="item[answerProperty]"></div>
                    </slot>
                  </div>
              </div>
            </collapse-transition>
        </div>
      </div>
    </transition>
  </div>
</section>
</template>

<script>
  import { CollapseTransition } from 'vue2-transitions'
  export default {
    name: 'VueFaqAccordion',
    components: {
      CollapseTransition
    },
    data () {
      return {
        activeTab: '',
        activeQuestionIndex: null,
        showAccordion: true
      }
    },
    props: {
      /**
       * Array of items
       * Object style {questionProperty: string, answerProperty: string, tabName: string}
       * You can change object keys names using other props (questionProperty, answerProperty, tabName)
       */
      items: {
        type: Array,
        required: true
      },
      /**
       * Key name of object in items array for specifying title of question
       */
      questionProperty: {
        type: String,
        default: 'title'
      },
      answerProperty: {
        type: String,
        default: 'value'
      },
    
    },
    methods: {
      makeActive (itemIndex) {
        this.activeQuestionIndex = this.activeQuestionIndex === itemIndex ? null : itemIndex
        this.$emit('itemSelect', { itemIndex })
      },
      generateButtonClasses (buttonIndex) {
        return [
          'accordion__toggle-button',
          this.activeQuestionIndex === buttonIndex
            ? 'accordion__toggle-button_active'
            : null
        ]
      },
      generateQuestionClasses (questionIndex) {
        return [
          'accordion__title',
          this.activeQuestionIndex === questionIndex
            ? 'accordion__title_active'
            : null
        ]
      },
    },
  }
</script>

<style lang="scss" scoped>
  button {
    border: none;
    background: none;
    outline: none;
  }
  .faq {
    width: 100%;
    &__title {
      text-align: center;
      margin-bottom: 25px;
    }
    &__accordion {
      min-height: 250px;
    }
  }
  .accordion-fade-slide {
    &-enter-active,
    &-leave-active {
      transition: all 0.3s;
    }
    &-enter {
      transform: translateY(-25px);
      opacity: 0;
    }
    &-leave-to {
      transform: translateY(25px);
      opacity: 0;
    }
  }
  .accordion {
    &__item {
      box-sizing: border-box;
      border-radius: 20px;
      background: var(--accordion-bg);
      margin-bottom: 24px;
      
    }
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px;
      cursor: pointer;
      transition: all 0.3s;
      &-text {
        margin-right: 10px;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 156%;
        color: var(--accordion-title-color);
      }
    }
    &__value {
      
      padding: 0 25px 25px 25px;
      text-align: left;
      font-size: 16px;
      line-height: 28px;
      color: var(--accordion-text-color);
      & > div {
        white-space: pre-line;
      }
    }
    &__toggle-button {
      position: relative;
      width: 16px;
      height: 16px;
      transition: all 0.3s;
      transform-origin: 50% 50%;
      padding-left: 16px;
      cursor: pointer;
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        transition: all 0.3s;
        background: var(--accordion-prefix-color);
      }
      &::before {
        transform: rotate(90deg);
      }
    }
  }
</style>