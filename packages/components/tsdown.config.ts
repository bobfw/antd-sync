import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  unbundle: true,
  dts: false,
  format: {
    esm: { outDir: 'esm' },
    cjs: { outDir: 'lib' },
  },
  fixedExtension: false,
})
