const fs = require("node:fs");
const path = require("node:path");

module.exports = function (eleventyConfig) {
  // Passthrough copy for assets (CSS, Images)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Passthrough copy for root-level files
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  // Add Nunjucks filter to load SVG files inline
  eleventyConfig.addNunjucksFilter("inlineSvg", function (filename) {
    if (typeof filename !== "string" || filename.length === 0) {
      return "";
    }
    const safeName = path.basename(filename);
    if (path.extname(safeName).toLowerCase() !== ".svg") {
      console.warn(`Invalid SVG filename: ${filename}`);
      return "";
    }
    const iconsDir = path.resolve(__dirname, "src/assets/icons");
    const filepath = path.resolve(iconsDir, safeName);
    if (!filepath.startsWith(iconsDir + path.sep)) {
      console.warn(`Invalid SVG path: ${filename}`);
      return "";
    }
    try {
      return fs.readFileSync(filepath, "utf8");
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