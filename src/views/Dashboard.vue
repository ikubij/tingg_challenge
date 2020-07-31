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
                            style="height:300px"
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
            </div> <!-- end row 2 -->

        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  // import LineChart from '@/components/Charts/LineChart';
  // import BarChart from '@/components/Charts/BarChart';

  // // Tables
  // import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  // import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      // LineChart,
      // BarChart,
      // PageVisitsTable,
      // SocialTrafficTable,
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
