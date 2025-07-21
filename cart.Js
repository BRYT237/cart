const products = [
    {
      "id": 1,
      "productName": "Wireless Mouse",
      "price": 25.99,
      "category": "Electronics",
      "image": "https://example.com/images/wireless-mouse.jpg"
    },
    {
      "id": 2,
      "productName": "Bluetooth Speaker",
      "price": 45.50,
      "category": "Electronics",
      "image": "https://example.com/images/bluetooth-speaker.jpg"
    },
    {
      "id": 3,
      "productName": "Yoga Mat",
      "price": 19.99,
      "category": "Fitness",
      "image": "https://example.com/images/yoga-mat.jpg"
    },
    {
      "id": 4,
      "productName": "Running Shoes",
      "price": 89.99,
      "category": "Footwear",
      "image": "https://example.com/images/running-shoes.jpg"
    },
    {
      "id": 5,
      "productName": "Coffee Maker",
      "price": 79.95,
      "category": "Home Appliances",
      "image": "https://example.com/images/coffee-maker.jpg"
    },
    {
      "id": 6,
      "productName": "LED Desk Lamp",
      "price": 34.99,
      "category": "Home Decor",
      "image": "https://example.com/images/desk-lamp.jpg"
    },
    {
      "id": 7,
      "productName": "Smartwatch",
      "price": 129.99,
      "category": "Wearables",
      "image": "https://example.com/images/smartwatch.jpg"
    },
    {
      "id": 8,
      "productName": "Laptop Backpack",
      "price": 39.99,
      "category": "Accessories",
      "image": "https://example.com/images/laptop-backpack.jpg"
    },
    {
      "id": 9,
      "productName": "Electric Kettle",
      "price": 24.95,
      "category": "Kitchen",
      "image": "https://example.com/images/electric-kettle.jpg"
    },
    {
      "id": 10,
      "productName": "Noise Cancelling Headphones",
      "price": 199.00,
      "category": "Electronics",
      "image": "https://example.com/images/headphones.jpg"
    },
    {
      "id": 11,
      "productName": "Gaming Keyboard",
      "price": 59.99,
      "category": "Gaming",
      "image": "https://example.com/images/gaming-keyboard.jpg"
    },
    {
      "id": 12,
      "productName": "Office Chair",
      "price": 149.99,
      "category": "Furniture",
      "image": "https://example.com/images/office-chair.jpg"
    },
    {
      "id": 13,
      "productName": "Electric Toothbrush",
      "price": 29.95,
      "category": "Personal Care",
      "image": "https://example.com/images/electric-toothbrush.jpg"
    },
    {
      "id": 14,
      "productName": "Fitness Tracker",
      "price": 59.95,
      "category": "Wearables",
      "image": "https://example.com/images/fitness-tracker.jpg"
    },
    {
      "id": 15,
      "productName": "Tablet Stand",
      "price": 18.50,
      "category": "Accessories",
      "image": "https://example.com/images/tablet-stand.jpg"
    },
    {
      "id": 16,
      "productName": "Portable Projector",
      "price": 229.00,
      "category": "Electronics",
      "image": "https://example.com/images/portable-projector.jpg"
    },
    {
      "id": 17,
      "productNa me": "Blender",
      "price": 49.99,
      "category": "Kitchen",
      "image": "https://example.com/images/blender.jpg"
    },
    {
      "id": 18,
      "productName": "Smart Thermostat",
      "price": 149.00,
      "category": "Home Automation",
      "image": "https://example.com/images/smart-thermostat.jpg"
    },
    {
      "id": 19,
      "productName": "Book Light",
      "price": 12.99,
      "category": "Books & Media",
      "image": "https://example.com/images/book-light.jpg"
    },
    {
      "id": 20,
      "productName": "Standing Desk",
      "price": 299.99,
      "category": "Furniture",
      "image": "https://example.com/images/standing-desk.jpg"
    }
  ]
  

const cart1 = document.getElementById("cart1");
const cart2 = document.getElementById("cart2");
const cart3 = document.getElementById("cart3");
const cart4 = document.getElementById("cart4");
const cart5 = document.getElementById("cart5");
const cart6 = document.getElementById("cart6");
const cart7 = document.getElementById("cart7");
const cart8 = document.getElementById("cart8");
const cart9 = document.getElementById("cart9");
const cart10 = document.getElementById("cart10");
const cart11 = document.getElementById("cart11");
const cart12 = document.getElementById("cart12");
const cart13 = document.getElementById("cart13");
const cart14 = document.getElementById("cart14");
const cart15 = document.getElementById("cart15");
const cart16 = document.getElementById("cart16");
const cart17 = document.getElementById("cart17");
const cart18 = document.getElementById("cart18");
const cart19 = document.getElementById("cart19");
const cart20 = document.getElementById("cart20");


cart1.innerHTML +=`
  	
    <p>Product Name: ${products[0].productName}</p>
    <p>Price: ${products[0].price}$</p>
    <p>Category: ${products[0].category}</p>
    <button id="but" onclick="prodPush(0); showGoods()">Add to Cart</button>
`;

cart2.innerHTML +=`
    <p>Product Name: ${products[1].productName}</p>
    <p>Price: ${products[1].price}$</p>
    <p>Category: ${products[1].category}</p>
    <button id="but" onclick="prodPush(1); showGoods()">Add to Cart</button>
`;

cart3.innerHTML +=`
    <p>Product Name: ${products[2].productName}</p>
    <p>Price: ${products[2].price}$</p>
    <p>Category: ${products[2].category}</p>
    <button id="but" onclick="prodPush(2); showGoods()">Add to Cart</button>
`;

cart4.innerHTML +=`
    <p>Product Name: ${products[3].productName}</p>
    <p>Price: ${products[3].price}$</p>
    <p>Category: ${products[3].category}</p>
    <button id="but" onclick="prodPush(3); showGoods()">Add to Cart</button>
`;

cart5.innerHTML +=`
    <p>Product Name: ${products[4].productName}</p>
    <p>Price: ${products[4].price}$</p>
    <p>Category: ${products[4].category}</p>
    <button id="but" onclick="prodPush(4); showGoods()">Add to Cart</button>
`;

cart6.innerHTML +=`
    <p>Product Name: ${products[5].productName}</p>
    <p>Price: ${products[5].price}$</p>
    <p>Category: ${products[5].category}</p>
    <button id="but" onclick="prodPush(5); showGoods()">Add to Cart</button>
`;

cart7.innerHTML +=`
    <p>Product Name: ${products[6].productName}</p>
    <p>Price: ${products[6].price}$</p>
    <p>Category: ${products[6].category}</p>
    <button id="but" onclick="prodPush(6); showGoods()">Add to Cart</button>
`;

cart8.innerHTML +=`
    <p>Product Name: ${products[7].productName}</p>
    <p>Price: ${products[7].price}$</p>
    <p>Category: ${products[7].category}</p>
    <button id="but" onclick="prodPush(7); showGoods()">Add to Cart</button>
`;

cart9.innerHTML +=`
    <p>Product Name: ${products[8].productName}</p>
    <p>Price: ${products[8].price}$</p>
    <p>Category: ${products[8].category}</p>
    <button id="but" onclick="prodPush(8); showGoods()">Add to Cart</button>
`;

cart10.innerHTML +=`
    <p>Product Name: ${products[9].productName}</p>
    <p>Price: ${products[9].price}$</p>
    <p>Category: ${products[9].category}</p>
    <button id="but" onclick="prodPush(9); showGoods()">Add to Cart</button>
`;

cart11.innerHTML +=`
    <p>Product Name: ${products[10].productName}</p>
    <p>Price: ${products[10].price}$</p>
    <p>Category: ${products[10].category}</p>
    <button id="but" onclick="prodPush(10); showGoods()">Add to Cart</button>
`;

cart12.innerHTML +=`
    <p>Product Name: ${products[11].productName}</p>
    <p>Price: ${products[11].price}$</p>
    <p>Category: ${products[11].category}</p>
    <button id="but" onclick="prodPush(11); showGoods()">Add to Cart</button>
`;

cart13.innerHTML +=`
    <p>Product Name: ${products[12].productName}</p>
    <p>Price: ${products[12].price}$</p>
    <p>Category: ${products[12].category}</p>
    <button id="but" onclick="prodPush(12); showGoods()">Add to Cart</button>
`;

cart14.innerHTML +=`
    <p>Product Name: ${products[13].productName}</p>
    <p>Price: ${products[13].price}$</p>
    <p>Category: ${products[13].category}</p>
    <button id="but" onclick="prodPush(13); showGoods()">Add to Cart</button>
`;

cart15.innerHTML +=`
    <p>Product Name: ${products[14].productName}</p>
    <p>Price: ${products[14].price}$</p>
    <p>Category: ${products[14].category}</p>
    <button id="but" onclick="prodPush(14); showGoods()">Add to Cart</button>
`;

cart16.innerHTML +=`
    <p>Product Name: ${products[15].productName}</p>
    <p>Price: ${products[15].price}$</p>
    <p>Category: ${products[15].category}</p>
    <button id="but" onclick="prodPush(15); showGoods()">Add to Cart</button>
`;

cart17.innerHTML +=`
    <p>Product Name: ${products[16].productName}</p>
    <p>Price: ${products[16].price}$</p>
    <p>Category: ${products[16].category}</p>
    <button id="but" onclick="prodPush(16); showGoods()">Add to Cart</button>
`;

cart18.innerHTML +=`
    <p>Product Name: ${products[17].productName}</p>
    <p>Price: ${products[17].price}$</p>
    <p>Category: ${products[17].category}</p>
    <button id="but" onclick="prodPush(17); showGoods()">Add to Cart</button>
`;

cart19.innerHTML +=`
    <p>Product Name: ${products[18].productName}</p>
    <p>Price: ${products[18].price}$</p>
    <p>Category: ${products[18].category}</p>
    <button id="but" onclick="prodPush(18); showGoods()">Add to Cart</button>
`;

cart20.innerHTML +=`
    <p>Product Name: ${products[19].productName}</p>
    <p>Price: ${products[19].price}$</p>
    <p>Category: ${products[19].category}</p>
    <button id="but" onclick="prodPush(19); showGoods()">Add to Cart</button>
`;

const cartDisp = document.getElementById("cartdisp")


// const cartAdd = () => {
 
// }
const testA = document.getElementById("testA");
const test = document.getElementById("test");
let records = JSON.parse(localStorage.getItem("goods")) || [];




const prodPush = (index)=> {
  records.push(products[index]);
  localStorage.setItem("goods",JSON.stringify(records));

 
}

const showGoods = ()=> {
  records = JSON.parse(localStorage.getItem("goods"));
  test.innerHTML ="";
  for (let index = 0; index < records.length; index++) {
        cartDisp.textContent = index+1;
        // test.innerHTML ="";
        test.innerHTML += `
        <p>${index+1}</p>
        <p>Product Name: ${records[index].productName}</p>
        <p>Price: ${records[index].price}$</p>
        <button onclick="quantInc()">+</button>
        <p id="quantDisp">0</p>
        <button onclick="quantDec()">-</button>
        <hr>
        `
      }
      
      
}
// showGoods();

const showProd = () => {
    test.innerHTML ="";
      for (let index = 0; index < records.length; index++) {
            cartDisp.textContent = index+1;
            test.innerHTML += `
            <p>${index+1}</p>
            <p>Product Name: ${records[index].productName}</p>
            <p>Price: ${records[index].price}$</p>
            <button onclick="quantInc()">+</button>
            <p id="quantDisp">0</p>
            <button onclick="quantDec()">-</button>
            <hr>
            `
          }
}
showProd()


const slid = () => {
  testA.classList.toggle("slide");
}

const ShowCart = () =>{
  test.classList.toggle("showC");
}

const removE = () =>{
  localStorage.clear();
  test.innerHTML ="";
  cartDisp.textContent = 0;
}
let quant = 0;


const quantInc = () =>{
    document.querySelector('#quantDisp').textContent = ++quant;
};

const quantDec = () =>{
  document.querySelector('#quantDisp').textContent = --quant;
}



