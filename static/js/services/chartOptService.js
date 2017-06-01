/**
 * Created by whobird on 17/4/25.
 */
define(["angular","./app.services"],function(angular,services){

    services.service('chartOptService', ["$rootScope","$http",function($rootScope,$http) {
        var service = {
            setChartOption:function(data,labels){
                var chart_data_init={
                    lineData:{
                        labels: [ "2016", "2017", "2018"],
                        datasets: [
                            {
                                type:"line",
                                name:"实收",
                                xAxisIndex:0,
                                yAxisIndex:0,
                                symbol:'emptyCircle',
                                symbolSize:6,
                                showSymbol:true,
                                lineStyle:{
                                    show:true,
                                    color:"#ea7444",
                                    width:2,
                                    type:"solid",
                                },
                                data:[19470,null,null],
                            },
                            {
                                type:"line",
                                name:"应收",
                                xAxisIndex:0,
                                yAxisIndex:0,
                                symbol:'emptyCircle',
                                symbolSize:6,
                                showSymbol:true,
                                lineStyle:{
                                    show:true,
                                    color:"#18b0e2",
                                    width:2,
                                    type:"solid",
                                },
                                data:[36020,116820,80801],
                            },{
                                type:"line",
                                name:"租金包",
                                xAxisIndex:0,
                                yAxisIndex:0,
                                symbol:'emptyCircle',
                                symbolSize:6,
                                showSymbol:true,
                                lineStyle:{
                                    show:true,
                                    color:"#1abd9d",
                                    width:2,
                                    type:"solid",
                                },
                                data:[31152,93456,102960],
                            }
                        ]
                    },//linedata

                };
                var chart_opt={
                    lineOpt:{
                        title:{
                            show:false,
                        },
                        legend:{
                            show:false,
                        },
                        toolbox:{
                            show:false,
                        },
                        grid:{
                            top:30,
                            left:50,
                            right:30,
                            bottom:30
                        },
                        xAxis:{
                            position:"bottom",
                            type:"category",
                            /* name:"年",
                             nameLocation:"middle",
                             nameTextStyle:{
                             color:"#acadb0",
                             fontStyle:"normal",
                             fontSize:14
                             },
                             nameGap:25,*/
                            boundaryGap:true,
                            axisLine:{
                                show:true,
                                lineStyle:{
                                    color:"#ececec",
                                    width:1,
                                    type:"solid"
                                }
                            },
                            axisTick:{
                                show:false,
                                inside:true,
                                length:3,
                                lineStyle:{
                                    color:"#535861",
                                    width:1,
                                    type:"solid"
                                }
                            },
                            axisLabel:{
                                show:true,
                                //formatter:null,
                                formatter:'{value}年',
                                margin:12,
                                textStyle:{
                                    color:"#666",
                                    fontStyle:"normal",
                                    fontSize:12
                                }
                            },
                            splitLine:{
                                show:false,
                                lineStyle:{
                                    color:"#ececec",
                                    width:1,
                                    type:"solid"
                                }
                            },
                            data:["2015","2016", "2017", "2018", "2019", "2020"],
                        },
                        yAxis:{
                            /*name:"万元",
                             nameLocation:"end",
                             nameGap:15,
                             nameTextStyle:{
                             color:"#acadb0",
                             fontStyle:"normal",
                             fontSize:14
                             },*/
                            min:0,
                            //max:"auto",
                            //splitNumber:7,
                            axisLine:{
                                show:false,
                                lineStyle:{
                                    color:"#535861",
                                    width:1,
                                    type:"solid"
                                }
                            },
                            axisTick:{
                                show:false,
                                inside:false,
                                length:6,
                                linStyle:{
                                    color:"#535861",
                                    width:1,
                                    type:"solid"
                                }
                            },
                            axisLabel:{
                                show:true,
                                formatter:'{value}',
                                margin:10,
                                textStyle:{
                                    color:"#666",
                                    fontStyle:"normal",
                                    fontSize:12
                                }
                            },
                            splitLine:{
                                show:true,
                                lineStyle:{
                                    color:"#ececec",
                                    width:1,
                                    type:"solid"
                                }
                            },

                        },
                        color:['#ea7444','#18b0e2', '#1abd9d', '#feb739', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
                        backgroundColor:"transparent",
                        tooltip:{
                            show:true,
                            showContent:true,
                            formatter:"{a}:<br/>{b}年-{c}万",
                            textStyle:{
                                fontSize:12,
                                color:"#fff"
                            }
                        },
                        series:[
                            {
                                type:"line",
                                name:"应收",
                                xAxisIndex:0,
                                yAxisIndex:0,
                                symbol:'emptyCircle',
                                symbolSize:6,
                                showSymbol:true,
                                lineStyle:{
                                    show:true,
                                    color:"#18b0e2",
                                    width:2,
                                    type:"solid",
                                },
                                data:[36020,116820,80801],
                            }

                        ]
                    }
                };

                function _updateOpt(data,labels,chartType){
                    if(chartType=="line"){
                        chart_data_init[chartType+"Data"].datasets[0].data=data[0].values;//实收
                        chart_data_init[chartType+"Data"].datasets[1].data=data[1].values;//应收
                        chart_data_init[chartType+"Data"].datasets[2].data=data[2].values;//租金包
                        chart_data_init[chartType+"Data"].labels=labels.values;

                        chart_opt[chartType+"Opt"].xAxis.data=chart_data_init[chartType+"Data"].labels;
                        chart_opt[chartType+"Opt"].series=chart_data_init[chartType+"Data"].datasets;
                    }
                    return chart_opt[chartType+"Opt"];
                };

                return _updateOpt(data,labels,"line")
            },
        };
        return service;
    }]);
    //return controllers;

});
