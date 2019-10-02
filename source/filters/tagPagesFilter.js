module.exports = ({ site }) =>
    site.tagsCatalog.map(item => ({ data: item, pageName: item.tag }));