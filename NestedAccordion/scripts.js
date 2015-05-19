//TO OPEN THE ACCORDION:
//What event should I listen for? 'click'
//What element should listen for that event? '.cbp-nttrigger'
/*_.forEach(document.querySelectorAll('.cbp-nttrigger'), function(element){

  element.addEventListener('click', function(){

    element.parentElement.classList.toggle('cbd-ntopen');

  });
});*/
//What should I do when that event fires?
// 1. Toggle '.cbp-ntopen' from parent '<li>' element

$('.cbp-nttrigger').on('click', function(event){
  $(event.target).parent().toggleClass('cbp-ntopen');
});










/* just a tracer bullet

debugger;

document.head.parentElement.className = "js"; // It's alive!

var elements = document.querySelectorAll('h3');
var nestedElements = document.querySelectorAll('h4');

/*elements[0].addEventListener('click', function(){
  elements[0].parentElement.classList.toggle('cbp-ntopen');
});*/

/*for ( var index = 0; index < elements.length; index++ ){
  var element = elements[index]
  element.addEventListener('click', function(){
    console.log(elements, index, elements[index])
    elements[index].parentElement.classList.toggle('cbp-ntopen');
  });

}
console.log(index);

_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element)
    elements[index].parentElement.classList.toggle('cbp-ntopen');
  });
});

_.forEach(nestedElements, function(element, index, elements){
    element.addEventListener('click', function(){
        element.parentElement.classList.toggle('cbp-ntopen');
    });
});
*/
