document.addEventListener('DOMContentLoaded', () => {

  const fileInput =  document.getElementById("file-input");
  const image = document.getElementById("image");

  //Get the image from the input box / button
  function getImage(){
    if (!fileInput.files[0]) throw new Error("Image not found");
    const file = fileInput.files[0];
    
    //File reader is an asynchronous function.
    const reader = new FileReader();
    
    reader.onload = function(event) {
      image.setAttribute("src", event.target.result);
      document.body.classList.add("image-loaded");
    }

    reader.readAsDataURL(file);
  } //End of getImage

  fileInput.addEventListener("change", getImage);

});