// create relationships -> Users have hobbies and posts related to their hobbies -> this is the graph of the data
// who wrote the post what hobbies does the user have -> connect with userId (one to many entity relationship)
const usersData = [
  { id: "User1", name: "Janaki", profession: "Butcher", phoneNumber: 123, email: "janaki@email.com", age: 11, createdAt: Date.now() },
  { id: "User2", name: "Jyostna", profession: "Baker", phoneNumber: 456, email: "jyotsna@email.com", age: 22, createdAt: Date.now() },
  { id: "User3", name: "Jananani", profession: "Candlestick Maker", phoneNumber: 789, email: "janani@email.com", age: 31, createdAt: Date.now() },
  { id: "User4", name: "Jhanavi", profession: "Fish Monger", phoneNumber: 013, email: "jhanavi@email.com", age: 14, createdAt: Date.now() },
]

const hobbiesData = [
  { id: "Hobby1", title: "Cooking", description: "Barbecues and Grills", createdAt: Date.now(), userId: "User1" },
  { id: "Hobby2", title: "Baking", description: "Breads and sweets baking", createdAt: Date.now(), userId: "User2" },
  { id: "Hobby3", title: "Decorating", description: "Home decorations", createdAt: Date.now(), userId: "User3" },
  { id: "Hobby4", title: "Fishing", description: "Fresh water fly fishing", createdAt: Date.now(), userId: "User4" },
  { id: "Hobby5", title: "Decorating", description: "Home decorations", createdAt: Date.now(), userId: "User3" },
]

const postsData = [
  { id: "Post1", post: "Lorem ipsum cooking 1.... ", comment: "Cooking barbeques and grills is fun and easy", description: "Cooking posts", createdAt: Date.now(), userId: "User1" },
  { id: "Post5", post: "Lorem ipsum cooking 5.... ", comment: "Cooking grilled meat is messy but healthy", description: "Cooking posts", createdAt: Date.now(), userId: "User1" },
  { id: "Post6", post: "Lorem ipsum cooking 6.... ", comment: "BBQs take too long!", description: "Cooking posts", createdAt: Date.now(), userId: "User1" },
  { id: "Post2", post: "Lorem ipsum baking 2.... ", comment: "Baking bread and cakes smells great and tastes great", description: "Baking posts", createdAt: Date.now(), userId: "User2" },
  { id: "Post7", post: "Lorem ipsum baking 7.... ", comment: "Baking bread with a machine is easier!", description: "Baking posts", createdAt: Date.now(), userId: "User2" },
  { id: "Post8", post: "Lorem ipsum baking 8.... ", comment: "Cakes are best with lots of butter", description: "Baking posts", createdAt: Date.now(), userId: "User2" },
  { id: "Post3", post: "Lorem ipsum decorating 3.... ", comment: "Decorating with handmade craft is relaxing", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post9", post: "Lorem ipsum decorating 9.... ", comment: "Decorating candles with glitter can be dangerous", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post10", post: "Lorem ipsum decorating 10.... ", comment: "Candle making is an art", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post11", post: "Lorem ipsum decorating 11.... ", comment: "Scented candles need good quantities of quality scent mixed", description: "Decorating posts", createdAt: Date.now(), userId: "User3" },
  { id: "Post4", post: "Lorem ipsum fishing 4.... ", comment: "Fishing in fresh water is quiet and requires patience", description: "Fishing posts", createdAt: Date.now(), userId: "User4" },
]