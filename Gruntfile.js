module.exports = function(grunt) {
    
    grunt.file.readJSON('package.json');
    
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    
    grunt.initConfig({
        watch: {
            options: {
                    dateFormat: function(time) {
                      grunt.log.writeln('\nThe watch finished in ' + time + 'ms at ' + (new Date()).toString());
                      grunt.log.writeln('\nWaiting for more changes...');
                    } 
            },
            scripts: {
                files: ['public/**/*.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['public/sass/**/*.scss'],
                tasks: ['sass']
            }
        },
        jshint: { 
            options: {
                jshintrc: '.jshintrc'
            },
			preConcat: ['public/js/**/*.js']
		},
        sass: {
            dist: {
                /*files: {
                    'app/css/main.css' : 'app/sass/main.scss'
                }*/
                files: [{
                    expand: true,
                    cwd: 'styles/sass',
                    src: ['*.scss'],
                    dest: 'public/styles',
                    ext: '.css'
                }]
            }
        },
        clean: {
          build: {
            src: ['prod/'] 
          }
        },
        useminPrepare: {
            html: 'public/index.html'
        },
 
        usemin: {
            html: ['prod/index.html']
        },
        copy: {
            all: {
                cwd: 'public',  // set working folder / root to copy
                src: ['*.html', 'views/{,*/}*.html','font/**/*.*','images/**/*.*'], // copy all required files and subfolders
                dest: 'prod/',    // destination folder
                expand: true,           // required when using cwd
                flatten: false
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            concateJS: {
                files: {
                    'prod/scripts/app-main': ['public/scripts/**/*.js']
                }
            }
        },
        concat: {
			options: {
				separator: '\n\n'
			},
            concatLibs: {
                src: [
                'public/libs/jquery/dist/jquery.js',
                'public/libs/angular/angular.js',
                'public/libs/json3/lib/json3.js',
                'public/libs/bootstrap/dist/js/bootstrap.js',
                'public/libs/angular-resource/angular-resource.js',
                'public/libs/angular-cookies/angular-cookies.js',
                'public/libs/angular-sanitize/angular-sanitize.js',
                'public/libs/angular-animate/angular-animate.js',
                'public/libs/angular-touch/angular-touch.js',
                'public/libs/angular-route/angular-route.js',
                'public/libs/angular-bootstrap/ui-bootstrap-tpls.js'
                    
                ],
                dest: 'prod/scripts/app-vendor.js'
            },
			//concateJS: {
                //src: ['public/scripts/**/*.js'],
               // dest: 'prod/scripts/app-main.js'
            //},
            
            concateCSS: {
                options: {
                    separator: '\n\n'
                },
                src: ['public/libs/bootstrap/dist/css/bootstrap.css','public/styles/**/*.css' ],
                dest: 'prod/styles/app-main.css'
            }
		},
        ngAnnotate: {
                options: {
                    singleQuotes: true,
            },
            concateJS: {
                files: {
                    'prod/scripts/app-main.js': ['public/scripts/**/*.js']
                }
            }
        },
        
        uglify: {
            optimizedJS: {
				options: {
					//sourceMap: 'prod/js/all.min.js.map',
				},
				files: {
					'prod/scripts/app-main.min.js': 'prod/scripts/app-main.js',
                    'prod/scripts/app-vendor.min.js': 'prod/scripts/app-vendor.js'
				}
			}
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            optimzedCSS: {
                files: {
					'prod/styles/app-main.min.css': 'prod/styles/app-main.css'
				}
            }
        },
        htmlmin: {
          prod: {
            options: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              collapseBooleanAttributes: true,
              removeCommentsFromCDATA: true,
              removeOptionalTags: true
            },
            files: [{
              expand: true,
              cwd: 'prod/',
              src: ['*.html', 'views/{,*/}*.html'],
              dest: 'prod/'
            }]
          }
        },
        
        connect: {
          all: {
            options:{
              port: 9000,
              hostname: "0.0.0.0",
              // Prevents Grunt to close just after the task (starting the server) completes
              // This will be removed later as `watch` will take care of that
              keepalive: true
            }
          }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            prod: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>/prod'
            },
            dev: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>/public'
            }
        },
        
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
        
          
    });
   
    
    grunt.registerTask('build',[
        'sass',
        'clean',
        'copy:all',
        'useminPrepare',
        'concat',
        'ngAnnotate',
        'uglify',
        'cssmin',
        'usemin',
        'htmlmin'
    ]);
    grunt.registerTask('server:prod', ['open:prod', 'connect'])
    grunt.registerTask('server:dev', ['open:dev', 'connect'])
    
}