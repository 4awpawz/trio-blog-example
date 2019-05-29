module.exports = ({ $tag, asset, site }) => {
    site.categoriesCatalog.find(item => item.category === asset.matter.data.forCategory[0]).related.forEach(article => {
        $tag.append(/* html */`
            <li class="articles-by-category__list-item">
                <a data-trio-link class="articles-by-category__list-item-link" href="${article.url}">
                    ${article.title} posted on ${article.articleDate} 
                </a>
            </li>
        `);
    });
};