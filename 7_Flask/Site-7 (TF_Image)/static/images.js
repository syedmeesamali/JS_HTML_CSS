document.addEventListener('DOMContentLoaded', () => {

  const fileInput =  document.getElementById("file-input");
  const image = document.getElementById("image");
  let model;      //To later work with the mobilenet model

  //Get the image from the input box / button
  function getImage(){
    if (!fileInput.files[0]) throw new Error("Image not found");
    const file = fileInput.files[0];
    
    //File reader is an asynchronous function.
    const reader = new FileReader();
    console.log("Image is here!");
    reader.onload = function(event) {
      image.setAttribute("src", event.target.result);
      document.body.classList.add("image-loaded");
    }

    reader.readAsDataURL(file);
  } //End of getImage


  //Async loading of the main model
  mobilenet.load().then(function (m) {
    //save the model
    model = m;
    document.body.classList.remove("loading");
    
    //When user loads image, should be displayed
    fileInput.addEventListener("change", getImage);

  })

});