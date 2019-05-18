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