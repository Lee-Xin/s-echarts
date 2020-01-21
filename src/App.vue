<template>
  <div id="app">
    <draggabel :group="{ name: 'componentsGroup', pull: 'clone', put: false }" :clone="cloneComponent" @end="draggleEnd" draggable=".components-item" :list="baseOption">
      <div class="components-item" v-for="(item, index) in baseOption" :key="index">
        <component :is="item.component"></component>
      </div>
    </draggabel>
    <draggabel :group="{ name: 'componentsGroup', pull: 'clone', put: false }" :clone="cloneComponent" @end="draggleEnd" draggable=".components-item" :list="series">
      <div class="components-item" v-for="(item, index) in series" :key="index">
        <component :is="item.component"></component>
      </div>
    </draggabel>
    <draggabel class="drawing-board" :animation="340" group="componentsGroup">
      <empty-chart class="charts" :option="option"></empty-chart>
    </draggabel>
  </div>
</template>

<script>
  import emptyChart from '@/components/emptyChart';
  import draggabel from 'vuedraggable';
  import {series, baseOption} from '@/components/generator/config.js';

  export default {
    name: 'app',
    components: {
      draggabel, emptyChart
    },
    data() {
      return {
        series: series,
        baseOption: baseOption,
        tempComponent: null,
        option: {
          series: [],
          tooltip: {
            show: true
          }
        }
      }
    },
    methods: {
      cloneComponent(item) {
        this.tempComponent = JSON.parse(JSON.stringify(item));
      },
      draggleEnd(e) {
        if(e.from !== e.to) {
          if(this.tempComponent.option.series) {
            this.option.series = this.option.series.concat(this.tempComponent.option.series);
          }
          delete this.tempComponent.option.series;
          let temp = JSON.parse(JSON.stringify(this.option));
          this.option = {};
          this.$nextTick(() => {
            this.option = this._.merge(temp, this.tempComponent.option);
          });
        }
      }
    }
  }
</script>

<style>
  @import '//at.alicdn.com/t/font_1620321_4todqong7eb.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
<style lang="less">
  .components-item{
    display: inline-block;
    padding: 8px 10px;
    cursor: move;
    margin: 5px 10px;
    background-color: #f6f7ff;
    border: transparent solid 1px;
    &:hover{
      border: 1px dashed #787be8;
      color: #787be8;
    }
  }
  .drawing-board .sortable-ghost {
    display: none;
  }
</style>
