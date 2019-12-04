let description = document.querySelectorAll('.description');
let classes = document.querySelectorAll('.class');

description.forEach(function(el){
  el.style.display = 'none';
});

classes.forEach(function(el) {
  el.onclick = () => {
    if (el.lastElementChild.style.display === 'none') {
      el.lastElementChild.style.display = 'block';
    } else {
      el.lastElementChild.style.display = 'none';
    }
  };
});
