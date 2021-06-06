import execa from "execa";

export async function initializeGit(projectPath: string): Promise<void> {
   await execa("git", ["init"], {
      cwd: projectPath,
   }).stdout?.pipe(process.stdout);
}
