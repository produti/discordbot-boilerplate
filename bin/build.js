/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob');
const { buildSync } = require('esbuild');

buildSync({
  entryPoints: glob.sync('./src/**/**')
    .filter((path) => path.endsWith('.ts')),
  bundle: false,
  minify: true,
  outdir: 'dist',
  format: 'cjs',
});
