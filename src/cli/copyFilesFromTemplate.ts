import chalk from "chalk";
import { copyTemplate } from "create-template-folder";
import fs from "fs";
import path from "path";
import util from "util";

import { Options } from "./Options";

export async function copyFilesFromTemplate(projectPath: string, options: Options): Promise<void> {
   const exists = util.promisify(fs.exists);

   if (await exists(projectPath)) {
      throw new Error(`directory exists: ${projectPath}`);
   } else {
      const templateDirectory = path.resolve(__dirname, "../templates/simple");

      const files = await copyTemplate(templateDirectory, projectPath, {
         name: options.name,
      });

      files.forEach((file) => {
         console.log("created file: " + file);
      });

      console.log(chalk.green("project created…"));
   }
}
