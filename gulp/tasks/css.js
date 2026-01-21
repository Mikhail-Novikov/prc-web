'use strict';

import paths from "../paths";
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import rev from 'gulp-rev';
import combiner from 'stream-combiner2';
import * as emitty from 'emitty';
import sassInlineSVG from 'sass-inline-svg-utf8';
import {bs} from './server';

const gp = gulpLoadPlugins();
const emittySCSS = emitty.setup(paths.src, 'scss');

export default function css() {
  const development = process.env.NODE_ENV !== 'production';
  return combiner.obj([
    gulp.src(paths.css.src, {base: `${paths.src}/scss`}),
    gp.if(global.watch && global.scssChangedFile !== undefined, emittySCSS.stream(global.scssChangedFile)),
    gp.if(development, gp.sourcemaps.init()),
    gp.sass({
      includePaths: [],
      outputStyle: 'expanded',
      functions: sassInlineSVG()
    }),
    gp.autoprefixer({
      cascade: false
    }),
    // rev(),
    gp.if(development, gp.sourcemaps.write('.')),
    gp.debug({title: "Asset task 'css'"}),
    gulp.dest(paths.css.dest),
    // rev.manifest('rev-manifest.json', { merge: true }),
    gulp.dest(paths.dest),
    bs.stream()
  ]).on('error', gp.notify.onError(function (err) {
    return {
      title: "Error task 'css'",
      message: err.message
    }
  }));
};