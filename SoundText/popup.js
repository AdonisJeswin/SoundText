let speed = 1.0;

function updateSpeedDisplay() {
  document.getElementById('speedDisplay').textContent = `Speed: ${speed.toFixed(1)}x`;
}

function ensureContentScript(tabId, callback) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ["content.js"]
  }, () => {
    if (chrome.runtime.lastError) {
      alert("⚠️ This page doesn't allow text-to-speech.\nTry on a normal site like Wikipedia.");
    } else {
      callback();
    }
  });
}

function sendMessage(action, data = {}) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    const tabId = tabs[0].id;

    ensureContentScript(tabId, () => {
      chrome.tabs.sendMessage(tabId, { action, ...data }, (response) => {
        if (chrome.runtime.lastError) {
          console.warn("Message error:", chrome.runtime.lastError.message);
        }

        if (response && response.speed !== undefined) {
          speed = response.speed;
          updateSpeedDisplay();
        }
      });
    });
  });
}

document.getElementById('readPage').onclick = () => sendMessage('read', { selection: false });
document.getElementById('readSelection').onclick = () => sendMessage('read', { selection: true });
document.getElementById('pause').onclick = () => sendMessage('pause');
document.getElementById('resume').onclick = () => sendMessage('resume');
document.getElementById('slowDown').onclick = () => sendMessage('adjustSpeed', { delta: -0.1 });
document.getElementById('speedUp').onclick = () => sendMessage('adjustSpeed', { delta: 0.1 });

updateSpeedDisplay();
