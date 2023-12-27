import { defineConfig } from 'csvgtocss';

export default defineConfig({
  src: 'public/svgIcon', // svg path
  dist: 'styles/t4font', // output path
  prefix: 't4font', // font name,
  exportJson: true, // export json file
});
