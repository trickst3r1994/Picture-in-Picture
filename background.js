const params = {
  active: true,
  currentWindow: true,
};

chrome.browserAction.onClicked.addListener((tab) => {
  let str = "Hello";
  chrome.tabs.sendMessage(tab.id, str);
});

// chrome.runtime.onMessage.addListener(function (word) {
//   if (word.message == "not supported") {
//     chrome.browserAction.setIcon({ path: "icon.png" });
//   } else if (word.message == "disable") {
//     chrome.browserAction.setIcon({ path: "download.png" });
//   } else if (word.message == "enable") {
//     chrome.browserAction.setIcon({ path: "images.png" });
//   } else {
//     chrome.browserAction.setIcon({ path: "icon.png" });
//   }
//   console.log(word.message);
// });
