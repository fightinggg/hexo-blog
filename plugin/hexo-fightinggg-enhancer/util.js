const moment = require('moment-timezone');

const reg = /^\[(\d{4})-(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})\](.*)$/;
const postDir = '_posts';
const draftDir = '_drafts';

// copy from hexo
function toMoment(value) {
    if (moment.isMoment(value)) return moment(value._d);
    return moment(value);
}

/**
 * Parse post's source, pick up `title` and `date` field
 * @param {string} src
 * @return Object
 */
module.exports.parseSource = function (src) {
    let title, date, abbrlink;
    let categories = [];
    let parts = src.split("/");
    if (parts.length > 0) {
        let filename = parts[parts.length - 1];
        if (filename.indexOf(".") >= 0) {
            filename = filename.substring(0, filename.indexOf("."));
        }
        let match = filename.match(reg);
        // log.in(filename);
        if (match) {
            date = toMoment(`${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}`);
            abbrlink = (date.valueOf() / 1000).toString(36).toUpperCase();
            title = match[7];
        } else {
            title = filename;
        }
    }
    for (let i = parts.length - 2; i > 0; i--) {
        let part = parts[i];
        if (!part || part === '~' || part === '.' || part === postDir || part === draftDir) {
            break;
        }
        if (categories.indexOf(part) < 0) {
            categories.push(part);
        }
    }
    return { title, date, categories, abbrlink };
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
