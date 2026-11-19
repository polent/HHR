const fs = require("node:fs");
const path = require("node:path");

function readSafeAsset(subdir, expectedExt, filename) {
  if (typeof filename !== "string" || filename.length === 0) {
    return "";
  }
  const safeName = path.basename(filename);
  if (path.extname(safeName).toLowerCase() !== expectedExt) {
    console.warn(`Invalid ${expectedExt.slice(1).toUpperCase()} filename: ${filename}`);
    return "";
  }
  const assetDir = path.resolve(__dirname, subdir);
  const filepath = path.resolve(assetDir, safeName);
  if (!filepath.startsWith(assetDir + path.sep)) {
    console.warn(`Invalid ${expectedExt.slice(1).toUpperCase()} path: ${filename}`);
    return "";
  }
  try {
    return fs.readFileSync(filepath, "utf8");
  } catch (error) {
    console.warn(`${expectedExt.slice(1).toUpperCase()} file not found: ${filepath}`, error.message);
    return "";
  }
}

module.exports = function (eleventyConfig) {
  // Watch CSS changes during dev/watch builds
  eleventyConfig.addWatchTarget("./src/assets/css/");

  // Passthrough copy for assets (CSS, Images)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Passthrough copy for root-level files
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  // Add Nunjucks filter to load SVG files inline
  eleventyConfig.addNunjucksFilter("inlineSvg", function (filename) {
    return readSafeAsset("src/assets/icons", ".svg", filename);
  });

  // Add Nunjucks filter to inline and minify CSS files
  eleventyConfig.addNunjucksFilter("inlineCss", function (filename) {
    const raw = readSafeAsset("src/assets/css", ".css", filename);
    if (!raw) {
      return "";
    }
    return raw
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .replace(/\s*([{}:;,])\s*/g, "$1")
      .replace(/;}/g, "}")
      .trim();
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