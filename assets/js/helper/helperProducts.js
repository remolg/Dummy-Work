const productsContainerElement = document.querySelector('.shopSomeCards');
const buttonLoadMore = document.querySelector('.shopSomeButton');

const createProductHtml = (id,title, category, thumbnail, price) =>
`<div class="card hiden" data-id='${id}'>
    <a href="#"><img src="${thumbnail}" alt="${title}"></a>
    <div>
        <span class="graySpan">${category}</span>
        <span class="blackSpan">${title}</span>
    </div>
    <span class="price">${price} EUR</span>
</div>`

buttonLoadMore.addEventListener('click', () => {
    productsContainerElement.classList.add('show-all-cards');
})

export {productsContainerElement, createProductHtml, buttonLoadMore}
