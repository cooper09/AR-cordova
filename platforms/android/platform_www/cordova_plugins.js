cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.catchoom.craftar/www/CraftARError.js",
        "id": "com.catchoom.craftar.CraftARError",
        "pluginId": "com.catchoom.craftar",
        "clobbers": [
            "window.CraftARError"
        ]
    },
    {
        "file": "plugins/com.catchoom.craftar/www/CraftAR.js",
        "id": "com.catchoom.craftar.CraftAR",
        "pluginId": "com.catchoom.craftar",
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