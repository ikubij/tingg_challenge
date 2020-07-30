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

        <sidebar-item :link="{name: 'Messages', icon: 'ni ni-planet text-black', path: '/messages'}"/>
        <sidebar-item :link="{name: 'Contacts', icon: 'ni ni-pin-3 text-black', path: '/'}"/>
        <sidebar-item :link="{name: 'Accounts', icon: 'ni ni-single-02 text-black', path: '/'}"/>
        <sidebar-item :link="{name: 'Credits', icon: 'ni ni-bullet-list-67 text-black', path: '/'}"/>
        <sidebar-item :link="{name: 'Reports', icon: 'ni ni-key-25 text-black', path: '/'}"/>
        <sidebar-item :link="{name: 'Contact Us', icon: 'ni ni-circle-08 text-black', path: '/'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
