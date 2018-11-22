module.exports = ({ $, site }) => {
    site.articlesCatalog.forEach(article => {
        $("ul.archive-list").append(/* html */`
            <li class="archive-list__item">
                <a data-trio-link class="archive-list__item-link" href="${article.url}">
                    ${article.matter.data.title} posted to ${article.matter.data.category} on ${article.articleDate} 
                </a>
            </li>
        `);
    });
};