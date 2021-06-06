import ncu from "npm-check-updates/lib";
import path from "path";

export async function updatePackages(projectPath: string): Promise<void> {
   await ncu.run({
      packageFile: path.resolve(projectPath, "package.json"),
      upgrade: true,
   });
}
