function mouseOverImageContainer(imageContainer, description) {
  imageContainer.style.backgroundColor = 'rgb(211, 211, 219)';
  description.style.color = '#000';
}
function mouseOutImageContainer(imageContainer, description) {
  imageContainer.style.backgroundColor = 'rgb(41, 42, 37)';
  description.style.color = '#fff';
}
function mouseDownLink(imageContainer, description) {
  imageContainer.style.backgroundColor = 'rgb(216, 193, 158)';
  description.style.color = '#fff';
}
function mouseUpLink(imageContainer, description) {
  imageContainer.style.backgroundColor = 'rgb(211, 211, 219)';
  description.style.color = '#fff';
}

$(document).ready(function() {
  var dir = "./images/gallery";
  var fileExtension = ".jpg";
  $.ajax({
    // This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
      //List all jpg file names in the page
      $(data).find("a:contains(" + fileExtension + ")").each(function () {
          var filename = this.href.replace(window.location.host, "").replace("http:///","./");
          var name = filename.slice(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.')).replace(/%20/g, ' ');
          
          var imageContainer = document.createElement('div');
          imageContainer.classList.add('container');

          var link = document.createElement('a');
          link.href = filename;

          var image = document.createElement('img');
          image.src = filename;
          image.alt = name;
          image.title = name;

          var description = document.createElement('p');
          description.innerHTML = name;

          // Mouse events:
          imageContainer.addEventListener("mouseover", function() { mouseOverImageContainer(imageContainer, description) });
          imageContainer.addEventListener("mouseout", function() { mouseOutImageContainer(imageContainer, description) });
          imageContainer.addEventListener("mousedown", function() { mouseDownLink(imageContainer, description) });
          imageContainer.addEventListener("mouseup", function() { mouseUpLink(imageContainer, description) });

          // Add to the page:
          link.appendChild(image);
          imageContainer.appendChild(link);
          imageContainer.appendChild(description);
          document.getElementById('gallery').appendChild(imageContainer);
      });
    }
  });
});