module.exports = ({ $tag, site }) => {
    site.articlesCatalog.forEach(article => {
        $tag.append(/* html */`
            <li class="archive__list-item">
                <a data-trio-link class="archive__list-item-link" href="${article.url}">
                    ${article.matter.data.title} posted to "${article.matter.data.category}" on ${article.articleDate} 
                </a>
            </li>
        `);
    });
};