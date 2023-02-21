/**
 * This script recursively iterates through all files in a directory and its subdirectories and adds a `console.log()`
 * statement to the end of each file that has on of the provided extenstion. The added
 * `console.log()` statement includes the name of the file being modified. This modification can be used to check whether
 * a component is being rendered on the server or the client. When a component is rendered on the server, the log output
 * will be logged to the server console, whereas when a component is rendered on the client, the log output will be logged
 * to the browser console.
 * !Note - this script modifies the files in place, so it is recommended to make a backup of the target directory before running this script.
 */

// Script code goes here...

const fs = require("fs");
const path = require("path");

const addToExtensions = [".js", ".ts", ".jsx", ".tsx"];

function addLogStatementToFile(file) {
  return new Promise((_resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading file ${file}: ${err}`);
        return;
      }
      const newContent =
        data + '\nconsole.log("' + file?.split("[lang]/")[1] + '");';
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
          return;
        }

        if (stats.isFile()) {
          const ext = path.extname(file);

          if (addToExtensions.includes(ext)) {
            fileHandler(filePath, file);
          }
        }
      });
    });
  });
};

async function addLogStatementToDirectory(directory) {
  processDirectory(directory, async (filePath) => {
    try {
      const result = await addLogStatementToFile(filePath);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  });
}

addLogStatementToDirectory("app");
