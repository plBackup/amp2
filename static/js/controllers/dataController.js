/**
 * Created by whobird on 17/4/24.
 */
define(["angular","./app.controllers"],function(angular,controllers){

    controllers.controller("dataCtrl",["$rootScope","$scope","$http","dataFloorDetailService","dataShopDetailService","projectData","floorsData","$timeout",function($rootScope,$scope,$http,dataFloorDetailService,dataShopDetailService,projectData,floorsData,$timeout){

        var self=this;
        console.log("project Data==============================");
        console.log(projectData);
        console.log(floorsData);
        self.projectData=angular.copy(projectData);
        self.floorsData=angular.copy(floorsData);

        self.getShopName=function(shop){
            return shop.shopNames.join(",")
        };

        self.getFloorInfo=function(floorId){
            console.log(floorId);
        };
        self.getShopInfo=function(shopId){
            console.log(shopId);
        }


        self.init=function(){
            $timeout(function(){
                $("[data-toggle='tooltip']").tooltip();
            },300);
        };
        self.init();
    }]);

    //return controllers;
});