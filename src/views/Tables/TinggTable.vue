<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="data"
                  :columns="columns">
                  
      </base-table>
    </div>

    <div class="card-footer mb-6 row d-flex justify-content-end bg-transparent"
         :class="type === 'dark' ? 'bg-transparent': ''">

      <span class="mr-1"> Show Rows: </span>
      <select class="rounded border-0 pt-1 shadow d-flex justify-content-center bg-lighter"
          style="width:50px; height:25px ">
        <option>25</option>
        <option>50</option>
        <option>100</option>
        <option>250</option>
        <option>500</option>
      </select>
      <!-- end section 1 -->

      <span class="mr-1 ml-4">  Go To: </span>
      <input class="rounded border-0  shadow d-flex justify-content-center bg-lighter"
        style="width:50px; height:25px border:0" value="100 |"/>
      
      <span class="mr-1 ml-4">  1 - 25 of 522</span>

      <div class="ml-3 rounded pt-1 shadow d-flex justify-content-center bg-lighter"
        style="width:30px; height:30px">
        <i class="fa fa-angle-left text-dark" style="font-size: 1.5em;"></i>
      </div>
      <div class=" rounded pt-1 shadow d-flex justify-content-center bg-lighter"
        style="width:30px; height:30px">
        <i class="fa fa-angle-right text-dark" style="font-size: 1.5em;"></i>
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    name: 'ting-table',
    props: {
      type: {
        type: String
      },
      title: String,
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
    },
    data() {
      return {
        tableData: [
          {
            img: 'img/theme/bootstrap.jpg',
            title: 'Argon Design System',
            budget: '$2500 USD',
            status: 'pending',
            statusType: 'warning',
            completion: 60
          },
          {
            img: 'img/theme/angular.jpg',
            title: 'Angular Now UI Kit PRO',
            budget: '$1800 USD',
            status: 'completed',
            statusType: 'success',
            completion: 100
          },
          {
            img: 'img/theme/sketch.jpg',
            title: 'Black Dashboard',
            budget: '$3150 USD',
            status: 'delayed',
            statusType: 'danger',
            completion: 72
          },
          {
            img: 'img/theme/react.jpg',
            title: 'React Material Dashboard',
            budget: '$4400 USD',
            status: 'on schedule',
            statusType: 'info',
            completion: 90
          },
          {
            img: 'img/theme/vue.jpg',
            title: 'Vue Paper UI Kit PRO',
            budget: '$2200 USD',
            status: 'completed',
            statusType: 'success',
            completion: 100
          }
        ]
      }
    }
  }
</script>
<style>

</style>
