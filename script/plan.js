function selectDay(idd) {
  const Day = document.getElementById(idd);
  const elem = document.getElementById(idd).querySelector("ul");
  const tri = document.getElementById(idd).querySelector(".triangle");
  const resetday = document.getElementsByClassName("day");
  const resetul = document.getElementsByClassName("main");
  const arrow = document.getElementsByClassName("triangle");
  if (Day.style.border == "3px solid var(--Blue2)") {
    for (let i = 0; i < resetday.length; i++) {
      resetday[i].style.border = "none";
      resetul[i].style.opacity = "0";
      arrow[i].style.opacity = "0";
      resetul[i].style.display = "none";
      arrow[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < resetday.length; i++) {
      resetday[i].style.border = "none";
      resetul[i].style.opacity = "0";
      arrow[i].style.opacity = "0";
      resetul[i].style.display = "none";
      arrow[i].style.display = "none";
    }
    Day.style.border = "3px solid var(--Blue2)";
    elem.style.display = "block";
    tri.style.display = "block";
    elem.style.opacity = "100%";
    tri.style.opacity = "100%";
  }
}

//body fulling
let two = `
<div class="two">
  <h5>7-17 MIN</h5>
  <p>EACH DAY</p>
</div>
`;
let exercices = `
  <div class="exercice">
        <div class="box">
            <video
              id="myImg"
              src="video/exe/exe.mp4"
              class="clip"
              muted
              width="100%"
              height="auto"
              type="video/mp4"
            ></video>       
        </div>
        <div class="describe-exercice">
                <h3>Exercice Name</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <hr />
                <p class="group"><span>Groups:</span> Three to four</p>
                <p class="rep"><span>Repition:</span> Eigth to fifteen</p>
        </div>
    </div>
    <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <video class="modal-content" id="img01" autoplay loop>
    </div>  
  `;
let excs = '<div class="container">';
for (let i = 0; i < 4; i++) {
  excs += exercices;
}
excs += "</div>";
let three = '<div class="three">';
for (let i = 0; i < 7; i++) {
  three += `
  <div class="day${i + 1} day" id="DAY${i + 1}">
    <div onclick="selectDay('DAY${i + 1}')">
      <p>day ${i + 1}</p>
      <ion-icon name="checkmark-circle-outline"></ion-icon>
    </div>
    <p class="triangle"></p>
    <ul class="main">
    `;
  three += excs;
  three += "</ul></div>";
}
three += "</div>";
let week = document.querySelectorAll(".week1");
for (let i = 0; i < 4; i++) {
  let one = `
    <div class="one">
      <div calss="decoration"></div>
      <h5>WEEK ${i + 1}</h5>
    </div>
  `;

  week[i].innerHTML += one + two + three;
}
