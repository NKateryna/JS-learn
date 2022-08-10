/**
 * 1. Написать функцию, которая рисует в консоли следующий рисунок:
 * /|/|/|/|/|/|/|/|
 * |/|/|/|/|/|/|/|/
 * /|/|/|/|/|/|/|/|
 * |/|/|/|/|/|/|/|/
 * /|/|/|/|/|/|/|/|
 * |/|/|/|/|/|/|/|/
 * /|/|/|/|/|/|/|/|
 * |/|/|/|/|/|/|/|/
 * /|/|/|/|/|/|/|/|
 * |/|/|/|/|/|/|/|/
 * /|/|/|/|/|/|/|/|
 * |/|/|/|/|/|/|/|/
 *
 * Количество рядов необходимо передавать аргументом, решить задачу желательно рекурсивно
 */
function art(width) {
  let result = "";

  if (width % 2 === 0) {
    result += "/|/|/|/|/|/|/|/|\n";
  }
  if (width % 2 !== 0) {
    result += "|/|/|/|/|/|/|/|/\n";
  }
  if (width === 1) {
    return result;
  }
  result += art(width - 1);
  return result;
}
console.log("1. Рисунок");
console.log(art(10));
console.log("\n");

/**
 * 2. Написать функцию, которая рекурсивно посчитает n-е число Фибоначчи
 * Число Фибоначчи - такое число, сумма которого равна сумме двух предыдущих
 * Первое и второе число равны 1, таким образом ряд Фибоначчи равен
 * 1 1 2 3 5 8 13 21 34 ....
 */
function fibo(num) {
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  let result = fibo(num - 2) + fibo(num - 1);
  return result;
}
console.log("2. Число Фибоначчи");
console.log(fibo(10));
console.log("\n");

const products = [
  {
    id: "72487577-571e-417f-bd4a-c6b1ef08d081",
    name: "Chinese Lemon Pork",
    price: 258.13,
    description: "User-friendly homogeneous support",
    count: 50,
  },
  {
    id: "f86aec22-d866-4c18-b3c6-97a31b8273b4",
    name: "Flour - So Mix Cake White",
    price: 178.8,
    description: "Grass-roots tangible firmware",
    count: 57,
  },
  {
    id: "600c58b7-ba49-411d-877d-98277e4996ab",
    name: "Pepsi - Diet, 355 Ml",
    price: 386.52,
    description: "Business-focused zero administration forecast",
    count: 41,
  },
  {
    id: "aac97a4c-bf76-4264-b571-266c19082c63",
    name: "Fish - Bones",
    price: 135.24,
    description: "Polarised multi-tasking implementation",
    count: 41,
  },
  {
    id: "359b3611-d5a0-4984-8036-4165e73f3ab2",
    name: "Stock - Beef, Brown",
    price: 134.89,
    description: "Multi-layered composite policy",
    count: 9,
  },
  {
    id: "4bbebfee-3f2d-4a84-b879-8b29f58ca1bc",
    name: "Mahi Mahi",
    price: 540.97,
    description: "Persistent high-level hierarchy",
    count: 97,
  },
  {
    id: "87ea4475-6f1f-445e-be23-cf8d67ad5d48",
    name: "Orange - Canned, Mandarin",
    price: 163.95,
    description: "Programmable 6th generation hierarchy",
    count: 98,
  },
  {
    id: "96fc9a18-cb81-4c12-b48e-ceb840b5f39b",
    name: "Fruit Mix - Light",
    price: 246.83,
    description: "De-engineered logistical pricing structure",
    count: 86,
  },
  {
    id: "d445747e-06f9-46ca-964d-6c5ebafaa372",
    name: "Dried Apple",
    price: 267.2,
    description: "Ameliorated bifurcated leverage",
    count: 94,
  },
  {
    id: "e885a60f-2059-4551-a725-8eaff0df0b9f",
    name: "Chocolate - Semi Sweet, Calets",
    price: 333.32,
    description: "User-friendly client-driven collaboration",
    count: 75,
  },
  {
    id: "370d04cf-79e2-4cce-ab0b-edb55582d938",
    name: "Beef - Outside, Round",
    price: 487.1,
    description: "Face to face clear-thinking Graphic Interface",
    count: 4,
  },
  {
    id: "ea91d305-f68a-4b14-aa0d-8e8c17e38232",
    name: "Lighter - Bbq",
    price: 124.05,
    description: "Public-key fresh-thinking solution",
    count: 53,
  },
  {
    id: "212f90f9-430d-4bd8-a532-5bf2d54f5a8c",
    name: "Oil - Safflower",
    price: 88.84,
    description: "Advanced coherent protocol",
    count: 63,
  },
  {
    id: "0d17d098-c731-437c-bf27-a748daf7d10e",
    name: "Sauce Tomato Pouch",
    price: 443.06,
    description: "Implemented zero tolerance portal",
    count: 45,
  },
  {
    id: "81dd138f-52f1-48f8-a1bc-674efa86f00a",
    name: "Cheese - Camembert",
    price: 488.62,
    description: "Centralized dynamic help-desk",
    count: 35,
  },
  {
    id: "526f5b35-5cc1-467e-abd8-a70094d112c2",
    name: "Wonton Wrappers",
    price: 205.37,
    description: "Assimilated upward-trending focus group",
    count: 80,
  },
  {
    id: "4a92a6be-4226-441f-9529-9de78e3df783",
    name: "Scallops 60/80 Iqf",
    price: 551.01,
    description: "Decentralized human-resource analyzer",
    count: 7,
  },
  {
    id: "4d90170d-1463-448b-aee2-7bb0bba76c33",
    name: "Sauce - Apple, Unsweetened",
    price: 184.06,
    description: "Function-based needs-based attitude",
    count: 70,
  },
  {
    id: "455e631d-ee46-48c4-9982-8db243150f65",
    name: "Baking Powder",
    price: 5.29,
    description: "Front-line systematic hub",
    count: 62,
  },
  {
    id: "4b56d75e-cb49-4fd2-87de-3e8bb1188dcb",
    name: "Passion Fruit",
    price: 576.6,
    description: "Organic background throughput",
    count: 37,
  },
  {
    id: "0e508904-bad8-4c59-a00f-eecf282d6f51",
    name: "Butter - Salted",
    price: 250.94,
    description: "Multi-tiered optimal artificial intelligence",
    count: 16,
  },
  {
    id: "2e648c83-5b0d-4bb3-a064-48cb5382580a",
    name: "Lid Tray - 16in Dome",
    price: 216.59,
    description: "Fully-configurable client-server installation",
    count: 7,
  },
  {
    id: "48b0d74c-781f-415d-8919-3c7ea77ad07e",
    name: "Flour - Fast / Rapid",
    price: 377.91,
    description: "Optional non-volatile data-warehouse",
    count: 81,
  },
  {
    id: "8a26dda2-1148-4762-a033-6424ad139f62",
    name: "Chambord Royal",
    price: 196.47,
    description: "Ergonomic intermediate productivity",
    count: 34,
  },
  {
    id: "8d9da990-e4fc-4fc0-9dbb-300a0e572e2e",
    name: "Breakfast Quesadillas",
    price: 135.07,
    description: "Diverse grid-enabled hierarchy",
    count: 73,
  },
  {
    id: "232de3d1-d37e-4e69-a64f-96c98cbeeaf8",
    name: "Persimmons",
    price: 566.3,
    description: "Profound upward-trending monitoring",
    count: 36,
  },
  {
    id: "3b97f018-cf9b-4ebb-8f45-4243587207d6",
    name: "Wine - Mas Chicet Rose, Vintage",
    price: 167.25,
    description: "Optional local knowledge user",
    count: 30,
  },
  {
    id: "2d021071-58dd-473b-9e75-8657d4237896",
    name: "Gelatine Powder",
    price: 310.94,
    description: "Right-sized foreground core",
    count: 38,
  },
  {
    id: "466cebae-ecb6-4078-8faa-8397defb2c85",
    name: "Garbage Bags - Clear",
    price: 358.88,
    description: "Synergized systemic intranet",
    count: 87,
  },
  {
    id: "a207adf9-56ee-4542-b015-0ac931cccce8",
    name: "Roe - White Fish",
    price: 593.0,
    description: "Customizable coherent infrastructure",
    count: 75,
  },
  {
    id: "f73d6a14-8dba-4ff8-ae3c-703579070f4e",
    name: "Soup - Campbells, Chix Gumbo",
    price: 536.02,
    description: "Configurable transitional circuit",
    count: 11,
  },
  {
    id: "97eec33a-5e56-45b8-8a8b-5496b361dcb0",
    name: "Sunflower Seed Raw",
    price: 499.86,
    description: "Multi-lateral clear-thinking infrastructure",
    count: 53,
  },
  {
    id: "715788a2-8b18-409e-92dd-2e2c7dd1950f",
    name: "Muffin Mix - Carrot",
    price: 393.09,
    description: "Organized contextually-based customer loyalty",
    count: 64,
  },
  {
    id: "1b07f247-9b65-4c20-ac55-99e645eff855",
    name: "Pork - Tenderloin, Fresh",
    price: 227.39,
    description: "Right-sized dedicated moderator",
    count: 77,
  },
  {
    id: "309f955a-5bd5-4252-8b28-fb51e4dc9332",
    name: "Flower - Commercial Spider",
    price: 529.77,
    description: "Ameliorated 5th generation emulation",
    count: 64,
  },
  {
    id: "a6b65681-3198-414f-a1e7-25ddba360b80",
    name: "Guava",
    price: 493.5,
    description: "Implemented interactive product",
    count: 88,
  },
  {
    id: "66647677-08a2-4b5a-a4e6-01d16a4dcad5",
    name: "Lamb - Sausage Casings",
    price: 561.71,
    description: "Distributed modular attitude",
    count: 83,
  },
  {
    id: "665e144a-f753-43e4-8c68-66a919f458ca",
    name: "Chocolate Eclairs",
    price: 225.09,
    description: "Proactive maximized success",
    count: 90,
  },
  {
    id: "f11066d5-190c-4469-8517-465bf77680dd",
    name: "Chocolate - Compound Coating",
    price: 429.03,
    description: "Compatible coherent middleware",
    count: 54,
  },
  {
    id: "fe20400f-2cfd-4421-af74-195df871e0c7",
    name: "Hot Choc Vending",
    price: 573.63,
    description: "Vision-oriented logistical interface",
    count: 17,
  },
  {
    id: "a6a33a93-54d7-4f42-a5d9-321d28a0e3a1",
    name: "Lettuce - Boston Bib",
    price: 575.03,
    description: "Customer-focused systemic synergy",
    count: 72,
  },
  {
    id: "07bb330e-b2ea-410c-a3ba-1eba49090b45",
    name: "Asparagus - Mexican",
    price: 234.28,
    description: "Synergistic radical parallelism",
    count: 63,
  },
  {
    id: "ab5195db-2724-43df-a141-31fea1e15814",
    name: "Container - Foam Dixie 12 Oz",
    price: 578.24,
    description: "Multi-lateral actuating process improvement",
    count: 28,
  },
  {
    id: "e76b1232-f671-4d32-832d-126def3e3695",
    name: "Sauce - Balsamic Viniagrette",
    price: 423.54,
    description: "Customizable holistic open system",
    count: 57,
  },
  {
    id: "4514a6ea-7dea-4436-9dbc-51dfe81aafc0",
    name: "Beef - Ox Tongue",
    price: 301.38,
    description: "Vision-oriented methodical paradigm",
    count: 41,
  },
  {
    id: "6d47b0d2-93ef-4ef2-91d9-81710f81e4c1",
    name: "Rum - Coconut, Malibu",
    price: 245.53,
    description: "Universal context-sensitive help-desk",
    count: 49,
  },
  {
    id: "c7ea0ca0-7763-41a9-9f11-99ccfde5fe57",
    name: "Beer - Rickards Red",
    price: 508.04,
    description: "Polarised discrete definition",
    count: 20,
  },
  {
    id: "357f9c81-be03-4376-a7ad-61fb65ae8d39",
    name: "Honey - Liquid",
    price: 443.52,
    description: "Fundamental web-enabled extranet",
    count: 6,
  },
  {
    id: "f2504ba1-8030-41bc-8a27-b9d1927d8d48",
    name: "Syrup - Monin, Amaretta",
    price: 398.7,
    description: "Sharable 4th generation architecture",
    count: 14,
  },
  {
    id: "510de4b2-1981-462f-81fb-31a46b493ed6",
    name: "Flower - Dish Garden",
    price: 247.33,
    description: "Cross-group 4th generation middleware",
    count: 32,
  },
  {
    id: "21da98b3-266c-4ea0-ab6e-489473cc922a",
    name: "Wine - Pinot Noir Latour",
    price: 225.38,
    description: "De-engineered multi-tasking approach",
    count: 16,
  },
  {
    id: "ddf2ee9d-54be-4259-909e-63b66c52186a",
    name: "Yogurt - Blueberry, 175 Gr",
    price: 401.27,
    description: "Vision-oriented tertiary process improvement",
    count: 87,
  },
  {
    id: "3eb6b2d3-b58f-434d-8ed3-f9ae11c7bf32",
    name: "Chicken - Leg, Boneless",
    price: 119.02,
    description: "Horizontal composite intranet",
    count: 50,
  },
  {
    id: "24c074ca-1be8-4ede-add7-a4ddd1a78815",
    name: "Lamb - Leg, Diced",
    price: 161.52,
    description: "Persistent even-keeled definition",
    count: 68,
  },
  {
    id: "662a1e42-4018-4da2-9751-dd4c419c77d7",
    name: "Bar Energy Chocchip",
    price: 413.41,
    description: "Mandatory static collaboration",
    count: 95,
  },
  {
    id: "826d354a-e801-4411-bff7-46fabfeb867e",
    name: "Sardines",
    price: 510.32,
    description: "Advanced even-keeled paradigm",
    count: 46,
  },
  {
    id: "6ff40110-7a05-4f1c-b7fc-6626432c67cc",
    name: "Wine - Ice Wine",
    price: 81.67,
    description: "Open-architected logistical adapter",
    count: 51,
  },
  {
    id: "85542530-0a29-4498-b7cc-37502edfa11a",
    name: "Flavouring - Rum",
    price: 320.51,
    description: "Expanded analyzing functionalities",
    count: 14,
  },
  {
    id: "eb6f5679-bff3-44ca-a55c-40b6b974841c",
    name: "Juice - Cranberry, 341 Ml",
    price: 85.04,
    description: "Expanded multi-state capacity",
    count: 44,
  },
  {
    id: "9d5e461a-8182-4b11-9401-18f98df8a416",
    name: "Vaccum Bag - 14x20",
    price: 363.43,
    description: "Implemented scalable functionalities",
    count: 97,
  },
  {
    id: "31b2d5c7-63a7-4d31-8d4c-d313ac5d21e7",
    name: "Syrup - Golden, Lyles",
    price: 256.17,
    description: "Implemented 4th generation data-warehouse",
    count: 14,
  },
  {
    id: "48adb6fd-9381-461c-86ef-4e1dc6dc8e33",
    name: "Berry Brulee",
    price: 118.01,
    description: "Realigned exuding installation",
    count: 45,
  },
  {
    id: "ba413a18-3ddf-48bc-8623-9960c748ef0a",
    name: "Bread - English Muffin",
    price: 289.93,
    description: "Implemented coherent ability",
    count: 49,
  },
  {
    id: "a13bc024-9cfc-472f-b482-de134ab96f7d",
    name: "Cake Circle, Paprus",
    price: 160.37,
    description: "User-friendly secondary architecture",
    count: 24,
  },
  {
    id: "ce42933c-0180-4314-bf27-96f35be59a00",
    name: "Bread - Roll, Soft White Round",
    price: 596.22,
    description: "Triple-buffered methodical extranet",
    count: 2,
  },
  {
    id: "40c36f2c-e432-46d8-9eca-8b151596b34d",
    name: "Bread - Ciabatta Buns",
    price: 479.32,
    description: "Re-engineered actuating approach",
    count: 84,
  },
  {
    id: "a525835d-b5a1-4a63-9289-1b8f7efa299a",
    name: "Sobe - Liz Blizz",
    price: 294.37,
    description: "Switchable 24 hour application",
    count: 42,
  },
  {
    id: "90219f9d-3756-47f8-ae35-a7d9748ee7d0",
    name: "Wine - Chablis 2003 Champs",
    price: 204.92,
    description: "Stand-alone national firmware",
    count: 81,
  },
  {
    id: "b92db34e-256c-4621-bed2-bb86f14b4d49",
    name: "Paper Cocktail Umberlla 80 - 180",
    price: 346.3,
    description: "Diverse 3rd generation project",
    count: 10,
  },
  {
    id: "bf2caa35-d554-4299-ab94-a7686575ccdd",
    name: "Beef Striploin Aaa",
    price: 224.8,
    description: "Configurable incremental hierarchy",
    count: 19,
  },
  {
    id: "ae46cacd-9972-4ea1-8bf9-22008eeff2e0",
    name: "Cheese - Goat",
    price: 447.86,
    description: "Horizontal global strategy",
    count: 42,
  },
  {
    id: "e6aa2c07-51f1-44f4-ac66-c79a65231b9c",
    name: "Butter - Unsalted",
    price: 214.6,
    description: "Down-sized client-server collaboration",
    count: 98,
  },
  {
    id: "50b9ff41-cdc2-4fdf-9f91-c62dd5200e54",
    name: "Bread - French Baquette",
    price: 202.54,
    description: "Devolved well-modulated database",
    count: 72,
  },
  {
    id: "f75e0813-b968-4d53-ad54-6cbf747a8e48",
    name: "Bread - English Muffin",
    price: 16.92,
    description: "Enterprise-wide coherent projection",
    count: 68,
  },
  {
    id: "8b113f7d-e637-4206-bb99-2c243740626d",
    name: "Pepsi - 600ml",
    price: 17.82,
    description: "Stand-alone 24 hour paradigm",
    count: 10,
  },
  {
    id: "6d1c175f-9876-4079-9a72-5729a66d7ae5",
    name: "Pepper - Paprika, Hungarian",
    price: 489.26,
    description: "Synergized 3rd generation local area network",
    count: 37,
  },
  {
    id: "e5b2ba1b-a4bb-4f39-b324-00702659fb21",
    name: "Cheese - Le Cheve Noir",
    price: 524.17,
    description: "Horizontal full-range access",
    count: 62,
  },
  {
    id: "367c2a84-784d-49a1-912f-26a1b0140ea3",
    name: "Spic And Span All Purpose",
    price: 567.52,
    description: "Diverse content-based pricing structure",
    count: 1,
  },
  {
    id: "868575e9-d280-4911-aeb4-14d106b58ead",
    name: "Extract - Lemon",
    price: 323.97,
    description: null,
    count: 70,
  },
  {
    id: "fb01fc8a-ed9f-4187-98d8-7ea763acdd99",
    name: "Cake - French Pear Tart",
    price: 378.5,
    description: "Universal multi-state paradigm",
    count: 52,
  },
  {
    id: "cbd866ec-259a-4dc8-b6d0-4222aaf936c0",
    name: "Pork - Shoulder",
    price: 441.07,
    description: "Synchronised explicit knowledge user",
    count: 59,
  },
  {
    id: "525d325e-757c-468b-ba0c-1effe79f9f25",
    name: "Cake - Lemon Chiffon",
    price: 592.05,
    description: "Reduced disintermediate initiative",
    count: 77,
  },
  {
    id: "6e75c4c2-9a3a-45c4-9657-0d7b072034a9",
    name: "Tomatoes - Vine Ripe, Yellow",
    price: 161.56,
    description: "Distributed bifurcated analyzer",
    count: 41,
  },
  {
    id: "2ebd4c5b-9a37-423a-8494-e79e041bfaca",
    name: "Orange Roughy 4/6 Oz",
    price: 72.67,
    description: "Quality-focused upward-trending knowledge base",
    count: 23,
  },
  {
    id: "e4f1a577-2b78-4207-9b84-86db4d7a75f8",
    name: "Beets - Mini Golden",
    price: 150.89,
    description: "Business-focused web-enabled capacity",
    count: 80,
  },
  {
    id: "b15e48de-950f-47a9-bf52-d3e07a5f2b83",
    name: "Soup - Campbells, Creamy",
    price: 468.32,
    description: "Grass-roots local open system",
    count: 1,
  },
  {
    id: "e1216fc2-ac52-4681-8791-dcb78e40f2a9",
    name: "Roe - White Fish",
    price: 49.53,
    description: "Devolved encompassing project",
    count: 62,
  },
  {
    id: "db22ad8f-53ef-43c5-bed2-f27b2ac97085",
    name: "Madeira",
    price: 172.68,
    description: "Organized even-keeled synergy",
    count: 31,
  },
  {
    id: "3c24ccff-66df-49cc-957b-300e90ebf19b",
    name: "Scotch - Queen Anne",
    price: 561.19,
    description: "Networked cohesive moderator",
    count: 76,
  },
  {
    id: "ca4bbf9a-3dfb-43ce-989e-bd568ffa0d97",
    name: "Ecolab - Hobart Upr Prewash Arm",
    price: 160.27,
    description: "Profound zero tolerance encoding",
    count: 33,
  },
  {
    id: "84e39ae7-46b2-4e04-b332-aeb768e1d78e",
    name: "Dish Towel",
    price: 444.77,
    description: "Streamlined maximized encryption",
    count: 46,
  },
  {
    id: "8a905472-b098-4bdc-804b-ba1e7bb86d2c",
    name: "Pork - Liver",
    price: 80.5,
    description: "Devolved bottom-line function",
    count: 48,
  },
  {
    id: "bad9eadb-30ed-4427-9da4-3a20ca9b7322",
    name: "Lamb - Leg, Bone In",
    price: 112.33,
    description: "Universal 24 hour initiative",
    count: 58,
  },
  {
    id: "cecd841c-efab-4863-80b3-51d9eb716050",
    name: "Bread - 10 Grain Parisian",
    price: 211.73,
    description: "User-centric multi-state model",
    count: 71,
  },
  {
    id: "9026b92d-8e31-440f-8fe2-f3432552e966",
    name: "Cocoa Powder - Natural",
    price: 2.69,
    description: "Implemented contextually-based structure",
    count: 40,
  },
  {
    id: "761f148d-f00e-4444-bd59-0f8e07dd76bb",
    name: "Raspberries - Frozen",
    price: 316.81,
    description: "Optional web-enabled service-desk",
    count: 65,
  },
  {
    id: "2a72fab8-2270-4b01-9e3e-cf9f5c8da160",
    name: "Mortadella",
    price: 309.57,
    description: "Vision-oriented radical migration",
    count: 6,
  },
  {
    id: "d52ef3e9-07b7-4d12-b922-448ec68d5aa6",
    name: "Chambord Royal",
    price: 105.09,
    description: "Re-contextualized client-server infrastructure",
    count: 69,
  },
  {
    id: "9841e793-e941-4eb2-bd3f-f0738ba3be6e",
    name: "Pernod",
    price: 165.45,
    description: "Down-sized cohesive forecast",
    count: 39,
  },
  {
    id: "0306c12a-921d-425d-a4f2-f20254fcc7ec",
    name: "Nantucket - Orange Mango Cktl",
    price: 255.34,
    description: "Proactive well-modulated throughput",
    count: 49,
  },
];

/**
 * 3. Написать функцию, которая найдёт самый дорогой товар в магазине
 */
function mostExpensive(array) {
  array.sort(function (a, b) {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return +1;
    }
    return 0;
  });
  return array[0];
}
console.log("3. Самый дорогой товар в магазине");
console.log(mostExpensive(products));
console.log("\n");

/**
 * 4. Написать функцию, которая посчитает стоимость всех товаров
 */

function sumOfPrices(array) {
  return array
    .reduce((sum, item) => {
      let amountInStock = item.price * item.count;
      sum += amountInStock;
      return sum;
    }, 0)
    .toFixed(2);
}
console.log("4. Стоимость всех товаров");
console.log(sumOfPrices(products));
console.log("\n");

/**
 * 5. Отсортировать товары по убыванию цены
 */
function SortingFromCheap(array) {
  array.sort(function (a, b) {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return +1;
    }
    return 0;
  });
  return array;
}

console.log("5. Товары по убыванию цены");
console.log(SortingFromCheap(products));
console.log("\n");

/**
 * 6. Найти товар без описания, вернуть его ID
 */
/*v1*/
function itemWithoutDescription(array) {
  return array.filter((element) => {
    return !element.description === true;
  });
}
/*v2*/
// function itemWithoutDescription(array) {
//   result = [];
//   array.forEach((element) => {
//     if (!element.description === true) {
//       result.push(element.id);
//     }
//   });
//   return result;
// }

console.log("6. Товар без описания");
console.log(itemWithoutDescription(products));
console.log("\n");

/**
 * 7. Отсортировать товары по убыванию цены
 */
/*v1*/
function totalCostInStock(array) {
  array.sort(function (a, b) {
    if (a.price * a.count > b.price * b.count) {
      return -1;
    }
    if (a.price * a.count < b.price * b.count) {
      return +1;
    }
    return 0;
  });

  return array;
}
/*v2*/
// function totalCostInStock(array) {
//   let result = [...array];
//   result.forEach((element) => {
//     element.warehousePrice = element.price * element.count;
//   });
//   result = result.sort(function (a, b) {
//     if (a.warehousePrice > b.warehousePrice) {
//       return -1;
//     }
//     if (a.warehousePrice < b.warehousePrice) {
//       return +1;
//     }
//     return 0;
//   });
//   result.forEach((element) => {
//     delete element.warehousePrice;
//   });
//   return result;
// }
console.log("7. Общая стоимость на складе");
console.log(totalCostInStock(products));
console.log("\n");

/**
 * 8. Написать функцию, которая будет возвращать список товаров выше указаной цены.
 * Возвращать товары в отсортированном порядке
 */
/* v1 */
function productAbovePrice(array, sum) {
  let lastItemNeeded;
  array.sort(function (a, b) {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return +1;
    }
    return 0;
  });
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > sum) {
      lastItemNeeded = i;
    }
    if (array[i].price <= sum) {
      break;
    }
  }
  return array.slice(0, lastItemNeeded);
}
/*v2*/
// function productAbovePrice(array, sum) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].price > sum) {
//       result.push(array[i]);
//     }
//   }
//   result.sort(function (a, b) {
//     if (a.price > b.price) {
//       return -1;
//     }
//     if (a.price < b.price) {
//       return +1;
//     }
//     return 0;
//   });
//   return result;
// }
/*v3*/
// function productAbovePrice(array, sum) {
//   let result = [];
//   array = array.sort(function (a, b) {
//     if (a.price > b.price) {
//       return -1;
//     }
//     if (a.price < b.price) {
//       return +1;
//     }
//     return 0;
//   });
//   array.forEach((element) => {
//     if (element.price >= sum) {
//       result.push(element);
//     }
//   });
//   return result;
// }
console.log("8. Товар выше заданной цены");
console.log(productAbovePrice(products, 570));
console.log("\n");

/**
 * 9. Написать функцию, которая посчитает максимальное, количество единиц товара, которое
 * Покупатель сможет себе позволить за определённую сумму.
 * Например, имея в кармане 100 виртуальной валюты, он сможет купить себе 10 палок колбасы стоимостью 10
 * каждая, но при этом он может купить 1000 конфет стоимостью 0.1 каждая.
 * Учитывать количество продуктов на складе, продукты вернуть массивом строк
 * В формате "название:количество - цена"
 */
function maximumGoods(array, sum) {
  let result = [];
  let quantityOfGoods;
  let i = 0;

  array = array.sort(function (a, b) {
    if (a.price > b.price) {
      return +1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  });

  while (sum > array[i].price && i < array.length) {
    quantityOfGoods = Math.floor(sum / array[i].price);
    if (quantityOfGoods > array[i].count) {
      quantityOfGoods = array[i].count;
    }
    sum = sum - quantityOfGoods * array[i].price;
    result.push(
      `Product// ${array[i].name}: ${quantityOfGoods} - ${array[i].price}`
    );
    i++;
  }

  result.push(`Rest of money ${sum.toFixed(2)}`);

  return result;
}

console.log("9. Максимальное количество товаров");
console.log(maximumGoods(products, 10000));
console.log("\n");
