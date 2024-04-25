const { html } = require('common-tags');
const f = require("../../_data/fixtures.js")();

const fn = function(season, category) {
    let data = f[season][category];
    console.log("Preparing page for season " + season + " category " + category);
    return data ? html`
        <div class="ggc1">
            <h1>${data.title}</h1>
            ${
                
                data.matches.length == 0 ? `<p>Coming soon</p>` :
                data.matches.map(el => {
                    return `<h4>${el.title}</h4>
                    <iframe loading="lazy" border="0" style="border:none;" scrolling="yes" src="${el.link}"></iframe>
                            `;
                }).join("")
                
            }
        </div>    
    ` : ``;
};

module.exports = fn;