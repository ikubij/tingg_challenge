<template>
    <div>
        <!-- <div class="container-fluid pt-7">
          <h2 class="text-black">Welcome Alice Wambui</h2>
          <span style="font-size:0.8em">Get familiar with the dashboard. Here are some ways to get started</span>
        </div> -->
        <div class="container-fluid pt-8">
            <!-- Card stats -->
            <div class="row d-flex">
                <div class="col-xl-4 col-lg-4" style="margin:auto">
                    <medium-card
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                                style="height:250px"
                    >
                        <template slot="card-content" >
                            <center>
                              <h2 class="card-title text-black mb-1">Coming Soon! </h2>     
                              <br/> 
                              <img src="img/illustrations/under_cons.svg" style="width:auto; height:100px"/> <br/>
                            </center>
                        </template>

                        <template slot="card-button">
                            <center>
                              <br/>
                            <span class="h5 text-black mb-0">Page under construction</span>
                            </center>
                        </template>

                    </medium-card>
                </div>
                
            </div>
            <!-- end row 1 -->

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
