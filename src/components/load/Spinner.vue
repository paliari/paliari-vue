<template lang="pug">
.v-spinner(v-show='loading')
  .v-pulse.v-pulse1(v-bind:style='[spinnerStyle,spinnerDelay1]')
  .v-pulse.v-pulse2(v-bind:style='[spinnerStyle,spinnerDelay2]')
  .v-pulse.v-pulse3(v-bind:style='[spinnerStyle,spinnerDelay3]')
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#9d9d9d'
    },
    size: {
      type: String,
      default: '20px'
    },
    margin: {
      type: String,
      default: '15px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      spinnerStyle: {
      	backgroundColor: this.color,
      	width: this.size,
        height: this.size,
      	margin: this.margin,
      	borderRadius: this.radius,
        display: 'inline-block',
        animationName: 'v-pulseStretchDelay',
        animationDuration: '0.75s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
        animationFillMode: 'both'
      },
      spinnerDelay1: {
        animationDelay: '0.12s'
      },
      spinnerDelay2: {
        animationDelay: '0.24s'
      },
      spinnerDelay3: {
        animationDelay: '0.36s'
      }
    }
  }

}
</script>

<style>
@-webkit-keyframes v-pulseStretchDelay
{
    0%,
    80%
    {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-opacity: 1;
                opacity: 1;
    }
    45%
    {
        -webkit-transform: scale(0.1);
                transform: scale(0.1);
        -webkit-opacity: 0.7;
                opacity: 0.7;
    }
}

@keyframes v-pulseStretchDelay
{
    0%,
    80%
    {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-opacity: 1;
                opacity: 1;
    }
    45%
    {
        -webkit-transform: scale(0.1);
                transform: scale(0.1);
        -webkit-opacity: 0.7;
                opacity: 0.7;
    }
}
</style>
