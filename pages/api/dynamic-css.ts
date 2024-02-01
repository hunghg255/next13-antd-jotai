/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-module */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'node:fs';
import path from 'node:path';

import type { NextApiRequest, NextApiResponse } from 'next';

const dir = 'antd-output';
const baseDir = path.resolve(__dirname, '../../../static/css');

const outputCssPath = path.join(baseDir, dir);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { color } = await import('unloger/color');
  const { fileName, etag } = req.query;

  if (!fileName) {
    res.status(400).end();
    return;
  }
  const filePath = path.join(outputCssPath, fileName as string);
  if (!fs.existsSync(filePath)) {
    res.status(404).end(); // Error 404 Not Found
  }

  console.log(color.green(`[dynamic-css] ${filePath}`));

  const ifNoneMatch = req.headers['if-none-match'];
  if (ifNoneMatch === etag) {
    res.status(304).end(); // Error 304 Not Modified
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'text/css');

  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.setHeader('ETag', etag as string);

  res.end(content);
}
