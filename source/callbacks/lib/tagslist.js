module.exports = ($, site) => {
    site.sortedTagCatalog.forEach(item => {
        $("ul.tag__list").append(/* html */`
            <li class="tag__list-item">
                <a data-trio-link class="tag__list-item-link" href="/blog/tag/${item.tag.toLowerCase()}">${item.tag}</a>
            </li>
        `);
    });
};