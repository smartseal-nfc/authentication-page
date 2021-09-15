// Show/hide text description
var desc = document.querySelector('.description');
desc.onclick = function() {
  desc.classList.toggle('hide');
}

var close = document.querySelector('.btn-close');
close.onclick = function() {
  document.querySelector('.auth-page-wrapper').style.display = 'none';
}

// Prevent overlay if there's no payload
if (!window.location.protocol.includes('file') && // Always display locally
    !window.location.href.includes('?pl=')) {
  document.querySelector('.auth-page-wrapper').style.display = 'none';
}
