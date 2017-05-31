/**
 * Created by whobird on 17/4/24.
 */
define(["angular","../services/index","../directives/index"],function(angular){

    var controllers= angular.module("app.controllers",["app.services","app.directives"]);

    return controllers;
});