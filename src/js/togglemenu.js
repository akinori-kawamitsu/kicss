jQuery(function($){
$(document).ready(function(){
  $('.toggle').click(function(){
	$(this).next('.toggle-menu').toggleClass('dep-visible');
	$(this).toggleClass('dep-visible');
	$('.toggle2').removeClass('dep-visible2');
  });
  $('.toggle2').click(function(){
	$(this).toggleClass('dep-visible2');
	$(this).siblings().removeClass('dep-visible2');
  });
});
});