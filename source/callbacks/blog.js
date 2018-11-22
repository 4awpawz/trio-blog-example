const categoriesList = require("./lib/categorieslist");

module.exports = ({ $, site }) => {
    $("div.blog__body").append(/* html */`
        <ul class="blog__article-list"></ul>
    `);
    categoriesList($, site);
    site.articlesCatalog.forEach(article => {
        $("ul.blog__article-list").append(/* html */`
            <li class="blog__article-list-item">
                <article class="blog__article">
                    <a data-trio-link class="blog__article-link" href="${article.url}">
                        <img data-trio-link src="/media/${article.matter.data.image}" alt="" class="blog__article-img">
                        <h2 class="blog__article-info">
                            ${article.matter.data.title} posted to ${article.matter.data.category} on ${article.articleDate}
                        </h2>
                        <p class="blog__article-excerpt">${article.matter.excerpt}</p>
                    </a>
                </article>
            </li>
        `);
    });
};