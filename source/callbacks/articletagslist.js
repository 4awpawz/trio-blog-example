module.exports = ({ $tag, asset }) => {
    asset.relatedArticlesByTag.forEach(item => {
        $tag.append(/* html */`
            <li class="article-tags__list-item">
                <a data-trio-link class="article-tags__list-item-link" href="/blog/tag/${item.tag.toLowerCase()}" title="tag">${item.tag}</a>
            </li>
        `);
    });
};