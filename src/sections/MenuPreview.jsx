import { useMemo, useState } from "react";
import { Link } from "react-router";
import ZomatoButton from "../components/ZomatoButton";

import "./MenuPreview.scss";

const menuData = {
  food: [
    {
      id: "tandoor",
      number: "01",
      name: "Tandoor & Kebabs",
      count: 28,
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
          name: "Angara Paneer Tikka",
          price: 315,
          description:
            "Fiery red marinade, charred hard and finished with smoke",
        },
        {
          name: "Tandoori Mushroom",
          price: 225,
          description:
            "Whole mushrooms marinated in aromatic yoghurt and tandoori spices",
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
      id: "north-indian",
      number: "02",
      name: "North Indian Mains",
      count: 20,
      subtitle: "Dal, paneer, Rajasthani and kofta. The core of the kitchen.",
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
          name: "Paneer Makhani",
          price: 295,
          description: "Soft paneer in a rich tomato, butter and cream gravy",
        },
        {
          name: "Kadai Paneer",
          price: 295,
          description:
            "Paneer, peppers and onion in freshly ground kadai masala",
        },
        {
          name: "Ker Sangri",
          price: 265,
          description:
            "Desert beans and berries tempered with red chilli and ghee",
        },
        {
          name: "Maple & Thyme Signature Kofta",
          price: 335,
          description:
            "Contemporary vegetable kofta in the chef's signature gravy",
        },
      ],
    },

    {
      id: "asian",
      number: "03",
      name: "Asian",
      count: 15,
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
          description: "Rich red curry with vegetables, coconut and Thai basil",
        },
        {
          name: "Asian Chilli Basil Noodles",
          price: 245,
          description:
            "Wok noodles with vegetables, chilli, basil and Asian sauces",
        },
        {
          name: "Burnt Garlic Noodles",
          price: 235,
          description: "Wok noodles with roasted garlic, vegetables and chilli",
        },
        {
          name: "Chilli Paneer",
          price: 265,
          description: "Crisp paneer with peppers, onion and chilli-soy glaze",
        },
        {
          name: "Maple & Thyme Ramen",
          price: 345,
          description:
            "House ramen in a miso-shiitake broth with charred vegetables",
        },
      ],
    },

    {
      id: "pizza",
      number: "04",
      name: "Wood-Fired Pizza",
      count: 12,
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
          name: "Pesto Burrata",
          price: 565,
          description: "Basil pesto, mozzarella, burrata and cherry tomatoes",
        },
        {
          name: "Quattro Formaggi",
          price: 525,
          description:
            "Four-cheese blend with herbs and extra-virgin olive oil",
        },
        {
          name: "Truffle Mushroom",
          price: 545,
          description: "Mushroom, truffle cream, mozzarella and herbs",
        },
        {
          name: "Paneer Tikka Pizza",
          price: 425,
          description:
            "Tandoori paneer, onion, peppers, mozzarella and Indian spices",
        },
      ],
    },

    {
      id: "pasta",
      number: "05",
      name: "Pasta & Baked",
      count: 8,
      subtitle: "Boiled to order, finished in the pan or under the salamander.",
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
          description: "Pasta with creamy mushroom and parmesan-style sauce",
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
            "Handmade-style filled pasta with chef's seasonal filling",
        },
        {
          name: "Lasagna",
          price: 375,
          description:
            "Layered pasta, vegetables, tomato sauce, bechamel and cheese",
        },
      ],
    },

    {
      id: "desserts",
      number: "06",
      name: "Desserts",
      count: 8,
      subtitle: "Finished in-house, always.",
      items: [
        {
          name: "Classic Tiramisu",
          price: 265,
          description: "Coffee-soaked layers with mascarpone cream and cocoa",
        },
        {
          name: "Panna Cotta",
          price: 255,
          description: "Silky Italian cream dessert with seasonal fruit",
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
          description: "Premium chocolate dessert created for Maple & Thyme",
        },
      ],
    },
  ],

  beverages: [
    {
      id: "mocktails",
      number: "01",
      name: "Mocktails",
      count: 10,
      subtitle: "Ten mocktails, built at the bar.",
      items: [
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
          description: "Watermelon, basil, lime and a hint of black salt",
        },
        {
          name: "Green Sangria",
          price: 235,
          description: "Green apple, kiwi, citrus and sparkling soda",
        },
        {
          name: "Guava Blossom",
          price: 215,
          description: "Guava, lime and chilli-salt, shaken and served long",
        },
        {
          name: "Tropical Kiwi",
          price: 225,
          description: "Kiwi, pineapple and mint over crushed ice",
        },
      ],
    },

    {
      id: "cold-coffee",
      number: "02",
      name: "Cold Coffee",
      count: 16,
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
          name: "Iced Mocha",
          price: 195,
          description: "Espresso, chocolate and chilled milk",
        },
        {
          name: "Iced Hazelnut Latte",
          price: 205,
          description: "Espresso, hazelnut and chilled milk",
        },
        {
          name: "Tiramisu Cold Coffee",
          price: 225,
          description: "Cold coffee with mascarpone cream and cocoa",
        },
      ],
    },

    {
      id: "matcha",
      number: "03",
      name: "Matcha",
      count: 6,
      subtitle: "Whisked, iced and blended.",
      items: [
        {
          name: "Iced Matcha Latte",
          price: 245,
          description: "Ceremonial-grade matcha over chilled milk",
        },
        {
          name: "Cold Matcha Frappe",
          price: 255,
          description: "Blended matcha, milk and ice with a whipped crown",
        },
        {
          name: "Matcha Coconut Cooler",
          price: 245,
          description: "Matcha whisked with coconut water and lime",
        },
        {
          name: "Strawberry Matcha Latte",
          price: 255,
          description: "Layered strawberry and iced matcha",
        },
        {
          name: "Hot Matcha Latte",
          price: 225,
          description: "Whisked matcha with steamed milk",
        },
        {
          name: "Japanese Matcha",
          price: 215,
          description: "Ceremonial-grade matcha, whisked",
        },
      ],
    },

    {
      id: "hot-coffee",
      number: "04",
      name: "Hot Coffee",
      count: 15,
      subtitle: "Espresso bar, hot side.",
      items: [
        {
          name: "Espresso",
          price: 115,
          description: "Single origin, extracted short",
        },
        {
          name: "Americano",
          price: 135,
          description: "Espresso lengthened with hot water",
        },
        {
          name: "Cappuccino",
          price: 155,
          description: "Espresso, steamed milk and a dense foam cap",
        },
        {
          name: "Flat White",
          price: 165,
          description: "Double ristretto with microfoam",
        },
        {
          name: "Tiramisu Cappuccino",
          price: 215,
          description: "Cappuccino with mascarpone cream and cocoa",
        },
        {
          name: "Affogato",
          price: 225,
          description: "Vanilla ice cream drowned in hot espresso",
        },
      ],
    },

    {
      id: "tea",
      number: "05",
      name: "Tea",
      count: 14,
      subtitle: "Indian milk tea and whole-leaf infusions.",
      items: [
        {
          name: "Masala Tea",
          price: 85,
          description: "Black tea brewed with milk and house masala",
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
          name: "Mint Green Tea",
          price: 125,
          description: "Green tea with fresh mint",
        },
        {
          name: "Kashmiri Kahwa",
          price: 165,
          description: "Saffron, almond, cardamom and green tea",
        },
        {
          name: "Japanese Matcha",
          price: 215,
          description: "Ceremonial-grade matcha, whisked",
        },
      ],
    },
  ],
};

export default function MenuPreview() {
  const [menuType, setMenuType] = useState("food");
  const [activeId, setActiveId] = useState(menuData.food[0].id);

  const categories = menuData[menuType];

  const activeCategory = useMemo(
    () =>
      categories.find((category) => category.id === activeId) ?? categories[0],
    [activeId, categories],
  );

  const changeMenuType = (type) => {
    setMenuType(type);
    setActiveId(menuData[type][0].id);
  };

  return (
    <section className="mt-menu-preview" aria-labelledby="menu-preview-title">
      <div className="mt-menu-preview__inner">
        <div className="mt-menu-preview__topbar">
          <div
            className="mt-menu-preview__types"
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
              <span aria-hidden="true">♨</span>
              Food Menu
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={menuType === "beverages"}
              className={menuType === "beverages" ? "is-active" : ""}
              onClick={() => changeMenuType("beverages")}
            >
              <span aria-hidden="true">◯</span>
              Beverages
            </button>
          </div>

          <span className="mt-menu-preview__fresh">
            <i aria-hidden="true" />
            Prepared to order at Maple &amp; Thyme
          </span>
        </div>

        <div
          className="mt-menu-preview__categories"
          aria-label={`${menuType} categories`}
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={activeCategory.id === category.id ? "is-active" : ""}
              onClick={() => setActiveId(category.id)}
            >
              <span>{category.name}</span>
              <small>{String(category.count).padStart(2, "0")}</small>
            </button>
          ))}
        </div>

        <div
          key={`${menuType}-${activeCategory.id}`}
          className="mt-menu-preview__menu"
        >
          <div className="mt-menu-preview__section-index">
            <strong>{activeCategory.number}</strong>
            <span>{menuType === "food" ? "Food" : "Drinks"}</span>
          </div>

          <div className="mt-menu-preview__content">
            <div className="mt-menu-preview__heading">
              <div>
                <p>
                  {activeCategory.number}
                  <span>Selected highlights</span>
                </p>

                <h2 id="menu-preview-title">{activeCategory.name}</h2>

                <p className="mt-menu-preview__subtitle">
                  {activeCategory.subtitle}
                </p>
              </div>

              <div className="mt-menu-preview__count">
                <strong>{String(activeCategory.count).padStart(2, "0")}</strong>
                <span>items</span>
              </div>
            </div>

            <div className="mt-menu-preview__items">
              {activeCategory.items.map((item, index) => (
                <article className="mt-menu-preview__item" key={item.name}>
                  <span className="mt-menu-preview__item-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-menu-preview__item-copy">
                    <div className="mt-menu-preview__item-row">
                      <span className="mt-menu-preview__dot" />

                      <h3>{item.name}</h3>

                      <span
                        className="mt-menu-preview__line"
                        aria-hidden="true"
                      />

                      <strong>₹{item.price}</strong>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-menu-preview__footer">
              <p>Contemporary vegetarian dining · cooked to order</p>

              <div className="mt-menu-preview__actions">
                <Link to="/menu" className="mt-menu-preview__all">
                  <span>View full menu</span>
                  <span aria-hidden="true">↗</span>
                </Link>

                <ZomatoButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
