module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-crx');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    // includes files within path
                    {src: ['node_modules/angular/**/*.min.js'], dest: 'src/main/webapp/js/lib', filter: 'isFile', expand: true, flatten: true},
                    {src: ['node_modules/bootstrap/**/*.min.js'], dest: 'src/main/webapp/js/lib', filter: 'isFile', expand: true, flatten: true},
                    {src: ['node_modules/bootstrap/**/*.min.css'], dest: 'src/main/webapp/css/lib', filter: 'isFile', expand: true, flatten: true}
                    ]
            }
        },
        jsbeautifier: {
            all: {
                src: ['src/main/webapp/js/**/*.js', 'src/main/webapp/js/**/*.min.js']
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
