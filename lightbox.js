// JavaScript Document
//Projekt 2: Langeskov  Borgerforening

//Javascript for event 1
document.getElementById("clickme").addEventListener("click", function() {
  document.getElementById("lightbox").className = "open";
});

document.getElementById("close").addEventListener("click", function() {
  document.getElementById("lightbox").className = "";
});

document.getElementById("lightbox").addEventListener("click", function(e) {
  if (e.target.id == "lightbox") {
    document.getElementById("lightbox").className = "";
  }
});

//Javascript for event 2
document.getElementById("clickme_1").addEventListener("click", function() {
  document.getElementById("lightbox_1").className = "open";
});

document.getElementById("close_1").addEventListener("click", function() {
  document.getElementById("lightbox_1").className = "";
});

document.getElementById("lightbox_1").addEventListener("click", function(e) {
  if (e.target.id == "lightbox_1") {
    document.getElementById("lightbox_1").className = "";
  }
});
