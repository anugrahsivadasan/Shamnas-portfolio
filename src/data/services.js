// src/data/services.js
import {
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaCreditCard,
  FaMapMarkedAlt,
  FaPalette,
  FaGlobe,
} from "react-icons/fa";

export const services = [
  {
    title: "Flutter Development",
    description:
      "Flutter developer specializing in scalable cross-platform applications, advanced state management, native integrations, and custom package development—including extending and enhancing existing packages.",
    icon: FaMobileAlt,
  },
  {
    title: "REST API Integration",
    description:
      "Experienced in integrating mobile applications with RESTful APIs to fetch, send, and update data securely. Skilled in handling JSON responses, authentication (Token/Bearer), error handling, pagination, and optimized API performance.",
    icon: FaServer,
  },
  {
    title: "Firebase & Cloud Services",
    description:
      "Experienced in integrating Firebase services such as Authentication, Firestore, Realtime Database, Storage, and Firebase Cloud Messaging (FCM) for scalable mobile apps.",
    icon: FaCloud,
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Implementing secure payments using Stripe, Razorpay, and in-app purchases with proper validation and subscription flows.",
    icon: FaCreditCard,
  },
  {
    title: "Google Maps & Location Services",
    description:
      "Building map-based mobile apps using Google Maps, including navigation, live tracking, place search, and location-based features.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating clean, modern, and user-friendly mobile app designs focused on smooth and professional user experience.",
    icon: FaPalette,
  },
  {
    title: "Web Development",
    description:
      "Building modern and responsive websites using React with clean UI and smooth user experience.",
    icon: FaGlobe,
  },
];
