module.exports = ({ $tag, asset }) => {
    $tag.find("h1.articles-by-tag__title")
        .append(`${asset.collection.item.tag}`);
    const $list = $tag.find("ul.articles-by-tag__list");
    asset.collection.item.related.forEach(article => $list.append(/* html */`
        <li class="articles-by-tag__list-item">
            <a data-trio-link class="articles-by-tag__list-item-link" href="${article.url}">
                ${article.title} posted on ${article.articleDate} 
            </a>
        </li>
    `));
};