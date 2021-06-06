import execa from "execa";

export async function installPackages(projectPath: string): Promise<void> {
   await execa("npm", ["install"], {
      cwd: projectPath,
   }).stdout?.pipe(process.stdout);
}
