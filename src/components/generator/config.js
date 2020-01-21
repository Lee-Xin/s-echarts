import xyAxis from '@/components/base/xyAxis';
import lineSeries from '@/components/base/lineSeries';
import barSeries from '@/components/base/barSeries';

export const series = [
  {
    option: {
      series: [{
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      }]
    },
    component: lineSeries
  },
  {
    option: {
      series: [{
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
      }]
    },
    component: barSeries
  }
];

export const baseOption = [
  {
    option: {
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
    },
    component: xyAxis
  }
]
