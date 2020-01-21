<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script>
  import echarts from 'echarts';
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };
  export default {
    name: "LineChart",
    data() {
      return {
        myChart: null
      }
    },
    mounted() {
      this.myChart = echarts.init(this.$refs.wrapper);
      this.myChart.setOption(option);
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 360px;
    height: 360px;
  }
</style>
