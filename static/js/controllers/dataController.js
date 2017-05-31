/**
 * Created by whobird on 17/4/24.
 */
define(["angular","./app.controllers"],function(angular,controllers){

    controllers.controller("dataCtrl",["$rootScope","$scope","$http","dataNodeService","projectData","$timeout",function($rootScope,$scope,$http,dataMenuService,projectData,$timeout){

        var self=this;
        console.log("project Data==============================");
        console.log(projectData);

    }]);
    //return controllers;
});