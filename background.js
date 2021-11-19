const params = {
  active: true,
  currentWindow: true,
};

chrome.browserAction.onClicked.addListener((tab) => {
  let str = "Hello";
  chrome.tabs.sendMessage(tab.id, str);
});

chrome.runtime.onMessage.addListener(function (request) {
  if (request.state == "open") {
    chrome.browserAction.setIcon({ path: "C:\Users\shrey\OneDrive\Desktop\Picture-in-Picture\open.png" });
  } else if (request.state == "close") {
    chrome.browserAction.setIcon({ path: "C:\Users\shrey\OneDrive\Desktop\Picture-in-Picture\close.png" });
  } else {
    console.log("image issue");
  }
});
