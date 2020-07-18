<template>
  <div id="app">
   <div id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      winWidth:0,
      myChart_1:null
    }
  },
  mounted(){
    this.myChart_1 = this.echarts.init(document.getElementById('main'));

    let option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
this.myChart_1.setOption(option);

  }
}
</script>

<style lang="less">
  body,div,a,p,ul,li{font-size: 14px;margin: 0;}
</style>
