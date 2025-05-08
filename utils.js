import fs from 'fs';

export function getJson(filePath) {
  // Read the file synchronously, parse it, and return the object.
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error in getJson:", error);
    return null;
  }
} 