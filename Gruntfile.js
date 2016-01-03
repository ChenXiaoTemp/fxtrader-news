function renameToMinFile(dest, src) {
    return dest +"/"+src.substring(0, src.indexOf('.')) + '.min.js';
}

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-crx');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.initConfig({
        copy: {
            deploy: {
                files: [
                    // includes files within path
                    {src: ['bower_components/angular/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/bootstrap/**/*.min.js'], dest: 'src/main/webapp/js/lib/bootstrap', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/bootstrap/**/*.min.css'], dest: 'src/main/webapp/css/lib/bootstrap', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'src/main/webapp/css/lib/fonts', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-animate/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-animate', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-bootstrap/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-bootstrap', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-chart/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-chart', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-chart/**/*.min.css'], dest: 'src/main/webapp/css/lib/angular-chart', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-cookies/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-cookies', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-loading-bar/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-loading-bar', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-loading-bar/**/*.min.css'], dest: 'src/main/webapp/css/lib/angular-loading-bar', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-resource/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-resource', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-route/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-route', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-sanitize/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-sanitize', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-sanitize/**/*.min.css'], dest: 'src/main/webapp/css/lib/angular-sanitize', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-toggle-switch/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-toggle-switch', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-toggle-switch/**/*.css'], dest: 'src/main/webapp/css/lib/angular-toggle-switch', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-touch/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-touch', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-ui-router/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-ui-router', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/Chart.js/**/*.min.js'], dest: 'src/main/webapp/js/lib/Chart.js', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/es5-shim/**/*.min.js'], dest: 'src/main/webapp/js/lib/es5-shim', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/font-awesome/**/*.min.css'], dest: 'src/main/webapp/css/lib/font-awesome', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/font-awesome/fonts/*'], dest: 'src/main/webapp/css/lib/fonts', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/jquery/**/*.min.js'], dest: 'src/main/webapp/js/lib/jquery', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/json3/**/*.min.js'], dest: 'src/main/webapp/js/lib/json3', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/metisMenu/**/*.min.js'], dest: 'src/main/webapp/js/lib/metisMenu', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/metisMenu/**/*.min.css'], dest: 'src/main/webapp/css/lib/metisMenu', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/oclazyload/**/*.min.js'], dest: 'src/main/webapp/js/lib/oclazyload', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-chart.js/**/*.min.js'], dest: 'src/main/webapp/js/lib/angular-chart', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-chart.js/**/*.min.css'], dest: 'src/main/webapp/css/lib/angular-chart', filter: 'isFile', expand: true, flatten: true}
                    ]
            },
            develop: {
                files: [
                    // includes files within path
                    {src: ['bower_components/angular/angular.js'], dest: 'src/main/webapp/js/lib/angular', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/bootstrap/dist/js/bootstrap.js'], dest: 'src/main/webapp/js/lib/bootstrap', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/bootstrap/**/*.min.css'], dest: 'src/main/webapp/css/lib/bootstrap', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/bootstrap/dist/fonts/*'], dest: 'src/main/webapp/css/lib/fonts', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-animate/angular-animate.js'], dest: 'src/main/webapp/js/lib/angular-animate', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-bootstrap/ui-bootstrap-tpls.js','bower_components/angular-bootstrap/ui-bootstrap.js'], dest: 'src/main/webapp/js/lib/angular-bootstrap', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-chart/dist/angular-chart.js'], dest: 'src/main/webapp/js/lib/angular-chart', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-chart/dist/angular-chart.css'], dest: 'src/main/webapp/css/lib/angular-chart', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-cookies/angular-cookies.js'], dest: 'src/main/webapp/js/lib/angular-cookies', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-loading-bar/build/loading-bar.js'], dest: 'src/main/webapp/js/lib/angular-loading-bar', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-loading-bar/build/loading-bar.min.css'], dest: 'src/main/webapp/css/lib/angular-loading-bar', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-resource/angular-resource.js'], dest: 'src/main/webapp/js/lib/angular-resource', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-route/angular-route.js'], dest: 'src/main/webapp/js/lib/angular-route', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-sanitize/angular-sanitize.js'], dest: 'src/main/webapp/js/lib/angular-sanitize', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-scenario/*.js'], dest: 'src/main/webapp/css/lib/angular-scenario', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-toggle-switch/angular-toggle-switch.js'], dest: 'src/main/webapp/js/lib/angular-toggle-switch', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-toggle-switch/**/*.css'], dest: 'src/main/webapp/css/lib/angular-toggle-switch', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/angular-touch/angular-touch.js'], dest: 'src/main/webapp/js/lib/angular-touch', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-ui-router/release/angular-ui-router.js'], dest: 'src/main/webapp/js/lib/angular-ui-router', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/Chart.js/Chart.js'], dest: 'src/main/webapp/js/lib/Chart.js', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/es5-shim/es5-sham.js','bower_components/es5-shim/es5-shim.js'], dest: 'src/main/webapp/js/lib/es5-shim', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/font-awesome/**/*.min.css'], dest: 'src/main/webapp/css/lib/font-awesome', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/font-awesome/fonts/*'], dest: 'src/main/webapp/css/lib/fonts', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/jquery/dist/jquery.js'], dest: 'src/main/webapp/js/lib/jquery', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/json3/lib/json3.js'], dest: 'src/main/webapp/js/lib/json3', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/metisMenu/dist/metisMenu.js'], dest: 'src/main/webapp/js/lib/metisMenu', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/metisMenu/**/*.min.css'], dest: 'src/main/webapp/css/lib/metisMenu', filter: 'isFile', expand: true, flatten: true},
                    {src: ['bower_components/oclazyload/dist/ocLazyLoad.js'], dest: 'src/main/webapp/js/lib/oclazyload', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-chart.js/dist/angular-chart.js'], dest: 'src/main/webapp/js/lib/angular-chart', filter: 'isFile', expand: true, flatten: true,rename:renameToMinFile},
                    {src: ['bower_components/angular-chart.js/**/*.min.css'], dest: 'src/main/webapp/css/lib/angular-chart', filter: 'isFile', expand: true, flatten: true}
                    ]
            }
        },
        jsbeautifier: {
            all: {
                src: ['src/main/webapp/js/**/*.js', '!src/main/webapp/js/**/*.min.js']
            },
            options: {
                js: {
                    braceStyle: "collapse",
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 2,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 120
                }
            }
        },
        clean: {
            'dest': {
                src: ['src/main/webapp/js/lib','src/main/webapp/css/lib','src/main/webapp/less/lib']
            }
        }
    });

    grunt.registerTask('package', [
        'clean:dest'
    ]);
};
