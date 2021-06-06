#!/usr/bin/env node
import { Command } from "commander";
import * as path from "path";
import * as process from "process";

import { copyFilesFromTemplate } from "./copyFilesFromTemplate";
import { initializeGit } from "./initializeGit";
import { installPackages } from "./installPackages";
import { Options } from "./Options";
import { updatePackages } from "./updatePackages";

async function run(): Promise<void> {
   const program = new Command()
      .requiredOption("-n,--name <name>", "Name of the Project to create")
      .option("-g, --git, ", "Initialise GIT")
      .option("-i, --install", "Install Dependencies right away")
      .option("-u, --update", "Update Dependencies");

   await program.parseAsync(process.argv);

   const options = program.opts() as Options;

   const projectPath = path.resolve(process.cwd(), options.name);

   await copyFilesFromTemplate(projectPath, options);

   if (options.git) {
      await initializeGit(projectPath);
   }

   if (options.update) {
      await updatePackages(projectPath);
   }

   if (options.install) {
      await installPackages(projectPath);
   }
}

run().catch((error) => {
   console.error("Boom 💣", error);
});
