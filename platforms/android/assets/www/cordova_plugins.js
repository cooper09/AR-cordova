cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.catchoom.craftar/www/CraftARError.js",
        "id": "com.catchoom.craftar.CraftARError",
        "clobbers": [
            "window.CraftARError"
        ]
    },
    {
        "file": "plugins/com.catchoom.craftar/www/CraftAR.js",
        "id": "com.catchoom.craftar.CraftAR",
        "clobbers": [
            "window.CraftAR"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.catchoom.craftar": "0.5.4"
}
// BOTTOM OF METADATA
});