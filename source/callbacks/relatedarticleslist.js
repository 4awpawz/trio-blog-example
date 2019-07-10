module.exports = ({ $tag, asset }) => {
    const getRelatedSetOfArticles = () => {
        const articlesMap = new Map();
        asset.relatedArticlesByCategory.related.forEach(article => articlesMap.set(article.url, article));
        asset.relatedArticlesByTagFlattened.forEach(article => articlesMap.set(article.url, article));
        return articlesMap;
    };

    const relatedArticles = getRelatedSetOfArticles();
    relatedArticles.forEach(article => {
        $tag.append(/* html */`
                <li class="related-articles__list-item">
                    <a data-trio-link class="related-articles__list-item-link" href="${article.url}">
                        ${article.title} posted on ${article.articleDate} 
                    </a>
                </li>
            `);
    });
};
