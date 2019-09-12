module.exports = ({ $tag, asset }) => {
    $tag.find("h1.articles-by-category__title")
        .append(`${asset.collection.item.category}`);
    const $list = $tag.find("ul.articles-by-category__list");
    asset.collection.item.related.forEach(article => $list.append(/* html */`
        <li class="articles-by-category__list-item">
            <a data-trio-link class="articles-by-category__list-item-link" href="${article.url}">
                ${article.title} posted on ${article.articleDate} 
            </a>
        </li>
    `));
};