$(function(){
 $('.menu').on('click', function() {
   $(".btn-trigger").toggleClass('active');
   $(".slide-menu").toggleClass('show');
   $('body').toggleClass('scroll');
 });

 $('.menu-grid a[href]').on('click', function(){
  $('.btn-trigger').toggleClass('active');
  $('.slide-menu').toggleClass('show');
  $('body').toggleClass('scroll');
 });

 $('.footer-btn').on('click',function(){
   $('body,html').animate({scrollTop:0},500);
   return false;
 });

 $('a[href^="#"]:not([href="#"])').click(function(){
  var target=$($(this).attr("href")).offset().top;
  target -= 80;
 $("html,body").animate({scrollTop:target},500);
 
  return false;
 });

 var slider1 = new Swiper('.slider1', {
  slidesPerView:3,
  loop: true,
  loopedSlides: 5,
  spaceBetween:30,
  centeredSlides:true,

  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next1',
   prevEl: '.prev1',
  },
 });
 
 var slider2 = new Swiper('.slider2', {
  slidesPerView:1,
  loop: true,
  loopedSlides: 5,
  spaceBetween:20,
  centeredSlides:true,
  
  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next1',
   prevEl: '.prev1',
  },
 });

 slider1.on('slideChange', () =>{
 slider2.slideToLoop(slider1.realIndex);
 });

 slider2.on('slideChange', () =>{
 slider1.slideToLoop(slider2.realIndex);
 });

 var slider3 = new Swiper('.slider3', {
  slidesPerView:3,
  loop: true,
  loopedSlides: 5,
  spaceBetween:30,
  centeredSlides:true,

  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next3',
   prevEl: '.prev3',
  },
 });
 
 var slider4 = new Swiper('.slider4', {
  slidesPerView:1,
  loop: true,
  loopedSlides: 5,
  spaceBetween:20,
  centeredSlides:true,
  
  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next3',
   prevEl: '.prev3',
  },
 });

 slider3.on('slideChange', () =>{
 slider4.slideToLoop(slider3.realIndex);
 });

 slider4.on('slideChange', () =>{
 slider3.slideToLoop(slider4.realIndex);
 });

 var slider5 = new Swiper('.slider5', {
  slidesPerView:3,
  loop: true,
  loopedSlides: 5,
  spaceBetween:30,
  centeredSlides:true,

  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next5',
   prevEl: '.prev5',
  },
 });
 
 var slider6 = new Swiper('.slider6', {
  slidesPerView:1,
  loop: true,
  loopedSlides: 5,
  spaceBetween:20,
  centeredSlides:true,
  
  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next5',
   prevEl: '.prev5',
  },
 });

 slider5.on('slideChange', () =>{
 slider6.slideToLoop(slider5.realIndex);
 });

 slider6.on('slideChange', () =>{
 slider5.slideToLoop(slider6.realIndex);
 });

 var slider7 = new Swiper('.slider7', {
  slidesPerView:3,
  loop: true,
  loopedSlides: 5,
  spaceBetween:30,
  centeredSlides:true,

  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next7',
   prevEl: '.prev7',
  },
 });
 
 var slider8 = new Swiper('.slider8', {
  slidesPerView:1,
  loop: true,
  loopedSlides: 5,
  spaceBetween:20,
  centeredSlides:true,
  
  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next7',
   prevEl: '.prev7',
  },
 });

 slider7.on('slideChange', () =>{
 slider8.slideToLoop(slider7.realIndex);
 });

 slider8.on('slideChange', () =>{
 slider7.slideToLoop(slider8.realIndex);
 });

 var slider9 = new Swiper('.slider9', {
  slidesPerView:3,
  loop: true,
  loopedSlides: 5,
  spaceBetween:30,
  centeredSlides:true,

  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next9',
   prevEl: '.prev9',
  },
 });
 
 var slider10 = new Swiper('.slider10', {
  slidesPerView:1,
  loop: true,
  loopedSlides: 5,
  spaceBetween:20,
  centeredSlides:true,
  
  pagination: {
   el: '.swiper-pagination',
  },
  navigation: {
   nextEl: '.next9',
   prevEl: '.prev9',
  },
 });

 slider9.on('slideChange', () =>{
 slider10.slideToLoop(slider9.realIndex);
 });

 slider10.on('slideChange', () =>{
 slider9.slideToLoop(slider10.realIndex);
 });
});