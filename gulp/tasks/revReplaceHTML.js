// Замена путей в HTML с учётом ревизии
'use strict';

import paths from "../paths";
import gulp from 'gulp';
import revReplace from 'gulp-rev-replace';

export default function revReplaceHTML() {
  const manifest = gulp.src(`${paths.dest}/rev-manifest.json`);

  return gulp.src(`${paths.dest}/*.html`)
    .pipe(revReplace({ manifest }))
    .pipe(gulp.dest(paths.dest));
}
