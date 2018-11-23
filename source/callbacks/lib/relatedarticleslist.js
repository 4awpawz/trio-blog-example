module.exports = ($, page) => {
    page.relatedArticlesByCategory.related.forEach(article => {
        $("ul.related-articles__list").append(/* html */`
                <li class="related-articles__list-item">
                    <a data-trio-link class="related-articles__list-item-link" href="${article.url}">
                        ${article.title} posted to "${page.relatedArticlesByCategory.category}" on ${article.articleDate} 
                    </a>
                </li>
            `);
    });
};
