import { blueBright, yellow } from "chalk";
import path from "path";
import process from "process";

import { copyFilesFromTemplate } from "./copyFilesFromTemplate";
import { initializeGit } from "./initializeGit";
import { installPackages } from "./installPackages";
import { Options } from "./Options";
import { updatePackages } from "./updatePackages";

function writeSuccessMessage(message: string): void {
   console.log("");
   console.log(`✅ ${message}`);
}

export async function createProject(name: string, options: Options): Promise<void> {
   const projectPath = path.resolve(process.cwd(), name);

   console.log(`Creating project ${blueBright(name)} at ${yellow(projectPath)}.`);
   console.log("");

   await copyFilesFromTemplate(projectPath, options);
   writeSuccessMessage("Project created.");

   if (options.git) {
      await initializeGit(projectPath);
      writeSuccessMessage("Git initialized.");
   }

   if (options.update) {
      await updatePackages(projectPath);
      writeSuccessMessage("Packages updated.");
   }

   if (options.install) {
      await installPackages(projectPath);
      writeSuccessMessage("Git installed.");
   }
}
