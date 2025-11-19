🎮 PixelHood GameZone
🧩 Overview

PixelHood GameZone is a modern and responsive web application where users can explore, view details, and download various popular games. It features Firebase authentication, protected routes, and dynamic content rendering powered by JSON data. This project was built as part of a web development assignment to demonstrate authentication, routing, and UI design skills.

🔗 Live Site: https://pixelhood-gamezone.web.app/

🚀 Features

✅ Single layout (common header & footer)

✅ Responsive navbar (login state )

✅ Firebase Email/Password + Google authentication

✅ Protected routes (Game Details & My Profile)

✅ Password validation rules

✅ Banner slider

✅ Popular games section (sorted by rating)

✅ Newsletter subscription

✅ Dynamic game details page

✅ Forget password (email reset)

✅ Profile update (name & photo URL)

✅ Custom 404 page

✅ Dynamic page titles

✅ Smooth animations (Framer Motion + GSAP)

✅ Extra two themed pages

## Tech Stack

| Category       | Technologies                      |
| -------------- | --------------------------------- |
| Frontend       | React, React Router, Tailwind CSS |
| Animation      | Framer Motion, GSAP               |
| Authentication | Firebase Authentication           |
| Hosting        | Firebase Hosting                  |
| Data Source    | Local JSON                        |
| Deployment     | Firebase CLI                      |



🧾 JSON Data Structure
```bash
{
  "id": "1",
  "title": "Player Unknowns Battle Ground: PUBG",
  "coverPhoto": "https://example.com/images/pubg.png",
  "category": "FPS",
  "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
  "description": "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
  "ratings": "4.5",
  "developer": "Krafton"
}
```

```bash
🛠 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/obaidullah-miazi-dev/PixelHood-GameZone.git
cd PixelHood-GameZone

2️⃣ Install Dependencies
npm install

3️⃣ Setup Firebase

Create .env.local:

VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id

4️⃣ Run Locally
npm run dev

```

**Home page**
![Screenshot](./src/assets/pixelhood-gamezone.web.app_.png)


🎨 UI Highlights

Clean modern UI

Tailwind responsive layout

Hover animations

Smooth transitions via Framer Motion

Themed custom 404 page

💡 Challenges Implemented

Secure password validation

Dynamic route handling

State management

Animated UI interactions

Password reset with Gmail redirect

Reusable component architecture

👤 Author  

👨‍💻 Obaidullah Miazi  
Student & Web Development Enthusiast  
📍 Bangladesh  
🔗 LinkedIn: www.linkedin.com/in/obaidullah-miazi  

📧 Email: obaidullahmiazi.dev@gmail.com  

🏆 Acknowledgement 

Thanks to Programming Hero for providing the project structure and guidelines.

📜 License

This project is open-source and available under the MIT License.