module.exports = function (eleventyConfig) {
  // Passthrough copy for assets (CSS, Images)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Passthrough copy for root-level files
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  // Add Nunjucks filter to load SVG files inline
  eleventyConfig.addNunjucksFilter("inlineSvg", function(filename) {
    const fs = require("node:fs");
    const path = require("node:path");
    const filepath = path.join(__dirname, "src/assets/icons", filename);
    try {
      const content = fs.readFileSync(filepath, "utf8");
      return content;
    } catch (error) {
      console.warn(`SVG file not found: ${filepath}`, error.message);
      return "";
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
  };
};