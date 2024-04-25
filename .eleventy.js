const FixtureFrame = require("./_includes/components/FixtureFrame");
const SeasonSelector = require("./_includes/components/SeasonSelector");

module.exports = function(config) {
    config.addWatchTarget('assets/');
    //config.addPassthroughCopy({ 'assets/videos': "videos" });
    config.addPassthroughCopy({ 'assets/images': "images" });
    config.addPassthroughCopy({ 'assets/docs': "docs" });
    config.addShortcode("FixtureFrame", FixtureFrame);
    config.addShortcode("SeasonSelector", SeasonSelector);
}