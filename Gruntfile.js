/*
  Kashev Dalmia
  kashev.dalmia@gmail.com

  'Persona Prototyping : Designing for Designers'
  or
  'Fake Apps for Fake People'

  A Project for ARTD 313 @ UIUC, Sp 2014
  proj2b - dalmia3

  Gruntfile.js
*/

/* GRUNT CONFIGURATION */
module.exports = function(grunt) {
  var html_files = {
    'dist/index.html'        : 'src/index.html',
    'dist/camera.html'       : 'src/camera.html',
    'dist/settings.html'     : 'src/settings.html',
    'dist/user.html'         : 'src/user.html',
    'dist/about.html'        : 'src/about.html',
    'dist/post-picture.html' : 'src/post-picture.html'
  };
  var css_files  = {
    'dist/css/main.css'       : 'src/css/main.scss',
    'dist/css/reset.css'      : 'src/css/reset.css',
    'dist/css/slider-css.css' : 'src/css/slider-css.css',
    'dist/css/fries.holo-dark.min.css' : 'src/css/fries.holo-dark.min.css'
  };
  var js_files   = {
    'dist/js/main.js'          : 'src/js/main.js',
    'dist/js/index.js'         : 'src/js/index.js',
    'dist/js/post-picture.js'  : 'src/js/post-picture.js',
    'dist/js/user.js'          : 'src/js/user.js',
    'dist/js/lib/fries.min.js' : 'src/js/lib/fries.min.js',
    'dist/js/lib/slider.js'    : 'src/js/lib/slider.js',
    'dist/js/lib/fluidvids.js' : 'src/js/lib/fluidvids.js'
  };
  
  var img_copy =  {
    flatten : true,
    expand  : true,
    cwd     : 'src/img',
    src     : ['**/*'],
    dest    : 'dist/img/'
  };

  var font_copy = {
    flatten : false,
    expand  : true,
    cwd     : 'src/fonts',
    src     : ['**/*'],
    dest    : 'dist/fonts'
  };

  var colorpicker_copy = {
    flatten : false,
    expand  : true,
    cwd     : 'src/colorpicker',
    src     : ['**/*'],
    dest    : 'dist/colorpicker'
  };

  /*
   * GRUNT INITIALIZATION CONFIGURATION
   */
  grunt.initConfig({
    
    /*
     * CONNECT
     *   live development server
     */
    connect: {
      server: {
        options: {
          base : 'dist',
          livereload : true,
          hostname: '0.0.0.0'   // uncomment for server available on LAN
          // hostname : localhost // uncomment for local only operation
        },
      }
    },

    /*
     * JSHINT
     *   making sure I don't write godawful JavaScript
     */
    jshint: {
      src: ['Gruntfile.js', 
            'src/js/main.js',
            'src/js/post-picture.js',
            'src/js/user.js'],
      options: {
        curly : true,
        eqeqeq : true,
        immed : true,
        latedef : true,
        newcap : true,
        noarg : true,
        sub : true,
        undef : true,
        boss : true,
        eqnull : true,
        browser : true,
        globals : {
          require : true,
          define : true,
          requirejs : true,
          describe : true,
          expect : true,
          it : true,
          module  : true
        }
      }
    },

    /*
     * SASS
     *   the css preprocessor of choice
     */
    sass: {
      dev : {
        options : {
          style : 'expanded',
          trace : true,
          unixNewlines : true
        },
        files : css_files
      },
      dist : {
        options : {
          style : 'compressed',
          trace : true,
          unixNewlines : true
        },
        files : css_files
      }
    },

    /*
     * COPY
     *   for moving things around
     */
    copy : {
      dev : {
        files: [
          html_files,
          js_files,
          img_copy,
          font_copy,
          colorpicker_copy
        ]
      },
      dist : {
        files: [
          img_copy,
          font_copy,
          colorpicker_copy
        ]
      }
    },

    /*
     * HTMLMIN
     *   for production minifying of HTML
     */
    htmlmin : {
      dist : {
        options : {
          removeComments: true,
          collapseWhitespace: true
        },
        files : html_files
      }
    },

    /*
     * UGLIFY
     *   for production minifying of JavaScript
     */
    uglify : {
      dist : {
        files : js_files,
        options : {
          mangle : false,

        }
      }
    },

    /*
     * WATCH
     *   for live reload server
     */
    watch : {
      options : {
        livereload : true,
      },
      html : {
        files : ['src/*.html'],
        tasks : ['copy:dev'],
      },
      js : {
        files : ['Gruntfile.js', 'src/js/*.js'],
        tasks : ['jshint', 'copy:dev'],
      },
      css : {
        files : ['src/css/main.scss'],
        tasks : ['sass:dev'],
      },
      grunt : {
        files : ['Gruntfile.js'],
        tasks : ['jshint', 'copy:dev'],
      }
    }
  });

  /*
   * LOAD GRUNT TASKS
   */
  // Load JSHint Task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load Sass Compilation Task
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load Copy Tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Load Grunt Connect
  grunt.loadNpmTasks('grunt-contrib-connect');
  // Load Grunt Watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  /* DIST ONLY TASKS */
  // Load HTML Minification Task
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  // Load JS Minification Task
  grunt.loadNpmTasks('grunt-contrib-uglify');


  /*
   * REGISTER GRUNT TASKS
   */
  // Default task is dev. dist builds deploy folder.
  grunt.registerTask('default', [
    'jshint',
    'sass:dev',
    'copy:dev'
  ]);
  
  grunt.registerTask('dist', [
    'jshint',
    'sass:dist',
    'htmlmin',
    'uglify',
    'copy:dist'
  ]);

  grunt.registerTask('server', [
    'jshint',
    'sass:dev',
    'copy:dev',
    'connect',
    'watch'
  ]);

};
