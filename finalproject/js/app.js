const products = [{
    id: 1,
    name: 'iPhone 12',
    price: 199,
    sendprice: 30,
    image: './img/iphone-12.jpg'
},
{
    id: 2,
    name: 'AirPods',
    price: 89,
    sendprice: 20,
    image: './img/airpods.jpg'
},
{
    id: 3,
    name: 'AirPods3',
    price: 99,
    sendprice: 10,
    image: './img/airpods.jpg'
},

]
const count = document.getElementById("store-count")

const renderProducts = () => {
    const productDiv = document.querySelector('.products')
    productDiv.innerHTML = ''

    products.forEach((item, index) => {
        productDiv.innerHTML += `
        <div class="product card">
            <div class="product__image">
                <img src=${item.image}>
            </div>
            <h2 class="product__title">${item.name}</h2>
            <h3 class="product__price">${item.price} تومان</h3>
            <button class="btn btn-primary" onclick="addToCart(${index})">افزودن به سبد خرید</button>

        </div>
        `
    })
}

let cart = {
    items: [],
    total: 0,
}

const renderCartItems = () => {
    const cartDiv = document.querySelector('.cart__items')
    cartDiv.innerHTML = ''
    const carttaxprice = document.querySelector('.cart__tax-price')
    const totalPriceEl = document.querySelector('.cart__total-price')
    const cartsendprice = document.querySelector('.cart__send-price')
    const carttotalallprice = document.querySelector('.cart__totalall-price')
    let totalPrice = 0
    if (cart.items.length === 0) {
        cartDiv.innerHTML = 'محصولی در سبد خرید وجود ندارد!'
    }

    cart.items.forEach((item) => {

        totalPrice += item.total
        cartDiv.innerHTML += `
        <div class="cart__item">
            <div class="col-md-4">
                <button class="btn btn-danger" onclick="removeFormCart('${item.name}')">حذف</button>
                <button class="btn btn-danger" onclick="lessFormCart('${item.name}')">کم کردن</button>
                <button class="btn btn-primary" onclick="moretocart('${item.name}')">زیاد کردن</button>
            </div>
            <div class="col-md-4 p-8">
                <div class="qty">${item.qty}</div>

            </div>
            <div class="col-md-4">
                <h3 class="cart__item-title">${item.name}</h3>
            </div>
        </div>
        `
    })
    let tax = totalPrice * 0.1;
    let send = totalPrice * 0.01
    let all = +send.toFixed(2) + +tax.toFixed(2) + +totalPrice
    totalPriceEl.innerHTML = `قیمت خام: ${totalPrice} تومان`
    carttaxprice.innerHTML = `مالیات: ${tax.toFixed(2)} تومان`
    cartsendprice.innerHTML = `هزینه ارسال: ${send.toFixed(2)} تومان`
    carttotalallprice.innerHTML = `قیمت اصلی: ${all} تومان`
}

const addToCart = (productIndex) => {

    const product = products[productIndex];
    let existingProduct = false;

    let newCartItems = cart.items.reduce((state, item) => {

        if (item.name === product.name) {
            existingProduct = true

            const newItem = {
                ...item,
                qty: item.qty + 1,
                total: (item.qty + 1) * item.price
            }
            console.log(newItem.qty)
            count.innerHTML = newItem.qty
            return [...state, newItem]
        }
        return [...state, item]

    }, [])

    if (!existingProduct) {

        newCartItems.push({
            ...product,
            qty: 1,
            total: product.price
        })
    }
    cart = {
        ...cart,
        items: newCartItems
    }
    renderCartItems()

}

const removeFormCart = (productName) => {

    let newCartItems = cart.items.reduce((state, item) => {
        if (item.name === productName) {
            const newItem = {
                ...item,
                qty: 0,
                total: (item.qty - 1) * item.price
            }

            if (newItem.qty > 0) {
                return [...state, newItem]
            } else {
                return state
            }
        }

        return [...state, item]
    }, [])

    cart = {
        ...cart,
        items: newCartItems
    }
    renderCartItems()
}
const lessFormCart = (productName) => {

    let newCartItems = cart.items.reduce((state, item) => {
        if (item.name === productName) {
            const newItem = {
                ...item,
                qty: item.qty - 1,
                total: (item.qty - 1) * item.price
            }

            if (newItem.qty > 0) {
                return [...state, newItem]
            } else {
                return state
            }
        }

        return [...state, item]
    }, [])

    cart = {
        ...cart,
        items: newCartItems
    }
    renderCartItems()
}
const moretocart = (productName) => {
    let newCartItems = cart.items.reduce((state, item) => {
        if (item.name === productName) {
            const newItem = {
                ...item,
                qty: item.qty + 1,
                total: (item.qty + 1) * item.price
            }

            if (newItem.qty > 0) {
                return [...state, newItem]
            } else {
                return state
            }
        }

        return [...state, item]
    }, [])

    cart = {
        ...cart,
        items: newCartItems
    }
    renderCartItems()

}
renderProducts()
renderCartItems()