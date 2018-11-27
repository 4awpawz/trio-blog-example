module.exports = ({ $, page, site, cheerio }) => {
    // console.log(site.sortedTagCatalog[0].related[0]);
    console.log(page.matter.data.forTag);
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