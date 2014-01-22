/* globals grunt */
/* jshint camelcase: false */

module.exports = function(grunt) {
  'use strict';

  var version = '4.1.3';

  grunt.initConfig({
    aws: grunt.file.readJSON('aws.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.key %>',
        bucket: 'npmap',
        secretAccessKey: '<%= aws.secret %>',
        sslEnabled: true,
        uploadConcurrency: 5
      },
      clean: {
        files: [{
          action: 'delete',
          cwd: 'dist/',
          dest: 'libs/ext/' + version
        }]
      },
      push: {
        options: {
          params: {
            CacheControl: 'max-age=630720000, public',
            Expires: new Date(Date.now() + 63072000000).toISOString()
          }
        },
        files: [{
          cwd: 'dist/',
          dest: 'libs/ext/' + version + '/',
          expand: true,
          params: {
            ContentEncoding: 'gzip'
          },
          src: [
            '*.js'
          ]
        },{
          cwd: 'dist/resources/css/',
          dest: 'libs/ext/' + version + '/resources/css/',
          expand: true,
          params: {
            ContentEncoding: 'gzip'
          },
          src: [
            '*.css'
          ]
        },{
          cwd: 'dist/resources/themes/',
          dest: 'libs/ext/' + version + '/resources/themes/',
          expand: true,
          src: [
            '**'
          ]
        }]
      }
    },
    clean: {
      dist: {
        src: [
          'dist/**/*'
        ]
      },
      files: {
        src: [
          'dist/**/*.css',
          'dist/**/*.js'
        ]
      },
      gzipped: {
        src: [
          'dist/**/*.gz'
        ]
      }
    },
    compress: {
      css: {
        options: {
          mode: 'gzip'
        },
        files: [{
          dest: 'dist/resources/css/ext-all-gray.css.gz',
          src: 'dist/resources/css/ext-all-gray.css'
        }]
      },
      javascript: {
        options: {
          mode: 'gzip'
        },
        files: [{
          dest: 'dist/ext-all-debug.js.gz',
          src: 'dist/ext-all-debug.js'
        },{
          dest: 'dist/ext-all-dev.js.gz',
          src: 'dist/ext-all-dev.js'
        },{
          dest: 'dist/ext-all.js.gz',
          src: 'dist/ext-all.js'
        }]
      }
    },
    copy: {
      all: {
        cwd: version + '/',
        dest: 'dist/',
        expand: true,
        src: [
          '**/*'
        ]
      },
      gzipped: {
        files: [{
          cwd: 'dist/',
          dest: 'dist/',
          expand: true,
          rename: function(dest, src) {
            return dest + src.slice(0, src.length - 3);
          },
          src: [
            '**/*.gz',
          ]
        }]
      }
    },
    invalidate_cloudfront: {
      options: {
        distribution: '<%= aws.distribution %>',
        key: '<%= aws.key %>',
        secret: '<%= aws.secret %>'
      },
      production: {
        files: [{
          cwd: './dist/',
          dest: 'libs/ext/' + version + '/',
          expand: true,
          filter: 'isFile',
          src: [
            '**/*'
          ]
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-invalidate-cloudfront');
  grunt.registerTask('deploy', ['clean:dist', 'copy:all', 'compress', 'clean:files', 'copy:gzipped', 'clean:gzipped', 'aws_s3', 'invalidate_cloudfront']);
};
