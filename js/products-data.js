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
  },
  {
    id: "omni-rovis",
    name: "Omni Rovis",
    tagline: "Autonomous Fluoroscopy Navigation & Motion Compensation",
    category: "surgical-ai",
    categoryLabel: "Surgical AI & Navigation",
    image: "./assets/omni_rovis_cockpit.png",
    altImage: "./assets/omni_rovis_icon.png",
    badge: "Pre-Clinical Navigation",
    externalUrl: "https://rovis.omniide.com/",
    description: "An intelligent surgical motion-compensation co-pilot that locks onto anatomical targets in real time and automates radiation shielding during complex interventional fluoroscopy and ERCP.",
    verifiedFeatures: [
      "Up to 78% radiation reduction via modeled ALARA dynamic collimation",
      "< 0.5 mm mean tracking error across benchmark pilot datasets",
      "< 14 ms unified multi-task vision inference latency",
      "TruBlock zero-OEM-tampering retrofittable lead shutter collimator",
      "Pulse-recalibrated optical flow + respiratory cycle kinematics"
    ],
    technicalHighlights: [
      { label: "Modality", value: "Interventional Fluoroscopy & ERCP" },
      { label: "Tracking Error", value: "< 0.5 mm Mean Target Lock" },
      { label: "Radiation Reduction", value: "Up to 78% (Modeled ALARA)" },
      { label: "Inference Latency", value: "< 14 ms Real-Time Fusion" },
      { label: "Hardware Add-on", value: "TruBlock Actuated Collimator" },
      { label: "Regulatory Status", value: "Pre-Clinical Research Platform" }
    ],
    detailedDescription: "Omni Rovis is a pre-clinical AI surgical motion compensation platform engineered for interventional fluoroscopy and complex biliary/ERCP procedures. It continuously eliminates respiratory drift and voluntary motion, enabling continuous target lock and automated radiation shuttering without interrupting surgeon workflow."
  },
  {
    id: "arogya-omni",
    name: "Arogya Omni",
    tagline: "ABDM M1–M4 Hospital OS & AI NHCX Claims Engine",
    category: "hospital-os",
    categoryLabel: "Hospital OS & Exchange",
    image: "./assets/arogya_omni_dashboard.jpg",
    altImage: "./assets/arogya_omni_logo.png",
    badge: "Hospital OS",
    externalUrl: "https://arogya.omniide.com/",
    description: "Full-stack hospital operating system certified for Ayushman Bharat Digital Mission (ABDM M1–M4) and real-time National Health Claims Exchange (NHCX) insurance adjudication.",
    verifiedFeatures: [
      "ABDM M1–M4 certified (ABHA Identity, HIP/HIU Health Records, Consent, HFR/HPR)",
      "National Health Claims Exchange (NHCX) AI pre-authorization & claims engine",
      "Automated NPPA tariff compliance and medical necessity validation",
      "Enterprise OPD/IPD bed telemetry, digital e-prescriptions & SNOMED CT coding",
      "NRCES NDHM FHIR R4 care context bundle generation"
    ],
    technicalHighlights: [
      { label: "Standard", value: "ABDM Milestone 1–4 Certified" },
      { label: "Exchange", value: "NHCX Real-Time Insurance Gateway" },
      { label: "Data Format", value: "NRCES NDHM FHIR R4 Bundles" },
      { label: "Clinical Core", value: "OPD/IPD Bed Command Center" },
      { label: "Billing", value: "NPPA Automated Tariff Compliance" },
      { label: "Platform", value: "Cloud-Native Hospital OS" }
    ],
    detailedDescription: "Arogya Omni is an enterprise hospital operating system that unifies hospital administration, clinical care contexts, and healthcare financing under India's national health stack. It automates ABHA patient enrollment, NRCES FHIR R4 medical records, and instantaneous NHCX cashless claims routing across major insurers."
  }
];

