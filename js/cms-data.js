/* Temple of Heal – Default CMS data
   Edit via admin/index.html  ·  Stored in localStorage as 'toh_cms'
*/
const TOH_CMS = {
  site: {
    name: "Temple of Heal",
    tagline: "Feeling doesn't mean damage. Allow yourself to change — access trusted professionals who meet you where you are on your healing journey.",
    about: "Temple of Heal is a wellness marketplace connecting individuals with verified coaches, therapists, yoga practitioners, and healing professionals for personal growth, mental wellness, and physical healing.",
    logo: "",
    email: "hello@templeofheal.com",
    phone: "+1 (416) 555-0192",
    address: "Wellness Plaza, Suite 210, Toronto, ON M5V 3A8, Canada",
    social: {
      instagram: "https://instagram.com/templeofheal",
      linkedin: "https://linkedin.com/company/templeofheal",
      facebook: "https://facebook.com/templeofheal",
      youtube: "https://youtube.com/@templeofheal"
    }
  },

  services: [
    {
      id: "counselling",
      name: "Individual Counselling & Psychotherapy",
      category: "Counselling",
      description: "One-on-one therapy sessions for emotional healing, mental health support, and personal transformation.",
      priceRange: "$80 – $180",
      sessionType: "virtual",
      duration: ["50 min", "80 min"],
      requiredFields: ["full_name", "email", "phone", "reason_for_visit", "age_group"],
      optionalFields: ["health_conditions", "previous_therapy", "preferred_time", "language_preference"],
      requiredDocs: ["professional_license", "liability_insurance", "id_verification"],
      optionalDocs: ["certifications", "bio_photo", "intro_video", "sample_testimonials"],
      isNew: false,
      isActive: true
    },
    {
      id: "coaching",
      name: "Life & Performance Coaching",
      category: "Coaching",
      description: "Coaching sessions to align your actions with your deepest goals and unlock your highest potential.",
      priceRange: "$60 – $220",
      sessionType: "both",
      duration: ["45 min", "60 min", "90 min"],
      requiredFields: ["full_name", "email", "phone", "coaching_goals", "current_challenges"],
      optionalFields: ["occupation", "budget", "preferred_coach_style", "timezone"],
      requiredDocs: ["coaching_certification", "id_verification"],
      optionalDocs: ["portfolio", "testimonials", "intro_video", "case_studies"],
      isNew: false,
      isActive: true
    },
    {
      id: "yoga",
      name: "Yoga Classes & Training",
      category: "Practices",
      description: "Traditional and contemporary yoga practices for all levels — from beginners to advanced practitioners.",
      priceRange: "$25 – $90",
      sessionType: "in-person",
      duration: ["60 min", "90 min"],
      requiredFields: ["full_name", "email", "experience_level", "physical_limitations"],
      optionalFields: ["preferred_style", "class_size", "equipment_available"],
      requiredDocs: ["yoga_teacher_training_cert", "first_aid_cert", "id_verification"],
      optionalDocs: ["studio_photos", "class_schedule", "speciality_certs"],
      isNew: true,
      isActive: true
    },
    {
      id: "meditation",
      name: "Meditation & Mindfulness",
      category: "Practices",
      description: "Guided meditation and mindfulness practices to cultivate inner calm and present-moment awareness.",
      priceRange: "$30 – $100",
      sessionType: "both",
      duration: ["30 min", "45 min", "60 min"],
      requiredFields: ["full_name", "email", "experience_level", "goals"],
      optionalFields: ["tradition_preference", "health_conditions", "time_available"],
      requiredDocs: ["meditation_certification", "id_verification"],
      optionalDocs: ["guided_audio_sample", "bio_photo", "certifications"],
      isNew: false,
      isActive: true
    },
    {
      id: "massage",
      name: "Massage Therapy",
      category: "Wellness",
      description: "Professional therapeutic massage for relaxation, pain relief, and physical restoration.",
      priceRange: "$70 – $180",
      sessionType: "in-person",
      duration: ["60 min", "90 min", "120 min"],
      requiredFields: ["full_name", "email", "phone", "health_conditions", "areas_of_concern"],
      optionalFields: ["pressure_preference", "allergies", "previous_injuries"],
      requiredDocs: ["massage_therapy_license", "liability_insurance", "id_verification", "health_board_registration"],
      optionalDocs: ["speciality_certs", "studio_photos", "equipment_list"],
      isNew: false,
      isActive: true
    },
    {
      id: "retreat",
      name: "Wellness Retreat",
      category: "Community",
      description: "Immersive multi-day retreats for deep healing, transformation, and community connection.",
      priceRange: "$350 – $1,200",
      sessionType: "in-person",
      duration: ["2 days", "3 days", "5 days", "7 days"],
      requiredFields: ["full_name", "email", "phone", "dietary_requirements", "medical_conditions", "emergency_contact"],
      optionalFields: ["roommate_preference", "previous_retreat_experience", "intention", "travel_needs"],
      requiredDocs: ["retreat_facilitator_cert", "venue_license", "liability_insurance", "id_verification", "first_aid_cert"],
      optionalDocs: ["retreat_brochure", "venue_photos", "past_retreat_photos", "testimonials", "itinerary"],
      isNew: true,
      isActive: true
    }
  ],

  experts: [
    {
      name: "Sina Dejnabadi",
      specialty: "Performance & Business Coach",
      rating: 4.8,
      reviews: 38,
      tier: "Silver",
      photo: "https://templeofheal.com/wp-content/uploads/2025/10/IMG_3918-2-300x300.jpg",
      bio: "Experienced business coach helping entrepreneurs and executives align their professional performance with personal wellbeing.",
      social: { linkedin: "#", instagram: "#" },
      nextSlot: "Tue, 2pm",
      isActive: true
    },
    {
      name: "Shohreh Bashar",
      specialty: "Inner Bloom Coach",
      rating: 5.0,
      reviews: 94,
      tier: "Gold",
      photo: "https://templeofheal.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-01-at-14.09.36_13721a8e-300x300.jpg",
      bio: "Master Coach and energy healing practitioner with 30+ years of experience in yoga, meditation, NLP, and holistic healing.",
      social: { linkedin: "#", instagram: "#" },
      nextSlot: "Mon, 3pm",
      featured: true,
      isActive: true
    },
    {
      name: "Alireza Sharifi",
      specialty: "NLP Coach",
      rating: 4.9,
      reviews: 61,
      tier: "Platinum",
      photo: "https://templeofheal.com/wp-content/uploads/2025/11/Dr-Alireza-Sharifi_Image-300x300.jpg",
      bio: "Certified NLP practitioner specialising in mindset transformation, habit change, and peak performance coaching.",
      social: { linkedin: "#", instagram: "#" },
      nextSlot: "Wed, 10am",
      isActive: true
    }
  ],

  testimonials: [
    {
      name: "Emily Johnson",
      quote: "Joining Temple of Heal was life-changing. Working with Shohreh completely shifted my perspective — I felt seen, heard, and genuinely guided toward healing for the first time in years.",
      rating: 5,
      avatar: "https://templeofheal.com/wp-content/uploads/2025/08/Exclusive-Customer-8.png",
      isActive: true
    },
    {
      name: "Sarah Lin",
      quote: "The AI matching was spot-on. Within minutes I was connected to a coach who truly understood my needs. Three months in and my confidence has completely transformed.",
      rating: 5,
      avatar: "https://templeofheal.com/wp-content/uploads/2025/08/Exclusive-Customer-7.png",
      isActive: true
    },
    {
      name: "Michael Carter",
      quote: "The retreat was beyond anything I imagined. Booking was seamless, the experience was profound, and the practitioners genuinely care. This platform is exactly what the wellness world needed.",
      rating: 5,
      avatar: "https://templeofheal.com/wp-content/uploads/2025/08/Exclusive-Customer-3.png",
      isActive: true
    },
    {
      name: "David Miller",
      quote: "I had tried other wellness apps but nothing came close to the personal attention and professionalism here. My sessions with Alireza transformed how I think and feel every day.",
      rating: 5,
      avatar: "https://templeofheal.com/wp-content/uploads/2025/08/Exclusive-Customer-15.png",
      isActive: true
    }
  ],

  faqs: [
    {
      question: "How do I know which coach, therapist, or healer is right for me?",
      answer: "Our AI-powered matching engine guides you through a short intake questionnaire and pairs you with the best-fit professional based on your goals, preferences, and budget. You can also browse all verified pros, read their bios and reviews, and book a free 15-minute discovery call before committing.",
      isActive: true
    },
    {
      question: "Is the same professional available online and offline?",
      answer: "Many of our practitioners offer both virtual and in-person sessions. Each provider's profile clearly indicates their availability modes. You can filter by 'Virtual', 'In-Person', or 'Both' when browsing sessions.",
      isActive: true
    },
    {
      question: "Do you offer trial sessions?",
      answer: "Yes! Most practitioners on Temple of Heal offer a complimentary 15-minute discovery call so you can ensure it's a good fit before booking a full session. Look for the 'Free Discovery Call' badge on their profiles.",
      isActive: true
    },
    {
      question: "What is your refund policy?",
      answer: "Sessions cancelled at least 24 hours in advance receive a full refund. Cancellations within 24 hours may be subject to the individual practitioner's policy, displayed on their profile. We always strive for fair outcomes.",
      isActive: true
    },
    {
      question: "Are all practitioners verified and credentialled?",
      answer: "Absolutely. Every professional on Temple of Heal undergoes a thorough application process: credential verification, background checks, and a quality review. The blue 'Verified Pro' badge confirms their status.",
      isActive: true
    }
  ]
};
