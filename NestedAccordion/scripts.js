// just a tracer bullet
// alert("it's alive!");


document.head.parentElement.className = "js"; // It's alive!

var elements = document.querySelectorAll('h3');

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
console.log(index);*/

_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element)
    elements[index].parentElement.classList.toggle('cbp-ntopen');
  });
});