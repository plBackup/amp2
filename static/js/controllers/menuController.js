/**
 * Created by whobird on 17/4/24.
 */
define(["angular","./app.controllers"],function(angular,controllers){

    controllers.controller("menuCtrl",["$rootScope","$scope","$location","menuData",function($rootScope,$scope,$location,menuData){

        var self=this;

        self.data=angular.copy(menuData);
        console.log(self.data);
        self.menuFilter={
            project:undefined,
            date:undefined,
            type:undefined
        };

        self.projects=angular.copy(self.data.projects);
        self.date=angular.copy(self.data.date);
        self.types=angular.copy(self.data.types);

        self.setModel=function(type,menu){
            self.menuFilter[type]=menu;
        };
        self.setProject=function(project){
            /**/
            self.setModel("project",project);
            var projectCd=project.id;
            $location.path("/main/"+projectCd);
        };

        self.isActive=function(menu,model){
            return menu==model;
        };


        function _init(){
            var pid=$rootScope.pid;

            var curProject=undefined;
            $.each(self.projects,function(i,e){
                if(e.projectCd==pid){
                    curProject=e;
                }
            });

            self.setModel("project",curProject);

            var plan=$rootScope.plan;

            if(typeof plan !=="undefined"){
                var curPlan=undefined;
                $.each(self.plans,function(i,e){
                    if(e.id==plan){
                        curPlan=e;
                    }
                });
                self.setModel("plan",curPlan);

                /*todo: render project 时需要typeList数据*/
                $rootScope.typeList=self.typeList;
                /*这里把业态映射 放到全局访问*/
                $rootScope.plan=curPlan;
            }else{

                //如果无计划节点时，激活显示计划节点
                $("#dropdown-plan").dropdown("toggle");
            }
        }

        if($rootScope.pid){
            _init();
        }

    }]);
    //return controllers;
});