module.exports = ({ $tag, site }) => {
    site.tagsCatalog.forEach(item => {
        $tag.append(/* html */`
            <li class="tag__list-item">
                <a data-trio-link class="tag__list-item-link" href="/tag/${item.tag.toLowerCase()}">${item.tag}</a>
            </li>
        `);
    });
};