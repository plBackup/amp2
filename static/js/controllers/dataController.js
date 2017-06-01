/**
 * Created by whobird on 17/4/24.
 */
define(["angular","./app.controllers"],function(angular,controllers){

    controllers.controller("dataCtrl",["$rootScope","$scope","$http","dataProjectService","projectData","floorsData","$timeout",function($rootScope,$scope,$http,dataProjectService,projectData,floorsData,$timeout){

        var self=this;
        console.log("project Data==============================");
        console.log(projectData);
        console.log(floorsData);
        self.projectData=angular.copy(projectData);
        self.floorsData=angular.copy(floorsData);

        self.getShopName=function(shop){
            return shop.shopNames.join(",")
        };

        self.init=function(){

            $timeout(function(){
                $("[data-toggle='tooltip']").tooltip();
            },300);

        };
        self.init();
    }]);

    //return controllers;
});