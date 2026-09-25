export interface SchoolInfo {
  name: string;
  shortName: string;
  motto: string;
  mottoTranslation: string;
  category: string;
  schoolType: string;
  gender: string;
  boardingType: string;
  county: string;
  subCounty: string;
  location: string;
  postalAddress: string;
  phone: string;
  phoneRaw: string;
  email: string;
  website: string;
  sponsor: string;
  verifiedEnrollment: number;
  principal: {
    name: string;
    title: string;
    role: string;
    greeting: string;
    message: string[];
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'CAMPUS' | 'BOARDING' | 'TRANSPORT' | 'FACILITIES' | 'ACADEMICS' | 'SCHOOL LIFE';
  imagePlaceholderLabel: string;
  src?: string;
  caption: string;
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Academics' | 'Admissions' | 'School Life' | 'Events' | 'Administration';
  date: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
  imagePlaceholderLabel: string;
  readTime: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  verifiedDetail: string;
  iconName: string;
}

export const schoolInfo: SchoolInfo = {
  name: "St. Paul's High School – Kevote",
  shortName: "St. Paul's Kevote",
  motto: "JISHINDE USHINDE",
  mottoTranslation: "Self-discipline leads to victory",
  category: "Extra-County Secondary & Senior School",
  schoolType: "Public Secondary & Senior School",
  gender: "Boys' School",
  boardingType: "Full Boarding",
  county: "Embu County",
  subCounty: "Embu West / Runyenjes",
  location: "Kevote, Makengi Location, Nembure Division, Embu County, Kenya",
  postalAddress: "P.O. Box 219-60100, Embu, Kenya",
  phone: "0727 216 309",
  phoneRaw: "+254727216309",
  email: "stpaulskevotehigh@gmail.com",
  website: "stpaulskevotehigh.co.ke",
  sponsor: "Catholic Diocese of Embu (Religious Sponsor)",
  verifiedEnrollment: 1018,
  principal: {
    name: "Mr. Peter Mwiti Kiugu",
    title: "Chief Principal",
    role: "Principal, St. Paul's High School – Kevote",
    greeting: "Welcome to St. Paul's High School – Kevote",
    message: [
      "On behalf of the Board of Management, the teaching and non-teaching staff, and the student body, I warmly welcome you to the official portal of St. Paul's High School – Kevote.",
      "Rooted firmly in our founding motto, 'JISHINDE USHINDE', we believe that true victory begins with self-discipline, moral fortitude, and personal responsibility. For decades, our institution has stood as a beacon of academic diligence and holistic character formation on the fertile slopes of Mount Kenya.",
      "As we navigate Kenya's educational transition into Senior School under the Competency Based Curriculum (CBC), St. Paul's Kevote continues to provide learners with structured academic pathways, modern learning resources, dedicated boarding facilities, and a supportive brotherhood.",
      "We invite prospective parents, guardians, alumni, and educational partners to explore our community and join us in shaping focused, grounded, and industrious young men of high integrity."
    ]
  }
};

export const whyChoosePillars: PillarItem[] = [
  {
    id: "character-discipline",
    title: "Character & Discipline",
    description: "Guided by our motto 'Jishinde Ushinde', we foster self-mastery, personal accountability, and Christian moral foundations that shape men of integrity.",
    verifiedDetail: "Core school philosophy emphasizing self-conquest through discipline",
    iconName: "ShieldCheck"
  },
  {
    id: "academic-transition",
    title: "Senior School Academic Pathways",
    description: "Prepared for Kenya's Competency-Based Curriculum (CBC) framework offering Grade 10, 11, and 12 learners specialized pathways in STEM, Social Sciences, and Arts & Sports.",
    verifiedDetail: "Senior School accreditation under Ministry of Education guidelines",
    iconName: "GraduationCap"
  },
  {
    id: "boarding-life",
    title: "Dedicated Boarding Environment",
    description: "A secure, structured boys' boarding community featuring well-maintained dormitories, wholesome meals, and an on-campus school bakery providing fresh daily bread.",
    verifiedDetail: "100% boarding boys' environment with supervised prep and recreation",
    iconName: "Home"
  },
  {
    id: "leadership-spiritual",
    title: "Leadership & Spiritual Formation",
    description: "Active student council, peer mentoring, and spiritual guidance sponsored under the Catholic Diocese of Embu, welcoming all learners in Christian brotherhood.",
    verifiedDetail: "Comprehensive student leadership and chaplaincy support",
    iconName: "BookOpen"
  },
  {
    id: "transport-facilities",
    title: "Campus Infrastructure & Transport",
    description: "Spacious campus grounds in Embu, modern science laboratories, library facilities, and reliable school transport spearheaded by our iconic 'Baba Yao' school bus.",
    verifiedDetail: "Safe academic travel, sports excursions, and educational field trips",
    iconName: "Bus"
  },
  {
    id: "co-curricular",
    title: "Co-curricular & Sports Vitality",
    description: "Competitive participation in school athletics, rugby, football, science fairs, drama, music festivals, Scouting, and St. John Ambulance clubs.",
    verifiedDetail: "Active regional and county championship participation",
    iconName: "Trophy"
  }
];

export const campusExperienceItems = [
  {
    id: "campus-gate",
    title: "Main School Entrance & Security Gate",
    subtitle: "The Gateway of Excellence",
    category: "FACILITIES",
    imagePlaceholderLabel: "MAIN SCHOOL GATE / ENTRANCE",
    description: "The welcoming official entrance to St. Paul's High School Kevote, staffed around the clock with security personnel to ensure a safe learning sanctuary for our 1,000+ students.",
    verifiedNote: "Verified school landmark & security check"
  },
  {
    id: "campus-compound",
    title: "School Compound & Grounds",
    subtitle: "A Conducive Learning Environment",
    category: "CAMPUS",
    imagePlaceholderLabel: "AUTHENTIC SCHOOL COMPOUND PHOTO",
    description: "Set in Kevote within the cool highlands of Embu County, our serene green campus provides an open, tranquil atmosphere ideal for rigorous academic concentration.",
    verifiedNote: "Spacious academic blocks and assembly grounds"
  },
  {
    id: "campus-bus",
    title: "'Baba Yao' Official School Bus",
    subtitle: "Reliable School Transport",
    category: "TRANSPORT",
    imagePlaceholderLabel: "BABA YAO SCHOOL BUS",
    description: "The proud, recognizable transport of St. Paul's Kevote, carrying our students safely to academic symposiums, national competitions, educational tours, and athletic meets.",
    verifiedNote: "Official school bus fleet"
  },
  {
    id: "campus-dorm",
    title: "Boarding Dormitories",
    subtitle: "Home Away From Home",
    category: "BOARDING",
    imagePlaceholderLabel: "SCHOOL DORMITORY",
    description: "Spacious, well-ventilated boarding houses supervised by resident housemasters, fostering brotherhood, teamwork, and responsible communal living.",
    verifiedNote: "Supervised boarding facilities for all students"
  },
  {
    id: "campus-bakery",
    title: "On-Campus School Bakery",
    subtitle: "Fresh Daily Nutrition",
    category: "FACILITIES",
    imagePlaceholderLabel: "SCHOOL BAKERY",
    description: "An authentic St. Paul's Kevote hallmark: our on-site bakery supplies freshly baked loaves and snacks daily to fuel hungry minds during morning tea and evening meals.",
    verifiedNote: "Dedicated on-campus baking unit for student welfare"
  },
  {
    id: "campus-labs",
    title: "Science & ICT Laboratories",
    subtitle: "Hands-on Practical Mastery",
    category: "ACADEMICS",
    imagePlaceholderLabel: "AUTHENTIC SCIENCE & COMPUTER LABS",
    description: "Dedicated Biology, Chemistry, and Physics laboratories equipped for practical coursework alongside an ICT center for digital literacy and research.",
    verifiedNote: "KNEC-compliant laboratory facilities"
  }
];

export const academicDepartments = [
  {
    name: "Sciences Department",
    subjects: ["Biology", "Chemistry", "Physics"],
    description: "Fostering empirical enquiry, laboratory experimentation, and analytical thinking essential for STEM pathways."
  },
  {
    name: "Mathematics Department",
    subjects: ["Pure Mathematics", "Alternative A / Applied Mathematics"],
    description: "Building problem-solving agility, numerical literacy, and foundational competence for technical fields."
  },
  {
    name: "Languages Department",
    subjects: ["English", "Kiswahili"],
    description: "Cultivating articulate communication, literature appreciation, and bilingual writing proficiency."
  },
  {
    name: "Humanities Department",
    subjects: ["History & Government", "Geography", "Christian Religious Education (C.R.E.)"],
    description: "Instilling cultural heritage, civic awareness, ethical responsibility, and geographic stewardship."
  },
  {
    name: "Technical & Applied Department",
    subjects: ["Business Studies", "Agriculture", "Computer Studies"],
    description: "Equipping young men with practical entrepreneurial, agricultural, and technological life skills."
  }
];

export const seniorSchoolPathways = [
  {
    name: "STEM Pathway",
    subtitle: "Science, Technology, Engineering & Mathematics",
    tracks: [
      "Pure Sciences (Biology, Chemistry, Physics)",
      "Applied Sciences & Agriculture",
      "Technical, Computer & Information Studies",
      "Advanced Mathematics"
    ],
    idealFor: "Aspiring engineers, medical practitioners, computer scientists, architects, and researchers."
  },
  {
    name: "Social Sciences Pathway",
    subtitle: "Humanities, Business & Governance",
    tracks: [
      "Humanities & Social Studies",
      "Business Studies & Entrepreneurship",
      "Languages & Communication"
    ],
    idealFor: "Future economists, legal minds, diplomats, administrators, accountants, and communicators."
  },
  {
    name: "Arts & Sports Science Pathway",
    subtitle: "Physical Health, Performing & Visual Arts",
    tracks: [
      "Sports Science & Physical Education",
      "Performing Arts (Music & Drama)",
      "Visual Arts & Design"
    ],
    idealFor: "Athletes, sports managers, creative directors, designers, and performers."
  }
];

export const admissionsGuide = {
  title: "Admissions to St. Paul's High School – Kevote",
  overview: "Admission to St. Paul's Kevote follows the official Ministry of Education placement protocols for Extra-County Senior/Secondary Schools through NEMIS/KEMIS, as well as coordinated direct transfers subject to Board of Management review and available boarding capacity.",
  requirements: [
    "Official Ministry of Education Admission Letter / KEMIS Placement Slip",
    "Certified copy of Birth Certificate (2 clear photocopies)",
    "Previous Academic Assessment Reports / KCPE / Junior School Transcripts",
    "Duly filled and stamped Medical Examination Form by a certified Medical Officer",
    "Two recent colored passport-size photographs of the student and one for each parent/guardian",
    "Completed Emergency Contact and Personal Data Declaration"
  ],
  feePolicyNotice: "Fee guidelines strictly adhere to the gazetted Ministry of Education circular for Extra-County Boarding Public Schools. Official itemized fee schedules are provided directly with the official admission letter.",
  reportingInstructions: [
    "Reporting time is between 8:00 AM and 2:00 PM on the designated date.",
    "All boarding items, uniforms, and bedding must be clearly marked with the student's admission number.",
    "Mobile phones, personal electronic gadgets, and unauthorized clothing are strictly prohibited in the boarding houses."
  ],
  downloadableDocuments: [
    {
      title: "Sample Joining Instructions & Student Rules",
      size: "PDF Document · Official Template",
      fileName: "st_pauls_kevote_joining_instructions.pdf"
    },
    {
      title: "Student Medical Examination Form",
      size: "PDF Document · Certified Form",
      fileName: "st_pauls_kevote_medical_form.pdf"
    },
    {
      title: "Boarding Requirements & Personal Effects Checklist",
      size: "PDF Document · Official List",
      fileName: "st_pauls_kevote_boarding_checklist.pdf"
    }
  ]
};

export const newsArticles: NewsItem[] = [
  {
    id: "news-senior-school-launch",
    title: "St. Paul's Kevote Welcomes Senior School Grade 10 Learners",
    category: "Academics",
    date: "Term Academic Bulletin",
    readTime: "3 min read",
    imagePlaceholderLabel: "AUTHENTIC SCHOOL COMPOUND PHOTO",
    excerpt: "The school administration completes laboratory upgrades and pathway orientation for our pioneering cohort of Senior School learners.",
    content: [
      "St. Paul's High School – Kevote has successfully commenced orientation for Senior School learners following Ministry of Education guidelines.",
      "The academic committee has aligned faculty resources across the STEM, Social Sciences, and Arts & Sports pathways, with dedicated laboratory time and personalized academic advising.",
      "Chief Principal Mr. Peter Mwiti Kiugu commended the new learners for their swift adaptation to boarding life and encouraged them to embrace the timeless school motto: 'Jishinde Ushinde'."
    ],
    featured: true
  },
  {
    id: "news-bakery-expansion",
    title: "School Bakery Enhances Daily Student Meal Program",
    category: "School Life",
    date: "Campus Welfare Update",
    readTime: "2 min read",
    imagePlaceholderLabel: "SCHOOL BAKERY",
    excerpt: "Our dedicated on-campus bakery continues to deliver hot, fresh, fortified bread daily for all 1,000+ boarding students.",
    content: [
      "The on-campus bakery at Kevote remains one of the most cherished facilities among students and alumni.",
      "Operating under strict food hygiene standards, the bakery prepares daily bread served during breakfast and evening tea, ensuring high nutritional value to sustain students during rigorous study and sports activities."
    ]
  },
  {
    id: "news-transport-safari",
    title: "'Baba Yao' Fleet Ready for Upcoming Academic Field Excursions",
    category: "Events",
    date: "Transport & Logistics",
    readTime: "2 min read",
    imagePlaceholderLabel: "BABA YAO SCHOOL BUS",
    excerpt: "School transport maintenance concludes as students prepare for county athletics championships and regional science symposiums.",
    content: [
      "The school's beloved bus, affectionately known as 'Baba Yao', has received routine comprehensive mechanical certification.",
      "The vehicle facilitates safe group travel for academic competitions, geography fieldwork, Scouting rallies, and inter-school sports encounters across Embu and Eastern Region."
    ]
  },
  {
    id: "news-alumni-connect",
    title: "Alumni Association Chapters Launch Mentorship Initiative",
    category: "Administration",
    date: "Alumni Relations",
    readTime: "3 min read",
    imagePlaceholderLabel: "AUTHENTIC SCHOOL DORMITORY",
    excerpt: "Old Boys of Kevote collaborate with school administration to provide career guidance, university orientation, and character talks.",
    content: [
      "St. Paul's Kevote Alumni representatives visited the campus to meet with candidate classes for a series of career talks.",
      "The program matches current students with alumni professionals across medicine, engineering, law, agriculture, and public service."
    ]
  }
];

export const galleryList: GalleryItem[] = [
  {
    id: "g-gate",
    title: "School Gate & Checkpoint",
    category: "FACILITIES",
    imagePlaceholderLabel: "MAIN SCHOOL GATE / ENTRANCE",
    caption: "The main gated entry into St. Paul's High School Kevote compound.",
    featured: true
  },
  {
    id: "g-compound",
    title: "Central School Compound & Greenery",
    category: "CAMPUS",
    imagePlaceholderLabel: "AUTHENTIC SCHOOL COMPOUND PHOTO",
    caption: "Scenic academic grounds nestled in the highland climate of Kevote.",
    featured: true
  },
  {
    id: "g-bus",
    title: "'Baba Yao' School Bus",
    category: "TRANSPORT",
    imagePlaceholderLabel: "BABA YAO SCHOOL BUS",
    caption: "The iconic school bus facilitating student trips and athletic transport.",
    featured: true
  },
  {
    id: "g-dorm",
    title: "Student Dormitory Block",
    category: "BOARDING",
    imagePlaceholderLabel: "SCHOOL DORMITORY",
    caption: "Boarding houses providing a safe, brotherhood-oriented home.",
    featured: true
  },
  {
    id: "g-bakery",
    title: "School Bakery Facility",
    category: "FACILITIES",
    imagePlaceholderLabel: "SCHOOL BAKERY",
    caption: "The on-site bakery preparing daily fresh bread for all boarding students.",
    featured: true
  },
  {
    id: "g-principal",
    title: "School Leadership & Administration",
    category: "CAMPUS",
    imagePlaceholderLabel: "PRINCIPAL PHOTOGRAPH",
    caption: "Office of the Chief Principal Mr. Peter Mwiti Kiugu."
  },
  {
    id: "g-labs",
    title: "Science & Computer Laboratory Wing",
    category: "ACADEMICS",
    imagePlaceholderLabel: "AUTHENTIC SCIENCE & COMPUTER LABS",
    caption: "Practical inquiry facilities supporting Physics, Chemistry, Biology and ICT."
  },
  {
    id: "g-sports",
    title: "Sports Fields & Games Grounds",
    category: "SCHOOL LIFE",
    imagePlaceholderLabel: "AUTHENTIC SCHOOL SPORTS GROUNDS",
    caption: "Playing fields for rugby, football, handball, volleyball, and athletics."
  }
];

export const dailyRoutine = [
  { time: "05:00 AM", activity: "Rising Bell & Morning Devotion / Dorm Tidying" },
  { time: "06:00 AM – 06:45 AM", activity: "Morning Supervised Study (Preps)" },
  { time: "06:45 AM – 07:30 AM", activity: "Breakfast (Fresh bakery bread & hot beverage)" },
  { time: "07:30 AM – 08:00 AM", activity: "Morning Assembly / Form Tutor Registration" },
  { time: "08:00 AM – 01:10 PM", activity: "Morning Academic Lessons (with mid-morning tea break)" },
  { time: "01:10 PM – 02:00 PM", activity: "Nutritious Lunch & Rest Break" },
  { time: "02:00 PM – 04:00 PM", activity: "Afternoon Academic Lessons & Practical Sessions" },
  { time: "04:15 PM – 05:45 PM", activity: "Games, Co-curricular Activities & Clubs" },
  { time: "06:00 PM – 07:00 PM", activity: "Evening Shower, Dinner & Fellowship" },
  { time: "07:00 PM – 09:30 PM", activity: "Evening Supervised Study (Night Preps)" },
  { time: "10:00 PM", activity: "Lights Out & Rest" }
];
