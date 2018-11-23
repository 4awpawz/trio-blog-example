module.exports = ({ $, page, site }) => {
    site.categoriesCatalog.find(item => item.category === page.matter.data.forCategory[0]).related.forEach(article => {
        $("ul.articles-by-category__list").append(/* html */`
            <li class="articles-by-category__list-item">
                <a data-trio-link class="articles-by-category__list-item-link" href="${article.url}">
                    ${article.title} posted on ${article.articleDate} 
                </a>
            </li>
        `);
    });
};