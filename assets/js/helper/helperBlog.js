const blogCards = document.querySelector('.blogCards');

const createBlog = (id,title,body) =>
    `
    <div class="blogCard" data-id='${id}'>
    <h6>Article</h6>
    <h5>${title}</h5>
    <p>${body}</p>
    <span class="blogOwner">21 January 2018 by guido</span>
</div>
    `

export {blogCards,createBlog}