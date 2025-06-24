# Dog_API
# 🐶 DogPedia – A Dog Breed Gallery with Live Image Search

DogPedia is a simple and beautiful web application that allows users to browse random dog images or search for specific dog breeds. It uses the [Dog CEO API](https://dog.ceo/dog-api/) to fetch live data and display it in a stylish, responsive gallery. Built using plain HTML, CSS, and JavaScript, it offers a smooth experience with features like search, loading animation, and breed auto-suggestions.

---

## 📌 Features

- 🔄 Load random dog images with one click
- 🔍 Search for a specific breed
- 🐾 Auto-suggest breed names while typing
- 💡 Animated loader while images are fetched
- 🎨 Clean, responsive, and modern UI
- 🚀 Works entirely on the frontend using Dog API

---


## 🔍 How It Works (Solution & Approach)

1. **Page Initialization**
   - On page load, the app fetches a list of all dog breeds and displays 6 random dog images in the gallery.

2. **Search Form Handling**
   - When the user submits the search form, the app checks if a valid breed is entered.
   - It fetches 6 images of that specific breed using the Dog CEO API.

3. **Random Refresh Button**
   - When the user clicks "Load New Dogs", it fetches 6 random images from all breeds.

4. **Breed Auto-Suggestions**
   - The app populates a `<datalist>` to provide auto-complete suggestions as the user types a breed.

5. **Image Display & Animation**
   - Each image is displayed in a responsive card with a fade-in animation.
   - A loading spinner is shown while images are being fetched.

---

## 🚀 How to Run Locally

1. Clone or download this repository
2. Make sure the following files are in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
3. Open `index.html` in any modern web browser (Chrome, Firefox, etc.)

> ⚠️ No backend or server needed – this is a fully static web app.

---

## 🌐 How to Deploy (Vercel, GitHub Pages, etc.)

### ✅ Deploy on [Vercel](https://vercel.com)
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com), log in with GitHub
3. Click **"New Project"**, select your repo, and deploy
4. Done! You’ll get a live link like:  
   `https://your-project-name.vercel.app`

---
