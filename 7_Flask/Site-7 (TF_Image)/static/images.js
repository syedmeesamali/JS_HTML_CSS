document.addEventListener('DOMContentLoaded', () => {

  const fileInput =  document.getElementById("file-input");
  const image = document.getElementById("image");

  fileInput.addEventListener("change", getImageDataUrl);

});