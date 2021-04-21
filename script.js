'use strict';
let button = document.querySelector('#button');
let body = document.querySelector('body');
let div = document.querySelector('#div');
button.addEventListener('click', function func() {
  body.style.backgroundImage = "url('https://w-dog.ru/wallpapers/9/6/531915326915476/priroda-nebo-oblaka-gory-cvety-pejzazh-zakat-derevya.jpg')";
  this.removeEventListerntr('click', func);
});
button.addEventListener('dblclick', function() {
  body.style.backgroundImage = "url('https://get.pxhere.com/photo/nature-flower-mountain-wilderness-wildflower-mount-scenery-vegetation-mountainous-landforms-national-park-flora-tourism-plant-mountain-range-tourist-attraction-lake-spring-sky-landscape-meadow-fjord-tree-computer-wallpaper-1422619.jpg')";
});