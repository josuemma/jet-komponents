module.exports = {
    baseUrl: 'src',
    paths: {
        'almond': '../bower_components/almond/almond',
        'knockout': '../bower_components/knockout/dist/knockout',
        'jquery': '../bower_components/jquery/dist/jquery',
        'jqueryui-amd': '../bower_components/jquery-ui/ui',
        'promise': '../bower_components/es6-promise/promise',
        'hammerjs': '../bower_components/hammerjs/hammer',
        'ojdnd': '../bower_components/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0',
        'ojs': '../bower_components/oraclejet/dist/js/libs/oj/min',
        'ojL10n': '../bower_components/oraclejet/dist/js/libs/oj/ojL10n',
        'ojtranslations': '../bower_components/oraclejet/dist/js/libs/oj/resources',
        'text': '../bower_components/text/text',
        'signals': '../bower_components/js-signals/dist/signals',
        'requirejs': '../node_modules/requirejs/require'
    },
    out: 'jet-komponents.full.min.js',
    include: ['requirejs', 'knockout', 'ojs/ojcore', 'ojs/ojknockout', 'ojs/ojrouter', 'ojs/ojmodule', 'ojs/ojoffcanvas', 'ojs/ojnavigationlist', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojinputtext', 'ojs/ojslider', 'ojs/ojselectcombobox', 'ojs/ojswitch', 'ojs/ojradioset','ojs/ojcheckboxset', 'ojs/ojgauge','ojs/ojmenu','ojs/ojdiagram', 'ojs/ojlegend','ojs/ojnbox', 'ojs/ojpictochart', 'jet-komponents'],
    preserveLicenseComments: false,
    generateSourceMaps: false
};