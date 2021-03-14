document.addEventListener('DOMContentLoaded', () => {

  const fileInput =  document.getElementById("file-input");
  const image = document.getElementById("image");
  let model;      //To later work with the mobilenet model

function getImage(){
    if (!fileInput.files[0]) throw new Error("Image not found");
    const file = fileInput.files[0];
    
    //File reader is an asynchronous function.
    const reader = new FileReader();
    //console.log("Image is here!");
    reader.onload = function(event) {
      const dataUrl = event.target.result;
      const imageElement = new Image();
      imageElement.src = dataUrl;
      imageElement.onload = function () {
        image.setAttribute("src", this.src);
        image.setAttribute("height", this.height);
        image.setAttribute("width", this.width);

        //Classify
        classifyImage();
        }
        document.body.classList.add("image-loaded");
      }
    reader.readAsDataURL(file);
    } //End of getImage
  
    
});