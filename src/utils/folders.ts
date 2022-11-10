/* eslint-disable @typescript-eslint/no-var-requires */
import { readdirSync } from 'fs';
import { join } from 'path';

export const readFolder = <T = unknown>(path: string): T[] => readdirSync(join(__dirname, path))
  .map((module) => require(join(__dirname, path, module)).default);
