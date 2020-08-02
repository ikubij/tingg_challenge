<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
      <tr>
        <slot name="columns" :columns="columns">
          <th v-for="column in columns" :key="column.title">

            <div class="row " v-if="column.sortable" @click="sortTable(column.title)">
              <span> {{ column.name }} </span>

              <div class="ml-3">
                <div class="row">
                  <i class="fa fa-caret-up"></i>
                </div>
                <div class="row mt--1">
                  <i class="fa fa-caret-down"></i>
                </div>
              </div>
            </div>

            <div class="row " v-else>
              <span> {{ column.name }} </span>
            </div>

          </th>
        </slot>
      </tr>
    </thead>

    <tbody :class="tbodyClasses">
      <tr v-for="(row, index) in data.slice(startShowingAt, showRows)" :key="index">

        <!-- Loop using column, then use column title to get item from row -->
        <td v-for="(column, index) in columns" :key="index">
            <span v-html="itemValue(row, column.title) "></span>
        </td>

        <!-- <td v-for="(item, index) in row" :key="index">
          <span v-html="item"></span>
          <span v-html="itemValue(row, index) "></span>
        </td> -->

      </tr>
    </tbody>

  </table>
</template>
<script>
export default {
  name: 'base-table',
  props: {
    showRows: {
      type: Number,
      description: 'Number of items to show on table'
    },
    startShowingAt: {
      type: Number,
      description: 'First Item on table index'
    },
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
  },
  methods: {
    itemValue(row, title) {
      return row[title.toLowerCase()];
    },
    sortTable(sortTitle){
      alert("Sort by: "+sortTitle)
    }
  }
};
</script>
<style scoped lang="scss">
// thead tr { position: sticky; top: 0; }
</style>
