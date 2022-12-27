/*var cip = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
} */

const clip = document.querySelectorAll(".clip");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseenter", function (e) {
    clip[i].play();
  });

  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
}

/*popup video */
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
};

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal3.style.display = "none";
};

// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption");
img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal4.style.display = "none";
};
// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption");
img5.onclick = function () {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal5.style.display = "none";
};
// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption");
img6.onclick = function () {
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal6.style.display = "none";
};
// Get the modal
var modal7 = document.getElementById("myModal7");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7 = document.getElementById("myImg7");
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption");
img7.onclick = function () {
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[6];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal7.style.display = "none";
};
// Get the modal
var modal8 = document.getElementById("myModal8");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8 = document.getElementById("myImg8");
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption");
img8.onclick = function () {
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText8.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[7];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal8.style.display = "none";
};

