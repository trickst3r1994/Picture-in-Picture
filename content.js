async function pipCreation(video) {
  var key = 0;
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
      chrome.runtime.sendMessage({ state: "close" });
    } else {
      await video.requestPictureInPicture();
      chrome.runtime.sendMessage({ state: "open" });
    }
  } catch (err) {
    chrome.runtime.sendMessage({ state: "disabled" });
    // Video failed to enter/leave Picture-in-Picture mode.
  }
  console.log(key);
}

function selectVideo() {
  document.querySelectorAll("video").forEach((item) => {
    if (item.paused == true) {
      console.log("ok");
    } else {
      pipCreation(item);
    }
  });
}

chrome.runtime.onMessage.addListener(function () {
  selectVideo();
});
