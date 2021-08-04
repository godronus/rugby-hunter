const blacklistedTerms = [
  'back',
  'beat',
  'behind',
  'best',
  'brilliant',
  'come',
  'comeback',
  'claim',
  'crush',
  'dash',
  'defeat',
  'defend',
  'destroy',
  'difficult',
  'dominant',
  'down',
  'drop',
  'edged',
  'first',
  'forget',
  'grab',
  'high',
  'hope',
  'incredible',
  'last',
  'lead',
  'lesson',
  'level',
  'lose',
  'loss',
  'luck',
  'mammoth',
  'mounted',
  'rout',
  'seize',
  'stolen',
  'strong',
  'taught',
  'take',
  'trail',
  'triumph',
  'up',
  'victory',
  'weak',
  'whop',
  'win',
]

const scrubText = (str = '') => {
  const words = str.replace(/\d+\W+\d+/g, '').split(' ')
  for (let i = 0; i < words.length; i += 1) {
    blacklistedTerms.forEach((badTerm) => {
      if (words[i].toLowerCase().includes(badTerm)) {
        if (i > 0) words[i - 1] = ''
        if (i < words.length - 2) words[i + 1] = ''
        words[i] = ''
      }
    })
  }
  return words.filter(Boolean).join(' ');
}

const scrubResultsPage = () => {
  console.log('TCL: scrubResultsPage -> localStorage[scoresHidden]', localStorage['scoresHidden'])

  if (localStorage['scoresHidden'] === 'no') return

  const thumbnails = document.getElementsByClassName('ytd-thumbnail')
  for (let thumbnail of thumbnails) {
    if (thumbnail.id === 'mouseover-overlay' || thumbnail.id === 'hover-overlay') {
      thumbnail.style.display = 'none';
    } else if (thumbnail.localName === 'yt-img-shadow' && thumbnail.children[0]) {
      thumbnail.children[0].remove();
      thumbnail.parentNode.style.background = 'pink';
    }
  }

  const panels = document.getElementsByClassName('style-scope ytd-watch-flexy')
  for (let panel of panels) {
    if (panel.id === 'secondary' || panel.id === 'meta' || panel.id === 'info' ||  panel.id === 'comments') {
      panel.style.display = 'none';
    }
  }

  const videoTitleLinks = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-renderer')
  for (let videoTitleLink of videoTitleLinks) {
    videoTitleLink.title = '** HIDDEN VALUE **';
  }

  const videoTitles = document.getElementsByClassName('style-scope ytd-video-renderer')
  for (let videoTitle of videoTitles) {
    if (videoTitle.localName === 'yt-formatted-string') {
      const originalText = videoTitle.innerText;
      videoTitle.innerText = scrubText(originalText);
    }
  }

  console.log('TCL: scrubResultsPage -> window.location', window.location)
  if (window.location.pathname === '/') {
    const pageBlocks = document.getElementsByClassName('style-scope ytd-rich-grid-renderer')
    for (let block of pageBlocks) {
      if (block.id === 'contents') {
        block.innerHTML = `
          <div style="background:pink;text-align:center;width:100%;height:300px;padding-top:100px;">
            <h1>Scores are being hidden by Rugby Hunter</h1>
          </div>
        `
      }
    }
  }
}

const throttle = (fn, wait) => {
  var time = Date.now();
  return () => {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

document.addEventListener('scroll', throttle(scrubResultsPage, 3000));

chrome.runtime.onMessage.addListener((request) => {
  // listen for messages sent from background.js
  scrubResultsPage()
  if (request.message === 'url_changed' || request.message === 'loading_complete') {
    setTimeout(scrubResultsPage, 1500)
  }
});

scrubResultsPage()


