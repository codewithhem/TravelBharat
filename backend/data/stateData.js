const statesData = [
  {
    id: 1,
    name: "Andhra Pradesh",
    category: "Heritage",
    image: "/image/states/andhra-pradesh.jpg",
    description: "Andhra Pradesh is famous for temples, beaches, Buddhist sites, cuisine and rich cultural heritage.",
    bestTime: "October - March",
    culture: "Known for Kuchipudi dance, temple traditions, festivals and Telugu culture.",
    food: [
      { name: "Pulihora", image: "", description: "Tangy tamarind rice popular in Andhra Pradesh." },
      { name: "Andhra Chicken Curry", image: "", description: "Spicy chicken curry known for bold flavors." },
      { name: "Gongura Pachadi", image: "", description: "A chutney made from sorrel leaves." }
    ],
    places: [
      { name: "Visakhapatnam", image: "", description: "Coastal city famous for beaches and scenic hills." },
      { name: "Tirupati", image: "", description: "Famous pilgrimage city known for Tirumala Temple." },
      { name: "Araku Valley", image: "", description: "Hill station known for coffee plantations and valleys." }
    ]
  },

  {
    id: 2,
    name: "Arunachal Pradesh",
    category: "Nature",
    image: "/image/states/arunachal-pradesh.jpg",
    description: "Arunachal Pradesh is known for mountains, monasteries, forests and untouched natural beauty.",
    bestTime: "October - April",
    culture: "Home to diverse tribal cultures, festivals, traditional crafts and Buddhist heritage.",
    food: [
      { name: "Thukpa", image: "", description: "A warm noodle soup popular in the region." },
      { name: "Momos", image: "", description: "Steamed dumplings served with spicy chutney." },
      { name: "Apong", image: "", description: "Traditional rice-based local beverage." }
    ],
    places: [
      { name: "Tawang", image: "", description: "Famous for Tawang Monastery and mountain views." },
      { name: "Ziro Valley", image: "", description: "Known for green landscapes and Apatani culture." },
      { name: "Bomdila", image: "", description: "A scenic town with monasteries and Himalayan views." }
    ]
  },

  {
    id: 3,
    name: "Assam",
    category: "Nature",
    image: "/image/states/assam.jpg",
    description: "Assam is famous for tea gardens, wildlife, rivers, temples and rich cultural traditions.",
    bestTime: "October - April",
    culture: "Known for Bihu festival, Assamese silk, folk music and traditional dance.",
    food: [
      { name: "Assam Laksa", image: "", description: "A tangy fish-based dish with regional flavors." },
      { name: "Khar", image: "", description: "Traditional Assamese dish made with alkaline ingredient." },
      { name: "Pitha", image: "", description: "Rice-based sweet prepared during festivals." }
    ],
    places: [
      { name: "Kaziranga National Park", image: "", description: "Famous for one-horned rhinoceros." },
      { name: "Guwahati", image: "", description: "Major city known for Kamakhya Temple." },
      { name: "Majuli", image: "", description: "Large river island known for culture and monasteries." }
    ]
  },

  {
    id: 4,
    name: "Bihar",
    category: "Heritage",
    image: "/image/states/bihar.jpg",
    description: "Bihar is known for ancient universities, Buddhist sites, historical monuments and spiritual importance.",
    bestTime: "October - March",
    culture: "Rich in Buddhist, Jain and ancient Indian heritage with traditional festivals.",
    food: [
      { name: "Litti Chokha", image: "", description: "Famous traditional dish made with roasted wheat balls." },
      { name: "Thekua", image: "", description: "Sweet snack prepared during Chhath Puja." },
      { name: "Khaja", image: "", description: "Layered sweet popular in Bihar." }
    ],
    places: [
      { name: "Bodh Gaya", image: "", description: "Sacred Buddhist site where Buddha attained enlightenment." },
      { name: "Nalanda", image: "", description: "Ancient university ruins and heritage site." },
      { name: "Patna", image: "", description: "Capital city with historical and cultural attractions." }
    ]
  },
  {
    id: 5,
    name: "Chhattisgarh",
    category: "Nature",
    image: "/image/states/chhattisgarh.jpg",
    description: "Chhattisgarh is known for waterfalls, forests, tribal culture, temples and natural beauty.",
    bestTime: "October - March",
    culture: "Famous for tribal traditions, folk dance, handicrafts and festivals.",
    food: [
      { name: "Chila", image: "", description: "Rice flour pancake popular in Chhattisgarh." },
      { name: "Faraa", image: "", description: "Steamed rice dumplings eaten as a snack." },
      { name: "Muthiya", image: "", description: "Traditional steamed snack made from rice batter." }
    ],
    places: [
      { name: "Chitrakote Falls", image: "", description: "Large waterfall also called the Niagara of India." },
      { name: "Raipur", image: "", description: "Capital city and cultural hub." },
      { name: "Barnawapara Wildlife Sanctuary", image: "", description: "Known for wildlife and forests." }
    ]
  },

  {
    id: 6,
    name: "Goa",
    category: "Beach",
    image: "/image/states/goa.jpg",
    description: "Goa is famous for beaches, nightlife, churches, seafood, water sports and Portuguese heritage.",
    bestTime: "November - February",
    culture: "A mix of Indian and Portuguese culture with music, festivals and beach lifestyle.",
    food: [
      { name: "Goan Fish Curry", image: "", description: "Popular coastal curry made with fish and coconut." },
      { name: "Bebinca", image: "", description: "Traditional layered Goan dessert." },
      { name: "Prawn Balchao", image: "", description: "Spicy and tangy prawn dish." }
    ],
    places: [
      { name: "Baga Beach", image: "", description: "Famous for nightlife and water sports." },
      { name: "Calangute Beach", image: "", description: "One of Goa's most popular beaches." },
      { name: "Fort Aguada", image: "", description: "Historic Portuguese fort near the sea." }
    ]
  },

  {
    id: 7,
    name: "Gujarat",
    category: "Heritage",
    image: "/image/states/gujarat.jpg",
    description: "Gujarat is famous for temples, wildlife, white desert, heritage cities and colorful festivals.",
    bestTime: "November - February",
    culture: "Known for Garba, handicrafts, festivals, business culture and traditional lifestyle.",
    food: [
      { name: "Dhokla", image: "", description: "Steamed savory snack popular across Gujarat." },
      { name: "Thepla", image: "", description: "Spiced flatbread often eaten while travelling." },
      { name: "Fafda Jalebi", image: "", description: "Popular breakfast combination." }
    ],
    places: [
      { name: "Statue of Unity", image: "", description: "World's tallest statue dedicated to Sardar Patel." },
      { name: "Gir National Park", image: "", description: "Home of Asiatic lions." },
      { name: "Rann of Kutch", image: "", description: "White salt desert famous for Rann Utsav." }
    ]
  },

  {
    id: 8,
    name: "Haryana",
    category: "Heritage",
    image: "/image/states/haryana.jpg",
    description: "Haryana is known for historical sites, agriculture, sports culture and religious destinations.",
    bestTime: "October - March",
    culture: "Known for folk music, traditional dance, rural culture and festivals.",
    food: [
      { name: "Bajra Khichdi", image: "", description: "Nutritious traditional millet dish." },
      { name: "Kachri Ki Sabzi", image: "", description: "Traditional spicy vegetable dish." },
      { name: "Besan Masala Roti", image: "", description: "Spiced gram flour flatbread." }
    ],
    places: [
      { name: "Kurukshetra", image: "", description: "Religious and historical city linked with Mahabharata." },
      { name: "Sultanpur National Park", image: "", description: "Bird sanctuary popular among nature lovers." },
      { name: "Pinjore Gardens", image: "", description: "Historic Mughal-style garden." }
    ]
  },

  {
    id: 9,
    name: "Himachal Pradesh",
    category: "Adventure",
    image: "/image/states/himachal-pradesh.jpg",
    description: "Himachal Pradesh is famous for mountains, valleys, temples, hill stations and adventure tourism.",
    bestTime: "March - June and October - February",
    culture: "Known for mountain lifestyle, local festivals, handicrafts and temple traditions.",
    food: [
      { name: "Siddu", image: "", description: "Traditional steamed bread from Himachal." },
      { name: "Dham", image: "", description: "Festive traditional meal." },
      { name: "Madra", image: "", description: "Yogurt-based curry with chickpeas." }
    ],
    places: [
      { name: "Shimla", image: "", description: "Popular hill station known for Mall Road." },
      { name: "Manali", image: "", description: "Famous for snow, adventure sports and valleys." },
      { name: "Dharamshala", image: "", description: "Known for Tibetan culture and monasteries." }
    ]
  },

  {
    id: 10,
    name: "Jharkhand",
    category: "Nature",
    image: "/image/states/jharkhand.jpg",
    description: "Jharkhand is known for forests, waterfalls, tribal culture, temples and mineral-rich landscapes.",
    bestTime: "October - March",
    culture: "Famous for tribal festivals, folk dance, handicrafts and traditional lifestyle.",
    food: [
      { name: "Dhuska", image: "", description: "Deep-fried rice and lentil snack." },
      { name: "Thekua", image: "", description: "Sweet snack popular during festivals." },
      { name: "Rugra", image: "", description: "Traditional mushroom-like seasonal food." }
    ],
    places: [
      { name: "Ranchi", image: "", description: "Capital city known for waterfalls." },
      { name: "Deoghar", image: "", description: "Important religious destination." },
      { name: "Betla National Park", image: "", description: "Wildlife park with forests and animals." }
    ]
  },

  {
    id: 11,
    name: "Karnataka",
    category: "Nature",
    image: "/image/states/karnataka.jpg",
    description: "Karnataka is famous for heritage sites, beaches, wildlife, technology hubs and hill stations.",
    bestTime: "October - March",
    culture: "Known for classical music, temples, Mysore Dasara, Kannada culture and architecture.",
    food: [
      { name: "Bisi Bele Bath", image: "", description: "Rice dish cooked with lentils and spices." },
      { name: "Mysore Pak", image: "", description: "Famous sweet from Mysuru." },
      { name: "Ragi Mudde", image: "", description: "Traditional millet ball eaten with curry." }
    ],
    places: [
      { name: "Bengaluru", image: "", description: "India's technology hub and garden city." },
      { name: "Mysore Palace", image: "", description: "Grand royal palace famous for architecture." },
      { name: "Coorg", image: "", description: "Hill station known for coffee plantations." }
    ]
  },

  {
    id: 12,
    name: "Kerala",
    category: "Nature",
    image: "/image/states/kerala.jpg",
    description: "Kerala is known as God's Own Country, famous for backwaters, Ayurveda, greenery and beaches.",
    bestTime: "September - March",
    culture: "Known for Kathakali, temple festivals, Ayurveda and traditional lifestyle.",
    food: [
      { name: "Appam", image: "", description: "Soft rice pancake served with stew." },
      { name: "Puttu", image: "", description: "Steamed rice cake eaten with curry." },
      { name: "Kerala Sadya", image: "", description: "Traditional vegetarian feast on banana leaf." }
    ],
    places: [
      { name: "Munnar", image: "", description: "Hill station famous for tea gardens." },
      { name: "Alleppey", image: "", description: "Known for houseboats and backwaters." },
      { name: "Kochi", image: "", description: "Historic port city with colonial heritage." }
    ]
  },

  {
    id: 13,
    name: "Madhya Pradesh",
    category: "Heritage",
    image: "/image/states/madhya-pradesh.jpg",
    description: "Madhya Pradesh is known for wildlife, ancient temples, forts and cultural heritage.",
    bestTime: "October - March",
    culture: "Rich in tribal culture, architecture, folk traditions and historic monuments.",
    food: [
      { name: "Poha", image: "", description: "Popular breakfast made with flattened rice." },
      { name: "Bhutte Ka Kees", image: "", description: "Traditional corn-based dish." },
      { name: "Malpua", image: "", description: "Sweet dish enjoyed during festivals." }
    ],
    places: [
      { name: "Khajuraho", image: "", description: "UNESCO site famous for ancient temples." },
      { name: "Sanchi", image: "", description: "Important Buddhist heritage site." },
      { name: "Kanha National Park", image: "", description: "Popular tiger reserve." }
    ]
  },

  {
    id: 14,
    name: "Maharashtra",
    category: "Heritage",
    image: "/image/states/maharashtra.jpg",
    description: "Maharashtra is famous for Mumbai, forts, caves, beaches, hill stations and cultural diversity.",
    bestTime: "October - March",
    culture: "Known for Marathi culture, Ganesh festival, cinema, forts and folk traditions.",
    food: [
      { name: "Vada Pav", image: "", description: "Popular street food from Mumbai." },
      { name: "Misal Pav", image: "", description: "Spicy curry served with bread." },
      { name: "Puran Poli", image: "", description: "Sweet flatbread made during festivals." }
    ],
    places: [
      { name: "Mumbai", image: "", description: "Financial capital known for Gateway of India and Marine Drive." },
      { name: "Ajanta Ellora Caves", image: "", description: "Ancient rock-cut caves and UNESCO sites." },
      { name: "Lonavala", image: "", description: "Hill station famous for greenery and waterfalls." }
    ]
  },

  {
    id: 15,
    name: "Manipur",
    category: "Nature",
    image: "/image/states/manipur.jpg",
    description: "Manipur is known for natural beauty, lakes, dance, sports culture and rich traditions.",
    bestTime: "October - April",
    culture: "Famous for Manipuri dance, local festivals, handloom and traditional lifestyle.",
    food: [
      { name: "Eromba", image: "", description: "Traditional dish made with vegetables and fermented fish." },
      { name: "Chamthong", image: "", description: "Vegetable stew popular in Manipur." },
      { name: "Singju", image: "", description: "Traditional salad made with vegetables and herbs." }
    ],
    places: [
      { name: "Loktak Lake", image: "", description: "Largest freshwater lake in Northeast India." },
      { name: "Imphal", image: "", description: "Capital city with historical and cultural sites." },
      { name: "Keibul Lamjao National Park", image: "", description: "Floating national park famous for Sangai deer." }
    ]
  },

  {
    id: 16,
    name: "Meghalaya",
    category: "Nature",
    image: "/image/states/meghalaya.jpg",
    description: "Meghalaya is famous for waterfalls, caves, living root bridges and green landscapes.",
    bestTime: "October - April",
    culture: "Known for Khasi, Garo and Jaintia traditions, music and festivals.",
    food: [
      { name: "Jadoh", image: "", description: "Rice and meat dish popular in Meghalaya." },
      { name: "Dohneiiong", image: "", description: "Pork dish prepared with black sesame." },
      { name: "Pumaloi", image: "", description: "Steamed powdered rice dish." }
    ],
    places: [
      { name: "Shillong", image: "", description: "Hill city known as Scotland of the East." },
      { name: "Cherrapunji", image: "", description: "Famous for rainfall, caves and waterfalls." },
      { name: "Mawlynnong", image: "", description: "Known as one of Asia's cleanest villages." }
    ]
  },

  {
    id: 17,
    name: "Mizoram",
    category: "Nature",
    image: "/image/states/mizoram.jpg",
    description: "Mizoram is known for hills, forests, peaceful towns and vibrant tribal culture.",
    bestTime: "October - March",
    culture: "Famous for Mizo traditions, dance, music, festivals and community lifestyle.",
    food: [
      { name: "Bai", image: "", description: "Traditional vegetable stew." },
      { name: "Sawhchiar", image: "", description: "Rice and meat dish." },
      { name: "Vawksa Rep", image: "", description: "Smoked pork dish popular in Mizoram." }
    ],
    places: [
      { name: "Aizawl", image: "", description: "Capital city with scenic hills." },
      { name: "Champhai", image: "", description: "Known for vineyards and mountain views." },
      { name: "Phawngpui", image: "", description: "Highest peak of Mizoram." }
    ]
  },

  {
    id: 18,
    name: "Nagaland",
    category: "Culture",
    image: "/image/states/nagaland.jpg",
    description: "Nagaland is famous for tribal culture, festivals, hills and traditional lifestyle.",
    bestTime: "October - May",
    culture: "Known for Hornbill Festival, Naga tribes, music, dance and crafts.",
    food: [
      { name: "Smoked Pork", image: "", description: "Popular Naga dish with smoky flavor." },
      { name: "Axone", image: "", description: "Fermented soybean used in Naga cuisine." },
      { name: "Bamboo Shoot Curry", image: "", description: "Traditional curry made with bamboo shoots." }
    ],
    places: [
      { name: "Kohima", image: "", description: "Capital city with history and culture." },
      { name: "Dzukou Valley", image: "", description: "Beautiful valley known for trekking." },
      { name: "Mokokchung", image: "", description: "Cultural town of the Ao Naga people." }
    ]
  },

  {
    id: 19,
    name: "Odisha",
    category: "Heritage",
    image: "/image/states/odisha.jpg",
    description: "Odisha is famous for temples, beaches, classical dance, tribal culture and historical sites.",
    bestTime: "October - March",
    culture: "Known for Odissi dance, temple architecture, Rath Yatra and handicrafts.",
    food: [
      { name: "Dalma", image: "", description: "Lentil and vegetable dish." },
      { name: "Pakhala Bhata", image: "", description: "Fermented rice dish eaten in summer." },
      { name: "Chhena Poda", image: "", description: "Famous baked sweet from Odisha." }
    ],
    places: [
      { name: "Puri", image: "", description: "Famous for Jagannath Temple and beach." },
      { name: "Konark", image: "", description: "Known for Sun Temple." },
      { name: "Bhubaneswar", image: "", description: "Temple city of India." }
    ]
  },

  {
    id: 20,
    name: "Punjab",
    category: "Heritage",
    image: "/image/states/punjab.jpg",
    description: "Punjab is known for vibrant culture, Sikh heritage, agriculture, food and festivals.",
    bestTime: "October - March",
    culture: "Known for Bhangra, Giddha, Sikh traditions, music and hospitality.",
    food: [
      { name: "Makki Di Roti", image: "", description: "Corn flatbread usually eaten with sarson da saag." },
      { name: "Sarson Da Saag", image: "", description: "Mustard greens curry popular in Punjab." },
      { name: "Lassi", image: "", description: "Traditional yogurt-based drink." }
    ],
    places: [
      { name: "Golden Temple", image: "", description: "Most sacred Sikh shrine in Amritsar." },
      { name: "Wagah Border", image: "", description: "Famous for border ceremony." },
      { name: "Amritsar", image: "", description: "Historic city known for spirituality and food." }
    ]
  },

  {
    id: 21,
    name: "Rajasthan",
    category: "Heritage",
    image: "/image/states/rajasthan.jpg",
    description: "Rajasthan is known as the Land of Kings, famous for forts, palaces, deserts and royal culture.",
    bestTime: "October - March",
    culture: "Known for folk dance, music, handicrafts, traditional dress and desert festivals.",
    food: [
      { name: "Dal Baati Churma", image: "", description: "Traditional dish made with dal, baati and churma." },
      { name: "Ghewar", image: "", description: "Festival sweet from Rajasthan." },
      { name: "Laal Maas", image: "", description: "Spicy meat curry popular in Rajasthan." }
    ],
    places: [
      { name: "Jaipur", image: "", description: "Pink City famous for Hawa Mahal and Amber Fort." },
      { name: "Udaipur", image: "", description: "City of Lakes known for palaces and lakes." },
      { name: "Jaisalmer", image: "", description: "Golden City famous for desert safari." }
    ]
  },

  {
    id: 22,
    name: "Sikkim",
    category: "Nature",
    image: "/image/states/sikkim.jpg",
    description: "Sikkim is famous for mountains, monasteries, lakes and peaceful natural beauty.",
    bestTime: "March - June and October - December",
    culture: "Known for Buddhist culture, monasteries, local festivals and Himalayan lifestyle.",
    food: [
      { name: "Momos", image: "", description: "Steamed dumplings with chutney." },
      { name: "Thukpa", image: "", description: "Noodle soup popular in Sikkim." },
      { name: "Gundruk", image: "", description: "Fermented leafy green dish." }
    ],
    places: [
      { name: "Gangtok", image: "", description: "Capital city with mountain views." },
      { name: "Tsomgo Lake", image: "", description: "High-altitude glacial lake." },
      { name: "Pelling", image: "", description: "Famous for views of Kanchenjunga." }
    ]
  },

  {
    id: 23,
    name: "Tamil Nadu",
    category: "Heritage",
    image: "/image/states/tamil-nadu.jpg",
    description: "Tamil Nadu is famous for temples, classical culture, beaches, hill stations and traditions.",
    bestTime: "November - February",
    culture: "Known for Bharatanatyam, Carnatic music, temple festivals and Tamil heritage.",
    food: [
      { name: "Dosa", image: "", description: "Crispy rice crepe served with chutney and sambar." },
      { name: "Idli", image: "", description: "Steamed rice cake popular in South India." },
      { name: "Pongal", image: "", description: "Rice dish prepared during festivals." }
    ],
    places: [
      { name: "Chennai", image: "", description: "Capital city known for Marina Beach and culture." },
      { name: "Madurai", image: "", description: "Famous for Meenakshi Temple." },
      { name: "Ooty", image: "", description: "Popular hill station in the Nilgiris." }
    ]
  },
  {
    id: 24,
    name: "Telangana",
    category: "Heritage",
    image: "/image/states/telangana.jpg",
    description: "Telangana is known for historic monuments, temples, technology hubs and rich cuisine.",
    bestTime: "October - March",
    culture: "Known for Deccan heritage, festivals, Telugu culture and handicrafts.",
    food: [
      { name: "Hyderabadi Biryani", image: "", description: "Famous rice dish with spices and meat." },
      { name: "Haleem", image: "", description: "Rich meat and wheat dish popular during Ramadan." },
      { name: "Sarva Pindi", image: "", description: "Traditional savory pancake." }
    ],
    places: [
      { name: "Hyderabad", image: "", description: "Famous for Charminar, biryani and IT hubs." },
      { name: "Warangal", image: "", description: "Known for forts and temples." },
      { name: "Ramoji Film City", image: "", description: "Large film studio and tourist attraction." }
    ]
  },
  {
    id: 25,
    name: "Tripura",
    category: "Heritage",
    image: "/image/states/tripura.jpg",
    description: "Tripura is known for palaces, temples, lakes, bamboo crafts and tribal culture.",
    bestTime: "October - March",
    culture: "Rich in tribal traditions, music, dance, bamboo crafts and festivals.",
    food: [
      { name: "Mui Borok", image: "", description: "Traditional Tripuri cuisine." },
      { name: "Wahan Mosdeng", image: "", description: "Pork-based spicy dish." },
      { name: "Gudok", image: "", description: "Traditional fermented fish dish." }
    ],
    places: [
      { name: "Agartala", image: "", description: "Capital city known for Ujjayanta Palace." },
      { name: "Neermahal", image: "", description: "Beautiful water palace." },
      { name: "Unakoti", image: "", description: "Ancient rock carvings and pilgrimage site." }
    ]
  },
  {
    id: 26,
    name: "Uttar Pradesh",
    category: "Heritage",
    image: "/image/states/uttar-pradesh.jpg",
    description: "Uttar Pradesh is famous for the Taj Mahal, Varanasi, Ayodhya, Mughal architecture and spirituality.",
    bestTime: "October - March",
    culture: "Known for classical music, spirituality, festivals, Mughal heritage and food culture.",
    food: [
      { name: "Petha", image: "", description: "Famous sweet from Agra." },
      { name: "Tunday Kababi", image: "", description: "Popular kebab dish from Lucknow." },
      { name: "Kachori", image: "", description: "Spicy snack popular across Uttar Pradesh." }
    ],
    places: [
      { name: "Agra", image: "", description: "Home to the Taj Mahal." },
      { name: "Varanasi", image: "", description: "Ancient spiritual city famous for ghats." },
      { name: "Lucknow", image: "", description: "City of Nawabs known for culture and food." }
    ]
  },

  {
    id: 27,
    name: "Uttarakhand",
    category: "Adventure",
    image: "/image/states/uttarakhand.jpeg",
    description: "Uttarakhand is famous for Himalayas, rivers, pilgrimage sites, yoga and adventure tourism.",
    bestTime: "March - June",
    culture: "Known for spiritual traditions, mountain culture and religious tourism.",
    food: [
      { name: "Kafuli", image: "", description: "Traditional green leafy vegetable dish." },
      { name: "Aloo Ke Gutke", image: "", description: "Spicy potato dish." },
      { name: "Bal Mithai", image: "", description: "Famous sweet from Kumaon." }
    ],
    places: [
      { name: "Nainital", image: "", description: "Hill station famous for lake views." },
      { name: "Rishikesh", image: "", description: "Yoga capital and rafting destination." },
      { name: "Mussoorie", image: "", description: "Queen of Hills." }
    ]
  },

  {
    id: 28,
    name: "West Bengal",
    category: "Heritage",
    image: "/image/states/west-bengal.jpg",
    description: "West Bengal is famous for literature, art, festivals, tea gardens, colonial heritage and culture.",
    bestTime: "October - March",
    culture: "Known for Durga Puja, literature, music, art, cinema and Bengali traditions.",
    food: [
      { name: "Rasgulla", image: "", description: "Famous Bengali sweet made from chhena." },
      { name: "Macher Jhol", image: "", description: "Traditional Bengali fish curry." },
      { name: "Sandesh", image: "", description: "Popular Bengali sweet." }
    ],
    places: [
      { name: "Kolkata", image: "", description: "Cultural capital of India." },
      { name: "Darjeeling", image: "", description: "Famous for tea gardens and Himalayan views." },
      { name: "Sundarbans", image: "", description: "Mangrove forest and home of Royal Bengal Tigers." }
    ]
  }
];
module.exports = statesData;