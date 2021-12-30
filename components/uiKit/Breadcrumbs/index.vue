<template>
  <div class="breadcrumbs-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        class="test" 
        v-for='(item, index) in items' 
        :key='index'
        :to="{ path: item.link}"
      >
        {{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
  }
</script>

<style lang="scss">
  .el-breadcrumb__inner.is-link {
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    text-decoration-line: underline!important;
    color: var(  --breadcrumb-color)!important;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: var(--breadcrumb-color-active)!important;
  }
  .breadcrumbs-wrapper {
    margin-top: 44px;
    margin-bottom: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 16px;
    @media screen and (min-width: 768px) {
      padding: 0;
      margin-top: 132px;
      margin-bottom: 45px;
      justify-content: center;
    }
  }
</style>