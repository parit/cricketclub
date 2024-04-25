const { html } = require('common-tags');
const f = require("../../_data/fixtures.js")();

module.exports = function(season = '') {
    let keys = Object.keys(f);
    keys.sort();
    keys.reverse();
    return html`
        <select autocomplete="off" name="seasons" id="seasons">
            ${
                keys.map(el => {
                        let selected = (el == season ? 'selected' : '');
                        return `<option value="${el}" ${selected}>Season ${el}</option>`;
                    }).join("")
            }
        </select>
    `;
};