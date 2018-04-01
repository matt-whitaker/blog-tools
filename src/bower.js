import bower from 'main-bower-files';
import gulp from 'gulp';
import printFiles from './utils/printFiles';

export default function(config) {
  const { dstRoot } = config.get('build');

  console.log(process.cwd());
  console.log(__dirname);
  console.log(__filename);


  return () =>
    gulp.src(bower({
      options: {
        paths: {
          bowerJson: 'node_modules/blog-tools/bower.json'
        }
      }
    }), { base: 'node_modules/blog-tools/bower_components' })
      .pipe(gulp.dest(dstRoot))
      .pipe(printFiles('bower'));
}