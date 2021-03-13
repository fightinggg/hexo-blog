const moment = require('moment-timezone');

const postDir = '_posts';
const draftDir = '_drafts';

/**
 * Parse post's source, pick up `title` and `date` field
 * @param {string} src
 * @return Object
 */
module.exports.parseSource = function (src) {
    let parts = src.split("/");
    let title = parts[parts.length - 1];
    if (title.indexOf(".") >= 0) {
        title = title.substring(0, title.indexOf("."));
    }

    let categories = [];
    for (let i = parts.length - 2; i > 0; i--) {
        let part = parts[i];
        if (!part || part === '~' || part === '.' || part === postDir || part === draftDir) {
            break;
        }
        if (categories.indexOf(part) < 0) {
            categories.push(part);
        }
    }
    return { title, categories };
};

/**
 * Find `tags` that `src` contains.
 * @param {string} src
 * @param {Array} tags
 * @return {Array}
 */
module.exports.matchTags = function (src, tags) {
    let result = [];
    if (src && tags) {
        tags.forEach(tag => {
            if (src.toLowerCase().indexOf(tag.toLowerCase()) > 0) {
                result.push(tag);
            }
        });
    }
    return result;
};

/**
 * Parse tags from `src` string.
 * @param {string} src
 * @param {Array} tgt
 */
module.exports.parseTags = function (src, tgt) {
    if (src && tgt) {
        src.split(',').forEach(tag => {
            tag = tag.trim();
            if (tag && tgt.indexOf(tag) < 0) {
                tgt.push(tag);
            }
        });
    }
};
