module.exports = ($, page) => {
    const getRelatedSetOfArticles = () => {
        const articlesMap = new Map();
        page.relatedArticlesByCategory.related.forEach(article => articlesMap.set(article.id, article));
        page.relatedArticlesByTagFlattened.forEach(article => articlesMap.set(article.id, article));
        return articlesMap;
    };

    const relatedArticles = getRelatedSetOfArticles();
    relatedArticles.forEach(article => {
        $("ul.related-articles__list").append(/* html */`
                <li class="related-articles__list-item">
                    <a data-trio-link class="related-articles__list-item-link" href="${article.url}">
                        ${article.title} posted on ${article.articleDate} 
                    </a>
                </li>
            `);
    });
};
