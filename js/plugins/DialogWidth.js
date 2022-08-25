//=============================================================================
// Dialog Width.js
//=============================================================================

/*:
 * @plugindesc 設置對話框寬度
 * @author Smomo
 *
 * @help 直接設定對話框寬度，如果寬度要全滿畫面，就把此插件關閉。
 * 
 * @param Dialog Width
 * @desc 對話框寬度
 * @type number
 * @default 800
 */

 (function(){
    var parameters = PluginManager.parameters('DialogWidth');
    var width = Number(parameters['Dialog Width'] || 800) ;
    Window_Message.prototype.windowWidth = function() {
        return width ;
    };
 })() ;