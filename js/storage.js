function saveConfig(items, callback) {
  chrome.storage.local.set(items, function() {
    callback();
  });
};

function loadConfig(callback) {
  chrome.storage.local.get({
    refreshRate: 10,
    successMessage: "Everything is passing",
    hideCursor: false,
  }, function(items) {
    callback(items);
  });
};