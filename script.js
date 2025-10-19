// Default Categories
const defaultCategories = [
  { id: 0, name: "Favorites", icon: "fas fa-heart", color: "#ef4444" },
  { id: 1, name: "All", icon: "fas fa-th", color: "#6366f1" },
  { id: 2, name: "Social Media", icon: "fas fa-share-alt", color: "#3b82f6" },
  { id: 3, name: "Utilities", icon: "fas fa-tools", color: "#10b981" },
  { id: 4, name: "Entertainment", icon: "fas fa-film", color: "#f59e0b" },
  { id: 5, name: "Games", icon: "fas fa-gamepad", color: "#8b5cf6" },
  { id: 6, name: "Travel", icon: "fas fa-plane", color: "#06b6d4" },
  { id: 7, name: "Food", icon: "fas fa-utensils", color: "#84cc16" },
  { id: 8, name: "Finance", icon: "fas fa-dollar-sign", color: "#22c55e" },
  { id: 9, name: "Photo and Video", icon: "fas fa-camera", color: "#ec4899" },
  { id: 10, name: "Shopping", icon: "fas fa-shopping-bag", color: "#f97316" },
  { id: 11, name: "Productivity", icon: "fas fa-briefcase", color: "#0ea5e9" },
  { id: 12, name: "AI Tools", icon: "fas fa-robot", color: "#7e22ce" },
  { id: 13, name: "Health & Fitness", icon: "fas fa-heartbeat", color: "#dc2626" },
  { id: 14, name: "Education", icon: "fas fa-graduation-cap", color: "#059669" },
  { id: 15, name: "News & Magazines", icon: "fas fa-newspaper", color: "#7c3aed" },
  { id: 16, name: "Music & Audio", icon: "fas fa-music", color: "#db2777" },
  { id: 17, name: "Weather", icon: "fas fa-cloud-sun", color: "#0ea5e9" },
  { id: 18, name: "Trading & Investment", icon: "fas fa-chart-line", color: "#2563eb" },
  { id: 19, name: "Business & MNCs", icon: "fas fa-building", color: "#334155" }
];

const appsData = [
  // 🌐 Social Media (15 apps)
  { id: 1, name: "Instagram", category: "Social Media", imageUrl: "", appWebsite: "https://instagram.com", description: "Photo and video sharing", favorite: false, lastUsed: null, icon: "fab fa-instagram" },
  { id: 2, name: "Facebook", category: "Social Media", imageUrl: "", appWebsite: "https://facebook.com", description: "Connect with friends and family", favorite: false, lastUsed: null, icon: "fab fa-facebook" },
  { id: 3, name: "Twitter (X)", category: "Social Media", imageUrl: "", appWebsite: "https://x.com", description: "Share thoughts and updates", favorite: false, lastUsed: null, icon: "fab fa-twitter" },
  { id: 4, name: "Snapchat", category: "Social Media", imageUrl: "", appWebsite: "https://snapchat.com", description: "Share moments instantly", favorite: false, lastUsed: null, icon: "fab fa-snapchat" },
  { id: 5, name: "TikTok", category: "Social Media", imageUrl: "", appWebsite: "https://tiktok.com", description: "Short video creation platform", favorite: false, lastUsed: null, icon: "fab fa-tiktok" },
  { id: 6, name: "LinkedIn", category: "Social Media", imageUrl: "", appWebsite: "https://linkedin.com", description: "Professional networking platform", favorite: false, lastUsed: null, icon: "fab fa-linkedin" },
  { id: 7, name: "Pinterest", category: "Social Media", imageUrl: "", appWebsite: "https://pinterest.com", description: "Visual inspiration sharing", favorite: false, lastUsed: null, icon: "fab fa-pinterest" },
  { id: 8, name: "Threads", category: "Social Media", imageUrl: "", appWebsite: "https://threads.net", description: "Text-based sharing app", favorite: false, lastUsed: null, icon: "fas fa-comment" },
  { id: 9, name: "Reddit", category: "Social Media", imageUrl: "", appWebsite: "https://reddit.com", description: "Community discussions and news", favorite: false, lastUsed: null, icon: "fab fa-reddit" },
  { id: 10, name: "Discord", category: "Social Media", imageUrl: "", appWebsite: "https://discord.com", description: "Chat and voice community app", favorite: false, lastUsed: null, icon: "fab fa-discord" },
  { id: 111, name: "Telegram", category: "Social Media", imageUrl: "", appWebsite: "https://telegram.org", description: "Secure messaging app", favorite: false, lastUsed: null, icon: "fab fa-telegram" },
  { id: 112, name: "WhatsApp", category: "Social Media", imageUrl: "", appWebsite: "https://whatsapp.com", description: "Instant messaging platform", favorite: false, lastUsed: null, icon: "fab fa-whatsapp" },
  { id: 113, name: "Signal", category: "Social Media", imageUrl: "", appWebsite: "https://signal.org", description: "Private messaging app", favorite: false, lastUsed: null, icon: "fas fa-shield-alt" },
  { id: 114, name: "Clubhouse", category: "Social Media", imageUrl: "", appWebsite: "https://clubhouse.com", description: "Social audio platform", favorite: false, lastUsed: null, icon: "fas fa-users" },
  { id: 115, name: "Twitch", category: "Social Media", imageUrl: "", appWebsite: "https://twitch.tv", description: "Live streaming platform", favorite: false, lastUsed: null, icon: "fab fa-twitch" },

  // 🛠 Utilities (15 apps)
  { id: 11, name: "Gmail", category: "Utilities", imageUrl: "", appWebsite: "https://gmail.com", description: "Email service by Google", favorite: false, lastUsed: null, icon: "fas fa-envelope" },
  { id: 12, name: "Google Drive", category: "Utilities", imageUrl: "", appWebsite: "https://drive.google.com", description: "Cloud storage solution", favorite: false, lastUsed: null, icon: "fas fa-hdd" },
  { id: 13, name: "Dropbox", category: "Utilities", imageUrl: "", appWebsite: "https://dropbox.com", description: "File storage and sharing", favorite: false, lastUsed: null, icon: "fab fa-dropbox" },
  { id: 14, name: "Google Maps", category: "Utilities", imageUrl: "", appWebsite: "https://maps.google.com", description: "Navigation and location", favorite: false, lastUsed: null, icon: "fas fa-map" },
  { id: 15, name: "Speedtest", category: "Utilities", imageUrl: "", appWebsite: "https://speedtest.net", description: "Internet speed checker", favorite: false, lastUsed: null, icon: "fas fa-tachometer-alt" },
  { id: 16, name: "Calculator", category: "Utilities", imageUrl: "", appWebsite: "#", description: "Basic arithmetic calculator", favorite: false, lastUsed: null, icon: "fas fa-calculator" },
  { id: 17, name: "Clockify", category: "Utilities", imageUrl: "", appWebsite: "https://clockify.me", description: "Time tracking tool", favorite: false, lastUsed: null, icon: "fas fa-clock" },
  { id: 18, name: "Adobe Acrobat", category: "Utilities", imageUrl: "", appWebsite: "https://adobe.com", description: "PDF management tool", favorite: false, lastUsed: null, icon: "fas fa-file-pdf" },
  { id: 19, name: "Notion", category: "Utilities", imageUrl: "", appWebsite: "https://notion.so", description: "Notes and productivity tool", favorite: false, lastUsed: null, icon: "fas fa-sticky-note" },
  { id: 20, name: "Todoist", category: "Utilities", imageUrl: "", appWebsite: "https://todoist.com", description: "Task management app", favorite: false, lastUsed: null, icon: "fas fa-tasks" },
  { id: 116, name: "Google Translate", category: "Utilities", imageUrl: "", appWebsite: "https://translate.google.com", description: "Language translation tool", favorite: false, lastUsed: null, icon: "fas fa-language" },
  { id: 117, name: "Google Calendar", category: "Utilities", imageUrl: "", appWebsite: "https://calendar.google.com", description: "Schedule management", favorite: false, lastUsed: null, icon: "fas fa-calendar" },
  { id: 118, name: "OneDrive", category: "Utilities", imageUrl: "", appWebsite: "https://onedrive.live.com", description: "Microsoft cloud storage", favorite: false, lastUsed: null, icon: "fas fa-cloud" },
  { id: 119, name: "iCloud", category: "Utilities", imageUrl: "", appWebsite: "https://icloud.com", description: "Apple cloud services", favorite: false, lastUsed: null, icon: "fas fa-cloud" },
  { id: 120, name: "Evernote", category: "Utilities", imageUrl: "", appWebsite: "https://evernote.com", description: "Note taking application", favorite: false, lastUsed: null, icon: "fas fa-sticky-note" },

  // 🎬 Entertainment (15 apps)
  { id: 21, name: "YouTube", category: "Entertainment", imageUrl: "", appWebsite: "https://youtube.com", description: "Video sharing platform", favorite: false, lastUsed: null, icon: "fab fa-youtube" },
  { id: 22, name: "Netflix", category: "Entertainment", imageUrl: "", appWebsite: "https://netflix.com", description: "Movies and shows streaming", favorite: false, lastUsed: null, icon: "fas fa-film" },
  { id: 23, name: "Disney+", category: "Entertainment", imageUrl: "", appWebsite: "https://disneyplus.com", description: "Disney content platform", favorite: false, lastUsed: null, icon: "fab fa-disney" },
  { id: 24, name: "Prime Video", category: "Entertainment", imageUrl: "", appWebsite: "https://primevideo.com", description: "Amazon's streaming platform", favorite: false, lastUsed: null, icon: "fab fa-amazon" },
  { id: 25, name: "Hotstar", category: "Entertainment", imageUrl: "", appWebsite: "https://hotstar.com", description: "Indian streaming app", favorite: false, lastUsed: null, icon: "fas fa-tv" },
  { id: 26, name: "MX Player", category: "Entertainment", imageUrl: "", appWebsite: "https://mxplayer.in", description: "Free video player and OTT", favorite: false, lastUsed: null, icon: "fas fa-play-circle" },
  { id: 27, name: "Zee5", category: "Entertainment", imageUrl: "", appWebsite: "https://zee5.com", description: "Regional OTT platform", favorite: false, lastUsed: null, icon: "fas fa-video" },
  { id: 28, name: "SonyLIV", category: "Entertainment", imageUrl: "", appWebsite: "https://sonyliv.com", description: "TV shows and sports streaming", favorite: false, lastUsed: null, icon: "fas fa-broadcast-tower" },
  { id: 29, name: "JioCinema", category: "Entertainment", imageUrl: "", appWebsite: "https://jiocinema.com", description: "Indian movie and sports app", favorite: false, lastUsed: null, icon: "fas fa-film" },
  { id: 30, name: "Spotify", category: "Entertainment", imageUrl: "", appWebsite: "https://spotify.com", description: "Music streaming platform", favorite: false, lastUsed: null, icon: "fab fa-spotify" },
  { id: 121, name: "Apple Music", category: "Entertainment", imageUrl: "", appWebsite: "https://music.apple.com", description: "Music streaming service", favorite: false, lastUsed: null, icon: "fas fa-music" },
  { id: 122, name: "Amazon Music", category: "Entertainment", imageUrl: "", appWebsite: "https://music.amazon.com", description: "Amazon music streaming", favorite: false, lastUsed: null, icon: "fab fa-amazon" },
  { id: 123, name: "SoundCloud", category: "Entertainment", imageUrl: "", appWebsite: "https://soundcloud.com", description: "Audio distribution platform", favorite: false, lastUsed: null, icon: "fab fa-soundcloud" },
  { id: 124, name: "Hulu", category: "Entertainment", imageUrl: "", appWebsite: "https://hulu.com", description: "Streaming service", favorite: false, lastUsed: null, icon: "fas fa-tv" },
  { id: 125, name: "Crunchyroll", category: "Entertainment", imageUrl: "", appWebsite: "https://crunchyroll.com", description: "Anime streaming platform", favorite: false, lastUsed: null, icon: "fas fa-play" },

  // 🎮 Games (15 apps)
  { id: 31, name: "PUBG Mobile", category: "Games", imageUrl: "", appWebsite: "https://pubg.com", description: "Battle royale shooter", favorite: false, lastUsed: null, icon: "fas fa-gamepad" },
  { id: 32, name: "Free Fire", category: "Games", imageUrl: "", appWebsite: "https://ff.garena.com", description: "Action battle game", favorite: false, lastUsed: null, icon: "fas fa-fire" },
  { id: 33, name: "Clash of Clans", category: "Games", imageUrl: "", appWebsite: "https://supercell.com/en/games/clashofclans/", description: "Strategy combat game", favorite: false, lastUsed: null, icon: "fas fa-chess-rook" },
  { id: 34, name: "Subway Surfers", category: "Games", imageUrl: "", appWebsite: "https://sybogames.com", description: "Endless runner game", favorite: false, lastUsed: null, icon: "fas fa-running" },
  { id: 35, name: "Ludo King", category: "Games", imageUrl: "", appWebsite: "https://ludoking.com", description: "Digital board game", favorite: false, lastUsed: null, icon: "fas fa-dice" },
  { id: 36, name: "Among Us", category: "Games", imageUrl: "", appWebsite: "https://innersloth.com", description: "Multiplayer party game", favorite: false, lastUsed: null, icon: "fas fa-user-astronaut" },
  { id: 37, name: "Candy Crush", category: "Games", imageUrl: "", appWebsite: "https://king.com/game/candycrush", description: "Match-3 puzzle game", favorite: false, lastUsed: null, icon: "fas fa-candy-cane" },
  { id: 38, name: "Call of Duty", category: "Games", imageUrl: "", appWebsite: "https://www.callofduty.com", description: "Action shooting game", favorite: false, lastUsed: null, icon: "fas fa-crosshairs" },
  { id: 39, name: "Temple Run", category: "Games", imageUrl: "", appWebsite: "https://imangistudios.com", description: "Adventure running game", favorite: false, lastUsed: null, icon: "fas fa-running" },
  { id: 40, name: "Chess.com", category: "Games", imageUrl: "", appWebsite: "https://chess.com", description: "Online chess play", favorite: false, lastUsed: null, icon: "fas fa-chess" },
  { id: 126, name: "Minecraft", category: "Games", imageUrl: "", appWebsite: "https://minecraft.net", description: "Sandbox building game", favorite: false, lastUsed: null, icon: "fas fa-cube" },
  { id: 127, name: "Roblox", category: "Games", imageUrl: "", appWebsite: "https://roblox.com", description: "Game creation platform", favorite: false, lastUsed: null, icon: "fas fa-gamepad" },
  { id: 128, name: "Fortnite", category: "Games", imageUrl: "", appWebsite: "https://fortnite.com", description: "Battle royale game", favorite: false, lastUsed: null, icon: "fas fa-crosshairs" },
  { id: 129, name: "Genshin Impact", category: "Games", imageUrl: "", appWebsite: "https://genshin.hoyoverse.com", description: "Action RPG game", favorite: false, lastUsed: null, icon: "fas fa-magic" },
  { id: 130, name: "8 Ball Pool", category: "Games", imageUrl: "", appWebsite: "https://miniclip.com/8-ball-pool", description: "Online pool game", favorite: false, lastUsed: null, icon: "fas fa-billiard-ball" },

  // ✈ Travel (15 apps)
  { id: 41, name: "Google Maps", category: "Travel", imageUrl: "", appWebsite: "https://maps.google.com", description: "Navigation and routes", favorite: false, lastUsed: null, icon: "fas fa-map" },
  { id: 42, name: "MakeMyTrip", category: "Travel", imageUrl: "", appWebsite: "https://makemytrip.com", description: "Book flights and hotels", favorite: false, lastUsed: null, icon: "fas fa-plane" },
  { id: 43, name: "Goibibo", category: "Travel", imageUrl: "", appWebsite: "https://goibibo.com", description: "Flight and hotel booking", favorite: false, lastUsed: null, icon: "fas fa-hotel" },
  { id: 44, name: "IRCTC", category: "Travel", imageUrl: "", appWebsite: "https://irctc.co.in", description: "Train booking in India", favorite: false, lastUsed: null, icon: "fas fa-train" },
  { id: 45, name: "Uber", category: "Travel", imageUrl: "", appWebsite: "https://uber.com", description: "Cab booking service", favorite: false, lastUsed: null, icon: "fas fa-car" },
  { id: 46, name: "Ola", category: "Travel", imageUrl: "", appWebsite: "https://ola.com", description: "Ride-hailing platform", favorite: false, lastUsed: null, icon: "fas fa-taxi" },
  { id: 47, name: "Airbnb", category: "Travel", imageUrl: "", appWebsite: "https://airbnb.com", description: "Rent homes and stays", favorite: false, lastUsed: null, icon: "fas fa-home" },
  { id: 48, name: "TripAdvisor", category: "Travel", imageUrl: "", appWebsite: "https://tripadvisor.com", description: "Travel reviews and guides", favorite: false, lastUsed: null, icon: "fas fa-star" },
  { id: 49, name: "Booking.com", category: "Travel", imageUrl: "", appWebsite: "https://booking.com", description: "Hotel and travel booking", favorite: false, lastUsed: null, icon: "fas fa-bed" },
  { id: 50, name: "Google Flights", category: "Travel", imageUrl: "", appWebsite: "https://google.com/flights", description: "Flight search engine", favorite: false, lastUsed: null, icon: "fas fa-plane-departure" },
  { id: 131, name: "Expedia", category: "Travel", imageUrl: "", appWebsite: "https://expedia.com", description: "Travel booking platform", favorite: false, lastUsed: null, icon: "fas fa-suitcase" },
  { id: 132, name: "Kayak", category: "Travel", imageUrl: "", appWebsite: "https://kayak.com", description: "Travel search engine", favorite: false, lastUsed: null, icon: "fas fa-search" },
  { id: 133, name: "Skyscanner", category: "Travel", imageUrl: "", appWebsite: "https://skyscanner.com", description: "Flight comparison tool", favorite: false, lastUsed: null, icon: "fas fa-chart-line" },
  { id: 134, name: "Agoda", category: "Travel", imageUrl: "", appWebsite: "https://agoda.com", description: "Hotel booking platform", favorite: false, lastUsed: null, icon: "fas fa-building" },
  { id: 135, name: "TripIt", category: "Travel", imageUrl: "", appWebsite: "https://tripit.com", description: "Travel itinerary organizer", favorite: false, lastUsed: null, icon: "fas fa-clipboard-list" },

  // 🍔 Food (15 apps)
  { id: 51, name: "Zomato", category: "Food", imageUrl: "", appWebsite: "https://zomato.com", description: "Order food online", favorite: false, lastUsed: null, icon: "fas fa-utensils" },
  { id: 52, name: "Swiggy", category: "Food", imageUrl: "", appWebsite: "https://swiggy.com", description: "Food delivery app", favorite: false, lastUsed: null, icon: "fas fa-motorcycle" },
  { id: 53, name: "Domino's", category: "Food", imageUrl: "", appWebsite: "https://dominos.co.in", description: "Pizza delivery service", favorite: false, lastUsed: null, icon: "fas fa-pizza-slice" },
  { id: 54, name: "McDonald's", category: "Food", imageUrl: "", appWebsite: "https://mcdelivery.co.in", description: "Fast food ordering", favorite: false, lastUsed: null, icon: "fas fa-hamburger" },
  { id: 55, name: "KFC", category: "Food", imageUrl: "", appWebsite: "https://online.kfc.co.in", description: "Order fried chicken", favorite: false, lastUsed: null, icon: "fas fa-drumstick-bite" },
  { id: 56, name: "Uber Eats", category: "Food", imageUrl: "", appWebsite: "https://ubereats.com", description: "Online food delivery", favorite: false, lastUsed: null, icon: "fas fa-car-side" },
  { id: 57, name: "Dunzo", category: "Food", imageUrl: "", appWebsite: "https://dunzo.com", description: "Quick grocery delivery", favorite: false, lastUsed: null, icon: "fas fa-shopping-bag" },
  { id: 58, name: "BigBasket", category: "Food", imageUrl: "", appWebsite: "https://bigbasket.com", description: "Online grocery store", favorite: false, lastUsed: null, icon: "fas fa-shopping-cart" },
  { id: 59, name: "Faasos", category: "Food", imageUrl: "", appWebsite: "https://faasos.com", description: "Online food ordering", favorite: false, lastUsed: null, icon: "fas fa-bread-slice" },
  { id: 60, name: "EatSure", category: "Food", imageUrl: "", appWebsite: "https://eatsure.com", description: "Trusted food brands", favorite: false, lastUsed: null, icon: "fas fa-shield-alt" },
  { id: 136, name: "Pizza Hut", category: "Food", imageUrl: "", appWebsite: "https://pizzahut.co.in", description: "Pizza restaurant chain", favorite: false, lastUsed: null, icon: "fas fa-pizza-slice" },
  { id: 137, name: "Burger King", category: "Food", imageUrl: "", appWebsite: "https://burgerking.in", description: "Fast food restaurant", favorite: false, lastUsed: null, icon: "fas fa-hamburger" },
  { id: 138, name: "Subway", category: "Food", imageUrl: "", appWebsite: "https://subway.com", description: "Sandwich restaurant", favorite: false, lastUsed: null, icon: "fas fa-sandwich" },
  { id: 139, name: "Starbucks", category: "Food", imageUrl: "", appWebsite: "https://starbucks.com", description: "Coffeehouse chain", favorite: false, lastUsed: null, icon: "fas fa-coffee" },
  { id: 140, name: "Blinkit", category: "Food", imageUrl: "", appWebsite: "https://blinkit.com", description: "Quick grocery delivery", favorite: false, lastUsed: null, icon: "fas fa-bolt" },

  // 💰 Finance (15 apps)
  { id: 61, name: "Google Pay", category: "Finance", imageUrl: "", appWebsite: "https://pay.google.com", description: "Digital payment app", favorite: false, lastUsed: null, icon: "fab fa-google-pay" },
  { id: 62, name: "PhonePe", category: "Finance", imageUrl: "", appWebsite: "https://phonepe.com", description: "UPI payment app", favorite: false, lastUsed: null, icon: "fas fa-mobile-alt" },
  { id: 63, name: "Paytm", category: "Finance", imageUrl: "", appWebsite: "https://paytm.com", description: "Recharge and bill payments", favorite: false, lastUsed: null, icon: "fas fa-wallet" },
  { id: 64, name: "Amazon Pay", category: "Finance", imageUrl: "", appWebsite: "https://amazon.in/amazonpay", description: "Online payments by Amazon", favorite: false, lastUsed: null, icon: "fab fa-amazon-pay" },
  { id: 65, name: "Groww", category: "Finance", imageUrl: "", appWebsite: "https://groww.in", description: "Investment and mutual funds", favorite: false, lastUsed: null, icon: "fas fa-chart-line" },
  { id: 66, name: "Zerodha", category: "Finance", imageUrl: "", appWebsite: "https://zerodha.com", description: "Stock trading platform", favorite: false, lastUsed: null, icon: "fas fa-chart-bar" },
  { id: 67, name: "Upstox", category: "Finance", imageUrl: "", appWebsite: "https://upstox.com", description: "Trading and investing app", favorite: false, lastUsed: null, icon: "fas fa-trending-up" },
  { id: 68, name: "CRED", category: "Finance", imageUrl: "", appWebsite: "https://cred.club", description: "Credit card bill rewards", favorite: false, lastUsed: null, icon: "fas fa-credit-card" },
  { id: 69, name: "CoinSwitch", category: "Finance", imageUrl: "", appWebsite: "https://coinswitch.co", description: "Crypto trading app", favorite: false, lastUsed: null, icon: "fab fa-bitcoin" },
  { id: 70, name: "ET Money", category: "Finance", imageUrl: "", appWebsite: "https://etmoney.com", description: "Invest and manage money", favorite: false, lastUsed: null, icon: "fas fa-money-bill-wave" },
  { id: 141, name: "Policybazaar", category: "Finance", imageUrl: "", appWebsite: "https://policybazaar.com", description: "Insurance comparison platform", favorite: false, lastUsed: null, icon: "fas fa-shield-alt" },
  { id: 142, name: "Bank of Baroda", category: "Finance", imageUrl: "", appWebsite: "https://bobibanking.com", description: "Banking services", favorite: false, lastUsed: null, icon: "fas fa-university" },
  { id: 143, name: "HDFC Bank", category: "Finance", imageUrl: "", appWebsite: "https://netbanking.hdfc.com", description: "Bank net banking", favorite: false, lastUsed: null, icon: "fas fa-landmark" },
  { id: 144, name: "ICICI Bank", category: "Finance", imageUrl: "", appWebsite: "https://icicibank.com", description: "Digital banking services", favorite: false, lastUsed: null, icon: "fas fa-piggy-bank" },
  { id: 145, name: "Axis Bank", category: "Finance", imageUrl: "", appWebsite: "https://axisbank.com", description: "Online banking platform", favorite: false, lastUsed: null, icon: "fas fa-credit-card" },

  // 📸 Photo and Video (15 apps)
  { id: 71, name: "Canva", category: "Photo and Video", imageUrl: "", appWebsite: "https://canva.com", description: "Graphic design and photo editing", favorite: false, lastUsed: null, icon: "fas fa-palette" },
  { id: 72, name: "Pixlr", category: "Photo and Video", imageUrl: "", appWebsite: "https://pixlr.com", description: "Online photo editor", favorite: false, lastUsed: null, icon: "fas fa-edit" },
  { id: 73, name: "Snapseed", category: "Photo and Video", imageUrl: "", appWebsite: "https://snapseed.online", description: "Photo editing by Google", favorite: false, lastUsed: null, icon: "fas fa-camera-retro" },
  { id: 74, name: "Lightroom", category: "Photo and Video", imageUrl: "", appWebsite: "https://lightroom.adobe.com", description: "Professional photo editing", favorite: false, lastUsed: null, icon: "fas fa-sliders-h" },
  { id: 75, name: "CapCut", category: "Photo and Video", imageUrl: "", appWebsite: "https://capcut.com", description: "Video editing made simple", favorite: false, lastUsed: null, icon: "fas fa-film" },
  { id: 76, name: "InShot", category: "Photo and Video", imageUrl: "", appWebsite: "https://inshot.com", description: "Photo and video editing", favorite: false, lastUsed: null, icon: "fas fa-video" },
  { id: 77, name: "VSCO", category: "Photo and Video", imageUrl: "", appWebsite: "https://vsco.co", description: "Creative photo filters", favorite: false, lastUsed: null, icon: "fas fa-filter" },
  { id: 78, name: "PicsArt", category: "Photo and Video", imageUrl: "", appWebsite: "https://picsart.com", description: "Edit photos and videos", favorite: false, lastUsed: null, icon: "fas fa-paint-brush" },
  { id: 79, name: "Adobe Premiere Rush", category: "Photo and Video", imageUrl: "", appWebsite: "https://adobe.com/products/premiere-rush.html", description: "Video editing app", favorite: false, lastUsed: null, icon: "fas fa-play-circle" },
  { id: 80, name: "KineMaster", category: "Photo and Video", imageUrl: "", appWebsite: "https://kinemaster.com", description: "Mobile video editor", favorite: false, lastUsed: null, icon: "fas fa-video" },
  { id: 146, name: "Figma", category: "Photo and Video", imageUrl: "", appWebsite: "https://figma.com", description: "Design collaboration tool", favorite: false, lastUsed: null, icon: "fab fa-figma" },
  { id: 147, name: "GIMP", category: "Photo and Video", imageUrl: "", appWebsite: "https://gimp.org", description: "Image manipulation program", favorite: false, lastUsed: null, icon: "fas fa-image" },
  { id: 148, name: "DaVinci Resolve", category: "Photo and Video", imageUrl: "", appWebsite: "https://blackmagicdesign.com/products/davinciresolve", description: "Professional video editing", favorite: false, lastUsed: null, icon: "fas fa-film" },
  { id: 149, name: "Filmora", category: "Photo and Video", imageUrl: "", appWebsite: "https://filmora.wondershare.com", description: "Video editing software", favorite: false, lastUsed: null, icon: "fas fa-video" },
  { id: 150, name: "LumaFusion", category: "Photo and Video", imageUrl: "", appWebsite: "https://lumatouch.co", description: "Mobile video editing", favorite: false, lastUsed: null, icon: "fas fa-mobile-alt" },

  // 🛍 Shopping (15 apps)
  { id: 81, name: "Amazon", category: "Shopping", imageUrl: "", appWebsite: "https://amazon.in", description: "Online shopping store", favorite: false, lastUsed: null, icon: "fab fa-amazon" },
  { id: 82, name: "Flipkart", category: "Shopping", imageUrl: "", appWebsite: "https://flipkart.com", description: "E-commerce platform", favorite: false, lastUsed: null, icon: "fas fa-shopping-cart" },
  { id: 83, name: "Myntra", category: "Shopping", imageUrl: "", appWebsite: "https://myntra.com", description: "Fashion and lifestyle", favorite: false, lastUsed: null, icon: "fas fa-tshirt" },
  { id: 84, name: "Ajio", category: "Shopping", imageUrl: "", appWebsite: "https://ajio.com", description: "Online fashion store", favorite: false, lastUsed: null, icon: "fas fa-shopping-bag" },
  { id: 85, name: "Meesho", category: "Shopping", imageUrl: "", appWebsite: "https://meesho.com", description: "Affordable online shopping", favorite: false, lastUsed: null, icon: "fas fa-tag" },
  { id: 86, name: "Nykaa", category: "Shopping", imageUrl: "", appWebsite: "https://nykaa.com", description: "Beauty and wellness", favorite: false, lastUsed: null, icon: "fas fa-spa" },
  { id: 87, name: "Snapdeal", category: "Shopping", imageUrl: "", appWebsite: "https://snapdeal.com", description: "Online deals and offers", favorite: false, lastUsed: null, icon: "fas fa-percentage" },
  { id: 88, name: "Tata CLiQ", category: "Shopping", imageUrl: "", appWebsite: "https://tatacliq.com", description: "Electronics and fashion", favorite: false, lastUsed: null, icon: "fas fa-laptop" },
  { id: 89, name: "Shopify", category: "Shopping", imageUrl: "", appWebsite: "https://shopify.com", description: "E-commerce store builder", favorite: false, lastUsed: null, icon: "fas fa-store" },
  { id: 90, name: "JioMart", category: "Shopping", imageUrl: "", appWebsite: "https://jiomart.com", description: "Groceries and essentials", favorite: false, lastUsed: null, icon: "fas fa-apple-alt" },
  { id: 151, name: "Walmart", category: "Shopping", imageUrl: "", appWebsite: "https://walmart.com", description: "Retail superstore", favorite: false, lastUsed: null, icon: "fas fa-shopping-basket" },
  { id: 152, name: "Target", category: "Shopping", imageUrl: "", appWebsite: "https://target.com", description: "Department store chain", favorite: false, lastUsed: null, icon: "fas fa-bullseye" },
  { id: 153, name: "Best Buy", category: "Shopping", imageUrl: "", appWebsite: "https://bestbuy.com", description: "Electronics retailer", favorite: false, lastUsed: null, icon: "fas fa-tv" },
  { id: 154, name: "Etsy", category: "Shopping", imageUrl: "", appWebsite: "https://etsy.com", description: "Handmade and vintage items", favorite: false, lastUsed: null, icon: "fas fa-gem" },
  { id: 155, name: "AliExpress", category: "Shopping", imageUrl: "", appWebsite: "https://aliexpress.com", description: "Online retail service", favorite: false, lastUsed: null, icon: "fas fa-shipping-fast" },

  // 💼 Productivity (15 apps)
  { id: 91, name: "Google Docs", category: "Productivity", imageUrl: "", appWebsite: "https://docs.google.com", description: "Online word processor", favorite: false, lastUsed: null, icon: "fas fa-file-alt" },
  { id: 92, name: "Google Sheets", category: "Productivity", imageUrl: "", appWebsite: "https://sheets.google.com", description: "Spreadsheet tool", favorite: false, lastUsed: null, icon: "fas fa-table" },
  { id: 93, name: "Trello", category: "Productivity", imageUrl: "", appWebsite: "https://trello.com", description: "Project management boards", favorite: false, lastUsed: null, icon: "fab fa-trello" },
  { id: 94, name: "Slack", category: "Productivity", imageUrl: "", appWebsite: "https://slack.com", description: "Team communication app", favorite: false, lastUsed: null, icon: "fab fa-slack" },
  { id: 95, name: "Asana", category: "Productivity", imageUrl: "", appWebsite: "https://asana.com", description: "Task and project management", favorite: false, lastUsed: null, icon: "fas fa-tasks" },
  { id: 96, name: "ClickUp", category: "Productivity", imageUrl: "", appWebsite: "https://clickup.com", description: "Work management platform", favorite: false, lastUsed: null, icon: "fas fa-rocket" },
  { id: 97, name: "Notion", category: "Productivity", imageUrl: "", appWebsite: "https://notion.so", description: "All-in-one workspace", favorite: false, lastUsed: null, icon: "fas fa-brain" },
  { id: 98, name: "Evernote", category: "Productivity", imageUrl: "", appWebsite: "https://evernote.com", description: "Note-taking and organizing", favorite: false, lastUsed: null, icon: "fas fa-sticky-note" },
  { id: 99, name: "Todoist", category: "Productivity", imageUrl: "", appWebsite: "https://todoist.com", description: "Task planner", favorite: false, lastUsed: null, icon: "fas fa-check-circle" },
  { id: 100, name: "Google Keep", category: "Productivity", imageUrl: "", appWebsite: "https://keep.google.com", description: "Quick notes and lists", favorite: false, lastUsed: null, icon: "fas fa-lightbulb" },
  { id: 156, name: "Microsoft Teams", category: "Productivity", imageUrl: "", appWebsite: "https://teams.microsoft.com", description: "Collaboration platform", favorite: false, lastUsed: null, icon: "fas fa-users" },
  { id: 157, name: "Zoom", category: "Productivity", imageUrl: "", appWebsite: "https://zoom.us", description: "Video conferencing tool", favorite: false, lastUsed: null, icon: "fas fa-video" },
  { id: 158, name: "Basecamp", category: "Productivity", imageUrl: "", appWebsite: "https://basecamp.com", description: "Project management", favorite: false, lastUsed: null, icon: "fas fa-campground" },
  { id: 159, name: "Monday.com", category: "Productivity", imageUrl: "", appWebsite: "https://monday.com", description: "Work operating system", favorite: false, lastUsed: null, icon: "fas fa-calendar-week" },
  { id: 160, name: "Airtable", category: "Productivity", imageUrl: "", appWebsite: "https://airtable.com", description: "Spreadsheet-database hybrid", favorite: false, lastUsed: null, icon: "fas fa-database" },

  // 🤖 AI Tools (10 apps)
  { id: 101, name: "ChatGPT", category: "AI Tools", imageUrl: "", appWebsite: "https://chat.openai.com", description: "AI-powered assistant", favorite: false, lastUsed: null, icon: "fas fa-robot" },
  { id: 102, name: "Gemini", category: "AI Tools", imageUrl: "", appWebsite: "https://gemini.google.com", description: "Google's AI assistant", favorite: false, lastUsed: null, icon: "fab fa-google" },
  { id: 103, name: "Claude", category: "AI Tools", imageUrl: "", appWebsite: "https://claude.ai", description: "AI writing and reasoning tool", favorite: false, lastUsed: null, icon: "fas fa-brain" },
  { id: 104, name: "Copilot", category: "AI Tools", imageUrl: "", appWebsite: "https://github.com/features/copilot", description: "AI coding assistant", favorite: false, lastUsed: null, icon: "fas fa-code" },
  { id: 105, name: "Midjourney", category: "AI Tools", imageUrl: "", appWebsite: "https://midjourney.com", description: "AI image generator", favorite: false, lastUsed: null, icon: "fas fa-palette" },
  { id: 106, name: "DALL·E", category: "AI Tools", imageUrl: "", appWebsite: "https://openai.com/dall-e", description: "AI art and image creation", favorite: false, lastUsed: null, icon: "fas fa-paint-brush" },
  { id: 107, name: "Runway ML", category: "AI Tools", imageUrl: "", appWebsite: "https://runwayml.com", description: "AI video editing tool", favorite: false, lastUsed: null, icon: "fas fa-film" },
  { id: 108, name: "Synthesia", category: "AI Tools", imageUrl: "", appWebsite: "https://synthesia.io", description: "AI video avatars", favorite: false, lastUsed: null, icon: "fas fa-user-circle" },
  { id: 109, name: "Perplexity AI", category: "AI Tools", imageUrl: "", appWebsite: "https://perplexity.ai", description: "AI research assistant", favorite: false, lastUsed: null, icon: "fas fa-search" },
  { id: 110, name: "ElevenLabs", category: "AI Tools", imageUrl: "", appWebsite: "https://elevenlabs.io", description: "AI voice generation", favorite: false, lastUsed: null, icon: "fas fa-microphone" },

  // 🏥 Health & Fitness (10 apps)
 {  id: 161, name: "MyFitnessPal", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.myfitnesspal.com", description: "Calorie counter and diet tracker", favorite: false, lastUsed: null, icon: "fas fa-apple-alt" },
  { id: 162, name: "Fitbit", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.fitbit.com", description: "Activity tracking and health metrics", favorite: false, lastUsed: null, icon: "fas fa-running" },
  { id: 163, name: "Strava", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.strava.com", description: "Track running and cycling with GPS", favorite: false, lastUsed: null, icon: "fas fa-bicycle" },
  { id: 164, name: "Calm", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.calm.com", description: "Meditation and sleep stories", favorite: false, lastUsed: null, icon: "fas fa-spa" },
  { id: 165, name: "Headspace", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.headspace.com", description: "Mindfulness and meditation", favorite: false, lastUsed: null, icon: "fas fa-brain" },
  { id: 166, name: "Nike Training Club", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.nike.com/ntc-app", description: "Workouts and training plans", favorite: false, lastUsed: null, icon: "fas fa-dumbbell" },
  { id: 167, name: "Seven - 7 Minute Workout", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.7minuteworkout.app", description: "Quick daily workouts", favorite: false, lastUsed: null, icon: "fas fa-stopwatch" },
  { id: 168, name: "Yoga Studio", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.yogastudio.app", description: "Yoga classes and poses", favorite: false, lastUsed: null, icon: "fas fa-spa" },
  { id: 169, name: "Water Reminder", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.waterreminder.app", description: "Stay hydrated throughout the day", favorite: false, lastUsed: null, icon: "fas fa-tint" },
  { id: 170, name: "Sleep Cycle", category: "Health & Fitness", imageUrl: "", appWebsite: "https://www.sleepcycle.com", description: "Sleep tracking and analysis", favorite: false, lastUsed: null, icon: "fas fa-bed" },

  // 📚 Education (10 apps)
  { id: 171, name: "Khan Academy", category: "Education", imageUrl: "", appWebsite: "https://www.khanacademy.org", description: "Free online courses and lessons", favorite: false, lastUsed: null, icon: "fas fa-graduation-cap" },
  { id: 172, name: "Coursera", category: "Education", imageUrl: "", appWebsite: "https://www.coursera.org", description: "Online courses from top universities", favorite: false, lastUsed: null, icon: "fas fa-university" },
  { id: 173, name: "Udemy", category: "Education", imageUrl: "", appWebsite: "https://www.udemy.com", description: "Online learning and teaching marketplace", favorite: false, lastUsed: null, icon: "fas fa-book" },
  { id: 174, name: "Duolingo", category: "Education", imageUrl: "", appWebsite: "https://www.duolingo.com", description: "Learn languages for free", favorite: false, lastUsed: null, icon: "fas fa-language" },
  { id: 175, name: "Google Classroom", category: "Education", imageUrl: "", appWebsite: "https://classroom.google.com", description: "Learning management system", favorite: false, lastUsed: null, icon: "fas fa-chalkboard-teacher" },
  { id: 176, name: "Quizlet", category: "Education", imageUrl: "", appWebsite: "https://quizlet.com", description: "Digital flashcards and study tools", favorite: false, lastUsed: null, icon: "fas fa-lightbulb" },
  { id: 177, name: "edX", category: "Education", imageUrl: "", appWebsite: "https://www.edx.org", description: "Online courses from universities", favorite: false, lastUsed: null, icon: "fas fa-laptop-code" },
  { id: 178, name: "Brilliant", category: "Education", imageUrl: "", appWebsite: "https://brilliant.org", description: "Math and science learning", favorite: false, lastUsed: null, icon: "fas fa-atom" },
  { id: 179, name: "Photomath", category: "Education", imageUrl: "", appWebsite: "https://photomath.com", description: "Camera calculator and math solver", favorite: false, lastUsed: null, icon: "fas fa-calculator" },
  { id: 180, name: "Wolfram Alpha", category: "Education", imageUrl: "", appWebsite: "https://www.wolframalpha.com", description: "Computational knowledge engine", favorite: false, lastUsed: null, icon: "fas fa-calculator" },

  // 📰 News & Magazines (10 apps)
  { id: 181, name: "Google News", category: "News & Magazines", imageUrl: "", appWebsite: "https://news.google.com", description: "Personalized news aggregator", favorite: false, lastUsed: null, icon: "fas fa-newspaper" },
  { id: 182, name: "BBC News", category: "News & Magazines", imageUrl: "", appWebsite: "https://www.bbc.com/news", description: "World news and current affairs", favorite: false, lastUsed: null, icon: "fas fa-globe" },
  { id: 183, name: "CNN", category: "News & Magazines", imageUrl: "", appWebsite: "https://edition.cnn.com", description: "News and opinion", favorite: false, lastUsed: null, icon: "fas fa-tv" },
  { id: 184, name: "The New York Times", category: "News & Magazines", imageUrl: "", appWebsite: "https://www.nytimes.com", description: "American newspaper", favorite: false, lastUsed: null, icon: "fas fa-newspaper" },
  { id: 185, name: "Flipboard", category: "News & Magazines", imageUrl: "", appWebsite: "https://flipboard.com", description: "News and social network aggregation", favorite: false, lastUsed: null, icon: "fas fa-book-open" },
  { id: 186, name: "Reuters", category: "News & Magazines", imageUrl: "", appWebsite: "https://www.reuters.com", description: "International news organization", favorite: false, lastUsed: null, icon: "fas fa-globe" },
  { id: 187, name: "The Guardian", category: "News & Magazines", imageUrl: "", appWebsite: "https://www.theguardian.com", description: "British daily newspaper", favorite: false, lastUsed: null, icon: "fas fa-newspaper" },
  { id: 188, name: "Associated Press", category: "News & Magazines", imageUrl: "", appWebsite: "https://apnews.com", description: "American news agency", favorite: false, lastUsed: null, icon: "fas fa-newspaper" },
  { id: 189, name: "The Economist", category: "News & Magazines", imageUrl: "", appWebsite: "https://www.economist.com", description: "International newspaper", favorite: false, lastUsed: null, icon: "fas fa-chart-line" },
  { id: 190, name: "TIME Magazine", category: "News & Magazines", imageUrl: "", appWebsite: "https://time.com", description: "News magazine and website", favorite: false, lastUsed: null, icon: "fas fa-clock" },

  // 🎵 Music & Audio (10 apps)
  { id: 191, name: "Apple Music", category: "Music & Audio", imageUrl: "", appWebsite: "https://music.apple.com", description: "Music streaming service", favorite: false, lastUsed: null, icon: "fas fa-music" },
  { id: 192, name: "Amazon Music", category: "Music & Audio", imageUrl: "", appWebsite: "https://music.amazon.com", description: "Amazon music streaming", favorite: false, lastUsed: null, icon: "fab fa-amazon" },
  { id: 193, name: "SoundCloud", category: "Music & Audio", imageUrl: "", appWebsite: "https://soundcloud.com", description: "Audio distribution platform", favorite: false, lastUsed: null, icon: "fab fa-soundcloud" },
  { id: 194, name: "Pandora", category: "Music & Audio", imageUrl: "", appWebsite: "https://www.pandora.com", description: "Music streaming and podcast discovery", favorite: false, lastUsed: null, icon: "fas fa-music" },
  { id: 195, name: "Tidal", category: "Music & Audio", imageUrl: "", appWebsite: "https://tidal.com", description: "High-fidelity music streaming", favorite: false, lastUsed: null, icon: "fas fa-headphones" },
  { id: 196, name: "Deezer", category: "Music & Audio", imageUrl: "", appWebsite: "https://www.deezer.com", description: "Music streaming service", favorite: false, lastUsed: null, icon: "fas fa-music" },
  { id: 197, name: "iHeartRadio", category: "Music & Audio", imageUrl: "", appWebsite: "https://www.iheart.com", description: "Radio and music streaming", favorite: false, lastUsed: null, icon: "fas fa-radio" },
  { id: 198, name: "Shazam", category: "Music & Audio", imageUrl: "", appWebsite: "https://www.shazam.com", description: "Music identification app", favorite: false, lastUsed: null, icon: "fas fa-magic" },
  { id: 199, name: "Audible", category: "Music & Audio", imageUrl: "", appWebsite: "https://www.audible.com", description: "Audiobooks and podcasts", favorite: false, lastUsed: null, icon: "fas fa-book-open" },
  { id: 200, name: "Bandcamp", category: "Music & Audio", imageUrl: "", appWebsite: "https://bandcamp.com", description: "Music platform for artists", favorite: false, lastUsed: null, icon: "fas fa-compact-disc" },

  // 🌤 Weather (10 apps)
  { id: 201, name: "The Weather Channel", category: "Weather", imageUrl: "", appWebsite: "https://weather.com", description: "Weather forecast and reports", favorite: false, lastUsed: null, icon: "fas fa-cloud-sun" },
  { id: 202, name: "AccuWeather", category: "Weather", imageUrl: "", appWebsite: "https://www.accuweather.com", description: "Weather forecasts and radar", favorite: false, lastUsed: null, icon: "fas fa-cloud-sun-rain" },
  { id: 203, name: "Weather Underground", category: "Weather", imageUrl: "", appWebsite: "https://www.wunderground.com", description: "Hyperlocal weather information", favorite: false, lastUsed: null, icon: "fas fa-map-marked-alt" },
  { id: 204, name: "NOAA Weather", category: "Weather", imageUrl: "", appWebsite: "https://www.weather.gov", description: "National Weather Service", favorite: false, lastUsed: null, icon: "fas fa-cloud" },
  { id: 205, name: "Weather & Radar", category: "Weather", imageUrl: "", appWebsite: "https://www.weatherradar.com", description: "Live weather and radar maps", favorite: false, lastUsed: null, icon: "fas fa-satellite" },
  { id: 206, name: "Dark Sky", category: "Weather", imageUrl: "", appWebsite: "https://darksky.net", description: "Hyperlocal weather predictions", favorite: false, lastUsed: null, icon: "fas fa-moon" },
  { id: 207, name: "Windy", category: "Weather", imageUrl: "", appWebsite: "https://www.windy.com", description: "Wind maps and weather forecast", favorite: false, lastUsed: null, icon: "fas fa-wind" },
  { id: 208, name: "WeatherBug", category: "Weather", imageUrl: "", appWebsite: "https://www.weatherbug.com", description: "Weather forecasts and alerts", favorite: false, lastUsed: null, icon: "fas fa-bug" },
  { id: 209, name: "MyRadar", category: "Weather", imageUrl: "", appWebsite: "https://www.myradar.com", description: "Weather radar and hurricane tracker", favorite: false, lastUsed: null, icon: "fas fa-radar" },
  { id: 210, name: "Carrot Weather", category: "Weather", imageUrl: "", appWebsite: "https://www.meetcarrot.com/weather", description: "Weather with personality", favorite: false, lastUsed: null, icon: "fas fa-carrot" },
  
  { id: 211, name: "Zerodha", category: "Trading & Investment", imageUrl: "", appWebsite: "https://zerodha.com", description: "Trade stocks, mutual funds, and more", favorite: false, lastUsed: null, icon: "fas fa-chart-line" },
  { id: 212, name: "Groww", category: "Trading & Investment", imageUrl: "", appWebsite: "https://groww.in", description: "Invest in mutual funds and stocks easily", favorite: false, lastUsed: null, icon: "fas fa-chart-area" },
  { id: 213, name: "Upstox", category: "Trading & Investment", imageUrl: "", appWebsite: "https://upstox.com", description: "Online stock trading platform", favorite: false, lastUsed: null, icon: "fas fa-chart-bar" },
  { id: 214, name: "Coinbase", category: "Trading & Investment", imageUrl: "", appWebsite: "https://coinbase.com", description: "Buy and sell cryptocurrency securely", favorite: false, lastUsed: null, icon: "fab fa-bitcoin" },
  { id: 215, name: "Binance", category: "Trading & Investment", imageUrl: "", appWebsite: "https://binance.com", description: "Global crypto trading exchange", favorite: false, lastUsed: null, icon: "fab fa-btc" },
  { id: 216, name: "Angel One", category: "Trading & Investment", imageUrl: "", appWebsite: "https://angelone.in", description: "Stock trading and investment platform", favorite: false, lastUsed: null, icon: "fas fa-money-bill-trend-up" },
  { id: 217, name: "ET Markets", category: "Trading & Investment", imageUrl: "", appWebsite: "https://economictimes.indiatimes.com/markets", description: "Business and market analysis updates", favorite: false, lastUsed: null, icon: "fas fa-newspaper" },
  { id: 218, name: "Moneycontrol", category: "Trading & Investment", imageUrl: "", appWebsite: "https://moneycontrol.com", description: "Finance news, stock prices and analysis", favorite: false, lastUsed: null, icon: "fas fa-indian-rupee-sign" },
  { id: 219, name: "Paytm Money", category: "Trading & Investment", imageUrl: "", appWebsite: "https://paytmmoney.com", description: "Invest in stocks, SIPs, and gold", favorite: false, lastUsed: null, icon: "fas fa-wallet" },
  { id: 220, name: "ICICI Direct", category: "Trading & Investment", imageUrl: "", appWebsite: "https://icicidirect.com", description: "Online investment and brokerage platform", favorite: false, lastUsed: null, icon: "fas fa-landmark" },
  { id: 221, name: "HDFC Securities", category: "Trading & Investment", imageUrl: "", appWebsite: "https://hdfcsec.com", description: "Trade stocks and manage your portfolio", favorite: false, lastUsed: null, icon: "fas fa-chart-pie" },
  { id: 222, name: "5paisa", category: "Trading & Investment", imageUrl: "", appWebsite: "https://5paisa.com", description: "Discount broker for stock and mutual fund investing", favorite: false, lastUsed: null, icon: "fas fa-hand-holding-usd" },
  { id: 223, name: "KuCoin", category: "Trading & Investment", imageUrl: "", appWebsite: "https://kucoin.com", description: "Crypto trading and portfolio management", favorite: false, lastUsed: null, icon: "fas fa-coins" },
  { id: 224, name: "WazirX", category: "Trading & Investment", imageUrl: "", appWebsite: "https://wazirx.com", description: "India's most trusted cryptocurrency exchange", favorite: false, lastUsed: null, icon: "fas fa-dollar-sign" },
  
  { id: 225, name: "LinkedIn", category: "Business & MNCs", imageUrl: "", appWebsite: "https://linkedin.com", description: "Professional networking and hiring", favorite: false, lastUsed: null, icon: "fab fa-linkedin" },
  { id: 226, name: "Microsoft", category: "Business & MNCs", imageUrl: "", appWebsite: "https://microsoft.com", description: "Global technology and business solutions", favorite: false, lastUsed: null, icon: "fab fa-microsoft" },
  { id: 227, name: "Google Workspace", category: "Business & MNCs", imageUrl: "", appWebsite: "https://workspace.google.com", description: "Collaboration and productivity tools", favorite: false, lastUsed: null, icon: "fab fa-google" },
  { id: 228, name: "IBM", category: "Business & MNCs", imageUrl: "", appWebsite: "https://ibm.com", description: "Enterprise software and cloud services", favorite: false, lastUsed: null, icon: "fas fa-cloud" },
  { id: 229, name: "Accenture", category: "Business & MNCs", imageUrl: "", appWebsite: "https://accenture.com", description: "Global consulting and IT services", favorite: false, lastUsed: null, icon: "fas fa-briefcase" },
  { id: 230, name: "Tata Consultancy Services", category: "Business & MNCs", imageUrl: "", appWebsite: "https://tcs.com", description: "IT services and business solutions", favorite: false, lastUsed: null, icon: "fas fa-building" },
  { id: 231, name: "Infosys", category: "Business & MNCs", imageUrl: "", appWebsite: "https://infosys.com", description: "Digital transformation and business services", favorite: false, lastUsed: null, icon: "fas fa-network-wired" },
  { id: 232, name: "Wipro", category: "Business & MNCs", imageUrl: "", appWebsite: "https://wipro.com", description: "Technology consulting and IT services", favorite: false, lastUsed: null, icon: "fas fa-industry" },
  { id: 233, name: "Tech Mahindra", category: "Business & MNCs", imageUrl: "", appWebsite: "https://techmahindra.com", description: "Global digital transformation provider", favorite: false, lastUsed: null, icon: "fas fa-globe" },
  { id: 234, name: "Capgemini", category: "Business & MNCs", imageUrl: "", appWebsite: "https://capgemini.com", description: "Consulting and digital services", favorite: false, lastUsed: null, icon: "fas fa-users" },
  { id: 235, name: "Deloitte", category: "Business & MNCs", imageUrl: "", appWebsite: "https://deloitte.com", description: "Global professional services network", favorite: false, lastUsed: null, icon: "fas fa-user-tie" },
  { id: 236, name: "Amazon Web Services", category: "Business & MNCs", imageUrl: "", appWebsite: "https://aws.amazon.com", description: "Cloud computing services", favorite: false, lastUsed: null, icon: "fab fa-aws" },
  { id: 237, name: "Oracle", category: "Business & MNCs", imageUrl: "", appWebsite: "https://oracle.com", description: "Database and cloud technology leader", favorite: false, lastUsed: null, icon: "fas fa-database" },
  { id: 238, name: "Cognizant", category: "Business & MNCs", imageUrl: "", appWebsite: "https://cognizant.com", description: "Digital solutions and business consulting", favorite: false, lastUsed: null, icon: "fas fa-handshake" }
];

// Default Icons for Apps and Categories
const defaultIcons = [
  "fas fa-globe",        // Global/Web
  "fas fa-rocket",       // Launch/Startup
  "fas fa-palette",      // Design/Art
  "fas fa-music",        // Music/Audio
  "fas fa-gamepad",      // Games
  "fas fa-camera",       // Photography
  "fas fa-shopping-cart", // Shopping
  "fas fa-credit-card",  // Finance/Payments
  "fas fa-plane",        // Travel
  "fas fa-utensils",     // Food
  "fas fa-heartbeat",    // Health/Fitness
  "fas fa-graduation-cap", // Education
  "fas fa-newspaper",    // News
  "fas fa-cloud-sun",    // Weather
  "fas fa-home",         // Home/Lifestyle
  "fas fa-car",          // Transportation
  "fas fa-film",         // Entertainment
  "fas fa-book",         // Reading/Books
  "fas fa-mobile-alt",   // Mobile Apps
  "fas fa-wifi",         // Internet/Connectivity
  "fas fa-star",         // Favorites/Ratings
  "fas fa-bell",         // Notifications
  "fas fa-chart-bar",    // Analytics/Data
  "fas fa-cog",          // Settings/Tools
  "fas fa-envelope",     // Email/Messaging
  "fas fa-calendar" ,     // Scheduling/Events
  "fas fa-robot",
  "fas fa-vr-cardboard",
  "fas fa-satellite",
  "fas fa-fingerprint",
  "fas fa-brain",
  "fas fa-atom",
  "fas fa-mountain",
  "fas fa-fish",
  "fas fa-campground",
  "fas fa-hiking",
  "fas fa-compass",
  "fas fa-fire",
  "fas fa-water",
  "fas fa-wind",
  "fas fa-sun",
  "fas fa-moon",
  "fas fa-seedling",
  "fas fa-tree",
  "fas fa-archway",
  "fas fa-monument",
  "fas fa-landmark",
  "fas fa-torii-gate",
  "fas fa-igloo",
  "fas fa-kaaba",
  "fas fa-vihara",
  "fas fa-place-of-worship",
  "fas fa-gopuram",
  "fas fa-mosque",
  "fas fa-synagogue",
  "fas fa-church",
  "fas fa-campground",
  "fas fa-city",
  "fas fa-building",
  "fas fa-home",
  "fas fa-briefcase",     // Business/Work
  "fas fa-chart-line",    // Analytics/Charts
  "fas fa-database",      // Database/Storage
  "fas fa-network-wired", // Networking
  "fas fa-cloud",         // Cloud Storage
  "fas fa-sync",          // Sync/Backup
  "fas fa-share",         // Sharing
  "fas fa-print",         // Printing
  "fas fa-calculator",    // Calculator
  "fas fa-chart-pie",     // Statistics
  "fas fa-tasks",         // Task Management
  "fas fa-check-circle",  // Completion/Todo
  "fas fa-clipboard",     // Clipboard/Notes
  "fas fa-sticky-note",   // Notes/Memos
  "fas fa-paperclip",     // Attachments
  "fas fa-link",   
];

const avatarOptions = [
  // 👦 Men / Boys (10)
  "https://cdn-icons-png.flaticon.com/512/6997/6997674.png",
  "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
  "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",  
  "https://cdn-icons-png.flaticon.com/512/236/236831.png",
  "https://cdn-icons-png.flaticon.com/512/16683/16683419.png",
  "https://cdn-icons-png.flaticon.com/512/428/428933.png",
  "https://cdn-icons-png.flaticon.com/512/3641/3641853.png",
  "https://cdn-icons-png.flaticon.com/512/949/949635.png" ,
  "https://cdn-icons-png.flaticon.com/512/14663/14663189.png",
  "https://cdn-icons-png.flaticon.com/512/560/560277.png",

  // 👩 Women / Girls (10)
  "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
  "https://cdn-icons-png.flaticon.com/512/706/706831.png",
  "https://cdn-icons-png.flaticon.com/512/921/921124.png",
  "https://cdn-icons-png.flaticon.com/512/6997/6997660.png",
  "https://cdn-icons-png.flaticon.com/512/2920/2920045.png",
  "https://cdn-icons-png.flaticon.com/512/6997/6997668.png",
  "https://cdn-icons-png.flaticon.com/512/16683/16683451.png",
  "https://cdn-icons-png.flaticon.com/512/702/702016.png",
  "https://cdn-icons-png.flaticon.com/512/702/702016.png",
  "https://cdn-icons-png.flaticon.com/512/5182/5182011.png"
];

// ... (all your existing data arrays remain the same)

// Global variables
let apps = [];
let categories = [];
let userApps = [];
let userCategories = [];
let userProfile = {
  name: "User Name",
  avatar: avatarOptions[0]
};
let currentCategory = "All";
let recentApps = [];
let selectedCategoryId = null;
let selectedAppId = null;
let searchQuery = "";

// DOM Elements
const navMenuBtn = document.getElementById('navMenuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const createBtn = document.getElementById('createBtn');
const profileBtn = document.getElementById('profileBtn');
const themeSwitch = document.getElementById('themeSwitch');
const sidebarThemeSwitch = document.getElementById('sidebarThemeSwitch');
const homeSection = document.getElementById('homeSection');
const appsSection = document.getElementById('appsSection');
const favoritesSection = document.getElementById('favoritesSection');
const searchResultsSection = document.getElementById('searchResultsSection');
const recentAppsContainer = document.getElementById('recentAppsContainer');
const categoriesGrid = document.getElementById('categoriesGrid');
const appsGrid = document.getElementById('appsGrid');
const favoritesGrid = document.getElementById('favoritesGrid');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const appsSectionTitle = document.getElementById('appsSectionTitle');
const searchResultsTitle = document.getElementById('searchResultsTitle');
const backToHome = document.getElementById('backToHome');
const backToHomeFavorites = document.getElementById('backToHomeFavorites');
const backToHomeSearch = document.getElementById('backToHomeSearch');
const profileDropdown = document.getElementById('profileDropdown');
const profileName = document.getElementById('profileName');
const profileImage = document.getElementById('profileImage');
const navProfileImg = document.getElementById('navProfileImg');
const editProfileBtn = document.getElementById('editProfileBtn');
const createModal = document.getElementById('createModal');
const editProfileModal = document.getElementById('editProfileModal');
const closeCreateModal = document.getElementById('closeCreateModal');
const closeEditModal = document.getElementById('closeEditModal');
const saveAppBtn = document.getElementById('saveAppBtn');
const cancelAppBtn = document.getElementById('cancelAppBtn');
const saveCategoryBtn = document.getElementById('saveCategoryBtn');
const cancelCategoryBtn = document.getElementById('cancelCategoryBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const appCategory = document.getElementById('appCategory');
const userName = document.getElementById('userName');
const avatarOptionsContainer = document.getElementById('avatarOptions');
const appIconOptions = document.getElementById('appIconOptions');
const categoryIconOptions = document.getElementById('categoryIconOptions');
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const searchBtn = document.getElementById('searchBtn');
const mobileSearchBtn = document.getElementById('mobileSearchBtn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const mobileClearSearchBtn = document.getElementById('mobileClearSearchBtn');
const mobileSearchContainer = document.getElementById('mobileSearchContainer');
const toast = document.getElementById('toast');
const categoryContextMenu = document.getElementById('categoryContextMenu');
const appContextMenu = document.getElementById('appContextMenu');
const deleteCategoryBtn = document.getElementById('deleteCategoryBtn');
const changeAppIconBtn = document.getElementById('changeAppIconBtn');
const favoriteAppBtn = document.getElementById('favoriteAppBtn');
const deleteAppBtn = document.getElementById('deleteAppBtn');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const sidebarHomeBtn = document.getElementById('sidebarHomeBtn');
const sidebarRecentBtn = document.getElementById('sidebarRecentBtn');
const sidebarCategoriesBtn = document.getElementById('sidebarCategoriesBtn');
const sidebarFavoritesBtn = document.getElementById('sidebarFavoritesBtn');
const sidebarCreateBtn = document.getElementById('sidebarCreateBtn');
const sidebarProfileBtn = document.getElementById('sidebarProfileBtn');
const sidebarCategories = document.getElementById('sidebarCategories');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const renameModal = document.getElementById('renameModal');
const changeIconModal = document.getElementById('changeIconModal');
const changeAppIconModal = document.getElementById('changeAppIconModal');
const renameCategoryName = document.getElementById('renameCategoryName');
const saveRenameBtn = document.getElementById('saveRenameBtn');
const cancelRenameBtn = document.getElementById('cancelRenameBtn');
const closeRenameModal = document.getElementById('closeRenameModal');
const iconGrid = document.getElementById('iconGrid');
const appIconGrid = document.getElementById('appIconGrid');
const cancelIconBtn = document.getElementById('cancelIconBtn');
const closeIconModal = document.getElementById('closeIconModal');
const closeAppIconModal = document.getElementById('closeAppIconModal');
const cancelAppIconBtn = document.getElementById('cancelAppIconBtn');
const renameCategoryBtn = document.getElementById('renameCategoryBtn');
const changeIconBtn = document.getElementById('changeIconBtn');
const viewAllRecent = document.getElementById('viewAllRecent');
const startupAnimation = document.getElementById('startupAnimation');

// Initialize the app
function init() {
  // Show startup animation first
  setTimeout(() => {
    startupAnimation.classList.add('hidden');
    setTimeout(() => {
      startupAnimation.style.display = 'none';
    }, 500);
  }, 2500);
  
  loadUserProfile();
  loadUserCategories();
  loadUserApps();
  loadRecentApps();
  categories = [...defaultCategories, ...userCategories];
  apps = [...appsData, ...userApps];
  renderRecentApps();
  renderCategories();
  renderSidebarCategories();
  renderCategoryDropdown();
  renderAvatarOptions();
  renderAppIconOptions();
  renderCategoryIconOptions();
  renderIconGrid();
  renderAppIconGrid();
  setupEventListeners();
  setActiveNav('home');
  showHomePage();
}

// Load user profile from localStorage
function loadUserProfile() {
  const savedProfile = localStorage.getItem('apphub-user-profile');
  if (savedProfile) {
    userProfile = JSON.parse(savedProfile);
  }
  updateProfileUI();
}

// Save user profile to localStorage
function saveUserProfile() {
  localStorage.setItem('apphub-user-profile', JSON.stringify(userProfile));
}

// Load user categories from localStorage
function loadUserCategories() {
  const savedCategories = localStorage.getItem('apphub-user-categories');
  if (savedCategories) {
    userCategories = JSON.parse(savedCategories);
  }
}

// Save user categories to localStorage
function saveUserCategories() {
  localStorage.setItem('apphub-user-categories', JSON.stringify(userCategories));
}

// Load user apps from localStorage
function loadUserApps() {
  const savedApps = localStorage.getItem('apphub-user-apps');
  if (savedApps) {
    userApps = JSON.parse(savedApps);
  }
}

// Save user apps to localStorage
function saveUserApps() {
  localStorage.setItem('apphub-user-apps', JSON.stringify(userApps));
}

// Load recent apps from localStorage
function loadRecentApps() {
  const savedRecent = localStorage.getItem('apphub-recent-apps');
  if (savedRecent) {
    recentApps = JSON.parse(savedRecent);
  } else {
    // Initialize with some default recent apps
    recentApps = [
      apps.find(app => app.name === "Facebook"),
      apps.find(app => app.name === "Instagram"),
      apps.find(app => app.name === "YouTube"),
      apps.find(app => app.name === "Google Maps")
    ].filter(Boolean);
  }
}

// Save recent apps to localStorage
function saveRecentApps() {
  localStorage.setItem('apphub-recent-apps', JSON.stringify(recentApps));
}

// Update profile UI
function updateProfileUI() {
  profileName.textContent = userProfile.name;
  profileImage.src = userProfile.avatar;
  navProfileImg.src = userProfile.avatar;
  userName.value = userProfile.name;
  
  // Update avatar selection
  document.querySelectorAll('.avatar-option').forEach(option => {
    if (option.dataset.avatar === userProfile.avatar) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
}

// Set active navigation
function setActiveNav(active) {
  sidebarHomeBtn.classList.toggle('active', active === 'home');
  sidebarRecentBtn.classList.toggle('active', active === 'recent');
  sidebarCategoriesBtn.classList.toggle('active', active === 'categories');
  sidebarFavoritesBtn.classList.toggle('active', active === 'favorites');
  sidebarCreateBtn.classList.toggle('active', active === 'create');
}

// Render recent apps
function renderRecentApps() {
  recentAppsContainer.innerHTML = '';
  
  if (recentApps.length === 0) {
    recentAppsContainer.innerHTML = `
      <div class="no-apps" style="text-align: center; padding: 2rem; color: var(--text-light);">
        <i class="fas fa-clock" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>No recent apps</h3>
        <p>Your recently used apps will appear here</p>
      </div>
    `;
    return;
  }
  
  recentApps.slice(0, 8).forEach(app => {
    const appCard = document.createElement('div');
    appCard.className = 'recent-app-card';
    
    appCard.innerHTML = `
      <div class="recent-app-icon" style="background: ${getCategoryColor(app.category)}">
        <i class="${app.icon}"></i>
      </div>
      <div class="recent-app-name">${app.name}</div>
      <div class="recent-app-category">${app.category}</div>
    `;
    
    appCard.addEventListener('click', () => {
      openApp(app);
    });
    
    recentAppsContainer.appendChild(appCard);
  });
}

// Render categories
function renderCategories() {
  categoriesGrid.innerHTML = '';
  
  categories.forEach(category => {
    // Skip Favorites and All categories in home page
    if (category.name === "Favorites" || category.name === "All") return;
    
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.dataset.categoryId = category.id;
    
    categoryCard.innerHTML = `
      <div class="category-icon" style="background: ${category.color}">
        <i class="${category.icon}"></i>
      </div>
      <div class="category-name">${category.name}</div>
      <div class="category-count">${getAppCountByCategory(category.name)} apps</div>
      <button class="category-menu">
        <i class="fas fa-ellipsis-v"></i>
      </button>
    `;
    
    // Open category when card is clicked
    categoryCard.addEventListener('click', (e) => {
      if (!e.target.closest('.category-menu')) {
        showAppsByCategory(category.name);
      }
    });
    
    // Add event listener to menu button
    const menuBtn = categoryCard.querySelector('.category-menu');
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showCategoryContextMenu(e, category.id);
    });
    
    categoriesGrid.appendChild(categoryCard);
  });
}

// Render sidebar categories
function renderSidebarCategories() {
  sidebarCategories.innerHTML = '';
  
  categories.forEach(category => {
    // Skip Favorites and All categories in sidebar for cleaner UI
    if (category.name === "Favorites" || category.name === "All") return;
    
    const categoryBtn = document.createElement('button');
    categoryBtn.className = 'sidebar-category';
    categoryBtn.dataset.category = category.name;
    
    categoryBtn.innerHTML = `
      <div class="sidebar-category-icon" style="background: ${category.color}">
        <i class="${category.icon}"></i>
      </div>
      <span>${category.name}</span>
      <span class="sidebar-category-count">${getAppCountByCategory(category.name)}</span>
    `;
    
    categoryBtn.addEventListener('click', () => {
      showAppsByCategory(category.name);
      hideSidebar();
    });
    
    sidebarCategories.appendChild(categoryBtn);
  });
}

// Render category dropdown
function renderCategoryDropdown() {
  appCategory.innerHTML = '';
  
  categories.forEach(category => {
    if (category.name !== "Favorites" && category.name !== "All") {
      const option = document.createElement('option');
      option.value = category.name;
      option.textContent = category.name;
      appCategory.appendChild(option);
    }
  });
}

// Render avatar options
function renderAvatarOptions() {
  avatarOptionsContainer.innerHTML = '';
  
  avatarOptions.forEach((avatar, index) => {
    const avatarOption = document.createElement('div');
    avatarOption.className = 'avatar-option';
    if (avatar === userProfile.avatar) {
      avatarOption.classList.add('selected');
    }
    avatarOption.dataset.avatar = avatar;
    
    avatarOption.innerHTML = `<img src="${avatar}" alt="Avatar ${index + 1}">`;
    
    avatarOption.addEventListener('click', () => {
      document.querySelectorAll('.avatar-option').forEach(option => {
        option.classList.remove('selected');
      });
      avatarOption.classList.add('selected');
    });
    
    avatarOptionsContainer.appendChild(avatarOption);
  });
}

// Render app icon options
function renderAppIconOptions() {
  appIconOptions.innerHTML = '';
  
  defaultIcons.forEach((icon, index) => {
    const iconOption = document.createElement('div');
    iconOption.className = 'icon-option';
    iconOption.dataset.icon = icon;
    
    iconOption.innerHTML = `<i class="${icon}"></i>`;
    
    iconOption.addEventListener('click', () => {
      document.querySelectorAll('#appIconOptions .icon-option').forEach(option => {
        option.classList.remove('selected');
      });
      iconOption.classList.add('selected');
    });
    
    appIconOptions.appendChild(iconOption);
  });
}

// Render category icon options
function renderCategoryIconOptions() {
  categoryIconOptions.innerHTML = '';
  
  defaultIcons.forEach((icon, index) => {
    const iconOption = document.createElement('div');
    iconOption.className = 'icon-option';
    iconOption.dataset.icon = icon;
    
    iconOption.innerHTML = `<i class="${icon}"></i>`;
    
    iconOption.addEventListener('click', () => {
      document.querySelectorAll('#categoryIconOptions .icon-option').forEach(option => {
        option.classList.remove('selected');
      });
      iconOption.classList.add('selected');
    });
    
    categoryIconOptions.appendChild(iconOption);
  });
}

// Render icon grid for change icon modal
function renderIconGrid() {
  iconGrid.innerHTML = '';
  
  defaultIcons.forEach((icon, index) => {
    const iconOption = document.createElement('div');
    iconOption.className = 'icon-grid-option';
    iconOption.dataset.icon = icon;
    
    iconOption.innerHTML = `<i class="${icon}"></i>`;
    
    iconOption.addEventListener('click', () => {
      // Remove selected class from all icons
      document.querySelectorAll('.icon-grid-option').forEach(option => {
        option.classList.remove('selected');
      });
      
      // Add selected class to clicked icon
      iconOption.classList.add('selected');
      
      // Update category icon
      if (selectedCategoryId) {
        const categoryIndex = categories.findIndex(c => c.id === selectedCategoryId);
        if (categoryIndex !== -1) {
          categories[categoryIndex].icon = icon;
          renderCategories();
          renderSidebarCategories();
          hideChangeIconModal();
          showToast('Icon updated successfully');
        }
      }
    });
    
    iconGrid.appendChild(iconOption);
  });
}

// Render app icon grid for change app icon modal
function renderAppIconGrid() {
  appIconGrid.innerHTML = '';
  
  defaultIcons.forEach((icon, index) => {
    const iconOption = document.createElement('div');
    iconOption.className = 'icon-grid-option';
    iconOption.dataset.icon = icon;
    
    iconOption.innerHTML = `<i class="${icon}"></i>`;
    
    iconOption.addEventListener('click', () => {
      // Remove selected class from all icons
      document.querySelectorAll('#appIconGrid .icon-grid-option').forEach(option => {
        option.classList.remove('selected');
      });
      
      // Add selected class to clicked icon
      iconOption.classList.add('selected');
      
      // Update app icon
      if (selectedAppId) {
        const appIndex = apps.findIndex(a => a.id === selectedAppId);
        if (appIndex !== -1) {
          apps[appIndex].icon = icon;
          
          // Update in user apps if it's a user-added app
          const userAppIndex = userApps.findIndex(app => app.id === selectedAppId);
          if (userAppIndex !== -1) {
            userApps[userAppIndex].icon = icon;
            saveUserApps();
          }
          
          renderApps();
          renderRecentApps();
          renderFavorites();
          renderSearchResults();
          hideChangeAppIconModal();
          showToast('App icon updated successfully');
        }
      }
    });
    
    appIconGrid.appendChild(iconOption);
  });
}

// Create app card
function createAppCard(app) {
  const appCard = document.createElement('div');
  appCard.className = 'app-card';
  appCard.dataset.appId = app.id;
  
  appCard.innerHTML = `
    <div class="app-icon" style="background: ${getCategoryColor(app.category)}">
      <i class="${app.icon || 'fas fa-globe'}"></i>
    </div>
    <div class="app-name">${app.name}</div>
    <div class="app-category">${app.category}</div>
    <button class="favorite-btn ${app.favorite ? 'active' : ''}" data-app-id="${app.id}">
      <i class="fas fa-heart"></i>
    </button>
    <button class="app-menu">
      <i class="fas fa-ellipsis-v"></i>
    </button>
  `;
  
  // Open app when card is clicked
  appCard.addEventListener('click', (e) => {
    if (!e.target.closest('.favorite-btn') && !e.target.closest('.app-menu')) {
      openApp(app);
    }
  });
  
  // Add event listener to favorite button
  const favoriteBtn = appCard.querySelector('.favorite-btn');
  favoriteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFavorite(app.id);
  });
  
  // Add event listener to menu button
  const menuBtn = appCard.querySelector('.app-menu');
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showAppContextMenu(e, app.id);
  });
  
  return appCard;
}

// Get category color for app icon background
function getCategoryColor(categoryName) {
  const category = categories.find(cat => cat.name === categoryName);
  return category ? category.color : '#ff0000';
}

// Get apps by category
function getAppsByCategory(category) {
  if (category === 'All') return apps;
  if (category === 'Favorites') return apps.filter(app => app.favorite);
  
  return apps.filter(app => app.category === category);
}

// Get app count by category
function getAppCountByCategory(category) {
  return getAppsByCategory(category).length;
}

// Show home page
function showHomePage() {
  hideAllSections();
  homeSection.classList.add('active');
  setActiveNav('home');
}

// Show apps by category
function showAppsByCategory(category) {
  currentCategory = category;
  hideAllSections();
  appsSection.classList.add('active');
  appsSectionTitle.textContent = `${category} Apps`;
  renderApps();
  setActiveNav('categories');
}

// Show favorites
function showFavorites() {
  hideAllSections();
  favoritesSection.classList.add('active');
  renderFavorites();
  setActiveNav('favorites');
}

// Show search results
function showSearchResults() {
  hideAllSections();
  searchResultsSection.classList.add('active');
  searchResultsTitle.textContent = `Search Results for "${searchQuery}"`;
  renderSearchResults();
}

// Hide all sections
function hideAllSections() {
  document.querySelectorAll('.home-section, .apps-section').forEach(section => {
    section.classList.remove('active');
  });
}

// Render apps
function renderApps() {
  appsGrid.innerHTML = '';
  
  const filteredApps = getAppsByCategory(currentCategory);
  
  if (filteredApps.length === 0) {
    appsGrid.innerHTML = `
      <div class="no-apps" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-light);">
        <i class="fas fa-inbox" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>No apps found</h3>
        <p>${currentCategory === 'Favorites' ? 'You haven\'t added any favorites yet' : 'Try adding a new app'}</p>
      </div>
    `;
    return;
  }
  
  // Render app cards
  filteredApps.forEach(app => {
    const appCard = createAppCard(app);
    appsGrid.appendChild(appCard);
  });
}

// Render favorites
function renderFavorites() {
  favoritesGrid.innerHTML = '';
  
  const favoriteApps = apps.filter(app => app.favorite);
  
  if (favoriteApps.length === 0) {
    favoritesGrid.innerHTML = `
      <div class="no-apps" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-light);">
        <i class="fas fa-heart" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>No favorites yet</h3>
        <p>Tap the heart icon on any app to add it to favorites</p>
      </div>
    `;
    return;
  }
  
  // Render app cards
  favoriteApps.forEach(app => {
    const appCard = createAppCard(app);
    favoritesGrid.appendChild(appCard);
  });
}

// Render search results
function renderSearchResults() {
  searchResultsGrid.innerHTML = '';
  
  if (searchQuery) {
    const searchTerm = searchQuery.toLowerCase();
    const filteredApps = apps.filter(app => {
      const appName = app.name.toLowerCase();
      const appCategory = app.category.toLowerCase();
      const appDescription = app.description ? app.description.toLowerCase() : '';
      
      return (
        appName.includes(searchTerm) || 
        appCategory.includes(searchTerm) ||
        appDescription.includes(searchTerm)
      );
    });
    
    if (filteredApps.length === 0) {
      searchResultsGrid.innerHTML = `
        <div class="no-apps" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-light);">
          <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
          <h3>No results found for "${searchQuery}"</h3>
          <p>Try a different search term</p>
        </div>
      `;
    } else {
      // Render app cards
      filteredApps.forEach(app => {
        const appCard = createAppCard(app);
        searchResultsGrid.appendChild(appCard);
      });
    }
  } else {
    searchResultsGrid.innerHTML = `
      <div class="no-apps" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-light);">
        <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <h3>Search for apps</h3>
        <p>Enter a search term to find apps</p>
      </div>
    `;
  }
}

// Open app
function openApp(app) {
  // Add to recent apps
  const existingIndex = recentApps.findIndex(a => a.id === app.id);
  if (existingIndex !== -1) {
    recentApps.splice(existingIndex, 1);
  }
  
  app.lastUsed = new Date().toISOString();
  recentApps.unshift(app);
  
  // Keep only last 10 recent apps
  if (recentApps.length > 10) {
    recentApps = recentApps.slice(0, 10);
  }
  
  saveRecentApps();
  renderRecentApps();
  
  // Open app in new tab
  window.open(app.appWebsite, '_blank');
}

// Toggle favorite status
function toggleFavorite(appId) {
  const appIndex = apps.findIndex(app => app.id === appId);
  if (appIndex !== -1) {
    apps[appIndex].favorite = !apps[appIndex].favorite;
    
    // Update in user apps if it's a user-added app
    const userAppIndex = userApps.findIndex(app => app.id === appId);
    if (userAppIndex !== -1) {
      userApps[userAppIndex].favorite = apps[appIndex].favorite;
      saveUserApps();
    }
    
    // Update UI
    renderApps();
    renderFavorites();
    renderSearchResults();
    
    // Update favorite button in all app cards
    document.querySelectorAll(`.favorite-btn[data-app-id="${appId}"]`).forEach(btn => {
      btn.classList.toggle('active', apps[appIndex].favorite);
    });
    
    showToast(apps[appIndex].favorite ? 'Added to favorites' : 'Removed from favorites');
  }
}

// Delete app
function deleteApp(appId) {
  if (confirm('Are you sure you want to delete this app?')) {
    // Check if it's a user-added app
    const userAppIndex = userApps.findIndex(app => app.id === appId);
    if (userAppIndex !== -1) {
      userApps.splice(userAppIndex, 1);
      saveUserApps();
    }
    
    // Remove from apps array
    apps = apps.filter(app => app.id !== appId);
    
    // Remove from recent apps
    recentApps = recentApps.filter(app => app.id !== appId);
    saveRecentApps();
    
    renderApps();
    renderRecentApps();
    renderCategories();
    renderSidebarCategories();
    renderFavorites();
    renderSearchResults();
    showToast('App deleted successfully');
  }
}

// Delete category
function deleteCategory(categoryId) {
  const category = categories.find(cat => cat.id === categoryId);
  
  // Prevent deletion of default categories
  if (categoryId <= 12) {
    showToast('Default categories cannot be deleted');
    return;
  }
  
  if (confirm(`Are you sure you want to delete the "${category.name}" category? All apps in this category will be moved to "All" category.`)) {
    // Move apps to "All" category
    apps.forEach(app => {
      if (app.category === category.name) {
        app.category = "All";
        
        // Update in user apps if it's a user-added app
        const userAppIndex = userApps.findIndex(userApp => userApp.id === app.id);
        if (userAppIndex !== -1) {
          userApps[userAppIndex].category = "All";
        }
      }
    });
    
    // Remove category
    categories = categories.filter(cat => cat.id !== categoryId);
    userCategories = userCategories.filter(cat => cat.id !== categoryId);
    
    saveUserCategories();
    saveUserApps();
    
    // Update current category if it was the deleted one
    if (currentCategory === category.name) {
      currentCategory = "All";
      appsSectionTitle.textContent = "All Apps";
    }
    
    renderApps();
    renderCategories();
    renderSidebarCategories();
    renderCategoryDropdown();
    showToast('Category deleted successfully');
  }
}

// Show create modal
function showCreateModal() {
  createModal.classList.add('active');
  // Reset to category tab
  switchTab('category');
  hideSidebar();
}

// Hide create modal
function hideCreateModal() {
  createModal.classList.remove('active');
  // Reset forms
  document.getElementById('categoryName').value = '';
  document.getElementById('categoryColor').value = '#ff0000';
  document.querySelectorAll('#categoryIconOptions .icon-option').forEach(option => {
    option.classList.remove('selected');
  });
  
  document.getElementById('appName').value = '';
  document.getElementById('appUrl').value = '';
  document.getElementById('appCategory').value = categories[2].name; // Default to first non-system category
  document.querySelectorAll('#appIconOptions .icon-option').forEach(option => {
    option.classList.remove('selected');
  });
}

// Switch tabs in create modal
function switchTab(tabName) {
  // Update tab buttons
  tabBtns.forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Update tab contents
  tabContents.forEach(content => {
    if (content.id === `${tabName}Tab`) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

// Save new category
function saveNewCategory() {
  const name = document.getElementById('categoryName').value.trim();
  const color = document.getElementById('categoryColor').value;
  const selectedIcon = document.querySelector('#categoryIconOptions .icon-option.selected');

  if (!name) {
    alert('Please enter a category name');
    return;
  }

  // Check if category already exists
  if (categories.some(cat => cat.name === name)) {
    alert('Category already exists');
    return;
  }

  // Create new category
  const newCategory = {
    id: Date.now(),
    name,
    icon: selectedIcon ? selectedIcon.dataset.icon : 'fas fa-folder',
    color
  };

  // Add to user categories and save
  userCategories.push(newCategory);
  saveUserCategories();
  
  // Update categories array and re-render
  categories.push(newCategory);
  renderCategories();
  renderSidebarCategories();
  renderCategoryDropdown();
  
  hideCreateModal();
  showToast('Category added successfully');
}

// Save new app
function saveNewApp() {
  const name = document.getElementById('appName').value.trim();
  const url = document.getElementById('appUrl').value.trim();
  const category = document.getElementById('appCategory').value;
  const selectedIcon = document.querySelector('#appIconOptions .icon-option.selected');

  if (!name || !url) {
    alert('Please fill in all required fields');
    return;
  }

  // Validate URL
  if (!isValidUrl(url)) {
    alert('Please enter a valid URL (starting with http:// or https://)');
    return;
  }

  // Create new app
  const newApp = {
    id: Date.now(), // Simple ID generation
    name,
    category,
    appWebsite: url,
    imageUrl: "",
    description: "Custom added app",
    favorite: false,
    lastUsed: null,
    icon: selectedIcon ? selectedIcon.dataset.icon : 'fas fa-globe'
  };

  // Add to user apps and save
  userApps.push(newApp);
  saveUserApps();
  
  // Update apps array and re-render
  apps.push(newApp);
  renderApps();
  renderCategories();
  renderSidebarCategories();
  renderRecentApps();
  
  hideCreateModal();
  showToast('App added successfully');
}

// Show edit profile modal
function showEditProfileModal() {
  editProfileModal.classList.add('active');
  hideProfileDropdown();
  hideSidebar();
}

// Hide edit profile modal
function hideEditProfileModal() {
  editProfileModal.classList.remove('active');
}

// Save profile changes
function saveProfileChanges() {
  const name = userName.value.trim();
  const selectedAvatar = document.querySelector('.avatar-option.selected');
  
  if (!name) {
    alert('Please enter your name');
    return;
  }
  
  userProfile.name = name;
  
  // Handle avatar
  if (selectedAvatar) {
    userProfile.avatar = selectedAvatar.dataset.avatar;
  }
  
  saveUserProfile();
  updateProfileUI();
  hideEditProfileModal();
  hideProfileDropdown();
  showToast('Profile updated successfully');
}

// Show category context menu
function showCategoryContextMenu(e, categoryId) {
  selectedCategoryId = categoryId;
  
  // Position the context menu
  const rect = e.target.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const menuWidth = 200;
  const menuHeight = 150;
  
  let left = e.clientX;
  let top = e.clientY;
  
  // Adjust position if context menu would go out of viewport
  if (left + menuWidth > viewportWidth) {
    left = viewportWidth - menuWidth - 10;
  }
  
  if (top + menuHeight > viewportHeight) {
    top = viewportHeight - menuHeight - 10;
  }
  
  categoryContextMenu.style.top = `${top}px`;
  categoryContextMenu.style.left = `${left}px`;
  
  // Show the context menu
  categoryContextMenu.classList.add('show');
  
  // Close context menu when clicking elsewhere
  document.addEventListener('click', closeCategoryContextMenu);
}

// Close category context menu
function closeCategoryContextMenu() {
  categoryContextMenu.classList.remove('show');
  document.removeEventListener('click', closeCategoryContextMenu);
}

// Show app context menu
function showAppContextMenu(e, appId) {
  selectedAppId = appId;
  
  // Position the context menu
  const rect = e.target.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const menuWidth = 200;
  const menuHeight = 150;
  
  let left = e.clientX;
  let top = e.clientY;
  
  // Adjust position if context menu would go out of viewport
  if (left + menuWidth > viewportWidth) {
    left = viewportWidth - menuWidth - 10;
  }
  
  if (top + menuHeight > viewportHeight) {
    top = viewportHeight - menuHeight - 10;
  }
  
  appContextMenu.style.top = `${top}px`;
  appContextMenu.style.left = `${left}px`;
  
  // Update favorite button text based on current state
  const app = apps.find(a => a.id === appId);
  favoriteAppBtn.innerHTML = app.favorite ? 
    '<i class="fas fa-heart-broken"></i><span>Remove Favorite</span>' : 
    '<i class="fas fa-heart"></i><span>Add to Favorites</span>';
  
  // Show the context menu
  appContextMenu.classList.add('show');
  
  // Close context menu when clicking elsewhere
  document.addEventListener('click', closeAppContextMenu);
}

// Close app context menu
function closeAppContextMenu() {
  appContextMenu.classList.remove('show');
  document.removeEventListener('click', closeAppContextMenu);
}

// Show rename modal
function showRenameModal() {
  if (selectedCategoryId) {
    const category = categories.find(c => c.id === selectedCategoryId);
    if (category) {
      renameCategoryName.value = category.name;
      renameModal.classList.add('active');
      closeCategoryContextMenu();
    }
  }
}

// Hide rename modal
function hideRenameModal() {
  renameModal.classList.remove('active');
}

// Save rename
function saveRename() {
  const newName = renameCategoryName.value.trim();
  
  if (newName && selectedCategoryId) {
    const categoryIndex = categories.findIndex(c => c.id === selectedCategoryId);
    if (categoryIndex !== -1) {
      categories[categoryIndex].name = newName;
      renderCategories();
      renderSidebarCategories();
      hideRenameModal();
      showToast('Category renamed successfully');
    }
  }
}

// Show change icon modal
function showChangeIconModal() {
  if (selectedCategoryId) {
    const category = categories.find(c => c.id === selectedCategoryId);
    if (category) {
      // Select the current icon
      document.querySelectorAll('.icon-grid-option').forEach(option => {
        if (option.dataset.icon === category.icon) {
          option.classList.add('selected');
        } else {
          option.classList.remove('selected');
        }
      });
      
      changeIconModal.classList.add('active');
      closeCategoryContextMenu();
    }
  }
}

// Hide change icon modal
function hideChangeIconModal() {
  changeIconModal.classList.remove('active');
}

// Show change app icon modal
function showChangeAppIconModal() {
  if (selectedAppId) {
    const app = apps.find(a => a.id === selectedAppId);
    if (app) {
      // Select the current icon
      document.querySelectorAll('#appIconGrid .icon-grid-option').forEach(option => {
        if (option.dataset.icon === app.icon) {
          option.classList.add('selected');
        } else {
          option.classList.remove('selected');
        }
      });
      
      changeAppIconModal.classList.add('active');
      closeAppContextMenu();
    }
  }
}

// Hide change app icon modal
function hideChangeAppIconModal() {
  changeAppIconModal.classList.remove('active');
}

// Toggle sidebar
function toggleSidebar() {
  sidebar.classList.toggle('open');
  sidebarOverlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

// Hide sidebar
function hideSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Validate URL
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Show toast notification
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Toggle profile dropdown
function toggleProfileDropdown() {
  profileDropdown.classList.toggle('show');
  hideSidebar();
}

// Hide profile dropdown
function hideProfileDropdown() {
  profileDropdown.classList.remove('show');
}

// Toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('apphub-theme', isDarkMode ? 'dark' : 'light');
  themeSwitch.checked = isDarkMode;
  sidebarThemeSwitch.checked = isDarkMode;
}

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem('apphub-theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true;
    sidebarThemeSwitch.checked = true;
  }
}

// Handle search - COMPLETELY REWRITTEN
function handleSearch() {
  searchQuery = searchInput.value.trim();
  
  // Sync mobile search input
  mobileSearchInput.value = searchQuery;
  
  // Show/hide clear button based on search input
  if (searchQuery) {
    clearSearchBtn.classList.add('visible');
    mobileClearSearchBtn.classList.add('visible');
    
    // Show search results section
    hideAllSections();
    searchResultsSection.classList.add('active');
    searchResultsTitle.textContent = `Search Results for "${searchQuery}"`;
    
    // Render search results
    renderSearchResults();
  } else {
    clearSearchBtn.classList.remove('visible');
    mobileClearSearchBtn.classList.remove('visible');
    showHomePage();
  }
}

// Handle mobile search - COMPLETELY REWRITTEN
function handleMobileSearch() {
  searchQuery = mobileSearchInput.value.trim();
  
  // Sync desktop search input
  searchInput.value = searchQuery;
  
  // Show/hide clear button based on search input
  if (searchQuery) {
    clearSearchBtn.classList.add('visible');
    mobileClearSearchBtn.classList.add('visible');
    
    // Show search results section
    hideAllSections();
    searchResultsSection.classList.add('active');
    searchResultsTitle.textContent = `Search Results for "${searchQuery}"`;
    
    // Render search results
    renderSearchResults();
  } else {
    clearSearchBtn.classList.remove('visible');
    mobileClearSearchBtn.classList.remove('visible');
    showHomePage();
  }
}

// Clear search
function clearSearch() {
  searchInput.value = '';
  mobileSearchInput.value = '';
  searchQuery = '';
  clearSearchBtn.classList.remove('visible');
  mobileClearSearchBtn.classList.remove('visible');
  showHomePage();
}

// Set up event listeners - COMPLETELY REWRITTEN SEARCH PART
function setupEventListeners() {
  // Navigation
  createBtn.addEventListener('click', showCreateModal);
  
  // Sidebar navigation
  sidebarHomeBtn.addEventListener('click', showHomePage);
  sidebarRecentBtn.addEventListener('click', () => {
    showAppsByCategory('All');
    hideSidebar();
  });
  sidebarCategoriesBtn.addEventListener('click', () => {
    showHomePage();
    hideSidebar();
  });
  sidebarFavoritesBtn.addEventListener('click', () => {
    showFavorites();
    hideSidebar();
  });
  sidebarCreateBtn.addEventListener('click', showCreateModal);
  sidebarProfileBtn.addEventListener('click', showEditProfileModal);
  
  // Sidebar
  navMenuBtn.addEventListener('click', toggleSidebar);
  sidebarClose.addEventListener('click', hideSidebar);
  sidebarOverlay.addEventListener('click', hideSidebar);
  
  // Back buttons
  backToHome.addEventListener('click', showHomePage);
  backToHomeFavorites.addEventListener('click', showHomePage);
  backToHomeSearch.addEventListener('click', showHomePage);
  
  // View all recent apps
  viewAllRecent.addEventListener('click', () => {
    showAppsByCategory('All');
  });
  
  // Profile dropdown
  profileBtn.addEventListener('click', toggleProfileDropdown);
  
  // Close profile dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.remove('show');
    }
  });
  
  // Theme toggle
  themeSwitch.addEventListener('change', toggleTheme);
  sidebarThemeSwitch.addEventListener('change', toggleTheme);
  
  // Modals
  closeCreateModal.addEventListener('click', hideCreateModal);
  cancelAppBtn.addEventListener('click', hideCreateModal);
  cancelCategoryBtn.addEventListener('click', hideCreateModal);
  saveAppBtn.addEventListener('click', saveNewApp);
  saveCategoryBtn.addEventListener('click', saveNewCategory);
  
  editProfileBtn.addEventListener('click', showEditProfileModal);
  
  closeEditModal.addEventListener('click', hideEditProfileModal);
  cancelEditBtn.addEventListener('click', hideEditProfileModal);
  saveProfileBtn.addEventListener('click', saveProfileChanges);
  
  // SEARCH FUNCTIONALITY - COMPLETELY REWRITTEN
  // Desktop search
  searchInput.addEventListener('input', handleSearch);
  searchBtn.addEventListener('click', handleSearch);
  clearSearchBtn.addEventListener('click', clearSearch);
  
  // Mobile search
  mobileSearchInput.addEventListener('input', handleMobileSearch);
  mobileSearchBtn.addEventListener('click', handleMobileSearch);
  mobileClearSearchBtn.addEventListener('click', clearSearch);
  
  // Handle Enter key in search
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
  
  // Handle Enter key in mobile search
  mobileSearchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleMobileSearch();
    }
  });
  
  // Context menus
  deleteCategoryBtn.addEventListener('click', () => {
    deleteCategory(selectedCategoryId);
    closeCategoryContextMenu();
  });
  
  changeAppIconBtn.addEventListener('click', () => {
    showChangeAppIconModal();
    closeAppContextMenu();
  });
  
  favoriteAppBtn.addEventListener('click', () => {
    toggleFavorite(selectedAppId);
    closeAppContextMenu();
  });
  
  deleteAppBtn.addEventListener('click', () => {
    deleteApp(selectedAppId);
    closeAppContextMenu();
  });
  
  // Rename and change icon context menu items
  renameCategoryBtn.addEventListener('click', showRenameModal);
  changeIconBtn.addEventListener('click', showChangeIconModal);
  
  // Rename modal
  closeRenameModal.addEventListener('click', hideRenameModal);
  cancelRenameBtn.addEventListener('click', hideRenameModal);
  saveRenameBtn.addEventListener('click', saveRename);
  
  // Change icon modal
  closeIconModal.addEventListener('click', hideChangeIconModal);
  cancelIconBtn.addEventListener('click', hideChangeIconModal);
  
  // Change app icon modal
  closeAppIconModal.addEventListener('click', hideChangeAppIconModal);
  cancelAppIconBtn.addEventListener('click', hideChangeAppIconModal);
  
  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });
  
  // Close modals when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target === createModal) hideCreateModal();
    if (e.target === editProfileModal) hideEditProfileModal();
    if (e.target === renameModal) hideRenameModal();
    if (e.target === changeIconModal) hideChangeIconModal();
    if (e.target === changeAppIconModal) hideChangeAppIconModal();
  });
  
  // Close sidebar when clicking outside (for mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 768 && 
        !navMenuBtn.contains(e.target) && 
        !sidebar.contains(e.target) && 
        sidebar.classList.contains('open')) {
      hideSidebar();
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  init();
});