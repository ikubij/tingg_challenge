<template>
    <div>
        <div class="container-fluid pt-7">
          <h2 class="text-black">Welcome Alice Wambui</h2>
          <span style="font-size:0.8em">Get familiar with the dashboard. Here are some ways to get started</span>
        </div>
        <div class="container-fluid pb-6 pb-8 pt-3 pt-md-3">
            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-8 col-lg-8">
                    <large-card title="Total traffic"
                                sub-title="Start sending tailored messsages to your customers"
                                icon="ni ni-active-40"
                                illustration="img/illustrations/chat.svg"
                                class="mb-4 mb-xl-0"
                                style="height:250px"
                    >

                        <template slot="card-button" >
                            <br/><br/>
                            <!-- <button class="btn btn-info btn-sm" style="width:150px; height:35px;">Send your first SMS</button> -->
                            <router-link
                              class="btn btn-info btn-sm"
                              style="width:150px; height:35px;"
                              to="messages"
                            >Send your first SMS
                            </router-link>

                        </template>

                    </large-card>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <medium-card
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                                style="height:250px"
                    >
                        <template slot="card-content" >
                            <h3 class="card-title text-black mb-1">Add Contacts lists</h3>      
                            <center>
                              <img src="img/illustrations/podcast.svg" style="width:auto; height:100px"/> <br/>
                            </center>
                            <span class="h6 text-black mb-0">Easily add contact lists or groups and start sending messages to your customers</span>
                        </template>

                        <template slot="card-button">
                            <!-- <button class="btn btn-info btn-sm" style="width:150px; height:35px; margin-left:20%; margin-top:5px;">Add Contacts lists</button> -->
                            <router-link
                              class="btn btn-info btn-sm"
                              style="width:150px; height:35px; margin-left:20%; margin-top:5px;"
                              to="accounts"
                            >Add Contacts lists
                            </router-link>
                        </template>

                    </medium-card>
                </div>
                
            </div>
            <!-- end row 1 -->

            <div class="row pt-4">
                <div class="col-xl-8 col-lg-8">
                    <large-card title="Top Up Credit"
                                sub-title="Easily topup your credit bundle balance and start sending messages to your customers"
                                icon="ni ni-active-40"
                                illustration="img/illustrations/credit_card.svg"
                                class="mb-4 mb-xl-0"
                                style="height:190px"
                    >

                        <template slot="card-button" >
                            <br/>
                            <!-- <button class="btn btn-info btn-sm" style="width:150px; height:35px;">Topup credit</button> -->
                            <router-link
                              class="btn btn-info btn-sm mt-md-4 "
                              style="width:150px; height:35px; "
                              to="credits"
                            >Topup credit
                            </router-link>

                        </template>

                    </large-card>
                </div>
                <div class="col-xl-4 col-lg-4">
                    <medium-card 
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                                style="height:190px"
                    >
                       <template slot="card-content" >
                            <center>
                              <h3 class="card-title text-black mb-1">Credit Balance</h3>      
                              <span style="font-size:2.5em" class="text-dark">200, 000</span> <br/>
                              <span class="h6 text-black mb-0">Available credit balance</span>
                            </center>
                        </template>

                        <template slot="card-button">
                            <!-- <button class="btn btn-info btn-sm" style="width:150px; height:35px; margin-left:20%; margin-top:5px;">Buy bundles</button> -->
                            <router-link
                              class="btn btn-info btn-sm "
                              style="width:150px; height:35px; margin-left:20%; margin-top:5px;"
                              to="credits"
                            >Buy bundles
                            </router-link>
                        </template>

                    </medium-card>
                </div>
                
            </div>
            <!-- end row 2 -->

        </div>

    </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';

  export default {
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
