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
            <!-- <li class="nav-item dropdown" style="border-right:0.01em #ccc solid; border-left:0.01em #ccc solid"> -->
            <li class="nav-item dropdown">
                <base-dropdown class="nav-item" position="right" >
                    <a slot="title" class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-bell fa-lg text-gray"></i>
                        <span class="button__badge">2</span>
                    </a>
                    
                    
                    <div class="row d-flex justify-content-between px-4">
                      <b class="text-gray ml-2"> Notifications </b> 
                      <span class="text-teal">Clear all</span>
                    </div>

                    <div class="dropdown-item mt-2" style="width: 18rem;">
                        <div class="row px-2">
                          <div class="col-2 d-flex justify-content-center ">
                            <img class=" rounded-circle " src="img/theme/team-2-800x800.jpg" style="width:40px; height:40px">
                          </div>

                          <div class="col-10">
                            <div class="row">
                              <p class="text-wrap text-sm">Some quick example text to build on the card title...</p>
                            </div>

                            <div class="row d-flex justify-content-between">
                              <span class="text-gray text-sm"> 20 minutes ago</span>
                              <span class="text-teal">Clear</span>
                            </div>
                          </div>
                        </div>
                        
                    </div> <!--  end dropdown item -->
                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item" style="width: 18rem;">
                        <div class="row px-2">
                          <div class="col-2 d-flex justify-content-center ">
                            <img class=" rounded-circle " src="img/theme/team-4-800x800.jpg" style="width:40px; height:40px">
                          </div>

                          <div class="col-10">
                            <div class="row">
                              <p class="text-wrap text-sm">Lorem Ipsum has been the industry's standard...</p>
                            </div>

                            <div class="row d-flex justify-content-between">
                              <span class="text-gray text-sm"> 20 minutes ago</span>
                              <span class="text-teal">Clear</span>
                            </div>
                          </div>
                        </div>
                        
                    </div> <!--  end dropdown item -->
                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item d-flex justify-content-center">
                        <span class="text-teal">View All</span>
                    </div>

                </base-dropdown>

            </li>

            <li class="nav-item dropdown">
                <base-dropdown class="nav-item" position="right">
                    <a slot="title" class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-comment-alt fa-lg text-gray"></i>
                        <span class="button__badge">4</span>
                    </a>
                    
                    <div class="row d-flex justify-content-between px-4">
                      <b class="text-gray ml-2"> Messages </b> 
                      <span class="text-teal">Clear all</span>
                    </div>

                    <div class="dropdown-item mt-2" style="width: 18rem;">
                        <div class="row px-2">
                          <div class="col-2 d-flex justify-content-center ">
                            <img class=" rounded-circle " src="img/theme/team-1-800x800.jpg" style="width:40px; height:40px">
                          </div>

                          <div class="col-10">
                            <div class="row">
                              <p class="text-wrap text-sm">Some quick example text to build on the card title...</p>
                            </div>

                            <div class="row d-flex justify-content-between">
                              <span class="text-gray text-sm"> 20 minutes ago</span>
                              <span class="text-teal">Clear</span>
                            </div>
                          </div>
                        </div>
                        
                    </div> <!--  end dropdown item -->
                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item" style="width: 18rem;">
                        <div class="row px-2">
                          <div class="col-2 d-flex justify-content-center ">
                            <img class=" rounded-circle " src="img/theme/team-3-800x800.jpg" style="width:40px; height:40px">
                          </div>

                          <div class="col-10">
                            <div class="row">
                              <p class="text-wrap text-sm">Lorem Ipsum has been the industry's standard...</p>
                            </div>

                            <div class="row d-flex justify-content-between">
                              <span class="text-gray text-sm"> 20 minutes ago</span>
                              <span class="text-teal">Clear</span>
                            </div>
                          </div>
                        </div>
                        
                    </div> <!--  end dropdown item -->
                    <div class="dropdown-divider"></div>

                    <div class="dropdown-item d-flex justify-content-center">
                        <span class="text-teal">View All</span>
                    </div>

                </base-dropdown>
            </li>

            <li class="nav-item">          
                <a href="#">
                  <span  class="text-teal"> Log out </span>
                  <i class="fa fa-power-off fa-lg text-gray" style="transform: rotate(90deg);"></i>
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

<style scoped lang="scss">
.navbar-nav > .nav-item > .show::before {
   position: absolute;
   top: 23px;
   left: 9px;
   display: inline-block;
   border-right: 13px solid transparent;
   border-bottom: 13px solid #CCC;
  //  background-color: white !important;
   border-left: 13px solid transparent;
   border-bottom-color: rgba(0, 0, 0, 0.2);
   content: '';
   margin-bottom:10px;
 }
.navbar-nav > .nav-item > .show::after  {
    position: absolute;
    top: 23px;
    left: 10px;
    display: inline-block;
    border-right: 12px solid transparent;
    border-bottom: 12px solid white;
    border-left: 12px solid transparent;
    content: '';
}

/* Make the badge float in the top right corner of the button */
.button__badge {
  background-color: #fa3e3e;
  border-radius: 2px;
  color: white;
 
  padding: 1px 3px;
  font-size: 10px;
  
  position: absolute; /* Position the badge within the relatively positioned button */
  top: 0;
  right: 8px;

}
</style>
