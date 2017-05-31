/**
 * Created by whobird on 17/5/12.
 */
define(["angular","./app.directives","echarts"],function(angular,directives){

    directives.directive('rentChart', ["chartOptService",
        function(chartOptService) {
            return {
                restrict: 'A',
                scope: {
                    chartData: '=',
                    chartLabels: '='
                },
                link: function($scope, $element) {
                    //console.log("-------ddd")
                    //console.log($element);
                    //var lineChart;
                    var dataSimChart = echarts.init($element[0]);

                    var labels = $scope.chartData[0];
                    var data=$scope.chartData.slice(1);
                    var opt=chartOptService.setChartOption(data,labels);
                    dataSimChart.setOption(opt);

                    $scope.$watch('chartData', function(newVal, oldVal) {
                        //console.log(newVal);
                        if (newVal) {
                            var labels = $scope.chartData[0];
                            var data=$scope.chartData.slice(1);
                            var opt=chartOptService.setChartOption(data,labels);
                            dataSimChart.setOption(opt);
                        }
                    });
                }
            };
        }]);
});