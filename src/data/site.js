export const studio = {
  name: "Aurélia",
  wordmark: "AURÉLIA",
  tagline: "Wedding Films & Photography",
  city: "Udaipur, Rajasthan",
  phoneDisplay: "+91 98290 12345",
  phoneRaw: "+919829012345",
  whatsapp: "919829012345",
  email: "hello@aureliafilms.in",
  address: ["Studio 14, Laxmi Niwas", "Bhattiyani Chohatta, Jagdish Chowk", "Udaipur, Rajasthan 313001"],
  hours: [
    { days: "Monday – Friday", time: "10:00 – 19:00" },
    { days: "Saturday", time: "11:00 – 17:00" },
    { days: "Sunday", time: "By appointment" },
  ],
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  mapEmbed:
    "https://www.google.com/maps?q=Jagdish+Chowk,+Udaipur,+Rajasthan+313001&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Jagdish+Chowk,+Udaipur,+Rajasthan+313001",
};

export const whatsappLink = (message) =>
  `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Packages", path: "/packages" },
  { label: "The Studio", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const images = {
  hero: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/052e78d5a_generated_680c8bf8.png",
  filmPoster: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/e8c057f67_generated_39d4e5bf.png",
  expertiseFilm: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/e8fe6edfe_generated_1dd96fa2.png",
  expertiseCandid: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/744ad581c_generated_85dbcbd1.png",
  expertisePreWedding: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/8aea7ea5e_generated_fbdd5eb2.png",
  expertiseDrone: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/b598262bb_generated_a614ee94.png",
  portfolioPalace: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/9510527f2_generated_9b9299bb.png",
  portfolioBallroom: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/b787b641a_generated_85066812.png",
  portfolioCeremony: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/2015ac5ea_generated_bb633e26.png",
  portfolioCandidBw: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/9d7f6c333_generated_835b2e03.png",
  portfolioCandidGroom: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/5cf9cf32a_generated_e8fc9a46.png",
  portfolioDunes: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/bec9ac8d8_generated_acf27d94.png",
  portfolioOldCity: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/9a7ac39fe_generated_924fd247.png",
  portfolioHaldi: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/37023a46d_generated_24e253e2.png",
  portfolioMehendi: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/ad7664b33_generated_b991da71.png",
  founderA: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/957a136ee_generated_bb71762c.png",
  founderB: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/5e2dd23d6_generated_0a980767.png",
  philosophy: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/f3fd7602d_generated_abf5960b.png",
  btsOne: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/82094c21c_generated_c2ed3025.png",
  btsTwo: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/7007fbf7a_generated_4a48fef0.png",
  btsThree: "https://media.base44.com/images/public/6addcad5ca467bc6c5e9b951/05acc3ff8_generated_0bdce3a8.png",
};

export const stats = [
  { value: 300, suffix: "+", label: "Weddings Captured" },
  { value: 10, suffix: "+", label: "Years of Legacy" },
  { value: 100, suffix: "%", label: "Cinematic Excellence" },
];

export const expertise = [
  {
    title: "Cinematic Wedding Films",
    copy: "Feature-length films and 90-second teasers, edited like cinema — pacing, score and silence.",
    image: images.expertiseFilm,
    alt: "Bride in profile in soft window light",
  },
  {
    title: "Candid Photography",
    copy: "Unposed, unhurried frames of the people you love, caught mid-laugh rather than mid-pose.",
    image: images.expertiseCandid,
    alt: "Newlyweds laughing as guests shower them with petals",
  },
  {
    title: "Pre-Wedding Shoots",
    copy: "A day made entirely for the two of you — dunes, lakes, old city lanes, golden light.",
    image: images.expertisePreWedding,
    alt: "Couple walking beside a misty lake at blue hour",
  },
  {
    title: "Drone & Aerial Coverage",
    copy: "Licensed pilots and 4K aerial frames that place your wedding inside its landscape.",
    image: images.expertiseDrone,
    alt: "Aerial view of a palace courtyard with a bridal procession",
  },
];

export const portfolioCategories = [
  "All Works",
  "Cinematic Wedding Films",
  "Candid Portraits",
  "Pre-Wedding Tales",
  "Haldi & Mehendi",
];

export const portfolio = [
  {
    id: "palace-baraat",
    title: "The Palace Baraat",
    location: "City Palace, Udaipur",
    category: "Cinematic Wedding Films",
    type: "film",
    caption: "Royal Palace Wedding — Cinematic Film",
    image: images.portfolioPalace,
    alt: "Wedding procession with band and lanterns at a floodlit palace gate",
    orientation: "landscape",
  },
  {
    id: "crystal-hall",
    title: "First Dance, Crystal Hall",
    location: "Taj Lake Palace, Udaipur",
    category: "Cinematic Wedding Films",
    type: "film",
    caption: "Palace Reception — Cinematic Film",
    image: images.portfolioBallroom,
    alt: "Couple embracing beneath a chandelier in a dim ballroom",
    orientation: "portrait",
  },
  {
    id: "seven-vows",
    title: "Seven Vows by Firelight",
    location: "Deogarh, Rajasthan",
    category: "Cinematic Wedding Films",
    type: "film",
    caption: "Vedic Ceremony — Candid Film",
    image: images.portfolioCeremony,
    alt: "Close view of hands tied with thread beside a sacred fire",
    orientation: "landscape",
  },
  {
    id: "grandmothers-laughter",
    title: "Her Grandmother's Laughter",
    location: "Jaipur",
    category: "Candid Portraits",
    type: "photo",
    caption: "Candid Portrait — Jaipur",
    image: images.portfolioCandidBw,
    alt: "Black and white photo of a grandmother laughing with the bride",
    orientation: "portrait",
  },
  {
    id: "safa",
    title: "The Safa, Tied by Hand",
    location: "Jodhpur",
    category: "Candid Portraits",
    type: "photo",
    caption: "Candid Portrait — Jodhpur",
    image: images.portfolioCandidGroom,
    alt: "Groom's mother adjusting his turban in morning light",
    orientation: "landscape",
  },
  {
    id: "dunes",
    title: "Dusk on the Dunes",
    location: "Osian, Jaisalmer",
    category: "Pre-Wedding Tales",
    type: "photo",
    caption: "Pre-Wedding Tale — Jaisalmer",
    image: images.portfolioDunes,
    alt: "Couple standing on desert dunes at dusk",
    orientation: "portrait",
  },
  {
    id: "lanterns-rain",
    title: "Lanterns & Rain",
    location: "Old City, Udaipur",
    category: "Pre-Wedding Tales",
    type: "photo",
    caption: "Pre-Wedding Tale — Udaipur",
    image: images.portfolioOldCity,
    alt: "Couple walking through a rain-soaked old city lane at night",
    orientation: "landscape",
  },
  {
    id: "turmeric",
    title: "A Morning of Turmeric",
    location: "Chomu Palace, Jaipur",
    category: "Haldi & Mehendi",
    type: "photo",
    caption: "Haldi Ceremony — Jaipur",
    image: images.portfolioHaldi,
    alt: "Bride laughing as haldi is applied, marigolds overhead",
    orientation: "portrait",
  },
  {
    id: "henna",
    title: "Henna, Emerald & Gold",
    location: "Udaipur",
    category: "Haldi & Mehendi",
    type: "photo",
    caption: "Mehendi Detail — Udaipur",
    image: images.portfolioMehendi,
    alt: "Intricate henna on a bride's hands resting on green velvet",
    orientation: "landscape",
  },
];

export const packages = [
  {
    id: "essential",
    name: "Essential Candid",
    suitedFor: "Intimate one-day weddings",
    price: "₹45,000",
    priceNote: "Starting at",
    deliverables: [
      "One lead photographer + one cinematographer",
      "Full-day candid coverage (up to 10 hours)",
      "250+ hand-edited photographs",
      "3-minute cinematic teaser film",
      "Private online gallery for family",
      "Delivery in 4 weeks",
    ],
    featured: false,
  },
  {
    id: "premium",
    name: "Premium Cinematic Film & Photo",
    suitedFor: "Three-day celebrations",
    price: "₹85,000",
    priceNote: "Starting at",
    deliverables: [
      "Creative team of four across all events",
      "Three-day coverage — mehendi, haldi, wedding",
      "600+ hand-edited photographs",
      "4K full film + 3-minute teaser",
      "Dual-system audio of vows and speeches",
      "40-page heirloom album",
      "Delivery in 6 weeks",
    ],
    featured: true,
  },
  {
    id: "destination",
    name: "Luxury Destination Wedding",
    suitedFor: "Multi-day palace & destination weddings",
    price: "Custom Quote",
    priceNote: "Tailored",
    deliverables: [
      "Multi-day, multi-location coverage",
      "Two cinematographers + licensed drone pilot",
      "1000+ hand-edited photographs",
      "Feature film, teaser and social edits",
      "Leather-bound album + framed prints",
      "Travel, stay and timeline coordination",
      "Dedicated producer on call",
    ],
    featured: false,
  },
];

export const reviews = [
  {
    quote:
      "They didn't just film our wedding — they remembered it for us. We've watched the teaser a hundred times and still cry.",
    couple: "Ananya & Rohan",
    place: "Udaipur",
  },
  {
    quote:
      "Every frame looks like a still from a film we'd pay to watch. Worth every rupee, and then some.",
    couple: "Sanya & Kabir",
    place: "Jaipur",
  },
  {
    quote:
      "Ten hours of wedding chaos and not once did we feel a camera in the room. Somehow they were everywhere.",
    couple: "Meher & Arjun",
    place: "Jodhpur",
  },
  {
    quote:
      "The team flew to Italy with us. Our family still asks who made that film — twice.",
    couple: "Ishita & Dev",
    place: "Lake Como",
  },
  {
    quote:
      "My father's speech, my grandmother's laugh, exactly as it happened. Nothing staged, nothing lost.",
    couple: "Nikita & Ved",
    place: "Delhi",
  },
  {
    quote:
      "We booked them two years early and it remains the best decision of the entire wedding.",
    couple: "Tara & Yash",
    place: "Udaipur",
  },
];

export const gear = [
  {
    icon: "camera",
    title: "Full-Frame Mirrorless",
    copy: "Sony Alpha bodies with dual-card redundancy and two bodies per lead shooter — no frame is ever at risk.",
  },
  {
    icon: "aperture",
    title: "Cinema Prime Lenses",
    copy: "f/1.2 – f/1.4 primes and G-Master zooms, chosen for skin tones and candlelit interiors.",
  },
  {
    icon: "plane",
    title: "4K Cinema Drones",
    copy: "Licensed pilots with backup aircraft for sweeping palace, beach and mountain establishing frames.",
  },
  {
    icon: "lightbulb",
    title: "Cinema Lighting",
    copy: "Battery-powered LED panels and reflectors that stay invisible in the room. No harsh on-camera flash.",
  },
  {
    icon: "video",
    title: "Gimbals & Sliders",
    copy: "Motorised gimbals, sliders and monopods for movement that feels like a film rather than a phone.",
  },
  {
    icon: "mic",
    title: "Dual-System Audio",
    copy: "Lapel mics on both families plus ambient recorders, so every vow survives the crowd.",
  },
];

export const behindTheScenes = [
  { image: images.btsOne, alt: "Cinematographer operating a gimbal during a golden hour shoot" },
  { image: images.btsTwo, alt: "Photographer crouching to capture a candid moment at a wedding" },
  { image: images.btsThree, alt: "Film crew reviewing footage on a palace terrace at dusk" },
];