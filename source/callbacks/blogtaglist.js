module.exports = ({ $tag, site }) => {
    site.sortedTagCatalog.forEach(item => {
        $tag.append(/* html */`
            <li class="tag__list-item">
                <a data-trio-link class="tag__list-item-link" href="/blog/tag/${item.tag.toLowerCase()}">${item.tag}</a>
            </li>
        `);
    });
};