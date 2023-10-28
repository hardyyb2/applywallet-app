/**
 * This script recursively iterates through all files in a directory and its subdirectories and adds a `console.log()`
 * statement to the end of each file that has on of the provided extension. The added
 * `console.log()` statement includes the name of the file being modified. This modification can be used to check whether
 * a component is being rendered on the server or the client. When a component is rendered on the server, the log output
 * will be logged to the server console, whereas when a component is rendered on the client, the log output will be logged
 * to the browser console.
 * !Note - this script modifies the files in place, so it is recommended to make a backup of the target directory before running this script.
 */

// Script code goes here...

const { logger } = require("@/lib/logs");
const fs = require("fs");
const path = require("path");
const yargs = require("yargs");

const addToExtensions = [".js", ".ts", ".jsx", ".tsx"];
const identifier = "RENDER";
const directory = "app";

function addLogStatementToFile(file) {
  return new Promise((_resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading file ${file}: ${err}`);
        return;
      }
      const newContent =
        data + `\nconsole.log("[${identifier}] ${file?.split("[lang]/")[1]}");`;
      fs.writeFile(file, newContent, (err) => {
        if (err) {
          reject(`Error writing file ${file}: ${err}`);
          return;
        }
      });
    });
  });
}

function removeLogStatementFromFile(file) {
  return new Promise((_resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading file ${file}: ${err}`);
        return;
      }
      const newContent = data.replace(
        new RegExp(`\nconsole\\.log\\("\\[${identifier}\\] [^"]*"\\);?$`),
        "",
      );

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
      logger.error(`Error reading directory ${dir}: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          logger.error(`Error reading file ${filePath}: ${err}`);
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

async function removeLogStatementFromDirectory(directory) {
  processDirectory(directory, async (filePath) => {
    try {
      const result = await removeLogStatementFromFile(filePath);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  });
}

yargs
  .command(
    "add",
    "Add console.log statements to files in a directory",
    {},
    () => {
      addLogStatementToDirectory(directory);
    },
  )
  .command(
    "remove",
    "Remove console.log statements from files in a directory",
    {},
    () => {
      removeLogStatementFromDirectory(directory);
    },
  )
  .demandCommand()
  .help().argv;
