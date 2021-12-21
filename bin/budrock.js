#!/usr/bin/env node

(async () => {
  await import('reflect-metadata')
  const tsnode = await import('ts-node')
  tsnode.register({
    projectSearchDir: process.cwd()
  });

  require('../src/index.ts')
})()
