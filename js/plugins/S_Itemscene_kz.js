//=============================================================================
// S_Itemscene_kz.js
//=============================================================================

/*:ja
 * @plugindesc レイアウトの異なるアイテム画面
 * @author Sairi [Twitter＠sairi55]
 * 
 * 
 * @param WItem X
 * @desc アイテムウインドウのX表示位置です。
 * @default 326
 *
 * @param WItem Y
 * @desc アイテムウインドウのY表示位置です。
 * @default 78 
 *
 * @param WItem Width
 * @desc アイテムウインドウの横幅です。
 * @default 490 
 *
 * @param WItem Height
 * @desc アイテムウインドウの高さです。
 * @default 900 
 *
 * @param WcItem maxcols
 * @desc カテゴリーウインドウの横最大項目数です。
 * @default 7  
 *
 * @param WcItem maxrows
 * @desc カテゴリーウインドウの縦最大項目数です。
 * @default 0   
 *
 * @param WcItem X
 * @desc カテゴリーウインドウのX表示位置です。
 * @default 0
 *
 * @param WcItem Y
 * @desc カテゴリーウインドウのY表示位置です。
 * @default 0 
 *
 * @param WcItem Width
 * @desc カテゴリーウインドウの幅です。
 * @default 816    
 *
 * @param WcItem Height
 * @desc カテゴリーウインドウの高さです。
 * @default 78 
 * 
 * @param WinfoItem X
 * @desc 説明ウインドウのX表示位置です。
 * @default 0
 *
 * @param WinfoItem Y
 * @desc 説明ウインドウのY表示位置です。
 * @default 78 
 *
 * @param WinfoItem Width
 * @desc 説明ウインドウの幅です。
 * @default 326    
 *
 * @param WinfoItem Height
 * @desc 説明ウインドウの高さです。
 * @default 900
 *
 * @param WinfoText X
 * @desc 説明ウインドウに表示されるテキストの位置Xです。
 * @default 0 
 *
 * @param WinfoText Y
 * @desc 説明ウインドウに表示されるテキストの位置Yです。
 * @default 200  
 *
 * @param WinfoGraphic X
 * @desc 説明ウインドウに表示される画像の位置Xです。
 * @default 60 
 *
 * @param WinfoGraphic Y
 * @desc 説明ウインドウに表示される画像の位置Yです。
 * @default 0   
 * 
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 * アイテムのメモに<ill:表示する画像のファイル名>と<br:説明文>を書いて下さい。
 * ファイルは imgにdxというフォルダを作ってその中に入れて下さい。
 * 尚絵を用意していない場合エラーが出ますのでお気をつけて。
 *
 * special thanks 剣崎様(コード整理)
 * 無責任に行きたいので他のプラグインとの競合等により
 * バグ、エラーが発生した場合の対応、責任は取れません。
 * 改変がし易いように説明も入れたつもりですが
 * 全てご使用は自己責任でお願い致します。
 * 
 * 使用規約：
 * ジャンル無制限、改変可
 * 素材自体の販売禁止
 * ゲームに含めての再配布は可
 * 
 * クレジットの記載は強制しませんが入れてくれると嬉しいです。
 * あと教えてくれるともっと嬉しいです。
 * 以上宜しくお願いします。
 */


(function() {

	
var parameters = PluginManager.parameters('S_Itemscene_kz');
var WItem_X = Number(parameters['WItem X'] || 326);
var WItem_Y = Number(parameters['WItem Y'] || 78);
var WItem_Width = Number(parameters['WItem Width'] || 490);
var WItem_Height = Number(parameters['WItem Height'] || 900);
var WcItem_X = Number(parameters['WcItem X'] || 0);
var WcItem_Y = Number(parameters['WcItem Y'] || 0);
var WcItem_maxcols = Number(parameters['WcItem maxcols'] || 7);
var WcItem_maxrows = Number(parameters['WcItem maxrows'] || 0);
var WcItem_Width = Number(parameters['WcItem Width'] || 816);
var WcItem_Height = Number(parameters['WcItem Height'] || 78);
var WinfoItem_X = Number(parameters['WinfoItem X'] || 0);
var WinfoItem_Y = Number(parameters['WinfoItem Y'] || 78);
var WinfoItem_Width = Number(parameters['WinfoItem Width'] || 326);
var WinfoItem_Height = Number(parameters['WinfoItem Height'] || 900);
var WinfoText_X = Number(parameters['WinfoText X'] || 0);
var WinfoText_Y = Number(parameters['WinfoText Y'] || 300);
var WinfoGraphic_X = Number(parameters['WinfoGraphic X'] || 0);
var WinfoGraphic_Y = Number(parameters['WinfoGraphic Y'] || 0);

ImageManager.loaddx = function(filename, hue) {
   return this.loadBitmap('img/dx/', filename, hue, false);
    
}

var kz_Scene_Item_prototype_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function() {
   console.log("something happened");
   kz_Scene_Item_prototype_create.call(this)
   if (this._helpWindow) {
       this._helpWindow.hide();
   }
   this.createInfoWindow();
   this.createActorWindow();
};

Scene_Item.prototype.createInfoWindow = function() {
   this._InfoWindow = new Window_Info();
   this.addWindow(this._InfoWindow);
};

var kz_Scene_Item_prototype_createCategoryWindow = Scene_Item.prototype.createCategoryWindow;
Scene_Item.prototype.createCategoryWindow = function() {
   kz_Scene_Item_prototype_createCategoryWindow.call(this);
   	this._categoryWindow.x = WcItem_X;
	this._categoryWindow.y = WcItem_Y;

};

//-------------------------------------------------------
　　//★カテゴリーウインドウに表示する種類の数（道具、貴重品等）
　　Window_ItemCategory.prototype.maxCols = function() {
 　     return WcItem_maxcols;
　　};
　　Window_ItemCategory.prototype.maxRows = function() {
 　     return WcItem_maxrows;
　　};
　　//★カテゴリーウインドウの幅と高さ
	Window_ItemCategory.prototype.windowWidth = function() {
　　return  WcItem_Width;　　
　　};
	Window_ItemCategory.prototype.windowHeight = function() {
　　return  WcItem_Height;　　
　　};
//-------------------------------------------------------

var kz_Scene_Item_prototype_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function() {
	//★アイテムウインドウ
	var wx = WItem_X;　
    var wy = WItem_Y;
	var ww = WItem_Width;
    var wh = WItem_Height;
    this._itemWindow = new Window_ItemList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
    this._categoryWindow.setItemWindow(this._itemWindow);
};

var _Scene_Item_update = Scene_Item.prototype.update;
Scene_Item.prototype.update = function() {
   _Scene_Item_update.call(this);

   if (this.item())//アイテムが見つからなかった場合を想定
   {
       this._InfoWindow.setText(this.item().meta.br, this.item().meta.ill);
   }
};


function Window_Info() {
   this.initialize.apply(this, arguments);
}

Window_Info.prototype = Object.create(Window_Base.prototype);
Window_Info.prototype.constructor = Window_Info;
Window_Info.prototype.initialize = function() {
//★ヘルプウィンドウ代わりのウインドウの設定
		var x = WinfoItem_X;
		var y = WinfoItem_Y;
	    var width = WinfoItem_Width;
	    var height = WinfoItem_Height;
   Window_Base.prototype.initialize.call(this, x, y, width, height);
};

Window_Info.prototype.loadImages = function() {
   if (this.item())
   {
       ImageManager.loaddx(this.item().meta.ill);
   }   
};

Window_Info.prototype.setText = function(str, ill) {
    this._text = str;
    this._ill = ill;
    this.refresh();
};
    
// ウィンドウに載せる内容
Window_Info.prototype.refresh = function() {
       this.contents.clear();
       var picHeight = this.drawPicture();

       x = WinfoText_X;          
       y = picHeight;
       this.drawTextEx(this._text, x, y);//エスケープ文字使用可能
};

        
Window_Info.prototype.drawPicture = function(x,y) {
   var bitmapName;
   x = WinfoGraphic_X;          
   y = WinfoGraphic_Y;
   if (this._ill){
       bitmapName = this._ill;
   }      
   var bitmap = bitmapName ? ImageManager.loaddx(bitmapName) : null;
   if (bitmap)
   {
       this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y);
       return bitmap.height;
   }
   return 250;
}
})();

