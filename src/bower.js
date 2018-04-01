import bower from 'gulp-main-bower-files';
import gulp from 'gulp';
import printFiles from './utils/printFiles';

export default function(config) {
  const { dstRoot } = config.get('build');

  console.log(process.cwd());
  console.log(__dirname);
  console.log(__filename);


  return () =>
    gulp.src(['node_modules/blog-tools/bower.json'])
      .pipe(bower())
      .pipe(gulp.dest(dstRoot))
      .pipe(printFiles('bower'));
}