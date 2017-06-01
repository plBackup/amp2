/**
 * Created by whobird on 17/4/25.
 */
define(["angular","./app.filters"],function(angular,filters){

    filters.filter("default",function(){
        return function(data,str){
            if(typeof str==="undefined"){
                return data;
            }else{
                if(typeof data==="undefined" || data==""||data==null){
                    console.log("data-------");
                    console.log(data)
                    return str;
                }
                return data;
            }
        }
    });
});