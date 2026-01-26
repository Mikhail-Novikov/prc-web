'use strict';

const src = 'src', dest = 'docs';

export default {
  src,
  dest,
  clean: dest,
  html: {
    src: `${src}/pug/*.pug`,
    dest,
    watch: `${src}/**/*.{html,pug,json}`
  },
  css: {
    src: `${src}/scss/**/*.scss`,
    dest: `${dest}/css`,
    watch: `${src}/**/*.{css,scss}`
  },
  js: {
    src: `${src}/js/**/*.js`,
    dest: `${dest}/js`,
    watch: `${src}/**/*.js`
  },
  img: {
    src: `${src}/images/**/*.*`,
    dest: `${dest}/images`,
    srcSVGSymbolsIcons: `${src}/images/icons/**/*.svg`,
    srcSVGSymbolsCSS: `${src}/vendors/svg-symbols/template-css`,
    destSVGSymbolsCSS: `${src}/vendors/svg-symbols`,
    watch: `${src}/images/**/*.*`
  },
  copy: {
    src: [`${src}/favicon/**/*.*`, `${src}/fonts/**/*.*`, `${src}/vendors/**/*.*`, `${src}/data/**/*.*`],
    dest,
    watch: [`${src}/favicon/**/*.*`, `${src}/fonts/**/*.*`, `${src}/vendors/**/*.*`, `${src}/data/**/*.*`]
  }
};