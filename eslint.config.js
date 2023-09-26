import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default [

  // https://github.com/antfu/eslint-config/blob/10c198c894246e61fa5077afd9611f941f2898fe/src/types.ts#L26C25-L26C25
  antfu({
    stylistic: true,
    typescript: true,
    vue: true,
    jsonc: true,
  }),
  
  unocss
]
