// Tracer bullet!
// it's alive !
//
// function rando(limit){
//   return Math.floor(Math.random() * limit);
// }
//
// function randoImage(){
//   return BASE_URL + '?' + rando(1000);
// }
//
// $('img').attr('src', randoImage);
(function(window){

// Variables to use when clicking between tabs
var tab1 = document.querySelector('.icon-shop');
var tab2 = document.querySelector('.icon-cup');
var tab3 = document.querySelector('.icon-food');
var tab4 = document.querySelector('.icon-lab');
var tab5 = document.querySelector('.icon-truck');
var Section1 = document.querySelector('#section-1');
var Section2 = document.querySelector('#section-2');
var Section3 = document.querySelector('#section-3');
var Section4 = document.querySelector('#section-4');
var Section5 = document.querySelector('#section-5');

// Variables for parentElements used in forEach when removing previous class from tabs/content
var listItems = document.querySelectorAll('li');
var contentBlock = document.querySelectorAll('section');

// Adding 'click' event listener to each element; removes active tab and content, adds new active tab and content to appropriate element
tab1.addEventListener('click', function(){
  _.forEach(listItems, function(element){
    if (element.className === 'tab-current') {
      element.classList.remove('tab-current');
    };
  });
  _.forEach(contentBlock, function(element){
    if (element.className === 'content-current') {
      element.classList.remove('content-current');
    };
  });
  this.parentNode.classList.add('tab-current');
  Section1.classList.add('content-current');
});


tab2.addEventListener('click', function(){
  _.forEach(listItems, function(element){
    if (element.className === 'tab-current') {
      element.classList.remove('tab-current');
    };
  });
  _.forEach(contentBlock, function(element){
    if (element.className === 'content-current') {
      element.classList.remove('content-current');
    };
  });
  this.parentNode.classList.add('tab-current');
  Section2.classList.add('content-current');
});


tab3.addEventListener('click', function(){
  _.forEach(listItems, function(element){
    if (element.className === 'tab-current') {
      element.classList.remove('tab-current');
    };
  });
  _.forEach(contentBlock, function(element){
    if (element.className === 'content-current') {
      element.classList.remove('content-current');
    };
  });
  this.parentNode.classList.add('tab-current');
  Section3.classList.add('content-current');
});


tab4.addEventListener('click', function(){
  _.forEach(listItems, function(element){
    if (element.className === 'tab-current') {
      element.classList.remove('tab-current');
    };
  });
  _.forEach(contentBlock, function(element){
    if (element.className === 'content-current') {
      element.classList.remove('content-current');
    };
  });
  this.parentNode.classList.add('tab-current');
  Section4.classList.add('content-current');
});


tab5.addEventListener('click', function(){
  _.forEach(listItems, function(element){
    if (element.className === 'tab-current') {
      element.classList.remove('tab-current');
    };
  });
  _.forEach(contentBlock, function(element){
    if (element.className === 'content-current') {
      element.classList.remove('content-current');
    };
  });
  this.parentNode.classList.add('tab-current');
  Section5.classList.add('content-current');
});

})(window);
