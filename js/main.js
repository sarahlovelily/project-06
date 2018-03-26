$('#mediaplayer').mediaelementplayer({
  features:['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],

});

////variables
const lines = document.querySelectorAll(".transcript");
const video = document.getElementsByTagName("video")[0];
const text = document.querySelector(".transcriptWrapper");

// highlight text as video plays
video.addEventListener("timeupdate", () => {
  for (var i = 0; i < lines.length; i++) {

    let start = lines[i].getAttribute("data-start");
    let end = lines[i].getAttribute("data-end");
    let now = video.currentTime;

        if (now >= start && now < end) {
          lines[i].className = "highlight";
        } else {
          lines[i].className = "";
        }
      }
});


// interactive transcript
text.addEventListener("click", (e) => {
  let currentTime = e.target.getAttribute("data-start");
  if (currentTime) {
    video.setCurrentTime(currentTime);
  }
});
