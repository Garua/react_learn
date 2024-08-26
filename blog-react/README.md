

- 导入未使用的的参数eslint检测飘红
> 修改`tsconfig.app.json`,`tsconfig.json`,`tsconfig.node.json`文件中设置`compilerOptions`属性对象中的"noUnusedLocals": false,
"noUnusedParameters": false。

- 安装依赖
> npm install @mui/material @emotion/react @emotion/styled
> npm install @fontsource/roboto
> npm install @mui/icons-material
> npm install react-router-dom
> npm i -D @types/node  # 安装类型定义文件 ，推荐，不然到处飘红
> npm install axios
npm install react-hook-form # 表单验证


- 开发前配置
> 别名配置，需要在vite.config.ts与tsconfig.json中都配置 

- tsconfig.json文件配置如下
```
{
  // "files": [], // 不要设置为空数组，不然配置的别名或者其它配置，会对项目下的ts，tsx文件不生效。如果tsconfig.json中不存在 'files' 或 'include' 属性，则编译器默认包含包含目录和子目录中的所有文件，
  // 但 'exclude' 指定的文件除外。当指定了“files”属性时，仅包含那些文件和“include”指定的文件
  "compilerOptions": {
    "jsx": "react-jsx",       // 配置这个后，可以能用导入React
        "baseUrl": ".",
        "paths": { // 别名配置
         "@/*": ["src/*"]
    }
    "allowImportingTsExtensions": true, //这个选项允许导入路径以 .ts 或 .tsx 作为扩展名
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "esModuleInterop": true, //  兼容common js ypeScript 对于 CommonJS 和 ES 模块之间的互操作性。
     // 它允许你以更符合 ES 模块语法的方式导入和使用 CommonJS 模块，从而提高代码的兼容性和可读性
    // 例如，假设你有一个使用 CommonJS 导出的模块：

// CommonJS 模块
    module.exports = function greet() {
    console.log('Hello, World!');
    };
    在没有启用 esModuleInterop 的情况下，你需要使用 import = require() 语法来导入它：
    import greet = require('./greet');
    启用 esModuleInterop 后，你可以使用更符合 ES 模块语法的默认导入方式：
    import greet from './greet';

  }
}
 
```

- vite.config.ts配置

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // path是使用的common js导出的，如果需要使用import，这种方式导入，需要在tsconfig.json文件中配置 "esModuleInterop": true,



export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src') // 别名配置
    }
  }
})

```

- eslint.config.js

```
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {ignores: ['dist']},
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any':'off',// 开发者可以在项目中使用 any 类型，而不会因为 ESLint 规则而受到限制
            // ESLint 的配置来允许特定的未使用变量，而不需要加下划线，你可以修改 ESLint 配置文件
            '@typescript-eslint/no-unused-vars': ['warn', {'varsIgnorePattern': '^_', "argsIgnorePattern": "^_"}],
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
        },
    },
)


```