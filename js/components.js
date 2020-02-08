function loadHead() {
  let title = document.createElement('title');
  title.innerHTML = 'Cornelis de Mooij - Software &amp; Aerospace Engineer';
  document.head.appendChild(title);

  let charset = document.createElement('meta');
  charset.setAttribute('charset', 'UTF-8');
  document.head.appendChild(charset);
  
  let description = document.createElement('meta');
  description.setAttribute('name', 'description');
  description.setAttribute('content', 'Personal page of Cornelis de Mooij');
  document.head.appendChild(description);

  let keywords = document.createElement('meta');
  keywords.setAttribute('name', 'keywords');
  keywords.setAttribute('content', 'Software, Aerospace, Engineer');
  document.head.appendChild(keywords);

  let author = document.createElement('meta');
  author.setAttribute('name', 'author');
  author.setAttribute('content', 'Cornelis de Mooij');
  document.head.appendChild(author);

  let stylesheet = document.createElement('link');
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute('type', 'text/css');
  stylesheet.setAttribute('href', './css/style.css');
  document.head.appendChild(stylesheet);

  let icon = document.createElement('link');
  icon.setAttribute('rel', 'shortcut icon');
  icon.setAttribute('type', 'image/png');
  icon.setAttribute('href', './images/favicon.png');
  document.head.appendChild(icon);
}

let pages = {
  "Home" : "./index.html",
  "Education" : "./edu.html",
  "Experience" : "./exp.html",
};

function loadHeader(pageName) {
  loadBanner();
  loadName();
  loadNavigation(pageName);
}

function loadBanner() {
  let banner = document.createElement('div');
  banner.setAttribute('class', 'banner');

  let portrait = document.createElement('img');
  portrait.setAttribute('class', 'portrait');
  portrait.setAttribute('src', './images/portrait.png');
  portrait.setAttribute('alt', 'Cornelis de Mooij');
  portrait.setAttribute('title', 'Cornelis de Mooij');

  banner.appendChild(portrait);
  document.body.appendChild(banner);
}

function loadName() {
  let name = document.createElement('div');
  name.setAttribute('class', 'name');
  name.innerHTML = '<b>Cornelis de Mooij - Aerospace &amp; Software Engineer</b>';
  document.body.appendChild(name);
}

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