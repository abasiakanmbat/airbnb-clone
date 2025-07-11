import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // ✅ Warn on <img> usage instead of next/image
      '@next/next/no-img-element': 'warn',

      // ✅ Warn on useEffect missing dependencies
      'react-hooks/exhaustive-deps': 'warn',

      // ✅ Warn on `any` usage
      '@typescript-eslint/no-explicit-any': 'warn',

      // ✅ Warn on unused vars, but allow variables like `_unused`
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // ✅ Recommend explicit types (optional, but good practice)
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];

export default eslintConfig;
