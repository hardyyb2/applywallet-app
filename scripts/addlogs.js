const fs = require("fs");
const path = require("path");

function addLogStatementToFile(file, fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading file ${file}: ${err}`);
        return;
      }
      const newContent = data + '\nconsole.log("' + fileName + '");';
      fs.writeFile(file, newContent, (err) => {
        if (err) {
          reject(`Error writing file ${file}: ${err}`);
          return;
        }
      });
    });
  });
}

const processDirectory = (dir, fileHandler) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(`Error reading directory ${dir}: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.log(`Error reading file ${filePath}: ${err}`);
          return;
        }
        if (stats.isDirectory()) {
          processDirectory(filePath, fileHandler);
        } else if (stats.isFile()) {
          const ext = path.extname(file);
          if (
            ext === ".js" ||
            ext === ".ts" ||
            ext === ".jsx" ||
            ext === ".tsx"
          ) {
            fileHandler(filePath, file);
          }
        }
      });
    });
  });
};

async function addLogStatementToDirectory(directory) {
  processDirectory(directory, async (filePath, fileName) => {
    try {
      const result = await addLogStatementToFile(filePath, fileName);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  });
}

addLogStatementToDirectory("app");
