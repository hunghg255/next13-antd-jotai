import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

import { extractStyle } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/lib/Cache';

export type DoExtraStyleOptions = {
  cache: Entity;
  dir?: string;
  baseFileName?: string;
};
export function doExtraStyle({
  cache,
  dir = 'antd-output',
  baseFileName = 'antd.min',
}: DoExtraStyleOptions) {
  const baseDir = path.resolve(__dirname, '../../static/css');

  const outputCssPath = path.join(baseDir, dir);

  if (!fs.existsSync(outputCssPath)) {
    fs.mkdirSync(outputCssPath, { recursive: true });
  }

  const css = extractStyle(cache, true);
  if (!css) {
    return {
      url: '',
      fallback: '',
    };
  }

  const md5 = createHash('md5');
  const hash = md5.update(css).digest('hex');
  const fileName = `${baseFileName}.${hash.slice(0, 8)}.css`;
  const fullpath = path.join(outputCssPath, fileName);

  const res = `_next/static/css/${dir}/${fileName}`;
  const resFallback = `api/dynamic-css?fileName=${fileName}&etag=${hash}`;

  if (fs.existsSync(fullpath)) {
    return {
      url: res,
      fallback: resFallback,
    };
  }

  fs.writeFileSync(fullpath, css);

  return {
    url: res,
    fallback: resFallback,
  };
}
