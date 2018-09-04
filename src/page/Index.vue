<template>
  <div>
    <div style="text-align: center;margin-bottom: 20px">
      <h2>欢迎使用MyVue</h2>
    </div>
    <!-- 图表文档地址 https://v-charts.js.org-->
    <div class="disFlex">
      <ve-line :data="chartData" style="width: 50%"></ve-line>

      <ve-pie :data="chart1Data" :settings="chartSettings" style="width: 50%"></ve-pie>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        chartSettings :{
          dimension: '日期',
          metrics: '访问用户'
        },
        chart1Data: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
      }
    },
    created: function () {

    },
    methods: {},
    components:{
    }
  }
</script>
<style>
</style>
