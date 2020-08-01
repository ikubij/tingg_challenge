<template>
    <div>
        <div class="container-fluid ">
          <div class="row pt-7 d-flex justify-content-between">
            <h2 class="text-black">Messages</h2>
            <div class="dropdown">
              <button class="btn btn-sm btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-calendar text-info"></i> 
                Filter by date &nbsp;
                <span class="text-muted h6">Mar 24th</span>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div><!-- end row 1 -->
        </div><!-- end container 1 -->

        <div class="container-fluid bg-white mt-3">
          <div class="row pt-4 nav-row">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" href="#">Quick SMS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Bulk uploads</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link active" href="#">Broadcasts</a>
              </li>
            </ul>
          </div><!-- end row 1 -->

          <div class="row pt-4 px-3 d-flex justify-content-between">
            <div class="row">
              <input class="form-control" placeholder="Search for contact lists/groups" style="width:32rem"/>
              <button class="btn btn-white flex justify-content-around ml-4">
                <span> Filter </span>
                <i class="fa fa-sliders-h"></i>
              </button>
            </div>
            <button class="btn btn-info">
              <i class="fa fa-pen"></i>
              Send Bulk SMS
            </button>
          </div><!-- end row 2 -->

          <!-- Card stats -->
          <div class="row mt-4">
              <div class="col-xl-3 col-lg-6">
                  <stats-card title="Total messages sent"
                              type="purple"
                              sub-title="5,000"
                              icon="fa fa-mouse-pointer fa-sm"
                              class="mb-4 mb-xl-0"
                              cardBackground="light_blue"
                  >
                  </stats-card>
              </div>
              <div class="col-xl-3 col-lg-6">
                  <stats-card title="Delivered messages"
                              type="red"
                              sub-title="3,000"
                              icon="fa fa-envelope"
                              class="mb-4 mb-xl-0"
                              cardBackground="light_blue"
                  >
                  </stats-card>
              </div>
              <div class="col-xl-3 col-lg-6">
                  <stats-card title="Failed messages"
                              type="yellow"
                              sub-title="1,400"
                              icon="fa fa-comment-alt"
                              class="mb-4 mb-xl-0"
                              cardBackground="light_blue"
                  >
                  </stats-card>

              </div>
              <div class="col-xl-3 col-lg-6">
                  <stats-card title="pending messages"
                              type="teal"
                              sub-title="600"
                              icon="fa fa-exclamation-circle"
                              class="mb-4 mb-xl-0"
                              cardBackground="light_blue"
                  >
                  </stats-card>
              </div>
          </div> <!-- end row 3 -->

          <div class="row mt-4">
            <div class="col">
                <tingg-table title="Light Table" :data="data" :columns="columns"></tingg-table>
            </div>
          </div><!-- end row 4 -->

        </div><!-- end container 2-->
    </div><!-- end div main -->
</template>
<script>
  import TinggTable from './Tables/TinggTable'

  export default {
    name: 'tables',
    components: {
      TinggTable,
    },
    data() {
      return {
        columns:[
          { title: "message", name:"Message", sortable:false},
          { title: "shortcode", name:"Shortcode", sortable:false },
          { title: "status", name:"Status", sortable:true },
          { title: "created_by", name:"Created By", sortable:true },
          { title: "send_time", name:"Send Time", sortable:false },
          { title: "schedule_time", name:"Schedule Time", sortable:false },
          { title: "actions", name:"Actions", sortable:false },
          
        ],
        data: this.generateData()
      }
    },//ed data
    
    methods: {
      generateData(){
        let messages=[];
        for(let i=0; i<4; i++){
        // for(let i=0; i<522; i++){
          let message={
            // id : i,
            message: "Testing quick demo",
            shortcode: "Cellulant",
            status: "published",
            created_by: "Sharon Wanjiru",
            send_time: "2020-03-17 11:02",
            schedule_time: "2020-03-17 11:02",
            // actions: "<i class='fa fa-expand-arrows-alt text-teal'></i>"
            actions: `
              <div class="icon rounded pt-1 shadow d-flex justify-content-center bg-light_blue"
                  style="width:30px; height:30px">
                <i class="fa fa-expand-arrows-alt text-teal" style="font-size: 1.5em;"></i>
              </div>
            `
          }

          messages.push(message)
        }

        return messages
      }
    }
  
  };
</script>
<style scoped lang="scss">
.nav-row{
  box-shadow: 0 4px 12px -2px rgba(34, 183, 236, 0.1);
}
.nav.nav-tabs{
  border:none;
  .nav-item{
    margin-right:50px;
    width:150px;
    display: inline-grid;

    .nav-link{
      font-weight: bold;
      border:none;
      margin:auto;
      background-color:white !important;
    }
  }
  .nav-item.active{
    border-bottom: 2px solid #22B0E5;
    .nav-link{
        color: #22B0E5;
    }
  }
}

</style>
