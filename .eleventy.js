module.exports = function (eleventyConfig) {
  // Passthrough copy for assets (CSS, Images)
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
  };
};