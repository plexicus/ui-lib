// Example: In your astro.config.mjs or a separate Node.js script
import fs from 'node:fs';

/**
 * Lists subdirectories within a given directory.
 * @param {string} dirPath The path to the directory to scan.
 * @returns {string[]} An array of subdirectory names.
 */
export default function listSubdirectories(dirPath: string) {
  try {
    // Read the contents of the directory
    const dirents = fs.readdirSync(dirPath, { withFileTypes: true });

    // Filter for directories and return their names
    const directories = dirents
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    return directories;
  } catch (error) {
    console.error(`Error listing directories in ${dirPath}:`, error);
    return []; // Return an empty array on error
  }
}
