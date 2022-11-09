/* eslint-disable @typescript-eslint/no-var-requires */
import { readdirSync, lstatSync } from 'fs';
import { join } from 'path';

export const readFolder = <T = unknown>(path: string): T[] => {
  const modules = readdirSync(path)
    .map((module) => {
      const fileFullPath = join(path, module);
      if (lstatSync(fileFullPath).isDirectory())
        return readFolder<T>(fileFullPath);

      const moduleRequired = require(fileFullPath);
      if (moduleRequired) return moduleRequired.default;
    });

  return modules;
};
