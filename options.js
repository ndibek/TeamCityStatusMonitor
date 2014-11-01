function save_options() {
  var r = document.getElementById('refreshRate').value;
  var msg = document.getElementById('successMessage').value;
  var hc = document.getElementById('hideCursor').checked;
  chrome.storage.local.set({
    refreshRate: r,
    successMessage: msg,
    hideCursor: hc,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

function restore_options() {
  chrome.storage.local.get({
    refreshRate: 10,
    successMessage: "It's all good",
    hideCursor: false,
  }, function(items) {
    document.getElementById('refreshRate').value = items.refreshRate;
    document.getElementById('successMessage').value = items.successMessage;
    document.getElementById('hideCursor').checked = items.hideCursor;
  });
}

document.getElementById('refreshRate').onkeydown = function() {
	return ( event.ctrlKey || event.altKey 
                    || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) 
                    || (95<event.keyCode && event.keyCode<106)
                    || (event.keyCode==8) || (event.keyCode==9) 
                    || (event.keyCode>34 && event.keyCode<40) 
                    || (event.keyCode==46) )
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);