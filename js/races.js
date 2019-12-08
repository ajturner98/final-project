let description = document.querySelectorAll('.description');
let race = document.querySelectorAll('.race');

description.forEach(function(el){
  el.style.display = 'none';
});

race.forEach(function(el) {
  el.onclick = () => {
    if (el.lastElementChild.style.display === 'none') {
      el.lastElementChild.style.display = 'block';
    } else {
      el.lastElementChild.style.display = 'none';
    }
  };
});
