$(function(){
   var myChart1 = echarts.init(document.getElementById('tjt'));

   var arrlight=[
                {value:30, name:'初期绿灯时间:30s'},
                {value:40, name:'调整后时间:40s'},
                
                {value:10, name:'最小绿灯时间:10s'},
                {value:100, name:'绿灯极限延长时间:100s'}, //#D48265
                {value:10, name:'绿灯延长时间:10s'},

            ];
   var option1 = {
    // title : {
    //     text: '某站点用户访问来源',
    //     subtext: '纯属虚构',
    //     x:'center'
    // },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: arrlight,
            itemStyle:{
                    normal:{  
　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['#00CED1','#FFD700','#00FFFF','#FF7F50','#FAFAD2'];
                            return colorList[params.dataIndex];
                        },
                        label: {
                           show: true,      //开启显示
                           position: 'top', //在上方显示
                           textStyle: {     //数值样式
                               //color: 'skyblue',
                               fontSize: 14
                           }
                       },
                      
                    }, 
                }
        }
      ]
 };

       // 使用刚指定的配置项和数据显示图表。
       
        myChart1.setOption(option1);
})