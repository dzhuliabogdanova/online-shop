var breakfastItems=[ 
    {          
        "ProductID": 1,
        "ProductName": "Breakfast Burrito",
        "UnitPrice": "6.75€",
        "UnitsInStock": "19",
        "image": "bb",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    }, 
    {
        "ProductID": 2,
        "ProductName": "Sweet Potato and Kale Frittata",
        "UnitPrice": "5.50€",
        "UnitsInStock": "17",
        "image": "spkf",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {   
        "ProductID": 3,
        "ProductName": "Scrambled Egg Tacos",
        "UnitPrice": "3.39€",
        "UnitsInStock": "0",
        "image": "set",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 4,
        "ProductName": "Oatmeal",
        "UnitPrice": "2.20€",
        "UnitsInStock": "23",
        "image": "oatmeal",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 5,
        "ProductName": "Chilled Overnight chia",
        "UnitPrice": "2.50€",
        "UnitsInStock": "0",
        "image": "chia",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 6,
        "ProductName": "Spiced Plum and Quinoa muffins",
        "UnitPrice": "1.95€",
        "UnitsInStock": "98",
        "image": "spqm",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 7,
        "ProductName": "Tropical Smoothie Bowl",
        "UnitPrice": "4.59€",
        "UnitsInStock": "0",
        "image": "tsb",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 8,
        "ProductName": "Pumpkin-Cherry Cookies",
        "UnitPrice": "2.10€",
        "UnitsInStock": "0",
        "image": "cookies",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 9,
        "ProductName": "Quiche",
        "UnitPrice": "3.95€",
        "UnitsInStock": "10",
        "image": "quiche",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 10,
        "ProductName": "Granola",
        "UnitPrice": "6.50€",
        "UnitsInStock": "6",
        "image": "Granola",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 11,
        "ProductName": "Choco-Cherry Supercarb Bars",
        "UnitPrice": "2.95€",
        "UnitsInStock": "9",
        "image": "chocoBars",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
]

var lunchItems=[ 
    {          
        "ProductID": 1,
        "ProductName": "Supergreen Mushroom & Orzo Soup",
        "UnitPrice": "4.85€",
        "UnitsInStock": 25,
        "image": "mushroomSoup",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    }, 
    {
        "ProductID": 2,
        "ProductName": "Spinach and Gruyere Potato Casserole",
        "UnitPrice": "5.90€",
        "UnitsInStock": 0,
        "image": "casserole",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {   
        "ProductID": 3,
        "ProductName": "Tomato, Peach, and Basil Salad",
        "UnitPrice": "4.79€",
        "UnitsInStock": 16,
        "image": "peachSalad",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 4,
        "ProductName": "Soy-Glazed Cod and Bok Choy",
        "UnitPrice": "3.20€",
        "UnitsInStock": 23,
        "image": "soy-glazed",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 5,
        "ProductName": "Mediterranean Cod",
        "UnitPrice": "8.50€",
        "UnitsInStock": 0,
        "image": "cod",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
]

var dinnerItems=[ 
    {          
        "ProductID": 1,
        "ProductName": "Tomato-Quinoa Soup",
        "UnitPrice": "3.75€",
        "UnitsInStock": 11,
        "image": "tomatoSoup",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    }, 
    {
        "ProductID": 2,
        "ProductName": "Pan-Fried Tilapia",
        "UnitPrice": "8.75€",
        "UnitsInStock": 13,
        "image": "panFried",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {   
        "ProductID": 3,
        "ProductName": "Stuffed Zucchini",
        "UnitPrice": "2.90€",
        "UnitsInStock": 4,
        "image": "stuffedZuc",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 4,
        "ProductName": "Baked Catfish",
        "UnitPrice": "12.80€",
        "UnitsInStock": 0,
        "image": "catfish",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 5,
        "ProductName": "Caprese Zoodles",
        "UnitPrice": "4.69€",
        "UnitsInStock": 6,
        "image": "zoodles",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 6,
        "ProductName": "Skinny Alfredo",
        "UnitPrice": "9.95€",
        "UnitsInStock": 10,
        "image": "alfredo",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 7,
        "ProductName": "Garlicky Lemon Mahi Mahi",
        "UnitPrice": "17.59€",
        "UnitsInStock": 2,
        "image": "mahiMahi",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 8,
        "ProductName": "Quinoa Chicken Salad",
        "UnitPrice": "7.80€",
        "UnitsInStock": 7,
        "image": "quinoaSalad",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 9,
        "ProductName": "Caramelized Chicken Vegetable Stir Fry",
        "UnitPrice": "8.99€",
        "UnitsInStock": 0,
        "image": "veg",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 10,
        "ProductName": "Crispy Chicken Thighs With Garlic and Rosemary",
        "UnitPrice": "9.90€",
        "UnitsInStock": 17,
        "image": "chicken",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 11,
        "ProductName": "Chipotle Chicken Fajitas",
        "UnitPrice": "7.59€",
        "UnitsInStock": 2,
        "image": "fajitas",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
]


var dessertItems=[ 
    {          
        "ProductID": 1,
        "ProductName": "Creme Brulee",
        "UnitPrice": "3.75€",
        "UnitsInStock": 29,
        "image": "brulee",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    }, 
    {
        "ProductID": 2,
        "ProductName": "French Village-Style Cake",
        "UnitPrice": "4.50€",
        "UnitsInStock": 7,
        "image": "cake",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {   
        "ProductID": 3,
        "ProductName": "Pancake",
        "UnitPrice": "3.39€",
        "UnitsInStock": 0,
        "image": "pancake",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 4,
        "ProductName": "Ice Cream",
        "UnitPrice": "2.20€",
        "UnitsInStock": 33,
        "image": "iceCream",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 5,
        "ProductName": "Tiramisu",
        "UnitPrice": "3.50€",
        "UnitsInStock": 10,
        "image": "tiramisu",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
    {
        "ProductID": 6,
        "ProductName": "Banana-Berry Smoothie",
        "UnitPrice": "1.95€",
        "UnitsInStock": 0,
        "image": "smoothie",
        "DeliveryOn": Math.floor((Math.random() * 60) + 1)
    },
]
