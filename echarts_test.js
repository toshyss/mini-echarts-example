require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

require(
    [
        'echarts',
        'echarts/chart/pie',
        'echarts/chart/funnel'
    ],
    function(ec) {
        var pieChart = ec.init(document.getElementById('pie-chart'));

        var pieOption = {
            color : ['rgba(0,0,0,0.52)','rgba(255,0,0,0.52)','rgba(0,0,255,0.52)','rgba(0,153,0,0.52)','rgba(255,255,0,0.52)'],

            title : {
                text: 'Pie-Chart',
                x:'center'
            },

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            legend: {
                textStyle: {
                    fontWeight: 'bolder',
                    fontSize: 20,
                },
                orient : 'vertical',
                x : '75%',
                y : '20%',
                data : ['panda','penguin','cat','dog','rabbit']
            },

            toolbox: {
                show : true,
                x : 300,
                feature : {
                    dataView : {
                        show: true,
                        title: 'データの表示',
                        readOnly: false,
                        lang: ['データの表示','閉じる','更新']
                    },
                    magicType : {
                        show: true,
                        title: {
                            pie : '円グラフ',
                            funnel: 'ファネルチャート'
                        },
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore: { show: true, title: '更新' },
                    saveAsImage: { show: true, title: '画像保存' }
                }
            },

            calculable: true,

            series: [
                {
                    name: '項目名',
                    type: 'pie',
                    data: [
                        { value: 335, name: 'panda' },
                        { value: 310, name: 'penguin' },
                        { value: 234, name: 'cat' },
                        { value: 135, name: 'dog' },
                        { value: 1548, name: 'rabbit' }
                    ]
                }
            ]
        };
        pieChart.setOption(pieOption);
    }
)
require(
    [
      'echarts',
      'echarts/chart/bar',
      'echarts/chart/line'
    ],
    function (ec) {
  
      var barChart = ec.init(document.getElementById('bar-chart'));
      var barOption = {
        title : {
          text: 'Bar-Chart',
          x:'center'
        },
        tooltip : {
          trigger: 'axis',
        },
        legend: {
          textStyle: {
            fontWeight: 'bolder',
            fontSize: 20,
          },
          orient : 'vertical',
          x : '75%',
          y : '20%',
          data:['降水量','湿度']
        },
  
        toolbox: {
          show : true,
          x : 300,
          feature : {
            dataView : {
              show: true, 
              title: 'データの表示', 
              readOnly: false,
              lang: ['データの表示','閉じる','更新']
            },
            magicType : {
              show: true, 
              title: {
                bar : '棒グラフ',
                line : '折れ線グラフ'
              },
              type: ['bar', 'line'],
            },
            restore : {show: true, title: '更新'},
            saveAsImage : {show: true, title: '画像保存'}
          }
        },
  
        calculable : true,
  
        xAxis : [
          {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'湿度',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
              data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
              ]
            },
            markLine : {
              data : [
                  {type : 'average', name: '平均值'}
              ]
            }
          },
          {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
              data : [
                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            markLine : {
              data : [
                {type : 'average', name : '平均值'}
              ]
            }
          }
        ]
      };
      barChart.setOption(barOption); 
    }
  );
  