var prevId;
function loadWeather(id, city) {
    if(prevId!=null){
         $("#" +prevId).toggleClass("selected");
    }
   
       $("#" +id).toggleClass("selected");
       prevId=id;
}