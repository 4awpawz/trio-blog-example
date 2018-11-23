module.exports = ({ $, site }) => {
    site.articlesCatalog.forEach(article => {
        $("ul.archive__list").append(/* html */`
            <li class="archive__list-item">
                <a data-trio-link class="archive__list-item-link" href="${article.url}">
                    ${article.matter.data.title} posted to "${article.matter.data.category}" on ${article.articleDate} 
                </a>
            </li>
        `);
    });
};