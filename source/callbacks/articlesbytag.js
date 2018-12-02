module.exports = ({ $, page, site, cheerio }) => {
    site.sortedTagCatalog.find(item => item.tag === page.matter.data.forTag)
        .related.forEach(article => {
            $("ul.articles-by-tag__list").append(/* html */`
            <li class="articles-by-tag__list-item">
                <a data-trio-link class="articles-by-tag__list-item-link" href="${article.url}">
                    ${article.title} posted on ${article.articleDate} 
                </a>
            </li>
        `);
        });
};