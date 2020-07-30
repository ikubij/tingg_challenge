<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand
              style="background:white"
              >
        <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ">
            <div class="form-group mb-0">
                <base-input placeholder="Search for contact lists/groups"
                            class="input-group-alternative"
                            alternative=""
                            addon-left-icon="fas fa-search"
                            style="box-shadow:none !important"
                            >
                </base-input>
            </div>
        </form>
        <ul class="navbar-nav align-items-center d-none d-md-flex ml-lg-auto">
            <li class="nav-item dropdown">
                <base-dropdown class="nav-item" position="right" style="border-right:0.01em grey solid; border-left:0.01em grey solid">
                    <a slot="title" class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="ni ni-bell-55 text-gray"></i>
                    </a>

                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </base-dropdown>

                <base-dropdown class="nav-item" position="right">
                    <a slot="title" class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="ni ni-bell-55 text-gray"></i>
                    </a>

                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" >Something else here</a>
                </base-dropdown>

                <a href="#">
                  <span  class="text-teal"> Log out </span>
                  <i class="fa fa-power-off text-gray"></i>
                </a>

            </li>
        </ul>
    </base-nav>
</template>
<script>
  export default {
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: ''
      };
    },
    methods: {
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      }
    }
  };
</script>
