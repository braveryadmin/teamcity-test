<template>
  <div class="card">
    <div class="card-header" :style="{ backgroundImage: `url(${img})` }">
      <div class="card-tip">{{tip}}</div>
    </div>
    <div class="card-body">
      <h4 class="head">
        {{title}}
      </h4>
      <div class="card-description">
        {{description}}
      </div>
    </div>
    <div class="card-footer">
      <span class="card-footer-date">
        {{date}}
      </span>
      <span class="card-footer-dot">
        ·
      </span>
      <span class="card-footer-readtime">
        <clock class="card-footer-readtime-icon"/> {{readtime}} min read
      </span>
    </div>
  </div>
</template>

<script>
import Paragraph from '../../uiKit/Paragraph'
import clock from '~/assets/icons/Clock.vue'

export default {
  name: "blog-card",
  props: ['tip', 'img', 'title', 'description', 'date', 'readtime'],
  components: {
    Paragraph,
    clock
  },
  data() {
    return {
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    max-width: 588px;
    cursor: pointer;
    &-header {
      position: relative;
      margin-bottom: 20px;
      background: var(--blog-card-bg);
      border-radius: 20px;
      height: 331px;
      background-position: center;
      background-repeat: no-repeat;
      .card-tip {
        color: var(--blog-card-tip-color);
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 14px;
        line-height: 14px;
        padding: 5px 6px;
        background: var(--blog-card-tip-bg);
        border-radius: 5px;
      }
    }
    &-body {
      margin-bottom: 16px;
      .head {
        color: var(--blog-card-title-color);
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        margin-bottom: 12px;
      }
    }
  }
  .card-description {
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: var(--blog-card-text-color);
  }
  .card-footer {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: var(--blog-card-footer-text-color);
  }
  .card-footer-dot {
    margin-right: 11px;
    margin-left: 9px;
  }
  .card-footer-readtime-icon {
    margin-bottom: -2px;
  }
</style>