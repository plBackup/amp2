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

        self.floorInfoShow=true;
        self.floorInfo=undefined;
        self.shopInfo=undefined;

        self.getShopName=function(shopNames){
            return shopNames.join(",")
        };

        /*get set floorInfo*/
        self.getFloorInfo=function(floorId){
            console.log(floorId);
            self.floorInfoShow=true;
            var search=floorId;
            dataFloorDetailService.getData(search,self.setFloorInfo);
        };
        self.setFloorInfo=function(data){
            console.log(data);
            self.floorInfo=data;
        };

        /*get set shopInfo*/
        self.getShopInfo=function(shopId){
            console.log(shopId);
            self.floorInfoShow=false;
            var search=shopId;
            dataShopDetailService.getData(search,self.setShopInfo);
        };
        self.setShopInfo=function(data){
            console.log(data);
            self.shopInfo=data;
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