/**
 * ScanAI - Verified Enterprise Products & Clinical Systems Dataset
 * Exclusive focus on Omni Rovis (Flagship Surgical AI) & Arogya Omni (Hospital OS & NHCX Engine)
 * Source of truth: rovis.omniide.com & arogya.scanai.health
 */

window.ScanAIProducts = [
  {
    id: "omni-rovis",
    name: "Omni Rovis",
    tagline: "Autonomous Fluoroscopy Navigation & Surgical Motion Compensation",
    category: "surgical-ai",
    categoryLabel: "Flagship Surgical AI",
    image: "./assets/omni_rovis_cockpit.png",
    altImage: "./assets/trublock_carm_mounted.jpg",
    badge: "Flagship Research Platform",
    externalUrl: "https://rovis.omniide.com/",
    description: "An autonomous motion-compensation surgical co-pilot for interventional fluoroscopy and complex ERCP. Delivers continuous sub-millimeter anatomical target lock and automates ALARA radiation shielding with zero OEM tampering.",
    verifiedFeatures: [
      "Up to 78% radiation reduction via modeled ALARA dynamic beam shuttering",
      "< 0.5 mm mean tracking error across benchmark retrospective datasets (2,654 frames)",
      "< 14 ms unified multi-task vision inference latency on TensorRT",
      "TruBlock zero-OEM-tampering retrofittable lead shutter motorized collimator",
      "Pulse-recalibrated Bayesian Kalman motion fusion anchored to L2 spine kinematics",
      "Dual-interlock safety architecture (<12ms dead-man foot pedal + AI confidence floor)"
    ],
    technicalHighlights: [
      { label: "Modality", value: "Interventional Fluoroscopy & Therapeutic ERCP" },
      { label: "Target Lock Precision", value: "< 0.5 mm Mean Tracking Error" },
      { label: "Radiation Shielding", value: "Up to 78% (Modeled ALARA Reduction)" },
      { label: "Vision Latency", value: "< 14 ms Closed-Loop Multi-Task Fusion" },
      { label: "Actuation Hardware", value: "TruBlock Motorized Lead Shutter Collimator" },
      { label: "Motion Control Law", value: "Levenberg-Marquardt Damped Pseudoinverse" },
      { label: "Regulatory Target", value: "Pre-Clinical Platform (FDA 510(k) Class II Path)" },
      { label: "System Host", value: "Mobile Console with High-Fidelity Cockpit UI" }
    ],
    detailedDescription: "Omni Rovis eliminates the surgical 'manual reset tax' (12–18 operator pauses per procedure) caused by tidal diaphragmatic excursion and patient drift. Powered by a unified 5-task TensorRT vision backbone and the TruBlock standalone lead shutter collimator, it dynamically tracks duodenoscopes, guidewires, and extraction baskets in real time, dramatically cutting occupational scatter radiation while keeping the 300 kg hospital C-arm completely frozen."
  },
  {
    id: "arogya-omni",
    name: "Arogya Omni",
    tagline: "ABDM M1–M4 Certified Hospital OS & AI NHCX Claims Engine",
    category: "hospital-os",
    categoryLabel: "Hospital OS & Health Exchange",
    image: "./assets/arogya_omni_dashboard.jpg",
    altImage: "./assets/arogya_omni_logo.png",
    badge: "Enterprise Hospital OS",
    externalUrl: "https://arogya.scanai.health/",
    description: "Cloud-native enterprise hospital operating system certified across Ayushman Bharat Digital Mission (ABDM M1–M4) with an automated AI pre-authorization and claims engine for the National Health Claims Exchange (NHCX).",
    verifiedFeatures: [
      "ABDM M1–M4 certified (ABHA Identity, HIP/HIU Care Context, Consent, HFR/HPR Registries)",
      "National Health Claims Exchange (NHCX) AI pre-authorization & automated claims routing",
      "Real-time NPPA pricing and tariff compliance engine with clinical necessity verification",
      "Enterprise OPD/IPD bed telemetry with live emergency ward occupancy tracking",
      "Digital consultation editor, SNOMED CT e-prescriptions & drug interaction validation",
      "NRCES NDHM FHIR R4 care context bundle generation and secure gateway sync"
    ],
    technicalHighlights: [
      { label: "Regulatory Framework", value: "ABDM Milestones M1, M2, M3, M4 Certified" },
      { label: "Insurance Gateway", value: "National Health Claims Exchange (NHCX) Live Sync" },
      { label: "Data Architecture", value: "NRCES NDHM FHIR R4 Bundle Standards" },
      { label: "Core Clinical Ops", value: "Real-Time OPD/IPD Hospital Command Center" },
      { label: "Coding Standards", value: "SNOMED CT, ICD-10, LOINC Integration" },
      { label: "Tariff Validation", value: "Automated NPPA Price Ceiling Compliance" },
      { label: "Payer Coverage", value: "Star Health, HDFC ERGO, Care Health & More" },
      { label: "Deployment Model", value: "High-Availability Cloud-Native Infrastructure" }
    ],
    detailedDescription: "Arogya Omni unifies clinical care workflows, hospital bed telemetry, and healthcare financing into a single resilient operating platform. Designed for modern multi-specialty hospitals and clinics, it automates paperless ABHA patient onboarding, instant diagnostic record linking, and cashless NHCX insurance claims processing under India's national health stack."
  }
];
