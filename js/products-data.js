/**
 * ScanAI - Verified Products & Clinical Modalities Dataset
 * Source of truth: Existing project assets and specifications.
 * No fabricated regulatory clearances or invented clinical validation statistics.
 */

window.ScanAIProducts = [
  {
    id: "scanai-ecg-12",
    name: "ScanAI ECG 12",
    tagline: "Portable Heart Monitoring",
    category: "ecg",
    categoryLabel: "ECG Systems",
    image: "./assets/p1.jpeg",
    altImage: "./assets/ecg_homeuse.png",
    badge: "Portable System",
    description: "Real-time 12-lead ECG monitoring designed for point-of-care cardiac assessment and clinical mobility.",
    verifiedFeatures: [
      "Simultaneous 12-lead ECG waveform acquisition",
      "Real-time monitoring and continuous tracking",
      "Compact portable form factor for clinical mobility",
      "Wireless synchronization with clinical mobile applications"
    ],
    technicalHighlights: [
      { label: "Modality", value: "12-Lead Electrocardiography" },
      { label: "Operation", value: "Continuous Real-Time Acquisition" },
      { label: "Form Factor", value: "Lightweight Handheld Unit" },
      { label: "Data Integration", value: "Mobile Application Sync" }
    ],
    detailedDescription: "The ScanAI ECG 12 provides medical professionals with real-time 12-lead cardiac monitoring in an ultra-portable design. Designed for rapid deployment across clinics, emergency settings, and remote consultations."
  },
  {
    id: "scanai-ecg-pro",
    name: "ScanAI ECG Pro",
    tagline: "Hospital-Grade Diagnostic System",
    category: "ecg",
    categoryLabel: "ECG Systems",
    image: "./assets/p3.jpeg",
    altImage: "./assets/ecg_clinical.png",
    badge: "Clinical Workstation",
    description: "Advanced 12-lead diagnostic ECG system engineered for hospital environments, inpatient departments, and specialist cardiology clinics.",
    verifiedFeatures: [
      "Multi-lead clinical diagnostic recording",
      "Dedicated high-resolution touch interface",
      "Smart system integration with hospital networks",
      "Comprehensive patient data recording and review"
    ],
    technicalHighlights: [
      { label: "Modality", value: "Diagnostic 12-Lead ECG System" },
      { label: "Interface", value: "Integrated Clinical Display" },
      { label: "Environment", value: "Hospitals & Cardiology Departments" },
      { label: "Connectivity", value: "Network Integration Ready" }
    ],
    detailedDescription: "ScanAI ECG Pro is a comprehensive hospital-grade electrocardiograph built for high-throughput diagnostic departments. It combines advanced waveform processing with smart digital connectivity for clinical workflows."
  },
  {
    id: "scanai-xray-pro",
    name: "ScanAI X-Ray Pro",
    tagline: "High Quality Handheld Imaging",
    category: "xray",
    categoryLabel: "Digital Radiography",
    image: "./assets/xray_handheld.jpeg",
    altImage: "./assets/xray_hospital.jpeg",
    badge: "Handheld Unit",
    description: "Advanced handheld digital X-ray system providing high-definition diagnostic imaging with DICOM compatibility.",
    verifiedFeatures: [
      "High-definition digital radiography capture",
      "Handheld ergonomic chassis for bedside and field use",
      "Integrated operator shielding for safe clinical handling",
      "DICOM compatibility for hospital archive integration"
    ],
    technicalHighlights: [
      { label: "Modality", value: "Digital Radiography (X-Ray)" },
      { label: "Design", value: "Ergonomic Handheld Generator" },
      { label: "Standards", value: "DICOM Interoperability" },
      { label: "Application", value: "Bedside, Field, & Emergency Imaging" }
    ],
    detailedDescription: "ScanAI X-Ray Pro brings high-definition diagnostic imaging directly to the patient bedside. Featuring an ergonomic handheld form factor and DICOM compatibility, it allows clinicians to capture radiologic images rapidly wherever care is needed."
  },
  {
    id: "scanai-mobile-xray",
    name: "ScanAI Mobile Portable X-Ray",
    tagline: "Mobile Ward & ICU Imaging",
    category: "xray",
    categoryLabel: "Digital Radiography",
    image: "./assets/mobile_portable_xray.jpeg",
    altImage: "./assets/xray_hospital.jpeg",
    badge: "Mobile Cart Suite",
    description: "Mobile X-ray system engineered for rapid transport and quick diagnosis across hospital wards, emergency bays, and intensive care units.",
    verifiedFeatures: [
      "Mobile wheeled cart design for hospital transport",
      "Articulated positioning arm for versatile patient alignment",
      "Fast digital acquisition for time-critical triage",
      "Seamless integration with hospital imaging archives"
    ],
    technicalHighlights: [
      { label: "Modality", value: "Mobile Digital Radiography" },
      { label: "Mobility", value: "Wheeled Hospital Cart System" },
      { label: "Positioning", value: "Articulated Counterbalanced Arm" },
      { label: "Workflow", value: "Rapid Ward & ICU Imaging" }
    ],
    detailedDescription: "The ScanAI Mobile Portable X-Ray system is designed for effortless mobility between hospital departments. Its versatile articulated arm allows precise positioning for non-ambulatory and intensive care patients."
  }
];
