/* // BOTTOM BAR
const bottomBar_div = document.querySelector('.bottom-bar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 100) {
    bottomBar_div.style.display = "inline-block";
  } else {
    bottomBar_div.style.display = "none";
  }
}); */
// UP BUTTON EFFECTS
const scrollUp_div = document.getElementById('up');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled > 150) {
    scrollUp_div.style.display = "inline-block";
  } else {
    scrollUp_div.style.display = "none";
  }
});

// HOW TO SEARCH BAR
const searchBar_input = document.forms['search-bar'].querySelector('input');
searchBar_input.addEventListener('keyup', function (e) {
  const term = e.target.value.toLowerCase();
  const answers_p = document.getElementsByTagName('p');
  Array.from(answers_p).forEach(function (answer) {
    const text = answer.textContent;
    if (text.toLowerCase().indexOf(term) != -1) {
      answer.parentElement.style.display = 'block';
    } else {
      answer.parentElement.style.display = 'none';
    }
  });
});