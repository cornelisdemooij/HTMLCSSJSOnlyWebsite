let pages = {
  "Home" : "./index.html",
  "Education" : "./edu.html",
  "Experience" : "./exp.html",
};

function loadNavigation(pageName) {
  let ul = document.createElement('ul');
  ul.setAttribute('id', "navigation");

  for (key in pages) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', pages[key]);
    if (key == pageName) {
      a.setAttribute('class', "active");
    }
    a.innerHTML = key;
    li.appendChild(a);
    ul.appendChild(li);
  }

  document.body.appendChild(ul);
}