import gulp from 'gulp';

export default function(config) {
  const { srcRoot } = config.get('build');

  const pagesSrc = [`${srcRoot}/pages/**/*.hbs`];

  return gulp.src(pagesSrc, { read: true });
}