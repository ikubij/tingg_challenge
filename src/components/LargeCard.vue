<template>
  <card class="card-stats" :show-footer-line="true">
    <div class="row">

      <div class="col-6">
        <slot>
          <h3 class="card-title text-black mb-2" v-if="title">{{title}}</h3>
          <span class="h5 text-black mb-0" v-if="subTitle">{{subTitle}}</span>
        </slot>
        
        <slot name="card-button">

        </slot>
      </div>

      <div class="col-6" v-if="$slots.illustration || illustration">
        <slot name="illustration">
          <img :src="illustration" style="width:inherit; height:150px;"/>
        </slot>
      </div>

    </div>
    
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'large-card',
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
