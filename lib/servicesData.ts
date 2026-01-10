export interface ServiceItem {
    id: number;
    name: string;
    memberRate: number;
    privateRate: number;
}

export interface ServiceCategory {
    title: string;
    titleBn: string;
    items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        title: "Pathology Department",
        titleBn: "প্যাথলজি বিভাগ",
        items: [
            { id: 1, name: "CBC", memberRate: 110.00, privateRate: 210.00 },
            { id: 2, name: "Total eosinophils count", memberRate: 40.00, privateRate: 100.00 },
            { id: 3, name: "Blood film (PBF)", memberRate: 75.00, privateRate: 150.00 },
            { id: 4, name: "Malaria parasite (MP)", memberRate: 40.00, privateRate: 100.00 },
            { id: 5, name: "Fasting blood glucose", memberRate: 40.00, privateRate: 100.00 },
            { id: 6, name: "2 Hrs after ABF", memberRate: 40.00, privateRate: 100.00 },
            { id: 7, name: "S. Creatinine", memberRate: 60.00, privateRate: 150.00 },
            { id: 8, name: "Uric Acid", memberRate: 60.00, privateRate: 150.00 },
            { id: 9, name: "Liver Function Test", memberRate: 250.00, privateRate: 600.00 },
            { id: 10, name: "S. Bilirubin (Total)", memberRate: 70.00, privateRate: 150.00 },
            { id: 11, name: "S ALT (SGPT)", memberRate: 70.00, privateRate: 150.00 },
            { id: 12, name: "S AST (SGOT)", memberRate: 70.00, privateRate: 150.00 },
            { id: 13, name: "Alkaline Phosphatase [ALP]", memberRate: 70.00, privateRate: 150.00 },
            { id: 14, name: "Lipid Profile", memberRate: 250.00, privateRate: 500.00 },
            { id: 15, name: "S. Cholesterol (Total)", memberRate: 70.00, privateRate: 150.00 },
            { id: 16, name: "HDL-Cholesterol", memberRate: 70.00, privateRate: 150.00 },
            { id: 17, name: "LDL-Cholesterol", memberRate: 70.00, privateRate: 150.00 },
            { id: 18, name: "S. Triglycerides", memberRate: 70.00, privateRate: 150.00 },
            { id: 19, name: "Serum Electrolyte", memberRate: 300.00, privateRate: 500.00 },
            { id: 20, name: "Sodium (Na+)", memberRate: 100.00, privateRate: 150.00 },
            { id: 21, name: "Potassium (K+)", memberRate: 100.00, privateRate: 200.00 },
            { id: 22, name: "Chloride (CL-)", memberRate: 100.00, privateRate: 150.00 },
            { id: 23, name: "OGTT (Without glucose)", memberRate: 80.00, privateRate: 200.00 },
            { id: 24, name: "HbA1c", memberRate: 300.00, privateRate: 500.00 },
            { id: 25, name: "Urea", memberRate: 50.00, privateRate: 100.00 },
            { id: 26, name: "BUN", memberRate: 50.00, privateRate: 100.00 },
            { id: 27, name: "S. Calcium", memberRate: 100.00, privateRate: 200.00 },
            { id: 28, name: "S. Inorganic Phosphorus (Po4)", memberRate: 150.00, privateRate: 300.00 },
            { id: 29, name: "S. Total Protein", memberRate: 150.00, privateRate: 300.00 },
            { id: 30, name: "S. Albumin", memberRate: 150.00, privateRate: 300.00 },
            { id: 31, name: "S. Globulin", memberRate: 300.00, privateRate: 600.00 },
            { id: 32, name: "A/G Ratio", memberRate: 300.00, privateRate: 600.00 },
            { id: 33, name: "e-GFR", memberRate: 200.00, privateRate: 400.00 },
            { id: 34, name: "S. Ferritin", memberRate: 250.00, privateRate: 500.00 },
            { id: 35, name: "Urine for R/E", memberRate: 40.00, privateRate: 100.00 },
            { id: 36, name: "Urine micro albumin with ACR", memberRate: 410.00, privateRate: 650.00 },
            { id: 37, name: "Urine for Acetone", memberRate: 50.00, privateRate: 100.00 },
            { id: 38, name: "Blood grouping & Rh typing", memberRate: 50.00, privateRate: 100.00 },
            { id: 39, name: "Widal test", memberRate: 100.00, privateRate: 200.00 },
            { id: 40, name: "Dengue NS1", memberRate: 300.00, privateRate: 400.00 },
            { id: 41, name: "Dengue IgG & IgM", memberRate: 300.00, privateRate: 400.00 },
            { id: 42, name: "D-Dimer", memberRate: 500.00, privateRate: 800.00 },
            { id: 43, name: "C-Reactive protein (CRP)", memberRate: 200.00, privateRate: 400.00 },
            { id: 44, name: "T3, T4, TSH", memberRate: 1050.00, privateRate: 1500.00 },
            { id: 45, name: "FT4", memberRate: 400.00, privateRate: 600.00 },
            { id: 46, name: "PSA", memberRate: 400.00, privateRate: 600.00 },
            { id: 47, name: "S. IgE", memberRate: 400.00, privateRate: 600.00 }
        ]
    },
    {
        title: "X-Ray Department",
        titleBn: "এক্স-রে বিভাগ",
        items: [
            { id: 1, name: "X-ray Chest PA view", memberRate: 150.00, privateRate: 350.00 },
            { id: 2, name: "X-ray Chest AP view", memberRate: 150.00, privateRate: 350.00 },
            { id: 3, name: "X-ray Chest Lateral view", memberRate: 150.00, privateRate: 350.00 },
            { id: 7, name: "X-ray Lumbar spine B/V (AP, LV)", memberRate: 300.00, privateRate: 700.00 },
            { id: 8, name: "X-ray Lumbar spine A/P", memberRate: 200.00, privateRate: 350.00 },
            { id: 23, name: "X-ray Skull A/P", memberRate: 250.00, privateRate: 700.00 },
            { id: 31, name: "X-ray Femur B/V", memberRate: 150.00, privateRate: 700.00 },
            { id: 40, name: "X-ray Tibia Fibula", memberRate: 150.00, privateRate: 600.00 }
        ]
    },
    {
        title: "Ultrasonogram (USG)",
        titleBn: "আল্ট্রাসনোগ্রাম (ইউএসজি)",
        items: [
            { id: 1, name: "Whole Abdomen", memberRate: 500.00, privateRate: 1000.00 },
            { id: 2, name: "Pregnancy Profile", memberRate: 400.00, privateRate: 800.00 },
            { id: 3, name: "KUB/Thyroid/HBS", memberRate: 400.00, privateRate: 700.00 }
        ]
    },
    {
        title: "Others (ECG, Dental, Consultations)",
        titleBn: "অন্যান্য (ইসিজি, ডেন্টাল, পরামর্শ)",
        items: [
            { id: 1, name: "ECG", memberRate: 100.00, privateRate: 200.00 },
            { id: 2, name: "Echo-cardiogram", memberRate: 1000.00, privateRate: 1500.00 },
            { id: 3, name: "PTA/Tympanometry", memberRate: 500.00, privateRate: 800.00 },
            { id: 4, name: "Dental Visit", memberRate: 0.00, privateRate: 200.00 },
            { id: 5, name: "Root Canal (RCT)", memberRate: 1500.00, privateRate: 4000.00 },
            { id: 6, name: "Specialist Consultation", memberRate: 0.00, privateRate: 200.00 },
            { id: 7, name: "Physiotherapy", memberRate: 150.00, privateRate: 300.00 }
        ]
    }
];
