module.exports = function(config) {
    config.addWatchTarget('assets/');
    //config.addPassthroughCopy({ 'assets/videos': "videos" });
    config.addPassthroughCopy({ 'assets/images': "images" });
    config.addPassthroughCopy({ 'assets/docs': "docs" });
}