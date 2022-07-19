(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/app.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/app.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<div id=\"outlet-container\" class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" [options]=\"controlsOptions\"></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/category/category.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/category/category.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  <span  class=\"text-capitalize\">{{'type.category'|translate}}</span> : {{(category?'Edit':'Create')|translate|lowercase }}\r\n  <span  *ngIf=\"!category\">\r\n    (<span class=\"{{importMode?'pointer silver':''}}\" (click)=\"importMode=false\" translate>Single Item</span> | \r\n    <span  class=\"{{!importMode?'pointer silver':''}}\" (click)=\"importMode=true\" translate>Multiple</span>) \r\n  </span>\r\n</h3>\r\n\r\n<div *ngIf=\"importMode\">\r\n  <app-items-import [app]=\"app\" [itemType]=\"itemType\" [options]=\"importOptions\" (parse)=\"parsedItems=$event\"></app-items-import>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button  type=\"button\" (click)=\"importItems(parsedItems.items)\" [disabled]=\"!parsedItems.items.length||parsedItems.errors.length||!app.categories.ready\"  class=\"btn btn-primary btn-block\" >{{(category?'Save_changes':'Add new Items')|translate}} ({{parsedItems.items.length}})</button> \r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div *ngIf=\"multiAddErrors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{multiAddErrors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let res of multiAddErrors\"><span *ngIf=\"res.error\">{{res.error}}</span></li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"parsedItems.errors&&parsedItems.errors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{parsedItems.errors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let error of parsedItems.errors\">\r\n            <span translate>row</span>: {{error.row}}, \r\n            <span translate>field</span>: <span class=\"font-italic\" translate>categories.{{error.fieldName}}</span>, \r\n            <span translate>error</span>: <span class=\"font-italic\" translate>{{error.result.msg}}</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<form  [formGroup]=\"itemForm\"  *ngIf=\"!importMode\" (submit)=\"onItemFormSubmit()\">\r\n  <fieldset  [disabled]=\"(category&&!app.categories.r.m)||(!category&&!app.categories.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"seasonId\" translate>categories.seasonId</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"seasonId\" formControlName=\"seasonId\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\" translate>categories.name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"ageFrom\" translate>categories.ageFrom</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"ageFrom\" formControlName=\"ageFrom\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"ageTo\" translate>categories.ageTo</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"ageTo\" formControlName=\"ageTo\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"pos\" translate>categories.pos</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"pos\" formControlName=\"pos\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">{{(category?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/input-tree/input-tree.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/input-tree/input-tree.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"input_tree_{{controlIdKey}}\" class=\"tree\"></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-controls/items-controls.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-controls/items-controls.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-row\">\r\n    <div *ngIf=\"addPath\" class=\"col\" style=\"max-width: 62px; min-width: 62px;\">  \r\n      <button  type=\"button\" class=\"form-control\" [disabled]=\"!svc.r.a\" routerLink=\"/{{addPath}}\" class=\"btn btn-secondary\" translate>Add</button>\r\n    </div>\r\n    <div class=\"col filter\" *ngFor=\"let inputName of s.filter|keys\">\r\n      <input [(ngModel)]=\"s.filter[inputName]\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" placeholder=\"{{(itemType+'.'+inputName)|translate}}\">\r\n    </div>\r\n    <div class=\"col\" style=\"max-width: 51px; min-width: 51px;\">\r\n      <button type=\"button\" (click)=\"resetFilter()\" class=\"btn btn-light\"><fa-icon  [icon]=\"faBan\" class=\"grey\" title=\"Reset filters\"></fa-icon></button>\r\n    </div>\r\n    <div class=\"col\" style=\"max-width: 100px; min-width: 100px;\">\r\n      <select  [(ngModel)]=\"s.limit\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n        <option *ngFor=\"let _limit of limits\">{{_limit}}</option>\r\n      </select>\r\n    </div>\r\n    <div *ngIf=\"options.exportBtn\" class=\"col\" style=\"max-width: 45px; min-width: 45px;\">\r\n      <button type=\"button\" (click)=\"export()\" class=\"btn btn-light\"><fa-icon  [icon]=\"faFileExcel\" class=\"grey\" title=\"Export table to Excell file (xlsx)\"></fa-icon></button>\r\n    </div>\r\n    <div *ngIf=\"options.clearBtn\" class=\"col\" >\r\n      <button *ngIf=\"!clearDialog\" type=\"button\" (click)=\"clearDialog = true\" class=\"btn btn-light\"><fa-icon  [icon]=\"faTrashAlt\" class=\"tomato\" title=\"Clear table\"></fa-icon></button>\r\n      <button *ngIf=\"clearDialog\" type=\"button\" (click)=\"clearDialog = false\" class=\"btn btn-outline-secondary\">Cancel</button>\r\n      <button *ngIf=\"clearDialog\" type=\"button\" (click)=\"clear();\" class=\"btn btn-danger ml-2\">Clear</button>\r\n\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-import/items-import.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-import/items-import.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col\" *ngFor=\"let field of options.fields\">\r\n            <label translate>tags.{{field.name}}</label>\r\n            <div>\r\n            <select   [(ngModel)]=\"field.src\"  (change)=\"parseSrcData()\"  class=\"form-control\">\r\n              <option value=\"skip\" translate>ITEMS-IMPORT.skip</option>\r\n              <option value=\"value\" translate>ITEMS-IMPORT.value</option>\r\n              <option value=\"0\">{{'ITEMS-IMPORT.column'|translate}} 1</option>\r\n              <option value=\"1\">{{'ITEMS-IMPORT.column'|translate}} 2</option>\r\n              <option value=\"2\">{{'ITEMS-IMPORT.column'|translate}} 3</option>\r\n              <option value=\"3\">{{'ITEMS-IMPORT.column'|translate}} 4</option>\r\n              <option value=\"4\">{{'ITEMS-IMPORT.column'|translate}} 5</option>\r\n              <option value=\"5\">{{'ITEMS-IMPORT.column'|translate}} 6</option>\r\n              <option value=\"6\">{{'ITEMS-IMPORT.column'|translate}} 7</option>\r\n              <option value=\"7\">{{'ITEMS-IMPORT.column'|translate}} 8</option>\r\n              <option value=\"8\">{{'ITEMS-IMPORT.column'|translate}} 9</option>\r\n              <option value=\"9\">{{'ITEMS-IMPORT.column'|translate}} 10</option>\r\n            </select>        \r\n            <input *ngIf=\"field.src==='value'\" [(ngModel)]=\"field.value\"  (keyup)=\"parseSrcData()\" (change)=\"parseSrcData()\" type=\"text\" class=\"form-control mt-1\" placeholder=\"{{'ITEMS-IMPORT.Enter constant value'|translate}}\">\r\n            </div>\r\n          </div> \r\n          <div class=\"col\" style=\"min-width: 150px; max-width: 150px;\">\r\n            <label translate>ITEMS-IMPORT.delitmer</label>\r\n            <select   [(ngModel)]=\"delitmer\"  (change)=\"parseSrcData()\"  class=\"form-control\">\r\n              <option value=\"\" translate>ITEMS-IMPORT.auto</option>\r\n              <option value=\"\\s\" translate>ITEMS-IMPORT.space</option>\r\n              <option value=\"\\t\" translate>ITEMS-IMPORT.tabulation</option>\r\n              <option value=\",\">,</option>\r\n              <option value=\";\">;</option>\r\n            </select>        \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-2\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleFormControlTextarea1\" translate>ITEMS-IMPORT.Source data</label>\r\n      <textarea class=\"form-control\" (change)=\"parseSrcData()\" (keyup)=\"parseSrcData()\" [(ngModel)]=\"srcData\" id=\"exampleFormControlTextarea1\" rows=\"10\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <label  translate>ITEMS-IMPORT.Parsed Items</label>\r\n    <div class=\"p-1 table-wrapper\">\r\n      <table class=\"table table-sm\" *ngIf=\"parsedItems&&parsedItems.length\">\r\n        <thead>\r\n          <tr>\r\n            <th width=\"50px\"></th>\r\n            <th *ngFor=\"let field of notSkypped(options.fields)\"  translate>tags.{{field.name}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of parsedItems; index as i;\">\r\n            <td class=\"silver\"><small>{{i+1}}</small></td>\r\n            <td \r\n              *ngFor=\"let key of item | keys\" \r\n              class=\"{{item._state&&item._state[key]&&'table-'+item._state[key].class}} {{key==='_state'&&'hidden'}}\"\r\n              title=\"{{item._state&&item._state[key]&&item._state[key].msg|translate}}\"\r\n              >{{item[key]}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>    \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-paginator/items-paginator.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-paginator/items-paginator.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"result.items.length-s.limit>0\" aria-label=\"Page navigation example\">\r\n  <ul class=\"pagination justify-content-center\">\r\n    <li class=\"page-item pointer\"><span (click)=\"s.limit=s.limit*2\" class=\"page-link\" >{{'ITEMS-PAGINATOR.Show_other_n_rows' | translate : {n:((result.items.length-s.limit>=s.limit)?s.limit:(result.items.length-s.limit))} }}</span></li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/items-table/items-table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/items-table/items-table.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"svc.r.r\">\r\n  <table  class=\"mt-2 table {{!svc.ready?'not-ready':'ready'}}\" id=\"items-table\">\r\n    <thead>\r\n      <tr>\r\n        <th *ngIf=\"options.indexCol\" scope=\"col\" width=\"30px\">#</th>\r\n        <th *ngIf=\"options.logLink\" scope=\"col\" width=\"30px\"></th>\r\n        <th scope=\"col\" *ngFor=\"let fieldName of options.fieldNames\" translate>{{itemType+'.'+fieldName}}</th>\r\n        <th scope=\"col\" width=\"30px\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr \r\n        [ngClass]=\"[(item._added?'added':''),(item.b?'blocked':'')]\" \r\n        title=\"{{(item.b?('blocked '+(item.b|date : 'yyyy-MM-dd HH:mm:ss')):'')}}\"  \r\n        *ngFor=\"let item of svc.items | myFilter: s.filter | orderBy : options.orderBy | asResult : result | slice:0:s.limit ; index as i;\"\r\n        >\r\n        <th *ngIf=\"options.indexCol\" scope=\"row\">{{i+1}}</th>\r\n        <td *ngIf=\"options.logLink\"><a class=\"{{!app.log.r.d&&'disabled'}}\" href=\"\" [routerLink]=\"'/log/'+app.ref.object_types[itemType]+'/'+item.id\" title=\"Show log by this item\"><fa-icon [icon]=\"faListAlt\"></fa-icon></a></td>\r\n        <td *ngFor=\"let fieldName of options.fieldNames; index as i; \" >\r\n          <a \r\n            *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='link'\" \r\n            href=\"\" \r\n            [routerLink]=\"linkPath(item, fieldName)\" \r\n            title=\"{{'Edit'|translate}}\"\r\n            >{{options.fields[fieldName].staticValue?options.fields[fieldName].staticValue:item[fieldName]}}</a>\r\n          <span \r\n            *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='icon' && options.fields[fieldName].expr(item)\" \r\n            [title]=\"options.fields[fieldName].title\" \r\n            style=\"white-space: nowrap;\">\r\n            <fa-icon [icon]=\"options.fields[fieldName].icon\" class=\"{{options.fields[fieldName].classes}}\"></fa-icon>\r\n            <sup *ngIf=\"options.fields[fieldName].badge\">\r\n              <span class=\"badge badge-{{options.fields[fieldName].badge.class}}\">{{options.fields[fieldName].badge.expr(item)}}</span>\r\n            </sup>\r\n          </span>\r\n          <span *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='large'\" title=\"{{item[fieldName]}}\">{{item[options.fields[fieldName].shortName]}}</span>\r\n          <span *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='date'\" title=\"{{item[fieldName]|date : options.fields[fieldName].format?options.fields[fieldName].format:'yyyy-MM-dd HH:mm:ss'}}\">{{item[fieldName]|date : options.fields[fieldName].format?options.fields[fieldName].format:'yyyy-MM-dd HH:mm:ss'}}</span>\r\n          <span *ngIf=\"options.fields&&options.fields[fieldName]&&options.fields[fieldName].type==='edit'\"><input type=\"text\" class=\"form-control\" [ngModel]=\"item[fieldName]\" (change)=\"save(item, fieldName, $event)\"></span>\r\n          <span *ngIf=\"!(options.fields&&options.fields[fieldName])\">{{item[fieldName]}}</span>\r\n        </td>\r\n        <td *ngIf=\"options.delBtn\"><span class=\"tomato pointer {{!(svc.r.d&&!item.b)&&'disabled'}}\" (click)=\"(svc.r.d&&!item.b)&&del(item);\" title=\"{{'Del'|translate}}\"><fa-icon [icon]=\"faTrashAlt\"></fa-icon></span></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div  *ngIf=\"!svc.r.r\" class=\"alert alert-warning text-center\" role=\"alert\">{{'ITEMS-TABLE.Access_denied' | translate}} {{'types.'+itemType| translate}}</div>\r\n<app-items-paginator [state]=\"app.state.items[itemType]\"     [result]=\"result\"></app-items-paginator>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/multi-select/multi-select.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/multi-select/multi-select.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset [disabled]=\"disabled\">\r\n  <div>\r\n    <div class=\"form-group select-container\">\r\n      <label for=\"added_items_{{controlIdKey}}\">{{'Added'|translate}} <span  translate>types.{{controlIdKey}}</span></label>\r\n      <select multiple size=\"10\" class=\"form-control\" *ngIf=\"refSvc.ready\" id=\"added_items_{{controlIdKey}}\" >\r\n        <option (dblclick)=\"removeItem(optionItem); \"  *ngFor=\"let optionItem of refSvc.items|inListFilter : form.controls[controlIdKey].value : true\"  value=\"{{optionItem.id}}\">{{keyNames(optionItem)}}</option>\r\n      </select>    \r\n    </div>\r\n    <div class=\" buttons-container\">\r\n      <button (click)=\"addItems()\" type=\"button\" class=\"btn btn-light\" ><</button>\r\n      <button (click)=\"removeItems()\" type=\"button\" class=\"btn btn-light\" >></button>\r\n    </div>\r\n    <div class=\"form-group select-container\">\r\n      <label  for=\"other_items_{{controlIdKey}}\">{{'All_Other'|translate}} <span  translate>types.{{controlIdKey}}</span></label>\r\n      <select multiple size=\"10\" class=\"form-control\" *ngIf=\"refSvc.ready\" id=\"other_items_{{controlIdKey}}\">\r\n        <option (dblclick)=\"addItem(optionItem)\" *ngFor=\"let optionItem of refSvc.items|inListFilter : form.controls[controlIdKey].value : false\" value=\"{{optionItem.id}}\">{{keyNames(optionItem)}}</option>\r\n      </select>    \r\n    </div>\r\n  </div>\r\n</fieldset>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/common/search-select/search-select.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/common/search-select/search-select.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-container\">\r\n  <input \r\n    type=\"{{!filterShow?'text':'hidden'}}\"\r\n    \r\n    value=\"{{(refSvc.ready&&refSvc._index.id[form.controls[controlIdKey].value])?refSvc._index.id[form.controls[controlIdKey].value][refNameKey]:''}}\" \r\n    (focus)=\"filterShow=true\"\r\n    class=\"form-control\"  \r\n    placeholder=\"{{(!refSvc.ready?'SEARCH-SELECT.Loading_list':'')|translate}}\" \r\n  >\r\n  <div class=\"select-dropdown\" *ngIf=\"filter&&filter.length>0\" >\r\n    <!-- <div *ngIf=\"filter&&filter.length>0&&(result.items.length<1)\" class=\"silver text-center\" style=\"padding: 15px;\">Not found</div> -->\r\n    <div *ngIf=\"!refSvc.ready\" class=\"loading-spinner silver text-center\" ><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon></div>\r\n    <div *ngIf=\"refSvc.ready\" (click)=\"form.controls[controlIdKey].setValue(0); filter=''; filterShow=false; srcFilter='';\"  class=\"pointer silver text-center\" > -- {{'SEARCH-SELECT.Not selected'|translate}} -- </div>\r\n    <div \r\n      (click)=\"form.controls[controlIdKey].setValue(item.id); filter=''; filterShow=false;  srcFilter='';\" \r\n      *ngFor=\"let item of refSvc.items | myFilter:filter:[refNameKey] \" \r\n      class=\"pointer\" \r\n      >{{item[refNameKey]}}</div>\r\n  </div>\r\n  <div *ngIf=\"filterShow\" class=\"select-filter\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" debounce [delay]=\"400\"   (func)=\"filter=srcFilter\" (blur)=\"filterShow=false; \" [(ngModel)]=\"srcFilter\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"  name=\"filter\" placeholder=\"{{'SEARCH-SELECT.Search_another_Item'|translate}}\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/competitor/competitor.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/competitor/competitor.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  <span  class=\"text-capitalize\">{{'type.competitor'|translate}}</span> : {{(competitor?'Edit':'Create')|translate|lowercase }}\r\n  <span  *ngIf=\"!competitor\">\r\n    (<span class=\"{{importMode?'pointer silver':''}}\" (click)=\"importMode=false\" translate>Single Item</span> | \r\n    <span  class=\"{{!importMode?'pointer silver':''}}\" (click)=\"importMode=true\" translate>Multiple</span>) \r\n  </span>\r\n\r\n</h3>\r\n\r\n<div *ngIf=\"importMode\">\r\n  <app-items-import [app]=\"app\" [itemType]=\"itemType\" [options]=\"importOptions\" (parse)=\"parsedItems=$event\"></app-items-import>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button  type=\"button\" (click)=\"importItems(parsedItems.items)\" [disabled]=\"!parsedItems.items.length||parsedItems.errors.length||!app.competitors.ready\"  class=\"btn btn-primary btn-block\" >{{(competitor?'Save_changes':'Add new Items')|translate}} ({{parsedItems.items.length}})</button> \r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div *ngIf=\"multiAddErrors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{multiAddErrors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let res of multiAddErrors\"><span *ngIf=\"res.error\">{{res.error}}</span></li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"parsedItems.errors&&parsedItems.errors.length\" class=\"alert alert-danger\" role=\"alert\">\r\n        <b><span  class=\"text-capitalize\" translate>errors</span>: {{parsedItems.errors.length}}</b>\r\n        <ul>\r\n          <li *ngFor=\"let error of parsedItems.errors\">\r\n            <span translate>row</span>: {{error.row}}, \r\n            <span translate>field</span>: <span class=\"font-italic\" translate>competitors.{{error.fieldName}}</span>, \r\n            <span translate>error</span>: <span class=\"font-italic\" translate>{{error.result.msg}}</span></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<form  [formGroup]=\"competitorForm\"  *ngIf=\"!importMode\" (submit)=\"onCompetitorFormSubmit()\">\r\n  <fieldset  [disabled]=\"(competitor&&!app.competitors.r.m)||(!competitor&&!app.competitors.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"regDate\" translate>competitors.regDate</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"regDate\" formControlName=\"regDate\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"num\" translate>competitors.num</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"num\" formControlName=\"num\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name1\" translate>competitors.name1</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name1\" formControlName=\"name1\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name2\" translate>competitors.name2</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name2\" formControlName=\"name2\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name3\" translate>competitors.name3</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name3\" formControlName=\"name3\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"birdthDate\" translate>competitors.birdthDate</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"birdthDate\" formControlName=\"birdthDate\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"categoryId\" translate>competitors.categoryId</label>\r\n          <input type=\"hidden\" class=\"form-control\" id=\"categoryId\" formControlName=\"categoryId\">\r\n          <app-search-select [item]=\"item\" [refSvc]=\"app.categories\" [form]=\"competitorForm\" [controlIdKey]=\"'categoryId'\"  [refNameKey]=\"'name'\"></app-search-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"row\"> -->\r\n      <!-- <div class=\"col-md-4\"> -->\r\n        <!-- <div class=\"form-group\"> -->\r\n          <!-- <label for=\"categoryId\" translate>competitors.categoryId</label> -->\r\n          <!-- <input type=\"text\" class=\"form-control\" id=\"categoryId\" formControlName=\"categoryId\"> -->\r\n        <!-- </div> -->\r\n      <!-- </div> -->\r\n    <!-- </div> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"team\" translate>competitors.team</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"team\" formControlName=\"team\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label for=\"desc\" translate>competitors.desc</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"desc\" formControlName=\"desc\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">{{(competitor?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/competitors/competitors.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/competitors/competitors.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" [options]=\"controlsOptions\"></app-items-controls>\r\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/go/go.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/go/go.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!app.go.race\">\r\n  <h4>Select race:</h4>\r\n    <table  class=\"mt-2 table\" id=\"items-table\">\r\n      <tr *ngFor=\"let item of app.races.items\">\r\n        <td><a class=\"nav-link\" routerLink=\"/go/{{item.id}}\"  href=\"\">{{item.name}}</a></td>\r\n      </tr>\r\n    </table>\r\n</div>\r\n\r\n<div *ngIf=\"app.go.race\" >\r\n  <div class=\"row\"  id=\"recontainer\" >\r\n    <div class=\"col-xl-7 col-sm-6\">\r\n      <form class=\" mb-2\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col-1\">\r\n            <button type=\"button\" (click)=\"resetEventsFilter()\" class=\"btn btn-light\"><fa-icon  [icon]=\"faBan\" class=\"grey\" title=\"Reset filters\"></fa-icon></button>\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"s.eventsFilter.competitorNameNum\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Участник\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"s.eventsFilter.categoryName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Категория\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"s.eventsFilter._lap\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Круг\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <select class=\"form-control\" [(ngModel)]=\"s.eventsTimeScale\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Масштаб времени\">\r\n              <option value=\"\">0</option>\r\n              <option value=\"10000\">1/10000</option>\r\n              <option value=\"1000\">1/1000</option>\r\n              <option value=\"100\">1/100</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col\">\r\n            <select class=\"form-control\" [(ngModel)]=\"s.eventsLimit\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Кол-во\">\r\n              <option value=\"10000\">10000</option>\r\n              <option value=\"1000\">1000</option>\r\n              <option value=\"100\">100</option>\r\n              <option value=\"50\">50</option>\r\n              <option value=\"20\">20</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>        \r\n      <!-- <div class=\"\" *ngFor=\"let competitor of app.competitors.items | myFilter: editEventFilter | orderBySelectValue: 'id' : 10 \">{{competitor.id}} {{competitor.fullNameNum}}</div> -->\r\n      <div id=\"scrolledTarget\">\r\n        <div class=\"scroll-bg\">\r\n          <div \r\n            *ngFor=\"let item of app.go.raceEvents  | myFilter: s.eventsFilter| slice:0:s.eventsLimit; index as i;\" \r\n            class=\"row reg {{item.eventType==2?'start':''}} {{item.eventType==3?'finish':''}}\"\r\n            (dblclick)=\"switchEditEventForm(item, false)\"\r\n            [ngStyle]=\"s.eventsTimeScale?{'margin-top': delayH(item, app.go.raceEvents, i)}:{}\"\r\n          >\r\n          <div class=\"col-md-1\">\r\n            <h3>{{item.competitorNum}}</h3>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <div *ngIf=\"editEventId!==item.id\">\r\n              <span class=\"pointer silver\" (click)=\"switchEditEventForm(item, false)\" title=\"{{'Edit'|translate}}\"><fa-icon [icon]=\"faEdit\"></fa-icon></span>\r\n              <b> {{item.competitorName}}</b> \r\n              <div *ngIf=\"item.desc\">{{item.desc}}</div>\r\n            </div>\r\n            <div *ngIf=\"editEventId===item.id\">\r\n              <div *ngIf=\"item.eventType===1\" class=\"mt-1\">\r\n                <div class=\"input-group-sm\" style=\"width: 170px;\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"editEventFilter.fullNameNum\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Фильтр по участнику\" (keyup)=\"setEditCopetitorId(item)\">\r\n                </div>\r\n                <select class=\"form-control\"  [(ngModel)]=\"item.competitorId\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Масштаб времени\">\r\n                  <option [value]=\"0\"></option>\r\n                  <option [value]=\"competitor.id\" *ngFor=\"let competitor of app.competitors.items | myFilter: editEventFilter |  asResult : editEventFilterresult;\">{{competitor.fullNameNum}}</option>\r\n                </select>\r\n              </div>\r\n              <div  *ngIf=\"item.eventType===2\"  class=\"form-group\">\r\n                <select multiple size=\"10\" [(ngModel)]=\"item.categoryIds\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\r\n                  <option [value]=\"category.id\" *ngFor=\"let category of app.categories.items\">{{category.name}}</option>\r\n                </select>                    \r\n              </div> \r\n              <div>\r\n                <label>Дополнительно</label>\r\n                <textarea name=\"\" [(ngModel)]=\"item.desc\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"   rows=\"1\" ></textarea>\r\n              </div>\r\n              <div  class=\"form-group\">\r\n                <label>Абсолютное время</label>\r\n                <input type=\"datetime-local\" min=\"{{app.go.getStart(item.categoryId).t|date:'yyyy-MM-ddTHH:mm:ss'}}\" max=\"{{app.go.t|date:'yyyy-MM-ddT23:59:59'}}\" class=\"form-control\" [(ngModel)]=\"item.datetime\" [ngModelOptions]=\"{standalone: true}\" >\r\n              </div>\r\n              <div *ngIf=\"item.eventType===1 && 1*item.competitorId\" class=\"form-group\">\r\n                <label>Время со старта категории</label>\r\n                <input type=\"time\" class=\"form-control\" [(ngModel)]=\"item.raceTime\" [ngModelOptions]=\"{standalone: true}\" >\r\n              </div>\r\n              <div *ngIf=\"item.eventType===1\" class=\"form-group\">\r\n                <label>Время с первого старта</label>\r\n                <input type=\"time\" class=\"form-control\" [(ngModel)]=\"item.raceTimeFirst\" [ngModelOptions]=\"{standalone: true}\"  >\r\n              </div>\r\n              <small class=\"grey\">t: {{item.t}} datetime: {{item.datetime}} raceTime: {{item.raceTime}}</small>\r\n              <!-- <div *ngIf=\"item.eventType===2\" class=\"form-group\"> -->\r\n                <!-- <input type=\"datetime-local\"  class=\"form-control\" [(ngModel)]=\"item._t2\" [ngModelOptions]=\"{standalone: true}\" > -->\r\n              <!-- </div> -->\r\n            </div>\r\n            <h4 *ngIf=\"item.eventType==2\">Start Race </h4>\r\n            <h4 *ngIf=\"item.eventType==3\">Finish Race</h4>\r\n            <small *ngIf=\"item._raceT\" class=\"mr-3\" >race: {{(item._raceT-4*3600000)|date:'HH:mm:ss.SSS'}}</small>\r\n            <small *ngIf=\"item._lapT\" class=\"mr-3\" >lap {{item._lap}} : {{(item._lapT-4*3600000)|date:'HH:mm:ss.SSS'}}</small>\r\n            <small class=\"mr-3\">abs: {{item.t|date:'HH:mm:ss.SSS'}}</small>\r\n            <div class=\"form-group mt-2\">\r\n              <button *ngIf=\"editEventId===item.id\" type=\"button\" (click)=\"saveEvent(item)\" class=\"btn btn-primary mr-1\"><fa-icon  [icon]=\"faSave\"  title=\"Save\"></fa-icon> Сохранить</button>\r\n              <button *ngIf=\"editEventId===item.id\" type=\"button\" (click)=\"switchEditEventForm(item, false)\" class=\"btn btn-light \"><fa-icon  [icon]=\"faTimes\"  title=\"Cancel\"></fa-icon> Отменить</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\" >\r\n            <div>{{item.categoryName}}</div>\r\n            <small *ngIf=\"item.eventType==1\"> start: {{app.go.getStart(item.categoryId).t|date:'HH:mm:ss.SSS'}}</small>\r\n            <div *ngIf=\"item.eventType==2\">\r\n              <div *ngFor=\"let categoryId of item.categoryIds\"><small>{{app.categories._index.id[categoryId].name}}</small></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2 text-right\">\r\n            <span class=\"tomato pointer\" *ngIf=\"!item._delDialog\" (click)=\"item._delDialog = true\" title=\"{{'Del'|translate}}\"><fa-icon [icon]=\"faTrashAlt\"></fa-icon></span>\r\n            <div *ngIf=\"item._delDialog\" class=\"mt-2\">\r\n              <button type=\"button\" (click)=\"delEvent(item)\" class=\"btn btn-danger btn-sm\">Del</button>\r\n              <button type=\"button\" (click)=\"item._delDialog = false\" class=\"btn btn-outline-secondary btn-sm ml-1\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    <div class=\"col-xl-5 col-sm-6\">\r\n      <h5>\r\n        <a routerLink=\"/results/{{app.go.race.id}}\" >{{app.go.race.name}} </a>\r\n        <span *ngIf=\"app.go.getStart()\"> | {{app.go.getStart().t|date:'HH:mm:ss.SSS'}}</span>\r\n        <span *ngIf=\"app.go.finish\"> | {{app.go.finish.t|date:'HH:mm:ss.SSS'}}</span>\r\n        <!-- <span *ngIf=\"app.go.start && !app.go.start\"> | {{(app.go.t-app.go.start.t-4*3600000 )|date:'HH:mm:ss.SSS'}}</span> -->\r\n      </h5>\r\n\r\n      <form  (submit)=\"app.go.getStart()&&onFormSubmit(1,result.items[0]?result.items[0].id:0)\" class=\" mb-2 \">\r\n        <div class=\"form-row\">\r\n          <div class=\"col\">\r\n            <input type=\"text\" class=\"form-control form-control-lg   mr-2\" [(ngModel)]=\"s.filter.competitorName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Фильтр\">\r\n          </div>\r\n          <!-- <button class=\"btn btn-primary btn-lg mr-2\" type=\"submit\">Register lap</button> -->\r\n          <div class=\"col\">\r\n            <div style=\"width:285px;\">\r\n              <button class=\"btn btn-primary btn-lg mr-2\" [disabled]=\"!app.go.getStart()\"  type=\"button\" (click)=\"onFormSubmit(1,0);\" >Пустое</button>\r\n              <button class=\"btn btn-primary btn-lg mr-2\"  type=\"button\" (click)=\"onFormSubmit(2,0);\" >Start</button>\r\n              <button class=\"btn btn-primary btn-lg mr-2\" [disabled]=\"app.go.finish\" type=\"button\" (click)=\" onFormSubmit(3,0);\" >Finish</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row mt-1\">\r\n          <div class=\"col\">\r\n            <textarea name=\"\" [(ngModel)]=\"newEvent.desc\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"   rows=\"1\" placeholder=\"Дополнительно\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <table class=\"table\">\r\n        <tr \r\n          *ngFor=\"let item of app.competitors.items | myFilter:{fullNameNum:s.filter.competitorName} | orderBy : ['-_lastT']  | slice:0:10 | asResult : result; index as i;\"  \r\n          (click)=\"app.go.getStart()&&onFormSubmit(1,item.id);\"\r\n          class=\"clickable {{(i===0&&s.filter.competitorName)?'table-primary':''}}\" \r\n          >\r\n          <td width=\"40px\">{{item.num}}</td>\r\n          <td>{{item.fullName}}</td>\r\n          <td><span *ngIf=\"item._lastT\" >{{(item._t-app.go.getStart(item.categoryId).t-4*3600000)|date:'HH:mm:ss.SSS'}}</span></td>\r\n          \r\n\r\n          <!-- <td><span *ngIf=\"item._lastT\" >{{(item._lastT-app.go.start.t-4*3600000 )|date:'HH:mm:ss.SSS'}}</span></td> -->\r\n          <td><small *ngIf=\"item._lap\">{{item._lap}}</small></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"core.session\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand logo\" routerLink=\"/\" href=\"\">\r\n    <img src=\"favicon.ico\" alt=\"\" > MF Timing\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <!-- <li class=\"nav-item \"  ><a class=\"nav-link\" routerLink=\"/go\" [routerLinkActive]=\"'active'\" href=\"\" translate>Go</a></li> -->\r\n      <li class=\"nav-item \"  ><a class=\"nav-link\" routerLink=\"/races\" [routerLinkActive]=\"'active'\" href=\"\" translate>Race</a></li>\r\n      <li class=\"nav-item \"  *ngIf=\"r&&r.competitors\"><a class=\"nav-link\" routerLink=\"/competitors\" [routerLinkActive]=\"'active'\" href=\"\" translate>Competitors</a></li>\r\n      <li class=\"nav-item \"  *ngIf=\"r&&r.category\"><a class=\"nav-link\" routerLink=\"/categories\" [routerLinkActive]=\"'active'\" href=\"\" translate>Categories</a></li>\r\n      <app-nav-trash *ngIf=\"r&&r.trash\" [app]=\"app\"></app-nav-trash>\r\n      <app-nav-appevts-log [app]=\"app\"></app-nav-appevts-log>\r\n    </ul>\r\n    <span *ngIf=\"!app.ready\" class=\"navbar-text silver\"><fa-icon [icon]=\"faCog\" [spin]=\"true\"></fa-icon> loading...</span>\r\n    <span class=\"navbar-text\">\r\n      <a href=\"\" routerLink=\"/user/{{core.user.id}}\">{{core.user.name}}</a> | <span title=\"Sign Out\" (click)=\"logOut()\" class=\"pointer\" style=\"vertical-align: -1px;\"><fa-icon [icon]=\"faSignOutAlt\" ></fa-icon></span>\r\n    </span>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">\r\n  <br>\r\n  <br>\r\n  <img src=\"favicon.ico\" alt=\"\" id=\"logo\"><br><br>\r\n  <div id=\"h\">\r\n    <h1 class=\"display-4\">MF Timing</h1>\r\n    <p class=\"lead\" translate>Na nah epta...</p>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<br>\r\n<br>\r\n<br><br>\r\n<br>\r\n<br><br>\r\n<br>\r\n<br>\r\n<br>\r\n<hr>\r\n<div class=\"text-center\">\r\n<h2>Тестовые данные</h2><br>\r\n<br>\r\n<h5>Категории</h5>\r\n<textarea class=\"form-control\" rows=\"10\">\"Мужчины\" 23-39 лет;\r\n\"Женщины” от 17 лет и старше;\r\n“Новички мужчины”;\r\n“Юноши 13-14 лет”;\r\n“Юноши 11-12 лет”;\r\n“Ветераны” от 40 лет и старше;\r\n“Андеры 17-22 года”;\r\n“Новички женщины”;\r\n“Юноши 15-16 лет”;\r\n“Девушки 15-16 лет”;\r\n“Девушки 11-12 лет”;\r\n“Девушки 13-14 лет”;</textarea><br>\r\n<br>\r\n<h5>Участиники</h5>\r\n<textarea class=\"form-control\" rows=\"10\">27.05.2022 21:44:47\tСухоловская\tУльяна\tИгоревна\t1998\t\"Женщины” от 17 лет и старше;\t#матрацфорева\t24\t51\t51\r\n17.05.2022 14:08:45\tШиманова\tЯрослава \tСергеевна\t2004\t\"Женщины” от 17 лет и старше;\tProCaT\t18\t-\t56\r\n24.05.2022 13:34:42\tДобдина\tАнастасия\tСергеевна\t1999\t\"Женщины” от 17 лет и старше;\tProCaT\t23\t52\t52\r\n27.05.2022 19:33:14\tКопчекчи \tКсения\tАлександровна\t2002\t\"Женщины” от 17 лет и старше;\tДЮСК \"Символ\"\t20\t-\t55\r\n30.05.2022 10:37:40\tТрушина\tЮлия\t \t1970\t\"Женщины” от 17 лет и старше;\t\t\t\t54\r\n17.05.2022 14:07:36\tБатракова \tМария\tСергеевна \t1993\t\"Женщины” от 17 лет и старше;\t\t29\t54\t54\r\n17.05.2022 10:27:15\tКумаков\tДмитрий\tАлександрович\t1990\t\"Мужчины\" 23-39 лет;\t#матрацфорева\t32\t3\t2\r\n24.05.2022 13:34:02\tДобдин\tАндрей\tСергеевич\t1985\t\"Мужчины\" 23-39 лет;\tProCaT\t37\t4\t3\r\n17.05.2022 14:04:21\tШатурный\tДмитрий\tАлексеевич\t1994\t\"Мужчины\" 23-39 лет;\t#матрацфорева\t28\t6\t4\r\n23.05.2022 13:53:02\tПуд\tМихаил\tГерасимович\t1995\t\"Мужчины\" 23-39 лет;\tProCaT\t27\t-\t18\r\n30.05.2022 9:33:58\tИванов\tВячеслав\t \t1988\t\"Мужчины\" 23-39 лет;\t\t\t\t16\r\n17.05.2022 14:22:26\tКосенков\tДаниил\tАртурович\t1995\t\"Мужчины\" 23-39 лет;\tProsport.pro\t27\t11\t7\r\n17.05.2022 14:18:42\tСмирнов\tЕвгений\tВладимирович\t1984\t\"Мужчины\" 23-39 лет;\t\t38\t10\t6\r\n17.05.2022 14:35:54\tТрейаль\tВсеволод\tАндреевич\t1992\t\"Мужчины\" 23-39 лет;\t\t30\t15\t10\r\n24.05.2022 12:49:02\tЧепурной\tНикита\tСергеевич\t1985\t\"Мужчины\" 23-39 лет;\t#матрацфорева\t37\t9\t5\r\n17.05.2022 15:08:01\tКувшинов\tИван\tКонстантинович\t1991\t\"Мужчины\" 23-39 лет;\t\t31\t12\t8\r\n25.05.2022 1:02:44\tКозлов\tВладимир\tАлександрович\t1995\t\"Мужчины\" 23-39 лет;\tГоКатать\t27\t-\t23\r\n30.05.2022 9:38:42\tЩелкунов\tОлег\tСергеевич\t1989\t\"Мужчины\" 23-39 лет;\t#матрацфорева\t\t\t15\r\n17.05.2022 23:32:35\tПодгорнов\tАлексей\tВитальевич\t1989\t\"Мужчины\" 23-39 лет;\tTRIASSA\t33\t-\t19\r\n25.05.2022 0:00:08\tГаврюшин\tВладислав\tАндреевич\t1996\t\"Мужчины\" 23-39 лет;\t\t26\t13\t9\r\n17.05.2022 21:18:24\tОвсянников\tАлександр\tВикторович\t1985\t\"Мужчины\" 23-39 лет;\t\t37\t-\t17\r\n17.05.2022 14:11:43\tКоролевский\tАлександр\tСергеевич\t1994\t\"Мужчины\" 23-39 лет;\t#матрацфорева\t28\t17\t12\r\n26.05.2022 7:40:10\tЛюппа\tАлексей\tЮрьевич\t1989\t\"Мужчины\" 23-39 лет;\tProCaT\t33\t16\t11\r\n23.05.2022 17:14:42\tБузинов\tАндрей\tМихайлович\t1989\t\"Мужчины\" 23-39 лет;\t\t33\t-\t21\r\n23.05.2022 13:01:09\tМатвеев\tАлександр\tМихайлович\t1988\t\"Мужчины\" 23-39 лет;\t\t34\t18\t13\r\n23.05.2022 17:51:58\tМаламанов\tАлександр \tСергеевич \t1986\t\"Мужчины\" 23-39 лет;\t\t36\t-\t22\r\n17.05.2022 17:13:09\tОхонько\tМихаил\tАнатольевич\t1989\t\"Мужчины\" 23-39 лет;\t\t33\t2\t1\r\n30.05.2022 9:45:00\tНечаев\tВиктор\t \t1987\t\"Мужчины\" 23-39 лет;\t\t\t\t20\r\n17.05.2022 14:42:22\tХорошевский\tБорис\tКонстантинович \t1999\t\"Мужчины\" 23-39 лет;\t\t23\t-\t\r\n22.05.2022 14:32:21\tЧумаков \tДмитрий \tАлександрович \t1983\t\"Мужчины\" 23-39 лет;\t\t39\t19\t\r\n24.05.2022 15:57:55\tСедов\tАлександр\tГеннадиевич\t1983\t\"Мужчины\" 23-39 лет;\t\t39\t-\t\r\n24.05.2022 19:38:44\tДемин\tСергей\tФедорович\t1985\t\"Мужчины\" 23-39 лет;\t\t37\t-\t\r\n25.05.2022 22:34:22\tСилин \tМаксим \tЕвгеньевич \t1986\t\"Мужчины\" 23-39 лет;\t\t36\t-\t\r\n18.05.2022 16:29:05\tМосалыгин\tГригорий \tДмитриевич\t2004\t“Андеры 17-22 года”;\tProsport.pro\t18\t201\t201\r\n24.05.2022 8:23:49\tТолстов\tДанила\tЛеонидович\t2004\t“Андеры 17-22 года”;\tГБУСО СШОР НГ\t18\t202\t202\r\n17.05.2022 15:51:45\tГолубев\tАрсений\tСергеевич\t2002\t“Андеры 17-22 года”;\tProCaT\t20\t204\t204\r\n28.05.2022 13:13:41\tАксенов \tКонстантин \tМихайлович \t2005\t“Андеры 17-22 года”;\tTRIASSA\t17\t-\t210\r\n27.05.2022 19:28:35\tДавыдов\tДаниил\tДмитриевич\t2004\t“Андеры 17-22 года”;\tДЮСК \"Символ\"\t18\t-\t211\r\n28.05.2022 22:21:56\tНарышев \tНикита \tАлексеевич \t2004\t“Андеры 17-22 года”;\t\t18\t-\t209\r\n24.05.2022 21:16:22\tМолоканов\tКирилл\tВитальевич\t2001\t“Андеры 17-22 года”;\t\t21\t-\t208\r\n26.05.2022 9:23:35\tФедоров\tЕфим\tВладимирович\t2000\t“Андеры 17-22 года”;\tКудрявая молния (шучу, нет команды)\t22\t-\t212\r\n20.05.2022 18:02:36\tЕрмилов \tАндрей \tАндреевич \t2001\t“Андеры 17-22 года”;\tГоКатать \t21\t-\t\r\n25.05.2022 12:31:09\tНикитенко\tЗахар\tЮрьевич\t2004\t“Андеры 17-22 года”;\tTRIASSA\t18\t205\t\r\n25.05.2022 12:32:26\tЗакутин\tСемён\tМихайлович\t2003\t“Андеры 17-22 года”;\tTRIASSA\t19\t203\t\r\n25.05.2022 23:33:19\tКаменев\tГлеб\tАлександрович\t2005\t“Андеры 17-22 года”;\t\t17\t206\t\r\n20.05.2022 18:17:45\tГранат\tМаксим\tАндреевич\t1981\t“Ветераны” от 40 лет и старше;\t\t41\t-\t108\r\n17.05.2022 19:24:26\tСороколадов\tАлексей\tВикторовия\t1977\t“Ветераны” от 40 лет и старше;\tСпортМир\t45\t101\t101\r\n24.05.2022 16:57:25\tСафронов\tБорис\tАлексеевич\t1982\t“Ветераны” от 40 лет и старше;\tProsport.pro\t40\t102\t102\r\n17.05.2022 19:24:59\tФедукин\tАндрей\tАнатольевич\t1981\t“Ветераны” от 40 лет и старше;\tСпортМир\t41\t103\t103\r\n20.05.2022 20:55:49\tЛотко\tАлександр\tЮрьевич\t1975\t“Ветераны” от 40 лет и старше;\t#матрацфорева\t47\t104\t104\r\n21.05.2022 10:08:59\tФедоров\tВасилий\tВладимирович\t1971\t“Ветераны” от 40 лет и старше;\tXCVLG\t51\t-\t109\r\n17.05.2022 15:05:02\tХрунов\tРоман\tИгоревич\t1981\t“Ветераны” от 40 лет и старше;\tVelosaratov.ru\t41\t-\t106\r\n23.05.2022 17:21:13\tСтепанов \tОлег\tИгоревич\t1981\t“Ветераны” от 40 лет и старше;\t\t41\t-\t107\r\n24.05.2022 13:52:54\tЧерношей\tЮрий\tАлександрович\t1982\t“Ветераны” от 40 лет и старше;\tABST\t40\t-\t110\r\n20.05.2022 22:12:09\tЕлхимов\tАндрей\tВладимирович\t1974\t“Ветераны” от 40 лет и старше;\t\t48\t-\t\r\n24.05.2022 15:30:03\tШироков \tАлександр \tАлександрович \t1982\t“Ветераны” от 40 лет и старше;\tProCaT \t40\t105\t\r\n30.05.2022 10:29:27\tФирсова\tУльяна\t \t2010\t“Девушки 11-12 лет”;\t\t\t\t803\r\n24.05.2022 18:16:11\tСоломина\tСофья\tСергеевна \t2011\t“Девушки 11-12 лет”;\tГБУСО СШОР НГ\t11\t802\t801\r\n24.05.2022 17:51:20\tБерезуцкая \tМария\tАлексеевна\t2015\t“Девушки 11-12 лет”;\tГБУСО СШОР НГ\t7\t803\t802\r\n30.05.2022 10:30:57\tАндреева\tАрина\t \t2008\t“Девушки 13-14 лет”;\t\t\t\t602\r\n27.05.2022 21:14:03\tМухина\tАнна\tДмитриевна\t2008\t“Девушки 13-14 лет”;\tДЮСК \"Символ\"\t14\t-\t603\r\n25.05.2022 8:57:58\tЕськина\tДарья\tСергеевна\t2009\t“Девушки 13-14 лет”;\tГБУСО СШОР НГ\t13\t-\t601\r\n27.05.2022 21:02:09\tЛаврова\tАнастасия\tДмитриевна\t2008\t“Девушки 13-14 лет”;\t\t14\t-\t\r\n27.05.2022 19:59:07\tРумянцева\tМария\tИгоревна\t2006\t“Девушки 15-16 лет”;\tДЮСК \"Символ\"\t16\t401\t401\r\n30.05.2022 10:32:33\tРешникова\tОльга\t \t2007\t“Девушки 15-16 лет”;\tСДЮСШ №3\t\t\t409\r\n24.05.2022 21:03:16\tКухаренко \tКира\tВладимировна \t2007\t“Девушки 15-16 лет”;\tГБУСО СШОР НГ\t15\t-\t403\r\n27.05.2022 19:29:34\tТяпкина\tПолина\tАндреевна\t2006\t“Девушки 15-16 лет”;\tДЮСК \"Символ\"\t16\t-\t407\r\n27.05.2022 19:32:58\tНаумова \tЕлизавета \tСергеевна \t2007\t“Девушки 15-16 лет”;\tДЮСК \"Символ\"\t15\t-\t406\r\n25.05.2022 21:45:55\tШеина \tАлександра \tИвановна\t2007\t“Девушки 15-16 лет”;\tСпартак\t15\t-\t405\r\n25.05.2022 21:45:05\tБузова\tЕлена\tИвановна\t2007\t“Девушки 15-16 лет”;\tСпартак\t15\t-\t404\r\n23.05.2022 17:52:05\tБойцова\tВероника\tАндреевна\t2006\t“Девушки 15-16 лет”;\tГБУСО СШОР НГ\t16\t-\t402\r\n30.05.2022 10:35:30\tЕлхина\tАнастасия\t \t2006\t“Девушки 15-16 лет”;\tГБУСО СШОР НГ\t\t\t408\r\n17.05.2022 16:00:57\tКоршунова \tЕкатерина \tОлеговна\t1991\t“Новички женщины”;\t\t31\t951\t\r\n24.05.2022 18:01:09\tБаринов\tМаксим\tВалерьевич\t2000\t“Новички мужчины”;\t\t22\t907\t903\r\n30.05.2022 10:39:01\tЛарин\tЮрий\t \t1987\t“Новички мужчины”;\t\t\t\t909\r\n30.05.2022 10:39:44\tХорошевский\tБорис\t \t\t“Новички мужчины”;\t\t\t\t913\r\n24.05.2022 22:38:08\tЕмельянов\tАндрей\tСергеевич\t1995\t“Новички мужчины”;\t\t27\t-\t907\r\n17.05.2022 14:08:13\tПоловинкин\tДаниил\tВитальевич\t1996\t“Новички мужчины”;\tSaratov_cycling\t26\t903\t901\r\n24.05.2022 15:52:19\tТерентьев\tКонстантин\tСергеевич\t1988\t“Новички мужчины”;\t\t34\t910\t905\r\n17.05.2022 20:29:02\tБабурин\tДмитрий\tАлексеевич\t1976\t“Новички мужчины”;\t\t46\t-\t908\r\n24.05.2022 13:57:33\tСанин\tМатвей\tАнтонович\t2004\t“Новички мужчины”;\tГоКатать \t18\t-\t910\r\n18.05.2022 0:44:25\tНестеренок\tДмитрий\tАлександрович\t1985\t“Новички мужчины”;\t\t37\t911\t906\r\n30.05.2022 10:41:59\tСедов\tАлександр\t \t1983\t“Новички мужчины”;\t\t\t\t911\r\n24.05.2022 22:53:45\tСкрекотин\tАлександр\tНиколаевич\t1984\t“Новички мужчины”;\t\t38\t905\t902\r\n25.05.2022 11:54:46\tГорлов\tДмитрий\tВладимирович\t1990\t“Новички мужчины”;\t\t32\t909\t904\r\n25.05.2022 0:06:57\tГурин\tВладимир\tЕвгеньевич\t1985\t“Новички мужчины”;\t\t37\t-\t912\r\n17.05.2022 14:31:02\tМасеев\tРинат\tШамильевич\t1991\t“Новички мужчины”;\t\t31\t-\t\r\n17.05.2022 18:52:37\tКурдюков\tМаксим\tАлексеевич\t1997\t“Новички мужчины”;\tLMCR\t25\t-\t\r\n21.05.2022 9:53:01\tБессонов\tАндрей \tСергеевич \t1982\t“Новички мужчины”;\tБыстрее выше сильнее \t40\t-\t\r\n21.05.2022 23:47:06\tКаргин\tАлексей\tИванович\t2004\t“Новички мужчины”;\t\t18\t-\t\r\n17.05.2022 14:50:45\tХрипунов \tПавел\tИльич\t2011\t“Юноши 11-12 лет”;\tСпартак\t11\t701\t701\r\n24.05.2022 21:14:25\tМалютин\tАртём\tСергеевич\t2010\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t12\t706\t706\r\n24.05.2022 17:08:22\tКильдишов \tИван\tАлександрович\t2011\t“Юноши 11-12 лет”;\t\t11\t-\t713\r\n24.05.2022 17:34:06\tСтрелков\tЕгор\tАлексеевич\t2010\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t12\t705\t705\r\n24.05.2022 17:33:22\tКозичев\tВладислав\tАлексеевич\t2011\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t11\t703\t703\r\n24.05.2022 15:28:40\tШироков \tАлександр \tАлександрович \t2010\t“Юноши 11-12 лет”;\tProCaT \t12\t702\t702\r\n23.05.2022 12:45:48\tГурин\tИван\tЕвгеньевич\t2012\t“Юноши 11-12 лет”;\t\t10\t-\t711\r\n24.05.2022 17:37:23\tАжигалиев\tМатвей\tДмитриевич\t2010\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t12\t-\t715\r\n30.05.2022 10:26:41\tТруевский\tВячеслав\t \t2010\t“Юноши 11-12 лет”;\t\t\t\t712\r\n30.05.2022 10:27:20\tКосырев\tКирилл\t \t2013\t“Юноши 11-12 лет”;\t\t\t\t716\r\n24.05.2022 21:04:18\tКухаренко \tДмитрий \tВладимирович \t2011\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t11\t704\t704\r\n24.05.2022 18:35:43\tШлеин \tАлександр \tНиколаевич \t2012\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t10\t708\t708\r\n24.05.2022 15:29:13\tШироков\tРуслан \tАлександрович \t2010\t“Юноши 11-12 лет”;\tProCaT \t12\t707\t707\r\n25.05.2022 8:46:48\tДавыдов\tЛев\tДмитриевич\t2011\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t11\t713\t710\r\n24.05.2022 17:31:30\tЕремин \tВиктор \tСергеевич\t2010\t“Юноши 11-12 лет”;\tГБУСО СШОР НГ\t12\t-\t714\r\n24.05.2022 17:22:45\tГригорян\tЭрик\tСергеевич\t2011\t“Юноши 11-12 лет”;\t\t11\t710\t\r\n25.05.2022 21:43:12\tСтрагин\tДмитрий\tИванович\t2010\t“Юноши 11-12 лет”;\tСпартак\t12\t-\t\r\n17.05.2022 14:18:21\tЛазарев\tГлеб\tНиколаевич \t2008\t“Юноши 13-14 лет”;\t\t14\t501\t501\r\n25.05.2022 22:45:07\tПрокофьев \tДаниэль \tАртемович \t2009\t“Юноши 13-14 лет”;\tГБУСО СШОР НГ\t13\t-\t511\r\n30.05.2022 10:17:50\tСаяпин\tИван\t \t2009\t“Юноши 13-14 лет”;\t\t\t\t506\r\n30.05.2022 10:18:24\tСаяпин\tВсеволод\t \t2009\t“Юноши 13-14 лет”;\t\t\t\t507\r\n30.05.2022 10:19:11\tСидельников\tАндрей\t \t2008\t“Юноши 13-14 лет”;\tГБУСО СШОР НГ\t\t\t514\r\n24.05.2022 21:43:12\tЗолотенко \tЯрослав \tАлексеевич \t2009\t“Юноши 13-14 лет”;\tГБУСО СШОР НГ\t13\t507\t504\r\n24.05.2022 20:45:12\tТимошенко \tИгорь \tДмитриевич \t2008\t“Юноши 13-14 лет”;\tГБУСО СШОР НГ\t14\t503\t502\r\n24.05.2022 17:01:56\tКиржанов\tМаксим\tАнатольевич\t2009\t“Юноши 13-14 лет”;\t\t13\t505\t503\r\n19.05.2022 10:19:25\tГвоздев\tАртемий\tАндреевич\t2009\t“Юноши 13-14 лет”;\tСпартак\t13\t-\t509\r\n30.05.2022 10:21:03\tИвченко\tАлександр\t \t2008\t“Юноши 13-14 лет”;\tГБУСО СШОР НГ\t\t\t505\r\n30.05.2022 10:21:41\tГромов\tСтепан\t \t2008\t“Юноши 13-14 лет”;\t\t\t\t512\r\n25.05.2022 21:46:49\tЯнюшкин\tАртем \tИванович \t2008\t“Юноши 13-14 лет”;\tСпартак\t14\t-\t510\r\n30.05.2022 10:22:37\tОстапчук\tАлександр\t \t2008\t“Юноши 13-14 лет”;\t\t\t\t515\r\n30.05.2022 10:23:17\tИсаев\tМаксим\t \t2008\t“Юноши 13-14 лет”;\t\t\t\t513\r\n25.05.2022 21:42:07\tГвоздев \tАртем\tИванович\t2009\t“Юноши 13-14 лет”;\tСпартак\t13\t-\t\r\n25.05.2022 21:44:10\tБузов\tЮрий\tИванович \t2008\t“Юноши 13-14 лет”;\tСпартак\t14\t-\t\r\n28.05.2022 21:17:26\tОвчинников \tНикита \tМихайлович \t2008\t“Юноши 13-14 лет”;\t\t14\t-\t\r\n30.05.2022 10:12:09\tМалянов\tСемён\t \t2006\t“Юноши 15-16 лет”;\tГБУСО СШОР НГ\t\t\t310\r\n25.05.2022 22:44:35\tЛобчук\tДмитрий\tМихайлович\t2006\t“Юноши 15-16 лет”;\tГБУСО СШОР НГ\t16\t301\t301\r\n30.05.2022 10:13:03\tАбрамов\tМатвей\t \t2007\t“Юноши 15-16 лет”;\tГБУСО СШОР НГ\t\t\t305\r\n27.05.2022 19:45:08\tДоронин\tАндрей\tАлександрович\t2007\t“Юноши 15-16 лет”;\tДЮСК \"Символ\"\t15\t303\t302\r\n30.05.2022 10:13:54\tНазаров\tМаксим\t \t2007\t“Юноши 15-16 лет”;\tГБУСО СШОР НГ\t\t\t312\r\n27.05.2022 19:56:28\tТовстоган\tМаксим\tАлексеевич\t2006\t“Юноши 15-16 лет”;\tДЮСК \"Символ\" \t16\t-\t311\r\n17.05.2022 21:16:05\tАмелин \tСерафим\tАлексеевич\t2006\t“Юноши 15-16 лет”;\tTRIASSA\t16\t304\t303\r\n30.05.2022 10:15:11\tИльин\tАлексей\t \t2007\t“Юноши 15-16 лет”;\t\t\t\t307\r\n24.05.2022 17:36:37\tБородихин\tДанила\tАлексеевич\t2007\t“Юноши 15-16 лет”;\t\t15\t-\t308\r\n21.05.2022 9:54:46\tБессонов\tАртем \tАндреевич\t2007\t“Юноши 15-16 лет”;\tБыстрее выше сильнее \t15\t-\t309\r\n30.05.2022 10:16:08\tПрохоров\tНикита\t \t2007\t“Юноши 15-16 лет”;\t\t\t\t313\r\n24.05.2022 12:44:11\tМоисеенко\tМаксим\tАлександрович\t2007\t“Юноши 15-16 лет”;\tСШОР 3\t15\t-\t306\r\n26.05.2022 7:48:11\tКабулов\tАндрей\tАлексеевич\t2007\t“Юноши 15-16 лет”;\t\t15\t305\t</textarea>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-appevts-log/nav-appevts-log.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-appevts-log/nav-appevts-log.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"app.APPEvents.evtsList.length>0\" class=\"nav-item \">\r\n  <div class=\"nav-appevts-log ml-3\">\r\n    <div class=\"evt-item\" *ngFor=\"let evt of app.APPEvents.evtsList.filter(filterByTypes)  \">\r\n      <span class=\"date\">{{evt.t|date : 'HH:mm:ss'}}:</span>\r\n      {{('log.action_types.'+app.ref.action_types[evt.a])|translate}} \r\n      {{('types.'+app.ref.object_types[evt.tp])|translate}}\r\n      <b *ngIf=\"app[app.ref.object_types[evt.tp]]\">{{app[app.ref.object_types[evt.tp]]._index.id[evt.id]?app[app.ref.object_types[evt.tp]]._index.id[evt.id].name:''}}</b> \r\n    </div>\r\n  </div>\r\n</li>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-trash/nav-trash.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-trash/nav-trash.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle dropdown-no-caret \" [routerLinkActive]=\"'active'\" href=\"#\" role=\"button\" data-toggle=\"dropdown\"  aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <fa-icon class=\"silver\"  [icon]=\"faTrashAlt\"></fa-icon>\r\n          <sup *ngIf=\"checkSize()\" ><span  class=\"badge badge-danger\">{{trashSize}}</span></sup>\r\n        </a>\r\n        <div  class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><!-- [hidden]=\"!trashSize\" -->\r\n          <div *ngFor=\"let itemType of app.trash.trashTypes\">\r\n            <a routerLink=\"/trash/{{itemType}}\" *ngIf=\"app[itemType].trash.length\" class=\"dropdown-item text-capitalize\"  title=\"{{'trash.Show_all_deleted_t'|translate : {t:('types.'+itemType|translate)} }} \" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"><small translate>types.{{itemType}} <sup><span  class=\"badge badge-danger\">{{1*app[itemType].trash.length}}</span></sup></small></a>\r\n            <div class=\"dropdown-item pointer\" *ngFor=\"let item of app[itemType].trash\" (click)=\"$event.stopPropagation();\">\r\n              <span class=\"pointer grey mr-1\" title=\"{{'trash.Restore_this_Item'|translate}}\" (click)=\"restore(item, $event)\"><fa-icon [icon]=\"faTrashRestore\"></fa-icon> </span> \r\n              <!-- <a  routerLink=\"/trash/{{itemType}}/{{item.id}}\" href=\"\" class=\"grey\">{{item.name}}</a> -->\r\n              <span  class=\"grey\">{{item.name}}</span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"trashSize\" class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item \" routerLink=\"/trash\"  translate>trash.All_deleted_Items</a>\r\n        </div>\r\n      </li>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/race/race.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/race/race.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  <span  class=\"text-capitalize\">{{'type.race'|translate}}</span> : {{(race?'Edit':'Create')|translate|lowercase }}\n</h3>\n\n<form  [formGroup]=\"itemForm\"  *ngIf=\"!importMode\" (submit)=\"onItemFormSubmit()\">\n  <fieldset  [disabled]=\"(race&&!app.races.r.m)||(!race&&!app.races.r.a)\" >\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"seasonId\" translate>races.seasonId</label>\n          <input type=\"text\" class=\"form-control\" id=\"seasonId\" formControlName=\"seasonId\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"name\" translate>races.name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"from\" translate>races.from</label>\n          <input type=\"text\" class=\"form-control\" id=\"from\" formControlName=\"from\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"to\" translate>races.to</label>\n          <input type=\"text\" class=\"form-control\" id=\"to\" formControlName=\"to\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">{{(race?'Save_changes':'Add_new')|translate}}</button>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/races/races.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/races/races.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-items-controls [app]=\"app\" [itemType]=\"itemType\" [options]=\"contolsOptions\"></app-items-controls>\n<app-items-table [app]=\"app\" [itemType]=\"itemType\" [options]=\"tableOptions\"></app-items-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/results/results.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/results/results.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table  class=\" table \" >\r\n  <ng-container *ngFor=\"let item of app.results.items2 | orderBy : ['pos'] ; index as i; \">\r\n    <tr *ngIf=\"!app.results.items2[i-1]||item.competitor.categoryId!==app.results.items2[i-1].competitor.categoryId\">\r\n      <th colspan=\"99\">{{item.competitor.categoryName}}</th>\r\n    </tr>\r\n    <tr>\r\n      <td width=\"40px\">{{item.res}}</td>\r\n      <td width=\"400px\">{{item.competitor.fullName}}</td>\r\n      <td width=\"80px\">{{item.competitor.num}}</td>\r\n      <td width=\"100px\">{{(item.events[item.events.length-1].t-app.results.getStart(item.competitor.categoryId).t-4*3600000)|date:'HH:mm:ss.SSS'}}</td>\r\n      <td *ngFor=\"let event of item.events\" width=\"100px\">\r\n        {{(event.t-app.results.getStart(item.categoryId).t-4*3600000)|date:'HH:mm:ss.SSS'}}<br>\r\n        {{(event._lapT-4*3600000)|date:'HH:mm:ss.SSS'}}\r\n      </td>\r\n      <!-- <td>{{(item.t-app.results.start.t-4*3600000)|date:'HH:mm:ss.SSS'}}</td> -->\r\n      <td><span *ngIf=\"item.res>1\">+{{(item.events[item.events.length-1].t-item.firstT-4*3600000)|date:'HH:mm:ss.SSS'}}</span></td>\r\n      <td></td>\r\n    </tr>\r\n  </ng-container>\r\n</table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sign-in/sign-in.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sign-in/sign-in.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center logo\" >\r\n  <svg version=\"1.1\" id=\"logo-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.999 511.999\" style=\"enable-background:new 0 0 511.999 511.999;\" xml:space=\"preserve\"> <path style=\"fill:#D9D9D9;\" d=\"M124.163,0.957c-6.37-2.681-13.702,0.477-16.159,6.938L97.283,36.087 c-2.337,6.147,0.618,13.025,6.668,15.601C187.617,87.3,228.898,149.43,229.322,150.08l22.911-14.84l22.961-14.762 C273.108,117.235,224.681,43.262,124.163,0.957z\"/> <rect x=\"365.043\" y=\"421.706\" style=\"fill:#464655;\" width=\"50.472\" height=\"90.293\"/> <path style=\"fill:#D9D9D9;\" d=\"M243.973,384.346c-8.868,0-16.057-7.189-16.057-16.057c0-8.868,7.189-16.057,16.057-16.057 c27.051,0,49.06-22.009,49.06-49.059v-36.756c0-8.868,7.189-16.057,16.057-16.057s16.057,7.189,16.057,16.057v36.756 C325.146,347.931,288.732,384.346,243.973,384.346z\"/> <path style=\"fill:#464655;\" d=\"M374.085,439.285h-88.369c-35.58,0-64.526-28.946-64.526-64.526v-110.48 c0-11.824,9.585-21.409,21.409-21.409c11.824,0,21.409,9.585,21.409,21.409v110.48c0,11.97,9.739,21.708,21.708,21.708h88.369 c11.824,0,21.409,9.585,21.409,21.409S385.91,439.285,374.085,439.285z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M198.358,114.485c20.491,19.829,30.754,35.273,30.965,35.595l22.911-14.84 l22.961-14.762c-0.92-1.43-10.854-16.613-30.285-36.767L198.358,114.485z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M264.008,264.279c0-11.824-9.585-21.409-21.409-21.409 c-11.824,0-21.409,9.585-21.409,21.409v47.073h42.818V264.279z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M374.085,396.466h-35.805v42.818h35.805 c11.824,0,21.409-9.585,21.409-21.409S385.91,396.466,374.085,396.466z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M309.09,250.36c-8.868,0-16.057,7.189-16.057,16.057v36.756 c0,2.787-0.246,5.518-0.695,8.18h32.257c0.047,0,0.092,0.006,0.139,0.007c0.271-2.693,0.412-5.424,0.412-8.187v-36.756 C325.146,257.549,317.957,250.36,309.09,250.36z\"/> <path style=\"fill:#FF462E;\" d=\"M266.782,101.334l-56.456,37.318l2.464,2.464c13.496,13.496,13.496,35.377,0,48.874l0,0 c-6.482,6.482-10.122,15.271-10.122,24.437v70.163h121.926c22.338,0,40.447,18.109,40.447,40.447v114.245h50.468V304.34 C415.509,209.135,352.996,128.538,266.782,101.334z\"/> <path style=\"opacity:0.1;enable-background:new    ;\" d=\"M266.782,101.334l-8.283,5.475 c78.229,31.466,133.461,108.042,133.461,197.529v134.946h23.55V304.34C415.509,209.135,352.996,128.538,266.782,101.334z\"/></svg>\r\n  <span>FuelLimit</span>\r\n</h1>\r\n<div class=\"text-center\">\r\n  <form class=\"form-signin\" [formGroup]=\"signInForm\"  (ngSubmit)=\"onFromSubmit();\">\r\n    <!-- <h3 class=\"h3 mb-3 font-weight-normal\" translate>sign-in.Please sign in</h3> -->\r\n    <label for=\"inputName\" class=\"sr-only\" translate>sign-in.User Name</label>\r\n    <input formControlName=\"name\" type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"{{'sign-in.User Name'|translate}}\" required autofocus>\r\n    <label for=\"inputPassword\" class=\"sr-only\" translate>sign-in.Password</label>\r\n    <input formControlName=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control mt-1\" placeholder=\"{{'sign-in.Password'|translate}}\" required>\r\n    <!-- <div class=\"checkbox mb-3\"> -->\r\n      <!-- <label> -->\r\n        <!-- <input type=\"checkbox\" value=\"remember-me\"> Remember me -->\r\n      <!-- </label> -->\r\n    <!-- </div> -->\r\n    <button class=\"btn btn-lg btn-primary btn-block\"  type=\"submit\" translate>{{'sign-in.Sign in'}}</button>\r\n    <!-- <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2019</p> -->\r\n  </form>\r\n  <div class=\"col-md-4 offset-md-4\"  *ngIf=\"signInFormError\">\r\n    <div  class=\"alert alert-danger\" role=\"alert\">\r\n      <strong class=\"text-capitalize\"  translate>error</strong>! <br>{{'sign-in.errors.'+signInFormError|translate}}\r\n    </div>  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span  class=\"text-capitalize\">{{'type.user'|translate}}</span> : {{(user.id?'Edit':'Create')|translate|lowercase }}</h3>\r\n<form  [formGroup]=\"userForm\" (submit)=\"onUserFormSubmit($event)\">\r\n  <fieldset  [disabled]=\"(user.id&&!app.users.r.m)||(!user.id&&!app.users.r.a)\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-xl-2 \">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\" translate>users.name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" translate>users.password</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"{{passwordsVisible?'text':'password'}}\" class=\"form-control\" id=\"password\" formControlName=\"password\"\r\n              (keyup)=\"checkPasswordConfirmation()\"\r\n              (change)=\"checkPasswordConfirmation()\"\r\n            >\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text pointer\" (click)=\"passwordsVisible=!passwordsVisible\" ><fa-icon [icon]=\"passwordsVisible?faEye:faEyeSlash\"></fa-icon></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password_confirmation\" translate>users.password_confirmation</label>\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"{{passwordsVisible?'text':'password'}}\" class=\"form-control {{!userForm.controls.password.valid&&'ng-invalid'}}\" id=\"password_confirmation\" \r\n              (keyup)=\"checkPasswordConfirmation($event)\"\r\n              (change)=\"checkPasswordConfirmation($event)\"\r\n            >\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text pointer\" (click)=\"passwordsVisible=!passwordsVisible\" ><fa-icon [icon]=\"passwordsVisible?faEye:faEyeSlash\" ></fa-icon></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\" translate>users.email</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-{{userForm.dirty?'primary':'secondary'}}\" [disabled]=\"!userForm.valid\" >{{(user.id?'Save_changes':'Add_new')|translate}}</button>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/users.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/users.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"app.users.r.r\">\r\n<app-items-controls [app]=\"app\" [itemType]=\"'users'\" ></app-items-controls>\r\n<table class=\"mt-2 table {{!app.users.ready?'not-ready':'ready'}}\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\" width=\"30px\">#</th>\r\n      <th scope=\"col\" width=\"10px\"></th>\r\n      <th scope=\"col\" width=\"200px\" translate>users.name</th>\r\n      <th scope=\"col\" translate>users.email</th>\r\n      <th scope=\"col\" width=\"30px\">#</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of app.users.items | myFilter: app.state.items.users.filter  | asResult : result | slice:0:app.state.items.users.limit ;  index as i;\">\r\n      <th scope=\"row\">{{i+1}}</th>\r\n      <td><fa-icon *ngIf=\"item.root\" [icon]=\"faUserLock\" class=\"grey\" title=\"{{'Root user'|translate}}\"></fa-icon></td>\r\n      <td><a  href=\"\" [routerLink]=\"'/user/'+item.id\" (click)=\"filter=''\">{{item.name}}</a></td>\r\n      <td>{{item.email}}</td>\r\n      <td><span class=\"tomato pointer {{(item.root||!app.users.r.d)&&'disabled'}}\" (click)=\"(!item.root&&app.users.r.d)&&delUser(item);\"><fa-icon [icon]=\"faTrashAlt\"></fa-icon></span></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n<div  *ngIf=\"!app.users.r.r\" class=\"alert alert-warning text-center\" role=\"alert\">Access denied. You have no read access to this items</div>\r\n<app-items-paginator [state]=\"app.state.items.users\"    [result]=\"result\"></app-items-paginator>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/competitors/competitors.component */ "./src/app/components/competitors/competitors.component.ts");
/* harmony import */ var _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/competitor/competitor.component */ "./src/app/components/competitor/competitor.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_races_races_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/races/races.component */ "./src/app/components/races/races.component.ts");
/* harmony import */ var _components_race_race_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/race/race.component */ "./src/app/components/race/race.component.ts");
/* harmony import */ var _components_go_go_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/go/go.component */ "./src/app/components/go/go.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");















var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'competitors', component: _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_4__["CompetitorsComponent"] },
    { path: 'competitor', component: _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_5__["CompetitorComponent"] },
    { path: 'competitor/:competitorId', component: _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_5__["CompetitorComponent"] },
    { path: 'categories', component: _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"] },
    { path: 'category', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'category/:categoryId', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"] },
    { path: 'races', component: _components_races_races_component__WEBPACK_IMPORTED_MODULE_8__["RacesComponent"] },
    { path: 'race/:raceId', component: _components_race_race_component__WEBPACK_IMPORTED_MODULE_9__["RaceComponent"] },
    { path: 'race', component: _components_race_race_component__WEBPACK_IMPORTED_MODULE_9__["RaceComponent"] },
    { path: 'go/:raceId', component: _components_go_go_component__WEBPACK_IMPORTED_MODULE_10__["GoComponent"] },
    { path: 'go', component: _components_go_go_component__WEBPACK_IMPORTED_MODULE_10__["GoComponent"] },
    { path: 'results/:raceId', component: _components_results_results_component__WEBPACK_IMPORTED_MODULE_14__["ResultsComponent"] },
    { path: 'login', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"] },
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"] },
    { path: 'user/:userId', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");
/* harmony import */ var _db_migration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./db.migration */ "./src/app/db.migration.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-debounce */ "./node_modules/ngx-debounce/fesm5/ngx-debounce.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_lstorage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/lstorage.service */ "./src/app/services/lstorage.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/my-filter.pipe */ "./src/app/pipes/my-filter.pipe.ts");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/keys.pipe */ "./src/app/pipes/keys.pipe.ts");
/* harmony import */ var _pipes_as_result_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/as-result.pipe */ "./src/app/pipes/as-result.pipe.ts");
/* harmony import */ var _pipes_in_list_filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/in-list-filter.pipe */ "./src/app/pipes/in-list-filter.pipe.ts");
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/order-by.pipe */ "./src/app/pipes/order-by.pipe.ts");
/* harmony import */ var _pipes_order_by_select_value_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/order-by-select_value.pipe */ "./src/app/pipes/order-by-select_value.pipe.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_competitors_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/competitors.service */ "./src/app/services/competitors.service.ts");
/* harmony import */ var _services_competitor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/competitor.service */ "./src/app/services/competitor.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_races_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/races.service */ "./src/app/services/races.service.ts");
/* harmony import */ var _services_race_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/race.service */ "./src/app/services/race.service.ts");
/* harmony import */ var _services_raceevents_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/raceevents.service */ "./src/app/services/raceevents.service.ts");
/* harmony import */ var _services_raceevent_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/raceevent.service */ "./src/app/services/raceevent.service.ts");
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/results.service */ "./src/app/services/results.service.ts");
/* harmony import */ var _services_user_groups_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./services/user-groups.service */ "./src/app/services/user-groups.service.ts");
/* harmony import */ var _services_user_group_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/user-group.service */ "./src/app/services/user-group.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _services_log_item_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/log-item.service */ "./src/app/services/log-item.service.ts");
/* harmony import */ var _services_trash_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_appevents_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/appevents.service */ "./src/app/services/appevents.service.ts");
/* harmony import */ var _services_reference_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/reference.service */ "./src/app/services/reference.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/accounts.service */ "./src/app/services/accounts.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_common_items_controls_items_controls_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/common/items-controls/items-controls.component */ "./src/app/components/common/items-controls/items-controls.component.ts");
/* harmony import */ var _components_common_items_table_items_table_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/common/items-table/items-table.component */ "./src/app/components/common/items-table/items-table.component.ts");
/* harmony import */ var _components_common_items_paginator_items_paginator_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/common/items-paginator/items-paginator.component */ "./src/app/components/common/items-paginator/items-paginator.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_common_search_select_search_select_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/common/search-select/search-select.component */ "./src/app/components/common/search-select/search-select.component.ts");
/* harmony import */ var _components_common_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/common/multi-select/multi-select.component */ "./src/app/components/common/multi-select/multi-select.component.ts");
/* harmony import */ var _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/competitors/competitors.component */ "./src/app/components/competitors/competitors.component.ts");
/* harmony import */ var _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/competitor/competitor.component */ "./src/app/components/competitor/competitor.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/category/category.component */ "./src/app/components/category/category.component.ts");
/* harmony import */ var _components_common_input_tree_input_tree_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/common/input-tree/input-tree.component */ "./src/app/components/common/input-tree/input-tree.component.ts");
/* harmony import */ var _components_nav_appevts_log_nav_appevts_log_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/nav-appevts-log/nav-appevts-log.component */ "./src/app/components/nav-appevts-log/nav-appevts-log.component.ts");
/* harmony import */ var _components_common_items_import_items_import_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/common/items-import/items-import.component */ "./src/app/components/common/items-import/items-import.component.ts");
/* harmony import */ var _components_races_races_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/races/races.component */ "./src/app/components/races/races.component.ts");
/* harmony import */ var _components_race_race_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/race/race.component */ "./src/app/components/race/race.component.ts");
/* harmony import */ var _components_go_go_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/go/go.component */ "./src/app/components/go/go.component.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");
/* harmony import */ var _components_nav_trash_nav_trash_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/nav-trash/nav-trash.component */ "./src/app/components/nav-trash/nav-trash.component.ts");






































































// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, 'assets/i18n/');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_48__["SignInComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_49__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_50__["HeaderComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_54__["UsersComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_55__["UserComponent"],
                _pipes_my_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["MyFilterPipe"],
                _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_19__["KeysPipe"],
                _pipes_in_list_filter_pipe__WEBPACK_IMPORTED_MODULE_21__["InListFilterPipe"],
                _components_common_search_select_search_select_component__WEBPACK_IMPORTED_MODULE_56__["SearchSelectComponent"],
                _components_common_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_57__["MultiSelectComponent"],
                _pipes_as_result_pipe__WEBPACK_IMPORTED_MODULE_20__["AsResultPipe"],
                _components_competitors_competitors_component__WEBPACK_IMPORTED_MODULE_58__["CompetitorsComponent"],
                _components_competitor_competitor_component__WEBPACK_IMPORTED_MODULE_59__["CompetitorComponent"],
                _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_60__["CategoriesComponent"],
                _components_category_category_component__WEBPACK_IMPORTED_MODULE_61__["CategoryComponent"],
                _components_common_input_tree_input_tree_component__WEBPACK_IMPORTED_MODULE_62__["InputTreeComponent"],
                _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_22__["OrderByPipe"],
                _pipes_order_by_select_value_pipe__WEBPACK_IMPORTED_MODULE_23__["OrderBySelectValue"],
                _components_nav_trash_nav_trash_component__WEBPACK_IMPORTED_MODULE_69__["NavTrashComponent"],
                _components_common_items_controls_items_controls_component__WEBPACK_IMPORTED_MODULE_51__["ItemsControlsComponent"],
                _components_common_items_table_items_table_component__WEBPACK_IMPORTED_MODULE_52__["ItemsTableComponent"],
                _components_common_items_paginator_items_paginator_component__WEBPACK_IMPORTED_MODULE_53__["ItemsPaginatorComponent"],
                _components_nav_appevts_log_nav_appevts_log_component__WEBPACK_IMPORTED_MODULE_63__["NavAPPEvtsLogComponent"],
                _components_common_items_import_items_import_component__WEBPACK_IMPORTED_MODULE_64__["ItemsImportComponent"],
                _components_races_races_component__WEBPACK_IMPORTED_MODULE_65__["RacesComponent"],
                _components_race_race_component__WEBPACK_IMPORTED_MODULE_66__["RaceComponent"],
                _components_go_go_component__WEBPACK_IMPORTED_MODULE_67__["GoComponent"],
                _components_results_results_component__WEBPACK_IMPORTED_MODULE_68__["ResultsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDBModule"].forRoot(Object(_db_migration__WEBPACK_IMPORTED_MODULE_5__["myDBConfig"])()),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                ngx_debounce__WEBPACK_IMPORTED_MODULE_13__["DebounceModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_14__["ExportAsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            providers: [
                _services_core_service__WEBPACK_IMPORTED_MODULE_15__["CoreService"],
                _services_lstorage_service__WEBPACK_IMPORTED_MODULE_16__["LStorageService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_17__["APIService"],
                _services_item_service__WEBPACK_IMPORTED_MODULE_24__["ItemService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"],
                _services_user_groups_service__WEBPACK_IMPORTED_MODULE_37__["UserGroupsService"],
                _services_items_service__WEBPACK_IMPORTED_MODULE_25__["ItemsService"],
                _services_users_service__WEBPACK_IMPORTED_MODULE_26__["UsersService"],
                _services_competitors_service__WEBPACK_IMPORTED_MODULE_28__["CompetitorsService"],
                _services_competitor_service__WEBPACK_IMPORTED_MODULE_29__["CompetitorService"],
                _services_categories_service__WEBPACK_IMPORTED_MODULE_30__["CategoriesService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_31__["CategoryService"],
                _services_races_service__WEBPACK_IMPORTED_MODULE_32__["RacesService"],
                _services_race_service__WEBPACK_IMPORTED_MODULE_33__["RaceService"],
                _services_raceevents_service__WEBPACK_IMPORTED_MODULE_34__["RaceEventsService"],
                _services_raceevent_service__WEBPACK_IMPORTED_MODULE_35__["RaceEventService"],
                _services_results_service__WEBPACK_IMPORTED_MODULE_36__["ResultsService"],
                _services_user_group_service__WEBPACK_IMPORTED_MODULE_38__["UserGroupService"],
                _services_log_service__WEBPACK_IMPORTED_MODULE_39__["LogService"],
                _services_log_item_service__WEBPACK_IMPORTED_MODULE_40__["LogItemService"],
                _services_trash_service__WEBPACK_IMPORTED_MODULE_41__["TrashService"],
                _services_state_service__WEBPACK_IMPORTED_MODULE_42__["StateService"],
                _services_appevents_service__WEBPACK_IMPORTED_MODULE_43__["APPEventsService"],
                _services_reference_service__WEBPACK_IMPORTED_MODULE_44__["ReferenceService"],
                _services_settings_service__WEBPACK_IMPORTED_MODULE_45__["SettingsService"],
                _services_accounts_service__WEBPACK_IMPORTED_MODULE_46__["AccountsService"],
                _services_account_service__WEBPACK_IMPORTED_MODULE_47__["AccountService"],
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/indexable.ts":
/*!**************************************!*\
  !*** ./src/app/classes/indexable.ts ***!
  \**************************************/
/*! exports provided: Indexable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indexable", function() { return Indexable; });
var Indexable = /** @class */ (function () {
    function Indexable() {
        this.items = [];
        this._index = {};
        this._indexableProps = [];
        this.items = [];
        this._index = {};
    }
    Indexable.prototype.createIndex = function (items) {
        var _this = this;
        this._indexableProps.forEach(function (prop) {
            _this._index[prop] = {};
            items.forEach(function (item) {
                if (item[prop])
                    _this._index[prop][item[prop]] = item;
            });
        });
        return this._index;
    };
    return Indexable;
}());



/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#outlet-container {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9EOlxcT1NQYW5lbFxcZG9tYWluc1xcbWZ0aW1pbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI291dGxldC1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufSIsIiNvdXRsZXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_lstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/lstorage.service */ "./src/app/services/lstorage.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(core, app, router, translate, storage) {
        this.core = core;
        this.app = app;
        this.router = router;
        this.translate = translate;
        this.storage = storage;
        this.title = 'rfid-limit';
        this.param = { value: 'world' };
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('ru');
        var storedLng = String(this.storage.get('lng'));
        var browserLang = storedLng ? storedLng : translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.core.init()
            .subscribe(function (res) { });
        this.app.init();
        this.core.onLoggedIn()
            .subscribe(function (res) {
            if (_this.router.isActive('login', false))
                _this.router.navigate(['units']);
        });
        this.core.onCheckAuthError()
            .subscribe(function (res) { _this.core.clearSession(); if (!_this.router.isActive('login', false))
            _this.router.navigate(['login']); });
        this.app.onAppReady()
            .subscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _services_lstorage_service__WEBPACK_IMPORTED_MODULE_6__["LStorageService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(app) {
        this.app = app;
        this.controlsOptions = {
            clearBtn: true
        };
        this.tableOptions = {
            fieldNames: [
                // 'accountId',
                // 'seasonId',
                'name',
                'ageFrom',
                'ageTo',
                'pos',
            ],
            fields: {
                name: { type: 'link' },
            },
        };
        this.itemType = 'categories';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/categories/categories.component.scss")]
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/category/category.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/category/category.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/category/category.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");







var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.category = null;
        this.importOptions = {
            fields: [
                { name: 'seasonId', src: 'value', value: '1', validators: [] },
                { name: 'name', src: 0, validators: ['required'] },
                { name: 'ageFrom', src: 'value', value: '0', validators: [] },
                { name: 'ageTo', src: 'value', value: '0', validators: [] },
                { name: 'pos', src: 'value', value: '0', validators: [] },
            ],
            delitmer: '\\t',
        };
        this.multiAddErrors = [];
        this.parsedItems = { items: [], errors: [] };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.category = _this.app.categories._index.id[params['categoryId']];
        }))
            .subscribe(function () {
            if (_this.category)
                _this.itemForm.patchValue(_this.category);
        });
    };
    CategoryComponent.prototype.initForm = function () {
        this.itemForm = this.fb.group({
            seasonId: ['', []],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ageFrom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            ageTo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            pos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    CategoryComponent.prototype.onItemFormSubmit = function () {
        this.category ? this.saveCategory() : this.addCategory();
    };
    CategoryComponent.prototype.addCategory = function () {
        var _this = this;
        console.log(this.itemForm);
        this.app.categories.add(this.itemForm.value)
            .subscribe(function (res) {
            var newItemId = null;
            if (res.id)
                newItemId = res.id;
            _this.app.categories.get()
                .subscribe(function () {
                if (newItemId)
                    _this.router.navigate(['categories']);
            });
        });
    };
    CategoryComponent.prototype.saveCategory = function () {
        var _this = this;
        for (var key in this.itemForm.value) {
            this.category[key] = this.itemForm.value[key];
        }
        this.category.save()
            .subscribe(function (res) {
            _this.app.categories.get()
                .subscribe();
            _this.router.navigate(['categories']);
        });
    };
    CategoryComponent.prototype.importItems = function (items) {
        var _this = this;
        this.app.categories.addMultiple(items)
            .subscribe(function (res) {
            _this.multiAddErrors = res.added.filter(function (item) { return !item.id; });
            _this.app.categories.get()
                .subscribe();
            if (_this.multiAddErrors.length === 0)
                _this.router.navigate(['categories']);
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/components/category/category.component.scss")]
        })
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/common/input-tree/input-tree.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/common/input-tree/input-tree.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2lucHV0LXRyZWUvaW5wdXQtdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/common/input-tree/input-tree.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/input-tree/input-tree.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTreeComponent", function() { return InputTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



var InputTreeComponent = /** @class */ (function () {
    function InputTreeComponent(translate) {
        this.translate = translate;
        this.updateEvent = new Event('treeUpdated');
        this.translateData = {};
    }
    InputTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //fromEvent(document, 'treeUpdated').subscribe(_=>{this.initRightsTree(this.item);});
        this.translate.get('INPUT-TREE').subscribe(function (res) { _this.translateData = res; });
        this.translate.get('types').subscribe(function (res) {
            for (var key in res) {
                _this.translateData[key] = res[key];
            }
        });
    };
    InputTreeComponent.prototype.ngAfterViewInit = function () {
        this.initRightsTree(this.item);
    };
    InputTreeComponent.prototype.initRightsTree = function (item) {
        var _this = this;
        var cnt = document.getElementById('input_tree_' + this.controlIdKey);
        cnt && (cnt.innerHTML = '');
        var setCheckboxView = function (checkbox, value) {
            if (value === 1 || value === true) {
                checkbox.checked = true;
                checkbox.className = 'true';
            }
            else if (value === 0 || value === false) {
                checkbox.checked = false;
                checkbox.className = 'false';
            }
            else if (value === null || value === undefined) {
                checkbox.checked = false;
                checkbox.className = 'null';
            }
        };
        var switchCheckbox = function (checkbox, value) {
            if (value === 1 || value === true) {
                value = 0;
            }
            else if (value === 0 || value === false) {
                value = null;
            }
            else if (value === null || value === undefined) {
                value = 1;
            }
            setCheckboxView(checkbox, value);
            return value;
        };
        var goDeeper = function (compiledObject, valuesObject, parentEelem, level, parentObject, key) {
            if (compiledObject && (typeof (compiledObject) === 'object')) {
                var _loop_1 = function (key_1) {
                    var elem = document.createElement('div');
                    if (typeof (compiledObject[key_1]) === 'object') {
                        if (valuesObject && !valuesObject[key_1])
                            valuesObject[key_1] = {};
                        var span = document.createElement('span');
                        var text = document.createTextNode(_this.translateData[key_1] ? _this.translateData[key_1] : key_1);
                        span.appendChild(text);
                        span.className = 'branch-header';
                        elem._childrenChecked = 0;
                        span.onclick = function () {
                            var childrenDivs = elem.children;
                            for (var key1 in childrenDivs) {
                                if (childrenDivs[key1].children && childrenDivs[key1].children[0] && childrenDivs[key1].children[0].children[0]) {
                                    var checkbox = childrenDivs[key1].children[0].children[0];
                                    if (checkbox.type === 'checkbox' && !checkbox.disabled) {
                                        checkbox.checked = 1 * elem._childrenChecked;
                                        checkbox.onchange();
                                    }
                                }
                            }
                            elem._childrenChecked = !elem._childrenChecked;
                        };
                        parentEelem.appendChild(span);
                    }
                    else {
                        elem.className = 'inline';
                    }
                    parentEelem.appendChild(elem);
                    goDeeper(compiledObject[key_1], valuesObject[key_1], elem, level + 1, valuesObject, key_1);
                };
                for (var key_1 in compiledObject) {
                    _loop_1(key_1);
                }
            }
            else {
                var label = document.createElement('label');
                var text = document.createTextNode(_this.translateData[key] ? _this.translateData[key] : key);
                var checkbox_1 = document.createElement('input');
                checkbox_1.type = 'checkbox';
                label.appendChild(checkbox_1);
                label.appendChild(text);
                parentEelem.appendChild(label);
                if (compiledObject === 0) {
                    checkbox_1.disabled = true;
                    label.className = 'disabled';
                    //label.style.color = 'red';
                }
                else {
                    setCheckboxView(checkbox_1, valuesObject);
                    checkbox_1.onchange = function (e) {
                        valuesObject = switchCheckbox(checkbox_1, valuesObject);
                        parentObject[key] = valuesObject;
                        _this.form.controls[_this.controlIdKey].setValue(item[_this.controlIdKey]);
                        if (e) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        return false;
                    };
                }
            }
        };
        if (!item[this.controlIdKey])
            item[this.controlIdKey] = {};
        this.form.controls['rights'].setValue(item[this.controlIdKey]);
        goDeeper(this.sourceTree, item[this.controlIdKey], cnt, 0, item[this.controlIdKey], '');
    };
    InputTreeComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('form')
    ], InputTreeComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlIdKey')
    ], InputTreeComponent.prototype, "controlIdKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sourceTree')
    ], InputTreeComponent.prototype, "sourceTree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], InputTreeComponent.prototype, "item", void 0);
    InputTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-tree',
            template: __webpack_require__(/*! raw-loader!./input-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/input-tree/input-tree.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./input-tree.component.scss */ "./src/app/components/common/input-tree/input-tree.component.scss")]
        })
    ], InputTreeComponent);
    return InputTreeComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-controls/items-controls.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/items-controls/items-controls.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col.filter {\n  max-width: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaXRlbXMtY29udHJvbHMvRDpcXE9TUGFuZWxcXGRvbWFpbnNcXG1mdGltaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tbW9uXFxpdGVtcy1jb250cm9sc1xcaXRlbXMtY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLWNvbnRyb2xzL2l0ZW1zLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLWNvbnRyb2xzL2l0ZW1zLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC5maWx0ZXJ7XHJcbiAgbWF4LXdpZHRoOiAyNzBweDtcclxufSIsIi5jb2wuZmlsdGVyIHtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/items-controls/items-controls.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/items-controls/items-controls.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemsControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsControlsComponent", function() { return ItemsControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");




var ItemsControlsComponent = /** @class */ (function () {
    function ItemsControlsComponent(exportAsService) {
        this.exportAsService = exportAsService;
        this._options = {};
        this.options = {
            exportBtn: true,
            clearBtn: false,
        };
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBan"];
        this.faFileExcel = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFileExcel"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.svc = null;
        this.addPath = '';
        this.limits = [];
        this.exportAsConfig = {
            type: 'xlsx',
            elementIdOrContent: 'items-table'
        };
        this.clearDialog = false;
    }
    ItemsControlsComponent.prototype.ngOnInit = function () {
        for (var key in this._options) {
            this.options[key] = this._options[key];
        }
        this.svc = this.app[this.itemType];
        this.addPath = this.app.addPaths[this.itemType];
        if (this.app.state.items[this.itemType])
            this.s = this.app.state.items[this.itemType];
        var _limit = 1 * this.app.state.default.limit;
        this.limits = [];
        this.limits.push(_limit);
        while (_limit <= 1000) {
            _limit += 1 * _limit;
            this.limits.push(_limit);
        }
    };
    ItemsControlsComponent.prototype.resetFilter = function () {
        this.app.state.resetFilter(this.itemType);
    };
    ItemsControlsComponent.prototype.export = function () {
        // download the file using old school javascript method
        this.exportAsService.save(this.exportAsConfig, this.itemType).subscribe(function () {
            // save started
        });
        // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
        // this.exportAsService.get(this.exportAsConfig).subscribe(content => {
        //   console.log(content);
        // });
    };
    ItemsControlsComponent.prototype.clear = function () {
        var _this = this;
        this.svc.clear().subscribe(function () {
            _this.svc.get().subscribe();
            _this.clearDialog = false;
        });
    };
    ItemsControlsComponent.ctorParameters = function () { return [
        { type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], ItemsControlsComponent.prototype, "app", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemType')
    ], ItemsControlsComponent.prototype, "itemType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options')
    ], ItemsControlsComponent.prototype, "_options", void 0);
    ItemsControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-controls',
            template: __webpack_require__(/*! raw-loader!./items-controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-controls/items-controls.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./items-controls.component.scss */ "./src/app/components/common/items-controls/items-controls.component.scss")]
        })
    ], ItemsControlsComponent);
    return ItemsControlsComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-import/items-import.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/items-import/items-import.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrapper {\n  height: 254px;\n  overflow-y: auto;\n  border: 1px solid #d6d6d6;\n  border-radius: 3px;\n}\n\n.hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaXRlbXMtaW1wb3J0L0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcaXRlbXMtaW1wb3J0XFxpdGVtcy1pbXBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLWltcG9ydC9pdGVtcy1pbXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9pdGVtcy1pbXBvcnQvaXRlbXMtaW1wb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXdyYXBwZXJ7XHJcbiAgaGVpZ2h0OiAyNTRweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5oaWRkZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIudGFibGUtd3JhcHBlciB7XG4gIGhlaWdodDogMjU0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/common/items-import/items-import.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/items-import/items-import.component.ts ***!
  \**************************************************************************/
/*! exports provided: ItemsImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsImportComponent", function() { return ItemsImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemsImportComponent = /** @class */ (function () {
    function ItemsImportComponent() {
        this.onParse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //public srcData:string = 'RFIDset 2787810,0,0,0\nRFIDset 2787811,0,0,0\nRFIDset 2787812,0,0,0\nRFIDset 2787813,0,0,0\nRFIDset 2787814,0,0,0\nRFIDset 2787815,0,0,0\nRFIDset 2787816,0,0,0\nRFIDset 2787817,0,0,0\nRFIDset 2787818,0,0,0\nRFIDset 2787819,0,0,0';
        this.srcData = '';
        this.parsedItems = [];
        this.delitmer = '';
        this.errors = [];
        this.validators = {
            required: function (value, key, items, index) {
                if (!value)
                    return { class: 'danger', msg: 'empty value', type: 'error' };
            },
            uniq: function (value, key, items, index) {
                if (value) {
                    if (index[key] && index[key][value]) {
                        return { class: 'danger', msg: 'value not uniq', type: 'error' };
                    }
                }
            },
        };
    }
    ItemsImportComponent.prototype.ngOnInit = function () {
        //this.parseSrcData();
        if (this.options && this.options.delitmer)
            this.delitmer = this.options.delitmer;
    };
    ItemsImportComponent.prototype.parseSrcData = function () {
        var _this = this;
        var index = {};
        this.errors = [];
        this.parsedItems = this.srcData.split(/[\n\r]/).map(function (row, i) {
            var arr = row.split(new RegExp(_this.delitmer ? _this.delitmer : /[\t\s,;]/));
            var item = { _state: {} };
            for (var key in _this.options.fields) {
                var field = _this.options.fields[key];
                if (field.src === 'value') {
                    if (field.value !== undefined)
                        item[field.name] = field.value.trim();
                }
                else if (field.relItems && field.relItemsProp) {
                    if (arr[field.src] !== undefined) {
                        if (field.relItems && field.relItems._index && field.relItems._index[field.relItemsProp] && field.relItems._index[field.relItemsProp][arr[field.src].trim()]) {
                            item[field.name] = field.relItems._index[field.relItemsProp][arr[field.src].trim()].id;
                        }
                    }
                }
                else {
                    if (arr[field.src] !== undefined)
                        item[field.name] = arr[field.src].trim();
                }
                if (field.validators) {
                    for (var vkey in field.validators) {
                        var validator = field.validators[vkey];
                        var validatorFunc = null;
                        if (typeof validator === 'function') {
                            validatorFunc = validator;
                        }
                        else if (typeof validator === 'string' && _this.validators[validator]) {
                            validatorFunc = _this.validators[validator];
                        }
                        if (validatorFunc) {
                            var result = validatorFunc(item[field.name], field.name, _this.parsedItems, index);
                            if (result) {
                                item._state[field.name] = result;
                                if (result.type && result.type === 'error') {
                                    _this.errors.push({ result: result, row: i + 1, fieldName: field.name });
                                }
                            }
                            ;
                        }
                    }
                }
                if (item[field.name] !== undefined && item[field.name] !== '') {
                    if (index[field.name] === undefined)
                        index[field.name] = {};
                    index[field.name][item[field.name]] = item;
                }
            }
            return item;
        }).filter(function (item) { return JSON.stringify(item) !== '{}'; });
        var items = [];
        for (var ckey in this.parsedItems) {
            var copy = Object.assign({}, this.parsedItems[ckey]);
            delete copy._state;
            items.push(copy);
        }
        ;
        this.onParse.emit({ items: items, errors: this.errors });
    };
    ItemsImportComponent.prototype.notSkypped = function (items) {
        return items.filter(function (item) { return (item.src !== 'skip'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], ItemsImportComponent.prototype, "app", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemType')
    ], ItemsImportComponent.prototype, "itemType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options')
    ], ItemsImportComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('parse')
    ], ItemsImportComponent.prototype, "onParse", void 0);
    ItemsImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-import',
            template: __webpack_require__(/*! raw-loader!./items-import.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-import/items-import.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./items-import.component.scss */ "./src/app/components/common/items-import/items-import.component.scss")]
        })
    ], ItemsImportComponent);
    return ItemsImportComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-paginator/items-paginator.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/items-paginator/items-paginator.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLXBhZ2luYXRvci9pdGVtcy1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/common/items-paginator/items-paginator.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/common/items-paginator/items-paginator.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemsPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPaginatorComponent", function() { return ItemsPaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemsPaginatorComponent = /** @class */ (function () {
    function ItemsPaginatorComponent() {
    }
    ItemsPaginatorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('state')
    ], ItemsPaginatorComponent.prototype, "s", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')
    ], ItemsPaginatorComponent.prototype, "result", void 0);
    ItemsPaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-paginator',
            template: __webpack_require__(/*! raw-loader!./items-paginator.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-paginator/items-paginator.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./items-paginator.component.scss */ "./src/app/components/common/items-paginator/items-paginator.component.scss")]
        })
    ], ItemsPaginatorComponent);
    return ItemsPaginatorComponent;
}());



/***/ }),

/***/ "./src/app/components/common/items-table/items-table.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/items-table/items-table.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes firstAdd {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.added {\n  -webkit-animation-name: firstAdd;\n  -webkit-animation-duration: 0.3s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-direction: alternate;\n}\n@-webkit-keyframes blocked {\n  from {\n    background-position: 0px;\n  }\n  to {\n    background-position: 109px;\n  }\n}\n.blocked {\n  opacity: 0.3;\n  background: url(\"/assets/images/blockedBG.png\");\n  background-repeat: repeat;\n  -webkit-animation-name: blocked;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaXRlbXMtdGFibGUvRDpcXE9TUGFuZWxcXGRvbWFpbnNcXG1mdGltaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tbW9uXFxpdGVtcy10YWJsZVxcaXRlbXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2l0ZW1zLXRhYmxlL2l0ZW1zLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxVQUFBO0VDQ0Y7RURDQTtJQUNFLFVBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FDQUY7QURHQTtFQUNFO0lBQ0Usd0JBQUE7RUNBRjtFREVBO0lBQ0UsMEJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxZQUFBO0VBRUEsK0NBQUE7RUFFQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlDQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9pdGVtcy10YWJsZS9pdGVtcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkAtd2Via2l0LWtleWZyYW1lcyBmaXJzdEFkZCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZGVke1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZpcnN0QWRkO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsb2NrZWQge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4OyAgICBcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTA5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2tlZHtcclxuICBvcGFjaXR5OiAuMztcclxuICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3Byb2dyZXNzX2JnMy5naWYnKTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Jsb2NrZWRCRy5wbmcnKTtcclxuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICByZXBlYXQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxvY2tlZDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAvLyAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuIFxyXG59XHJcblxyXG4iLCJALXdlYmtpdC1rZXlmcmFtZXMgZmlyc3RBZGQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYWRkZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaXJzdEFkZDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBibG9ja2VkIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4O1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDlweDtcbiAgfVxufVxuLmJsb2NrZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Jsb2NrZWRCRy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsb2NrZWQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/common/items-table/items-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/items-table/items-table.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsTableComponent", function() { return ItemsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ItemsTableComponent = /** @class */ (function () {
    function ItemsTableComponent() {
        this.result = { items: [] };
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.faListAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListAlt"];
        this.svc = null;
        this.editPath = '';
        this.options = {
            orderBy: null,
            fieldNames: ['name'],
            logLink: false,
            delBtn: true,
            indexCol: true,
            fields: { name: { type: 'link' } }
        };
        this.edit = [];
    }
    ItemsTableComponent.prototype.ngOnInit = function () {
        this.svc = this.app[this.itemType];
        this.editPath = this.app.addPaths[this.itemType];
        this.s = this.app.state.items[this.itemType];
        for (var key in this._options) {
            this.options[key] = this._options[key];
        }
    };
    ItemsTableComponent.prototype.del = function (item) {
        var _this = this;
        item.del()
            .subscribe(function (res) {
            _this.svc.get().subscribe();
        });
    };
    ItemsTableComponent.prototype.linkPath = function (item, fieldName) {
        return this.options.fields && this.options.fields[fieldName].path ? this.options.fields && ('/' + this.options.fields[fieldName].path + '/' + item[this.options.fields[fieldName].idName]) : ('/' + this.editPath + '/' + item.id);
    };
    ItemsTableComponent.prototype.save = function (item, fieldName, value) {
        var bck = '';
        if (item[fieldName] !== undefined)
            bck = '' + item[fieldName];
        item[fieldName] = value.target.value;
        item.save()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) {
            console.log('Save error');
            item[fieldName] = bck;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res);
        }))
            .subscribe(function (res) { });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], ItemsTableComponent.prototype, "app", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemType')
    ], ItemsTableComponent.prototype, "itemType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options')
    ], ItemsTableComponent.prototype, "_options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')
    ], ItemsTableComponent.prototype, "result", void 0);
    ItemsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-table',
            template: __webpack_require__(/*! raw-loader!./items-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/items-table/items-table.component.html"),
            styles: [__webpack_require__(/*! ./items-table.component.scss */ "./src/app/components/common/items-table/items-table.component.scss")]
        })
    ], ItemsTableComponent);
    return ItemsTableComponent;
}());



/***/ }),

/***/ "./src/app/components/common/multi-select/multi-select.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/multi-select/multi-select.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-container {\n  display: inline-block;\n  min-width: 500px;\n}\n\n.buttons-container {\n  display: inline-block;\n  min-width: 30px;\n  vertical-align: top;\n  margin-top: 27px;\n}\n\n.buttons-container button {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbXVsdGktc2VsZWN0L0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcbXVsdGktc2VsZWN0XFxtdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEREU7RUFDRSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuLmJ1dHRvbnMtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxufSIsIi5zZWxlY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cbi5idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/multi-select/multi-select.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/multi-select/multi-select.component.ts ***!
  \**************************************************************************/
/*! exports provided: MultiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent() {
        this.disabled = false;
    }
    MultiSelectComponent.prototype.ngOnInit = function () {
    };
    MultiSelectComponent.prototype.addItem = function (item) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        items.push(item.id);
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.removeItem = function (item) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        items.splice(items.indexOf(item.id), 1);
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.addItems = function (e) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        var options = (function (elem) { return elem.options; })(document.getElementById('other_items_' + this.controlIdKey));
        for (var key in options) {
            var option = options[key];
            if (option.selected) {
                items.push(1 * option.value);
            }
        }
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.removeItems = function (e) {
        if (this.disabled)
            return;
        var items = this.form.controls[this.controlIdKey].value.slice();
        var options = (function (elem) { return elem.options; })(document.getElementById('added_items_' + this.controlIdKey));
        for (var key in options) {
            var option = options[key];
            if (option.selected) {
                items.splice(items.indexOf(1 * option.value), 1);
            }
        }
        this.form.controls[this.controlIdKey].setValue(items);
    };
    MultiSelectComponent.prototype.keyNames = function (item) {
        var result = [];
        this.refNameKeys.forEach(function (keyName) { if (item[keyName] !== undefined)
            result.push(item[keyName]); });
        return result.join(' ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('form')
    ], MultiSelectComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlIdKey')
    ], MultiSelectComponent.prototype, "controlIdKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refSvc')
    ], MultiSelectComponent.prototype, "refSvc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], MultiSelectComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refNameKeys')
    ], MultiSelectComponent.prototype, "refNameKeys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled')
    ], MultiSelectComponent.prototype, "disabled", void 0);
    MultiSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-select',
            template: __webpack_require__(/*! raw-loader!./multi-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/multi-select/multi-select.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./multi-select.component.scss */ "./src/app/components/common/multi-select/multi-select.component.scss")]
        })
    ], MultiSelectComponent);
    return MultiSelectComponent;
}());



/***/ }),

/***/ "./src/app/components/common/search-select/search-select.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/search-select/search-select.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-container {\n  position: relative;\n}\n.select-container .select-dropdown {\n  position: absolute;\n  top: 40px;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  overflow-y: scroll;\n  max-height: 200px;\n  display: block;\n  padding: 10px;\n  z-index: 100;\n  width: 400px;\n}\n.select-container .select-dropdown .loading-spinner {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2VhcmNoLXNlbGVjdC9EOlxcT1NQYW5lbFxcZG9tYWluc1xcbWZ0aW1pbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21tb25cXHNlYXJjaC1zZWxlY3RcXHNlYXJjaC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL3NlYXJjaC1zZWxlY3Qvc2VhcmNoLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9zZWFyY2gtc2VsZWN0L3NlYXJjaC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLnNlbGVjdC1maWx0ZXJ7XHJcbiAgfVxyXG4gIC5zZWxlY3QtZHJvcGRvd257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSkgO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIuc2VsZWN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3QtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdC1kcm9wZG93biAubG9hZGluZy1zcGlubmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/search-select/search-select.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/common/search-select/search-select.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSelectComponent", function() { return SearchSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchSelectComponent = /** @class */ (function () {
    function SearchSelectComponent() {
        this.result = { items: [] };
    }
    SearchSelectComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('form')
    ], SearchSelectComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlIdKey')
    ], SearchSelectComponent.prototype, "controlIdKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refSvc')
    ], SearchSelectComponent.prototype, "refSvc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('item')
    ], SearchSelectComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('refNameKey')
    ], SearchSelectComponent.prototype, "refNameKey", void 0);
    SearchSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-select',
            template: __webpack_require__(/*! raw-loader!./search-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/common/search-select/search-select.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./search-select.component.scss */ "./src/app/components/common/search-select/search-select.component.scss")]
        })
    ], SearchSelectComponent);
    return SearchSelectComponent;
}());



/***/ }),

/***/ "./src/app/components/competitor/competitor.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/competitor/competitor.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGV0aXRvci9jb21wZXRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/competitor/competitor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/competitor/competitor.component.ts ***!
  \***************************************************************/
/*! exports provided: CompetitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorComponent", function() { return CompetitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");







var CompetitorComponent = /** @class */ (function () {
    function CompetitorComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.competitor = null;
        this.importOptions = {
            fields: [
                { name: 'regDate', src: 0, validators: ['required'] },
                { name: 'num', src: 8 },
                { name: 'name1', src: 1, validators: ['required'] },
                { name: 'name2', src: 2, validators: ['required'] },
                { name: 'name3', src: 3, validators: [] },
                { name: 'birdthDate', src: 4, validators: [] },
                // {name: 'categoryId', src: 'value', value: ''},
                { name: 'categoryId', src: 5, relItems: this.app.categories, relItemsProp: 'name' },
                { name: 'team', src: 6 },
            ],
            delitmer: '\\t',
        };
        this.multiAddErrors = [];
        this.parsedItems = { items: [], errors: [] };
    }
    CompetitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.competitor = _this.app.competitors._index.id[params['competitorId']];
        }))
            .subscribe(function () {
            if (_this.competitor)
                _this.competitorForm.patchValue(_this.competitor);
        });
    };
    CompetitorComponent.prototype.initForm = function () {
        this.competitorForm = this.fb.group({
            regDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            num: ['', []],
            name1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            name2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            name3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            birdthDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            categoryId: ['', []],
            team: ['', []],
            desc: ['', []],
        });
    };
    CompetitorComponent.prototype.onCompetitorFormSubmit = function () {
        this.competitor ? this.saveCompetitor() : this.addCompetitor();
    };
    CompetitorComponent.prototype.addCompetitor = function () {
        var _this = this;
        this.app.competitors.add(this.competitorForm.value)
            .subscribe(function (res) {
            var newUserId = null;
            if (res.id)
                newUserId = res.id;
            _this.app.competitors.get()
                .subscribe(function () {
                if (newUserId)
                    _this.router.navigate(['competitors']);
            });
        });
    };
    CompetitorComponent.prototype.saveCompetitor = function () {
        var _this = this;
        for (var key in this.competitorForm.value) {
            this.competitor[key] = this.competitorForm.value[key];
        }
        this.competitor.save()
            .subscribe(function (res) {
            _this.app.competitors.get()
                .subscribe();
            _this.router.navigate(['competitors']);
        });
    };
    CompetitorComponent.prototype.importItems = function (items) {
        var _this = this;
        this.app.competitors.addMultiple(items)
            .subscribe(function (res) {
            _this.multiAddErrors = res.added.filter(function (item) { return !item.id; });
            _this.app.competitors.get()
                .subscribe();
            if (_this.multiAddErrors.length === 0)
                _this.router.navigate(['competitors']);
        });
    };
    CompetitorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CompetitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competitor',
            template: __webpack_require__(/*! raw-loader!./competitor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/competitor/competitor.component.html"),
            styles: [__webpack_require__(/*! ./competitor.component.scss */ "./src/app/components/competitor/competitor.component.scss")]
        })
    ], CompetitorComponent);
    return CompetitorComponent;
}());



/***/ }),

/***/ "./src/app/components/competitors/competitors.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/competitors/competitors.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGV0aXRvcnMvY29tcGV0aXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/competitors/competitors.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/competitors/competitors.component.ts ***!
  \*****************************************************************/
/*! exports provided: CompetitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorsComponent", function() { return CompetitorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var CompetitorsComponent = /** @class */ (function () {
    function CompetitorsComponent(app) {
        this.app = app;
        this.controlsOptions = {
            clearBtn: true
        };
        this.tableOptions = {
            fieldNames: [
                'regDate',
                'num',
                'fullName',
                'birdthDate',
                'categoryName',
                'team',
                'desc',
            ],
            fields: {
                num: { type: 'edit' },
                fullName: { type: 'link' },
            },
        };
        this.itemType = 'competitors';
    }
    CompetitorsComponent.prototype.ngOnInit = function () {
    };
    CompetitorsComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    CompetitorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competitors',
            template: __webpack_require__(/*! raw-loader!./competitors.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/competitors/competitors.component.html"),
            styles: [__webpack_require__(/*! ./competitors.component.scss */ "./src/app/components/competitors/competitors.component.scss")]
        })
    ], CompetitorsComponent);
    return CompetitorsComponent;
}());



/***/ }),

/***/ "./src/app/components/go/go.component.scss":
/*!*************************************************!*\
  !*** ./src/app/components/go/go.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 2px;\n  border-radius: 5px;\n  background: white;\n}\n.reg.start {\n  background: #96ca7d;\n}\n.reg.start .silver {\n  color: white;\n}\n.reg.finish {\n  background: #f7bc73;\n}\n.reg.finish .silver {\n  color: white;\n}\n.clickable {\n  cursor: pointer;\n}\n.clickable:hover {\n  background: rgba(0, 20, 30, 0.1);\n}\n.scrolled {\n  overflow-y: auto;\n  max-height: 200px;\n}\n#scrolledTarget {\n  overflow-y: auto;\n  max-height: 200px;\n  background: #e5e6e6;\n}\n.scroll-bg {\n  background-image: url(/assets/images/ring.svg);\n  background-position: center;\n  background-repeat: repeat-y;\n  background-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nby9EOlxcT1NQYW5lbFxcZG9tYWluc1xcbWZ0aW1pbmdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnb1xcZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ28vZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLG1CQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7QUNHTjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBRERJO0VBQ0UsWUFBQTtBQ0dOO0FERUE7RUFDRSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGdDQUFBO0FDRUo7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDQTtFQUNFLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dvL2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ3tcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcclxuICBtYXJnaW46IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogaHNsKDIwMGRlZywgMCUsIDEwMCUgLCAxMDAlKTtcclxuICAmLnN0YXJ0e1xyXG4gICAgYmFja2dyb3VuZDogaHNsKDEwMGRlZyA0MiUgNjQlKTtcclxuICAgIC5zaWx2ZXJ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5maW5pc2h7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2woMzNkZWcgODklIDcxJSk7XHJcbiAgICAuc2lsdmVye1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2xpY2thYmxle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDIwLDMwLC4xKVxyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbGVke1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7ICBcclxufVxyXG5cclxuI3Njcm9sbGVkVGFyZ2V0e1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7ICBcclxuICBiYWNrZ3JvdW5kOiBoc2xhKDIwMGRlZywgMyUsIDkwJSAsIDEwMCUpO1xyXG59XHJcbi5zY3JvbGwtYmd7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3Jpbmcuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweDtcclxufSIsIi5yZWcge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnJlZy5zdGFydCB7XG4gIGJhY2tncm91bmQ6ICM5NmNhN2Q7XG59XG4ucmVnLnN0YXJ0IC5zaWx2ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4ucmVnLmZpbmlzaCB7XG4gIGJhY2tncm91bmQ6ICNmN2JjNzM7XG59XG4ucmVnLmZpbmlzaCAuc2lsdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNsaWNrYWJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjAsIDMwLCAwLjEpO1xufVxuXG4uc2Nyb2xsZWQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuI3Njcm9sbGVkVGFyZ2V0IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWU2ZTY7XG59XG5cbi5zY3JvbGwtYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvcmluZy5zdmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/go/go.component.ts":
/*!***********************************************!*\
  !*** ./src/app/components/go/go.component.ts ***!
  \***********************************************/
/*! exports provided: GoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoComponent", function() { return GoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var GoComponent = /** @class */ (function () {
    function GoComponent(route, app, router) {
        var _this = this;
        this.route = route;
        this.app = app;
        this.router = router;
        this.newEvent = null;
        this.editEventId = 0;
        this.editEventFilter = {
            fullNameNum: '',
        };
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBan"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSave"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrashAlt"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"];
        this.result = { items: [] };
        this.editEventFilterresult = { items: [] };
        this.createNewEvent = function () {
            _this.newEvent = {
                accountId: 0,
                eventType: 1,
                raceId: _this.app.go.race.id,
                competitorId: 0,
                t: 0,
                desc: '',
                d: 0,
                categoryIds: [],
            };
        };
        this.delayH = function (item, items, i) {
            if (!_this.s.eventsTimeScale)
                return '';
            if (item && items && item.eventType != 3) {
                var m = 0;
                if (items[i - 1]) {
                    m = items[i - 1].t - item.t;
                }
                else {
                    //m = 0;
                    m = _this.app.go.t - item.t;
                }
                return parseInt(String(m / _this.s.eventsTimeScale)) + 'px';
            }
            return '';
        };
        this.onFormSubmit = function (eventType, competitorId) {
            if (competitorId === void 0) { competitorId = 0; }
            _this.newEvent.eventType = eventType;
            _this.newEvent.competitorId = competitorId;
            _this.newEvent.t = 1 * _this.app.go.t;
            if (!competitorId && _this.s.filter.competitorName) {
                _this.newEvent.desc += ' [' + _this.s.filter.competitorName + ']';
            }
            _this.app.raceevents.add(_this.newEvent)
                .subscribe(function (res) {
                _this.app.raceevents.get()
                    .subscribe(function () {
                    _this.app.go.get();
                    _this.createNewEvent();
                    _this.s.filter.competitorName = '';
                });
            });
        };
    }
    GoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.s = this.app.state.items['go'];
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (params) {
            if (params['raceId']) {
                _this.app.go.race = _this.app.races._index.id[params['raceId']];
                _this.createNewEvent();
                _this.app.go.get();
                var iid_1 = setInterval(function () {
                    //const elem = document.getElementById('scroledCnt');
                    var elem = document.body;
                    var targetElem = document.getElementById('scrolledTarget');
                    if (elem) {
                        var resizeObserver = new window.ResizeObserver(function (e) {
                            targetElem.style.maxHeight = (elem.clientHeight - 140) + 'px';
                        });
                        resizeObserver.observe(elem);
                        window.clearInterval(iid_1);
                        return;
                    }
                }, 100);
            }
            else {
                _this.app.go.reset();
            }
        })).subscribe(function () { });
    };
    GoComponent.prototype.resetEventsFilter = function () {
        this.s.eventsFilter = {
            fullNameNum: '',
        };
    };
    GoComponent.prototype.setEditCopetitorId = function (item) {
        item.competitorId = this.editEventFilterresult.items[0] ? this.editEventFilterresult.items[0].id : 0;
    };
    GoComponent.prototype.switchEditEventForm = function (item, save) {
        var _this = this;
        if (save === void 0) { save = false; }
        if (this.editEventId !== item.id) {
            this.editEventId = item.id;
        }
        else {
            if (save) {
                item.save()
                    .subscribe(function () {
                    _this.editEventId = 0;
                    _this.app.go.get();
                });
            }
            else {
                this.editEventId = 0;
                this.app.raceevents.get(item.id)
                    .subscribe(function () { return _this.app.go.get(); });
            }
        }
    };
    GoComponent.prototype.saveEvent = function (item) {
        var _this = this;
        item.save()
            .subscribe(function () {
            _this.editEventId = 0;
            _this.app.go.get();
        });
    };
    GoComponent.prototype.delEvent = function (item) {
        var _this = this;
        item.del()
            .subscribe(function () {
            _this.app.raceevents.get().subscribe(function () {
                _this.app.go.get();
            });
        });
    };
    GoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('result')
    ], GoComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('editEventFilterresult')
    ], GoComponent.prototype, "editEventFilterresult", void 0);
    GoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-go',
            template: __webpack_require__(/*! raw-loader!./go.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/go/go.component.html"),
            styles: [__webpack_require__(/*! ./go.component.scss */ "./src/app/components/go/go.component.scss")]
        })
    ], GoComponent);
    return GoComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  font-weight: 600;\n}\n.logo #logo-svg {\n  width: 24px;\n  margin-top: -8px;\n  margin-right: -7px;\n}\n.logo img {\n  width: 32px;\n  margin-top: -7px;\n}\n.silver {\n  color: silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXE9TUGFuZWxcXGRvbWFpbnNcXG1mdGltaW5nXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAjbG9nby1zdmd7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC03cHg7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICB9XHJcbn1cclxuLnNpbHZlcntcclxuICBjb2xvcjogc2lsdmVyO1xyXG59XHJcbiIsIi5sb2dvIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5sb2dvICNsb2dvLXN2ZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC03cHg7XG59XG4ubG9nbyBpbWcge1xuICB3aWR0aDogMzJweDtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuLnNpbHZlciB7XG4gIGNvbG9yOiBzaWx2ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(core, app, router) {
        this.core = core;
        this.app = app;
        this.router = router;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCog"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSignOutAlt"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.core.onLoggedIn().subscribe(function (_) {
            _this.r = _this.core.user.rights.nav.header;
        });
    };
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.core.logOut().subscribe(function (res) {
            if (res.logout)
                _this.router.navigate(['login']);
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes anim-appear {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes anim-appear {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n#logo {\n  margin: 20px;\n  -webkit-animation: anim-appear 3s ease-in;\n          animation: anim-appear 3s ease-in;\n}\n#h {\n  -webkit-animation: anim-appear 5s ease-in;\n          animation: anim-appear 5s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFBSSxVQUFBO0VDRUo7RUREQTtJQUFLLFVBQUE7RUNJTDtFREhBO0lBQU0sVUFBQTtFQ01OO0FBQ0Y7QURWQTtFQUNFO0lBQUksVUFBQTtFQ0VKO0VEREE7SUFBSyxVQUFBO0VDSUw7RURIQTtJQUFNLFVBQUE7RUNNTjtBQUNGO0FESkE7RUFDRSxZQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ01GO0FERkE7RUFDRSx5Q0FBQTtVQUFBLGlDQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgYW5pbS1hcHBlYXIge1xyXG4gIDAlIHtvcGFjaXR5OiAwOyB9IFxyXG4gIDUwJSB7b3BhY2l0eTogMDsgfSBcclxuICAxMDAlIHtvcGFjaXR5OiAxO30gXHJcbn1cclxuXHJcbiNsb2dve1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBhbmltYXRpb246IGFuaW0tYXBwZWFyIDNzIGVhc2UtaW47IFxyXG5cclxufVxyXG5cclxuI2h7XHJcbiAgYW5pbWF0aW9uOiBhbmltLWFwcGVhciA1cyBlYXNlLWluOyBcclxufSIsIkBrZXlmcmFtZXMgYW5pbS1hcHBlYXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xvZ28ge1xuICBtYXJnaW46IDIwcHg7XG4gIGFuaW1hdGlvbjogYW5pbS1hcHBlYXIgM3MgZWFzZS1pbjtcbn1cblxuI2gge1xuICBhbmltYXRpb246IGFuaW0tYXBwZWFyIDVzIGVhc2UtaW47XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(core, router) {
        this.core = core;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-appevts-log/nav-appevts-log.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/nav-appevts-log/nav-appevts-log.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWFwcGV2dHMtbG9nL25hdi1hcHBldnRzLWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nav-appevts-log/nav-appevts-log.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/nav-appevts-log/nav-appevts-log.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavAPPEvtsLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAPPEvtsLogComponent", function() { return NavAPPEvtsLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavAPPEvtsLogComponent = /** @class */ (function () {
    function NavAPPEvtsLogComponent() {
    }
    NavAPPEvtsLogComponent.prototype.ngOnInit = function () {
    };
    NavAPPEvtsLogComponent.prototype.filterByTypes = function (item) {
        return (item.a !== 5 && item.a !== 6);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], NavAPPEvtsLogComponent.prototype, "app", void 0);
    NavAPPEvtsLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-appevts-log',
            template: __webpack_require__(/*! raw-loader!./nav-appevts-log.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-appevts-log/nav-appevts-log.component.html"),
            styles: [__webpack_require__(/*! ./nav-appevts-log.component.scss */ "./src/app/components/nav-appevts-log/nav-appevts-log.component.scss")]
        })
    ], NavAPPEvtsLogComponent);
    return NavAPPEvtsLogComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-trash/nav-trash.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/nav-trash/nav-trash.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LXRyYXNoL25hdi10cmFzaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nav-trash/nav-trash.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-trash/nav-trash.component.ts ***!
  \*************************************************************/
/*! exports provided: NavTrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTrashComponent", function() { return NavTrashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var NavTrashComponent = /** @class */ (function () {
    function NavTrashComponent() {
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.faTrashRestore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashRestore"];
        this.trashSize = 0;
    }
    NavTrashComponent.prototype.ngOnInit = function () { };
    NavTrashComponent.prototype.checkSize = function () {
        this.trashSize = this.app.trash.Length;
        return this.trashSize;
    };
    NavTrashComponent.prototype.restore = function (item, e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        this.app.trash.restore(item)
            .subscribe(function (res) {
            if (res.restored)
                _this.app.trash.removeItem(item);
        });
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app')
    ], NavTrashComponent.prototype, "app", void 0);
    NavTrashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-trash',
            template: __webpack_require__(/*! raw-loader!./nav-trash.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-trash/nav-trash.component.html"),
            styles: [__webpack_require__(/*! ./nav-trash.component.scss */ "./src/app/components/nav-trash/nav-trash.component.scss")]
        })
    ], NavTrashComponent);
    return NavTrashComponent;
}());



/***/ }),

/***/ "./src/app/components/race/race.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/race/race.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFjZS9yYWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/race/race.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/race/race.component.ts ***!
  \***************************************************/
/*! exports provided: RaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceComponent", function() { return RaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");







var RaceComponent = /** @class */ (function () {
    function RaceComponent(route, fb, app, router) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.race = null;
    }
    RaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (params) {
            _this.race = _this.app.races._index.id[params['raceId']];
        }))
            .subscribe(function () {
            if (_this.race)
                _this.itemForm.patchValue(_this.race);
        });
    };
    RaceComponent.prototype.initForm = function () {
        this.itemForm = this.fb.group({
            seasonId: ['', []],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            from: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
            to: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]],
        });
    };
    RaceComponent.prototype.onItemFormSubmit = function () {
        this.race ? this.saveRace() : this.addRace();
    };
    RaceComponent.prototype.addRace = function () {
        var _this = this;
        console.log(this.itemForm);
        this.app.races.add(this.itemForm.value)
            .subscribe(function (res) {
            var newItemId = null;
            if (res.id)
                newItemId = res.id;
            _this.app.races.get()
                .subscribe(function () {
                if (newItemId)
                    _this.router.navigate(['races']);
            });
        });
    };
    RaceComponent.prototype.saveRace = function () {
        var _this = this;
        for (var key in this.itemForm.value) {
            this.race[key] = this.itemForm.value[key];
        }
        this.race.save()
            .subscribe(function (res) {
            _this.app.races.get()
                .subscribe();
            _this.router.navigate(['races']);
        });
    };
    RaceComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-race',
            template: __webpack_require__(/*! raw-loader!./race.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/race/race.component.html"),
            styles: [__webpack_require__(/*! ./race.component.scss */ "./src/app/components/race/race.component.scss")]
        })
    ], RaceComponent);
    return RaceComponent;
}());



/***/ }),

/***/ "./src/app/components/races/races.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/races/races.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFjZXMvcmFjZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/races/races.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/races/races.component.ts ***!
  \*****************************************************/
/*! exports provided: RacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacesComponent", function() { return RacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");



var RacesComponent = /** @class */ (function () {
    function RacesComponent(app) {
        this.app = app;
        this.contolsOptions = {
        // clearBtn: true
        };
        this.tableOptions = {
            fieldNames: [
                'name',
                'go',
                'results',
                'from',
                'to',
            ],
            fields: {
                name: { type: 'link' },
                go: { type: 'link', path: 'go/', idName: 'id', staticValue: 'Войти в гонку' },
                results: { type: 'link', path: 'results/', idName: 'id', staticValue: 'Результаты' },
            },
        };
        this.itemType = 'races';
    }
    RacesComponent.prototype.ngOnInit = function () {
    };
    RacesComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
    ]; };
    RacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-races',
            template: __webpack_require__(/*! raw-loader!./races.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/races/races.component.html"),
            styles: [__webpack_require__(/*! ./races.component.scss */ "./src/app/components/races/races.component.scss")]
        })
    ], RacesComponent);
    return RacesComponent;
}());



/***/ }),

/***/ "./src/app/components/results/results.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/results/results.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/results/results.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/results/results.component.ts ***!
  \*********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");






var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(route, app, router) {
        this.route = route;
        this.app = app;
        this.router = router;
        this.res = 0;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.ifAppReady()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (params) {
            if (params['raceId']) {
                _this.app.results.race = _this.app.races._index.id[params['raceId']];
                _this.app.results.get();
            }
            else {
                //this.app.results.reset();
            }
        })).subscribe(function () { });
    };
    ResultsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/components/results/results.component.scss")]
        })
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n  margin-top: 30px;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=email] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=password] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.logo {\n  position: relative;\n  font-size: 50px;\n  font-weight: 400;\n  color: black;\n  margin-top: 15%;\n  margin-left: -30px;\n}\n\n#logo-svg {\n  width: 60px;\n  margin-top: -18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL0Q6XFxPU1BhbmVsXFxkb21haW5zXFxtZnRpbWluZ1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZ24taW5cXHNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4ubG9nb3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbn1cclxuI2xvZ28tc3Zne1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG59XHJcbiIsIi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4jbG9nby1zdmcge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luLXRvcDogLTE4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/core.service */ "./src/app/services/core.service.ts");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(core, fb, router) {
        this.core = core;
        this.fb = fb;
        this.router = router;
        this.signInFormError = '';
    }
    SignInComponent.prototype.ngOnInit = function () {
        //if(this.core.session) this.router.navigate(['']);
        this.initForm();
    };
    SignInComponent.prototype.initForm = function () {
        this.signInForm = this.fb.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ]
        });
    };
    SignInComponent.prototype.onFromSubmit = function (event) {
        var _this = this;
        this.signInFormError = '';
        this.core.login(this.signInForm.value)
            .subscribe(function (res) {
            if (res.sid) {
                _this.router.navigate(['']);
            }
            else {
                _this.signInFormError = (res.error && res.error.error) ? res.error.error : 'Unknown error';
            }
        });
        return false;
    };
    SignInComponent.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/components/sign-in/sign-in.component.scss")]
        })
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");










var UserComponent = /** @class */ (function () {
    function UserComponent(route, fb, app, router, userService) {
        this.route = route;
        this.fb = fb;
        this.app = app;
        this.router = router;
        this.userService = userService;
        this.user = {};
        this.faEyeSlash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEyeSlash"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEye"];
        this.userPasswordConfirm = ''; // Kostyl!!!!
        this.passwordsVisible = false;
        this.updateEvent = new Event('treeUpdated');
    }
    UserComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getUser(this.app.ifAppReady());
    };
    UserComponent.prototype.getUser = function (onready) {
        var _this = this;
        onready.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.route.params; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return (params['userId'] ? _this.app.users._index.id[params['userId']].get() : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (item) { _this.user = item; }))
            .subscribe(function () {
            if (_this.user) {
                _this.userForm.patchValue(_this.user);
            }
            else {
                _this.userForm.get('password').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                _this.userForm.controls['password'].updateValueAndValidity();
                _this.user = { _ready: true };
            }
            document.dispatchEvent(_this.updateEvent);
        });
    };
    UserComponent.prototype.initForm = function () {
        this.userForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', []],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            d: [0, []],
        });
    };
    UserComponent.prototype.checkPasswordConfirmation = function (e) {
        if (e)
            this.userPasswordConfirm = e.srcElement.value;
        if (this.userPasswordConfirm !== this.userForm.controls['password'].value) {
            this.userForm.controls['password'].setErrors({ nonConfirmed: true });
            return false;
        }
        this.userForm.controls['password'].setErrors({ nonConfirmed: null });
        this.userForm.controls['password'].updateValueAndValidity();
    };
    UserComponent.prototype.onUserFormSubmit = function (e) {
        this.user.id ? this.saveUser() : this.addUser();
        return false;
    };
    UserComponent.prototype.addUser = function () {
        var _this = this;
        this.app.users.add(this.userForm.value)
            .subscribe(function (res) {
            var newUserId = null;
            if (res.id)
                newUserId = res.id;
            _this.app.users.get()
                .subscribe(function () {
                if (newUserId)
                    _this.router.navigate(['users']);
            });
        });
    };
    UserComponent.prototype.saveUser = function () {
        var _this = this;
        for (var key in this.userForm.value) {
            this.user[key] = this.userForm.value[key];
        }
        this.user.save()
            .subscribe(function (res) {
            _this.app.users.get()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.getUser(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)); }))
                .subscribe();
            _this.router.navigate(['users']);
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(app) {
        this.app = app;
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrashAlt"];
        this.faUserLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserLock"];
        this.result = { items: [] };
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.getUsers = function () {
        this.app.users.get().subscribe();
    };
    UsersComponent.prototype.delUser = function (user) {
        var _this = this;
        user.del()
            .subscribe(function (res) {
            _this.app.users.get().subscribe();
        });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users/users.component.scss")]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/db.migration.ts":
/*!*********************************!*\
  !*** ./src/app/db.migration.ts ***!
  \*********************************/
/*! exports provided: myDBConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myDBConfig", function() { return myDBConfig; });
// Ahead of time compiles requires an exported function for factories
var migrationFactory = function () {
    // The animal table was added with version 2 but none of the existing tables or data needed
    // to be modified so a migrator for that version is not included.
    return {
        7: function (db, transaction) {
            var store = transaction.objectStore('competitors');
            store.createIndex('email', 'email', { unique: false });
            store.createIndex('phone', 'phone', { unique: false });
        },
        8: function (db, transaction) {
            var store = transaction.objectStore('users');
            store.createIndex('email', 'email', { unique: false });
        },
        9: function (db, transaction) {
            var store = transaction.objectStore('users');
            store.createIndex('root', 'root', { unique: false });
        },
        10: function (db, transaction) {
            var store = transaction.objectStore('raceevents');
            store.createIndex('categoryIds', 'categoryIds', { unique: false });
        },
        11: function (db, transaction) {
            var store = transaction.objectStore('categories');
            store.createIndex('pos', 'pos', { unique: false });
        },
    };
};
function myDBConfig() {
    return {
        name: 'MyDb',
        version: 10,
        objectStoresMeta: [
            {
                store: 'accounts',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'dt', keypath: 'dt', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'users',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'password', keypath: 'password', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'seasons',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'from', keypath: 'from', options: { unique: false } },
                    { name: 'to', keypath: 'to', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'categories',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'seasonId', keypath: 'seasonId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'ageFrom', keypath: 'ageFrom', options: { unique: false } },
                    { name: 'ageTo', keypath: 'ageTo', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'races',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'seasonId', keypath: 'seasonId', options: { unique: false } },
                    { name: 'name', keypath: 'name', options: { unique: true } },
                    { name: 'from', keypath: 'from', options: { unique: false } },
                    { name: 'to', keypath: 'to', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'competitors',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'regDate', keypath: 'regDate', options: { unique: false } },
                    { name: 'num', keypath: 'num', options: { unique: false } },
                    { name: 'name1', keypath: 'name1', options: { unique: false } },
                    { name: 'name2', keypath: 'name2', options: { unique: false } },
                    { name: 'name3', keypath: 'name3', options: { unique: false } },
                    { name: 'birdthDate', keypath: 'birdthDate', options: { unique: false } },
                    { name: 'categoryId', keypath: 'categoryId', options: { unique: false } },
                    { name: 'team', keypath: 'team', options: { unique: false } },
                    { name: 'desc', keypath: 'desc', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'raceevents',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'eventType', keypath: 'eventType', options: { unique: false } },
                    { name: 'raceId', keypath: 'raceId', options: { unique: false } },
                    { name: 'competitorId', keypath: 'competitorId', options: { unique: false } },
                    { name: 't', keypath: 't', options: { unique: false } },
                    { name: 'desc', keypath: 'desc', options: { unique: false } },
                    { name: 'd', keypath: 'd', options: { unique: false } },
                ]
            },
            {
                store: 'log',
                storeConfig: { keyPath: 'id', autoIncrement: true },
                storeSchema: [
                    { name: 'accountId', keypath: 'accountId', options: { unique: false } },
                    { name: 'type', keypath: 'type', options: { unique: false } },
                    { name: 'userId', keypath: 'userId', options: { unique: false } },
                    { name: 'objectType', keypath: 'objectType', options: { unique: false } },
                    { name: 'objectId', keypath: 'objectId', options: { unique: false } },
                    { name: 't', keypath: 't', options: { unique: true } },
                    { name: 'data', keypath: 'data', options: { unique: false } },
                ]
            },
        ],
        // provide the migration factory to the DBConfig
        migrationFactory: migrationFactory
    };
}
;


/***/ }),

/***/ "./src/app/pipes/as-result.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/as-result.pipe.ts ***!
  \*****************************************/
/*! exports provided: AsResultPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsResultPipe", function() { return AsResultPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AsResultPipe = /** @class */ (function () {
    function AsResultPipe() {
    }
    AsResultPipe.prototype.transform = function (items, result) {
        result.items = items;
        return items;
    };
    AsResultPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'asResult',
            pure: false
        })
    ], AsResultPipe);
    return AsResultPipe;
}());



/***/ }),

/***/ "./src/app/pipes/in-list-filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/in-list-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: InListFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InListFilterPipe", function() { return InListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InListFilterPipe = /** @class */ (function () {
    function InListFilterPipe() {
    }
    InListFilterPipe.prototype.transform = function (items, list, exist, indexKey) {
        if (exist === void 0) { exist = true; }
        if (indexKey === void 0) { indexKey = 'id'; }
        if (!items || !list)
            return items;
        return items.filter(function (item) { return (exist === (list.indexOf(item[indexKey]) >= 0)); });
    };
    InListFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'inListFilter'
        })
    ], InListFilterPipe);
    return InListFilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/keys.pipe.ts ***!
  \************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        return Object.keys(value);
    };
    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/my-filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/my-filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: MyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function() { return MyFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter, byKeys) {
        if (byKeys === void 0) { byKeys = null; }
        if (!items || !filter) {
            return items;
        }
        //if(filter.length<=1) return items;
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        if (typeof filter === 'string') {
            if (filter === '')
                return items;
            return items.filter(function (item) {
                if (byKeys) {
                    for (var key in byKeys) {
                        if (item[byKeys[key]] !== undefined) {
                            if (RegExp(filter, 'i').test(item[byKeys[key]]))
                                return true;
                        }
                    }
                }
                else {
                    for (var key in item) {
                        if (RegExp(filter, 'i').test(item[key]))
                            return true;
                    }
                }
                return false;
            });
        }
        else if (typeof filter === 'object') {
            return items.filter(function (item) {
                var result = true;
                for (var key in filter) {
                    if (filter[key] === null && (item[key] === undefined || item[key] === false)) {
                        result = result && true;
                    }
                    else {
                        if ((filter[key] !== '') && (item[key] !== undefined)) {
                            result = result && (RegExp(filter[key], 'i').test(item[key]));
                        }
                    }
                }
                return result;
            });
        }
        return false;
    };
    MyFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'myFilter',
            pure: false
        })
    ], MyFilterPipe);
    return MyFilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/order-by-select_value.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/order-by-select_value.pipe.ts ***!
  \*****************************************************/
/*! exports provided: OrderBySelectValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBySelectValue", function() { return OrderBySelectValue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderBySelectValue = /** @class */ (function () {
    function OrderBySelectValue() {
    }
    OrderBySelectValue.prototype.transform = function (obj, currentField, value) {
        obj.sort(function (a, b) { return (a[currentField] === value ? -1 : 1); });
        return obj;
    };
    OrderBySelectValue = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBySelectValue'
        })
    ], OrderBySelectValue);
    return OrderBySelectValue;
}());



/***/ }),

/***/ "./src/app/pipes/order-by.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/order-by.pipe.ts ***!
  \****************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (obj, orderFields) {
        if (!orderFields)
            return obj;
        orderFields.forEach(function (currentField) {
            var orderType = 'ASC';
            if (currentField[0] === '-') {
                currentField = currentField.substring(1);
                orderType = 'DESC';
            }
            obj.sort(function (a, b) {
                if (orderType === 'ASC') {
                    if (a[currentField] < b[currentField])
                        return -1;
                    if (a[currentField] > b[currentField])
                        return 1;
                    return 0;
                }
                else {
                    if (a[currentField] < b[currentField])
                        return 1;
                    if (a[currentField] > b[currentField])
                        return -1;
                    return 0;
                }
            });
        });
        return obj;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

// import { Pipe, PipeTransform } from '@angular/core';
// import { orderBy } from 'lodash';
// @Pipe({
//   name: 'orderBy'
// })
// export class OrderByPipe implements PipeTransform {
//   transform = orderBy;
// }


/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: Account, AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Account = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Account, _super);
    function Account(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Account.prototype.init = function (params) {
        return this._parent._itemService.init(this);
    };
    Account.ctorParameters = function () { return [
        null,
        null
    ]; };
    Account = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //test
    ], Account);
    return Account;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var AccountService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountService, _super);
    function AccountService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'accounts';
        return _this;
    }
    AccountService.prototype.create = function (item_, parent) {
        return new Account(item_, parent);
    };
    AccountService.prototype.init = function (item) {
        return this.api.request('POST', this._itemType + '/' + item.id, { action: 'init', item: { wtoken: item.wtoken } });
    };
    AccountService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return AccountService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/accounts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/accounts.service.ts ***!
  \**********************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var AccountsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountsService, _super);
    function AccountsService(api, accountService) {
        var _this = _super.call(this, api, accountService) || this;
        _this.api = api;
        _this.accountService = accountService;
        return _this;
    }
    AccountsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    AccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AccountsService);
    return AccountsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");






var APIService = /** @class */ (function () {
    function APIService(httpClient, dbService) {
        this.httpClient = httpClient;
        this.dbService = dbService;
        this.apiUrl = 'https://rfid-limit/api/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        if (location.host !== 'localhost:4200')
            this.apiUrl = 'api/';
    }
    APIService.prototype.request = function (type, svc, params) {
        var _this = this;
        //console.log(type,svc,params);
        var arr = svc.split('/');
        svc = arr[0];
        var getParams = arr.splice(1);
        if (svc === 'core') {
            if (type === 'GET' && getParams[0] === 'auth') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
                    auth: true,
                    ref: {},
                    settings: {},
                    user: {
                        root: true,
                        name: 'user',
                        rights: {
                            items: {
                                users: { r: true, m: true, a: true, d: true },
                                seasons: { r: true, m: true, a: true, d: true },
                                categories: { r: true, m: true, a: true, d: true },
                                race: { r: true, m: true, a: true, d: true },
                                races: { r: true, m: true, a: true, d: true },
                                competitors: { r: true, m: true, a: true, d: true },
                                log: { r: true, m: true, a: true, d: true },
                            },
                            nav: {
                                header: {
                                    users: true,
                                    seasons: true,
                                    category: true,
                                    race: true,
                                    races: true,
                                    competitors: true,
                                    log: true,
                                }
                            }
                        },
                    },
                    sid: '123',
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
            }
        }
        else if (svc === 'users' || svc === 'log' || svc === 'competitors' || svc === 'categories' || svc === 'races' || svc === 'raceevents') {
            if (type === 'GET') {
                if (!getParams[0]) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.getAll(svc))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ items: res.filter(function (item) { return !item.d; }) }); }));
                }
                else {
                    var id = Number(getParams[0]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.getByKey(svc, id))
                        .pipe(
                    //tap(v=>console.log(v)),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ item: res }); }));
                }
            }
            else if (type === 'PUT') {
                if (!getParams[0]) {
                }
                else {
                    var id = Number(getParams[0]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.update(svc, params))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ item: res }); }));
                }
            }
            else if (type === 'POST') {
                if (!getParams[0]) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.add(svc, params))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ id: res }); }));
                }
                else if (getParams[0] === 'multiple') {
                    params.forEach(function (item) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this.dbService.add(svc, item))
                            .subscribe();
                    });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ added: params.map(function (item) { return ({ id: 123 }); }) });
                }
            }
            else if (type === 'DELETE') {
                if (getParams[0]) {
                    var id = Number(getParams[0]);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.getByKey(svc, id))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (item) { item.d = Math.round(new Date().getTime() / 1000); return item; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (item) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this.dbService.update(svc, item)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ deleted: true }); }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.dbService.clear(svc))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return ({ deleted: res }); }));
                }
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        var url = this.apiUrl + svc;
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params)
            httpParams = httpParams.set('params', JSON.stringify(params));
        var body = httpParams.toString().replace('+', '%2b');
        return this.httpClient.request(type, url, { body: body, headers: this.headers, withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    APIService.prototype.errorHandler = function (error) {
        if (error.status === 401) {
            var checkAuthError = new Event('coreCheckAuthError');
            document.dispatchEvent(checkAuthError);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
    };
    APIService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__["NgxIndexedDBService"] }
    ]; };
    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/core.service */ "./src/app/services/core.service.ts");
/* harmony import */ var _services_competitors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/competitors.service */ "./src/app/services/competitors.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_races_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/races.service */ "./src/app/services/races.service.ts");
/* harmony import */ var _services_go_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/go.service */ "./src/app/services/go.service.ts");
/* harmony import */ var _services_raceevents_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/raceevents.service */ "./src/app/services/raceevents.service.ts");
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/results.service */ "./src/app/services/results.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_user_groups_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/user-groups.service */ "./src/app/services/user-groups.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _services_trash_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/trash.service */ "./src/app/services/trash.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _services_appevents_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/appevents.service */ "./src/app/services/appevents.service.ts");
/* harmony import */ var _services_reference_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/reference.service */ "./src/app/services/reference.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/accounts.service */ "./src/app/services/accounts.service.ts");





















var AppService = /** @class */ (function () {
    function AppService(core, trash, settings, ref, APPEvents, state, users, categories, competitors, races, raceevents, go, results, log, accounts, seasons, ugroups) {
        this.core = core;
        this.trash = trash;
        this.settings = settings;
        this.ref = ref;
        this.APPEvents = APPEvents;
        this.state = state;
        this.users = users;
        this.categories = categories;
        this.competitors = competitors;
        this.races = races;
        this.raceevents = raceevents;
        this.go = go;
        this.results = results;
        this.log = log;
        this.accounts = accounts;
        this.seasons = seasons;
        this.ugroups = ugroups;
        this.readyEvent = new Event('appReady');
        this.accountsReadyEvent = new Event('accountsReady');
        this.ready = false;
        this.addPaths = {
            users: 'user',
            competitors: 'competitor',
            categories: 'category',
            races: 'race',
            raceevents: 'raceevent',
            ugroups: 'user-group',
            recievers: 'reciever',
            accounts: 'account',
            log: '',
        };
        this.users.app = this;
        this.ugroups.app = this;
        this.competitors.app = this;
        this.categories.app = this;
        this.races.app = this;
        this.raceevents.app = this;
        this.log.app = this;
        this.trash.app = this;
        this.accounts.app = this;
        this.trash.trashTypes = ['competitors', 'categories', 'races', 'raceevents', 'users', 'ugroups'];
        this.state.createDefaults(['competitors', 'categories', 'races', 'raceevents', 'users', 'ugroups', 'log', 'trash', 'accounts']);
        this.go.app = this;
        this.results.app = this;
    }
    AppService.prototype.onAppReady = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'appReady');
    };
    AppService.prototype.ifAppReady = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return _this.ready; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true), _this.onAppReady()); }));
    };
    AppService.prototype.ifAccountsReady = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return _this.accounts.ready; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'accountsReady')); }));
    };
    AppService.prototype.init = function () {
        var _this = this;
        this.core.onLoggedIn()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            _this.settings.set(_this.core.settings);
            _this.ref.set(_this.core.ref);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.ready = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.core.createRightsAliases([_this.users, _this.log, _this.competitors, _this.categories, _this.races, _this.raceevents]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.users.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.ugroups.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.competitors.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.categories.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.races.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.raceevents.get(); })); }), 
        //tap(_=>{this.rtqueue.get().subscribe()}),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.APPEvents.startAutoRefresh().subscribe(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { if (_this.core.user.super)
            _this.accounts.get().subscribe(function (_) { document.dispatchEvent(_this.accountsReadyEvent); }); }))
            .subscribe(function (res) {
            _this.ready = true;
            document.dispatchEvent(_this.readyEvent);
        });
    };
    AppService.ctorParameters = function () { return [
        { type: _services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"] },
        { type: _services_trash_service__WEBPACK_IMPORTED_MODULE_14__["TrashService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_18__["SettingsService"] },
        { type: _services_reference_service__WEBPACK_IMPORTED_MODULE_17__["ReferenceService"] },
        { type: _services_appevents_service__WEBPACK_IMPORTED_MODULE_16__["APPEventsService"] },
        { type: _services_state_service__WEBPACK_IMPORTED_MODULE_15__["StateService"] },
        { type: _services_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] },
        { type: _services_competitors_service__WEBPACK_IMPORTED_MODULE_5__["CompetitorsService"] },
        { type: _services_races_service__WEBPACK_IMPORTED_MODULE_7__["RacesService"] },
        { type: _services_raceevents_service__WEBPACK_IMPORTED_MODULE_9__["RaceEventsService"] },
        { type: _services_go_service__WEBPACK_IMPORTED_MODULE_8__["GoService"] },
        { type: _services_results_service__WEBPACK_IMPORTED_MODULE_10__["ResultsService"] },
        { type: _services_log_service__WEBPACK_IMPORTED_MODULE_13__["LogService"] },
        { type: _services_accounts_service__WEBPACK_IMPORTED_MODULE_19__["AccountsService"] },
        { type: _services_trash_service__WEBPACK_IMPORTED_MODULE_14__["TrashService"] },
        { type: _services_user_groups_service__WEBPACK_IMPORTED_MODULE_12__["UserGroupsService"] }
    ]; };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/appevents.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/appevents.service.ts ***!
  \***********************************************/
/*! exports provided: APPEvent, APPEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEvent", function() { return APPEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEventsService", function() { return APPEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _classes_indexable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/indexable */ "./src/app/classes/indexable.ts");







var APPEvent = /** @class */ (function () {
    function APPEvent(item_, _parent) {
        this._parent = _parent;
        for (var key in item_) {
            this[key] = item_[key];
        }
    }
    APPEvent.ctorParameters = function () { return [
        null,
        null
    ]; };
    APPEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], APPEvent);
    return APPEvent;
}());

var APPEventsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](APPEventsService, _super);
    function APPEventsService(api, settings) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.settings = settings;
        //private autoRefreshDelay: number = 5*1000;
        _this._indexableProps = ['id'];
        _this.lastCheckTime = 0;
        _this.evtsList = [];
        return _this;
    }
    APPEventsService.prototype.get = function () {
        return this.api.request('GET', 'evts/' + this.lastCheckTime);
    };
    APPEventsService.prototype.startAutoRefresh = function () {
        var _this = this;
        var lastAutoRefreshTime = new Date().getTime();
        this.autoRefreshInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(100);
        return this.autoRefreshInterval
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_) { return (lastAutoRefreshTime - 100 + _this.settings.items.appevts_refresh_interval * 1000) < (new Date().getTime()) && (lastAutoRefreshTime - 100 + 3000) < (new Date().getTime()); }), 
        //tap((res)=>{console.log(lastAutoRefreshTime - (new Date().getTime()))}),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { lastAutoRefreshTime = new Date().getTime(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.get(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.t)
            _this.lastCheckTime = res.t; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.i)
            res.i.forEach(function (item) { _this.handle(item); _this.evtsList.unshift(item); }); }));
    };
    APPEventsService.prototype.handle = function (event) {
        this.appEvent = new CustomEvent('appEvent', {
            bubbles: false,
            detail: event
        });
        document.dispatchEvent(this.appEvent);
    };
    APPEventsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }
    ]; };
    return APPEventsService;
}(_classes_indexable__WEBPACK_IMPORTED_MODULE_6__["Indexable"]));



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var CategoriesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoriesService, _super);
    function CategoriesService(api, competitorService) {
        var _this = _super.call(this, api, competitorService) || this;
        _this.api = api;
        _this.competitorService = competitorService;
        return _this;
    }
    CategoriesService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoriesService);
    return CategoriesService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: Category, CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Category = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Category, _super);
    function Category(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Category.ctorParameters = function () { return [
        null,
        null
    ]; };
    Category = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Category);
    return Category;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var CategoryService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryService, _super);
    function CategoryService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'categories';
        return _this;
    }
    CategoryService.prototype.create = function (item_, parent) {
        return new Category(item_, parent);
    };
    CategoryService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return CategoryService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/competitor.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/competitor.service.ts ***!
  \************************************************/
/*! exports provided: Competitor, CompetitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Competitor", function() { return Competitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorService", function() { return CompetitorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Competitor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Competitor, _super);
    function Competitor(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        _this._lastT = 0;
        return _this;
    }
    Object.defineProperty(Competitor.prototype, "fullName", {
        get: function () {
            return this.name1 + ' ' + this.name2 + ' ' + this.name3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competitor.prototype, "fullNameNum", {
        get: function () {
            return this.num + ' ' + this.name1 + ' ' + this.name2 + ' ' + this.name3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competitor.prototype, "categoryName", {
        get: function () {
            return (this._parent.app && this._parent.app.categories._index && this._parent.app.categories._index.id && this._parent.app.categories._index.id[this.categoryId]) ? this._parent.app.categories._index.id[this.categoryId].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competitor.prototype, "category", {
        get: function () {
            return (this._parent.app && this._parent.app.categories._index && this._parent.app.categories._index.id && this._parent.app.categories._index.id[this.categoryId]) ? this._parent.app.categories._index.id[this.categoryId] : null;
        },
        enumerable: true,
        configurable: true
    });
    Competitor.ctorParameters = function () { return [
        null,
        null
    ]; };
    Competitor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Competitor);
    return Competitor;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var CompetitorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompetitorService, _super);
    function CompetitorService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'competitors';
        return _this;
    }
    CompetitorService.prototype.create = function (item_, parent) {
        return new Competitor(item_, parent);
    };
    CompetitorService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return CompetitorService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/competitors.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/competitors.service.ts ***!
  \*************************************************/
/*! exports provided: CompetitorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitorsService", function() { return CompetitorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_competitor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/competitor.service */ "./src/app/services/competitor.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var CompetitorsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompetitorsService, _super);
    function CompetitorsService(api, competitorService) {
        var _this = _super.call(this, api, competitorService) || this;
        _this.api = api;
        _this.competitorService = competitorService;
        return _this;
    }
    CompetitorsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_competitor_service__WEBPACK_IMPORTED_MODULE_2__["CompetitorService"] }
    ]; };
    CompetitorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CompetitorsService);
    return CompetitorsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/core.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/core.service.ts ***!
  \******************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");





var CoreService = /** @class */ (function () {
    function CoreService(api) {
        this.api = api;
        this.loggedInEvent = new Event('coreloggedIn');
        this.checkAuthError = new Event('coreCheckAuthError');
        this.readyEvent = new Event('coreReady');
        this.session = null;
        this.user = null;
    }
    CoreService.prototype.onLoggedIn = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'coreloggedIn');
    };
    CoreService.prototype.onCheckAuthError = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'coreCheckAuthError');
    };
    CoreService.prototype.init = function () {
        var _this = this;
        return this.api.request('GET', 'core/auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { _this.clearSession(); document.dispatchEvent(_this.checkAuthError); return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(err); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.ref = res.ref;
            _this.settings = res.settings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return _this.createSession(res); }));
    };
    CoreService.prototype.login = function (LoginData) {
        var _this = this;
        return this.api.request('POST', 'core/login', LoginData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { _this.clearSession(); throw err; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.ref = res.ref;
            _this.settings = res.settings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return _this.createSession(res); }));
    };
    CoreService.prototype.logOut = function () {
        var _this = this;
        return this.api.request('DELETE', 'core/logout')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            if (res.logout)
                _this.clearSession();
            return res;
        }));
    };
    CoreService.prototype.clearSession = function () {
        this.session = null;
        this.user = null;
    };
    CoreService.prototype.createSession = function (res) {
        if (res.user) {
            this.user = res.user;
            this.session = { sid: res.sid };
            document.dispatchEvent(this.loggedInEvent);
            return this.session;
        }
        return null;
    };
    CoreService.prototype.getUser = function () {
        return this.api.request('GET', 'core/getuser');
    };
    CoreService.prototype.getUsers = function () {
        return this.api.request('GET', 'users');
    };
    CoreService.prototype.createRightsAliases = function (services) {
        var _this = this;
        services.forEach(function (svc) {
            if (svc._itemService._itemType && _this.user.rights.items[svc._itemService._itemType]) {
                svc.r = _this.user.rights.items[svc._itemService._itemType];
            }
        });
    };
    CoreService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] }
    ]; };
    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CoreService);
    return CoreService;
}());



/***/ }),

/***/ "./src/app/services/go.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/go.service.ts ***!
  \****************************************/
/*! exports provided: GoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoService", function() { return GoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_raceevents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/raceevents.service */ "./src/app/services/raceevents.service.ts");



var GoService = /** @class */ (function () {
    function GoService(events) {
        var _this = this;
        this.events = events;
        this.race = null;
        this.t = (new Date()).getTime();
        this.tIntervalId = 0;
        this.app = null;
        this._start = {};
        this.finish = null;
        this.raceEvents = null;
        if (this.tIntervalId)
            clearInterval(this.tIntervalId);
        this.tIntervalId = setInterval(function () {
            _this.t = (new Date()).getTime();
        }, 10);
    }
    GoService.prototype.getStart = function (categoryId) {
        if (this._start && Object.keys(this._start).length === 1 && this._start[0])
            return this._start[0];
        if (categoryId && this._start[categoryId])
            return this._start[categoryId];
        if (this._start && this._start[Object.keys(this._start)[0]])
            return this._start[Object.keys(this._start)[0]];
        return null;
    };
    GoService.prototype.get = function () {
        var _this = this;
        this.raceEvents = this.events.items.filter(function (item) { return 1 * item.raceId === 1 * _this.race.id; }).sort(function (a, b) { return (a.t - b.t); });
        var compLaps = {};
        var compLapsT = {};
        this.raceEvents.forEach(function (item) {
            if (item.eventType === 2) {
                if (item.categoryIds && item.categoryIds.length) {
                    item.categoryIds.forEach(function (categoryId) {
                        _this._start[categoryId] = item;
                    });
                }
                else {
                    _this._start[0] = item;
                }
            }
            if (item.eventType === 3) {
                _this.finish = item;
            }
            if (item.eventType === 1) {
                if (item.competitorId) {
                    if (!compLaps[item.competitorId])
                        compLaps[item.competitorId] = 0;
                    compLaps[item.competitorId]++;
                    item._lap = compLaps[item.competitorId];
                    if (!compLapsT[item.competitorId] && _this.getStart(item.categoryId)) {
                        item._lapT = item.t - _this.getStart(item.categoryId).t;
                    }
                    else {
                        item._lapT = item.t - compLapsT[item.competitorId];
                    }
                    compLapsT[item.competitorId] = item.t;
                    if (item.competitor) {
                        item.competitor._lastT = _this.t - item.t;
                        item.competitor._lap = item._lap;
                        item.competitor._t = item.t;
                    }
                }
                item._raceT = item.t - _this.getStart(item.categoryId).t;
            }
        });
        this.raceEvents = this.raceEvents.sort(function (a, b) { return (b.t - a.t); });
    };
    GoService.prototype.reset = function () {
        this.race = null;
        this._start = {};
        this.finish = null;
        this.raceEvents = null;
    };
    GoService.ctorParameters = function () { return [
        { type: _services_raceevents_service__WEBPACK_IMPORTED_MODULE_2__["RaceEventsService"] }
    ]; };
    GoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GoService);
    return GoService;
}());



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: Item, ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");





var Item = /** @class */ (function () {
    function Item(item_, _parent) {
        this._parent = _parent;
        this._bckp = {};
        this._ready = this._parent._itemService.ready;
        for (var key in item_) {
            this[key] = item_[key];
            this._bckp[key] = item_[key];
        }
    }
    Item.prototype.get = function () {
        return this._parent._itemService.get(this);
    };
    Item.prototype.set = function (propName, value) {
        var _this = this;
        return this._parent.set(this, propName, value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { _this._bckp[propName] = res[propName]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this; }));
    };
    Item.prototype.save = function (params) {
        return this._parent._itemService.save(this);
    };
    Item.prototype.del = function () {
        var _this = this;
        return this._parent._itemService.del(this)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.deleted)
            _this._parent._itemService.toTrash(_this); }));
    };
    Item.prototype.restore = function () {
        var _this = this;
        return this._parent._itemService.restore(this)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (res.restored)
            _this._parent._itemService.fromTrash(_this); }));
    };
    Object.defineProperty(Item.prototype, "values", {
        get: function () {
            var _this = this;
            var values = {};
            Object.keys(this).forEach(function (key) {
                if (key[0] !== '_' && key !== 'values') {
                    values[String(key)] = _this[key];
                }
            });
            return values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "itemType", {
        get: function () {
            return this._parent._itemService._itemType;
        },
        enumerable: true,
        configurable: true
    });
    Item.ctorParameters = function () { return [
        null,
        null
    ]; };
    Item = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Item);
    return Item;
}());

var ItemService = /** @class */ (function () {
    function ItemService(api) {
        this.api = api;
        this._itemType = 'item';
        this.ready = false;
    }
    ItemService.prototype.create = function (item_, parent) {
        console.error('Item.create() must be overridden');
        return new Item(item_, parent);
    };
    ItemService.prototype.get = function (item) {
        var _this = this;
        var _params;
        this.ready = false;
        if (item.id)
            _params = { "id": item.id };
        return this.api.request('GET', this._itemType + '/' + item.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { if (!res.item)
            throw Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Item (' + _this._itemType + ') with id: ' + _params.id + ' not found'); }), 
        //map((res:any)=>res.item)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.ready = true;
            return _this.create(res.item, item._parent);
        }));
    };
    ItemService.prototype.save = function (item) {
        return this.api.request('PUT', this._itemType + '/' + item.id, item.values);
    };
    ItemService.prototype.del = function (item) {
        return this.api.request('DELETE', this._itemType + '/' + item.id);
    };
    ItemService.prototype.restore = function (item) {
        return this.api.request('POST', this._itemType + '/' + item.id);
    };
    ItemService.prototype.toTrash = function (item) {
        item._parent.trash.push(item);
    };
    ItemService.prototype.fromTrash = function (item) {
        var index = item._parent.trash.indexOf(item);
        if (index < 0) {
            for (var key in item._parent.trash) {
                var trashItem = item._parent.trash[key];
                if (trashItem.id === item.id) {
                    index = key;
                    break;
                }
            }
        }
        if (index !== -1)
            item._parent.trash.splice(index, 1);
    };
    ItemService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] }
    ]; };
    return ItemService;
}());



/***/ }),

/***/ "./src/app/services/items.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _classes_indexable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/indexable */ "./src/app/classes/indexable.ts");







var ItemsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ItemsService, _super);
    function ItemsService(api, _itemService) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this._itemService = _itemService;
        _this._indexableProps = ['id', 'name'];
        _this.ready = false;
        _this.r = {};
        _this.app = null;
        _this.trash = [];
        _this.itemType = 'items';
        _this.itemType = _this._itemService._itemType;
        _this.createEventHandler();
        return _this;
    }
    Object.defineProperty(ItemsService.prototype, "itemTypeId", {
        get: function () {
            var _this = this;
            return Object.keys(this.app.ref.object_types).reduce(function (obj, key) { obj[_this.app.ref.object_types[key]] = key; return obj; }, {})[this.itemType];
        },
        enumerable: true,
        configurable: true
    });
    ItemsService.prototype.get = function (params) {
        var _this = this;
        this.ready = false;
        var stringParams = '';
        if (params && typeof (params) === 'object') {
            for (var key in params) {
                stringParams += '/' + params[key];
            }
        }
        return this.api.request('GET', this._itemService._itemType + stringParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.error) {
                throw new Error();
            }
            else {
                return res;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (err) { return err.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.items !== undefined)
                _this.clearItems();
            for (var key in res.items) {
                var item = _this._itemService.create(res.items[key], _this);
                _this.items.push(item);
            }
            _this.ready = true;
            return _this.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (items) { return _this.createIndex(items); }));
    };
    ItemsService.prototype.add = function (newItem) {
        var _this = this;
        this.ready = false;
        return this.api.request('POST', this._itemService._itemType, newItem)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { _this.ready = true; }));
    };
    ItemsService.prototype.addMultiple = function (newItems) {
        var _this = this;
        this.ready = false;
        return this.api.request('POST', this._itemService._itemType + '/multiple', newItems)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { _this.ready = true; }));
    };
    ItemsService.prototype.clearItems = function () {
        this.items = [];
    };
    ItemsService.prototype.clear = function () {
        return this.api.request('DELETE', this._itemService._itemType);
    };
    ItemsService.prototype.createEventHandler = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'appEvent')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return 1 * event.detail.tp === 1 * _this.itemTypeId; }))
            .subscribe(function (event) {
            if (event.detail) {
                if (event.detail.a === 1 || event.detail.a === 4) { // add or restore
                    if (event.detail.id) {
                        if (!_this._index.id[event.detail.id]) {
                            var _item = _this._itemService.create({ id: event.detail.id }, _this);
                            _this._itemService.get(_item)
                                .subscribe(function (item) {
                                if (item) {
                                    item._added = true;
                                    _this.items.push(item);
                                    _this.createIndex(_this.items);
                                }
                            });
                        }
                    }
                }
                else if (event.detail.a === 2 || event.detail.a === 5 || event.detail.a === 6) { // modify | block | unblock
                    if (event.detail.id && _this._index.id[event.detail.id]) {
                        var item = _this._index.id[event.detail.id];
                        if (event.detail.d) {
                            for (var key in event.detail.d) {
                                item[key] = event.detail.d[key];
                            }
                            _this.createIndex(_this.items);
                        }
                    }
                }
                else if (event.detail.a === 3) { // delete
                    if (event.detail.id && _this._index.id[event.detail.id]) {
                        var item = _this._index.id[event.detail.id];
                        var key = _this.items.indexOf(item);
                        if (key > -1) {
                            _this.items.splice(key, 1);
                            _this.createIndex(_this.items);
                        }
                    }
                }
            }
        });
    };
    ItemsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"] },
        { type: _services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }
    ]; };
    ItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ItemsService);
    return ItemsService;
}(_classes_indexable__WEBPACK_IMPORTED_MODULE_6__["Indexable"]));



/***/ }),

/***/ "./src/app/services/log-item.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/log-item.service.ts ***!
  \**********************************************/
/*! exports provided: LogItem, LogItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogItem", function() { return LogItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogItemService", function() { return LogItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var LogItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogItem, _super);
    function LogItem(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(LogItem.prototype, "userName", {
        get: function () {
            return (this._parent.app && this._parent.app.users._index && this._parent.app.users._index.id && this._parent.app.users._index.id[this.users_id]) ? this._parent.app.users._index.id[this.users_id].name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogItem.prototype, "objectTypeName", {
        get: function () {
            return this.object_type && this._parent.app.ref.object_types[this.object_type];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogItem.prototype, "objectName", {
        get: function () {
            if (!this._parent.app)
                return;
            var type = this.objectTypeName;
            if (type && this._parent.app[type] && this._parent.app[type]._index && this._parent.app[type]._index.id && this._parent.app[type]._index.id[this.object_id]) {
                return '7';
                var item = this._parent.app[type]._index.id[this.object_id];
                if (item.name)
                    return item.name;
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogItem.prototype, "actionTypeName", {
        get: function () {
            return this.action_type && this._parent.app.ref.action_types[this.action_type];
        },
        enumerable: true,
        configurable: true
    });
    LogItem.ctorParameters = function () { return [
        null,
        null
    ]; };
    LogItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LogItem);
    return LogItem;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var LogItemService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogItemService, _super);
    function LogItemService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'log';
        return _this;
    }
    LogItemService.prototype.create = function (item_, parent) {
        return new LogItem(item_, parent);
    };
    LogItemService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return LogItemService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/log.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_log_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/log-item.service */ "./src/app/services/log-item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var LogService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogService, _super);
    function LogService(api, logItemService) {
        var _this = _super.call(this, api, logItemService) || this;
        _this.api = api;
        _this.logItemService = logItemService;
        _this.app = null;
        return _this;
    }
    LogService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_log_item_service__WEBPACK_IMPORTED_MODULE_2__["LogItemService"] }
    ]; };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LogService);
    return LogService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/lstorage.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/lstorage.service.ts ***!
  \**********************************************/
/*! exports provided: LStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LStorageService", function() { return LStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");



var LStorageService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LStorageService, _super);
    function LStorageService() {
        return _super.call(this, localStorage) || this;
    }
    LStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LStorageService);
    return LStorageService;
}(_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]));



/***/ }),

/***/ "./src/app/services/race.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/race.service.ts ***!
  \******************************************/
/*! exports provided: Race, RaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Race", function() { return Race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceService", function() { return RaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var Race = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Race, _super);
    function Race(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Race.ctorParameters = function () { return [
        null,
        null
    ]; };
    Race = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Race);
    return Race;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var RaceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceService, _super);
    function RaceService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'races';
        return _this;
    }
    RaceService.prototype.create = function (item_, parent) {
        return new Race(item_, parent);
    };
    RaceService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return RaceService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/raceevent.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/raceevent.service.ts ***!
  \***********************************************/
/*! exports provided: RaceEvent, RaceEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceEvent", function() { return RaceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceEventService", function() { return RaceEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var RaceEvent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceEvent, _super);
    function RaceEvent(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    Object.defineProperty(RaceEvent.prototype, "competitor", {
        get: function () {
            return (this.competitorId && this._parent.app && this._parent.app.competitors._index && this._parent.app.competitors._index.id && this._parent.app.competitors._index.id[this.competitorId]) ? this._parent.app.competitors._index.id[this.competitorId] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "competitorName", {
        get: function () {
            return this.competitor ? this.competitor.fullName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "competitorNum", {
        get: function () {
            return this.competitor ? this.competitor.num : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "competitorNameNum", {
        get: function () {
            return this.competitor ? this.competitor.fullNameNum : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "categoryName", {
        get: function () {
            return this.competitor ? this.competitor.categoryName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "categoryId", {
        get: function () {
            return this.competitor ? this.competitor.categoryId : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "datetime", {
        get: function () {
            return (new Date(this.t + 4 * 3600000)).toISOString().slice(0, 23);
        },
        set: function (value) {
            this.t = (new Date(value)).valueOf();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "raceTime", {
        get: function () {
            return this._parent && this._parent.app.go && this.categoryId ? (new Date(this.t - this._parent.app.go.getStart(this.categoryId).t)).toISOString().slice(11, 23) : '';
        },
        set: function (value) {
            var s = new Date('1970-01-01T' + value + 'Z').getTime();
            var newT = this._parent.app.go.getStart(this.categoryId).t + s;
            if (!newT)
                return;
            this.t = newT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceEvent.prototype, "raceTimeFirst", {
        get: function () {
            return this._parent && this._parent.app.go ? (new Date(this.t - this._parent.app.go.getStart().t)).toISOString().slice(11, 23) : '';
        },
        set: function (value) {
            var s = new Date('1970-01-01T' + value + 'Z').getTime();
            var newT = this._parent.app.go.getStart().t + s;
            if (!newT)
                return;
            this.t = newT;
        },
        enumerable: true,
        configurable: true
    });
    RaceEvent.ctorParameters = function () { return [
        null,
        null
    ]; };
    RaceEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RaceEvent);
    return RaceEvent;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var RaceEventService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceEventService, _super);
    function RaceEventService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'raceevents';
        _this.eventTypes = ['', 'lap', 'start', 'finish'];
        return _this;
    }
    RaceEventService.prototype.create = function (item_, parent) {
        return new RaceEvent(item_, parent);
    };
    RaceEventService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return RaceEventService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/raceevents.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/raceevents.service.ts ***!
  \************************************************/
/*! exports provided: RaceEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceEventsService", function() { return RaceEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_raceevent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/raceevent.service */ "./src/app/services/raceevent.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var RaceEventsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceEventsService, _super);
    function RaceEventsService(api, raceEventService) {
        var _this = _super.call(this, api, raceEventService) || this;
        _this.api = api;
        _this.raceEventService = raceEventService;
        return _this;
    }
    RaceEventsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_raceevent_service__WEBPACK_IMPORTED_MODULE_2__["RaceEventService"] }
    ]; };
    RaceEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RaceEventsService);
    return RaceEventsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/races.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/races.service.ts ***!
  \*******************************************/
/*! exports provided: RacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacesService", function() { return RacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_race_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/race.service */ "./src/app/services/race.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var RacesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RacesService, _super);
    function RacesService(api, raceService) {
        var _this = _super.call(this, api, raceService) || this;
        _this.api = api;
        _this.raceService = raceService;
        return _this;
    }
    RacesService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_race_service__WEBPACK_IMPORTED_MODULE_2__["RaceService"] }
    ]; };
    RacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RacesService);
    return RacesService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/reference.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/reference.service.ts ***!
  \***********************************************/
/*! exports provided: ReferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceService", function() { return ReferenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferenceService = /** @class */ (function () {
    function ReferenceService() {
    }
    ReferenceService.prototype.set = function (data) {
        for (var key in data) {
            this[key] = data[key];
        }
    };
    ReferenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ReferenceService);
    return ReferenceService;
}());



/***/ }),

/***/ "./src/app/services/results.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/results.service.ts ***!
  \*********************************************/
/*! exports provided: ResultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsService", function() { return ResultsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultsService = /** @class */ (function () {
    function ResultsService() {
        this.race = null;
        this.app = null;
        this._start = {};
        this.finish = null;
        this.raceEvents = null;
        this.items = {};
        this.items2 = [];
    }
    ResultsService.prototype.getStart = function (categoryId) {
        if (this._start && Object.keys(this._start).length === 1 && this._start[0])
            return this._start[0];
        if (categoryId && this._start[categoryId])
            return this._start[categoryId];
        if (this._start && this._start[Object.keys(this._start)[0]])
            return this._start[Object.keys(this._start)[0]];
        return null;
    };
    ResultsService.prototype.get = function () {
        var _this = this;
        this.items2 = [];
        this.items = {};
        this.raceEvents = this.app.raceevents.items.filter(function (item) { return 1 * item.raceId === 1 * _this.race.id; }).sort(function (a, b) { return (a.t - b.t); });
        var compLapsT = {};
        this.raceEvents.forEach(function (item) {
            if (item.eventType === 2) {
                if (item.categoryIds && item.categoryIds.length) {
                    item.categoryIds.forEach(function (categoryId) {
                        _this._start[categoryId] = item;
                    });
                }
                else {
                    _this._start[0] = item;
                }
            }
            if (item.eventType === 3) {
                _this.finish = item;
            }
            if (item.eventType === 1) {
                if (!_this.items[item.competitorId])
                    _this.items[item.competitorId] = { events: [], competitor: item.competitor };
                if (!compLapsT[item.competitorId] && _this.getStart(item.categoryId)) {
                    item._lapT = item.t - _this.getStart(item.categoryId).t;
                }
                else {
                    item._lapT = item.t - compLapsT[item.competitorId];
                }
                compLapsT[item.competitorId] = item.t;
                item.pos = item.competitor.category.pos || 0;
                _this.items[item.competitorId].events.push(item);
                _this.items[item.competitorId].t = item.t;
                _this.items[item.competitorId].pos = 1 * item.competitor.category.pos || 0;
                _this.items[item.competitorId].categoryId = item.categoryId;
            }
        });
        for (var key in this.items) {
            this.items2.push(this.items[key]);
        }
        var res = 0;
        var last_categoryId = 0;
        var firstT = 0;
        this.items2.sort(function (a, b) { return (a.t - b.t); }).forEach(function (item) {
            if (item.competitor.categoryId !== last_categoryId)
                res = 0;
            item.res = ++res;
            last_categoryId = item.competitor.categoryId;
            if (res === 1)
                firstT = item.t;
            item.firstT = firstT;
        });
        console.log(this.items2);
    };
    ResultsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ResultsService);
    return ResultsService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");



var SettingsService = /** @class */ (function () {
    function SettingsService(api) {
        this.api = api;
    }
    SettingsService.prototype.set = function (data) {
        this.items = data;
    };
    SettingsService.prototype.save = function () {
        return this.api.request('PUT', 'settings', this.items);
    };
    SettingsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }
    ]; };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StateService = /** @class */ (function () {
    function StateService() {
        this.default = {
            filter: {
                name: '',
            },
            limit: 10
        };
        this.items = {
            go: {
                eventsFilter: {
                    competitorNameNum: '',
                    categoryName: '',
                    _lap: '',
                },
                eventsTimeScale: 0,
                eventsLimit: 50,
                filter: {
                    competitorName: ''
                }
            },
            users: {
                filter: {
                    name: '',
                    email: '',
                },
                limit: 1 * this.default.limit
            },
            recievers: {
                filter: {
                    name: '',
                    unitHwName: '',
                    unitUid: '',
                    tagNums: '',
                },
                limit: 1 * this.default.limit
            },
            competitors: {
                filter: {
                    //accountId: '',
                    regDate: '',
                    num: '',
                    fullName: '',
                    birdthDate: '',
                    categoryName: '',
                    team: '',
                    desc: '',
                },
                limit: 1 * this.default.limit
            },
            races: {
                filter: {
                    //accountId: '',
                    name: '',
                    from: '',
                    to: '',
                },
                limit: 1 * this.default.limit
            },
            tags: {
                filter: {
                    num: '',
                    unitNm: '',
                    driverName: '',
                    total_limit: '',
                    day_limit: '',
                    total_balance: '',
                    day_balance: '',
                    recieverUnitNames: '',
                },
                limit: 1 * this.default.limit
            },
            log: {
                filter: {
                    userName: '',
                    ip: '',
                    usessions_id: '',
                    objectTypeName: '',
                    object_name: '',
                    actionTypeName: '',
                },
                limit: 1 * this.default.limit
            },
            distributions: {
                filter: {
                    dt: '',
                    recieverName: '',
                    tagName: '',
                    tagDriverName: '',
                    amount: '',
                    total_limit: '',
                    day_limit: '',
                    total_balance: '',
                    day_balance: '',
                },
                limit: 1 * this.default.limit
            },
            rtqueue: {
                filter: {
                    typeName: '',
                    recieverName: '',
                    unitNm: '',
                    units_imei: '',
                    tagName: '',
                    tags_num: '',
                    value: '',
                    userName: '',
                    statusName: '',
                    try: '',
                    try_limit: '',
                },
                limit: 1 * this.default.limit
            },
        };
    }
    StateService.prototype.createDefaults = function (types) {
        this.types = types;
        for (var key in this.types) {
            var type = this.types[key];
            if (!this.items[type]) {
                this.items[type] = JSON.parse(JSON.stringify(this.default));
            }
        }
    };
    StateService.prototype.resetFilter = function (type) {
        for (var key in this.items[type].filter) {
            this.items[type].filter[key] = '';
        }
    };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this._storage = null;
        this._prefixKey = 'rl';
        this._storage = storage;
    }
    StorageService.prototype.get = function (key) {
        var value = this._storage.getItem(this._prefixKey + '.' + key);
        try {
            value = JSON.parse(value);
        }
        catch (e) {
            return value;
        }
        return value;
    };
    StorageService.prototype.set = function (key, value) {
        if (typeof value === 'object')
            value = JSON.stringify(value);
        return this._storage.setItem(this._prefixKey + '.' + key, value);
    };
    StorageService.prototype.remove = function (key) {
        this._storage.removeItem(this._prefixKey + '.' + key);
    };
    StorageService.ctorParameters = function () { return [
        { type: Storage }
    ]; };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/trash.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/trash.service.ts ***!
  \*******************************************/
/*! exports provided: TrashItem, TrashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashItem", function() { return TrashItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashService", function() { return TrashService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var TrashItem = /** @class */ (function () {
    function TrashItem(item_, _parent) {
        this._parent = _parent;
        this.type = 'trash-item';
        for (var key in item_) {
            this[key] = item_[key];
        }
    }
    TrashItem.ctorParameters = function () { return [
        null,
        null
    ]; };
    TrashItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TrashItem);
    return TrashItem;
}());

var TrashService = /** @class */ (function () {
    function TrashService(api) {
        this.api = api;
        this.app = null;
        this.trashTypes = [];
        this.ready = false;
        this.r = {};
        //public items: {string:TrashItem[]}  = [];
        this.items = {};
        this.allItems = [];
    }
    TrashService.prototype.createItem = function (item, type) {
        return this.app[type][(type !== 'ugroups' ? type : 'userGroups').slice(0, -1) + 'Service'].create(item, this.app[type]);
    };
    TrashService.prototype.get = function (type, id) {
        var _this = this;
        this.ready = false;
        var stringParams = '';
        return this.api.request('GET', 'trash' + (type ? ('/' + type) : '') + (id ? ('/' + id) : ''))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this.allItems = [];
            for (var typeKey in res.items) {
                var items = res.items[typeKey].items;
                _this.clearItems(typeKey);
                for (var key in items) {
                    var item = _this.createItem(items[key], typeKey);
                    if (!_this.items[typeKey])
                        _this.items[typeKey] = [];
                    _this.items[typeKey].push(item);
                }
                if (_this.items[typeKey]) {
                    _this.allItems = _this.allItems.concat(_this.items[typeKey]);
                }
            }
            _this.ready = true;
            return _this.items;
        }));
    };
    TrashService.prototype.clearItems = function (type) {
        if (type && this.items[type])
            this.items[type] = [];
    };
    TrashService.prototype.restore = function (item) {
        var _this = this;
        return item.restore()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.app[item._parent._itemService._itemType].get().subscribe();
        }));
    };
    TrashService.prototype.removeItem = function (item) {
        if (this.allItems) {
            var index = null;
            for (var key in this.allItems) {
                var trashItem = this.allItems[key];
                if (trashItem.id === item.id) {
                    index = key;
                    break;
                }
            }
            if (index !== -1)
                this.allItems.splice(index, 1);
        }
        if (this.items[item.itemType]) {
            var index = null;
            for (var key in this.items[item.itemType]) {
                var trashItem = this.items[item.itemType][key];
                if (trashItem.id === item.id) {
                    index = key;
                    break;
                }
            }
            if (index !== -1)
                this.items[item.itemType].splice(index, 1);
        }
    };
    Object.defineProperty(TrashService.prototype, "Length", {
        get: function () {
            var trashSize = 0;
            if (this.app.ready) {
                for (var key in this.trashTypes) {
                    if (this.app[this.trashTypes[key]].trash.length > 0) {
                        trashSize += this.app[this.trashTypes[key]].trash.length;
                    }
                }
            }
            return trashSize;
        },
        enumerable: true,
        configurable: true
    });
    TrashService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return TrashService;
}());



/***/ }),

/***/ "./src/app/services/user-group.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/user-group.service.ts ***!
  \************************************************/
/*! exports provided: UserGroup, UserGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return UserGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupService", function() { return UserGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var UserGroup = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGroup, _super);
    function UserGroup(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        return _this;
    }
    UserGroup.ctorParameters = function () { return [
        null,
        null
    ]; };
    UserGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserGroup);
    return UserGroup;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var UserGroupService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGroupService, _super);
    function UserGroupService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'ugroups';
        return _this;
    }
    UserGroupService.prototype.create = function (item_, parent) {
        return new UserGroup(item_, parent);
    };
    UserGroupService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return UserGroupService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/user-groups.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user-groups.service.ts ***!
  \*************************************************/
/*! exports provided: UserGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupsService", function() { return UserGroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-group.service */ "./src/app/services/user-group.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var UserGroupsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserGroupsService, _super);
    function UserGroupsService(api, userGroupService) {
        var _this = _super.call(this, api, userGroupService) || this;
        _this.api = api;
        _this.userGroupService = userGroupService;
        return _this;
    }
    UserGroupsService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_user_group_service__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"] }
    ]; };
    UserGroupsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserGroupsService);
    return UserGroupsService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: User, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");




var User = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](User, _super);
    // public password:string;
    function User(item_, _parent) {
        var _this = _super.call(this, item_, _parent) || this;
        _this._parent = _parent;
        _this.d = 0;
        return _this;
    }
    User.ctorParameters = function () { return [
        null,
        null
    ]; };
    User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], User);
    return User;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["Item"]));

var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(api) {
        var _this = _super.call(this, api) || this;
        _this.api = api;
        _this._itemType = 'users';
        return _this;
    }
    UserService.prototype.create = function (item_, parent) {
        return new User(item_, parent);
    };
    UserService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    return UserService;
}(_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]));



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");





var UsersService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersService, _super);
    function UsersService(api, userService) {
        var _this = _super.call(this, api, userService) || this;
        _this.api = api;
        _this.userService = userService;
        return _this;
    }
    UsersService.ctorParameters = function () { return [
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}(_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OSPanel\domains\mftiming\frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map