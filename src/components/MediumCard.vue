<template>
  <card class="card-stats" :show-footer-line="true">
      <div class="col-12 ">
        <slot name="card-content">

        </slot> 

        <slot name="card-button" >

        </slot>
      </div>
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'medium-card',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: String,
      illustration: String,
      title: String,
      subTitle: String,
      iconClasses: [String, Array]
    }
  };
</script>
<style></style>
