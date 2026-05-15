# 🚨 Emergency Hotline - জরুরি সেবা ডিরেক্টরি

A website to find Bangladesh emergency hotline numbers quickly.

## 🔗 Live Link
[Click Here](#) <!-- পরে live link দেব -->

---

## ❓ JavaScript DOM Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?

- `getElementById` — একটি নির্দিষ্ট ID দিয়ে একটাই element খোঁজে। যেমন: `document.getElementById('heart-count')`
- `getElementsByClassName` — একটি class দিয়ে সব matching elements এর একটা collection return করে।
- `querySelector` — CSS selector দিয়ে প্রথম matching element খোঁজে। যেমন: `document.querySelector('.hrt')`
- `querySelectorAll` — CSS selector দিয়ে সব matching elements এর একটা NodeList return করে।

---

### 2. How do you create and insert a new element into the DOM?

প্রথমে `document.createElement()` দিয়ে element তৈরি করতে হয়, তারপর `appendChild()` দিয়ে DOM এ যোগ করতে হয়।

```javascript
const div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);
```

---

### 3. What is Event Bubbling and how does it work?

Event Bubbling মানে হলো যখন একটা child element এ event trigger হয়, সেই event টা parent element এও চলে যায়। যেমন একটা button এ click করলে সেই click event button থেকে div, তারপর body, তারপর document পর্যন্ত "bubble" করে উপরে উঠতে থাকে।

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো parent element এ event listener বসানো, child element এ না বসিয়ে। এটা useful কারণ:
- অনেক child element এর জন্য আলাদা আলাদা listener লাগে না
- Dynamic ভাবে যোগ করা element এও কাজ করে
- Memory কম লাগে

এই project এ heart button এর জন্য `document.addEventListener('click')` use করা হয়েছে — এটাই Event Delegation এর উদাহরণ।

---

### 5. What is the difference between preventDefault() and stopPropagation()?

- `preventDefault()` — element এর default behavior বন্ধ করে। যেমন form submit হলে page reload হয়, `preventDefault()` দিলে হয় না।
- `stopPropagation()` — event কে parent element এ bubble করা থেকে বন্ধ করে। মানে event উপরে যেতে পারে না।

---

## ⚙️ Technology Used
- HTML
- Tailwind CSS
- Vanilla JavaScript
## 👨‍💻 Developer
- ruksat13