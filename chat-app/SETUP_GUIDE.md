# 🚀 Quick Setup Guide

## Where to Save Each File

Follow this structure exactly:

```
chat-app/
│
├── index.html                          ← Root level
├── package.json                        ← Root level
├── vite.config.js                      ← Root level
├── README.md                           ← Root level
│
├── src/
│   ├── main.jsx                        ← src/main.jsx
│   ├── App.jsx                         ← src/App.jsx
│   │
│   ├── components/
│   │   ├── NicknameInput.jsx          ← src/components/NicknameInput.jsx
│   │   ├── ChatWindow.jsx             ← src/components/ChatWindow.jsx
│   │   └── MessageInput.jsx           ← src/components/MessageInput.jsx
│   │
│   └── styles/
│       ├── index.css                   ← src/styles/index.css
│       ├── App.css                     ← src/styles/App.css
│       ├── NicknameInput.css          ← src/styles/NicknameInput.css
│       ├── ChatWindow.css             ← src/styles/ChatWindow.css
│       └── MessageInput.css           ← src/styles/MessageInput.css
```

## Step-by-Step Setup

### 1. Create the Folder Structure
```bash
mkdir chat-app
cd chat-app
mkdir -p src/components src/styles
```

### 2. Create Files in Order

**Root Level Files:**
1. `package.json` - Dependencies and scripts
2. `vite.config.js` - Vite configuration
3. `index.html` - HTML entry point

**src Folder:**
4. `src/main.jsx` - React entry point
5. `src/App.jsx` - Main app component

**src/components:**
6. `src/components/NicknameInput.jsx` - Welcome screen
7. `src/components/ChatWindow.jsx` - Messages display
8. `src/components/MessageInput.jsx` - Message input

**src/styles:**
9. `src/styles/index.css` - Global styles
10. `src/styles/App.css` - App layout
11. `src/styles/NicknameInput.css` - Welcome screen styles
12. `src/styles/ChatWindow.css` - Messages styles
13. `src/styles/MessageInput.css` - Input styles

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the App
```bash
npm run dev
```

### 5. Open Browser
Navigate to `http://localhost:5173`

## ✅ Verification Checklist

After setup, check:
- [ ] All files are in the correct folders
- [ ] `npm install` runs without errors
- [ ] `npm run dev` starts the dev server
- [ ] Browser shows the welcome screen
- [ ] You can enter a nickname and send messages
- [ ] Messages persist after page refresh

## 🆘 Troubleshooting

### "Module not found" errors
- Check that all imports match the file locations
- Verify file names are correct (case-sensitive)

### Styles not loading
- Ensure CSS files are imported in their respective components
- Check that `index.css` is imported in `main.jsx`

### Port already in use
- Change the port: `npm run dev -- --port 3000`

### Dependencies failed to install
- Try: `npm install --legacy-peer-deps`
- Or: `rm -rf node_modules package-lock.json && npm install`

## 🎯 Testing the App

1. **Enter a nickname** - Should take you to the chat screen
2. **Send a message** - Should appear on the right side
3. **Switch user** - Click "Switch User", enter a new name
4. **Send another message** - Should appear on the left side
5. **Refresh the page** - All messages should still be there
6. **Clear chat** - Should remove all messages

## 📱 Mobile Testing

1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select a mobile device (e.g., iPhone 12)
4. Test all features on mobile view

## 🎨 Color Customization Quick Reference

Edit `src/styles/index.css`:

```css
:root {
  --accent-primary: #d97757;    /* Main brand color */
  --accent-hover: #c56345;      /* Hover state */
  --bg-primary: #faf8f6;        /* Background */
  --text-primary: #2d2a27;      /* Text color */
}
```

## 💪 You're Ready!

Your chat app is now set up and ready for your internship presentation. Good luck! 🎉

---

**Need help?** Review the main README.md for detailed documentation.
