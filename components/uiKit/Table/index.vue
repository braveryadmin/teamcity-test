<template>
  <div>
    <el-table
      class="table"
      :data="tableData"
      :show-header="showHeader"
      row-class-name='table-row'
      header-cell-class-name='header-cell'
      cell-class-name='cell'
      v-bind="$attrs"
      style="width: 100%">
      <slot name="columns">
        <el-table-column
          v-for="column in columns"
          :key="column.prop"
          v-bind="column"
          >
          <template slot-scope="{row}">
            <slot :name="column.prop || column.type || column.label" :row="row">
              <template v-if="typeof row[column.prop] === 'string'">
                {{ row[column.prop] }}
              </template>
              <template v-else>
                <div class="table-media-col">
                  <div class="table-media-col__text">{{ row[column.prop].value }}</div>
                  <template v-if="Array.isArray(row[column.prop].images)">
                    <div class="table-media-col__images">
                      <img
                        v-for="(img, i) in row[column.prop].images"
                        :key="i"
                        :src="img"
                        class="table-media-col__images-item"
                      />
                    </div>
                  </template>
                </div>
              </template>
            </slot>
          </template>
        </el-table-column>
      </slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  inheritAttrs: false,
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      tableData: [],
      loading: false
    };
  },
};
</script>

<style lang='scss'>
  .el-table::before {
    height: 0!important;
  }
  .el-table tr {
    background-color: var(--table-bg) !important;
  }
  .el-table th.el-table__cell {
    background-color: var(--table-bg) !important;
  }
  .table {
    background-color: var(--table-bg) !important;
    border-radius: 20px;
    padding: 20px;
  }
  .table-row {
    background-color: var(--table-bg) !important;
    & > .cell {
      font-size: 18px;
      line-height: 28px;
      color: var(--table-row-cell-color);
      padding-left: 0px!important;
      border-color: var(--table-row-cell-border) !important;
    }
    & > .cell:first-child {
      color: var(--table-row-first-cell-color) !important;
    }
    &:hover > td {
      background-color: initial !important;
    }
  }
  .table-row:last-child {
    & > .cell {
      border-bottom: none!important;
    }
  }
  .header-cell {
    padding-left: 0px;
    border-color: var(--table-header-cell-border) !important;
    & > .cell {
      color: var(--table-header-cell-color) !important;
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 156%;
    }
  }

  .table-media-col__text {
    margin-right: 10px;
  }
  .table-media-col__images-item {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
</style>