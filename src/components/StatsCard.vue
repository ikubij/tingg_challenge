<template>
  <card class="card-stats" :show-footer-line="true" :type="cardBackground">

      <div class="col-12">
        <slot>
          <h5 class="h6 text-uppercase text-muted mb-0" v-if="title">{{title}}</h5>
        </slot>
      </div>

      <div class="row mt-2">
        <div class="col-4">
          <slot name="icon">
            <div class="icon rounded text-white pt-2 shadow d-flex justify-content-center"
                :class="[`bg-${type}`, iconClasses]"
                style="width:40px; height:40px">
              <i :class="icon"
              style="font-size: 1.5em;"></i>
            </div>
          </slot>
        </div>

        <div class="col-8 pt-2">
          <span class="h2 font-weight-bold text- mb-0"
            v-if="subTitle"
            :class="[`text-${type}`]"
          >
            {{subTitle}}
          </span>
        </div>

      </div>

    <p class="mt-3 mb-0 text-sm">
      <slot name="footer">

      </slot>
    </p>
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'stats-card',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      cardBackground: {
        type: String,
        default: ''
      },
      icon: String,
      title: String,
      subTitle: String,
      iconClasses: [String, Array]
    }
  };
</script>
<style></style>
