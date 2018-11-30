module.exports = ($, site) => {
    site.categoriesCatalog.forEach(item => {
        $("ul.category__list").append(/* html */`
            <li class="category__list-item">
                <a data-trio-link class="category__link" href="/blog/category/${item.category.toLowerCase()}">${item.category}</a>
            </li>
        `);
    });
};