//
let answers = document.querySelectorAll('dd')
let spaces = document.querySelectorAll('dt')

answers.forEach(function(el){
  el.style.display = 'none';
});

spaces.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display = 'block';
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
    }
  };
});
