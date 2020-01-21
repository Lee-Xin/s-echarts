<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script>
  import echarts from 'echarts';
  export default {
    name: "emptyChart",
    data() {
      return {
        myChart: null
      }
    },
    props: {
      option: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    watch: {
      option: {
        deep: true,
        handler() {
          this.render();
        }
      }
    },
    methods: {
      render() {
        console.log(this.option);
        this.myChart.setOption(this.option);
      }
    },
    mounted() {
      this.myChart = echarts.init(this.$refs.wrapper);
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 360px;
    height: 360px;
  }
</style>
