<template>
    <div>
        <div class="container-fluid pt-7">
          <h2 class="text-black">Welcome Alice Wambui</h2>
          <span style="font-size:0.8em">Here is what has been happening in the last 7 days</span>
        </div>
        <div class="container-fluid pb-6 pb-8 pt-3 pt-md-3">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total messages sent"
                                type="purple"
                                sub-title="5,000"
                                icon="fa fa-mouse-pointer fa-sm"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-info mr-1">See customers</span>
                            <span>that haven't been sent an invite</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Delivered messages"
                                type="red"
                                sub-title="3,000"
                                icon="fa fa-envelope"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-info mr-1">See customers</span>
                            <span>that have been sent an invite</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Failed messages"
                                type="yellow"
                                sub-title="1,400"
                                icon="fa fa-comment-alt"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-info mr-1">See all customers</span>
                            <span>that failed to receive the message</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="pending messages"
                                type="teal"
                                sub-title="600"
                                icon="fa fa-exclamation-circle"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-info mr-1">See customers</span>
                            <span>that have pending messages</span>
                        </template>
                    </stats-card>
                </div>
            </div><!--  end row 1 -->

            <div class="row mt-4">
              <div class="col-xl-3 col-lg-6">
                <medium-card
                            icon="ni ni-active-40"
                            class="mb-4 mb-xl-0"
                            style="height:320px"
                >
                    <template slot="card-content" >
                        <h3 class="card-title text-black mb-1">CREDIT BALANCE</h3>      
                        <center>
                          <div class="icon rounded-circle mt-4 pt-3 shadow d-flex justify-content-center bg-light_blue"
                              style="width:50px; height:50px">
                            <i class="fa fa-wallet text-teal"
                            style="font-size: 1.5em;"></i>
                          </div>
                          <br/>
                          <span class="h1 text-black">200,000</span> <br/>
                          <span class="h6 text-black mt-3">Available credit balance</span>
                        </center>
                    </template>

                    <template slot="card-button">
                        <button class="btn btn-info btn-sm" style="width:150px; height:35px; margin-left:7%; margin-top:20px;">Buy Bundles</button>
                    </template>

                </medium-card>
              </div> 

              <div class="col-xl-9 col-lg-6">
                <!-- <card header-classes="bg-transparent" > -->
                <card header-classes="bg-transparent" style="height:320px">

                    <div class="row d-flex justify-content-between px-3 mb-2">
                      <span class="text-dark h5">REPORTS</span>
                      <span class="text-teal h5">Total SMS sent per transactions</span>
                      
                      <div class="dropdown">
                        <button class="btn btn-sm btn-light_blue dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-calendar text-info"></i> Month
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                    
                    <bar-chart
                            :height="250"
                            ref="barChart"
                            :chart-data="tinggBarChart.chartData"
                            :extra-options="tinggBarChart.extraOptions"
                    >
                    </bar-chart>
                </card>
              </div>

            </div> <!-- end row 2 -->


        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  // import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // // Tables
  // import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  // import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      // LineChart,
      BarChart,
      // PageVisitsTable,
      // SocialTrafficTable,
    },
    data() {
      return {
        // bigLineChart: {
        //   allData: [
        //     [0, 20, 10, 30, 15, 40, 20, 60, 60],
        //     [0, 20, 5, 25, 10, 30, 15, 40, 40]
        //   ],
        //   activeIndex: 0,
        //   chartData: {
        //     datasets: [],
        //     labels: [],
        //   },
        //   extraOptions: chartConfigs.blueChartOptions,
        // },
        tinggBarChart: {
          chartData: {
            // labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: [
              ['01',"Jan"],
              ['24',"Jan"],
              ['03',"Feb"],
              ['14',"Feb"],
              ['05',"Mar"],
              ['16',"Mar"],
              ['09',"Apr"],
              ['28',"Apr"],
              ['09',"May"],
              ['10',"Jun"],
              ['19',"Jun"],
              ['20',"Aug"],
              ['30',"Aug"],
            ],
            datasets: [{
              label: 'Pending messages',
              backgroundColor: "#22B0E5",
              barThickness: 6,
              data: [2100, 1100, 1700, 1000, 2100, 1500, 1500, 1200, 2100, 1200, 1700, 1000, 3100]
            },{
              label: 'Failed messages',
              backgroundColor: "#F7B747",
              barThickness: 6,
              data: [1100, 600, 1400, 500, 1200, 600, 500, 500, 1100, 500, 1400, 500, 0]
            },{
              label: 'Delivered messages',
              backgroundColor: "#DA191F",
              barThickness: 6,
              data: [1800, 2000, 2100, 2700, 1200, 2400, 2400, 2100, 1800, 2200, 2000, 1700, 1200]
            }],
          },

          extraOptions: chartConfigs.stackedChartOptions,

        }
      };
    },
    methods: {
      // initBigChart(index) {
      //   let chartData = {
      //     datasets: [
      //       {
      //         label: 'Performance',
      //         data: this.bigLineChart.allData[index]
      //       }
      //     ],
      //     labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      //   };
      //   this.bigLineChart.chartData = chartData;
      //   this.bigLineChart.activeIndex = index;
      // }
    },
    mounted() {
      // this.initBigChart(0);
    }
  };
</script>
<style></style>
