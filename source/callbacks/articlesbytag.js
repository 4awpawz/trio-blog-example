module.exports = ({ $tag, asset, site }) => {
    site.tagsCatalog.find(item => item.tag === asset.matter.data.forTag)
        .related.forEach(article => {
            $tag.append(/* html */`
            <li class="articles-by-tag__list-item">
                <a data-trio-link class="articles-by-tag__list-item-link" href="${article.url}">
                    ${article.title} posted on ${article.articleDate} 
                </a>
            </li>
        `);
        });
};