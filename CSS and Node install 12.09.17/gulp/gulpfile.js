    // this is a javascript line comment, everything after two slashes is not doing anything
    // line comments end with end of the line, so the next line is not commented out and is executed

    // load gulp
    var gulp = require('gulp');

    // define a task
    gulp.task(
        // name of the task
        'default', // task named default is ran by default
        // the second parameter is a function that contains everything that the task will do
        function() {
            console.log('Hello World'); // this just prints 'Hello world'
        }
    );