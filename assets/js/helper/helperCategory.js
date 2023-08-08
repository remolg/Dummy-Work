const shopCategory = document.querySelector('#shopCategory');

const createCategory = (category) =>
`<label for="${category}">
    <input type="checkbox" name="${category}" id="${category}">${category}
</label>`


export {shopCategory,createCategory}