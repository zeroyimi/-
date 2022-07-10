<template>
  <div class="main">
    <h3>订单数据图表</h3>
    <e-charts
    class="chart"
    :option = "option"
    /> 
    <e-charts
    class="chart"
    :option = "option2"
    /> 
  </div>
</template>
<script>
import * as echarts from 'echarts';
  export default {
     name:'home',
     data(){
      return {
        data:[]      
      }
     },
     computed:{
      option(){
          return {
            color: ['#80FFA5', '#FF0087', '#FFBF00'],
            title: {
              text: '花店进货一览'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['num', 'price', 'total']
            },
            toolbox: {
              feature: {
                saveAsImage: {}
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
                boundaryGap: false,
                data: this.data.map(d=>d.name)
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: 'num',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(128, 255, 165)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(1, 191, 236)'
                    }
                  ])
                },
                emphasis: {
                  focus: 'series'
                },
                data: this.data.map(d=>d.num)
              },
              {
                name: 'price',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(0, 221, 255)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(77, 119, 255)'
                    }
                  ])
                },
                emphasis: {
                  focus: 'series'
                },
                data: this.data.map(d=>d.price)
              },
              {
                name: 'total',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(55, 162, 255)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(116, 21, 219)'
                    }
                  ])
                },
                emphasis: {
                  focus: 'series'
                },
                data: this.data.map(d=>d.total)
              }
            ]
          }
      },
      option2(){
        return {
            title: {
              text: '鲜花进货数量一览'
            },
              xAxis: {
                type: 'category',
                data: this.data.map(d=>d.name),
                axisLabel: {
                  interval:0 
                }
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: this.data.map(p=>p.num),
                  type: 'bar',
                  showBackground: true,
                  backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                  }
                }
              ]
        }
      }
     },
     methods:{
     },
    mounted(){
      this.data = JSON.parse(localStorage.getItem('localData'))
    }
  }
</script>
<style scoped>
  h3{
    position: absolute;
    top:0px;
    left:200px;
    padding: 20px 30px;
  }

  .chart{
    padding: 30px;
    height: 400px;
    box-sizing: border-box;
  }
</style>
