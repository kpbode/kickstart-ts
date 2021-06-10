import { green } from "chalk";
import { copyTemplate } from "create-template-folder";
import fs from "fs";
import path from "path";
import util from "util";

import { Options } from "./Options";

export async function copyFilesFromTemplate(projectPath: string, projectName: string, options: Options): Promise<void> {
   const exists = util.promisify(fs.exists);

   if (await exists(projectPath)) {
      throw new Error(`directory exists: ${projectPath}`);
   } else {
      const templateDirectory = path.resolve(__dirname, "..", "templates", options.template);

      const files = await copyTemplate(templateDirectory, projectPath, {
         name: projectName,
      });

      files.forEach((file) => {
         console.log(`${green("+")} ${file}`);
      });
   }
}
