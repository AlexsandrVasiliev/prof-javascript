const products = [
    {id: 1, title: 'Notebook', price: 2000, imageUrl: 'https://redstore.am/uploads/shop/products/large/874004745bbc529047272587a0f22ce8.jpg'},
    {id: 2, title: 'Mouse', price: 20, imageUrl: 'https://c-3d.niceshops.com/upload/image/product/large/default/surefire-hawk-claw-gaming-mouse-with-rgb-7-buttons-1-pc-399484-en.jpg'},
    {id: 3, title: 'Keyboard', price: 200, imageUrl: 'https://th-media.apjonlinecdn.com/catalog/product/4/P/4P4F6AH-3_T1643192568.png'},
    {id: 4, title: 'Gamepad', price: 50, imageUrl: "https://picsum.photos/seed/1/200"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title ? item.title : "Default title"}</h3>
                <div class="imgBlock"><img src="${item.imageUrl}" alt=""></div>
                <p>${item.price ? item.price : "100"}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    /**
     * Запятая появлялась как разделитель между элементами, с помощью join заменили ее на пустоту
     */
    const productsList = list.map(item => renderProduct(item)).join("");
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);