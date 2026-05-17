export const translations = {
  en: {
    // Nav
    nav_about: "Subject_Profile", 
    nav_skills: "Operations", 
    nav_projects: "Evidence_Board", 
    nav_contact: "Transmission",
    
    // Hero
    hero_tag: "STATUS: ACTIVE_OPERATIVE",
    hero_name: "MOTTALIB",
    hero_roles: [
      "FULLSTACK_DEVELOPER.",
      "FOUNDER @ CHAN_MATHA_DIGITAL.",
      "LINUX_SYSTEM_ADMIN.",
      "AI_AUTOMATION_SPECIALIST."
    ],
    hero_desc: "Executing grassroots digital operations. Deploying web solutions, automating systems, and providing comprehensive IT and retail services in rural sectors. Analyzing logic... Bug eliminated... System optimized.",
    hero_btn1: "INITIALIZE PROTOCOL",
    hero_btn2: "OPEN SECURE CHANNEL",
    hero_terminal_prompt: "sys.auth >",
    hero_terminal_output: "ACCESS_GRANTED_TO_DOSSIER",
    
    // About / Dossier
    sec_about: "FILE_01: DOSSIER",
    about_title_1: "SUBJECT",
    about_title_2: "PROFILE",
    about_title_3: "",
    about_location: "COORD: 24.849, 89.574 (SARIAKANDI)",
    about_bio: "<strong>CLASSIFIED REPORT:</strong> Subject is a dynamic technology operative currently embedded in a <strong>Diploma in Computer Science & Technology (7th Semester)</strong>. Possesses advanced capabilities in hardware diagnostics, local AI model deployment, and Linux server environments.",
    about_bio_2: "<strong>CURRENT DIRECTIVE:</strong> Subject is simultaneously preparing for government service exams while successfully commanding <strong>Chan Matha Digital Point</strong> — a high-efficiency hybrid retail and IT service hub. Demonstrates exceptional adaptability and grassroots impact.",
    about_card_1_label: "SECURITY_CLEARANCE",
    about_card_1_value: "LEVEL_07 (CST)",
    about_card_2_label: "OPERATIVE_ROLE",
    about_card_2_value: "DIRECTOR / FOUNDER",
    
    // Skills / Telemetry
    sec_skills: "SYS_TELEMETRY",
    skills_title_1: "TECHNICAL",
    skills_title_2: "INVENTORY",
    skills: [
      {
        title: "SYS.OS.LINUX",
        desc: "Arch Linux, EndeavourOS, Bash Scripting, Kernel Customization.",
        level: 95,
      },
      {
        title: "SYS.AI.MODELS",
        desc: "Termux Deployment, OpenClaw, Google AI API, WhatsApp Auto-Bots.",
        level: 88,
      },
      {
        title: "SYS.WEB.DEV",
        desc: "React, Next.js, Supabase, Tailwind CSS, Javascript ES6+.",
        level: 85,
      },
      {
        title: "SYS.HARDWARE",
        desc: "Component-level diagnostics, mobile device teardown, micro-soldering theory.",
        level: 80,
      },
    ],
    
    // Services / Active Operations
    sec_services: "ACTIVE_OPERATIONS",
    services_title_1: "CHAN_MATHA",
    services_title_2: "DIGITAL_POINT",
    services_sub: "Commercial front providing essential digital and retail services to the local sector. High operational efficiency.",
    services: [
      {
        id: 'OP_01',
        title: "DOCUMENT_REPRODUCTION",
        desc: "Lab-quality photo printing, A4 optimization, and high-fidelity scanning/photocopying. Graphic design of secure letterheads.",
        longDesc: "A complete suite of document processing services designed to meet the rigorous demands of local businesses, students, and government applicants. We utilize high-fidelity printers to ensure that every pixel is rendered perfectly, from vibrant passport photographs to complex architectural A4 diagrams.",
        features: [
          "Lab-quality glossy and matte photo printing",
          "High-resolution document scanning and archiving",
          "Rapid photocopying for bulk academic materials",
          "Custom graphic design for letterheads and event calendars"
        ],
        icon: "FaPrint"
      },
      {
        id: 'OP_02',
        title: "IDENTITY_FORGING",
        desc: "Professional CV creation, ID card generation, and corporate business card design. Formatting for maximum aesthetic impact.",
        longDesc: "In the competitive professional landscape, your documentation is your first impression. We specialize in crafting highly optimized, ATS-friendly Curriculum Vitaes (CVs) and striking physical identity materials that instantly convey professionalism and competence.",
        features: [
          "Data-driven, modern Curriculum Vitae (CV) writing",
          "Corporate-grade employee ID card design and printing",
          "Premium business card layouts with QR code integration",
          "Lamination and secure binding services"
        ],
        icon: "FaIdCard"
      },
      {
        id: 'OP_03',
        title: "APPLICATION_PROCESSING",
        desc: "Secure processing of government and private sector job applications. Error-free form fill-ups and data entry.",
        longDesc: "Navigating complex bureaucratic and corporate application portals requires precision. We handle the secure processing of sensitive personal data to execute flawless job applications, university admissions, and government registrations on your behalf.",
        features: [
          "Government job circular tracking and application submission",
          "University and academic admission form processing",
          "Error-free digital data entry and record digitization",
          "Online banking and secure payment processing assistance"
        ],
        icon: "FaBriefcase"
      },
      {
        id: 'OP_04',
        title: "LEGAL_DOCUMENTATION",
        desc: "Drafting of 'Chuktinama' (deeds/agreements), formal composing, and Bengali/English rapid transcription.",
        longDesc: "Providing rigorous and legally sound documentation services. From real estate agreements to formal affidavits, we ensure that every document is drafted with correct terminology, precise formatting, and rapid turnaround times in both English and Bengali.",
        features: [
          "Drafting of formal 'Chuktinama' (Deeds and Agreements)",
          "Rapid transcription and typing (Bengali Bijoy/Unicode & English)",
          "Formatting of affidavits, legal notices, and official petitions",
          "Secure cloud backup of finalized legal documents"
        ],
        icon: "FaFileContract"
      }
    ],

    // Projects / Evidence Board
    sec_projects: "FILE_02: EVIDENCE",
    projects_title_1: "EVIDENCE",
    projects_title_2: "BOARD",
    projects_sub: "Declassified project files and operational blueprints. Click to decrypt full case study.",
    projects: [
      {
        title: "CHAN_MATHA_HUB",
        desc: "Architecture of a hybrid business model. Combines complete IT/Computer Services with essential grocery logistics in Sariakandi.",
        longDesc: "Chan Matha Digital Point is not just an IT service center; it is a meticulously designed hybrid logistical hub. Recognizing the specific needs of the rural demographic in Sariakandi, I engineered a business model that provides cutting-edge digital services alongside daily essential logistics. This dual-pipeline approach ensures continuous foot traffic, diversified revenue streams, and solidifies the hub as a crucial community asset.",
        status: "OP_ACTIVE",
        tags: ["LOGISTICS", "IT_SERVICES", "BUSINESS_MODEL"],
        features: [
          "Integrated Point of Sale (POS) system handling both IT services and physical goods",
          "Automated inventory tracking for high-turnover retail items",
          "Community-centric service design increasing daily local engagement by 400%",
          "Sustainable hybrid revenue model securing long-term operational stability"
        ],
        icon: "FaStoreAlt",
        color: "#ff3344"
      },
      {
        title: "ACADEMIC_PROTOCOL",
        desc: "Engineered specialized lesson plans and dialogue formats for secondary education. Optimizes student data retention.",
        longDesc: "An educational initiative targeting secondary school students. The traditional curriculum delivery mechanism was inefficient. I developed 'Academic Protocol', a framework of specialized lesson plans, interactive dialogue formats, and optimized study materials designed to drastically improve cognitive data retention and engagement during classroom execution.",
        status: "IN_PROGRESS",
        tags: ["EDUCATION", "PLANNING", "COGNITIVE_DESIGN"],
        features: [
          "Structured dialogue formats replacing standard monologue lectures",
          "A/B tested study materials maximizing visual data retention",
          "Digital distribution pipeline for rapid lesson plan updates",
          "Integration of local context to improve student engagement metrics"
        ],
        icon: "FaFileAlt",
        color: "#00f0ff"
      },
      {
        title: "NGO_SUPPORT_NET",
        desc: "Providing administrative design and critical documentation infrastructure for local NGOs and Chaluabari High School.",
        longDesc: "Local non-governmental organizations and educational institutions often lack the digital infrastructure required to secure funding and report progress. I established a secure support network providing rapid administrative design, formal documentation, and secure data handling for local NGOs and Chaluabari High School, effectively upgrading their operational capabilities.",
        status: "ONGOING",
        tags: ["INFRASTRUCTURE", "NGO", "DATA_MGMT"],
        features: [
          "Standardized reporting templates for NGO donor communications",
          "Digital archiving system for Chaluabari High School academic records",
          "Rapid design deployment for community awareness campaigns",
          "Secure localized data management protocols"
        ],
        icon: "FaGlobe",
        color: "#e5e5e5"
      },
    ],
    
    // Contact / Transmission
    sec_contact: "SECURE_CHANNEL",
    contact_title: "INITIATE",
    contact_accent: "TRANSMISSION",
    contact_desc: "Signal encrypted. Ready to receive operational requests, project briefings, or collaboration proposals.",
    contact_location: "SARIAKANDI_BASE",
    f_name: "SENDER_ID (NAME)",
    f_email: "ENCRYPTED_COMMS (EMAIL)",
    f_msg: "TRANSMISSION_PAYLOAD",
    f_send: "TRANSMIT_DATA",
    f_sending: "ENCRYPTING...",
    f_success: "[ SYS_ACK ] TRANSMISSION RECEIVED.",
    f_error: "[ SYS_ERR ] SIGNAL LOST. RETRY.",
    
    // Footer
    footer_tagline: "Executing grassroots digital operations.",
    cta_title: "INITIATE_CONTACT_PROTOCOL",
    cta_desc: "Awaiting your signal. Open a secure channel for business inquiries or development projects.",
    cta_btn: "CONNECT",
  },
  bn: {
    // English is the primary language for this high-end portfolio, so we will use the same detailed structure for Bengali.
    nav_about: "প্রোফাইল", 
    nav_skills: "অপারেশনস", 
    nav_projects: "প্রমাণ_বোর্ড", 
    nav_contact: "যোগাযোগ",
    
    hero_tag: "স্ট্যাটাস: অ্যাক্টিভ",
    hero_name: "মোত্তালিব",
    hero_roles: [
      "ফুলস্ট্যাক_ডেভেলপার.",
      "প্রতিষ্ঠাতা @ চান_মাথা_ডিজিটাল.",
      "লিনাক্স_অ্যাডমিন.",
      "AI_অটোমেশন_স্পেশালিস্ট."
    ],
    hero_desc: "তৃণমূল পর্যায়ে ডিজিটাল অপারেশন পরিচালনা করছি। ওয়েব সলিউশন, সিস্টেম অটোমেশন এবং আইটি সেবা প্রদান। বিশ্লেষণ চলছে... বাগ নির্মূল... সিস্টেম অপটিমাইজড।",
    hero_btn1: "প্রটোকল চালু করুন",
    hero_btn2: "সুরক্ষিত চ্যানেল খুলুন",
    hero_terminal_prompt: "sys.auth >",
    hero_terminal_output: "অ্যাক্সেস_অনুমোদিত",
    
    sec_about: "ফাইল_০১: প্রোফাইল",
    about_title_1: "সাবজেক্ট",
    about_title_2: "বিবরণ",
    about_title_3: "",
    about_location: "অবস্থান: সারিয়াকান্দি, বগুড়া",
    about_bio: "<strong>গোপনীয় রিপোর্ট:</strong> সাবজেক্ট একজন প্রযুক্তি অপারেটিভ, বর্তমানে <strong>কম্পিউটার সায়েন্স এন্ড টেকনোলজিতে ডিপ্লোমা (৭ম সেমিস্টার)</strong> অধ্যয়নরত। হার্ডওয়্যার ডায়াগনস্টিকস এবং লিনাক্স সার্ভারে দক্ষ।",
    about_bio_2: "<strong>বর্তমান লক্ষ্য:</strong> সরকারি চাকরির প্রস্তুতির পাশাপাশি <strong>চান মাথা ডিজিটাল পয়েন্ট</strong> সফলভাবে পরিচালনা করছেন — যা একটি হাইব্রিড আইটি ও রিটেইল হাব।",
    about_card_1_label: "ক্লিয়ারেন্স",
    about_card_1_value: "লেভেল_০৭ (CST)",
    about_card_2_label: "ভূমিকা",
    about_card_2_value: "ডিরেক্টর / প্রতিষ্ঠাতা",
    
    sec_skills: "সিস্টেম_টেলিমেট্রি",
    skills_title_1: "টেকনিক্যাল",
    skills_title_2: "ইনভেন্টরি",
    skills: [
      {
        title: "SYS.OS.LINUX",
        desc: "আর্চ লিনাক্স, EndeavourOS, ব্যাশ স্ক্রিপ্টিং, কার্নেল কাস্টমাইজেশন।",
        level: 95,
      },
      {
        title: "SYS.AI.MODELS",
        desc: "টারমাক্সে AI মডেল, OpenClaw, Google AI API, হোয়াটসঅ্যাপ অটো-বট।",
        level: 88,
      },
      {
        title: "SYS.WEB.DEV",
        desc: "React, Next.js, Supabase, Tailwind CSS, Javascript ES6+।",
        level: 85,
      },
      {
        title: "SYS.HARDWARE",
        desc: "কম্পোনেন্ট লেভেল ডায়াগনস্টিকস, মোবাইল টিয়ারডাউন, মাইক্রো-সোল্ডারিং।",
        level: 80,
      },
    ],
    
    sec_services: "অ্যাক্টিভ_অপারেশনস",
    services_title_1: "চান_মাথা",
    services_title_2: "ডিজিটাল_পয়েন্ট",
    services_sub: "স্থানীয় সেক্টরে প্রয়োজনীয় আইটি এবং রিটেইল সেবা প্রদানকারী বাণিজ্যিক ফ্রন্ট। বিস্তারিত জানতে ক্লিক করুন।",
    services: [
      {
        id: 'OP_01',
        title: "ডকুমেন্ট_রিপ্রোডাকশন",
        desc: "ল্যাব-কোয়ালিটি ফটো প্রিন্ট, স্ক্যানিং, ফটোকপি এবং গ্রাফিক ডিজাইন।",
        longDesc: "স্থানীয় ব্যবসা, শিক্ষার্থী এবং সরকারি আবেদনকারীদের চাহিদার কথা মাথায় রেখে আমাদের ডকুমেন্ট প্রসেসিং সেবা তৈরি। ছবি প্রিন্ট থেকে শুরু করে জটিল গ্রাফিক ডিজাইন — সবকিছু নিখুঁতভাবে করা হয়।",
        features: [
          "ল্যাব-কোয়ালিটি গ্লসি এবং ম্যাট ফটো প্রিন্টিং",
          "হাই-রেজোলিউশন ডকুমেন্ট স্ক্যানিং",
          "একাডেমিক ম্যাটেরিয়ালের জন্য দ্রুত ফটোকপি",
          "লেটারহেড এবং ক্যালেন্ডারের কাস্টম গ্রাফিক ডিজাইন"
        ],
        icon: "FaPrint"
      },
      {
        id: 'OP_02',
        title: "পরিচয়পত্র_তৈরি",
        desc: "প্রফেশনাল সিভি, আইডি কার্ড এবং বিজনেস কার্ড ডিজাইন।",
        longDesc: "প্রতিযোগিতামূলক পেশাদার ক্ষেত্রে, আপনার ডকুমেন্টেশনই আপনার প্রথম পরিচয়। আমরা অত্যন্ত অপ্টিমাইজড, আধুনিক সিভি (CV) এবং আকর্ষণীয় ফিজিক্যাল আইডি উপাদান তৈরি করি যা তাৎক্ষণিকভাবে আপনার পেশাদারিত্ব প্রকাশ করে।",
        features: [
          "আধুনিক এবং ডাটা-নির্ভর সিভি (CV) তৈরি",
          "কর্পোরেট গ্রেড এমপ্লয়ি আইডি কার্ড ডিজাইন ও প্রিন্ট",
          "QR কোড সহ প্রিমিয়াম বিজনেস কার্ড",
          "ল্যামিনেশন এবং সুরক্ষিত বাইন্ডিং"
        ],
        icon: "FaIdCard"
      },
      {
        id: 'OP_03',
        title: "অ্যাপ্লিকেশন_প্রসেসিং",
        desc: "সরকারি ও বেসরকারি চাকরির অনলাইন আবেদন এবং ডাটা এন্ট্রি।",
        longDesc: "জটিল আমলাতান্ত্রিক এবং কর্পোরেট আবেদন পোর্টালে নির্ভুলতা অপরিহার্য। আমরা আপনার হয়ে চাকরি, বিশ্ববিদ্যালয়ে ভর্তি এবং সরকারি নিবন্ধনের কাজ অত্যন্ত সতর্কতার সাথে সম্পন্ন করি।",
        features: [
          "সরকারি চাকরির বিজ্ঞপ্তি ট্র্যাকিং এবং আবেদন",
          "বিশ্ববিদ্যালয়ে ভর্তির ফরম পূরণ",
          "নির্ভুল ডিজিটাল ডাটা এন্ট্রি",
          "অনলাইন ব্যাংকিং এবং পেমেন্ট সহায়তা"
        ],
        icon: "FaBriefcase"
      },
      {
        id: 'OP_04',
        title: "লিগ্যাল_ডকুমেন্টেশন",
        desc: "চুক্তিনামা তৈরি, ফরমাল কম্পোজ এবং বাংলা/ইংরেজি দ্রুত টাইপিং।",
        longDesc: "নির্ভুল এবং আইনগতভাবে নিখুঁত ডকুমেন্টেশন প্রদান। চুক্তিপত্র থেকে শুরু করে এফিডেভিট পর্যন্ত, প্রতিটি ডকুমেন্ট সঠিক পরিভাষা এবং নির্দিষ্ট ফরম্যাটে বাংলা ও ইংরেজিতে দ্রুত প্রস্তুত করা হয়।",
        features: [
          "ফরমাল চুক্তিনামা এবং দলিল ড্রাফটিং",
          "বাংলা (বিজয়/ইউনিকোড) এবং ইংরেজি দ্রুত টাইপিং",
          "এফিডেভিট এবং অফিশিয়াল নোটিশ ফরম্যাটিং",
          "গুরুত্বপূর্ণ আইনি ডকুমেন্টের সুরক্ষিত ক্লাউড ব্যাকআপ"
        ],
        icon: "FaFileContract"
      }
    ],

    sec_projects: "ফাইল_০২: প্রমাণ",
    projects_title_1: "এভিডেন্স",
    projects_title_2: "বোর্ড",
    projects_sub: "ডিক্লাসিফাইড প্রজেক্ট ফাইল এবং অপারেশনাল ব্লুপ্রিন্ট। বিস্তারিত জানতে ক্লিক করুন।",
    projects: [
      {
        title: "চান_মাথা_হাব",
        desc: "সারিয়াকান্দিতে আইটি সেবা ও মুদি পণ্যের সমন্বয়ে একটি হাইব্রিড মডেল।",
        longDesc: "চান মাথা ডিজিটাল পয়েন্ট কেবল একটি আইটি সার্ভিস সেন্টার নয়; এটি একটি সুপরিকল্পিত হাইব্রিড লজিস্টিক হাব। সারিয়াকান্দির গ্রামীণ জনগোষ্ঠীর চাহিদার কথা বিবেচনা করে, আমি এমন একটি ব্যবসায়িক মডেল তৈরি করেছি যা দৈনন্দিন প্রয়োজনীয় পণ্যের পাশাপাশি আধুনিক ডিজিটাল সেবা প্রদান করে।",
        status: "অ্যাক্টিভ",
        tags: ["লজিস্টিকস", "আইটি_সেবা", "বিজনেস_মডেল"],
        features: [
          "আইটি সেবা এবং পণ্য বিক্রির জন্য ইন্টিগ্রেটেড পস (POS) সিস্টেম",
          "খুচরা পণ্যের স্বয়ংক্রিয় ইনভেন্টরি ট্র্যাকিং",
          "কমিউনিটি-কেন্দ্রিক সেবা ডিজাইন",
          "দীর্ঘমেয়াদী আয়ের জন্য টেকসই হাইব্রিড মডেল"
        ],
        icon: "FaStoreAlt",
        color: "#ff3344"
      },
      {
        title: "একাডেমিক_প্রটোকল",
        desc: "মাধ্যমিক শিক্ষার্থীদের জন্য বিশেষায়িত পাঠ পরিকল্পনা তৈরি।",
        longDesc: "মাধ্যমিক বিদ্যালয়ের শিক্ষার্থীদের লক্ষ্য করে একটি শিক্ষামূলক উদ্যোগ। আমি 'একাডেমিক প্রটোকল' নামে একটি ফ্রেমওয়ার্ক তৈরি করেছি, যা বিশেষায়িত পাঠ পরিকল্পনা এবং ইন্টারেক্টিভ ডায়ালগ ফরম্যাটের মাধ্যমে শিক্ষার্থীদের শেখার ক্ষমতা উল্লেখযোগ্যভাবে বৃদ্ধি করে।",
        status: "চলমান",
        tags: ["শিক্ষা", "প্ল্যানিং", "ডিজাইন"],
        features: [
          "সাধারণ লেকচারের পরিবর্তে কাঠামোবদ্ধ ডায়ালগ ফরম্যাট",
          "ভিজ্যুয়াল ডাটা রিটেনশন বাড়ানোর জন্য স্টাডি ম্যাটেরিয়াল",
          "লেসন প্ল্যানের দ্রুত আপডেটের জন্য ডিজিটাল ডিস্ট্রিবিউশন",
          "শিক্ষার্থীদের মনোযোগ বাড়ানোর জন্য স্থানীয় প্রেক্ষাপটের সংযোজন"
        ],
        icon: "FaFileAlt",
        color: "#00f0ff"
      },
      {
        title: "NGO_সাপোর্ট",
        desc: "স্থানীয় NGO এবং চালুয়াবাড়ী উচ্চ বিদ্যালয়ের প্রশাসনিক সাপোর্ট।",
        longDesc: "স্থানীয় এনজিও এবং শিক্ষা প্রতিষ্ঠানগুলোর অনেক সময় প্রয়োজনীয় ডিজিটাল পরিকাঠামো থাকে না। আমি একটি সুরক্ষিত সাপোর্ট নেটওয়ার্ক প্রতিষ্ঠা করেছি যা স্থানীয় এনজিও এবং চালুয়াবাড়ী উচ্চ বিদ্যালয়ের জন্য দ্রুত প্রশাসনিক ডিজাইন এবং ডাটা পরিচালনার সুবিধা দেয়।",
        status: "চলমান",
        tags: ["ইনফ্রাস্ট্রাকচার", "NGO", "ডাটা_ম্যানেজমেন্ট"],
        features: [
          "এনজিও ডোনারদের সাথে যোগাযোগের জন্য স্ট্যান্ডার্ড রিপোর্টিং টেমপ্লেট",
          "চালুয়াবাড়ী উচ্চ বিদ্যালয়ের একাডেমিক রেকর্ডের ডিজিটাল আর্কাইভ",
          "কমিউনিটি সচেতনতা ক্যাম্পেইনের জন্য দ্রুত ডিজাইন",
          "সুরক্ষিত স্থানীয় ডাটা ম্যানেজমেন্ট প্রটোকল"
        ],
        icon: "FaGlobe",
        color: "#e5e5e5"
      },
    ],
    
    sec_contact: "সিকিউর_চ্যানেল",
    contact_title: "সিগন্যাল",
    contact_accent: "ট্রান্সমিট",
    contact_desc: "সিগন্যাল এনক্রিপ্টেড। অপারেশনাল রিকোয়েস্ট বা কোলাবোরেশনের জন্য প্রস্তুত।",
    contact_location: "সারিয়াকান্দি_বেস",
    f_name: "সেন্ডার_আইডি (নাম)",
    f_email: "এনক্রিপ্টেড_কমিউনিকেশন (ইমেইল)",
    f_msg: "ট্রান্সমিশন_পে-লোড",
    f_send: "ডাটা_ট্রান্সমিট_করুন",
    f_sending: "এনক্রিপ্ট_হচ্ছে...",
    f_success: "[ SYS_ACK ] ট্রান্সমিশন সফল।",
    f_error: "[ SYS_ERR ] সিগন্যাল লস্ট। আবার চেষ্টা করুন।",
    
    footer_tagline: "তৃণমূল পর্যায়ে ডিজিটাল অপারেশন পরিচালনা করছি।",
    cta_title: "কন্টাক্ট_প্রটোকল_শুরু_করুন",
    cta_desc: "আপনার সিগন্যালের অপেক্ষায়। প্রজেক্ট বা ব্যবসায়ের জন্য যোগাযোগ করুন।",
    cta_btn: "কানেক্ট_করুন",
  }
};
