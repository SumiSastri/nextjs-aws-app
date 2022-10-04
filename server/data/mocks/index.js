// create relationships -> DATA-GRAPH: Users have hobbies and posts related to their hobbies 
// the graph connects with userId (one to many entity relationship)
const usersData = [
  { id: "63359fbf0c157e6991ef686f", name: "Janaki", profession: "Butcher", phoneNumber: 123, email: "janaki@email.com", age: 11, createdAt: Date.now() },
  { id: "6335a0740c157e6991ef6871", name: "Jyostna", profession: "Baker", phoneNumber: 456, email: "jyotsna@email.com", age: 22, createdAt: Date.now() },
  { id: "6335a0db0c157e6991ef6875", name: "Jananani", profession: "Candlestick Maker", phoneNumber: 789, email: "janani@email.com", age: 31, createdAt: Date.now() },
  { id: "6335a1760c157e6991ef6877", name: "Jhanavi", profession: "Fish Monger", phoneNumber: 013, email: "jhanavi@email.com", age: 14, createdAt: Date.now() },
]
const hobbiesData = [
  { id: "6335a8fb3520f22306e1ab9d", title: "Cooking", description: "Barbecues and Grills", userId: "63359fbf0c157e6991ef686f", createdAt: Date.now() },
  { id: "6335a9183520f22306e1ab9f", title: "Baking", description: "Breads and sweets baking", userId: "6335a0740c157e6991ef6871", createdAt: Date.now(), },
  { id: "6335a94b3520f22306e1aba1", title: "Decorating", description: "Home decorations", userId: "6335a0db0c157e6991ef6875", createdAt: Date.now(), },
  { id: "6335a9753520f22306e1aba3", title: "Fishing", description: "Fresh water fly fishing", userId: "6335a1760c157e6991ef6877", createdAt: Date.now(), },
]
const postsData = [
  { id: "6335a3aac524cf67bc39ee25", post: "Lorem ipsum cooking 1.... ", comment: "Cooking barbeques and grills is fun and easy", description: "Cooking posts", userId: "6335a1760c157e6991ef6877", createdAt: Date.now(), },
  { id: "6335a3d7c524cf67bc39ee27", post: "Lorem ipsum cooking 5.... ", comment: "Cooking grilled meat is messy but healthy", description: "Cooking posts", userId: "6335a1760c157e6991ef6877", createdAt: Date.now(), },
  { id: "6335a3fbc524cf67bc39ee29", post: "Lorem ipsum cooking 6.... ", comment: "BBQs take too long!", description: "Cooking posts", userId: "6335a1760c157e6991ef6877", createdAt: Date.now(), },
  { id: "6335a57fdd9db8b1265ad101", post: "Lorem ipsum baking 2.... ", comment: "Baking bread and cakes smells great and tastes great", description: "Baking posts", userId: "6335a0740c157e6991ef6871", createdAt: Date.now(), },
  { id: "6335a561dd9db8b1265ad0ff", post: "Lorem ipsum baking 7.... ", comment: "Baking bread with a machine is easier!", description: "Baking posts", userId: "6335a0740c157e6991ef6871", createdAt: Date.now(), },
  { id: "6335a4cfdd9db8b1265ad0fd", post: "Lorem ipsum baking 8.... ", comment: "Cakes are best with lots of butter", description: "Baking posts", userId: "6335a0740c157e6991ef6871", createdAt: Date.now(), },
  { id: "6335a6494d35f03e1ad23c4d", post: "Lorem ipsum decorating 3.... ", comment: "Decorating with handmade craft is relaxing", description: "Decorating posts", userId: "63359fbf0c157e6991ef686f", createdAt: Date.now(), },
  { id: "6335a6494d35f03e1ad23c4d", post: "Lorem ipsum decorating 9.... ", comment: "Decorating candles with glitter can be dangerous", description: "Decorating posts", userId: "63359fbf0c157e6991ef686f", createdAt: Date.now(), },
  { id: "6335a6a34d35f03e1ad23c4f", post: "Lorem ipsum decorating 10.... ", comment: "Candle making is an art", description: "Decorating posts", userId: "6335a0db0c157e6991ef6875", createdAt: Date.now(), },
  { id: "6335a7be1c09ea88e5b742e2", post: "Lorem ipsum decorating 11.... ", comment: "Scented candles need good quantities of quality scent mixed", description: "Decorating posts", userId: "6335a0db0c157e6991ef6875", createdAt: Date.now(), },
  { id: "6335a855d8c92378691adf25", post: "Lorem ipsum fishing 4.... ", comment: "Fishing in fresh water is quiet and requires patience", description: "Fishing posts", userId: "6335a0db0c157e6991ef6875", createdAt: Date.now(), },
]