import { Language } from './translations';

export interface ChatOption {
    id: string;
    label: string;
    labelBn: string;
    response: string;
    responseBn: string;
    subOptions?: ChatOption[];
}

export interface FirstAidTip {
    id: string;
    condition: string;
    conditionBn: string;
    steps: string[];
    stepsBn: string[];
    warning?: string;
    warningBn?: string;
}

// Pre-defined chat options for exploring services
export const chatOptions: ChatOption[] = [
    {
        id: 'services',
        label: '🏥 Hospital Services',
        labelBn: '🏥 হাসপাতাল সেবাসমূহ',
        response: 'We offer a wide range of medical services. Please select a category:',
        responseBn: 'আমরা বিভিন্ন ধরনের চিকিৎসা সেবা প্রদান করি। একটি ক্যাটাগরি নির্বাচন করুন:',
        subOptions: [
            {
                id: 'outpatient',
                label: '👨‍⚕️ Outpatient Department (OPD)',
                labelBn: '👨‍⚕️ বহির্বিভাগ (ওপিডি)',
                response: 'Our OPD operates from 8:00 AM to 2:30 PM (Sat-Thu). Services include: General Medicine, Cardiology, Diabetes, ENT, Eye Care, Gynecology, Orthopedics, Neurology, and more. No prior appointment needed for most departments.',
                responseBn: 'আমাদের বহির্বিভাগ সকাল ৮:০০ থেকে দুপুর ২:৩০ পর্যন্ত চালু (শনি-বৃহ)। সেবাসমূহ: জেনারেল মেডিসিন, কার্ডিওলজি, ডায়াবেটিস, ইএনটি, চক্ষু, স্ত্রীরোগ, হাড়, নিউরোলজি এবং আরও অনেক। বেশিরভাগ বিভাগে আগে থেকে অ্যাপয়েন্টমেন্ট লাগে না।'
            },
            {
                id: 'diagnostics',
                label: '🔬 Diagnostics & Lab',
                labelBn: '🔬 ডায়াগনস্টিকস ও ল্যাব',
                response: 'We have a fully equipped diagnostic center with: Pathology Lab, X-Ray, Ultrasonography, ECG, and more. Reports are usually available within 24-48 hours.',
                responseBn: 'আমাদের সম্পূর্ণ সুসজ্জিত ডায়াগনস্টিক সেন্টার রয়েছে: প্যাথলজি ল্যাব, এক্স-রে, আল্ট্রাসনোগ্রাফি, ইসিজি এবং আরও অনেক। রিপোর্ট সাধারণত ২৪-৪৮ ঘন্টার মধ্যে পাওয়া যায়।'
            },
            {
                id: 'pharmacy',
                label: '💊 Pharmacy',
                labelBn: '💊 ফার্মেসি',
                response: 'Our pharmacy is open during hospital hours and stocks all essential medicines at subsidized rates for members. Located on the ground floor near the reception.',
                responseBn: 'আমাদের ফার্মেসি হাসপাতালের সময়সূচীতে খোলা থাকে এবং সদস্যদের জন্য ভর্তুকি মূল্যে সব প্রয়োজনীয় ওষুধ মজুদ রাখে। রিসেপশনের কাছে গ্রাউন্ড ফ্লোরে অবস্থিত।'
            }
        ]
    },
    {
        id: 'doctors',
        label: '👩‍⚕️ Find a Doctor',
        labelBn: '👩‍⚕️ ডাক্তার খুঁজুন',
        response: 'We have 20+ specialist doctors across various departments. You can view the complete list with their schedules on our Doctors page, or tell me the specialty you are looking for.',
        responseBn: 'আমাদের বিভিন্ন বিভাগে ২০+ বিশেষজ্ঞ ডাক্তার রয়েছে। আমাদের ডাক্তার পেজে তাদের সময়সূচীসহ সম্পূর্ণ তালিকা দেখতে পারবেন, অথবা আমাকে বলুন কোন বিশেষত্বের ডাক্তার খুঁজছেন।',
        subOptions: [
            {
                id: 'doc_medicine',
                label: 'Medicine / General',
                labelBn: 'মেডিসিন / সাধারণ',
                response: 'For General Medicine, Dr. Mir Sadequr Rahman (Room 303) is available on Sun, Mon & Wed (8:00 AM - 2:30 PM). Contact: 01841-278222',
                responseBn: 'জেনারেল মেডিসিনের জন্য, ডাঃ মীর সাদেজুর রহমান (রুম ৩০৩) রবি, সোম ও বুধবার (সকাল ৮:০০ - দুপুর ২:৩০) পাওয়া যান। যোগাযোগ: ০১৮৪১-২৭৮২২২'
            },
            {
                id: 'doc_cardio',
                label: 'Cardiology (Heart)',
                labelBn: 'কার্ডিওলজি (হৃদরোগ)',
                response: 'For Cardiology, Dr. Md. Nafizur Rahman (Room 307) is available Sat-Thu (10:00 AM - 2:00 PM). Contact: 01819-434939',
                responseBn: 'কার্ডিওলজির জন্য, ডাঃ মোঃ নাফিসুর রহমান (রুম ৩০৭) শনি-বৃহ (সকাল ১০:০০ - দুপুর ২:০০) পাওয়া যান। যোগাযোগ: ০১৮১৯-৪৩৪৯৩৯'
            },
            {
                id: 'doc_eye',
                label: 'Eye Specialist',
                labelBn: 'চক্ষু বিশেষজ্ঞ',
                response: 'For Eye Care, Dr. Md. Nurul Huda (Room 301) is available Sat-Thu (8:00 AM - 2:30 PM). Contact: 01716-089897',
                responseBn: 'চক্ষু সেবার জন্য, ডাঃ মোঃ নুরুল হুদা (রুম ৩০১) শনি-বৃহ (সকাল ৮:০০ - দুপুর ২:৩০) পাওয়া যান। যোগাযোগ: ০১৭১৬-০৮৯৮৯৭'
            },
            {
                id: 'doc_diabetes',
                label: 'Diabetes',
                labelBn: 'ডায়াবেটিস',
                response: 'For Diabetes, Dr. Imam Kownin (Room 304) is available Sat, Mon & Wed (9:30 AM - 2:00 PM). Contact: 01757-082371. Also, Dr. Rayana Rahman is available Sun, Tue & Thu.',
                responseBn: 'ডায়াবেটিসের জন্য, ডাঃ ইমাম কৌনাইন (রুম ৩০৪) শনি, সোম ও বুধ (সকাল ৯:৩০ - দুপুর ২:০০) পাওয়া যান। যোগাযোগ: ০১৭৫৭-০৮২৩৭১। এছাড়াও, ডাঃ রায়না রহমান রবি, মঙ্গল ও বৃহ পাওয়া যান।'
            }
        ]
    },
    {
        id: 'firstaid',
        label: '🩹 First Aid Tips',
        labelBn: '🩹 প্রাথমিক চিকিৎসা',
        response: 'Select a condition to get first aid guidance:',
        responseBn: 'প্রাথমিক চিকিৎসা নির্দেশিকা পেতে একটি অবস্থা নির্বাচন করুন:',
        subOptions: [
            {
                id: 'aid_fever',
                label: '🤒 High Fever',
                labelBn: '🤒 উচ্চ জ্বর',
                response: '**High Fever First Aid:**\n1. Keep the person hydrated with water and ORS\n2. Apply a cool, damp cloth to the forehead\n3. Give paracetamol as per dosage (adults: 500mg every 6 hrs)\n4. Dress in light clothing\n5. Rest in a well-ventilated room\n\n⚠️ **Seek immediate medical help if:** Fever exceeds 103°F (39.4°C), lasts more than 3 days, or is accompanied by severe headache, stiff neck, or confusion.',
                responseBn: '**উচ্চ জ্বর প্রাথমিক চিকিৎসা:**\n১. পানি ও ওআরএস দিয়ে হাইড্রেটেড রাখুন\n২. কপালে ঠান্ডা, ভেজা কাপড় দিন\n৩. নির্দেশিত মাত্রায় প্যারাসিটামল দিন (প্রাপ্তবয়স্ক: ৫০০মিগ্রা প্রতি ৬ ঘন্টা)\n৪. হালকা পোশাক পরান\n৫. ভালো বায়ু চলাচল যুক্ত ঘরে বিশ্রাম নিন\n\n⚠️ **জরুরি চিকিৎসা নিন যদি:** জ্বর ১০৩°F (৩৯.৪°C) এর বেশি হয়, ৩ দিনের বেশি থাকে, বা তীব্র মাথাব্যথা, ঘাড় শক্ত বা বিভ্রান্তি থাকে।'
            },
            {
                id: 'aid_cut',
                label: '🩸 Cuts & Wounds',
                labelBn: '🩸 কাটা ও ক্ষত',
                response: '**Cuts & Wounds First Aid:**\n1. Wash your hands before touching the wound\n2. Stop bleeding by applying gentle pressure with a clean cloth\n3. Clean the wound under running water\n4. Apply antiseptic ointment\n5. Cover with a sterile bandage\n6. Change the bandage daily\n\n⚠️ **Seek medical help if:** Bleeding doesn\'t stop after 10 minutes, wound is deep or gaping, signs of infection appear, or caused by a rusty object.',
                responseBn: '**কাটা ও ক্ষত প্রাথমিক চিকিৎসা:**\n১. ক্ষত স্পর্শ করার আগে হাত ধুয়ে নিন\n২. পরিষ্কার কাপড় দিয়ে আলতো চাপ দিয়ে রক্তপাত বন্ধ করুন\n৩. প্রবাহিত পানির নিচে ক্ষত পরিষ্কার করুন\n৪. অ্যান্টিসেপটিক মলম লাগান\n৫. জীবাণুমুক্ত ব্যান্ডেজ দিয়ে ঢেকে দিন\n৬. প্রতিদিন ব্যান্ডেজ পরিবর্তন করুন\n\n⚠️ **চিকিৎসা নিন যদি:** ১০ মিনিটেও রক্তপাত বন্ধ না হয়, ক্ষত গভীর হয়, সংক্রমণের লক্ষণ দেখা দেয়, বা মরিচা পড়া বস্তু দ্বারা হয়।'
            },
            {
                id: 'aid_burn',
                label: '🔥 Burns',
                labelBn: '🔥 পোড়া',
                response: '**Burns First Aid:**\n1. Cool the burn under running cold water for at least 10 minutes\n2. Remove any clothing near the burn (unless stuck)\n3. Cover with a clean, non-fluffy material like cling film\n4. Give pain relief medication if needed\n5. Do NOT apply ice, butter, toothpaste, or any cream\n\n⚠️ **Seek immediate medical help if:** Burn is larger than the person\'s palm, is on face/hands/joints, or skin is white/charred.',
                responseBn: '**পোড়া প্রাথমিক চিকিৎসা:**\n১. কমপক্ষে ১০ মিনিট ঠান্ডা প্রবাহিত পানির নিচে ধরুন\n২. পোড়ার কাছের কাপড় সরান (যদি আটকে না থাকে)\n৩. ক্লিং ফিল্মের মতো পরিষ্কার, মসৃণ কাপড় দিয়ে ঢাকুন\n৪. প্রয়োজনে ব্যথানাশক ওষুধ দিন\n৫. বরফ, মাখন, টুথপেস্ট বা কোনো ক্রিম লাগাবেন না\n\n⚠️ **জরুরি চিকিৎসা নিন যদি:** পোড়া হাতের তালুর চেয়ে বড় হয়, মুখ/হাত/জয়েন্টে হয়, বা ত্বক সাদা/পুড়ে গেছে।'
            },
            {
                id: 'aid_choking',
                label: '😮 Choking',
                labelBn: '😮 গলায় কিছু আটকানো',
                response: '**Choking First Aid (Adult):**\n1. Encourage them to cough if they can\n2. If coughing doesn\'t work, give up to 5 sharp back blows between shoulder blades\n3. If still choking, perform abdominal thrusts (Heimlich maneuver):\n   - Stand behind them\n   - Place fist just above navel\n   - Pull sharply inward and upward\n4. Repeat back blows and thrusts until object is dislodged\n\n⚠️ **Call emergency services immediately if the person becomes unconscious.**',
                responseBn: '**গলায় কিছু আটকানো প্রাথমিক চিকিৎসা (প্রাপ্তবয়স্ক):**\n১. কাশি দিতে উৎসাহিত করুন\n২. কাশি কাজ না করলে, কাঁধের মাঝখানে ৫টি তীব্র পিঠে আঘাত দিন\n৩. এখনও আটকে থাকলে, পেটে চাপ দিন (হেইমলিচ ম্যানুভার):\n   - পেছনে দাঁড়ান\n   - নাভির ঠিক উপরে মুষ্টি রাখুন\n   - জোরে ভেতরে ও উপরে টানুন\n৪. বস্তু বের না হওয়া পর্যন্ত পিঠে আঘাত ও পেটে চাপ পুনরাবৃত্তি করুন\n\n⚠️ **ব্যক্তি অজ্ঞান হয়ে গেলে অবিলম্বে জরুরি সেবায় কল করুন।**'
            }
        ]
    },
    {
        id: 'membership',
        label: '🪪 Membership & Benefits',
        labelBn: '🪪 সদস্যপদ ও সুবিধা',
        response: 'BRGEWA membership is available to all retired government employees and their dependents. Benefits include:\n\n✅ Subsidized medical consultation\n✅ Discounted diagnostic tests\n✅ Reduced medicine prices\n✅ Access to welfare programs\n✅ Scholarship programs for children\n✅ Emergency medical aid\n\nFor registration, visit our office with your retirement documents or call: 22224-0189, 22224-0190',
        responseBn: 'বিআরজিইডাব্লিউএ সদস্যপদ সকল অবসরপ্রাপ্ত সরকারী কর্মচারী ও তাদের নির্ভরশীলদের জন্য উন্মুক্ত। সুবিধাসমূহ:\n\n✅ ভর্তুকিযুক্ত চিকিৎসা পরামর্শ\n✅ ছাড়যুক্ত ডায়াগনস্টিক পরীক্ষা\n✅ কম দামে ওষুধ\n✅ কল্যাণ কর্মসূচীতে প্রবেশাধিকার\n✅ সন্তানদের জন্য বৃত্তি কর্মসূচী\n✅ জরুরি চিকিৎসা সহায়তা\n\nনিবন্ধনের জন্য অবসর গ্রহণের কাগজপত্র নিয়ে আমাদের অফিসে আসুন অথবা কল করুন: ২২২২৪-০১৮৯, ২২২২৪-০১৯০'
    },
    {
        id: 'contact',
        label: '📞 Contact & Location',
        labelBn: '📞 যোগাযোগ ও অবস্থান',
        response: '**BRGEWA Hospital**\n📍 Address: 75/A Rd No. 5/A, Dhanmondi, Dhaka-1209\n📞 Phone: 22224-0189, 22224-0190\n🕒 Hours: Sat-Thu, 8:00 AM - 5:00 PM\n\n**Emergency Contact:** For urgent cases outside hours, please visit the nearest government hospital emergency.',
        responseBn: '**বিআরজিইডাব্লিউএ হাসপাতাল**\n📍 ঠিকানা: ৭৫/এ রোড নং ৫/এ, ধানমন্ডি, ঢাকা-১২০৯\n📞 ফোন: ২২২২৪-০১৮৯, ২২২২৪-০১৯০\n🕒 সময়: শনি-বৃহ, সকাল ৮:০০ - বিকাল ৫:০০\n\n**জরুরি যোগাযোগ:** সময়ের বাইরে জরুরি ক্ষেত্রে, দয়া করে নিকটস্থ সরকারি হাসপাতালের জরুরি বিভাগে যান।'
    }
];

export const welcomeMessage = {
    en: "👋 Hello! I'm the BRGEWA Hospital Assistant. How can I help you today?",
    bn: "👋 হ্যালো! আমি বিআরজিইডাব্লিউএ হাসপাতাল সহকারী। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?"
};

export const backOption = {
    label: "← Back to Main Menu",
    labelBn: "← মূল মেনুতে ফিরুন"
};
