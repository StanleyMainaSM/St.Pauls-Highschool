/**
 * Authentic School Asset Registry for St. Paul's High School – Kevote
 * 
 * Default authentic image URLs provided for the demo website.
 * These URLs are configured as the central registry so they can easily
 * be updated or converted to permanent local assets upon official approval.
 */

export interface SchoolAsset {
  id: string;
  label: string;
  placeholderText: string;
  path: string;
  description: string;
  category: string;
}

export const schoolAssets: Record<string, SchoolAsset> = {
  logo: {
    id: "logo",
    label: "Official School Crest",
    placeholderText: "OFFICIAL ST. PAUL'S KEVOTE SCHOOL LOGO",
    path: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t1.6435-9/29067102_155629695103772_4060564374874488832_n.png?stp=dst-png&cstp=mx246x166&ctp=s246x166&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHGqYMCjQGYa0V5p2Bds9squRct4o902Se5Fy3ij3TZJ_hVEqSMGAHD_iqvw74IRTd29WNGJubJx56rFT6AyshL&_nc_ohc=06Yi0CkV9Z8Q7kNvwG1xw3n&_nc_oc=AdoG79uIphIo8Tup_llTEV3gDJG9Btb7r6nx7WvvbHvF2QPlz3THDyoza68rbNYnomM&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=PzP3GNXIZkGZmqJU2_O8Bw&_nc_ss=7b2a8&oh=00_AQKbRX0jafpRiqnG9_DlkG2LE4_Y40VGIiMJRZgF-AfJvA&oe=6ADDD01A",
    description: "Official shield emblem featuring school motto 'Jishinde Ushinde'",
    category: "Branding"
  },
  gate: {
    id: "gate",
    label: "Main School Gate",
    placeholderText: "MAIN SCHOOL GATE / ENTRANCE",
    path: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t1.6435-9/31543405_167181640615244_4638511267466706944_n.jpg?stp=dst-jpg_tt6&cstp=mx780x1040&ctp=s780x1040&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEhLRV6n2ZDQNydFFvrMQLfMLXQVvQkPNgwtdBW9CQ82DVsU2bTMD_Lk_E0u5fNvCmmbhi-WKdC0tmbztznfzwV&_nc_ohc=uzCkKOvvH7IQ7kNvwF26QuZ&_nc_oc=AdogN28gtAEPn7O2bQPUu8vrZ9sD2iOlzMnZZMbx33x90sdXYLfLIY2s6ruJRno7DqA&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=w0d9oV3sXfW_6Aj92qB4TA&_nc_ss=7b2a8&oh=00_AQKK0PVC9WjQXovwOKLNJijtrys_zQVqkvzpxvWzc93_sQ&oe=6ADDFBF3",
    description: "Official entrance gate and security checkpoint of St. Paul's Kevote",
    category: "Campus"
  },
  compound: {
    id: "compound",
    label: "School Compound",
    placeholderText: "AUTHENTIC SCHOOL COMPOUND PHOTO",
    path: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t1.6435-9/31543405_167181640615244_4638511267466706944_n.jpg?stp=dst-jpg_tt6&cstp=mx780x1040&ctp=s780x1040&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEhLRV6n2ZDQNydFFvrMQLfMLXQVvQkPNgwtdBW9CQ82DVsU2bTMD_Lk_E0u5fNvCmmbhi-WKdC0tmbztznfzwV&_nc_ohc=uzCkKOvvH7IQ7kNvwF26QuZ&_nc_oc=AdogN28gtAEPn7O2bQPUu8vrZ9sD2iOlzMnZZMbx33x90sdXYLfLIY2s6ruJRno7DqA&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=w0d9oV3sXfW_6Aj92qB4TA&_nc_ss=7b2a8&oh=00_AQKK0PVC9WjQXovwOKLNJijtrys_zQVqkvzpxvWzc93_sQ&oe=6ADDFBF3",
    description: "Aerial or wide view of academic buildings and assembly grounds",
    category: "Campus"
  },
  bus: {
    id: "bus",
    label: "School Bus",
    placeholderText: "BABA YAO SCHOOL BUS",
    path: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/474326632_1510121739654554_4079188141109184912_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFA-qHieIh37dE3ZUbppNC1o35ER0EXOFGjfkRHQRc4UcmFMZy7jDT9H-IM6FoKZilt5yRpeW9GX8-6H0ENvqGc&_nc_ohc=KV-VY8pUOyMQ7kNvwGDZz17&_nc_oc=AdqPqAg4kUIbBAB1QTDGNlL5YJS5KXfGzSwk50SlDSbW0XhC8oaTm5NNi4fAgyPAstI&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=URA6asUykzipi3CryCYltQ&_nc_ss=7b2a8&oh=00_AQKy1szLMq-4Y5ci-2s5GTzfHEZ9Va_oTW-1QMCzVQDitg&oe=6ABC4E23",
    description: "Official school bus known as 'Baba Yao' used for transport and tours",
    category: "Transport"
  },
  dormitory: {
    id: "dormitory",
    label: "School Dormitory",
    placeholderText: "SCHOOL DORMITORY",
    path: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/487483844_1107174504756203_8678924208829037287_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x561&ctp=s1280x561&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLMjpFIxbU_1SeQJsArFYz9B2EJKRFHT70HYQkpEUdPrxmeLDmx67A7_yv6RrHbFFs4NLjlnaF_A-oudOzve3V&_nc_ohc=KmK_CIIj73UQ7kNvwH8jhws&_nc_oc=Adrha-GOlR01BN-jOt74N3PKOi1krhi_1CIYKxwNF_inEUNS0Cs2AgZiCW6_nZxiD5Q&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=0EdJ-IOuNDhlP0oPINOImA&_nc_ss=7b2a8&oh=00_AQJErk1k_QQJb728uaRH12mx1yWVCC4Sx-rOI0Y9NF_zWA&oe=6ABC31DE",
    description: "Boarding dormitories housing our male boarding learners",
    category: "Boarding"
  },
  bakery: {
    id: "bakery",
    label: "School Bakery",
    placeholderText: "SCHOOL BAKERY",
    path: "https://www.facebook.com/photo.php?fbid=977428647730790&set=pb.100063909909473.-2207520000&type=3",
    description: "On-campus bakery providing fresh daily bread for students",
    category: "Facilities"
  },
  principal: {
    id: "principal",
    label: "Principal Photograph",
    placeholderText: "PRINCIPAL PHOTOGRAPH",
    path: "/images/principal.jpg",
    description: "Chief Principal Mr. Simon Njagi",
    category: "Administration"
  },
  laboratories: {
    id: "laboratories",
    label: "Science & Computer Laboratories",
    placeholderText: "AUTHENTIC SCIENCE & COMPUTER LABS",
    path: "https://tse2.mm.bing.net/th/id/OIP.f7coRHx6LiFPvjqcPG6wQQHaFH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Biology, Chemistry, Physics, and ICT facilities",
    category: "Academics"
  },
  sports: {
    id: "sports",
    label: "School Sports Field",
    placeholderText: "AUTHENTIC SCHOOL SPORTS GROUNDS",
    path: "https://img.freepik.com/premium-photo/school-field-photo_931878-1453.jpg",
    description: "Athletics and ball games fields",
    category: "School Life"
  }
};
