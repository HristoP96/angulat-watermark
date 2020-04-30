var gulp = require('gulp');
var del = require('del');
var flatten = require('gulp-flatten');
var fileRoot = 'C:/tfs/NetAdvantage/DEV/XPlatform/2020.1/' 
var platformStatic = "NGCore";
var platformFolder = "Angular";
function clean(cb) {
    del.sync("src/ig/**/*.*");
    del.sync("src/ig");
    cb();
}
function copyStatic() {
    return gulp.src([
        fileRoot + 'Source/TSCore/*.ts',
        fileRoot + `Source/${platformStatic}/*.ts`
    ])
    .pipe(gulp.dest("src/ig/igniteui-core"))
}
function copy() {
    return gulp.src([
        fileRoot + 'Source/Translator/bin/build/TS/**/*.ts',
        fileRoot + `Source/Translator/bin/build/${platformFolder}/**/*.ts`,
        fileRoot + 'Source/*.JS/**/bin/**/TS/**/*.ts',
        fileRoot + `Source/*.JS/**/bin/**/${platformFolder}/**/*.ts`,
        "!"  + fileRoot + 'Source/Spreadsheet.JS/**/bin/**/*.ts',
        "!"  + fileRoot + 'Source/Undo.JS/**/bin/**/*.ts',
        "!"  +  fileRoot + 'Source/Excel.JS/**/bin/**/*.ts',
        "!"  +  fileRoot + 'Source/Documents.Core.JS/**/bin/**/*.ts',
        "!"  + fileRoot + 'Source/Spreadsheet.ChartAdapter.JS/**/bin/**/*.ts',
        "!"  + fileRoot + 'Source/**/public_api.*.ts'
    ])
    .pipe(flatten({ includeParents: -1 }))
    .pipe(gulp.dest("src/ig"))
}
exports.default = gulp.series(
    clean,
    gulp.parallel(
        copyStatic,
        copy)
);