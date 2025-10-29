🎮 PixelHood 


🧩 Overview

PixelHood GameZone is a modern and responsive web application where users can explore, view details, and download various popular games.
It features Firebase authentication, protected routes, and dynamic content rendering powered by JSON data.
This project was built as part of a web development assignment to demonstrate authentication, routing, and UI design skills.

Live Site: https://pixelhood-gamezone.web.app/  


🚀 Features

✅ Single Layout Structure – Common header and footer across all pages.
✅ Responsive Navbar – Dynamic links that change based on login state.
✅ Firebase Authentication – Email-password & Google-based login/register system.
✅ Protected Routes – Game Details & My Profile pages accessible only to logged-in users.
✅ Password Validation – Includes uppercase, lowercase, and minimum length rules.
✅ Banner Slider – Interactive banner showcasing featured games.
✅ Popular Games Section – Sorted by rating, displayed using a responsive card layout.
✅ Newsletter Subscription – Users can subscribe to updates from the homepage.
✅ Game Details Page – Displays full information about each game dynamically.
✅ Forget Password – Fully functional password reset via email.
✅ Profile Update – Users can update their name and photo URL.
✅ 404 Page – Custom Not Found page for invalid routes.
✅ Dynamic Titles – Browser tab title updates with each page.
✅ Animation Library – Implemented Framer Motion & GSAP for smooth transitions.
✅ Additional Route – Includes two extra themed page related to the website’s concept.

🧠 Tech Stack
Category	Technologies
Frontend	React, React Router, Tailwind CSS
Animation	Framer Motion & GSAP
Authentication	Firebase Authentication
Hosting	Firebase Hosting
Data Source	Local JSON data
Deployment	Firebase CLI  


🧾 JSON Data Structure
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

🛠️ Installation & Setup
Clone the Repository
git clone https://github.com/obaidullah-miazi-dev/PixelHood-GameZone.git
cd PixelHood-GameZone

Install Dependencies
npm install

Create a Firebase Project

Go to Firebase Console

Create a new project

Enable Email/Password and Google authentication

Copy your Firebase config and add it to a .env.local file:

VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id

Run the Project Locally
npm run dev

📱 Pages & Routes
Route	Description	Access
/	Homepage with banner, popular games & newsletter	Public
/login	Login page with email/password & Google sign-in	Public
/register	Register new user	Public
/games/:id	Game details page	Protected
/my-profile	User profile page	Protected
/update-profile	Update user information	Protected
/forgot-password	Reset password via email	Public
/*	404 Not Found Page	Public
/extras	Additional themed route	Public  


🎨 UI Highlights

Clean, modern, and responsive UI built with Tailwind CSS

Game cards with hover effects

Smooth animations via Framer Motion

Custom 404 page with themed visuals  


💡 Challenges Implemented

Password validation logic for secure authentication

Dynamic routing and state management

Integration of Framer Motion for entry animations

Protected routes using Firebase user context

Forget password redirect to Gmail after reset

Reusable layout and component structure

👤 Author

👨‍💻 Obaidullah Miazi
Student & Web Development Enthusiast
📍 Bangladesh
🔗 www.linkedin.com/in/obaidullah-miazi  
📧 obaidullahmiazi.dev@gmail.com


🏆 Acknowledgement

Special thanks to Programming Hero for providing the project requirements and guidance that helped shape this project.


📜 License

This project is open source and available under the MIT License
.