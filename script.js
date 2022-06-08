var currenthour = moment().hour();
var currentDay = $("#currentDay");
var saveButton9 = document.getElementById("nine");
var saveButton10 = document.getElementById("ten");
var saveButton11 = document.getElementById("eleven");
var saveButton12 = document.getElementById("twelve");
var saveButton13 = document.getElementById("thirteen");
var saveButton14 = document.getElementById("fourteen");
var saveButton15 = document.getElementById("fifteen");
var saveButton16 = document.getElementById("sixteen");
var saveButton17 = document.getElementById("seventeen");

var systemTime = moment().format("dddd, MMMM Do");

currentDay.text(systemTime);

var timeBlockArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function displayTimeBlockColors() {
  for (var i = 0; i < timeBlockArr.length; i++) {
    var currentTextEl = $("#" + timeBlockArr[i]);
    if (currenthour > timeBlockArr[i]) {
      currentTextEl.addClass("past");
    } else if (currenthour === timeBlockArr[i]) {
      currentTextEl.addClass("present");
    } else {
      currentTextEl.addClass("future");
    }
  }
}

function store() {
  var ninetextarea = document.getElementById("9").value;
  var tentextarea = document.getElementById("10").value;
  var eleventextarea = document.getElementById("11").value;
  var twelvetextarea = document.getElementById("12").value;
  var thirteentextarea = document.getElementById("13").value;
  var fourteentextarea = document.getElementById("14").value;
  var fifteentextarea = document.getElementById("15").value;
  var sixteentextarea = document.getElementById("16").value;
  var seventeentextarea = document.getElementById("17").value;

  localStorage.setItem(9, ninetextarea);
  localStorage.setItem(10, tentextarea);
  localStorage.setItem(11, eleventextarea);
  localStorage.setItem(12, twelvetextarea);
  localStorage.setItem(13, thirteentextarea);
  localStorage.setItem(14, fourteentextarea);
  localStorage.setItem(15, fifteentextarea);
  localStorage.setItem(16, sixteentextarea);
  localStorage.setItem(17, seventeentextarea);
}

saveButton9.addEventListener("click", store);
saveButton10.addEventListener("click", store);
saveButton11.addEventListener("click", store);
saveButton12.addEventListener("click", store);
saveButton13.addEventListener("click", store);
saveButton14.addEventListener("click", store);
saveButton15.addEventListener("click", store);
saveButton16.addEventListener("click", store);
saveButton17.addEventListener("click", store);

displayTimeBlockColors();

function retrieveText(){
    for(var i =0;i<9;i++){
        var value = localStorage.getItem(i+9);
        document.getElementById(i+9).value = value;
    }
}

retrieveText();
