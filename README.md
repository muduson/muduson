- 👋 Hi, I’m @muduson
- 👀 I’m interested in Cyber security and digital forensics with little passion about development
- 🌱 I’m currently learning a degree of cyber security
- 💞️ I’m looking to collaborate on developing new ideas upon security tools
- 📫 you can approach me via whatsApp contact +255776297700
- ⚡ Fun fact: am little joker

# 🧾 Read Me

## 🛠️ Tools Used

- **HTML5** – Structuring content and layout
- **CSS3** – Styling, responsive layouts, and dark mode support
- **JavaScript** – Interactive behavior and client-side validation
- **LocalStorage** – Preserving user theme preferences
- **Visual Studio Code (VS Code)** – Primary code editor
- **Browser Developer Tools** – For testing, debugging, and layout inspection

---

## 🚀 Key Features Implemented

- Responsive navigation bar across all pages
- **Dark Mode Toggle** with persistence using `localStorage`
- Time-based greeting message on page load
- Client-side validation for:
  - **Contact Form**
  - **Survey Form**
- Dynamic project detail display on the Portfolio page
- Clean, mobile-friendly layout using media queries
- Accessible and consistent design across the site

---

## ⚙️ Challenges Faced and Solutions

### 1. **Dark Mode Toggle Not Working**
**Issue:** The toggle button didn’t respond to clicks on some pages.  
**Solution:** Ensured the `themeToggle` button existed in the DOM before attaching the event listener and linked the main script (`script.js`) at the bottom of each HTML page.

### 2. **Form Validation Edge Cases**
**Issue:** Blank messages and invalid emails were still submitting.  
**Solution:** Used regular expressions to validate email formats and added `trim()` checks to message fields.

### 3. **Responsive Layout Breaks on Mobile**
**Issue:** The portfolio and two-column layouts weren’t rendering well on small screens.  
**Solution:** Added media queries to stack columns and reduce grid columns based on screen size.

### 4. **Style Conflicts in Dark Mode**
**Issue:** Some elements had poor contrast or weren’t switching colors correctly.  
**Solution:** Created specific `.dark-mode` overrides for headers, navs, links, and backgrounds.

---

## 📁 Folder Structure (Optional)



<!---
muduson/muduson is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
