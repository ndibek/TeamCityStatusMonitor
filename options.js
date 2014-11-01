function save_options() {
  var r = document.getElementById('refreshRate').value;
  chrome.storage.sync.set({
    refreshRate: r,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    refreshRate: 10,
  }, function(items) {
    document.getElementById('refreshRate').value = items.refreshRate;
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