let synth = window.speechSynthesis;
let utterance = null;
let speed = 1.0;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'read') {
    if (synth.speaking) synth.cancel();

    let text = msg.selection
      ? window.getSelection().toString()
      : document.body.innerText;

    if (!text.trim()) {
      alert("No text found to read.");
      return;
    }

    utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed;
    synth.speak(utterance);
  }

  else if (msg.action === 'pause') {
    if (synth.speaking && !synth.paused) synth.pause();
  }

  else if (msg.action === 'resume') {
    if (synth.paused) synth.resume();
  }

  else if (msg.action === 'adjustSpeed') {
    speed = Math.max(0.1, Math.min(3.0, speed + msg.delta));
    sendResponse({ speed });
  }
});
