const path = require("path");

const buildEslintAndPrettierCommand = (filenames) => {
  const relativeFileNames = filenames.map((f) =>
    path.relative(process.cwd(), f),
  );

  const eslintCommand = `next lint --fix --file ${relativeFileNames.join(
    " --file ",
  )}`;
  const prettierCommand = `prettier --write ${relativeFileNames.join(" ")}`;
  const stylelintCommand = `stylelint --fix **/*.{css,scss}`;

  return [eslintCommand, prettierCommand, stylelintCommand];
};

module.exports = {
  "*.{js,jsx,ts,tsx}": buildEslintAndPrettierCommand,
};
