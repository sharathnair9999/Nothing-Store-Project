import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 1111,
    title: "PlayStation 5 - DVD + Online",
    company: "Sony",
    rating: 5,
    price: 39999,
    discountPercent: 33,
    unitsLeft: 110,
    categoryName: "Gaming",
    inStock: false,
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647875427/nothing-store-project/ps5_cgta4o.jpg",
    description:
      ["The PlayStation 5 is powered by a custom system on a chip (SoC) designed in tandem by AMD and Sony, integrating a custom 7 nm AMD Zen 2 CPU with eight cores running at a variable frequency capped at 3.5 GHz.", "The internal storage of the PlayStation 5 is a custom-built 825 GB solid-state drive (667 GB available) with a 12-channel interface, achieving a raw throughput of 5.5 GB/s. ", "The launch unit is a two-tone design matching the design of the DualSense controller, with a black internal block flanked by two white wings along its sides, each lit by blue LEDs.", "The DualSense wireless controller for the PlayStation 5 was revealed on April 7, 2020. It is based on the prior DualShock controller but with modifications influenced by discussions with game designers and players." , "The PlayStation 5 supports Popcornflix, Crackle, Crunchyroll, Niconico, AbemaTV, YouTube, YouTube TV, Netflix, Red Bull TV, Disney+ and much more"],
  },
  {
    _id: 1112,
    title: "Sony WH 1000XM4",
    company: "Sony",
    rating: 2,
    unitsLeft: 110,
    price: 26990,
    inStock: true,
    discountPercent: 10,
    categoryName: "Audio",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647522801/nothing-store-project/sony-xm4_b534or.png",
    description:
      ["Industry-leading noise canceling with Dual Noise Sensor technology","Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo","Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback)","Touch Sensor controls to pause/play/skip tracks, control volume, activate your voice assistant, and answer phone calls","Speak-to-chat technology automatically reduces volume during conversations","Superior call quality with precise voice pickup","Wearing detection pauses playback when headphones are removed","Seamless multiple-device pairing","Adaptive Sound Control provides a personalized listening experience"],
  },
  {
    _id: 1113,
    title: "iPhone XR 64GB",
    company: "Apple",
    rating: 3,
    unitsLeft: 110,
    price: 38990,
    inStock: false,
    discountPercent: 5,
    categoryName: "Smartphone",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647522898/nothing-store-project/iphone_gnnhgt.jpg",
    description:
     ["6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display","Water and dust resistant (1 meter for up to 30 minutes, IP67)","Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps","7MP TrueDepth front camera system with Portrait mode, Portrait Lighting, Depth Control, and 1080p video","Face ID for secure authentication","A12 Bionic with second-generation Neural Engine","iOS 14 with redesigned widgets on the Home screen, all-new App Library, App Clips, and more"],
  },
  {
    _id: 1114,
    title: "Apple MacBook Air M1 chip",
    company: "Apple",
    rating: 4,
    price: 89990,
    discountPercent: 10,
    unitsLeft: 110,
    inStock: true,
    categoryName: "Laptop",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647875506/nothing-store-project/laptop-min_rte74b.jpg",
    description:
      ["All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.","Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.","Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.","Stunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.","Simply Compatible – All your existing apps work, including Adobe Creative Cloud, Microsoft 365, and Google Drive. Plus you can use your favorite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store."],
  },
  {
    _id: 1115,
    title: "Samsung S22 Ultra 256GB",
    company: "Samsung",
    rating: 4,
    inStock: true,
    price: 65990,
    discountPercent: 5,
    unitsLeft: 110,
    categoryName: "Smartphone",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647523934/nothing-store-project/samsungphone_seyiko.jpg",
    description:["The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text.","5G Ready powered by Galaxy’s first 4nm processor. Our fastest, most powerful chip ever. That means, a faster CPU and GPU compared to Galaxy S21 Ultra. It’s an epic leap for smartphone technology.","The Dynamic AMOLED 2x display improves outdoor visibility with up to 1750 nits in peak brightness.* And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view.","Our most advanced Pro-grade Camera yet, packing the power of a professional's kit in one handheld device. Also lets you make your nights epic with Nightography: The sensor pulls in more light, the Super Clear Lens tones down lens flare, and fast-acting AI delivers near-instant intelligent processing.",""],
  },
  {
    _id: 1116,
    title: "Mechanical Keyboard",
    company: "Zebronics",
    rating: 4,
    inStock: true,
    price: 2000,
    discountPercent: 8,
    unitsLeft: 11,
    categoryName: "Accessories",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524293/nothing-store-project/mech_keyboard_p1qize.webp",
    description:["Blue Switches: Shadow blade comes equipped with mechanical Blue Clicky Switches which gives you a tactile feedback of it. It also helps to increase the gaming speed by reducing the effort required to push the keys all the way through and provides a 100% typing speed bonus.","LED: It has a 22 Spectrum LED Mode for the day and also for the night time. You can adjust the LED as per your requirement","Windows Key-Lock: With its Windows Key Lock you can play for long hours without being any hassle or interruption.","Floating Key-Caps: The keycaps are perfectly placed which gives a clicky sound and accurate results every time you click. Its ergonomic design helps distance each pressure laid on it while using it.","Control Knob: Shadow Blade is also equipped with a Control Knob that helps you control your media i.e play/pause and volume control"]
  },
  {
    _id: 1117,
    title: "Echo Dot Alexa 3rd Gen",
    company: "Amazon",
    rating: 4,
    inStock: true,
    price: 2699,
    discountPercent: 5,
    unitsLeft: 110,
    categoryName: "Accessories",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524508/nothing-store-project/alexa_ep9pkr.jpg",
    description:["Echo Dot is our best selling smart speaker that can be operated by voice - even from a distance. Alexa can speak both English & Hindi, and new features are added automatically","Get started with Smart home: It is simple to make your home smart and use voice to control lights. Extend this experience to other appliances like ACs, TVs, geysers using smart plugs (to be purchased separately)","Hands-free music control: Stream millions of songs in your favorite language from Amazon Prime Music, Spotify, JioSaavn, Gaana, or Apple Music","Voice makes everything simple: Just ask Alexa to easily pay your bills, get news, weather, cricket scores, nursery rhymes and stories!"]
  },
  {
    _id: 1118,
    title: "Mi-Fit Band 5",
    company: "Xiaomi",
    rating: 2,
    inStock: true,
    price: 2999,
    discountPercent: 5,
    unitsLeft: 122,
    categoryName: "Accessories",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524677/nothing-store-project/mi_fit_band_kpgxao.jpg",
    description:["1.1” Full touch AMOLED color display","Battery runs up to 14 days on a single charge. Battery capacity : 125 mAh","Magnetic charging – Hassle free charging","PAI (Personal Activity Intelligence) – Single matrix to track your all fitness related activities. Tracks 11 professional sports mode (including Yoga and Rope skipping). Run on the go with Automatic activity detection (Running and Walking).","5ATM Water Resistant- recognizes swimming mode.","Stress monitoring with Guided breathing exercise to lower the stress level. Women health monitoring- menstrual cycle tracking and notification." ],
  },
  {
    _id: 1119,
    title: "Galaxy Watch4 Classic LTE",
    company: "Samsung",
    rating: 5,
    inStock: true,
    price: 27999,
    discountPercent: 10,
    unitsLeft: 122,
    categoryName: "Accessories",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524723/nothing-store-project/samsung_watch_yhhk4n.jpg",
    description: ["Only compatible with Android Smartphones (Runs on Wear OS Powered by Samsung)","Bioelectrical Impedance Analysis Sensor for Body Composition Analysis, Optical Heart Rate Sensor.","Health Monitoring features such as Advanced Sleep Analysis & Women's Health.","Enhanced Fitness tracking lets you track 90+ workouts","Enriched App availability and connectivity with Wear OS, Powered by Samsung"],
  },
  {
    _id: 1120,
    title: "Galaxy Book2 360",
    company: "Samsung",
    rating: 5,
    inStock: true,
    price: 129000,
    discountPercent: 8,
    unitsLeft: 111,
    categoryName: "Laptop",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524947/nothing-store-project/galaxy_book_atq5lk.jpg",
    description:["Processor: 12th Generation Intel Core i5-1235U Processor(1.3 GHz up to 4.4 GHz, 12 MB L3 Cache) | Memory: 16 GB LPDDR4x Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD","Operating System: Windows 11 Home | Preinstalled Software: MS Office Home & Student 2021, Live Message, Live Wallpaper, McAfee Live Safe (Trial), Screen Recorder, Samsung Gallery, Quick Search, Samsung Flow, Samsung Notes, Samsung Recovery, Samsung Settings, Studio Plus, Samsung Update, Samsung Security, Quick Share, Galaxy Book Smart Switch","Display: 13.3 inch (33.7 cm), FHD AMOLED Display (1920 x 1080) | Touchscreen | Intel Iris Xe Graphics","Ports: 1 HDMI, 1 Thunderbolt 4, 1 USB Type-C, 1 USB3.2, MicroSD Multi-media Card Reader, 1 Headphone out/Mic-in Combo, | Without CD-drive | Average battery life = 61.1 Wh (upto 22hrs video play), 65 W USB Type-C Adapter","Camera: 720p HD, Intelligent Video Call Solution with Intel Collaboration | Microphone: 1 Headphone out/Mic-in Combo | Keyboard: Pro Keyboard (Backlit) | FingerPrint Reader, Accelerometer Sensor, Gyro Sensor"],
  },
  {
    _id: 1121,
    title: `iMac M1 Max 24" 4TB`,
    company: "Apple",
    rating: 5,
    inStock: true,
    price: 429000,
    discountPercent: 10,
    unitsLeft: 118,
    categoryName: "Desktop",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1648001304/nothing-store-project/m1_mac_ia4hov.jpg",
    description:["Immersive 60.96 cm (24-inch) 4.5K Retina display with P3 wide color gamut and 500 nits of brightness","Apple M1 chip delivers powerful performance with 8-core CPU and 8-core GPU","Strikingly thin 11.5 mm design in vibrant colors","1080p FaceTime HD camera with M1 ISP for amazing video quality","Studio-quality three-mic array for crystal clear calls and voice recordings","Six-speaker sound system for a remarkably robust and high-quality audio experience"],
  },
  {
    _id: 1122,
    title: `HP All-in-One 24" PC`,
    company: "HP",
    rating: 5,
    inStock: true,
    price: 51000,
    discountPercent: 10,
    unitsLeft: 34,
    categoryName: "Desktop",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647880872/nothing-store-project/hp-desktop_fzjxns.webp",
    description:["Processor: AMD Ryzen 3 3250U (2.6 GHz base clock, up to 3.5 GHz max boost clock, 4 MB L3 cache, 2 cores)","Memory: 8 GB DDR4-2400 SDRAM (1 x 8 GB); Storage: 256 GB SSD storage; 1TB HDD storage","Display: 23.8 diagonal FHD (1920 x 1080), IPS, three-sided micro-edge, anti-glare, 250 nits, 72% NTSC","Operating System: Microsoft Windows 10 - Home edition; Microsoft Office 2019 - Home and Student Edition","Voice Assistant: Alexa Built-in and Minimum Dimensions (W x D x H): 54.08 x 20.45 x 40.93 cm; Weight: 5.85 kg","Graphics: AMD Radeon Graphics | Audio: Dual 2 W speakers","Keyboard & Mouse: USB black wired keyboard and mouse","Ports: 2 SuperSpeed USB Type-A 5Gbps signaling rate; 2 USB 2.0 Type-A; 1 headphone/microphone combo"],
  },
  {
    _id: 1123,
    title: `Oculus Touch VR Console`,
    company: "Meta",
    rating: 4,
    inStock: true,
    price: 250000,
    discountPercent: 10,
    unitsLeft: 9,
    categoryName: "Gaming",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647877379/nothing-store-project/oculus-touch_idtp0w.jpg",
    description:["Get 6 free titles, including: Robo Recall, LuckyÊŒs Tale, Quill, Medium, Dead and Buried, and Toybox","Rift's ultra low-latency tracking offers unparalleled immersion","The Oculus Touch controllers bring your hands into VR, letting you interact naturally with the virtual world","NVIDIA GTX 1050Ti/AMD Radeon RX 470 or greater Graphics Card Required and a RAM of 8 GB+ RAM","Windows 8.1 or Windows 7 SP1 64 bit or newer Operating System required, Windows PC and internet connection required - review recommended specs to confirm system compatibility"]
  },
];
