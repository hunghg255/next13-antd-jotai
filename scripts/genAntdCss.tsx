// scripts/genAntdCss.tsx
// https://github.com/ant-design/create-next-app-antd
import fs from 'node:fs';

import { extractStyle } from '@ant-design/static-style-extract';

const outputPath = './public/antd.min.css';

const css = extractStyle();

fs.writeFileSync(outputPath, css);
