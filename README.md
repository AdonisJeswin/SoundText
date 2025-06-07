# 🔊 Text to Speech Reader - Chrome Extension

A lightweight and accessible Chrome Extension that reads web content aloud — perfect for multitasking, improving accessibility, or simply listening on the go. Supports selected text, full page reading, playback controls, and adjustable speech speed.

---
## 🚀 Features

- ✅ Read selected text or entire webpage content
- ⏯️ Control playback: Play, Pause, Resume
- 🎚 Adjust speaking rate (slow to fast)
- 🎧 Clean and simple popup UI
- 🌍 Works on most websites
- 🔒 No internet required — uses native Web Speech API

---

## 🖥 Demo
```
<img src="icons/icon.png" alt="Extension Icon" width="128">
```
---

## 📦 Folder Structure

```
text-to-speech-reader/
├── background.js
├── content.js
├── manifest.json
├── popup.html
├── popup.js
└── icons/
└── icon.png
```
---

##  📷 Icon Requirement 

```
Make sure your icon is a square PNG (128x128 recommended).
```
---

## 🛠 Installation Steps

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable “Developer mode” (top right)
4. Click “Load unpacked”
5. Select the folder containing this extension
6. You’ll see the Text to Speech icon in your extensions bar 🎉

----

## 💡 How It Works

- When you click the extension, a popup lets you:
  - Read the entire page
  - Read selected text only
  - Pause, resume, or change speed
- Uses JavaScript's built-in `SpeechSynthesis` API
- Injects code via `chrome.scripting` to interact with the current tab

---

## 🧠 Developers
- **Adonis Jeswin**
- **Krishal Haria**

---

## ⚠️ Limitations

- Doesn’t work on system pages like chrome://, new tab, or Chrome Web Store due to browser restrictions
- Some dynamic or JavaScript-heavy pages (like ChatGPT) may block content scripts

---

## 📜 License

- This project is licensed under the MIT License — feel free to use, modify, and share it.
- Just don’t forget to give us credit!

---
