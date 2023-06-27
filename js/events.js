var modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("cert-icon2");
var modalImg = document.getElementsByClassName("modal-content");
var captionText = document.getElementsByClassName("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

for(var i = 0; i < img.length; i++) {
    var temp = modal[i]
    var temp2 = modalImg[i]
    var temp3 = captionText[i]
    img[i].onclick = function(){
        temp.style.display = "block";
        temp2.src = this.src;
        temp3.innerHTML = this.alt;
      };   
    span[i].onclick = function() {
        temp.style.display = "none";
    };
}
