
let scoreHiddenEnabled = localStorage['scoresHidden'] || 'no';

function disable() {
  chrome.tabs.executeScript({
    code: 'localStorage.setItem("scoresHidden","no");location.reload();'
  });
}

function enable() {
  chrome.tabs.executeScript({
    code: 'localStorage.setItem("scoresHidden","yes");scrubResultsPage()'
  });
}

document.getElementById('score-toggle').addEventListener('click', scoresHiddenCheck);

function scoresHiddenCheck() {
    if (scoreHiddenEnabled === 'yes') {
        document.getElementById('score-toggle').classList.remove('score-toggle-active');
        localStorage.setItem('scoresHidden', 'no');
        scoreHiddenEnabled = 'no';
        disable();
    }
    else {
        document.getElementById('score-toggle').classList.add('score-toggle-active');
        enable();
        localStorage.setItem('scoresHidden', 'yes');
        scoreHiddenEnabled = 'yes';
    }
}


if (scoreHiddenEnabled === 'yes') {
    enable();
    document.getElementById('score-toggle').classList.add('score-toggle-active');
}
