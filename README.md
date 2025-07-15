
# 💼 Tushal Joshi - Developer Portfolio

A modern, responsive, and interactive **personal developer portfolio website** built using **React**, **Tailwind CSS**, **Framer Motion**, and **EmailJS**. It showcases my work, experience, and skills with a dynamic, animated interface to impress recruiters and collaborators.

---

## 🚀 Features

- 🔥 **Earth Canvas**
- 💬 **Contact Form with EmailJS Integration**
- 📩 **Auto-confirmation emails** after contact or testimonial submission
- 📱 **Fully responsive design** across all devices
- ✨ **Animated project showcase** using GSAP + ScrollTrigger
- 🎨 **Dark themed UI** with Tailwind CSS
- 📝 **User-submitted testimonials** (stored locally, expandable)
- ⚙️ **Technologies & skills** carousel

---

## 🧰 Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [EmailJS](https://www.emailjs.com/) – For sending emails without a backend

---

## 📂 Folder Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/            # All static assets (images/icons)
│   ├── components/        # UI components (Navbar, Footer, Works, etc.)
│   ├── constants/         # Data for projects, testimonials, skills
│   ├── hoc/               # Higher Order Components
│   ├── pages/             # Page sections like About, Contact
│   ├── styles/            # Global styles (Tailwind config)
│   └── App.jsx
├── .env.local             # EmailJS API keys (do not share publicly)
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Make sure to create a `.env.local` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_THANKYOU_TEMPLATE_ID=your_thankyou_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> 💡 Get these credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/).

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Tushaljoshi/My_Portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be live at [http://localhost:5173](http://localhost:5173)

---

## 🌐 Live Demo

🔗 [Visit My Live Portfolio](https://my-portfolio-git-main-maxs-projects-462be51d.vercel.app/)

---

## 📧 Contact Me

- 📬 [tushaljoshi1@gmail.com](mailto:tushaljoshi1@gmail.com)
- 🌐 [LinkedIn](https://www.linkedin.com/in/tushaljoshi/)
- 🧑‍💻 [GitHub](https://github.com/Tushaljoshi)

---

## 📜 License

This project is licensed under the **MIT License**.

---

> Made with ❤️ by [Tushal Joshi](https://github.com/Tushaljoshi)
