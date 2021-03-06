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
        self.menuFilter.date=angular.copy(self.data.date);
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
        self.setType=function(type){
            /**/
            self.setModel("type",type);
        };


        self.isActive=function(menu,model){
            return menu==model;
        };

        self.selectedDate=function(data){
            console.log(data);
            self.menuFilter.date=data.date.split("-");
            console.log(self.curDate);
            console.log(self.menuFilter);
        };


        if(typeof self.menuFilter.date=="undefined"||self.menuFilter.date==null){
            var cur_date=new Date();
            self.menuFilter.date=[cur_date.getFullYear(),(cur_date.getMonth()+1),cur_date.getDate()]
        }else{
           /* var cur_date=self.menuFilter.date.join("-");*/
        }
        self.curDate=self.menuFilter.date.join("-");

        self.dateDirectiveName="project_date";

        function _init(){
            var pid=$rootScope.pid;
            var curProject=undefined;
            $.each(self.projects,function(i,e){
                if(e.id==pid){
                    curProject=e;
                }
            });

            self.setModel("project",curProject);

            var type=$rootScope.type;

            if(typeof type !=="undefined"){
                var type=undefined;
                $.each(self.types,function(i,e){
                    if(e.id==type){
                        curType=e;
                    }
                });
                self.setModel("type",curType);
            }else{
                //如果无项目时，激活显示项目列表
                //$("#js-menu-project").dropdown("toggle");
            }
        }

        if($rootScope.pid){
            _init();
        }

    }]);
    //return controllers;
});