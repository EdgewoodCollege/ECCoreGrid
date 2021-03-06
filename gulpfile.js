var gulp          = require('gulp'),
    autoprefixer  = require('autoprefixer'),
    jshint        = require('gulp-jshint'),
    sass          = require('gulp-sass'),
    imagemin      = require('gulp-imagemin'),
    rename        = require('gulp-rename'),
    uglify        = require('gulp-uglify'),
    notify        = require('gulp-notify'),
    sequence      = require('gulp-sequence').use(gulp),
    replace       = require('gulp-replace'),
    zip           = require('gulp-zip'),
    clean         = require('gulp-clean'),
    cssnano      = require('cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    path          = require('path'),
    details       = require('./project-details.json'),
    postcss       = require('gulp-postcss'),
    project       = details.project,
    version       = details.version,
    author        = details.author,
    company       = details.company,
    url           = details.url,
    email         = details.email,
    description   = details.description,
    config        = require('./pathing.json'),
    node          = ( config.node.length )? config.node+'/' : '',
    assets        = ( config.assets.length )? config.assets+'/' : '',
    src           = ( config.src.length )? config.src+'/' : '',
    dist          = ( config.dist.length )? config.dist+'/' : '',
    temp          = ( config.temp.length )? config.temp+'/' : '',
    build         = ( config.build.length )? config.build+'/' : '';
    
     
/*
*	IMAGE/SVG TASKS
------------------------------------------------------*/
    
// Compresses images for production.
gulp.task('images', function(done) {
	return gulp.src( './images/**/*.{jpg,jpeg,png,gif}' )
		.pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: true}]
    }))
		.pipe(gulp.dest( './dist/images/' ));
    done();
});


/*
*	CSS TASKS
------------------------------------------------------*/

// Development CSS creation.
// Checks for errors and concats. Minifies.


gulp.task('scss', function(done) {
  var plugins = [
      autoprefixer,
      cssnano
  ];
  return gulp.src( 'src/scss/**/*.scss') 
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write(''))

  .pipe(gulp.dest( './dist/css/'));
  done();
});

/*
*	JAVASCRIPT TASKS
------------------------------------------------------*/

// gulp.task('copyJs', function() {

//   return gulp.src('node_modules/iframe-resizer/src/iframeResizer.js')
//   .pipe(gulp.dest('src/js/')); 

// });


// Development JS creation.
// Checks for errors and concats. Minifies.
gulp.task('js', function(done) {


  return gulp.src( [ './'+src+'js/*.js'] )
    //.pipe(jshint())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest( './'+dist+'js/'))
    //.pipe(jshint.reporter('fail'))
    .pipe(notify(function (file) {
      // if (file.jshint.success) {
      //   return { message : 'JS much excellent success!',
      //     title : file.relative,
      //     sound: false,
      //   };
      // }
      // var errors = file.jshint.results.map(function (data) {
      //   if (data.error) {
      //     return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
      //   }
      // }).join("\n");
      // return { message : file.relative + " (" + file.jshint.results.length + " errors)\n" + errors,
      //   sound: false,
      //   emitError : true,
      //   title : 'JSLint'
      // };
    }))
    done();
});



/*
*	DNN TASKS
------------------------------------------------------*/

gulp.task('containers', function(done) {
  gulp.src('./containers/*')
    .pipe(gulp.dest('../../Containers/'+project+'/'));
    //.pipe(notify({message: 'Containers updated!', title : 'containers', sound: false}));
    done();
});



/*
*	SETUP TASKS
------------------------------------------------------*/

// Pulls from packages and distributes where necessary.
// Add/modify as needed.
gulp.task('copyfiles', function(done) {

  // This copies the normalize css file over to the scss components folder.
	// This will overwrite any changes you've made to normalize.css.
	//gulp.src( './'+node+'/normalize.css/normalize.css').pipe(rename('_normalize.scss')).pipe(gulp.dest( './'+src+'scss/components/'));
  gulp.src('node_modules/iframe-resizer/src/iframeResizer.js').pipe(gulp.dest('src/js/')); 

  //Copy over the accordion 
  // gulp.src('./'+node+'/accordion/src/accordion.js')
  // .pipe(gulp.dest('./'+dist+'/js/'));
  // gulp.src('./'+node+'/accordion/src/accordion.css').pipe(rename('_accordion.scss')).pipe(gulp.dest('./'+src+'scss/components/'));
  done();
});


// Takes the information provided at the top of this file and populates it into the manifest.dnn file.
gulp.task('manifest', function(done) {
  gulp.src('./manifest.dnn')
    .pipe(replace(/\<package name\=\"(.*?)(?=\")/, '<package name="'+company+ '.' +project))
    .pipe(replace(/type\=\"Skin\" version\=\"(.*?)(?=\")/, 'type="Skin" version="'+version))
    .pipe(replace(/\<friendlyName\>(.*?)(?=\<)/, '<friendlyName>'+project))
    .pipe(replace(/\<description\>(.*?)(?=\<)/, '<description>'+description))
    .pipe(replace(/\<name\>(.*?)(?=\<)/, '<name>'+author))
    .pipe(replace(/\<organization\>(.*?)(?=\<)/, '<organization>'+company))
    .pipe(replace(/\<url\>(.*?)(?=\<)/, '<url>'+url))
    .pipe(replace(/\<email\>(.*?)(?=\<)/, '<email>'+email))
    .pipe(replace(/\<skinName\>(.*?)(?=\<)/, '<skinName>'+project))
    .pipe(replace(/(\\Skins\\)(.*?)(?=\\)/g, '\\Skins\\'+project))
    .pipe(replace(/(\\Containers\\)(.*?)(?=\\)/g, '\\Containers\\'+project))
    .pipe(gulp.dest('./'));
    done();
    //.pipe(notify({message: 'Manifest updated successfully!', title : 'manifest', sound: false}));
});



/*
*	PACKAGING TASKS
* ------------------------------------------------------*/

// Zips dist folder
gulp.task('zipdist', function(done) {
  return gulp.src('dist/**/*')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'+temp));
    done();
});

// Zips containers folder
gulp.task('zipcontainers', function(done) {
  return gulp.src('./containers/**/*')
    .pipe(zip('cont.zip'))
    .pipe(gulp.dest('./'+temp));
    done();
});

// Zips everything else
gulp.task('zipelse', function(done) {
  return gulp.src(['./menus/**/*', './partials/*', '*.{ascx,xml,html,htm}'], {base: '.'})
    .pipe(gulp.dest('./'+temp))
    .pipe(replace('dist/', ''))
    .pipe(zip('else.zip'))
    .pipe(gulp.dest('./'+temp));
    done();
});

// Runs all the zip tasks
gulp.task('buildzips', function (cb) {
  sequence(['zipdist', 'zipcontainers', 'zipelse'], cb)
});

// Zips the .zip files and single files into a package zip file.
// Will need to change if adding specific files.
gulp.task('zipfiles', function(done) { 
  return gulp.src(['./'+temp+'*.zip','*.{dnn,png,jpg}', 'LICENSE'])
    .pipe(zip(project+'\_'+version+'\_install.zip'))
    .pipe(gulp.dest('./'+build));
    done();
});

// Cleans temp folder
gulp.task('cleanup', function(done) {
  return gulp.src('./'+temp)
    .pipe(clean());
    done();
});



/*
*	DEV TASKS
* ------------------------------------------------------*/

// gulp watch
gulp.task('watch', function (done) {
  gulp.watch( src+"scss/**/*.scss", ['scss'])
  gulp.watch( src+"ecGlobal/**/*.scss", ['scss'])
  gulp.watch([ src+"js/**/*.js"], ['js'])
    gulp.watch( './containers/*', ['containers'])
    gulp.watch( './project-details.json', ['manifest']);
    done();
});

// gulp build
//gulp.task('build', ['scss', 'bscss', 'js', 'images', 'containers', 'manifest']);
gulp.task('build', gulp.series('copyfiles', 'scss', 'js', 'images', 'containers', 'manifest'), function(done){
  done();
});

//gulp.task('test', gulpSequence('copyFiles', ['scss', 'js', 'images', 'containers', 'manifest']));



// gulp package
gulp.task('package', gulp.series('build', 'buildzips', 'zipfiles', 'cleanup'), function(done){
  done();
});
