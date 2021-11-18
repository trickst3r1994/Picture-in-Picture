async function pipCreation(video) {
  try {
    if (!document.pictureInPictureEnabled) {
      chrome.runtime.sendMessage({ message: "not supported" });
    } else if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
      chrome.runtime.sendMessage({ message: "enable" });
    } else {
      await video.requestPictureInPicture();
      chrome.runtime.sendMessage({ message: "disable" });
    }
  } catch (err) {
    // Video failed to enter/leave Picture-in-Picture mode.
    chrome.runtime.sendMessage({ message: "not supported" });
  }
}

function selectVideo() {
  document.querySelectorAll("video").forEach((item) => {
    if (item.paused == true) {
      console.log("1");
    } else {
      pipCreation(item);
    }
  });
}

chrome.runtime.onMessage.addListener(function () {
  selectVideo();
  console.log("success");
});
