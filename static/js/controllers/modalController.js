/**
 * Created by whobird on 17/5/5.
 */
define(["jquery","angular","./app.controllers",],function($,angular,controllers){

    controllers.controller("modalCtrl",["$rootScope","$scope","$http","modalData",function($rootScope,$scope,$http,modalData){

            var self=this;
            self.baseLink=$rootScope.plink;
            self.domain=$rootScope.domain;

            self.modalData=modalData;

            self.itemSelect=function(id){
                 console.log(id)
            };

            self.setShare=function(){
                _modal_hide();
            };

            $scope.$on("shareMessage",function(e,data){
                _modal_show();
            });

            function _modal_show(){
                $("#shareModal").modal("show");
            }
            function _modal_hide(){
                $("#shareModal").modal("hide");
            }

    }]);
});