<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
      <tr>
        <slot name="columns" :columns="columns">
          <th v-for="column in columns" :key="column.title">
            <div class="row ">
              <span> {{ column.name }} </span>

              <div v-if="column.sortable" class="ml-3">
                <div class="row">
                  <i class="fa fa-caret-up"></i>
                </div>
                <div class="row mt--1">
                  <i class="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
          </th>
        </slot>
      </tr>
    </thead>

    <tbody :class="tbodyClasses">
      <tr v-for="(row, index) in data" :key="index">

        <!-- <slot :row="item" :index="index"> -->
          <!-- <td
            v-for="(column, index) in colsWithValue(item)"
            :key="index">
            {{ itemValue(item, column) }}
          </td> -->

          <td v-for="(item, index) in row" :key="index">
            <span v-html="item"></span>
          </td>
      </tr>
    </tbody>
      
    <!-- <tfoot colspan="5" >
      <tr>
        <slot name="columns" :columns="columns">
          <th v-for="column in columns" :key="column.title">
            <div class="row ">
              <span> {{ column.name }} </span>

              <div v-if="column.sortable" class="ml-3">
                <div class="row">
                  <i class="fa fa-caret-up"></i>
                </div>
                <div class="row mt--1">
                  <i class="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
          </th>
        </slot>
      </tr>
    </tfoot> -->

  </table>
</template>
<script>
export default {
  name: 'base-table',
  props: {
    columns: {
      type: Array,
      default: () => [],
      description: 'Table columns'
    },
    data: {
      type: Array,
      default: () => [],
      description: 'Table data'
    },
    type: {
      type: String, // striped | hover
      default: '',
      description: 'Whether table is striped or hover type'
    },
    theadClasses: {
      type: String,
      default: '',
      description: '<thead> css classes'
    },
    tbodyClasses: {
      type: String,
      default: '',
      description: '<tbody> css classes'
    }
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`;
    },
    colsWithValue() {
      return (row) => {
        return this.columns.filter(column => this.hasValue(row, column))
      }
    }
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== 'undefined';
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
};
</script>
<style scoped lang="scss">
// thead tr { position: sticky; top: 0; }
</style>
