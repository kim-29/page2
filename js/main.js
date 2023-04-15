$(document).ready(function(){
  $(".fa-bars").click(function(){
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  })
  
  $(window).on("scroll load",function(){
    let top=$(window).scrollTop();
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if(top > 30){
      $("header").addClass('header-active')
    }else{
      $("header").removeClass('header-active')
    }
    
    
    $("section").each(function(){
      let id =$(this).attr('id');
      let height = $(this).height();
      let offset =$(this).offset().top -200;
      if(top>=offset && top<height+offset){
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    })
  })
});
