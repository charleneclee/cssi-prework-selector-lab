'use-strict';

function h1Selector() {
  return $('h1');
}

function liIn01Selector() {
  return $('ol li');
}


function linkSelector() {
  return $('a #my-id .myclass');
}

function catSelector() {
  return $('img.alt ="cat sleeping"');
}

function checkboxInputSelector() {
  return $(':checkbox');
}

/* you can return a selector by using the synax: return $('selector').
function pSelector(){
  return $('p');
}
*/
