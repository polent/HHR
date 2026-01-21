module.exports = function (eleventyConfig) {
  // Passthrough copy for assets (CSS, Images)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Passthrough copy for root-level files
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
  };
};