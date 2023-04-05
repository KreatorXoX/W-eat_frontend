export const menu: Menu = [
  {
    id: '11001',
    name: 'italian',
    products: [
      {
        id: '2',
        name: 'Spaghetti carbonara',
        description:
          'Spaghetti pasta that is tossed in a creamy sauce made with eggs, Parmesan cheese, and crispy pancetta or bacon.',
        ingridients: 'Eggs, Parmesan cheese, bacon, black pepper, garlic',
        price: 11,
        alergens: ['Eggs', 'Cheese', 'Pork'],
        category: 'italian',
        tag: 'popular'
      },
      {
        id: '3',
        name: 'Cologne-style Spaghetti Carbonara',
        description:
          'Spaghetti pasta that is tossed in a creamy sauce made with eggs, Parmesan cheese, and crispy pancetta, with the addition of German mustard.',
        ingridients:
          'Eggs, Parmesan cheese, bacon or pancetta, black pepper, garlic, German mustard',
        price: 11,
        alergens: ['Eggs', 'Cheese', 'Pork'],
        category: 'italian'
      }
    ],
    extras: [
      {
        id: '31',
        name: 'Sauces',
        paid: true,
        extraItems: [
          { id: '21', name: 'ketchup', price: 0.25 },
          { id: '22', name: 'mayo', price: 0.25 }
        ]
      },
      {
        id: '32',
        name: 'Drinks',
        paid: true,
        extraItems: [
          { id: '23', name: 'cola', price: 1.5 },
          { id: '24', name: 'fanta', price: 1.5 },
          { id: '25', name: 'sprite', price: 1.5 }
        ]
      },
      {
        id: '33',
        name: 'Free Sauces',
        paid: false,
        extraItems: [
          { id: '26', name: 'ketchup', price: 0 },
          { id: '27', name: 'mayo', price: 0 }
        ]
      }
    ]
  },
  {
    id: '11002',
    name: 'indian',
    products: [
      {
        id: '5',
        name: 'Chicken tikka masala',
        description:
          'Grilled chicken pieces that are served in a rich and creamy tomato-based curry sauce.',
        ingridients: 'Tomatoes, onion, garlic, ginger',
        price: 15,
        alergens: ['Dairy', 'Nuts'],
        category: 'indian',
        tag: 'popular'
      }
    ],
    extras: [
      {
        id: '31',
        name: 'Sauces',
        paid: true,
        extraItems: [
          { id: '21', name: 'ketchup', price: 0.25 },
          { id: '22', name: 'mayo', price: 0.25 }
        ]
      },
      {
        id: '32',
        name: 'Drinks',
        paid: true,
        extraItems: [
          { id: '23', name: 'cola', price: 1.5 },
          { id: '24', name: 'fanta', price: 1.5 },
          { id: '25', name: 'sprite', price: 1.5 }
        ]
      },
      {
        id: '33',
        name: 'Free Sauces',
        paid: false,
        extraItems: [
          { id: '26', name: 'ketchup', price: 0 },
          { id: '27', name: 'mayo', price: 0 }
        ]
      }
    ]
  },
  {
    id: '11003',
    name: 'tai',
    products: [
      {
        id: '7',
        name: 'Pad Thai',
        description:
          'Rice noodles that are stir-fried with shrimp, tofu, bean sprouts, scallions, and peanuts.',
        ingridients:
          'Shrimp, tofu, bean sprouts, scallions, peanuts, tamarind sauce, lime wedges.',
        price: 11,
        alergens: ['Peanuts', 'Shellfish', 'Soy'],
        category: 'tai'
      },
      {
        id: '11',
        name: 'Tom Yum Goong',
        description:
          'Rice noodles that are stir-fried with shrimp, tofu, bean sprouts, scallions, and peanuts.',
        ingridients:
          'Shrimp, tofu, bean sprouts, scallions, peanuts, tamarind sauce, lime wedges.',
        price: 11,
        alergens: ['Peanuts', 'Shellfish', 'Soy'],
        category: 'tai'
      }
    ],

    extras: [
      {
        id: '31',
        name: 'Sauces',
        paid: true,
        extraItems: [
          { id: '21', name: 'ketchup', price: 0.25 },
          { id: '22', name: 'mayo', price: 0.25 }
        ]
      },
      {
        id: '32',
        name: 'Drinks',
        paid: true,
        extraItems: [
          { id: '23', name: 'cola', price: 1.5 },
          { id: '24', name: 'fanta', price: 1.5 },
          { id: '25', name: 'sprite', price: 1.5 }
        ]
      },
      {
        id: '33',
        name: 'Free Sauces',
        paid: false,
        extraItems: [
          { id: '26', name: 'ketchup', price: 0 },
          { id: '27', name: 'mayo', price: 0 }
        ]
      }
    ]
  },
  {
    id: '11004',
    name: 'beef',
    products: [
      {
        id: '9',
        name: 'Beef wellington',
        description:
          'Beef chuck that is braised in red wine and beef broth with onions, carrots, and herbs such as thyme and bay leaves.',
        ingridients: 'Red wine, onions, carrots, garlic, butter',
        price: 8,
        alergens: ['Wheat', 'Dairy'],
        category: 'beef'
      },
      {
        id: '13',
        name: 'Beef bourguignon',
        description:
          'Beef chuck that is braised in red wine and beef broth with onions, carrots, and herbs such as thyme and bay leaves.',
        ingridients: 'Red wine, onions, carrots, garlic, butter',
        price: 8,
        alergens: ['Wheat', 'Dairy'],
        category: 'beef'
      }
    ],

    extras: [
      {
        id: '31',
        name: 'Sauces',
        paid: true,
        extraItems: [
          { id: '21', name: 'ketchup', price: 0.25 },
          { id: '22', name: 'mayo', price: 0.25 }
        ]
      },
      {
        id: '32',
        name: 'Drinks',
        paid: true,
        extraItems: [
          { id: '23', name: 'cola', price: 1.5 },
          { id: '24', name: 'fanta', price: 1.5 },
          { id: '25', name: 'sprite', price: 1.5 }
        ]
      },
      {
        id: '33',
        name: 'Free Sauces',
        paid: false,
        extraItems: [
          { id: '26', name: 'ketchup', price: 0 },
          { id: '27', name: 'mayo', price: 0 }
        ]
      }
    ]
  }
]
