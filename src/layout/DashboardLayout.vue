<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-black',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Messages', icon: 'fa fa-envelope-open text-black', path: '/messages'}"/>
        <sidebar-item :link="{name: 'Contacts', icon: 'fa fa-users text-black', path: '/dashboard2'}"/>
        <sidebar-item :link="{name: 'Accounts', icon: 'fa fa-folder text-black', path: '/accounts'}"/>
        <sidebar-item :link="{name: 'Credits', icon: 'fa fa-wallet text-black', path: '/credits'}"/>
        <sidebar-item :link="{name: 'Reports', icon: 'fa fa-signal text-black', path: '/reports'}"/>
        <sidebar-item :link="{name: 'Contact Us', icon: 'fa fa-at text-black', path: '/contact_us'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
          
        </fade-transition>
        <fab 
          :actions="fabActions"
          :bg-color="bgColor"
          :main-icon="icon"
          :icon-size="iconSize"
          @cache="cache"
          @alertMe="alert"
        ></fab>
        <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  // import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  import fab from 'vue-fab'

  export default {
    components: {
      DashboardNavbar,
      // ContentFooter,
      FadeTransition,
      fab
    },
    data() {
      return {
        sidebarBackground: 'vue', //vue|blue|orange|green|red|primary
        //fab data
        bgColor: '#22B0E5',
        icon: 'question_answer',
        iconSize: 'small',
        position: 'top-right',
        fabActions: [
            {
                name: 'cache',
                icon: 'cached',
                color:""
            },
            {
                name: 'alertMe',
                icon: 'add_alert'
            }
        ]
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      },
      cache(){
          console.log('Cache Cleared');
      },
      alert(){
          alert('Clicked on alert icon');
      }
    }
  };
</script>
<style lang="scss">
</style>
