// File: src/data/servicesData.ts

export interface Service {
  slug: string; // Used for dynamic routing
  icon: string; // FontAwesome or other icon class name
  title: string; // Service title
  description: string; // Short description for the grid
  features: string[]; // List of key features
  longDescription?: string; // Optional long description for detail pages
}

export const servicesData: Service[] = [
  {
    slug: "residential-junk-removal",
    icon: "home",
    title: "Residential Junk Removal",
    description:
      "From single-item pickups to full house cleanouts, our team provides efficient, stress-free junk removal tailored to your needs. We work around your schedule to ensure minimal disruption to your daily routine.",
    features: [
      "Full home cleanouts for moving or downsizing",
      "Garage, attic, and basement clearing",
      "Safe removal of furniture and appliances",
      "Yard waste and seasonal cleanup services",
      "Flexible scheduling, including same-day options",
      "Free on-site estimates for large projects",
    ],
    longDescription:
      "Our Residential Junk Removal service is designed to make clearing out your home simple and hassle-free. Whether you’re tackling a single room, clearing out your garage, or decluttering an entire house, our experienced team takes care of everything. We handle heavy lifting, hauling, and proper disposal of items like furniture, appliances, and yard waste. With flexible scheduling options, including same-day service, we accommodate your timeline to minimize disruptions. Plus, for larger projects, we offer free on-site estimates to ensure a customized solution. Trust us to provide a professional, efficient, and convenient junk removal experience for your home.",
}
,
  {
    slug: "commercial-junk-removal",
    icon: "building",
    title: "Commercial Junk Removal",
    description:
      "Keep your Springfield-area business running smoothly with our professional commercial junk removal. We handle everything from office equipment to construction debris, ensuring a clutter-free space with minimal disruption to your operations.",
    features: [
      "Office and retail space cleanouts",
      "Restaurant and warehouse haul-offs",
      "Construction site debris removal",
      "Fast, reliable scheduling to minimize downtime",
      "Removal of electronics, furniture, and fixtures",
      "Free on-site estimates for large-scale projects",
    ],
    longDescription:
      "Maintaining a clean and organized commercial space is vital to running a successful business. Our Commercial Junk Removal service is tailored to meet the needs of businesses in the Springfield area, providing quick and professional solutions for removing unwanted items. Whether you’re clearing out office furniture, retail fixtures, restaurant equipment, or construction debris, our experienced team ensures safe and efficient removal. We offer flexible scheduling to minimize downtime, allowing you to focus on what matters most—your business. For larger projects, we provide free on-site assessments to customize our service to your needs. Let us handle the heavy lifting while you keep your business running smoothly.",
}
,
  {
    slug: "furniture-removal",
    icon: "couch",
    title: "Furniture Removal",
    description:
      "Avoid the stress of moving heavy furniture. Our expert team handles all types of furniture with care, providing seamless removal and often donating usable items to local charities in Springfield.",
    features: [
      "Removal of all furniture types, big or small",
      "Coordination with local charities for donations",
      "Proper disposal of non-usable items",
      "Careful, damage-free removal process",
      "Services for residential and commercial spaces",
      "Free, no-obligation on-site estimates",
    ],
    longDescription:
      "Furniture removal can be overwhelming, especially when dealing with bulky or heavy items. Our Furniture Removal service is designed to make the process smooth and hassle-free. From couches and dressers to office furniture, we handle everything with precision and care to avoid damage to your property. Usable items are often donated to local charities, helping your unwanted furniture find a second home while reducing waste. For non-usable items, we ensure proper and responsible disposal. Whether it’s a single piece or a full cleanout, we provide professional and friendly service tailored to your needs. Contact us for quick scheduling and free on-site estimates.",
},
  {
    slug: "appliance-disposal",
    icon: "truck-loading",
    title: "Appliance Disposal",
    description:
      "Say goodbye to old appliances with our professional disposal service. We safely disconnect, remove, and transport refrigerators, washers, dryers, and more, ensuring compliance with all regulations.",
    features: [
      "Professional disconnection of appliances",
      "Safe handling of heavy and bulky items",
      "Pickup and removal of all appliance types",
      "Compliance with local and federal disposal regulations",
      "Preventive leak and spill measures",
      "Free on-site estimates for large loads or multiple appliances",
    ],
    longDescription:
      "Disposing of outdated or broken appliances can be difficult and time-consuming. Our Appliance Disposal service provides a hassle-free solution, including professional disconnection and safe removal of items like refrigerators, washers, dryers, dishwashers, and more. We follow all required regulations for recycling or disposal, ensuring peace of mind for our clients. With a focus on safety and efficiency, our team takes precautions to prevent leaks or spills during removal. Whether you have a single appliance or a full load, we’ll handle the heavy lifting, so you don’t have to. Contact us today for quick, reliable service and free on-site estimates for larger jobs.",
}
,
  {
    slug: "construction-debris-removal",
    icon: "hard-hat",
    title: "Construction Debris Removal",
    description:
      "Completing a renovation or construction project? We provide fast and efficient removal of drywall, lumber, concrete, and other building materials, ensuring your site stays clean, safe, and productive.",
    features: [
      "Same-day debris pickup options",
      "Removal of wood, drywall, concrete, metal, and more",
      "Loading, hauling, and cleanup included",
      "Licensed and insured professionals",
      "Service for residential and commercial projects",
      "Free on-site assessments for large-scale jobs",
    ],
    longDescription:
      "Construction and renovation projects can generate significant debris, from piles of lumber to leftover drywall and concrete. Our Construction Debris Removal service takes the hassle out of cleanup, offering fast and thorough removal to keep your workspace safe and functional. Whether it’s a small home renovation or a large commercial project, our licensed and insured team handles all the heavy lifting, hauling, and final cleanup so you can focus on finishing your project. We also offer same-day pickup and free on-site assessments for larger jobs, ensuring you get exactly the service you need, when you need it.",
}
,
  {
    slug: "yard-waste-cleanup",
    icon: "leaf",
    title: "Yard Waste Cleanup",
    description:
      "Transform your outdoor space by clearing away branches, leaves, soil, and storm debris. Perfect for seasonal cleanups, landscaping projects, or storm recovery in Springfield’s unpredictable climate.",
    features: [
      "Comprehensive storm debris collection",
      "Removal of branches, leaves, and soil",
      "Support for landscaping and renovation projects",
      "Service for both residential and commercial properties",
      "Quick and hassle-free scheduling",
      "Free on-site assessments for large projects",
    ],
    longDescription:
      "Maintaining a clean and tidy yard can be a challenge, especially after storms or during major landscaping projects. Our Yard Waste Cleanup service is designed to make the process easy and efficient. Whether you’re dealing with fallen branches, piles of leaves, or soil from a landscaping overhaul, we’ve got the tools and expertise to handle it all. Serving both residential and commercial clients, we ensure prompt removal and a clutter-free outdoor space you can enjoy. With flexible scheduling and free on-site assessments for larger jobs, you can count on us to handle your yard waste with professionalism and care.",
}
,
  {
    slug: "disaster-cleanup-services",
    icon: "umbrella",
    title: "Storm, Fire & Flood Cleanup",
    description:
      "Recovering from a disaster can be overwhelming. Our professional cleanup services ensure safe, efficient removal of debris and damaged items, restoring your property to a livable condition.",
    features: [
      "Removal of storm debris",
      "Fire-damaged materials disposal",
      "Flood-soaked furniture and items cleanup",
      "Quick response times",
      "Safe and eco-friendly disposal",
      "Free, no-obligation on-site estimates",
    ],
    longDescription:
      "Disasters like storms, fires, and floods can leave behind a trail of destruction. Our team specializes in disaster cleanup, handling everything from storm debris to waterlogged furniture and fire-damaged materials. We work efficiently and responsibly to clear your property and ensure proper disposal or salvage wherever possible, helping you focus on recovery.",
},
{
  slug: "estate-cleanouts",
  icon: "trash-alt",
  title: "Estate Cleanouts",
  description:
    "Simplify the process of estate transitions with our caring and professional team. We handle everything from sorting to disposal, ensuring a respectful and seamless experience during a challenging time.",
  features: [
    "Compassionate and discreet assistance",
    "Sorting, packing, and donation coordination",
    "Complete property cleanout, including basements, attics, and garages",
    "Removal of furniture, appliances, and personal belongings",
    "Flexible scheduling to meet your timeline",
    "Free, no-obligation on-site estimates",
  ],
  longDescription:
    "Handling an estate cleanout during a difficult time can feel overwhelming. Our team provides compassionate and efficient support to simplify the process. We take care of sorting personal belongings, identifying items for donation, and removing unwanted items from every area of the property—including basements, attics, and garages. Whether you’re managing the cleanout of a loved one’s estate or preparing a property for sale, we ensure a professional, respectful experience tailored to your needs. Let us handle the heavy lifting, so you can focus on what matters most.",
}

];
