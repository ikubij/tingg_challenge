<template>
  <div id="app" style="background-color:#F5F6F9 !important">

    <fab 
        :actions="fabActions"
        :bg-color="bgColor"
        :main-icon="icon"
        :icon-size="iconSize"
        @cache="cache"
        @alertMe="alert"
    ></fab>

    <notifications></notifications>
    <router-view/>


  </div>
</template>

<script>
import fab from 'vue-fab'

export default {
  components: {
    fab
  },
   data(){
      return {
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
      }
  },
  methods:{
      cache(){
          console.log('Cache Cleared');
      },
      alert(){
          alert('Clicked on alert icon');
      }
  }
}
</script>

<style lang="scss">

</style>

