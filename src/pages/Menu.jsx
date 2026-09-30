import { useMemo, useState } from "react";
import "./Menu.scss";
import ZomatoButton from "../components/ZomatoButton";


const foodSections = [
  {
    id: "soups",
    number: "01",
    course: "A · To Begin",
    name: "Soups",
    subtitle: "Nine broths, clear to cream, drawn to order.",
    items: [
      {
        name: "Lemon Coriander Clear Soup",
        price: 155,
        description:
          "Clear vegetable broth with lemon, coriander and a hint of pepper",
      },
      {
        name: "Khowsuey Soup",
        price: 215,
        description:
          "Burmese-style coconut broth with noodles, crisp garnish and lime",
      },
      {
        name: "Sweet Corn Soup",
        price: 165,
        description:
          "Creamed sweet corn with vegetables and white pepper",
      },
      {
        name: "Hot & Sour Soup",
        price: 175,
        description:
          "Wok-hot broth with shredded vegetables, chilli and vinegar",
      },
      {
        name: "Manchow Soup",
        price: 185,
        description:
          "Garlic-forward broth with vegetables, topped with crisp fried noodles",
      },
      {
        name: "Cream of Tomato",
        price: 175,
        description:
          "Roasted tomato and basil, finished with cream and herb croutons",
      },
      {
        name: "Cream of Mushroom",
        price: 195,
        description:
          "Slow-cooked mushroom veloute with truffle oil and chives",
      },
      {
        name: "Roasted Tomato & Red Pepper Shorba",
        price: 185,
        description:
          "Charred tomato and pepper shorba with roasted cumin and cream",
      },
      {
        name: "Chef's Seasonal Soup",
        price: 175,
        description: "Seasonal vegetable soup, changed with the market",
      },
    ],
  },

  {
    id: "tandoor",
    number: "03",
    course: "A · To Begin",
    name: "Tandoor & Kebabs",
    subtitle: "Twenty-eight skewers on five mother marinades.",
    items: [
      {
        name: "Paneer Tikka",
        price: 275,
        description:
          "Char-grilled paneer with peppers, onion and classic tandoori marinade",
      },
      {
        name: "Hariyali Paneer Tikka",
        price: 295,
        description:
          "Paneer marinated with coriander, mint, green chilli and yoghurt",
      },
      {
        name: "Malai Paneer Tikka",
        price: 325,
        description:
          "Creamy paneer tikka with cardamom, cheese and mild spices",
      },
      {
        name: "Achari Paneer Tikka",
        price: 295,
        description: "Paneer in a tangy pickling-spice marinade",
      },
      {
        name: "Peri Peri Paneer Tikka",
        price: 305,
        description: "Paneer finished with a smoky peri-peri glaze",
      },
      {
        name: "Lasooni Paneer Tikka",
        price: 305,
        description:
          "Garlic-forward marinade with cream and white pepper",
      },
      {
        name: "Angara Paneer Tikka",
        price: 315,
        description:
          "Fiery red marinade, charred hard and finished with smoke",
      },
      {
        name: "Tandoori Stuffed Paneer",
        price: 345,
        description:
          "Paneer stuffed with spiced vegetables and cheese, rolled and char-finished",
      },
      {
        name: "Tandoori Soya Chaap",
        price: 245,
        description:
          "Soya chaap marinated in tandoori spices and charred in the clay oven",
      },
      {
        name: "Malai Chaap",
        price: 265,
        description:
          "Chaap in a rich cream, cheese and cardamom marinade",
      },
      {
        name: "Achari Chaap",
        price: 255,
        description: "Chaap in a tangy pickling-spice marinade",
      },
      {
        name: "Hariyali Chaap",
        price: 255,
        description: "Coriander, mint and green chilli marinade",
      },
      {
        name: "Masala Chaap",
        price: 255,
        description:
          "Robust onion-tomato masala coating, char-finished",
      },
      {
        name: "Afghani Chaap",
        price: 275,
        description:
          "White marinade of cashew, cream and white pepper",
      },
      {
        name: "Lasooni Chaap",
        price: 265,
        description:
          "Garlic and cream marinade with a charcoal finish",
      },
      {
        name: "Tandoori Mushroom",
        price: 225,
        description:
          "Whole mushrooms marinated in aromatic yoghurt and tandoori spices",
      },
      {
        name: "Tandoori Broccoli",
        price: 225,
        description:
          "Whole broccoli marinated and charred with smoky tandoori spices",
      },
      {
        name: "Tandoori Water Chestnut",
        price: 235,
        description:
          "Water chestnut skewered and charred with ajwain and chilli",
      },
      {
        name: "Charred Tandoori Pineapple",
        price: 205,
        description:
          "Fresh pineapple grilled in the tandoor with chilli and spice",
      },
      {
        name: "Tandoori Seasonal Vegetables",
        price: 205,
        description:
          "Seasonal vegetables marinated and roasted in the tandoor",
      },
      {
        name: "Tandoori Aloo Nazakat",
        price: 225,
        description:
          "Potato barrels stuffed with paneer, nuts and herbs",
      },
      {
        name: "Beetroot & Quinoa Shammi",
        price: 245,
        description:
          "Griddled beetroot and quinoa kebab with mint chutney",
      },
      {
        name: "Avocado & Edamame Galouti",
        price: 275,
        description:
          "Delicate avocado-edamame kebab with Indian spices and mint chutney",
      },
      {
        name: "Broccoli & Corn Kebab",
        price: 205,
        description:
          "Charred broccoli and sweet-corn kebabs with aromatic spices",
      },
      {
        name: "Peri Peri Cheese Kebab",
        price: 225,
        description:
          "Soft cheese and vegetable kebabs finished with peri-peri seasoning",
      },
      {
        name: "Masala Mascarpone Kebab",
        price: 295,
        description:
          "Creamy mascarpone and vegetable kebab with Indian spices",
      },
      {
        name: "Dahi Ke Sholay",
        price: 245,
        description:
          "Crisp hung-curd and cheese rolls with herbs and Indian spices",
      },
      {
        name: "Maple & Thyme Tandoori Platter",
        price: 795,
        description:
          "Signature selection of paneer, chaap, mushroom and seasonal kebabs",
      },
    ],
  },

  {
    id: "asian-small-plates",
    number: "04",
    course: "A · To Begin",
    name: "Asian Small Plates & Dumplings",
    subtitle: "Steamed, pan-fried and crisp. Twelve small plates.",
    items: [
      {
        name: "Vegetable Steamed Dim Sum",
        price: 215,
        description:
          "Classic steamed vegetable dumplings with chilli-soy dip",
      },
      {
        name: "Vegetable Pan-Fried Gyoza",
        price: 235,
        description:
          "Pan-seared vegetable dumplings with Asian dipping sauce",
      },
      {
        name: "Edamame & Truffle Dumplings",
        price: 315,
        description:
          "Delicate dumplings filled with edamame and truffle-seasoned vegetables",
      },
      {
        name: "Cheese Breast Dumpling",
        price: 245,
        description:
          "Steamed dumplings with a molten cheese centre and chilli-soy dip",
      },
      {
        name: "Chef's Dumpling Basket",
        price: 465,
        description:
          "Selection of four dumplings, steamed and pan-fried",
      },
      {
        name: "Crispy Chilli Lotus Stem",
        price: 225,
        description:
          "Crisp lotus stem tossed in a sweet-spicy chilli glaze",
      },
      {
        name: "Asian Chilli Mushroom",
        price: 245,
        description:
          "Wok-tossed mushrooms with chilli, garlic and Asian herbs",
      },
      {
        name: "Crispy Corn, Asian Chilli",
        price: 205,
        description:
          "Crispy corn with chilli, spring onion and Asian seasoning",
      },
      {
        name: "Chilli Potato",
        price: 225,
        description:
          "Crisp potato tossed in a hot garlic-chilli sauce with peppers and onion",
      },
      {
        name: "Honey Chilli Potato",
        price: 195,
        description:
          "Crisp potato batons in a honey, chilli and sesame glaze",
      },
      {
        name: "House Special Spring Roll",
        price: 205,
        description:
          "Crisp rolls filled with vegetables and glass noodles, with sweet chilli dip",
      },
      {
        name: "Crispy Chilli Baby Corn",
        price: 215,
        description:
          "Baby corn in a tangy chilli and garlic toss",
      },
    ],
  },

  {
    id: "continental-small-plates",
    number: "05",
    course: "A · To Begin",
    name: "Continental Small Plates",
    subtitle: "Garlic bread, nachos, bruschetta and bakes.",
    items: [
      {
        name: "Classic Garlic Bread",
        price: 125,
        description: "Wood-fired bread with garlic butter and herbs",
      },
      {
        name: "Cheese Garlic Bread",
        price: 165,
        description: "Garlic bread topped with molten mozzarella",
      },
      {
        name: "Chilli Cheese Garlic Bread",
        price: 175,
        description:
          "Garlic bread with cheese, jalapeno and chilli flakes",
      },
      {
        name: "Truffle Garlic Bread",
        price: 215,
        description:
          "Garlic bread finished with truffle oil and parmesan-style cheese",
      },
      {
        name: "Garlic Bread Sticks",
        price: 165,
        description: "Twisted garlic sticks with marinara dip",
      },
      {
        name: "Classic Cheese Nachos",
        price: 225,
        description:
          "Corn tortilla chips with cheese sauce, jalapeno and salsa",
      },
      {
        name: "Loaded Mexican Nachos",
        price: 275,
        description:
          "Nachos loaded with beans, salsa, sour cream and guacamole",
      },
      {
        name: "Peri Peri Nachos",
        price: 255,
        description:
          "Nachos with peri-peri seasoning, cheese and pickled onion",
      },
      {
        name: "Nacho Grande Platter",
        price: 375,
        description: "Sharing platter of nachos with four dips",
      },
      {
        name: "Classic Tomato Bruschetta",
        price: 205,
        description:
          "Toasted bread with tomato, basil, garlic and olive oil",
      },
      {
        name: "Al Funghi Bruschetta",
        price: 225,
        description:
          "Toasted bread with garlic mushrooms, herbs and cheese",
      },
      {
        name: "Avocado Bruschetta",
        price: 265,
        description:
          "Avocado, herbs, tomato and citrus on toasted sourdough",
      },
      {
        name: "Caponata Bruschetta",
        price: 225,
        description:
          "Sicilian-style aubergine relish with herbs on toasted bread",
      },
      {
        name: "Chef's Assorted Bruschetta",
        price: 295,
        description: "Selection of three signature bruschetta",
      },
      {
        name: "Baked Vegetables in White Sauce",
        price: 255,
        description:
          "Seasonal vegetables baked in herbed bechamel with cheese crust",
      },
      {
        name: "Baked Vegetables Au Gratin",
        price: 265,
        description:
          "Vegetables gratinated with cheese and golden breadcrumb",
      },
    ],
  },

  {
    id: "north-indian",
    number: "06",
    course: "B · Main Course",
    name: "North Indian Mains",
    subtitle:
      "Dal, paneer, Rajasthani and kofta. The core of the kitchen.",
    items: [
      {
        name: "Dal Tadka",
        price: 175,
        description:
          "Yellow lentils tempered with cumin, garlic and aromatic spices",
      },
      {
        name: "Dal Makhani",
        price: 225,
        description:
          "Slow-cooked black lentils finished with butter and cream",
      },
      {
        name: "Dal Dhaba",
        price: 245,
        description:
          "Rustic dhaba-style dal, slow-simmered and finished with a smoky ghee tempering",
      },
      {
        name: "Paneer Makhani",
        price: 295,
        description:
          "Soft paneer in a rich tomato, butter and cream gravy",
      },
      {
        name: "Paneer Lababdar",
        price: 295,
        description:
          "Paneer in a robust tomato-onion gravy with aromatic spices",
      },
      {
        name: "Paneer Tikka Masala",
        price: 315,
        description:
          "Tandoori paneer finished in a spiced tomato gravy",
      },
      {
        name: "Kadai Paneer",
        price: 295,
        description:
          "Paneer, peppers and onion in freshly ground kadai masala",
      },
      {
        name: "Gatta Masala",
        price: 225,
        description:
          "Besan gatta simmered in a spiced yoghurt and tomato gravy",
      },
      {
        name: "Ker Sangri",
        price: 265,
        description:
          "Desert beans and berries tempered with red chilli and ghee",
      },
      {
        name: "Subz Panchratna",
        price: 255,
        description:
          "Five seasonal vegetables in a rich aromatic gravy",
      },
      {
        name: "Vegetable Korma",
        price: 275,
        description:
          "Mixed vegetables in a mildly spiced creamy gravy",
      },
      {
        name: "Matar Mushroom Masala",
        price: 265,
        description:
          "Mushrooms and green peas in a roasted onion-tomato masala",
      },
      {
        name: "Bhindi Do Pyaza",
        price: 235,
        description:
          "Crisp okra cooked with onion and aromatic spices",
      },
      {
        name: "Aloo Gobhi",
        price: 215,
        description:
          "Potato and cauliflower with cumin, ginger and Indian spices",
      },
      {
        name: "Seasonal Subz",
        price: 245,
        description: "Chef's seasonal vegetable preparation",
      },
      {
        name: "Nargisi Vegetable Kofta",
        price: 305,
        description:
          "Stuffed vegetable kofta in a rich aromatic gravy",
      },
      {
        name: "Malai Kofta",
        price: 315,
        description:
          "Soft vegetable and cheese dumplings in creamy tomato gravy",
      },
      {
        name: "Dum Aloo",
        price: 245,
        description:
          "Baby potatoes cooked slowly in a rich Kashmiri-style gravy",
      },
      {
        name: "Maple & Thyme Signature Kofta",
        price: 335,
        description:
          "Contemporary vegetable kofta in the chef's signature gravy",
      },
      {
        name: "Chef's Seasonal Curry",
        price: 275,
        description:
          "Seasonal vegetable preparation based on market availability",
      },
    ],
  },

  {
    id: "asian-mains",
    number: "07",
    course: "B · Main Course",
    name: "Asian Mains & Thai Curries",
    subtitle: "One wok. Thai curries, noodles, rice and bowls.",
    items: [
      {
        name: "Thai Green Curry",
        price: 295,
        description:
          "Fragrant green curry with vegetables and coconut, with steamed rice",
      },
      {
        name: "Thai Red Curry",
        price: 295,
        description:
          "Rich red curry with vegetables, coconut and Thai basil, with steamed rice",
      },
      {
        name: "Asian Chilli Basil Noodles",
        price: 245,
        description:
          "Wok noodles with vegetables, chilli, basil and Asian sauces",
      },
      {
        name: "Hakka Vegetable Noodles",
        price: 225,
        description:
          "Classic wok-tossed noodles with vegetables and soy seasoning",
      },
      {
        name: "Burnt Garlic Noodles",
        price: 235,
        description:
          "Wok noodles with roasted garlic, vegetables and chilli",
      },
      {
        name: "Singapore Noodles",
        price: 245,
        description:
          "Rice noodles wok-tossed with curry spice, peppers and spring onion",
      },
      {
        name: "Vegetable Fried Rice",
        price: 205,
        description:
          "Wok-fried rice with vegetables and Asian seasoning",
      },
      {
        name: "Chilli Basil Fried Rice",
        price: 225,
        description:
          "Fried rice with basil, chilli and aromatic wok seasoning",
      },
      {
        name: "Burnt Garlic Fried Rice",
        price: 225,
        description:
          "Fried rice with roasted garlic, chilli and spring onion",
      },
      {
        name: "Asian Wok Vegetables",
        price: 245,
        description:
          "Seasonal vegetables tossed in signature Asian sauce",
      },
      {
        name: "Kung Pao Vegetables",
        price: 255,
        description:
          "Wok vegetables with dried chilli, peanut and Sichuan pepper",
      },
      {
        name: "Water Chestnut & Vegetable Stir Fry",
        price: 245,
        description:
          "Water chestnut, mushroom and greens in a light garlic sauce",
      },
      {
        name: "Chilli Paneer",
        price: 265,
        description:
          "Crisp paneer with peppers, onion and chilli-soy glaze",
      },
      {
        name: "Maple & Thyme Ramen",
        price: 345,
        description:
          "House ramen in a miso-shiitake broth with charred vegetables, corn and nori",
      },
      {
        name: "Vegetable Manchurian",
        price: 245,
        description:
          "Fried vegetable dumplings in a glossy garlic-soy Manchurian sauce",
      },
    ],
  },

  {
    id: "pizza",
    number: "08",
    course: "B · Main Course",
    name: "Wood-Fired Pizza",
    subtitle: "Thin crust, live fire, ninety seconds.",
    items: [
      {
        name: "Margherita",
        price: 345,
        description:
          "San Marzano-style tomato, mozzarella, basil and olive oil",
      },
      {
        name: "Garden Fresh",
        price: 365,
        description:
          "Seasonal vegetables, mozzarella, herbs and tomato sauce",
      },
      {
        name: "Ortolana",
        price: 385,
        description:
          "Roasted seasonal vegetables, herbs and mozzarella",
      },
      {
        name: "Roasted Zucchini",
        price: 385,
        description:
          "Charred zucchini, mozzarella, herbs and olive oil",
      },
      {
        name: "Sun-Dried Tomato & Olive",
        price: 405,
        description:
          "Sun-dried tomato, olives, mozzarella and herbs",
      },
      {
        name: "Pesto Burrata",
        price: 565,
        description:
          "Basil pesto, mozzarella, burrata and cherry tomatoes",
      },
      {
        name: "Quattro Formaggi",
        price: 525,
        description:
          "Four-cheese blend with herbs and extra-virgin olive oil",
      },
      {
        name: "Smoked Vegetables",
        price: 415,
        description:
          "Smoked seasonal vegetables, mozzarella and signature seasoning",
      },
      {
        name: "Gochujang Vegetable",
        price: 425,
        description:
          "Korean chilli paste, vegetables, mozzarella and sesame",
      },
      {
        name: "Truffle Mushroom",
        price: 545,
        description:
          "Mushroom, truffle cream, mozzarella and herbs",
      },
      {
        name: "Paneer Tikka Pizza",
        price: 425,
        description:
          "Tandoori paneer, onion, peppers, mozzarella and Indian spices",
      },
      {
        name: "Ker Sangri & Mozzarella",
        price: 425,
        description:
          "Desert beans and berries, red chilli, mozzarella and coriander",
      },
    ],
  },

  {
    id: "pasta",
    number: "09",
    course: "B · Main Course",
    name: "Pasta & Baked",
    subtitle:
      "Boiled to order, finished in the pan or under the salamander.",
    items: [
      {
        name: "Arrabbiata",
        price: 245,
        description: "Pasta in spicy tomato, garlic and herb sauce",
      },
      {
        name: "Aglio e Olio",
        price: 225,
        description: "Pasta with garlic, olive oil, chilli and parsley",
      },
      {
        name: "Mushroom Alfredo",
        price: 305,
        description:
          "Pasta with creamy mushroom and parmesan-style sauce",
      },
      {
        name: "Penne Pesto Cream",
        price: 295,
        description:
          "Penne in basil pesto cream with cherry tomato and pine nut",
      },
      {
        name: "Ravioli",
        price: 375,
        description:
          "Handmade-style filled pasta with chef's seasonal filling and sauce",
      },
      {
        name: "Lasagna",
        price: 375,
        description:
          "Layered pasta, vegetables, tomato sauce, bechamel and cheese",
      },
      {
        name: "Baked Pasta Au Gratin",
        price: 315,
        description:
          "Pasta baked in cheese sauce with a golden crumb crust",
      },
      {
        name: "Cheese Alfredo",
        price: 315,
        description:
          "Pasta in a three-cheese Alfredo cream with cracked pepper",
      },
    ],
  },

  {
    id: "sandwiches",
    number: "10",
    course: "B · Main Course",
    name: "Sandwiches, Panini & Burgers",
    subtitle: "Griddle, press and grill. Daypart food.",
    items: [
      {
        name: "Bombay Grilled Sandwich",
        price: 165,
        description:
          "Griddled sandwich with potato, chutney, vegetables and cheese",
      },
      {
        name: "Cheese Sandwich",
        price: 205,
        description:
          "Grilled artisan bread with cheese and house seasoning",
      },
      {
        name: "Club Sandwich",
        price: 265,
        description:
          "Layered grilled sandwich with vegetables, cheese and house sauce",
      },
      {
        name: "Paneer Tikka Sandwich",
        price: 255,
        description:
          "Tandoori paneer, mint mayo and onion in griddled bread",
      },
      {
        name: "Corn & Cheese Sandwich",
        price: 225,
        description:
          "Sweet corn, three cheeses and cracked pepper, grilled",
      },
      {
        name: "Chutney Cheese Toastie",
        price: 195,
        description:
          "Coriander chutney and molten cheese in crisp griddled bread",
      },
      {
        name: "Caprese Panini",
        price: 295,
        description:
          "Tomato, mozzarella, basil and pesto, pressed hot",
      },
      {
        name: "Grilled Vegetable & Pesto Panini",
        price: 285,
        description:
          "Charred vegetables, pesto and cheese in a pressed ciabatta",
      },
      {
        name: "Paneer Tikka Panini",
        price: 295,
        description:
          "Tandoori paneer, onion and mint mayo, pressed hot",
      },
      {
        name: "Mushroom & Cheese Panini",
        price: 285,
        description:
          "Garlic mushrooms and three cheeses in a pressed panini",
      },
      {
        name: "Peri Peri Paneer Panini",
        price: 295,
        description:
          "Peri-peri paneer, peppers and cheese, pressed hot",
      },
      {
        name: "Classic Veg Burger",
        price: 205,
        description:
          "Vegetable patty, lettuce, tomato and house sauce",
      },
      {
        name: "Peri Peri Paneer Burger",
        price: 295,
        description:
          "Grilled paneer, lettuce, cheese and peri-peri sauce",
      },
      {
        name: "Mexican Burger",
        price: 265,
        description:
          "Spiced vegetable patty, cheese, salsa and chipotle sauce",
      },
      {
        name: "Broccoli Burger",
        price: 255,
        description:
          "Broccoli and cheese patty with lettuce and house sauce",
      },
      {
        name: "Mushroom Slider",
        price: 245,
        description:
          "Mini toasted buns, smoky mushroom filling, cheese and house sauce",
      },
      {
        name: "Falafel Wrap",
        price: 245,
        description:
          "Crispy falafel, hummus, salad and tahini in flatbread",
      },
      {
        name: "Paneer Tikka Wrap",
        price: 255,
        description:
          "Tandoori paneer, onion, mint chutney and salad in flatbread",
      },
      {
        name: "Aloo Chaat Quesadilla",
        price: 225,
        description:
          "Spiced potato, cheese, salsa and chaat seasoning in crisp tortilla",
      },
    ],
  },

  {
    id: "rice",
    number: "11",
    course: "C · Accompaniments",
    name: "Rice & Biryani",
    subtitle: "Steamed, tempered and dum-cooked.",
    items: [
      {
        name: "Steamed Basmati Rice",
        price: 115,
        description: "Fragrant steamed basmati rice",
      },
      {
        name: "Jeera Rice",
        price: 135,
        description: "Basmati rice tempered with cumin and ghee",
      },
      {
        name: "Peas Pulao",
        price: 155,
        description:
          "Fragrant rice with green peas and whole spices",
      },
      {
        name: "Vegetable Biryani",
        price: 255,
        description:
          "Aromatic basmati, vegetables, herbs and biryani spices",
      },
      {
        name: "Paneer Biryani",
        price: 285,
        description:
          "Paneer, basmati rice and aromatic dum spices",
      },
      {
        name: "Signature Dum Biryani",
        price: 315,
        description:
          "Slow-cooked seasonal vegetables, saffron and aromatic spices",
      },
    ],
  },

  {
    id: "breads",
    number: "12",
    course: "C · Accompaniments",
    name: "Indian Breads",
    subtitle: "Straight from the tandoor wall to the basket.",
    items: [
      {
        name: "Tandoori Roti",
        price: 55,
        description: "Whole-wheat flatbread baked in the tandoor",
      },
      {
        name: "Butter Roti",
        price: 65,
        description: "Tandoori roti finished with butter",
      },
      {
        name: "Plain Naan",
        price: 75,
        description: "Soft refined-flour naan baked in the tandoor",
      },
      {
        name: "Butter Naan",
        price: 85,
        description: "Classic naan finished with butter",
      },
      {
        name: "Garlic Naan",
        price: 105,
        description: "Naan topped with garlic, coriander and butter",
      },
      {
        name: "Cheese Naan",
        price: 155,
        description: "Stuffed naan with melted cheese and herbs",
      },
      {
        name: "Paneer Kulcha",
        price: 145,
        description: "Stuffed paneer kulcha with spices and herbs",
      },
      {
        name: "Masala Kulcha",
        price: 125,
        description: "Potato and spice-filled kulcha",
      },
      {
        name: "Chef's Stuffed Kulcha",
        price: 155,
        description: "Seasonal signature stuffed kulcha",
      },
    ],
  },

  {
    id: "salads",
    number: "13",
    course: "C · Accompaniments",
    name: "Salads",
    subtitle: "Cold kitchen. Leaves, grains and burrata.",
    items: [
      {
        name: "Green Salad",
        price: 165,
        description:
          "Seasonal leaves, cucumber, tomato, onion and house vinaigrette",
      },
      {
        name: "Sprout & Corn Salad",
        price: 175,
        description:
          "Mixed sprouts, sweet corn, onion, lemon and coriander",
      },
      {
        name: "Greek Salad",
        price: 245,
        description:
          "Cucumber, tomato, olives, feta, peppers and herbs",
      },
      {
        name: "Caesar Salad",
        price: 265,
        description:
          "Romaine, garlic croutons, parmesan-style shavings and Caesar dressing",
      },
      {
        name: "Quinoa & Roasted Vegetable Salad",
        price: 315,
        description:
          "Quinoa, charred vegetables, seeds, herbs and lemon dressing",
      },
      {
        name: "Wood-Fire Salad",
        price: 265,
        description:
          "Charred seasonal vegetables, greens and signature dressing",
      },
      {
        name: "Watermelon & Feta",
        price: 245,
        description:
          "Fresh watermelon, feta, mint and balsamic dressing",
      },
      {
        name: "Mexican Salad",
        price: 245,
        description:
          "Beans, corn, lettuce, vegetables, salsa and Mexican dressing",
      },
      {
        name: "Burrata & Tomato",
        price: 395,
        description: "Burrata, heirloom tomato, basil and olive oil",
      },
    ],
  },

  {
    id: "sides",
    number: "14",
    course: "C · Accompaniments",
    name: "Raita, Sides & Accompaniments",
    subtitle: "Cooling sides, papad, chutneys and fries.",
    items: [
      {
        name: "Boondi Raita",
        price: 105,
        description: "Chilled yoghurt with boondi and mild spices",
      },
      {
        name: "Cucumber Mint Raita",
        price: 105,
        description:
          "Cooling yoghurt with cucumber and fresh mint",
      },
      {
        name: "Mixed Vegetable Raita",
        price: 115,
        description:
          "Yoghurt with cucumber, tomato, onion and roasted cumin",
      },
      {
        name: "Pineapple Raita",
        price: 125,
        description: "Yoghurt with pineapple, spices and herbs",
      },
      {
        name: "Indian Kachumber",
        price: 85,
        description:
          "Fresh onion, tomato, cucumber, lemon and coriander",
      },
      {
        name: "Masala Papad",
        price: 95,
        description:
          "Roasted papad topped with onion, tomato and chaat masala",
      },
      {
        name: "Papad & Chutney Board",
        price: 115,
        description: "Crisp papad assortment with house chutneys",
      },
      {
        name: "French Fries / Peri Peri Fries",
        price: 145,
        description:
          "Crisp fries, plain or tossed in peri-peri seasoning",
      },
    ],
  },

  {
    id: "desserts",
    number: "15",
    course: "D · Desserts",
    name: "Desserts",
    subtitle: "Finished in-house, always.",
    items: [
      {
        name: "Classic Tiramisu",
        price: 265,
        description:
          "Coffee-soaked layers with mascarpone cream and cocoa",
      },
      {
        name: "Panna Cotta",
        price: 255,
        description:
          "Silky Italian cream dessert with seasonal fruit",
      },
      {
        name: "Sizzling Brownie",
        price: 265,
        description:
          "Warm chocolate brownie with vanilla ice cream and sauce",
      },
      {
        name: "Cannoli",
        price: 265,
        description:
          "Crisp pastry shell filled with sweet ricotta-style cream",
      },
      {
        name: "Cheesecake",
        price: 295,
        description: "Creamy baked cheesecake with seasonal topping",
      },
      {
        name: "Chocolate Signature",
        price: 315,
        description:
          "Premium chocolate dessert created for Maple & Thyme",
      },
      {
        name: "Seasonal Fruit Dessert",
        price: 255,
        description: "Seasonal fruit-led contemporary dessert",
      },
      {
        name: "Indian-Inspired Dessert",
        price: 265,
        description:
          "Contemporary interpretation of a familiar Indian sweet",
      },
    ],
  },
];

const beverageSections = [
  {
    id: "indian-coolers",
    number: "16",
    course: "E · Beverages",
    name: "Shikanji & Indian Coolers",
    subtitle: "Indian coolers, churned to order.",
    items: [
      {
        name: "Classic Masala Shikanji",
        price: 95,
        description:
          "Lemon, black salt, roasted cumin and mint",
      },
      {
        name: "Mint Shikanji",
        price: 105,
        description:
          "Fresh mint, lemon and green chilli, served long",
      },
      {
        name: "Jaljeera Shikanji",
        price: 95,
        description: "Cumin, tamarind, mint and black salt",
      },
      {
        name: "Kala Khatta Shikanji",
        price: 115,
        description:
          "Kala khatta, lemon and black salt over crushed ice",
      },
      {
        name: "Rose Shikanji",
        price: 115,
        description: "Rose, lemon and cardamom with soda",
      },
      {
        name: "Aam Panna",
        price: 125,
        description:
          "Raw mango, roasted cumin, mint and black salt",
      },
      {
        name: "Chaas",
        price: 85,
        description:
          "Salted buttermilk with cumin, ginger and curry leaf",
      },
      {
        name: "Lassi",
        price: 145,
        description:
          "Sweet, salted or masala, churned thick",
      },
    ],
  },

  {
    id: "mocktails",
    number: "17",
    course: "E · Beverages",
    name: "Mocktails",
    subtitle: "Ten mocktails, built at the bar.",
    items: [
      {
        name: "Fresh Lime Soda",
        price: 105,
        description:
          "Sweet, salted or mixed, freshly churned",
      },
      {
        name: "Virgin Mojito",
        price: 195,
        description: "Lime, mint and soda over crushed ice",
      },
      {
        name: "Strawberry Mojito",
        price: 215,
        description: "Strawberry, lime, mint and soda",
      },
      {
        name: "Watermelon Basilato",
        price: 225,
        description:
          "Watermelon, basil, lime and a hint of black salt",
      },
      {
        name: "Green Sangria",
        price: 235,
        description:
          "Green apple, kiwi, citrus and sparkling soda",
      },
      {
        name: "Chilli Watermelon",
        price: 215,
        description: "Watermelon, green chilli, lime and salt",
      },
      {
        name: "Spicy Plum",
        price: 225,
        description: "Plum, tamarind, chilli and citrus",
      },
      {
        name: "Guava Blossom",
        price: 215,
        description:
          "Guava, lime and chilli-salt, shaken and served long",
      },
      {
        name: "Tropical Kiwi",
        price: 225,
        description:
          "Kiwi, pineapple and mint over crushed ice",
      },
      {
        name: "Summer Time",
        price: 205,
        description: "Seasonal fruit, citrus and herb cooler",
      },
    ],
  },

  {
    id: "tea-shakes",
    number: "18",
    course: "E · Beverages",
    name: "Iced Tea, Bubble Tea & Shakes",
    subtitle: "Brewed, blended and pearled.",
    items: [
      {
        name: "Lemon Iced Tea",
        price: 155,
        description:
          "Brewed black tea, lemon and cane sugar",
      },
      {
        name: "Peach Iced Tea",
        price: 165,
        description:
          "Brewed black tea with peach and lemon",
      },
      {
        name: "Watermelon Iced Tea",
        price: 175,
        description:
          "Brewed tea with fresh watermelon and mint",
      },
      {
        name: "Hibiscus Iced Tea",
        price: 185,
        description:
          "Hibiscus infusion with citrus, served long",
      },
      {
        name: "Japanese Matcha Bubble Tea",
        price: 245,
        description: "Matcha, milk and tapioca pearls",
      },
      {
        name: "Bubblegum Strawberry",
        price: 205,
        description:
          "Strawberry milk tea with tapioca pearls",
      },
      {
        name: "Bubblegum Chocolate",
        price: 205,
        description:
          "Chocolate milk tea with tapioca pearls",
      },
      {
        name: "Coco Chocolate",
        price: 225,
        description: "Thick chocolate shake with cocoa crumb",
      },
      {
        name: "Coco Oreo",
        price: 245,
        description:
          "Cookies and cream shake, blended thick",
      },
      {
        name: "Tiramisu Shake",
        price: 275,
        description:
          "Coffee, mascarpone and cocoa, blended",
      },
      {
        name: "Brownie Bomb",
        price: 255,
        description:
          "Brownie, chocolate and vanilla ice cream",
      },
      {
        name: "Red Velvet",
        price: 245,
        description:
          "Red velvet cake, cream cheese and milk",
      },
      {
        name: "Peanut Butter Shake",
        price: 235,
        description: "Peanut butter, banana and milk",
      },
    ],
  },

  {
    id: "cold-coffee",
    number: "19",
    course: "E · Beverages",
    name: "Cold Coffee, Frappe & Cold Matcha",
    subtitle: "Espresso bar, cold side.",
    items: [
      {
        name: "Iced Americano",
        price: 145,
        description: "Double espresso over ice",
      },
      {
        name: "Iced Latte",
        price: 165,
        description: "Espresso, chilled milk and ice",
      },
      {
        name: "Classic Cold Coffee",
        price: 175,
        description: "Blended coffee, milk and sugar",
      },
      {
        name: "Cold Coffee with Ice Cream",
        price: 215,
        description:
          "Blended cold coffee topped with vanilla ice cream",
      },
      {
        name: "Iced Mocha",
        price: 195,
        description:
          "Espresso, chocolate and chilled milk",
      },
      {
        name: "Iced Hazelnut Latte",
        price: 205,
        description: "Espresso, hazelnut and chilled milk",
      },
      {
        name: "Iced Caramel Latte",
        price: 205,
        description:
          "Espresso, salted caramel and chilled milk",
      },
      {
        name: "Blue Americano",
        price: 185,
        description:
          "Butterfly pea, citrus and espresso, layered",
      },
      {
        name: "Tiramisu Cold Coffee",
        price: 225,
        description:
          "Cold coffee with mascarpone cream and cocoa",
      },
      {
        name: "Classic Coffee Frappe",
        price: 225,
        description:
          "Blended iced coffee with a whipped crown",
      },
      {
        name: "Chocolate Frappe",
        price: 235,
        description:
          "Blended chocolate and coffee with cream",
      },
      {
        name: "Caramel Frappe",
        price: 235,
        description:
          "Blended coffee with salted caramel and cream",
      },
      {
        name: "Iced Matcha Latte",
        price: 245,
        description:
          "Ceremonial-grade matcha over chilled milk",
      },
      {
        name: "Cold Matcha Frappe",
        price: 255,
        description:
          "Blended matcha, milk and ice with a whipped crown",
      },
      {
        name: "Matcha Coconut Cooler",
        price: 245,
        description:
          "Matcha whisked with coconut water and lime",
      },
      {
        name: "Strawberry Matcha Latte",
        price: 255,
        description: "Layered strawberry and iced matcha",
      },
    ],
  },

  {
    id: "hot-coffee",
    number: "20",
    course: "E · Beverages",
    name: "Hot Coffee & Espresso Bar",
    subtitle: "Espresso bar, hot side.",
    items: [
      {
        name: "Espresso",
        price: 115,
        description: "Single origin, extracted short",
      },
      {
        name: "Doppio",
        price: 135,
        description: "Double espresso",
      },
      {
        name: "Americano",
        price: 135,
        description: "Espresso lengthened with hot water",
      },
      {
        name: "Macchiato",
        price: 145,
        description: "Espresso marked with foamed milk",
      },
      {
        name: "Cappuccino",
        price: 155,
        description:
          "Espresso, steamed milk and a dense foam cap",
      },
      {
        name: "Latte",
        price: 165,
        description:
          "Espresso with steamed milk, lightly foamed",
      },
      {
        name: "Flat White",
        price: 165,
        description: "Double ristretto with microfoam",
      },
      {
        name: "Cafe Mocha",
        price: 185,
        description:
          "Espresso, chocolate and steamed milk",
      },
      {
        name: "Cinnamon Cappuccino",
        price: 175,
        description:
          "Cappuccino with cinnamon syrup and dusted bark",
      },
      {
        name: "Hazelnut Cappuccino",
        price: 185,
        description: "Cappuccino with roasted hazelnut",
      },
      {
        name: "Tiramisu Cappuccino",
        price: 215,
        description:
          "Cappuccino with mascarpone cream and cocoa",
      },
      {
        name: "Affogato",
        price: 225,
        description:
          "Vanilla ice cream drowned in hot espresso",
      },
      {
        name: "Hot Chocolate",
        price: 185,
        description:
          "Dark chocolate melted into steamed milk, finished with cocoa",
      },
      {
        name: "Hot Matcha Latte",
        price: 225,
        description: "Whisked matcha with steamed milk",
      },
      {
        name: "Turmeric Latte",
        price: 185,
        description:
          "Turmeric, black pepper, jaggery and steamed milk",
      },
    ],
  },

  {
    id: "tea",
    number: "21",
    course: "E · Beverages",
    name: "Tea",
    subtitle: "Indian milk tea and whole-leaf infusions.",
    items: [
      {
        name: "Masala Tea",
        price: 85,
        description: "Black tea brewed with milk and house masala",
      },
      {
        name: "Dhaba Tea",
        price: 95,
        description: "Slow-boiled strong milk tea",
      },
      {
        name: "Adrak Tea",
        price: 85,
        description: "Ginger-forward milk tea",
      },
      {
        name: "Elaichi Tea",
        price: 95,
        description: "Cardamom milk tea",
      },
      {
        name: "Rose Tea",
        price: 105,
        description: "Milk tea infused with rose",
      },
      {
        name: "Cinnamon Tea",
        price: 105,
        description: "Milk tea with cinnamon bark",
      },
      {
        name: "Green Tea",
        price: 115,
        description: "Whole-leaf green tea",
      },
      {
        name: "Mint Green Tea",
        price: 125,
        description: "Green tea with fresh mint",
      },
      {
        name: "Lemongrass & Tulsi",
        price: 125,
        description: "Lemongrass and holy basil infusion",
      },
      {
        name: "Rose Green Tea",
        price: 135,
        description: "Green tea with rose petals",
      },
      {
        name: "Hibiscus Flower Tea",
        price: 135,
        description: "Hibiscus and citrus infusion",
      },
      {
        name: "Blue Pea Tea",
        price: 145,
        description:
          "Butterfly pea flower tea with lemon",
      },
      {
        name: "Kashmiri Kahwa",
        price: 165,
        description:
          "Saffron, almond, cardamom and green tea",
      },
      {
        name: "Japanese Matcha",
        price: 215,
        description: "Ceremonial-grade matcha, whisked",
      },
    ],
  },

  {
    id: "packaged",
    number: "22",
    course: "E · Beverages",
    name: "Packaged Drinks",
    subtitle: "Bought-in goods, sealed and shown.",
    items: [
      {
        name: "Packaged Drinking Water — 1 L",
        price: 60,
        description: "Sealed bottle",
      },
      {
        name: "Premium Mineral Water — 750 ml",
        price: 165,
        description: "Imported still water",
      },
      {
        name: "Soft Drink — 300 ml",
        price: 70,
        description: "Bottled carbonated soft drink",
      },
      {
        name: "Diet Soft Drink",
        price: 75,
        description: "Bottled no-sugar carbonated drink",
      },
      {
        name: "Canned Soda — Ginger Ale / Tonic",
        price: 125,
        description: "Bottled mixer",
      },
      {
        name: "Sparkling Water",
        price: 215,
        description: "Imported sparkling mineral water",
      },
      {
        name: "Energy Drink",
        price: 195,
        description: "Canned energy drink",
      },
    ],
  },
];

const menuData = {
  food: foodSections,
  beverages: beverageSections,
};

function getPriceRange(items) {
  const prices = items.map((item) => item.price);

  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}

export default function Menu() {
  const [menuType, setMenuType] = useState("food");
  const [activeSectionId, setActiveSectionId] = useState(
    foodSections[0].id,
  );

  const sections = menuData[menuType];

  const activeSection = useMemo(
    () =>
      sections.find((section) => section.id === activeSectionId) ??
      sections[0],
    [activeSectionId, sections],
  );

  const priceRange = getPriceRange(activeSection.items);

  const changeMenuType = (type) => {
    setMenuType(type);
    setActiveSectionId(menuData[type][0].id);
  };

  return (
    <main>

      <section
        className="mt-full-menu"
        aria-labelledby="full-menu-title"
      >
        <div className="mt-full-menu__inner">
          <div className="mt-full-menu__switcher">
            <div
              className="mt-full-menu__tabs"
              role="tablist"
              aria-label="Menu type"
            >
              <button
                type="button"
                role="tab"
                aria-selected={menuType === "food"}
                className={menuType === "food" ? "is-active" : ""}
                onClick={() => changeMenuType("food")}
              >
                Food Menu
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={menuType === "beverages"}
                className={
                  menuType === "beverages" ? "is-active" : ""
                }
                onClick={() => changeMenuType("beverages")}
              >
                Beverages
              </button>
            </div>

            <div className="mt-full-menu__summary">
              <span>262 dishes</span>
              <span>21 sections</span>
              <span>Pure vegetarian</span>
            </div>
          </div>

          <div className="mt-full-menu__categories">
            {sections.map((section) => (
              <button
                type="button"
                key={section.id}
                className={
                  activeSection.id === section.id
                    ? "is-active"
                    : ""
                }
                onClick={() => setActiveSectionId(section.id)}
              >
                <span>{section.name}</span>
                <small>
                  {String(section.items.length).padStart(2, "0")}
                </small>
              </button>
            ))}
          </div>

          <div
            key={`${menuType}-${activeSection.id}`}
            className="mt-full-menu__content"
            aria-live="polite"
          >
            <aside className="mt-full-menu__index">
              <strong>{activeSection.number}</strong>
              <span>
                {menuType === "food" ? "Food" : "Beverages"}
              </span>
            </aside>

            <div className="mt-full-menu__main">
              <header className="mt-full-menu__heading">
                <div>
                  <p className="mt-full-menu__course">
                    {activeSection.course}
                  </p>

                  <h2 id="full-menu-title">
                    {activeSection.name}
                  </h2>

                  <p className="mt-full-menu__subtitle">
                    {activeSection.subtitle}
                  </p>
                </div>

                <div className="mt-full-menu__stats">
                  <div>
                    <strong>
                      {String(activeSection.items.length).padStart(
                        2,
                        "0",
                      )}
                    </strong>
                    <span>items</span>
                  </div>

                  <div>
                    <strong>
                      ₹{priceRange.min}–₹{priceRange.max}
                    </strong>
                    <span>price range</span>
                  </div>
                </div>
              </header>

              <div className="mt-full-menu__items">
                {activeSection.items.map((item, index) => (
                  <article
                    key={`${activeSection.id}-${item.name}`}
                    className="mt-full-menu__item"
                  >
                    <span className="mt-full-menu__item-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mt-full-menu__item-content">
                      <div className="mt-full-menu__item-row">
                        <span
                          className="mt-full-menu__dot"
                          aria-hidden="true"
                        />

                        <h3>{item.name}</h3>

                        <span
                          className="mt-full-menu__leader"
                          aria-hidden="true"
                        />

                        <strong>₹{item.price}</strong>
                      </div>

                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <footer className="mt-full-menu__footer">
                <p>
                  All prices are in Indian rupees and before
                  applicable tax.
                </p>

                <p>
                  Pure vegetarian kitchen. Please inform your server
                  of any allergy before ordering.
                </p>
              </footer>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-order">
        <div className="menu-order__inner">
          <p className="menu-order__eyebrow">ORDER ONLINE</p>

          <h2>
            Your favourites,
            <br />
            delivered.
          </h2>

          <p className="menu-order__text">
            Enjoy Maple & Thyme wherever you are.
            Order directly through Zomato.
          </p>

          <ZomatoButton />
        </div>
      </section>
    </main>
  );
}