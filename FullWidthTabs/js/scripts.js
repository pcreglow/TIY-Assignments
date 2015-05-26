
(function(window) {
//Collaboration with @kmattiko @JessyRiordan @gatorpazz @sjoyal

  $('a.icon-shop').click(function(){
   $('section').removeClass('content-current');
   $('#section-1').addClass('content-current');
   $('a').removeClass('tab-current');
   $('a.icon-shop').addClass('tab-current');
  });

  $('a.icon-cup').click(function(){
   $('section').removeClass('content-current');
   $('#section-2').addClass('content-current');
   $('a').removeClass('tab-current');
   $('a.icon-cup').addClass('tab-current');
  });

  $('a.icon-food').click(function(){
   $('section').removeClass('content-current');
   $('#section-3').addClass('content-current');
   $('a').removeClass('tab-current');
   $('a.icon-food').addClass('tab-current');
  });

  $('a.icon-lab').click(function(){
   $('section').removeClass('content-current');
   $('#section-4').addClass('content-current');
   $('a').removeClass('tab-current');
   $('a.icon-lab').addClass('tab-current');
  });

  $('a.icon-truck').click(function(){
   $('section').removeClass('content-current');
   $('#section-5').addClass('content-current');
   $('a').removeClass('tab-current');
   $('a.icon-truck').addClass('tab-current');
  });

})(window);
