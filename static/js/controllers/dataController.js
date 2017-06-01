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

        self.curFloorId=undefined;
        self.curShopId=undefined;

        self.floorInfoShow=true;
        self.floorInfo=undefined;
        self.shopInfo=undefined;

        self.baseWidth=0;

        self.getShopName=function(shopNames){
            return shopNames.join(",")
        };

        /*get set floorInfo*/
        self.getFloorInfo=function(floorId){
            console.log(floorId);
            self.floorInfoShow=true;
            var search=floorId;
            self.curShopId=undefined;
            self.curFloorId=floorId;
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
            self.curShopId=shopId;
            dataShopDetailService.getData(search,self.setShopInfo);
        };
        self.setShopInfo=function(data){
            console.log(data);
            self.shopInfo=data;
        };

        self.getItemWidth=function(area){
            var w=area+"px";
            return {"width":w}
        };

        self.getFloorWidth=function(floorArea){
            return (floorArea/self.baseWidth)*100;
        };
        var width=parseInt($(".amp-section-left").css("width"))-60-136;
        self.hideEm=function(rental_rate,w){
            if (w*rental_rate/10000*width<50){
                return true;
            }else{
                return false;
            }
        };
        self.init=function(){

            $.each(self.floorsData,function(i,floor){
                if(self.baseWidth<floor.floor_area){
                    self.baseWidth=floor.floor_area;
                }
            });
            console.log(self.baseWidth);

            $.each(self.floorsData,function(i,floor){
               floor.w=self.getFloorWidth(floor.floor_area);
            });

            $timeout(function(){
                $("[data-toggle='tooltip']").tooltip({
                    html:true
                });
            },300);
        };
        self.init();
    }]);

    //return controllers;
});