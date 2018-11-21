module.exports = ({ $, site }) => {
    $("div.blog__body").append(/* html */`
        <ul class="blog__article-list"></ul>
    `);
    site.categoriesCatalog.forEach(item => {
        $("aside.blog__category-list").append(/* html */`
            <li class="blog__category-list-item">
                <a data-trio-link href="/blog/category/${item.category}">${item.category}</a>
            </li>
        `);
    });
    site.articlesCatalog.forEach(article => {
        $("ul.blog__article-list").append(/* html */`
            <li class="blog__article-list-item">
                <a data-trio-link href="${article.url}">
                    ${article.matter.data.title} posted to ${article.matter.data.category} on ${article.articleDate}
                </a>
            </li>
        `);
    });
};