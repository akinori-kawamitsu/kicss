jQuery(document).ready(function(){
  $('.toggle').click(function(){
	$(this).next('.menu1').toggleClass('visible');
	$(this).toggleClass('visible');
	$('.toggle2').removeClass('visible2');
  });
  $('.toggle2').click(function(){
	$(this).toggleClass('visible2');
	$(this).siblings().removeClass('visible2');
  });
});