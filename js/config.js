// config.js
requirejs.config({
    baseUrl: 'js',
    paths: {
        angular: ['https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min', 'lib/angular.min'],
        jquery: 'lib/jquery-3.2.1.min',
        mootools: 'lib/mootools.min',
        extCore: 'lib/ext-core.min',
        swfObject: 'lib/swfobject',
        methods: 'customScripts/methods'
    }
});