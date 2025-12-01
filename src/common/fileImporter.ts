import fs from 'fs';
import * as path from 'path';

export const readFile = (absolutePath: string): string => {
  return fs.readFileSync(absolutePath, 'utf8');
};

export const readRelative = (dir: string, relativePath: string): string => {
  return readFile(path.resolve(dir, relativePath));
};

export const readLines = (content: string): string[] => {
  if (!content) return [];
  return content.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
};
