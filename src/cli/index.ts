#!/usr/bin/env node
import { Command, Option } from "commander";
import * as process from "process";

import { createProject } from "./createProject";
import { Options } from "./Options";

new Command()
   .arguments("<name>")
   .addOption(new Option("-t, --template <template>", "The template to use").choices(["simple"]).default("simple"))
   .option("-g, --git, ", "Initialise GIT")
   .option("-i, --install", "Install Dependencies right away")
   .option("-u, --update", "Update Dependencies")
   .action(async (name: string, opts: unknown) => {
      const options = opts as Options;
      await createProject(name, options);
   })
   .parseAsync(process.argv)
   .catch((error) => {
      console.error("💥 The project creation failed.", error);
   });
