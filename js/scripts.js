$(function(){

    $(".reg-price").on("mouseenter", function(){

      if($(this).siblings().hasClass("dp-show")){
        $(this).fadeOut("slow", function(){
            $(this).parent().addClass("fd-bg-fade");
          });
        // console.log($(this).siblings());
      }
        

    });

})();
