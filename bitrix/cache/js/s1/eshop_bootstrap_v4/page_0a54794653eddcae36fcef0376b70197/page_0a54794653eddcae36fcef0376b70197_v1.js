
; /* Start:"a:4:{s:4:"full";s:95:"/bitrix/components/bitrix/catalog.smart.filter/templates/.default/script.min.js?164336792114556";s:6:"source";s:75:"/bitrix/components/bitrix/catalog.smart.filter/templates/.default/script.js";s:3:"min";s:79:"/bitrix/components/bitrix/catalog.smart.filter/templates/.default/script.min.js";s:3:"map";s:79:"/bitrix/components/bitrix/catalog.smart.filter/templates/.default/script.map.js";}"*/
function JCSmartFilter(t,e,i){this.ajaxURL=t;this.form=null;this.timer=null;this.cacheKey="";this.cache=[];this.popups=[];this.viewMode=e;if(i&&i.SEF_SET_FILTER_URL){this.bindUrlToButton("set_filter",i.SEF_SET_FILTER_URL);this.sef=true}if(i&&i.SEF_DEL_FILTER_URL){this.bindUrlToButton("del_filter",i.SEF_DEL_FILTER_URL)}}JCSmartFilter.prototype.keyup=function(t){if(!!this.timer){clearTimeout(this.timer)}this.timer=setTimeout(BX.delegate(function(){this.reload(t)},this),500)};JCSmartFilter.prototype.click=function(t){if(!!this.timer){clearTimeout(this.timer)}this.timer=setTimeout(BX.delegate(function(){this.reload(t)},this),500)};JCSmartFilter.prototype.reload=function(t){if(this.cacheKey!==""){if(!!this.timer){clearTimeout(this.timer)}this.timer=setTimeout(BX.delegate(function(){this.reload(t)},this),1e3);return}this.cacheKey="|";this.position=BX.pos(t,true);this.form=BX.findParent(t,{tag:"form"});if(this.form){var e=[];e[0]={name:"ajax",value:"y"};this.gatherInputsValues(e,BX.findChildren(this.form,{tag:new RegExp("^(input|select)$","i")},true));for(var i=0;i<e.length;i++)this.cacheKey+=e[i].name+":"+e[i].value+"|";if(this.cache[this.cacheKey]){this.curFilterinput=t;this.postHandler(this.cache[this.cacheKey],true)}else{if(this.sef){var r=BX("set_filter");r.disabled=true}this.curFilterinput=t;BX.ajax.loadJSON(this.ajaxURL,this.values2post(e),BX.delegate(this.postHandler,this))}}};JCSmartFilter.prototype.updateItem=function(t,e){if(e.PROPERTY_TYPE==="N"||e.PRICE){var i=window["trackBar"+t];if(!i&&e.ENCODED_ID)i=window["trackBar"+e.ENCODED_ID];if(i&&e.VALUES){if(e.VALUES.MIN){if(e.VALUES.MIN.FILTERED_VALUE)i.setMinFilteredValue(e.VALUES.MIN.FILTERED_VALUE);else i.setMinFilteredValue(e.VALUES.MIN.VALUE)}if(e.VALUES.MAX){if(e.VALUES.MAX.FILTERED_VALUE)i.setMaxFilteredValue(e.VALUES.MAX.FILTERED_VALUE);else i.setMaxFilteredValue(e.VALUES.MAX.VALUE)}}}else if(e.VALUES){for(var r in e.VALUES){if(e.VALUES.hasOwnProperty(r)){var s=e.VALUES[r];var n=BX(s.CONTROL_ID);if(!!n){var l=document.querySelector('[data-role="label_'+s.CONTROL_ID+'"]');if(s.DISABLED){if(l)BX.addClass(l,"disabled");else BX.addClass(n.parentNode,"disabled")}else{if(l)BX.removeClass(l,"disabled");else BX.removeClass(n.parentNode,"disabled")}if(s.hasOwnProperty("ELEMENT_COUNT")){l=document.querySelector('[data-role="count_'+s.CONTROL_ID+'"]');if(l)l.innerHTML=s.ELEMENT_COUNT}}}}}};JCSmartFilter.prototype.postHandler=function(t,e){var i,r,s;var n=BX("modef");var l=BX("modef_num");if(!!t&&!!t.ITEMS){for(var a in this.popups){if(this.popups.hasOwnProperty(a)){this.popups[a].destroy()}}this.popups=[];for(var o in t.ITEMS){if(t.ITEMS.hasOwnProperty(o)){this.updateItem(o,t.ITEMS[o])}}if(!!n&&!!l){l.innerHTML=t.ELEMENT_COUNT;i=BX.findChildren(n,{tag:"A"},true);if(t.FILTER_URL&&i){i[0].href=BX.util.htmlspecialcharsback(t.FILTER_URL)}if(t.FILTER_AJAX_URL&&t.COMPONENT_CONTAINER_ID){BX.unbindAll(i[0]);BX.bind(i[0],"click",function(e){r=BX.util.htmlspecialcharsback(t.FILTER_AJAX_URL);BX.ajax.insertToNode(r,t.COMPONENT_CONTAINER_ID);return BX.PreventDefault(e)})}if(t.INSTANT_RELOAD&&t.COMPONENT_CONTAINER_ID){r=BX.util.htmlspecialcharsback(t.FILTER_AJAX_URL);BX.ajax.insertToNode(r,t.COMPONENT_CONTAINER_ID)}else{if(n.style.display==="none"){n.style.display="inline-block"}if(this.viewMode=="VERTICAL"){s=BX.findChild(BX.findParent(this.curFilterinput,{"class":"bx-filter-parameters-box"}),{"class":"bx-filter-container-modef"},true,false);s.appendChild(n)}if(t.SEF_SET_FILTER_URL){this.bindUrlToButton("set_filter",t.SEF_SET_FILTER_URL)}}}}if(this.sef){var c=BX("set_filter");c.disabled=false}if(!e&&this.cacheKey!==""){this.cache[this.cacheKey]=t}this.cacheKey=""};JCSmartFilter.prototype.bindUrlToButton=function(t,e){var i=BX(t);if(i){var r=function(t,e){return function(){return e(t)}};if(i.type=="submit")i.type="button";BX.bind(i,"click",r(e,function(t){window.location.href=t;return false}))}};JCSmartFilter.prototype.gatherInputsValues=function(t,e){if(e){for(var i=0;i<e.length;i++){var r=e[i];if(r.disabled||!r.type)continue;switch(r.type.toLowerCase()){case"text":case"textarea":case"password":case"hidden":case"select-one":if(r.value.length)t[t.length]={name:r.name,value:r.value};break;case"radio":case"checkbox":if(r.checked)t[t.length]={name:r.name,value:r.value};break;case"select-multiple":for(var s=0;s<r.options.length;s++){if(r.options[s].selected)t[t.length]={name:r.name,value:r.options[s].value}}break;default:break}}}};JCSmartFilter.prototype.values2post=function(t){var e=[];var i=e;var r=0;while(r<t.length){var s=t[r].name.indexOf("[");if(s==-1){i[t[r].name]=t[r].value;i=e;r++}else{var n=t[r].name.substring(0,s);var l=t[r].name.substring(s+1);if(!i[n])i[n]=[];var a=l.indexOf("]");if(a==-1){i=e;r++}else if(a==0){i=i[n];t[r].name=""+i.length}else{i=i[n];t[r].name=l.substring(0,a)+l.substring(a+1)}}}return e};JCSmartFilter.prototype.hideFilterProps=function(t){var e=t.parentNode,i=e.querySelector("[data-role='bx_filter_block']"),r=e.querySelector("[data-role='prop_angle']");if(BX.hasClass(e,"bx-active")){new BX.easing({duration:300,start:{opacity:1,height:i.offsetHeight},finish:{opacity:0,height:0},transition:BX.easing.transitions.quart,step:function(t){i.style.opacity=t.opacity;i.style.height=t.height+"px"},complete:function(){i.setAttribute("style","");BX.removeClass(e,"bx-active")}}).animate();BX.addClass(r,"fa-angle-down");BX.removeClass(r,"fa-angle-up")}else{i.style.display="block";i.style.opacity=0;i.style.height="auto";var s=i.offsetHeight;i.style.height=0;new BX.easing({duration:300,start:{opacity:0,height:0},finish:{opacity:1,height:s},transition:BX.easing.transitions.quart,step:function(t){i.style.opacity=t.opacity;i.style.height=t.height+"px"},complete:function(){}}).animate();BX.addClass(e,"bx-active");BX.removeClass(r,"fa-angle-down");BX.addClass(r,"fa-angle-up")}};JCSmartFilter.prototype.showDropDownPopup=function(t,e){var i=t.querySelector('[data-role="dropdownContent"]');this.popups["smartFilterDropDown"+e]=BX.PopupWindowManager.create("smartFilterDropDown"+e,t,{autoHide:true,offsetLeft:0,offsetTop:3,overlay:false,draggable:{restrict:true},closeByEsc:true,content:BX.clone(i)});this.popups["smartFilterDropDown"+e].show()};JCSmartFilter.prototype.selectDropDownItem=function(t,e){this.keyup(BX(e));var i=BX.findParent(BX(e),{className:"bx-filter-select-container"},false);var r=i.querySelector('[data-role="currentOption"]');r.innerHTML=t.innerHTML;BX.PopupWindowManager.getCurrentPopup().close()};BX.namespace("BX.Iblock.SmartFilter");BX.Iblock.SmartFilter=function(){var t=function(t){if(typeof t==="object"){this.leftSlider=BX(t.leftSlider);this.rightSlider=BX(t.rightSlider);this.tracker=BX(t.tracker);this.trackerWrap=BX(t.trackerWrap);this.minInput=BX(t.minInputId);this.maxInput=BX(t.maxInputId);this.minPrice=parseFloat(t.minPrice);this.maxPrice=parseFloat(t.maxPrice);this.curMinPrice=parseFloat(t.curMinPrice);this.curMaxPrice=parseFloat(t.curMaxPrice);this.fltMinPrice=t.fltMinPrice?parseFloat(t.fltMinPrice):parseFloat(t.curMinPrice);this.fltMaxPrice=t.fltMaxPrice?parseFloat(t.fltMaxPrice):parseFloat(t.curMaxPrice);this.precision=t.precision||0;this.priceDiff=this.maxPrice-this.minPrice;this.leftPercent=0;this.rightPercent=0;this.fltMinPercent=0;this.fltMaxPercent=0;this.colorUnavailableActive=BX(t.colorUnavailableActive);this.colorAvailableActive=BX(t.colorAvailableActive);this.colorAvailableInactive=BX(t.colorAvailableInactive);this.isTouch=false;this.init();if("ontouchstart"in document.documentElement){this.isTouch=true;BX.bind(this.leftSlider,"touchstart",BX.proxy(function(t){this.onMoveLeftSlider(t)},this));BX.bind(this.rightSlider,"touchstart",BX.proxy(function(t){this.onMoveRightSlider(t)},this))}else{BX.bind(this.leftSlider,"mousedown",BX.proxy(function(t){this.onMoveLeftSlider(t)},this));BX.bind(this.rightSlider,"mousedown",BX.proxy(function(t){this.onMoveRightSlider(t)},this))}BX.bind(this.minInput,"keyup",BX.proxy(function(t){this.onInputChange()},this));BX.bind(this.maxInput,"keyup",BX.proxy(function(t){this.onInputChange()},this))}};t.prototype.init=function(){var t;if(this.curMinPrice>this.minPrice){t=this.curMinPrice-this.minPrice;this.leftPercent=t*100/this.priceDiff;this.leftSlider.style.left=this.leftPercent+"%";this.colorUnavailableActive.style.left=this.leftPercent+"%"}this.setMinFilteredValue(this.fltMinPrice);if(this.curMaxPrice<this.maxPrice){t=this.maxPrice-this.curMaxPrice;this.rightPercent=t*100/this.priceDiff;this.rightSlider.style.right=this.rightPercent+"%";this.colorUnavailableActive.style.right=this.rightPercent+"%"}this.setMaxFilteredValue(this.fltMaxPrice)};t.prototype.setMinFilteredValue=function(t){this.fltMinPrice=parseFloat(t);if(this.fltMinPrice>=this.minPrice){var e=this.fltMinPrice-this.minPrice;this.fltMinPercent=e*100/this.priceDiff;if(this.leftPercent>this.fltMinPercent)this.colorAvailableActive.style.left=this.leftPercent+"%";else this.colorAvailableActive.style.left=this.fltMinPercent+"%";this.colorAvailableInactive.style.left=this.fltMinPercent+"%"}else{this.colorAvailableActive.style.left="0%";this.colorAvailableInactive.style.left="0%"}};t.prototype.setMaxFilteredValue=function(t){this.fltMaxPrice=parseFloat(t);if(this.fltMaxPrice<=this.maxPrice){var e=this.maxPrice-this.fltMaxPrice;this.fltMaxPercent=e*100/this.priceDiff;if(this.rightPercent>this.fltMaxPercent)this.colorAvailableActive.style.right=this.rightPercent+"%";else this.colorAvailableActive.style.right=this.fltMaxPercent+"%";this.colorAvailableInactive.style.right=this.fltMaxPercent+"%"}else{this.colorAvailableActive.style.right="0%";this.colorAvailableInactive.style.right="0%"}};t.prototype.getXCoord=function(t){var e=t.getBoundingClientRect();var i=document.body;var r=document.documentElement;var s=window.pageXOffset||r.scrollLeft||i.scrollLeft;var n=r.clientLeft||i.clientLeft||0;var l=e.left+s-n;return Math.round(l)};t.prototype.getPageX=function(t){t=t||window.event;var e=null;if(this.isTouch&&event.targetTouches[0]!=null){e=t.targetTouches[0].pageX}else if(t.pageX!=null){e=t.pageX}else if(t.clientX!=null){var i=document.documentElement;var r=document.body;e=t.clientX+(i.scrollLeft||r&&r.scrollLeft||0);e-=i.clientLeft||0}return e};t.prototype.recountMinPrice=function(){var t=this.priceDiff*this.leftPercent/100;t=(this.minPrice+t).toFixed(this.precision);if(t!=this.minPrice)this.minInput.value=t;else this.minInput.value="";smartFilter.keyup(this.minInput)};t.prototype.recountMaxPrice=function(){var t=this.priceDiff*this.rightPercent/100;t=(this.maxPrice-t).toFixed(this.precision);if(t!=this.maxPrice)this.maxInput.value=t;else this.maxInput.value="";smartFilter.keyup(this.maxInput)};t.prototype.onInputChange=function(){var t;if(this.minInput.value){var e=this.minInput.value;if(e<this.minPrice)e=this.minPrice;if(e>this.maxPrice)e=this.maxPrice;t=e-this.minPrice;this.leftPercent=t*100/this.priceDiff;this.makeLeftSliderMove(false)}if(this.maxInput.value){var i=this.maxInput.value;if(i<this.minPrice)i=this.minPrice;if(i>this.maxPrice)i=this.maxPrice;t=this.maxPrice-i;this.rightPercent=t*100/this.priceDiff;this.makeRightSliderMove(false)}};t.prototype.makeLeftSliderMove=function(t){t=t!==false;this.leftSlider.style.left=this.leftPercent+"%";this.colorUnavailableActive.style.left=this.leftPercent+"%";var e=false;if(this.leftPercent+this.rightPercent>=100){e=true;this.rightPercent=100-this.leftPercent;this.rightSlider.style.right=this.rightPercent+"%";this.colorUnavailableActive.style.right=this.rightPercent+"%"}if(this.leftPercent>=this.fltMinPercent&&this.leftPercent<=100-this.fltMaxPercent){this.colorAvailableActive.style.left=this.leftPercent+"%";if(e){this.colorAvailableActive.style.right=100-this.leftPercent+"%"}}else if(this.leftPercent<=this.fltMinPercent){this.colorAvailableActive.style.left=this.fltMinPercent+"%";if(e){this.colorAvailableActive.style.right=100-this.fltMinPercent+"%"}}else if(this.leftPercent>=this.fltMaxPercent){this.colorAvailableActive.style.left=100-this.fltMaxPercent+"%";if(e){this.colorAvailableActive.style.right=this.fltMaxPercent+"%"}}if(t){this.recountMinPrice();if(e)this.recountMaxPrice()}};t.prototype.countNewLeft=function(t){var e=this.getPageX(t);var i=this.getXCoord(this.trackerWrap);var r=this.trackerWrap.offsetWidth;var s=e-i;if(s<0)s=0;else if(s>r)s=r;return s};t.prototype.onMoveLeftSlider=function(t){if(!this.isTouch){this.leftSlider.ondragstart=function(){return false}}if(!this.isTouch){document.onmousemove=BX.proxy(function(t){this.leftPercent=this.countNewLeft(t)*100/this.trackerWrap.offsetWidth;this.makeLeftSliderMove()},this);document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}else{document.ontouchmove=BX.proxy(function(t){this.leftPercent=this.countNewLeft(t)*100/this.trackerWrap.offsetWidth;this.makeLeftSliderMove()},this);document.ontouchend=function(){document.ontouchmove=document.touchend=null}}return false};t.prototype.makeRightSliderMove=function(t){t=t!==false;this.rightSlider.style.right=this.rightPercent+"%";this.colorUnavailableActive.style.right=this.rightPercent+"%";var e=false;if(this.leftPercent+this.rightPercent>=100){e=true;this.leftPercent=100-this.rightPercent;this.leftSlider.style.left=this.leftPercent+"%";this.colorUnavailableActive.style.left=this.leftPercent+"%"}if(100-this.rightPercent>=this.fltMinPercent&&this.rightPercent>=this.fltMaxPercent){this.colorAvailableActive.style.right=this.rightPercent+"%";if(e){this.colorAvailableActive.style.left=100-this.rightPercent+"%"}}else if(this.rightPercent<=this.fltMaxPercent){this.colorAvailableActive.style.right=this.fltMaxPercent+"%";if(e){this.colorAvailableActive.style.left=100-this.fltMaxPercent+"%"}}else if(100-this.rightPercent<=this.fltMinPercent){this.colorAvailableActive.style.right=100-this.fltMinPercent+"%";if(e){this.colorAvailableActive.style.left=this.fltMinPercent+"%"}}if(t){this.recountMaxPrice();if(e)this.recountMinPrice()}};t.prototype.onMoveRightSlider=function(t){if(!this.isTouch){this.rightSlider.ondragstart=function(){return false}}if(!this.isTouch){document.onmousemove=BX.proxy(function(t){this.rightPercent=100-this.countNewLeft(t)*100/this.trackerWrap.offsetWidth;this.makeRightSliderMove()},this);document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}else{document.ontouchmove=BX.proxy(function(t){this.rightPercent=100-this.countNewLeft(t)*100/this.trackerWrap.offsetWidth;this.makeRightSliderMove()},this);document.ontouchend=function(){document.ontouchmove=document.ontouchend=null}}return false};return t}();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:114:"/bitrix/components/bitrix/catalog/templates/.default_old/bitrix/catalog.section/.default/script.js?164336791339848";s:6:"source";s:98:"/bitrix/components/bitrix/catalog/templates/.default_old/bitrix/catalog.section/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (window) {

if (!!window.JCCatalogSection)
{
	return;
}

var BasketButton = function(params)
{
	BasketButton.superclass.constructor.apply(this, arguments);
	this.nameNode = BX.create('span', {
		props : { className : 'bx_medium bx_bt_button', id : this.id },
		style: typeof(params.style) === 'object' ? params.style : {},
		text: params.text
	});
	this.buttonNode = BX.create('span', {
		attrs: { className: params.ownerClass },
		style: { marginBottom: '0', borderBottom: '0 none transparent' },
		children: [this.nameNode],
		events : this.contextEvents
	});
	if (BX.browser.IsIE())
	{
		this.buttonNode.setAttribute("hideFocus", "hidefocus");
	}
};
BX.extend(BasketButton, BX.PopupWindowButton);

window.JCCatalogSection = function (arParams)
{
	this.productType = 0;
	this.showQuantity = true;
	this.showAbsent = true;
	this.secondPict = false;
	this.showOldPrice = false;
	this.showPercent = false;
	this.showSkuProps = false;
	this.basketAction = 'ADD';
	this.showClosePopup = false;
	this.useCompare = false;
	this.visual = {
		ID: '',
		PICT_ID: '',
		SECOND_PICT_ID: '',
		QUANTITY_ID: '',
		QUANTITY_UP_ID: '',
		QUANTITY_DOWN_ID: '',
		PRICE_ID: '',
		DSC_PERC: '',
		SECOND_DSC_PERC: '',
		DISPLAY_PROP_DIV: '',
		BASKET_PROP_DIV: ''
	};
	this.product = {
		checkQuantity: false,
		maxQuantity: 0,
		stepQuantity: 1,
		isDblQuantity: false,
		canBuy: true,
		canSubscription: true,
		name: '',
		pict: {},
		id: 0,
		addUrl: '',
		buyUrl: ''
	};

	this.basketMode = '';
	this.basketData = {
		useProps: false,
		emptyProps: false,
		quantity: 'quantity',
		props: 'prop',
		basketUrl: '',
		sku_props: '',
		sku_props_var: 'basket_props',
		add_url: '',
		buy_url: ''
	};

	this.compareData = {
		compareUrl: '',
		comparePath: ''
	};

	this.defaultPict = {
		pict: null,
		secondPict: null
	};

	this.checkQuantity = false;
	this.maxQuantity = 0;
	this.stepQuantity = 1;
	this.isDblQuantity = false;
	this.canBuy = true;
	this.currentBasisPrice = {};
	this.canSubscription = true;
	this.precision = 6;
	this.precisionFactor = Math.pow(10,this.precision);

	this.offers = [];
	this.offerNum = 0;
	this.treeProps = [];
	this.obTreeRows = [];
	this.showCount = [];
	this.showStart = [];
	this.selectedValues = {};

	this.obProduct = null;
	this.obQuantity = null;
	this.obQuantityUp = null;
	this.obQuantityDown = null;
	this.obPict = null;
	this.obSecondPict = null;
	this.obPrice = null;
	this.obTree = null;
	this.obBuyBtn = null;
	this.obBasketActions = null;
	this.obNotAvail = null;
	this.obDscPerc = null;
	this.obSecondDscPerc = null;
	this.obSkuProps = null;
	this.obMeasure = null;
	this.obCompare = null;

	this.obPopupWin = null;
	this.basketUrl = '';
	this.basketParams = {};

	this.treeRowShowSize = 5;
	this.treeEnableArrow = { display: '', cursor: 'pointer', opacity: 1 };
	this.treeDisableArrow = { display: '', cursor: 'default', opacity:0.2 };

	this.lastElement = false;
	this.containerHeight = 0;

	this.errorCode = 0;

	if ('object' === typeof arParams)
	{
		this.productType = parseInt(arParams.PRODUCT_TYPE, 10);
		this.showQuantity = arParams.SHOW_QUANTITY;
		this.showAbsent = arParams.SHOW_ABSENT;
		this.secondPict = !!arParams.SECOND_PICT;
		this.showOldPrice = !!arParams.SHOW_OLD_PRICE;
		this.showPercent = !!arParams.SHOW_DISCOUNT_PERCENT;
		this.showSkuProps = !!arParams.SHOW_SKU_PROPS;
		if (!!arParams.ADD_TO_BASKET_ACTION)
		{
			this.basketAction = arParams.ADD_TO_BASKET_ACTION;
		}
		this.showClosePopup = !!arParams.SHOW_CLOSE_POPUP;
		this.useCompare = !!arParams.DISPLAY_COMPARE;

		this.visual = arParams.VISUAL;

		switch (this.productType)
		{
			case 1://product
			case 2://set
				if (!!arParams.PRODUCT && 'object' === typeof(arParams.PRODUCT))
				{
					if (this.showQuantity)
					{
						this.product.checkQuantity = arParams.PRODUCT.CHECK_QUANTITY;
						this.product.isDblQuantity = arParams.PRODUCT.QUANTITY_FLOAT;
						if (this.product.checkQuantity)
						{
							this.product.maxQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.MAX_QUANTITY) : parseInt(arParams.PRODUCT.MAX_QUANTITY, 10));
						}
						this.product.stepQuantity = (this.product.isDblQuantity ? parseFloat(arParams.PRODUCT.STEP_QUANTITY) : parseInt(arParams.PRODUCT.STEP_QUANTITY, 10));

						this.checkQuantity = this.product.checkQuantity;
						this.isDblQuantity = this.product.isDblQuantity;
						this.maxQuantity = this.product.maxQuantity;
						this.stepQuantity = this.product.stepQuantity;
						if (this.isDblQuantity)
						{
							this.stepQuantity = Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor;
						}
					}
					this.product.canBuy = arParams.PRODUCT.CAN_BUY;
					this.product.canSubscription = arParams.PRODUCT.SUBSCRIPTION;
					if (!!arParams.PRODUCT.BASIS_PRICE)
					{
						this.currentBasisPrice = arParams.PRODUCT.BASIS_PRICE;
					}

					this.canBuy = this.product.canBuy;
					this.canSubscription = this.product.canSubscription;

					this.product.name = arParams.PRODUCT.NAME;
					this.product.pict = arParams.PRODUCT.PICT;
					this.product.id = arParams.PRODUCT.ID;
					if (!!arParams.PRODUCT.ADD_URL)
					{
						this.product.addUrl = arParams.PRODUCT.ADD_URL;
					}
					if (!!arParams.PRODUCT.BUY_URL)
					{
						this.product.buyUrl = arParams.PRODUCT.BUY_URL;
					}
					if (!!arParams.BASKET && 'object' === typeof(arParams.BASKET))
					{
						this.basketData.useProps = !!arParams.BASKET.ADD_PROPS;
						this.basketData.emptyProps = !!arParams.BASKET.EMPTY_PROPS;
					}
				}
				else
				{
					this.errorCode = -1;
				}
				break;
			case 3://sku
				if (!!arParams.OFFERS && BX.type.isArray(arParams.OFFERS))
				{
					if (!!arParams.PRODUCT && 'object' === typeof(arParams.PRODUCT))
					{
						this.product.name = arParams.PRODUCT.NAME;
						this.product.id = arParams.PRODUCT.ID;
					}
					this.offers = arParams.OFFERS;
					this.offerNum = 0;
					if (!!arParams.OFFER_SELECTED)
					{
						this.offerNum = parseInt(arParams.OFFER_SELECTED, 10);
					}
					if (isNaN(this.offerNum))
					{
						this.offerNum = 0;
					}
					if (!!arParams.TREE_PROPS)
					{
						this.treeProps = arParams.TREE_PROPS;
					}
					if (!!arParams.DEFAULT_PICTURE)
					{
						this.defaultPict.pict = arParams.DEFAULT_PICTURE.PICTURE;
						this.defaultPict.secondPict = arParams.DEFAULT_PICTURE.PICTURE_SECOND;
					}
				}
				break;
			default:
				this.errorCode = -1;
		}
		if (!!arParams.BASKET && 'object' === typeof(arParams.BASKET))
		{
			if (!!arParams.BASKET.QUANTITY)
			{
				this.basketData.quantity = arParams.BASKET.QUANTITY;
			}
			if (!!arParams.BASKET.PROPS)
			{
				this.basketData.props = arParams.BASKET.PROPS;
			}
			if (!!arParams.BASKET.BASKET_URL)
			{
				this.basketData.basketUrl = arParams.BASKET.BASKET_URL;
			}
			if (3 === this.productType)
			{
				if (!!arParams.BASKET.SKU_PROPS)
				{
					this.basketData.sku_props = arParams.BASKET.SKU_PROPS;
				}
			}
			if (!!arParams.BASKET.ADD_URL_TEMPLATE)
			{
				this.basketData.add_url = arParams.BASKET.ADD_URL_TEMPLATE;
			}
			if (!!arParams.BASKET.BUY_URL_TEMPLATE)
			{
				this.basketData.buy_url = arParams.BASKET.BUY_URL_TEMPLATE;
			}
			if (this.basketData.add_url === '' && this.basketData.buy_url === '')
			{
				this.errorCode = -1024;
			}
		}
		if (this.useCompare)
		{
			if (!!arParams.COMPARE && typeof(arParams.COMPARE) === 'object')
			{
				if (!!arParams.COMPARE.COMPARE_PATH)
				{
					this.compareData.comparePath = arParams.COMPARE.COMPARE_PATH;
				}
				if (!!arParams.COMPARE.COMPARE_URL_TEMPLATE)
				{
					this.compareData.compareUrl = arParams.COMPARE.COMPARE_URL_TEMPLATE;
				}
				else
				{
					this.useCompare = false;
				}
			}
			else
			{
				this.useCompare = false;
			}
		}

		this.lastElement = (!!arParams.LAST_ELEMENT && 'Y' === arParams.LAST_ELEMENT);
	}
	if (0 === this.errorCode)
	{
		BX.ready(BX.delegate(this.Init,this));
	}
};

window.JCCatalogSection.prototype.Init = function()
{
	var i = 0,
		strPrefix = '',
		TreeItems = null;

	this.obProduct = BX(this.visual.ID);
	if (!this.obProduct)
	{
		this.errorCode = -1;
	}
	this.obPict = BX(this.visual.PICT_ID);
	if (!this.obPict)
	{
		this.errorCode = -2;
	}
	if (this.secondPict && !!this.visual.SECOND_PICT_ID)
	{
		this.obSecondPict = BX(this.visual.SECOND_PICT_ID);
	}
	this.obPrice = BX(this.visual.PRICE_ID);
	if (!this.obPrice)
	{
		this.errorCode = -16;
	}
	if (this.showQuantity && !!this.visual.QUANTITY_ID)
	{
		this.obQuantity = BX(this.visual.QUANTITY_ID);
		if (!!this.visual.QUANTITY_UP_ID)
		{
			this.obQuantityUp = BX(this.visual.QUANTITY_UP_ID);
		}
		if (!!this.visual.QUANTITY_DOWN_ID)
		{
			this.obQuantityDown = BX(this.visual.QUANTITY_DOWN_ID);
		}
	}
	if (3 === this.productType && this.offers.length > 0)
	{
		if (!!this.visual.TREE_ID)
		{
			this.obTree = BX(this.visual.TREE_ID);
			if (!this.obTree)
			{
				this.errorCode = -256;
			}
			strPrefix = this.visual.TREE_ITEM_ID;
			for (i = 0; i < this.treeProps.length; i++)
			{
				this.obTreeRows[i] = {
					LEFT: BX(strPrefix+this.treeProps[i].ID+'_left'),
					RIGHT: BX(strPrefix+this.treeProps[i].ID+'_right'),
					LIST: BX(strPrefix+this.treeProps[i].ID+'_list'),
					CONT: BX(strPrefix+this.treeProps[i].ID+'_cont')
				};
				if (!this.obTreeRows[i].LEFT || !this.obTreeRows[i].RIGHT || !this.obTreeRows[i].LIST || !this.obTreeRows[i].CONT)
				{
					this.errorCode = -512;
					break;
				}
			}
		}
		if (!!this.visual.QUANTITY_MEASURE)
		{
			this.obMeasure = BX(this.visual.QUANTITY_MEASURE);
		}
	}

	this.obBasketActions = BX(this.visual.BASKET_ACTIONS_ID);
	if (!!this.obBasketActions)
	{
		if (!!this.visual.BUY_ID)
		{
			this.obBuyBtn = BX(this.visual.BUY_ID);
		}
	}
	this.obNotAvail = BX(this.visual.NOT_AVAILABLE_MESS);

	if (this.showPercent)
	{
		if (!!this.visual.DSC_PERC)
		{
			this.obDscPerc = BX(this.visual.DSC_PERC);
		}
		if (this.secondPict && !!this.visual.SECOND_DSC_PERC)
		{
			this.obSecondDscPerc = BX(this.visual.SECOND_DSC_PERC);
		}
	}

	if (this.showSkuProps)
	{
		if (!!this.visual.DISPLAY_PROP_DIV)
		{
			this.obSkuProps = BX(this.visual.DISPLAY_PROP_DIV);
		}
	}

	if (0 === this.errorCode)
	{
		if (this.showQuantity)
		{
			if (!!this.obQuantityUp)
			{
				BX.bind(this.obQuantityUp, 'click', BX.delegate(this.QuantityUp, this));
			}
			if (!!this.obQuantityDown)
			{
				BX.bind(this.obQuantityDown, 'click', BX.delegate(this.QuantityDown, this));
			}
			if (!!this.obQuantity)
			{
				BX.bind(this.obQuantity, 'change', BX.delegate(this.QuantityChange, this));
			}
		}
		switch (this.productType)
		{
			case 1://product
				break;
			case 3://sku
				if (this.offers.length > 0)
				{
					TreeItems = BX.findChildren(this.obTree, {tagName: 'li'}, true);
					if (!!TreeItems && 0 < TreeItems.length)
					{
						for (i = 0; i < TreeItems.length; i++)
						{
							BX.bind(TreeItems[i], 'click', BX.delegate(this.SelectOfferProp, this));
						}
					}
					for (i = 0; i < this.obTreeRows.length; i++)
					{
						BX.bind(this.obTreeRows[i].LEFT, 'click', BX.delegate(this.RowLeft, this));
						BX.bind(this.obTreeRows[i].RIGHT, 'click', BX.delegate(this.RowRight, this));
					}
					this.SetCurrent();
				}
				break;
		}
		if (!!this.obBuyBtn)
		{
			if (this.basketAction === 'ADD')
			{
				BX.bind(this.obBuyBtn, 'click', BX.delegate(this.Add2Basket, this));
			}
			else
			{
				BX.bind(this.obBuyBtn, 'click', BX.delegate(this.BuyBasket, this));
			}
		}
		if (this.lastElement)
		{
			this.containerHeight = parseInt(this.obProduct.parentNode.offsetHeight, 10);
			if (isNaN(this.containerHeight))
			{
				this.containerHeight = 0;
			}
			this.setHeight();
			BX.bind(window, 'resize', BX.delegate(this.checkHeight, this));
			BX.bind(this.obProduct.parentNode, 'mouseover', BX.delegate(this.setHeight, this));
			BX.bind(this.obProduct.parentNode, 'mouseout', BX.delegate(this.clearHeight, this));
		}
		if (this.useCompare)
		{
			this.obCompare = BX(this.visual.COMPARE_LINK_ID);
			if (!!this.obCompare)
			{
				BX.bind(this.obCompare, 'click', BX.proxy(this.Compare, this));
			}
		}
	}
};

window.JCCatalogSection.prototype.checkHeight = function()
{
	this.containerHeight = parseInt(this.obProduct.parentNode.offsetHeight, 10);
	if (isNaN(this.containerHeight))
	{
		this.containerHeight = 0;
	}
};

window.JCCatalogSection.prototype.setHeight = function()
{
	if (0 < this.containerHeight)
	{
		BX.adjust(this.obProduct.parentNode, {style: { height: this.containerHeight+'px'}});
	}
};

window.JCCatalogSection.prototype.clearHeight = function()
{
	BX.adjust(this.obProduct.parentNode, {style: { height: 'auto'}});
};

window.JCCatalogSection.prototype.QuantityUp = function()
{
	var curValue = 0,
		boolSet = true,
		calcPrice;

	if (0 === this.errorCode && this.showQuantity && this.canBuy)
	{
		curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
		if (!isNaN(curValue))
		{
			curValue += this.stepQuantity;
			if (this.checkQuantity)
			{
				if (curValue > this.maxQuantity)
				{
					boolSet = false;
				}
			}
			if (boolSet)
			{
				if (this.isDblQuantity)
				{
					curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
				}
				this.obQuantity.value = curValue;
				calcPrice = {
					DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * curValue,
					VALUE: this.currentBasisPrice.VALUE * curValue,
					DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * curValue,
					DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
					CURRENCY: this.currentBasisPrice.CURRENCY
				};
				this.setPrice(calcPrice);
			}
		}
	}
};

window.JCCatalogSection.prototype.QuantityDown = function()
{
	var curValue = 0,
		boolSet = true,
		calcPrice;

	if (0 === this.errorCode && this.showQuantity && this.canBuy)
	{
		curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value): parseInt(this.obQuantity.value, 10));
		if (!isNaN(curValue))
		{
			curValue -= this.stepQuantity;
			if (curValue < this.stepQuantity)
			{
				boolSet = false;
			}
			if (boolSet)
			{
				if (this.isDblQuantity)
				{
					curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
				}
				this.obQuantity.value = curValue;
				calcPrice = {
					DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * curValue,
					VALUE: this.currentBasisPrice.VALUE * curValue,
					DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * curValue,
					DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
					CURRENCY: this.currentBasisPrice.CURRENCY
				};
				this.setPrice(calcPrice);
			}
		}
	}
};

window.JCCatalogSection.prototype.QuantityChange = function()
{
	var curValue = 0,
		calcPrice,
		intCount,
		count;

	if (0 === this.errorCode && this.showQuantity)
	{
		if (this.canBuy)
		{
			curValue = (this.isDblQuantity ? parseFloat(this.obQuantity.value) : parseInt(this.obQuantity.value, 10));
			if (!isNaN(curValue))
			{
				if (this.checkQuantity)
				{
					if (curValue > this.maxQuantity)
					{
						curValue = this.maxQuantity;
					}
				}
				if (curValue < this.stepQuantity)
				{
					curValue = this.stepQuantity;
				}
				else
				{
					count = Math.round((curValue*this.precisionFactor)/this.stepQuantity)/this.precisionFactor;
					intCount = parseInt(count, 10);
					if (isNaN(intCount))
					{
						intCount = 1;
						count = 1.1;
					}
					if (count > intCount)
					{
						curValue = (intCount <= 1 ? this.stepQuantity : intCount*this.stepQuantity);
						curValue = Math.round(curValue*this.precisionFactor)/this.precisionFactor;
					}
				}
				this.obQuantity.value = curValue;
			}
			else
			{
				this.obQuantity.value = this.stepQuantity;
			}
		}
		else
		{
			this.obQuantity.value = this.stepQuantity;
		}
		calcPrice = {
			DISCOUNT_VALUE: this.currentBasisPrice.DISCOUNT_VALUE * this.obQuantity.value,
			VALUE: this.currentBasisPrice.VALUE * this.obQuantity.value,
			DISCOUNT_DIFF: this.currentBasisPrice.DISCOUNT_DIFF * this.obQuantity.value,
			DISCOUNT_DIFF_PERCENT: this.currentBasisPrice.DISCOUNT_DIFF_PERCENT,
			CURRENCY: this.currentBasisPrice.CURRENCY
		};
		this.setPrice(calcPrice);
	}
};

window.JCCatalogSection.prototype.QuantitySet = function(index)
{
	if (0 === this.errorCode)
	{
		this.canBuy = this.offers[index].CAN_BUY;
		if (this.canBuy)
		{
			if (!!this.obBasketActions)
			{
				BX.style(this.obBasketActions, 'display', '');
			}
			if (!!this.obNotAvail)
			{
				BX.style(this.obNotAvail, 'display', 'none');
			}
		}
		else
		{
			if (!!this.obBasketActions)
			{
				BX.style(this.obBasketActions, 'display', 'none');
			}
			if (!!this.obNotAvail)
			{
				BX.style(this.obNotAvail, 'display', '');
			}
		}
		if (this.showQuantity)
		{
			this.isDblQuantity = this.offers[index].QUANTITY_FLOAT;
			this.checkQuantity = this.offers[index].CHECK_QUANTITY;
			if (this.isDblQuantity)
			{
				this.maxQuantity = parseFloat(this.offers[index].MAX_QUANTITY);
				this.stepQuantity = Math.round(parseFloat(this.offers[index].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor;
			}
			else
			{
				this.maxQuantity = parseInt(this.offers[index].MAX_QUANTITY, 10);
				this.stepQuantity = parseInt(this.offers[index].STEP_QUANTITY, 10);
			}

			this.obQuantity.value = this.stepQuantity;
			this.obQuantity.disabled = !this.canBuy;
			if (!!this.obMeasure)
			{
				if (!!this.offers[index].MEASURE)
				{
					BX.adjust(this.obMeasure, { html : this.offers[index].MEASURE});
				}
				else
				{
					BX.adjust(this.obMeasure, { html : ''});
				}
			}
		}
		this.currentBasisPrice = this.offers[index].BASIS_PRICE;
	}
};

window.JCCatalogSection.prototype.SelectOfferProp = function()
{
	var i = 0,
		value = '',
		strTreeValue = '',
		arTreeItem = [],
		RowItems = null,
		target = BX.proxy_context;

	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		arTreeItem = strTreeValue.split('_');
		if (this.SearchOfferPropIndex(arTreeItem[0], arTreeItem[1]))
		{
			RowItems = BX.findChildren(target.parentNode, {tagName: 'li'}, false);
			if (!!RowItems && 0 < RowItems.length)
			{
				for (i = 0; i < RowItems.length; i++)
				{
					value = RowItems[i].getAttribute('data-onevalue');
					if (value === arTreeItem[1])
					{
						BX.addClass(RowItems[i], 'bx_active');
					}
					else
					{
						BX.removeClass(RowItems[i], 'bx_active');
					}
				}
			}
		}
	}
};

window.JCCatalogSection.prototype.SearchOfferPropIndex = function(strPropID, strPropValue)
{
	var strName = '',
		arShowValues = false,
		i, j,
		arCanBuyValues = [],
		allValues = [],
		index = -1,
		arFilter = {},
		tmpFilter = [];

	for (i = 0; i < this.treeProps.length; i++)
	{
		if (this.treeProps[i].ID === strPropID)
		{
			index = i;
			break;
		}
	}

	if (-1 < index)
	{
		for (i = 0; i < index; i++)
		{
			strName = 'PROP_'+this.treeProps[i].ID;
			arFilter[strName] = this.selectedValues[strName];
		}
		strName = 'PROP_'+this.treeProps[index].ID;
		arShowValues = this.GetRowValues(arFilter, strName);
		if (!arShowValues)
		{
			return false;
		}
		if (!BX.util.in_array(strPropValue, arShowValues))
		{
			return false;
		}
		arFilter[strName] = strPropValue;
		for (i = index+1; i < this.treeProps.length; i++)
		{
			strName = 'PROP_'+this.treeProps[i].ID;
			arShowValues = this.GetRowValues(arFilter, strName);
			if (!arShowValues)
			{
				return false;
			}
			allValues = [];
			if (this.showAbsent)
			{
				arCanBuyValues = [];
				tmpFilter = [];
				tmpFilter = BX.clone(arFilter, true);
				for (j = 0; j < arShowValues.length; j++)
				{
					tmpFilter[strName] = arShowValues[j];
					allValues[allValues.length] = arShowValues[j];
					if (this.GetCanBuy(tmpFilter))
						arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
				}
			}
			else
			{
				arCanBuyValues = arShowValues;
			}
			if (!!this.selectedValues[strName] && BX.util.in_array(this.selectedValues[strName], arCanBuyValues))
			{
				arFilter[strName] = this.selectedValues[strName];
			}
			else
			{
				if (this.config.showAbsent)
					arFilter[strName] = (arCanBuyValues.length > 0 ? arCanBuyValues[0] : allValues[0]);
				else
					arFilter[strName] = arCanBuyValues[0];
			}
			this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
		}
		this.selectedValues = arFilter;
		this.ChangeInfo();
	}
	return true;
};

window.JCCatalogSection.prototype.RowLeft = function()
{
	var i = 0,
		strTreeValue = '',
		index = -1,
		target = BX.proxy_context;

	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		for (i = 0; i < this.treeProps.length; i++)
		{
			if (this.treeProps[i].ID === strTreeValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.treeRowShowSize < this.showCount[index])
		{
			if (0 > this.showStart[index])
			{
				this.showStart[index]++;
				BX.adjust(this.obTreeRows[index].LIST, { style: { marginLeft: this.showStart[index]*20+'%' }});
				BX.adjust(this.obTreeRows[index].RIGHT, { style: this.treeEnableArrow });
			}

			if (0 <= this.showStart[index])
			{
				BX.adjust(this.obTreeRows[index].LEFT, { style: this.treeDisableArrow });
			}
		}
	}
};

window.JCCatalogSection.prototype.RowRight = function()
{
	var i = 0,
		strTreeValue = '',
		index = -1,
		target = BX.proxy_context;

	if (!!target && target.hasAttribute('data-treevalue'))
	{
		strTreeValue = target.getAttribute('data-treevalue');
		for (i = 0; i < this.treeProps.length; i++)
		{
			if (this.treeProps[i].ID === strTreeValue)
			{
				index = i;
				break;
			}
		}
		if (-1 < index && this.treeRowShowSize < this.showCount[index])
		{
			if ((this.treeRowShowSize - this.showStart[index]) < this.showCount[index])
			{
				this.showStart[index]--;
				BX.adjust(this.obTreeRows[index].LIST, { style: { marginLeft: this.showStart[index]*20+'%' }});
				BX.adjust(this.obTreeRows[index].LEFT, { style: this.treeEnableArrow });
			}

			if ((this.treeRowShowSize - this.showStart[index]) >= this.showCount[index])
			{
				BX.adjust(this.obTreeRows[index].RIGHT, { style: this.treeDisableArrow });
			}
		}
	}
};

window.JCCatalogSection.prototype.UpdateRow = function(intNumber, activeID, showID, canBuyID)
{
	var i = 0,
		showI = 0,
		value = '',
		countShow = 0,
		strNewLen = '',
		obData = {},
		pictMode = false,
		extShowMode = false,
		isCurrent = false,
		selectIndex = 0,
		obLeft = this.treeEnableArrow,
		obRight = this.treeEnableArrow,
		currentShowStart = 0,
		RowItems = null;

	if (-1 < intNumber && intNumber < this.obTreeRows.length)
	{
		RowItems = BX.findChildren(this.obTreeRows[intNumber].LIST, {tagName: 'li'}, false);
		if (!!RowItems && 0 < RowItems.length)
		{
			pictMode = ('PICT' === this.treeProps[intNumber].SHOW_MODE);
			countShow = showID.length;
			extShowMode = this.treeRowShowSize < countShow;
			strNewLen = (extShowMode ? (100/countShow)+'%' : '20%');
			obData = {
				props: { className: '' },
				style: {
					width: strNewLen
				}
			};
			if (pictMode)
			{
				obData.style.paddingTop = strNewLen;
			}
			for (i = 0; i < RowItems.length; i++)
			{
				value = RowItems[i].getAttribute('data-onevalue');
				isCurrent = (value === activeID);
				if (BX.util.in_array(value, canBuyID))
				{
					obData.props.className = (isCurrent ? 'bx_active' : '');
				}
				else
				{
					obData.props.className = (isCurrent ? 'bx_active bx_missing' : 'bx_missing');
				}
				obData.style.display = 'none';
				if (BX.util.in_array(value, showID))
				{
					obData.style.display = '';
					if (isCurrent)
					{
						selectIndex = showI;
					}
					showI++;
				}
				BX.adjust(RowItems[i], obData);
			}

			obData = {
				style: {
					width: (extShowMode ? 20*countShow : 100)+'%',
					marginLeft: '0%'
				}
			};
			if (pictMode)
			{
				BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode ? 'bx_item_detail_scu full' : 'bx_item_detail_scu')}});
			}
			else
			{
				BX.adjust(this.obTreeRows[intNumber].CONT, {props: {className: (extShowMode ? 'bx_item_detail_size full' : 'bx_item_detail_size')}});
			}
			if (extShowMode)
			{
				if (selectIndex +1 === countShow)
				{
					obRight = this.treeDisableArrow;
				}
				if (this.treeRowShowSize <= selectIndex)
				{
					currentShowStart = this.treeRowShowSize - selectIndex - 1;
					obData.style.marginLeft = currentShowStart*20+'%';
				}
				if (0 === currentShowStart)
				{
					obLeft = this.treeDisableArrow;
				}
				BX.adjust(this.obTreeRows[intNumber].LEFT, {style: obLeft });
				BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: obRight });
			}
			else
			{
				BX.adjust(this.obTreeRows[intNumber].LEFT, {style: {display: 'none'}});
				BX.adjust(this.obTreeRows[intNumber].RIGHT, {style: {display: 'none'}});
			}
			BX.adjust(this.obTreeRows[intNumber].LIST, obData);
			this.showCount[intNumber] = countShow;
			this.showStart[intNumber] = currentShowStart;
		}
	}
};

window.JCCatalogSection.prototype.GetRowValues = function(arFilter, index)
{
	var i = 0,
		j,
		arValues = [],
		boolSearch = false,
		boolOneSearch = true;

	if (0 === arFilter.length)
	{
		for (i = 0; i < this.offers.length; i++)
		{
			if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
			{
				arValues[arValues.length] = this.offers[i].TREE[index];
			}
		}
		boolSearch = true;
	}
	else
	{
		for (i = 0; i < this.offers.length; i++)
		{
			boolOneSearch = true;
			for (j in arFilter)
			{
				if (arFilter[j] !== this.offers[i].TREE[j])
				{
					boolOneSearch = false;
					break;
				}
			}
			if (boolOneSearch)
			{
				if (!BX.util.in_array(this.offers[i].TREE[index], arValues))
				{
					arValues[arValues.length] = this.offers[i].TREE[index];
				}
				boolSearch = true;
			}
		}
	}
	return (boolSearch ? arValues : false);
};

window.JCCatalogSection.prototype.GetCanBuy = function(arFilter)
{
	var i = 0,
		j,
		boolSearch = false,
		boolOneSearch = true;

	for (i = 0; i < this.offers.length; i++)
	{
		boolOneSearch = true;
		for (j in arFilter)
		{
			if (arFilter[j] !== this.offers[i].TREE[j])
			{
				boolOneSearch = false;
				break;
			}
		}
		if (boolOneSearch)
		{
			if (this.offers[i].CAN_BUY)
			{
				boolSearch = true;
				break;
			}
		}
	}
	return boolSearch;
};

window.JCCatalogSection.prototype.SetCurrent = function()
{
	var i = 0,
		j = 0,
		arCanBuyValues = [],
		strName = '',
		arShowValues = false,
		arFilter = {},
		tmpFilter = [],
		current = this.offers[this.offerNum].TREE;

	for (i = 0; i < this.treeProps.length; i++)
	{
		strName = 'PROP_'+this.treeProps[i].ID;
		arShowValues = this.GetRowValues(arFilter, strName);
		if (!arShowValues)
		{
			break;
		}
		if (BX.util.in_array(current[strName], arShowValues))
		{
			arFilter[strName] = current[strName];
		}
		else
		{
			arFilter[strName] = arShowValues[0];
			this.offerNum = 0;
		}
		if (this.showAbsent)
		{
			arCanBuyValues = [];
			tmpFilter = [];
			tmpFilter = BX.clone(arFilter, true);
			for (j = 0; j < arShowValues.length; j++)
			{
				tmpFilter[strName] = arShowValues[j];
				if (this.GetCanBuy(tmpFilter))
				{
					arCanBuyValues[arCanBuyValues.length] = arShowValues[j];
				}
			}
		}
		else
		{
			arCanBuyValues = arShowValues;
		}
		this.UpdateRow(i, arFilter[strName], arShowValues, arCanBuyValues);
	}
	this.selectedValues = arFilter;
	this.ChangeInfo();
};

window.JCCatalogSection.prototype.ChangeInfo = function()
{
	var i = 0,
		j,
		index = -1,
		boolOneSearch = true;

	for (i = 0; i < this.offers.length; i++)
	{
		boolOneSearch = true;
		for (j in this.selectedValues)
		{
			if (this.selectedValues[j] !== this.offers[i].TREE[j])
			{
				boolOneSearch = false;
				break;
			}
		}
		if (boolOneSearch)
		{
			index = i;
			break;
		}
	}
	if (-1 < index)
	{
		if (!!this.obPict)
		{
			if (!!this.offers[index].PREVIEW_PICTURE)
			{
				BX.adjust(this.obPict, {style: {backgroundImage: 'url('+this.offers[index].PREVIEW_PICTURE.SRC+')'}});
			}
			else
			{
				BX.adjust(this.obPict, {style: {backgroundImage: 'url('+this.defaultPict.pict.SRC+')'}});
			}
		}
		if (this.secondPict && !!this.obSecondPict)
		{
			if (!!this.offers[index].PREVIEW_PICTURE_SECOND)
			{
				BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url('+this.offers[index].PREVIEW_PICTURE_SECOND.SRC+')'}});
			}
			else if (!!this.offers[index].PREVIEW_PICTURE.SRC)
			{
				BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url('+this.offers[index].PREVIEW_PICTURE.SRC+')'}});
			}
			else if (!!this.defaultPict.secondPict)
			{
				BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url('+this.defaultPict.secondPict.SRC+')'}});
			}
			else
			{
				BX.adjust(this.obSecondPict, {style: {backgroundImage: 'url('+this.defaultPict.pict.SRC+')'}});
			}
		}
		if (this.showSkuProps && !!this.obSkuProps)
		{
			if (0 === this.offers[index].DISPLAY_PROPERTIES.length)
			{
				BX.adjust(this.obSkuProps, {style: {display: 'none'}, html: ''});
			}
			else
			{
				BX.adjust(this.obSkuProps, {style: {display: ''}, html: this.offers[index].DISPLAY_PROPERTIES});
			}
		}
		this.setPrice(this.offers[index].PRICE);
		this.offerNum = index;
		this.QuantitySet(this.offerNum);
	}
};

window.JCCatalogSection.prototype.setPrice = function(price)
{
	var strPrice,
		obData;

	if (!!this.obPrice)
	{
		strPrice = BX.Currency.currencyFormat(price.DISCOUNT_VALUE, price.CURRENCY, true);
		if (this.showOldPrice && (price.DISCOUNT_VALUE !== price.VALUE))
		{
			strPrice += ' <span>'+BX.Currency.currencyFormat(price.VALUE, price.CURRENCY, true)+'</span>';
		}
		BX.adjust(this.obPrice, {html: strPrice});
		if (this.showPercent)
		{
			if (price.DISCOUNT_VALUE !== price.VALUE)
			{
				obData = {
					style: {
						display: ''
					},
					html: price.DISCOUNT_DIFF_PERCENT
				};
			}
			else
			{
				obData = {
					style: {
						display: 'none'
					},
					html: ''
				};
			}
			if (!!this.obDscPerc)
			{
				BX.adjust(this.obDscPerc, obData);
			}
			if (!!this.obSecondDscPerc)
			{
				BX.adjust(this.obSecondDscPerc, obData);
			}
		}
	}
};

window.JCCatalogSection.prototype.Compare = function()
{
	var compareParams, compareLink;
	if (!!this.compareData.compareUrl)
	{
		switch (this.productType)
		{
			case 1://product
			case 2://set
				compareLink = this.compareData.compareUrl.replace('#ID#', this.product.id.toString());
				break;
			case 3://sku
				compareLink = this.compareData.compareUrl.replace('#ID#', this.offers[this.offerNum].ID);
				break;
		}
		compareParams = {
			ajax_action: 'Y'
		};
		BX.ajax.loadJSON(
			compareLink,
			compareParams,
			BX.proxy(this.CompareResult, this)
		);
	}
};

window.JCCatalogSection.prototype.CompareResult = function(result)
{
	var popupContent, popupButtons, popupTitle;
	if (!!this.obPopupWin)
	{
		this.obPopupWin.close();
	}
	if (typeof result !== 'object')
	{
		return false;
	}
	this.InitPopupWindow();
	popupTitle = {
		content: BX.create('div', {
			style: { marginRight: '30px', whiteSpace: 'nowrap' },
			text: BX.message('COMPARE_TITLE')
		})
	};
	if (result.STATUS === 'OK')
	{
		BX.onCustomEvent('OnCompareChange');
		popupContent = '<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+BX.message('COMPARE_MESSAGE_OK')+'</p></div>';
		if (this.showClosePopup)
		{
			popupButtons = [
				new BasketButton({
					ownerClass: this.obProduct.parentNode.parentNode.className,
					text: BX.message('BTN_MESSAGE_COMPARE_REDIRECT'),
					events: {
						click: BX.delegate(this.CompareRedirect, this)
					},
					style: {marginRight: '10px'}
				}),
				new BasketButton({
					ownerClass: this.obProduct.parentNode.parentNode.className,
					text: BX.message('BTN_MESSAGE_CLOSE_POPUP'),
					events: {
						click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
					}
				})
			];
		}
		else
		{
			popupButtons = [
				new BasketButton({
					ownerClass: this.obProduct.parentNode.parentNode.className,
					text: BX.message('BTN_MESSAGE_COMPARE_REDIRECT'),
					events: {
						click: BX.delegate(this.CompareRedirect, this)
					}
				})
			];
		}
	}
	else
	{
		popupContent = '<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+(!!result.MESSAGE ? result.MESSAGE : BX.message('COMPARE_UNKNOWN_ERROR'))+'</p></div>';
		popupButtons = [
			new BasketButton({
				ownerClass: this.obProduct.parentNode.parentNode.className,
				text: BX.message('BTN_MESSAGE_CLOSE'),
				events: {
					click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
				}

			})
		];
	}
	this.obPopupWin.setTitleBar(popupTitle);
	this.obPopupWin.setContent(popupContent);
	this.obPopupWin.setButtons(popupButtons);
	this.obPopupWin.show();
	return false;
};

window.JCCatalogSection.prototype.CompareRedirect = function()
{
	if (!!this.compareData.comparePath)
	{
		location.href = this.compareData.comparePath;
	}
	else
	{
		this.obPopupWin.close();
	}
};

window.JCCatalogSection.prototype.InitBasketUrl = function()
{
	this.basketUrl = (this.basketMode === 'ADD' ? this.basketData.add_url : this.basketData.buy_url);
	switch (this.productType)
	{
		case 1://product
		case 2://set
			this.basketUrl = this.basketUrl.replace('#ID#', this.product.id.toString());
			break;
		case 3://sku
			this.basketUrl = this.basketUrl.replace('#ID#', this.offers[this.offerNum].ID);
			break;
	}
	this.basketParams = {
		'ajax_basket': 'Y'
	};
	if (this.showQuantity)
	{
		this.basketParams[this.basketData.quantity] = this.obQuantity.value;
	}
	if (!!this.basketData.sku_props)
	{
		this.basketParams[this.basketData.sku_props_var] = this.basketData.sku_props;
	}
};

window.JCCatalogSection.prototype.FillBasketProps = function()
{
	if (!this.visual.BASKET_PROP_DIV)
	{
		return;
	}
	var
		i = 0,
		propCollection = null,
		foundValues = false,
		obBasketProps = null;

	if (this.basketData.useProps && !this.basketData.emptyProps)
	{
		if (!!this.obPopupWin && !!this.obPopupWin.contentContainer)
		{
			obBasketProps = this.obPopupWin.contentContainer;
		}
	}
	else
	{
		obBasketProps = BX(this.visual.BASKET_PROP_DIV);
	}
	if (!!obBasketProps)
	{
		propCollection = obBasketProps.getElementsByTagName('select');
		if (!!propCollection && !!propCollection.length)
		{
			for (i = 0; i < propCollection.length; i++)
			{
				if (!propCollection[i].disabled)
				{
					switch(propCollection[i].type.toLowerCase())
					{
						case 'select-one':
							this.basketParams[propCollection[i].name] = propCollection[i].value;
							foundValues = true;
							break;
						default:
							break;
					}
				}
			}
		}
		propCollection = obBasketProps.getElementsByTagName('input');
		if (!!propCollection && !!propCollection.length)
		{
			for (i = 0; i < propCollection.length; i++)
			{
				if (!propCollection[i].disabled)
				{
					switch(propCollection[i].type.toLowerCase())
					{
						case 'hidden':
							this.basketParams[propCollection[i].name] = propCollection[i].value;
							foundValues = true;
							break;
						case 'radio':
							if (propCollection[i].checked)
							{
								this.basketParams[propCollection[i].name] = propCollection[i].value;
								foundValues = true;
							}
							break;
						default:
							break;
					}
				}
			}
		}
	}
	if (!foundValues)
	{
		this.basketParams[this.basketData.props] = [];
		this.basketParams[this.basketData.props][0] = 0;
	}
};

window.JCCatalogSection.prototype.Add2Basket = function()
{
	this.basketMode = 'ADD';
	this.Basket();
};

window.JCCatalogSection.prototype.BuyBasket = function()
{
	this.basketMode = 'BUY';
	this.Basket();
};

window.JCCatalogSection.prototype.SendToBasket = function()
{
	if (!this.canBuy)
	{
		return;
	}
	this.InitBasketUrl();
	this.FillBasketProps();
	BX.ajax.loadJSON(
		this.basketUrl,
		this.basketParams,
		BX.delegate(this.BasketResult, this)
	);
};

window.JCCatalogSection.prototype.Basket = function()
{
	var contentBasketProps = '';
	if (!this.canBuy)
	{
		return;
	}
	switch (this.productType)
	{
	case 1://product
	case 2://set
		if (this.basketData.useProps && !this.basketData.emptyProps)
		{
			this.InitPopupWindow();
			this.obPopupWin.setTitleBar({
				content: BX.create('div', {
					style: { marginRight: '30px', whiteSpace: 'nowrap' },
					text: BX.message('TITLE_BASKET_PROPS')
				})
			});
			if (BX(this.visual.BASKET_PROP_DIV))
			{
				contentBasketProps = BX(this.visual.BASKET_PROP_DIV).innerHTML;
			}
			this.obPopupWin.setContent(contentBasketProps);
			this.obPopupWin.setButtons([
				new BasketButton({
					ownerClass: this.obProduct.parentNode.parentNode.className,
					text: BX.message('BTN_MESSAGE_SEND_PROPS'),
					events: {
						click: BX.delegate(this.SendToBasket, this)
					}
				})
			]);
			this.obPopupWin.show();
		}
		else
		{
			this.SendToBasket();
		}
		break;
	case 3://sku
		this.SendToBasket();
		break;
	}
};

window.JCCatalogSection.prototype.BasketResult = function(arResult)
{
	var strContent = '',
		strPict = '',
		successful,
		buttons = [];

	if (!!this.obPopupWin)
	{
		this.obPopupWin.close();
	}
	if ('object' !== typeof arResult)
	{
		return false;
	}
	successful = (arResult.STATUS === 'OK');
	if (successful && this.basketAction === 'BUY')
	{
		this.BasketRedirect();
	}
	else
	{
		this.InitPopupWindow();
		if (successful)
		{
			BX.onCustomEvent('OnBasketChange');
			switch(this.productType)
			{
			case 1://
			case 2://
				strPict = this.product.pict.SRC;
				break;
			case 3:
				strPict = (!!this.offers[this.offerNum].PREVIEW_PICTURE ?
					this.offers[this.offerNum].PREVIEW_PICTURE.SRC :
					this.defaultPict.pict.SRC
				);
				break;
			}
			strContent = '<div style="width: 96%; margin: 10px 2%; text-align: center;"><img src="'+strPict+'" height="130"><p>'+this.product.name+'</p></div>';
			if (this.showClosePopup)
			{
				buttons = [
					new BasketButton({
						ownerClass: this.obProduct.parentNode.parentNode.className,
						text: BX.message("BTN_MESSAGE_BASKET_REDIRECT"),
						events: {
							click: BX.delegate(this.BasketRedirect, this)
						},
						style: {marginRight: '10px'}
					}),
					new BasketButton({
						ownerClass: this.obProduct.parentNode.parentNode.className,
						text: BX.message("BTN_MESSAGE_CLOSE_POPUP"),
						events: {
							click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
						}
					})
				];
			}
			else
			{
				buttons = [
					new BasketButton({
						ownerClass: this.obProduct.parentNode.parentNode.className,
						text: BX.message("BTN_MESSAGE_BASKET_REDIRECT"),
						events: {
							click: BX.delegate(this.BasketRedirect, this)
						}
					})
				];
			}
		}
		else
		{
			strContent = '<div style="width: 96%; margin: 10px 2%; text-align: center;"><p>'+(!!arResult.MESSAGE ? arResult.MESSAGE : BX.message('BASKET_UNKNOWN_ERROR'))+'</p></div>';
			buttons = [
				new BasketButton({
					ownerClass: this.obProduct.parentNode.parentNode.className,
					text: BX.message('BTN_MESSAGE_CLOSE'),
					events: {
						click: BX.delegate(this.obPopupWin.close, this.obPopupWin)
					}
				})
			];
		}
		this.obPopupWin.setTitleBar({
			content: BX.create('div', {
				style: { marginRight: '30px', whiteSpace: 'nowrap' },
				text: (successful ? BX.message('TITLE_SUCCESSFUL') : BX.message('TITLE_ERROR'))
			})
		});
		this.obPopupWin.setContent(strContent);
		this.obPopupWin.setButtons(buttons);
		this.obPopupWin.show();
	}
};

window.JCCatalogSection.prototype.BasketRedirect = function()
{
	location.href = (!!this.basketData.basketUrl ? this.basketData.basketUrl : BX.message('BASKET_URL'));
};

window.JCCatalogSection.prototype.InitPopupWindow = function()
{
	if (!!this.obPopupWin)
	{
		return;
	}
	this.obPopupWin = BX.PopupWindowManager.create('CatalogSectionBasket_'+this.visual.ID, null, {
		autoHide: false,
		offsetLeft: 0,
		offsetTop: 0,
		overlay : true,
		closeByEsc: true,
		titleBar: true,
		closeIcon: {top: '10px', right: '10px'}
	});
};
})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/components/bitrix/sale.bestsellers/templates/.default/script.min.js?164336810721181";s:6:"source";s:71:"/bitrix/components/bitrix/sale.bestsellers/templates/.default/script.js";s:3:"min";s:75:"/bitrix/components/bitrix/sale.bestsellers/templates/.default/script.min.js";s:3:"map";s:75:"/bitrix/components/bitrix/sale.bestsellers/templates/.default/script.map.js";}"*/
(function(t){if(!!t.JCCatalogSectionBest){return}var s=function(t){s.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{className:"bx_medium bx_bt_button",id:this.id},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.ownerClass},style:{marginBottom:"0",borderBottom:"0 none transparent"},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(s,BX.PopupWindowButton);t.JCCatalogSectionBest=function(t){this.productType=0;this.showQuantity=true;this.showAbsent=true;this.secondPict=false;this.showOldPrice=false;this.showPercent=false;this.showSkuProps=false;this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:""};this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,isDblQuantity:false,canBuy:true,canSubscription:true,name:"",pict:{},id:0,addUrl:"",buyUrl:""};this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:""};this.defaultPict={pict:null,secondPict:null};this.checkQuantity=false;this.maxQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.canSubscription=true;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.offers=[];this.offerNum=0;this.treeProps=[];this.obTreeRows=[];this.showCount=[];this.showStart=[];this.selectedValues={};this.obProduct=null;this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obPict=null;this.obSecondPict=null;this.obPrice=null;this.obTree=null;this.obBuyBtn=null;this.obDscPerc=null;this.obSecondDscPerc=null;this.obSkuProps=null;this.obMeasure=null;this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.treeRowShowSize=5;this.treeEnableArrow={display:"",cursor:"pointer",opacity:1};this.treeDisableArrow={display:"",cursor:"default",opacity:.2};this.lastElement=false;this.containerHeight=0;this.errorCode=0;if("object"===typeof t){this.productType=parseInt(t.PRODUCT_TYPE,10);this.showQuantity=t.SHOW_QUANTITY;this.showAbsent=t.SHOW_ABSENT;this.secondPict=!!t.SECOND_PICT;this.showOldPrice=!!t.SHOW_OLD_PRICE;this.showPercent=!!t.SHOW_DISCOUNT_PERCENT;this.showSkuProps=!!t.SHOW_SKU_PROPS;this.visual=t.VISUAL;switch(this.productType){case 1:case 2:if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){if(this.showQuantity){this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.maxQuantity=this.product.maxQuantity;this.stepQuantity=this.product.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=t.PRODUCT.CAN_BUY;this.product.canSubscription=t.PRODUCT.SUBSCRIPTION;this.canBuy=this.product.canBuy;this.canSubscription=this.product.canSubscription;this.product.name=t.PRODUCT.NAME;this.product.pict=t.PRODUCT.PICT;this.product.id=t.PRODUCT.ID;if(!!t.PRODUCT.ADD_URL){this.product.addUrl=t.PRODUCT.ADD_URL}if(!!t.PRODUCT.BUY_URL){this.product.buyUrl=t.PRODUCT.BUY_URL}if(!!t.BASKET&&"object"===typeof t.BASKET){this.basketData.useProps=!!t.BASKET.ADD_PROPS;this.basketData.emptyProps=!!t.BASKET.EMPTY_PROPS}}else{this.errorCode=-1}break;case 3:if(!!t.OFFERS&&BX.type.isArray(t.OFFERS)){if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){this.product.name=t.PRODUCT.NAME;this.product.id=t.PRODUCT.ID}this.offers=t.OFFERS;this.offerNum=0;if(!!t.OFFER_SELECTED){this.offerNum=parseInt(t.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(!!t.TREE_PROPS){this.treeProps=t.TREE_PROPS}if(!!t.DEFAULT_PICTURE){this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE;this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND}}else{this.errorCode=-1}break;default:this.errorCode=-1}if(!!t.BASKET&&"object"===typeof t.BASKET){if(!!t.BASKET.QUANTITY){this.basketData.quantity=t.BASKET.QUANTITY}if(!!t.BASKET.PROPS){this.basketData.props=t.BASKET.PROPS}if(!!t.BASKET.BASKET_URL){this.basketData.basketUrl=t.BASKET.BASKET_URL}}this.lastElement=!!t.LAST_ELEMENT&&"Y"===t.LAST_ELEMENT}if(0===this.errorCode){BX.ready(BX.delegate(this.Init,this))}};t.JCCatalogSectionBest.prototype.Init=function(){var s=0,e="",i=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}if(this.secondPict&&!!this.visual.SECOND_PICT_ID){this.obSecondPict=BX(this.visual.SECOND_PICT_ID)}this.obPrice=BX(this.visual.PRICE_ID);if(!this.obPrice){this.errorCode=-16}if(this.showQuantity&&!!this.visual.QUANTITY_ID){this.obQuantity=BX(this.visual.QUANTITY_ID);if(!!this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(!!this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}}if(3===this.productType){if(!!this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}e=this.visual.TREE_ITEM_ID;for(s=0;s<this.treeProps.length;s++){this.obTreeRows[s]={LEFT:BX(e+this.treeProps[s].ID+"_left"),RIGHT:BX(e+this.treeProps[s].ID+"_right"),LIST:BX(e+this.treeProps[s].ID+"_list"),CONT:BX(e+this.treeProps[s].ID+"_cont")};if(!this.obTreeRows[s].LEFT||!this.obTreeRows[s].RIGHT||!this.obTreeRows[s].LIST||!this.obTreeRows[s].CONT){this.errorCode=-512;break}}}if(!!this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}}if(!!this.visual.BUY_ID){this.obBuyBtn=BX(this.visual.BUY_ID)}if(this.showPercent){if(!!this.visual.DSC_PERC){this.obDscPerc=BX(this.visual.DSC_PERC)}if(this.secondPict&&!!this.visual.SECOND_DSC_PERC){this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC)}}if(this.showSkuProps){if(!!this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(0===this.errorCode){if(this.showQuantity){if(!!this.obQuantityUp){BX.bind(this.obQuantityUp,"click",BX.delegate(this.QuantityUp,this))}if(!!this.obQuantityDown){BX.bind(this.obQuantityDown,"click",BX.delegate(this.QuantityDown,this))}if(!!this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.QuantityChange,this))}}switch(this.productType){case 1:break;case 3:i=BX.findChildren(this.obTree,{tagName:"li"},true);if(!!i&&0<i.length){for(s=0;s<i.length;s++){BX.bind(i[s],"click",BX.delegate(this.SelectOfferProp,this))}}for(s=0;s<this.obTreeRows.length;s++){BX.bind(this.obTreeRows[s].LEFT,"click",BX.delegate(this.RowLeft,this));BX.bind(this.obTreeRows[s].RIGHT,"click",BX.delegate(this.RowRight,this))}this.SetCurrent();break}if(!!this.obBuyBtn){BX.bind(this.obBuyBtn,"click",BX.delegate(this.Basket,this))}if(this.lastElement){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}this.setHeight();BX.bind(t,"resize",BX.delegate(this.checkHeight,this));BX.bind(this.obProduct.parentNode,"mouseover",BX.delegate(this.setHeight,this));BX.bind(this.obProduct.parentNode,"mouseout",BX.delegate(this.clearHeight,this))}}};t.JCCatalogSectionBest.prototype.checkHeight=function(){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}};t.JCCatalogSectionBest.prototype.setHeight=function(){if(0<this.containerHeight){BX.adjust(this.obProduct.parentNode,{style:{height:this.containerHeight+"px"}})}};t.JCCatalogSectionBest.prototype.clearHeight=function(){BX.adjust(this.obProduct.parentNode,{style:{height:"auto"}})};t.JCCatalogSectionBest.prototype.QuantityUp=function(){var t=0,s=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){s=false}}if(s){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogSectionBest.prototype.QuantityDown=function(){var t=0,s=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;if(t<this.stepQuantity){s=false}if(s){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogSectionBest.prototype.QuantityChange=function(){var t=0,s=true;if(0===this.errorCode&&this.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){s=false;t=this.maxQuantity}else if(t<this.stepQuantity){s=false;t=this.stepQuantity}}if(!s){this.obQuantity.value=t}}else{this.obQuantity.value=this.stepQuantity}}else{this.obQuantity.value=this.stepQuantity}}};t.JCCatalogSectionBest.prototype.QuantitySet=function(t){if(0===this.errorCode){this.canBuy=this.offers[t].CAN_BUY;if(this.canBuy){BX.addClass(this.obBuyBtn,"bx_bt_button");BX.removeClass(this.obBuyBtn,"bx_bt_button_type_2");this.obBuyBtn.innerHTML=BX.message("MESS_BTN_BUY")}else{BX.addClass(this.obBuyBtn,"bx_bt_button_type_2");BX.removeClass(this.obBuyBtn,"bx_bt_button");this.obBuyBtn.innerHTML=BX.message("MESS_NOT_AVAILABLE")}if(this.showQuantity){this.isDblQuantity=this.offers[t].QUANTITY_FLOAT;this.checkQuantity=this.offers[t].CHECK_QUANTITY;if(this.isDblQuantity){this.maxQuantity=parseFloat(this.offers[t].MAX_QUANTITY);this.stepQuantity=Math.round(parseFloat(this.offers[t].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor}else{this.maxQuantity=parseInt(this.offers[t].MAX_QUANTITY,10);this.stepQuantity=parseInt(this.offers[t].STEP_QUANTITY,10)}this.obQuantity.value=this.stepQuantity;this.obQuantity.disabled=!this.canBuy;if(!!this.obMeasure){if(!!this.offers[t].MEASURE){BX.adjust(this.obMeasure,{html:this.offers[t].MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}}}};t.JCCatalogSectionBest.prototype.SelectOfferProp=function(){var t=0,s="",e="",i=[],o=null,a=BX.proxy_context;if(!!a&&a.hasAttribute("data-treevalue")){e=a.getAttribute("data-treevalue");i=e.split("_");if(this.SearchOfferPropIndex(i[0],i[1])){o=BX.findChildren(a.parentNode,{tagName:"li"},false);if(!!o&&0<o.length){for(t=0;t<o.length;t++){s=o[t].getAttribute("data-onevalue");if(s===i[1]){BX.addClass(o[t],"bx_active")}else{BX.removeClass(o[t],"bx_active")}}}}}};t.JCCatalogSectionBest.prototype.SearchOfferPropIndex=function(t,s){var e="",i=false,o,a,h=[],r=-1,n={},u=[];for(o=0;o<this.treeProps.length;o++){if(this.treeProps[o].ID===t){r=o;break}}if(-1<r){for(o=0;o<r;o++){e="PROP_"+this.treeProps[o].ID;n[e]=this.selectedValues[e]}e="PROP_"+this.treeProps[r].ID;i=this.GetRowValues(n,e);if(!i){return false}if(!BX.util.in_array(s,i)){return false}n[e]=s;for(o=r+1;o<this.treeProps.length;o++){e="PROP_"+this.treeProps[o].ID;i=this.GetRowValues(n,e);if(!i){return false}if(this.showAbsent){h=[];u=[];u=BX.clone(n,true);for(a=0;a<i.length;a++){u[e]=i[a];if(this.GetCanBuy(u)){h[h.length]=i[a]}}}else{h=i}if(!!this.selectedValues[e]&&BX.util.in_array(this.selectedValues[e],h)){n[e]=this.selectedValues[e]}else{n[e]=h[0]}this.UpdateRow(o,n[e],i,h)}this.selectedValues=n;this.ChangeInfo()}return true};t.JCCatalogSectionBest.prototype.RowLeft=function(){var t=0,s="",e=-1,i=BX.proxy_context;if(!!i&&i.hasAttribute("data-treevalue")){s=i.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===s){e=t;break}}if(-1<e&&this.treeRowShowSize<this.showCount[e]){if(0>this.showStart[e]){this.showStart[e]++;BX.adjust(this.obTreeRows[e].LIST,{style:{marginLeft:this.showStart[e]*20+"%"}});BX.adjust(this.obTreeRows[e].RIGHT,{style:this.treeEnableArrow})}if(0<=this.showStart[e]){BX.adjust(this.obTreeRows[e].LEFT,{style:this.treeDisableArrow})}}}};t.JCCatalogSectionBest.prototype.RowRight=function(){var t=0,s="",e=-1,i=BX.proxy_context;if(!!i&&i.hasAttribute("data-treevalue")){s=i.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===s){e=t;break}}if(-1<e&&this.treeRowShowSize<this.showCount[e]){if(this.treeRowShowSize-this.showStart[e]<this.showCount[e]){this.showStart[e]--;BX.adjust(this.obTreeRows[e].LIST,{style:{marginLeft:this.showStart[e]*20+"%"}});BX.adjust(this.obTreeRows[e].LEFT,{style:this.treeEnableArrow})}if(this.treeRowShowSize-this.showStart[e]>=this.showCount[e]){BX.adjust(this.obTreeRows[e].RIGHT,{style:this.treeDisableArrow})}}}};t.JCCatalogSectionBest.prototype.UpdateRow=function(t,s,e,i){var o=0,a=0,h="",r=0,n="",u={},l=false,f=false,c=false,p=0,b=this.treeEnableArrow,d=this.treeEnableArrow,P=0,T=null;if(-1<t&&t<this.obTreeRows.length){T=BX.findChildren(this.obTreeRows[t].LIST,{tagName:"li"},false);if(!!T&&0<T.length){l="PICT"===this.treeProps[t].SHOW_MODE;r=e.length;f=this.treeRowShowSize<r;n=f?100/r+"%":"20%";u={props:{className:""},style:{width:n}};if(l){u.style.paddingTop=n}for(o=0;o<T.length;o++){h=T[o].getAttribute("data-onevalue");c=h===s;if(BX.util.in_array(h,i)){u.props.className=c?"bx_active":""}else{u.props.className=c?"bx_active bx_missing":"bx_missing"}u.style.display="none";if(BX.util.in_array(h,e)){u.style.display="";if(c){p=a}a++}BX.adjust(T[o],u)}u={style:{width:(f?20*r:100)+"%",marginLeft:"0%"}};if(l){BX.adjust(this.obTreeRows[t].CONT,{props:{className:f?"bx_item_detail_scu full":"bx_item_detail_scu"}})}else{BX.adjust(this.obTreeRows[t].CONT,{props:{className:f?"bx_item_detail_size full":"bx_item_detail_size"}})}if(f){if(p+1===r){d=this.treeDisableArrow}if(this.treeRowShowSize<=p){P=this.treeRowShowSize-p-1;u.style.marginLeft=P*20+"%"}if(0===P){b=this.treeDisableArrow}BX.adjust(this.obTreeRows[t].LEFT,{style:b});BX.adjust(this.obTreeRows[t].RIGHT,{style:d})}else{BX.adjust(this.obTreeRows[t].LEFT,{style:{display:"none"}});BX.adjust(this.obTreeRows[t].RIGHT,{style:{display:"none"}})}BX.adjust(this.obTreeRows[t].LIST,u);this.showCount[t]=r;this.showStart[t]=P}}};t.JCCatalogSectionBest.prototype.GetRowValues=function(t,s){var e=0,i,o=[],a=false,h=true;if(0===t.length){for(e=0;e<this.offers.length;e++){if(!BX.util.in_array(this.offers[e].TREE[s],o)){o[o.length]=this.offers[e].TREE[s]}}a=true}else{for(e=0;e<this.offers.length;e++){h=true;for(i in t){if(t[i]!==this.offers[e].TREE[i]){h=false;break}}if(h){if(!BX.util.in_array(this.offers[e].TREE[s],o)){o[o.length]=this.offers[e].TREE[s]}a=true}}}return a?o:false};t.JCCatalogSectionBest.prototype.GetCanBuy=function(t){var s=0,e,i=false,o=true;for(s=0;s<this.offers.length;s++){o=true;for(e in t){if(t[e]!==this.offers[s].TREE[e]){o=false;break}}if(o){if(this.offers[s].CAN_BUY){i=true;break}}}return i};t.JCCatalogSectionBest.prototype.SetCurrent=function(){var t=0,s=0,e=[],i="",o=false,a={},h=[],r=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){i="PROP_"+this.treeProps[t].ID;o=this.GetRowValues(a,i);if(!o){break}if(BX.util.in_array(r[i],o)){a[i]=r[i]}else{a[i]=o[0];this.offerNum=0}if(this.showAbsent){e=[];h=[];h=BX.clone(a,true);for(s=0;s<o.length;s++){h[i]=o[s];if(this.GetCanBuy(h)){e[e.length]=o[s]}}}else{e=o}this.UpdateRow(t,a[i],o,e)}this.selectedValues=a;this.ChangeInfo()};t.JCCatalogSectionBest.prototype.ChangeInfo=function(){var t=0,s,e=-1,i={},o=true,a="";for(t=0;t<this.offers.length;t++){o=true;for(s in this.selectedValues){if(this.selectedValues[s]!==this.offers[t].TREE[s]){o=false;break}}if(o){e=t;break}}if(-1<e){if(!!this.obPict){if(!!this.offers[e].PREVIEW_PICTURE){BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.offers[e].PREVIEW_PICTURE.SRC+")"}})}else{BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.secondPict&&!!this.obSecondPict){if(!!this.offers[e].PREVIEW_PICTURE_SECOND){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[e].PREVIEW_PICTURE_SECOND.SRC+")"}})}else if(!!this.offers[e].PREVIEW_PICTURE.SRC){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[e].PREVIEW_PICTURE.SRC+")"}})}else if(!!this.defaultPict.secondPict){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.secondPict.SRC+")"}})}else{BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.showSkuProps&&!!this.obSkuProps){if(0===this.offers[e].DISPLAY_PROPERTIES.length){BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}else{BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[e].DISPLAY_PROPERTIES})}}if(!!this.obPrice){a=this.offers[e].PRICE.PRINT_DISCOUNT_VALUE;if(this.showOldPrice&&this.offers[e].PRICE.DISCOUNT_VALUE!==this.offers[e].PRICE.VALUE){a+=" <span>"+this.offers[e].PRICE.PRINT_VALUE+"</span>"}BX.adjust(this.obPrice,{html:a});if(this.showPercent){if(this.offers[e].PRICE.DISCOUNT_VALUE!==this.offers[e].PRICE.VALUE){i={style:{display:""},html:this.offers[e].PRICE.DISCOUNT_DIFF_PERCENT}}else{i={style:{display:"none"},html:""}}if(!!this.obDscPerc){BX.adjust(this.obDscPerc,i)}if(!!this.obSecondDscPerc){BX.adjust(this.obSecondDscPerc,i)}}}this.offerNum=e;this.QuantitySet(this.offerNum)}};t.JCCatalogSectionBest.prototype.InitBasketUrl=function(){switch(this.productType){case 1:case 2:this.basketUrl=this.product.addUrl;break;case 3:this.basketUrl=this.offers[this.offerNum].ADD_URL;break}this.basketParams={ajax_basket:"Y"};if(this.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}};t.JCCatalogSectionBest.prototype.FillBasketProps=function(){if(!this.visual.BASKET_PROP_DIV){return}var t=0,s=null,e=false,i=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(!!this.obPopupWin&&!!this.obPopupWin.contentContainer){i=this.obPopupWin.contentContainer}}else{i=BX(this.visual.BASKET_PROP_DIV)}if(!i){return}s=i.getElementsByTagName("select");if(!!s&&!!s.length){for(t=0;t<s.length;t++){if(!s[t].disabled){switch(s[t].type.toLowerCase()){case"select-one":this.basketParams[s[t].name]=s[t].value;e=true;break;default:break}}}}s=i.getElementsByTagName("input");if(!!s&&!!s.length){for(t=0;t<s.length;t++){if(!s[t].disabled){switch(s[t].type.toLowerCase()){case"hidden":this.basketParams[s[t].name]=s[t].value;e=true;break;case"radio":if(s[t].checked){this.basketParams[s[t].name]=s[t].value;e=true}break;default:break}}}}if(!e){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}};t.JCCatalogSectionBest.prototype.SendToBasket=function(){if(!this.canBuy){return}this.InitBasketUrl();this.FillBasketProps();BX.ajax.loadJSON(this.basketUrl,this.basketParams,BX.delegate(this.BasketResult,this))};t.JCCatalogSectionBest.prototype.Basket=function(){var t="";if(!this.canBuy){return}switch(this.productType){case 1:case 2:if(this.basketData.useProps&&!this.basketData.emptyProps){this.InitPopupWindow();this.obPopupWin.setTitleBar(BX.message("TITLE_BASKET_PROPS"));if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new s({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.SendToBasket,this)}})]);this.obPopupWin.show()}else{this.SendToBasket()}break;case 3:this.SendToBasket();break}};t.JCCatalogSectionBest.prototype.BasketResult=function(t){var e="",i="",o="",a,h=[];if(!!this.obPopupWin)this.obPopupWin.close();if(!BX.type.isPlainObject(t))return;a="OK"===t.STATUS;if(a){BX.onCustomEvent("OnBasketChange");i=this.product.name;switch(this.productType){case 1:case 2:o=this.product.pict.SRC;break;case 3:o=!!this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}e='<div style="width: 100%; margin: 0; text-align: center;"><img src="'+o+'" height="130" style="max-height:130px"><p>'+i+"</p></div>";h=[new s({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(function(){location.href=!!this.basketData.basketUrl?this.basketData.basketUrl:BX.message("BASKET_URL")},this)}})]}else{e=!!t.MESSAGE?t.MESSAGE:BX.message("BASKET_UNKNOWN_ERROR");h=[new s({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.InitPopupWindow();this.obPopupWin.setTitleBar(a?BX.message("TITLE_SUCCESSFUL"):BX.message("TITLE_ERROR"));this.obPopupWin.setContent(e);this.obPopupWin.setButtons(h);this.obPopupWin.show()};t.JCCatalogSectionBest.prototype.InitPopupWindow=function(){if(!!this.obPopupWin)return;this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:true,contentColor:"white"})}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/components/bitrix/catalog.bigdata.products/templates/.default/script.min.js?164336786323818";s:6:"source";s:79:"/bitrix/components/bitrix/catalog.bigdata.products/templates/.default/script.js";s:3:"min";s:83:"/bitrix/components/bitrix/catalog.bigdata.products/templates/.default/script.min.js";s:3:"map";s:83:"/bitrix/components/bitrix/catalog.bigdata.products/templates/.default/script.map.js";}"*/
(function(t){if(!!t.JCCatalogBigdataProducts){return}var e=function(t){e.superclass.constructor.apply(this,arguments);this.nameNode=BX.create("span",{props:{className:"bx_medium bx_bt_button",id:this.id},text:t.text});this.buttonNode=BX.create("span",{attrs:{className:t.ownerClass},style:{marginBottom:"0",borderBottom:"0 none transparent"},children:[this.nameNode],events:this.contextEvents});if(BX.browser.IsIE()){this.buttonNode.setAttribute("hideFocus","hidefocus")}};BX.extend(e,BX.PopupWindowButton);t.JCCatalogBigdataProducts=function(t){this.productType=0;this.showQuantity=true;this.showAbsent=true;this.secondPict=false;this.showOldPrice=false;this.showPercent=false;this.showSkuProps=false;this.visual={ID:"",PICT_ID:"",SECOND_PICT_ID:"",QUANTITY_ID:"",QUANTITY_UP_ID:"",QUANTITY_DOWN_ID:"",PRICE_ID:"",DSC_PERC:"",SECOND_DSC_PERC:"",DISPLAY_PROP_DIV:"",BASKET_PROP_DIV:""};this.product={checkQuantity:false,maxQuantity:0,stepQuantity:1,isDblQuantity:false,canBuy:true,canSubscription:true,name:"",pict:{},id:0,addUrl:"",buyUrl:""};this.basketData={useProps:false,emptyProps:false,quantity:"quantity",props:"prop",basketUrl:""};this.defaultPict={pict:null,secondPict:null};this.checkQuantity=false;this.maxQuantity=0;this.stepQuantity=1;this.isDblQuantity=false;this.canBuy=true;this.canSubscription=true;this.precision=6;this.precisionFactor=Math.pow(10,this.precision);this.offers=[];this.offerNum=0;this.treeProps=[];this.obTreeRows=[];this.showCount=[];this.showStart=[];this.selectedValues={};this.obProduct=null;this.obQuantity=null;this.obQuantityUp=null;this.obQuantityDown=null;this.obPict=null;this.obSecondPict=null;this.obPrice=null;this.obTree=null;this.obBuyBtn=null;this.obDscPerc=null;this.obSecondDscPerc=null;this.obSkuProps=null;this.obMeasure=null;this.obPopupWin=null;this.basketUrl="";this.basketParams={};this.treeRowShowSize=5;this.treeEnableArrow={display:"",cursor:"pointer",opacity:1};this.treeDisableArrow={display:"",cursor:"default",opacity:.2};this.lastElement=false;this.containerHeight=0;this.errorCode=0;if("object"===typeof t){this.productType=parseInt(t.PRODUCT_TYPE,10);this.showQuantity=t.SHOW_QUANTITY;this.showAbsent=t.SHOW_ABSENT;this.secondPict=!!t.SECOND_PICT;this.showOldPrice=!!t.SHOW_OLD_PRICE;this.showPercent=!!t.SHOW_DISCOUNT_PERCENT;this.showSkuProps=!!t.SHOW_SKU_PROPS;this.visual=t.VISUAL;switch(this.productType){case 1:case 2:if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){if(this.showQuantity){this.product.checkQuantity=t.PRODUCT.CHECK_QUANTITY;this.product.isDblQuantity=t.PRODUCT.QUANTITY_FLOAT;if(this.product.checkQuantity){this.product.maxQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.MAX_QUANTITY):parseInt(t.PRODUCT.MAX_QUANTITY,10)}this.product.stepQuantity=this.product.isDblQuantity?parseFloat(t.PRODUCT.STEP_QUANTITY):parseInt(t.PRODUCT.STEP_QUANTITY,10);this.checkQuantity=this.product.checkQuantity;this.isDblQuantity=this.product.isDblQuantity;this.maxQuantity=this.product.maxQuantity;this.stepQuantity=this.product.stepQuantity;if(this.isDblQuantity){this.stepQuantity=Math.round(this.stepQuantity*this.precisionFactor)/this.precisionFactor}}this.product.canBuy=t.PRODUCT.CAN_BUY;this.product.canSubscription=t.PRODUCT.SUBSCRIPTION;this.canBuy=this.product.canBuy;this.canSubscription=this.product.canSubscription;this.product.name=t.PRODUCT.NAME;this.product.pict=t.PRODUCT.PICT;this.product.id=t.PRODUCT.ID;if(!!t.PRODUCT.ADD_URL){this.product.addUrl=t.PRODUCT.ADD_URL}if(!!t.PRODUCT.BUY_URL){this.product.buyUrl=t.PRODUCT.BUY_URL}if(!!t.BASKET&&"object"===typeof t.BASKET){this.basketData.useProps=!!t.BASKET.ADD_PROPS;this.basketData.emptyProps=!!t.BASKET.EMPTY_PROPS}}else{this.errorCode=-1}break;case 3:if(!!t.OFFERS&&BX.type.isArray(t.OFFERS)){if(!!t.PRODUCT&&"object"===typeof t.PRODUCT){this.product.name=t.PRODUCT.NAME;this.product.id=t.PRODUCT.ID}this.offers=t.OFFERS;this.offerNum=0;if(!!t.OFFER_SELECTED){this.offerNum=parseInt(t.OFFER_SELECTED,10)}if(isNaN(this.offerNum)){this.offerNum=0}if(!!t.TREE_PROPS){this.treeProps=t.TREE_PROPS}if(!!t.DEFAULT_PICTURE){this.defaultPict.pict=t.DEFAULT_PICTURE.PICTURE;this.defaultPict.secondPict=t.DEFAULT_PICTURE.PICTURE_SECOND}}else{this.errorCode=-1}break;default:this.errorCode=-1}if(!!t.BASKET&&"object"===typeof t.BASKET){if(!!t.BASKET.QUANTITY){this.basketData.quantity=t.BASKET.QUANTITY}if(!!t.BASKET.PROPS){this.basketData.props=t.BASKET.PROPS}if(!!t.BASKET.BASKET_URL){this.basketData.basketUrl=t.BASKET.BASKET_URL}}this.lastElement=!!t.LAST_ELEMENT&&"Y"===t.LAST_ELEMENT}if(0===this.errorCode){BX.ready(BX.delegate(this.Init,this))}};t.JCCatalogBigdataProducts.prototype.Init=function(){var e=0,i="",s=null;this.obProduct=BX(this.visual.ID);if(!this.obProduct){this.errorCode=-1}this.obPict=BX(this.visual.PICT_ID);if(!this.obPict){this.errorCode=-2}if(this.secondPict&&!!this.visual.SECOND_PICT_ID){this.obSecondPict=BX(this.visual.SECOND_PICT_ID)}this.obPrice=BX(this.visual.PRICE_ID);if(!this.obPrice){this.errorCode=-16}if(this.showQuantity&&!!this.visual.QUANTITY_ID){this.obQuantity=BX(this.visual.QUANTITY_ID);if(!!this.visual.QUANTITY_UP_ID){this.obQuantityUp=BX(this.visual.QUANTITY_UP_ID)}if(!!this.visual.QUANTITY_DOWN_ID){this.obQuantityDown=BX(this.visual.QUANTITY_DOWN_ID)}}if(3===this.productType){if(!!this.visual.TREE_ID){this.obTree=BX(this.visual.TREE_ID);if(!this.obTree){this.errorCode=-256}i=this.visual.TREE_ITEM_ID;for(e=0;e<this.treeProps.length;e++){this.obTreeRows[e]={LEFT:BX(i+this.treeProps[e].ID+"_left"),RIGHT:BX(i+this.treeProps[e].ID+"_right"),LIST:BX(i+this.treeProps[e].ID+"_list"),CONT:BX(i+this.treeProps[e].ID+"_cont")};if(!this.obTreeRows[e].LEFT||!this.obTreeRows[e].RIGHT||!this.obTreeRows[e].LIST||!this.obTreeRows[e].CONT){this.errorCode=-512;break}}}if(!!this.visual.QUANTITY_MEASURE){this.obMeasure=BX(this.visual.QUANTITY_MEASURE)}}if(!!this.visual.BUY_ID){this.obBuyBtn=BX(this.visual.BUY_ID)}if(this.showPercent){if(!!this.visual.DSC_PERC){this.obDscPerc=BX(this.visual.DSC_PERC)}if(this.secondPict&&!!this.visual.SECOND_DSC_PERC){this.obSecondDscPerc=BX(this.visual.SECOND_DSC_PERC)}}if(this.showSkuProps){if(!!this.visual.DISPLAY_PROP_DIV){this.obSkuProps=BX(this.visual.DISPLAY_PROP_DIV)}}if(0===this.errorCode){if(this.showQuantity){if(!!this.obQuantityUp){BX.bind(this.obQuantityUp,"click",BX.delegate(this.QuantityUp,this))}if(!!this.obQuantityDown){BX.bind(this.obQuantityDown,"click",BX.delegate(this.QuantityDown,this))}if(!!this.obQuantity){BX.bind(this.obQuantity,"change",BX.delegate(this.QuantityChange,this))}}switch(this.productType){case 1:break;case 3:s=BX.findChildren(this.obTree,{tagName:"li"},true);if(!!s&&0<s.length){for(e=0;e<s.length;e++){BX.bind(s[e],"click",BX.delegate(this.SelectOfferProp,this))}}for(e=0;e<this.obTreeRows.length;e++){BX.bind(this.obTreeRows[e].LEFT,"click",BX.delegate(this.RowLeft,this));BX.bind(this.obTreeRows[e].RIGHT,"click",BX.delegate(this.RowRight,this))}this.SetCurrent();break}if(!!this.obBuyBtn){BX.bind(this.obBuyBtn,"click",BX.delegate(this.Basket,this))}if(this.lastElement){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}this.setHeight();BX.bind(t,"resize",BX.delegate(this.checkHeight,this));BX.bind(this.obProduct.parentNode,"mouseover",BX.delegate(this.setHeight,this));BX.bind(this.obProduct.parentNode,"mouseout",BX.delegate(this.clearHeight,this))}}};t.JCCatalogBigdataProducts.prototype.checkHeight=function(){this.containerHeight=parseInt(this.obProduct.parentNode.offsetHeight,10);if(isNaN(this.containerHeight)){this.containerHeight=0}};t.JCCatalogBigdataProducts.prototype.setHeight=function(){if(0<this.containerHeight){BX.adjust(this.obProduct.parentNode,{style:{height:this.containerHeight+"px"}})}};t.JCCatalogBigdataProducts.prototype.clearHeight=function(){BX.adjust(this.obProduct.parentNode,{style:{height:"auto"}})};t.JCCatalogBigdataProducts.prototype.QuantityUp=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t+=this.stepQuantity;if(this.checkQuantity){if(t>this.maxQuantity){e=false}}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogBigdataProducts.prototype.QuantityDown=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity&&this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){t-=this.stepQuantity;if(t<this.stepQuantity){e=false}if(e){if(this.isDblQuantity){t=Math.round(t*this.precisionFactor)/this.precisionFactor}this.obQuantity.value=t}}}};t.JCCatalogBigdataProducts.prototype.QuantityChange=function(){var t=0,e=true;if(0===this.errorCode&&this.showQuantity){if(this.canBuy){t=this.isDblQuantity?parseFloat(this.obQuantity.value):parseInt(this.obQuantity.value,10);if(!isNaN(t)){if(this.checkQuantity){if(t>this.maxQuantity){e=false;t=this.maxQuantity}else if(t<this.stepQuantity){e=false;t=this.stepQuantity}}if(!e){this.obQuantity.value=t}}else{this.obQuantity.value=this.stepQuantity}}else{this.obQuantity.value=this.stepQuantity}}};t.JCCatalogBigdataProducts.prototype.QuantitySet=function(t){if(0===this.errorCode){this.canBuy=this.offers[t].CAN_BUY;if(this.canBuy){BX.addClass(this.obBuyBtn,"bx_bt_button");BX.removeClass(this.obBuyBtn,"bx_bt_button_type_2");this.obBuyBtn.innerHTML=BX.message("CBD_MESS_BTN_BUY")}else{BX.addClass(this.obBuyBtn,"bx_bt_button_type_2");BX.removeClass(this.obBuyBtn,"bx_bt_button");this.obBuyBtn.innerHTML=BX.message("CBD_MESS_NOT_AVAILABLE")}if(this.showQuantity){this.isDblQuantity=this.offers[t].QUANTITY_FLOAT;this.checkQuantity=this.offers[t].CHECK_QUANTITY;if(this.isDblQuantity){this.maxQuantity=parseFloat(this.offers[t].MAX_QUANTITY);this.stepQuantity=Math.round(parseFloat(this.offers[t].STEP_QUANTITY)*this.precisionFactor)/this.precisionFactor}else{this.maxQuantity=parseInt(this.offers[t].MAX_QUANTITY,10);this.stepQuantity=parseInt(this.offers[t].STEP_QUANTITY,10)}this.obQuantity.value=this.stepQuantity;this.obQuantity.disabled=!this.canBuy;if(!!this.obMeasure){if(!!this.offers[t].MEASURE){BX.adjust(this.obMeasure,{html:this.offers[t].MEASURE})}else{BX.adjust(this.obMeasure,{html:""})}}}}};t.JCCatalogBigdataProducts.prototype.SelectOfferProp=function(){var t=0,e="",i="",s=[],a=null,o=BX.proxy_context;if(!!o&&o.hasAttribute("data-treevalue")){i=o.getAttribute("data-treevalue");s=i.split("_");if(this.SearchOfferPropIndex(s[0],s[1])){a=BX.findChildren(o.parentNode,{tagName:"li"},false);if(!!a&&0<a.length){for(t=0;t<a.length;t++){e=a[t].getAttribute("data-onevalue");if(e===s[1]){BX.addClass(a[t],"bx_active")}else{BX.removeClass(a[t],"bx_active")}}}}}};t.JCCatalogBigdataProducts.prototype.SearchOfferPropIndex=function(t,e){var i="",s=false,a,o,r=[],h=-1,n={},u=[];for(a=0;a<this.treeProps.length;a++){if(this.treeProps[a].ID===t){h=a;break}}if(-1<h){for(a=0;a<h;a++){i="PROP_"+this.treeProps[a].ID;n[i]=this.selectedValues[i]}i="PROP_"+this.treeProps[h].ID;s=this.GetRowValues(n,i);if(!s){return false}if(!BX.util.in_array(e,s)){return false}n[i]=e;for(a=h+1;a<this.treeProps.length;a++){i="PROP_"+this.treeProps[a].ID;s=this.GetRowValues(n,i);if(!s){return false}if(this.showAbsent){r=[];u=[];u=BX.clone(n,true);for(o=0;o<s.length;o++){u[i]=s[o];if(this.GetCanBuy(u)){r[r.length]=s[o]}}}else{r=s}if(!!this.selectedValues[i]&&BX.util.in_array(this.selectedValues[i],r)){n[i]=this.selectedValues[i]}else{n[i]=r[0]}this.UpdateRow(a,n[i],s,r)}this.selectedValues=n;this.ChangeInfo()}return true};t.JCCatalogBigdataProducts.prototype.RowLeft=function(){var t=0,e="",i=-1,s=BX.proxy_context;if(!!s&&s.hasAttribute("data-treevalue")){e=s.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){i=t;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(0>this.showStart[i]){this.showStart[i]++;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeEnableArrow})}if(0<=this.showStart[i]){BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeDisableArrow})}}}};t.JCCatalogBigdataProducts.prototype.RowRight=function(){var t=0,e="",i=-1,s=BX.proxy_context;if(!!s&&s.hasAttribute("data-treevalue")){e=s.getAttribute("data-treevalue");for(t=0;t<this.treeProps.length;t++){if(this.treeProps[t].ID===e){i=t;break}}if(-1<i&&this.treeRowShowSize<this.showCount[i]){if(this.treeRowShowSize-this.showStart[i]<this.showCount[i]){this.showStart[i]--;BX.adjust(this.obTreeRows[i].LIST,{style:{marginLeft:this.showStart[i]*20+"%"}});BX.adjust(this.obTreeRows[i].LEFT,{style:this.treeEnableArrow})}if(this.treeRowShowSize-this.showStart[i]>=this.showCount[i]){BX.adjust(this.obTreeRows[i].RIGHT,{style:this.treeDisableArrow})}}}};t.JCCatalogBigdataProducts.prototype.UpdateRow=function(t,e,i,s){var a=0,o=0,r="",h=0,n="",u={},l=false,c=false,f=false,d=0,p=this.treeEnableArrow,P=this.treeEnableArrow,b=0,B=null;if(-1<t&&t<this.obTreeRows.length){B=BX.findChildren(this.obTreeRows[t].LIST,{tagName:"li"},false);if(!!B&&0<B.length){l="PICT"===this.treeProps[t].SHOW_MODE;h=i.length;c=this.treeRowShowSize<h;n=c?100/h+"%":"20%";u={props:{className:""},style:{width:n}};if(l){u.style.paddingTop=n}for(a=0;a<B.length;a++){r=B[a].getAttribute("data-onevalue");f=r===e;if(BX.util.in_array(r,s)){u.props.className=f?"bx_active":""}else{u.props.className=f?"bx_active bx_missing":"bx_missing"}u.style.display="none";if(BX.util.in_array(r,i)){u.style.display="";if(f){d=o}o++}BX.adjust(B[a],u)}u={style:{width:(c?20*h:100)+"%",marginLeft:"0%"}};if(l){BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_scu full":"bx_item_detail_scu"}})}else{BX.adjust(this.obTreeRows[t].CONT,{props:{className:c?"bx_item_detail_size full":"bx_item_detail_size"}})}if(c){if(d+1===h){P=this.treeDisableArrow}if(this.treeRowShowSize<=d){b=this.treeRowShowSize-d-1;u.style.marginLeft=b*20+"%"}if(0===b){p=this.treeDisableArrow}BX.adjust(this.obTreeRows[t].LEFT,{style:p});BX.adjust(this.obTreeRows[t].RIGHT,{style:P})}else{BX.adjust(this.obTreeRows[t].LEFT,{style:{display:"none"}});BX.adjust(this.obTreeRows[t].RIGHT,{style:{display:"none"}})}BX.adjust(this.obTreeRows[t].LIST,u);this.showCount[t]=h;this.showStart[t]=b}}};t.JCCatalogBigdataProducts.prototype.GetRowValues=function(t,e){var i=0,s,a=[],o=false,r=true;if(0===t.length){for(i=0;i<this.offers.length;i++){if(!BX.util.in_array(this.offers[i].TREE[e],a)){a[a.length]=this.offers[i].TREE[e]}}o=true}else{for(i=0;i<this.offers.length;i++){r=true;for(s in t){if(t[s]!==this.offers[i].TREE[s]){r=false;break}}if(r){if(!BX.util.in_array(this.offers[i].TREE[e],a)){a[a.length]=this.offers[i].TREE[e]}o=true}}}return o?a:false};t.JCCatalogBigdataProducts.prototype.GetCanBuy=function(t){var e=0,i,s=false,a=true;for(e=0;e<this.offers.length;e++){a=true;for(i in t){if(t[i]!==this.offers[e].TREE[i]){a=false;break}}if(a){if(this.offers[e].CAN_BUY){s=true;break}}}return s};t.JCCatalogBigdataProducts.prototype.SetCurrent=function(){var t=0,e=0,i=[],s="",a=false,o={},r=[],h=this.offers[this.offerNum].TREE;for(t=0;t<this.treeProps.length;t++){s="PROP_"+this.treeProps[t].ID;a=this.GetRowValues(o,s);if(!a){break}if(BX.util.in_array(h[s],a)){o[s]=h[s]}else{o[s]=a[0];this.offerNum=0}if(this.showAbsent){i=[];r=[];r=BX.clone(o,true);for(e=0;e<a.length;e++){r[s]=a[e];if(this.GetCanBuy(r)){i[i.length]=a[e]}}}else{i=a}this.UpdateRow(t,o[s],a,i)}this.selectedValues=o;this.ChangeInfo()};t.JCCatalogBigdataProducts.prototype.ChangeInfo=function(){var t=0,e,i=-1,s={},a=true,o="";for(t=0;t<this.offers.length;t++){a=true;for(e in this.selectedValues){if(this.selectedValues[e]!==this.offers[t].TREE[e]){a=false;break}}if(a){i=t;break}}if(-1<i){if(!!this.obPict){if(!!this.offers[i].PREVIEW_PICTURE){BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE.SRC+")"}})}else{BX.adjust(this.obPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.secondPict&&!!this.obSecondPict){if(!!this.offers[i].PREVIEW_PICTURE_SECOND){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE_SECOND.SRC+")"}})}else if(!!this.offers[i].PREVIEW_PICTURE.SRC){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.offers[i].PREVIEW_PICTURE.SRC+")"}})}else if(!!this.defaultPict.secondPict){BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.secondPict.SRC+")"}})}else{BX.adjust(this.obSecondPict,{style:{backgroundImage:"url("+this.defaultPict.pict.SRC+")"}})}}if(this.showSkuProps&&!!this.obSkuProps){if(0===this.offers[i].DISPLAY_PROPERTIES.length){BX.adjust(this.obSkuProps,{style:{display:"none"},html:""})}else{BX.adjust(this.obSkuProps,{style:{display:""},html:this.offers[i].DISPLAY_PROPERTIES})}}if(!!this.obPrice){o=this.offers[i].PRICE.PRINT_DISCOUNT_VALUE;if(this.showOldPrice&&this.offers[i].PRICE.DISCOUNT_VALUE!==this.offers[i].PRICE.VALUE){o+=" <span>"+this.offers[i].PRICE.PRINT_VALUE+"</span>"}BX.adjust(this.obPrice,{html:o});if(this.showPercent){if(this.offers[i].PRICE.DISCOUNT_VALUE!==this.offers[i].PRICE.VALUE){s={style:{display:""},html:this.offers[i].PRICE.DISCOUNT_DIFF_PERCENT}}else{s={style:{display:"none"},html:""}}if(!!this.obDscPerc){BX.adjust(this.obDscPerc,s)}if(!!this.obSecondDscPerc){BX.adjust(this.obSecondDscPerc,s)}}}this.offerNum=i;this.QuantitySet(this.offerNum)}};t.JCCatalogBigdataProducts.prototype.InitBasketUrl=function(){switch(this.productType){case 1:case 2:this.basketUrl=this.product.addUrl;break;case 3:this.basketUrl=this.offers[this.offerNum].ADD_URL;break}this.basketParams={ajax_basket:"Y",rcm:"yes"};if(this.showQuantity){this.basketParams[this.basketData.quantity]=this.obQuantity.value}};t.JCCatalogBigdataProducts.prototype.FillBasketProps=function(){if(!this.visual.BASKET_PROP_DIV){return}var t=0,e=null,i=false,s=null;if(this.basketData.useProps&&!this.basketData.emptyProps){if(!!this.obPopupWin&&!!this.obPopupWin.contentContainer){s=this.obPopupWin.contentContainer}}else{s=BX(this.visual.BASKET_PROP_DIV)}if(!s){return}e=s.getElementsByTagName("select");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"select-one":this.basketParams[e[t].name]=e[t].value;i=true;break;default:break}}}}e=s.getElementsByTagName("input");if(!!e&&!!e.length){for(t=0;t<e.length;t++){if(!e[t].disabled){switch(e[t].type.toLowerCase()){case"hidden":this.basketParams[e[t].name]=e[t].value;i=true;break;case"radio":if(e[t].checked){this.basketParams[e[t].name]=e[t].value;i=true}break;default:break}}}}if(!i){this.basketParams[this.basketData.props]=[];this.basketParams[this.basketData.props][0]=0}};t.JCCatalogBigdataProducts.prototype.SendToBasket=function(){if(!this.canBuy){return}this.InitBasketUrl();this.FillBasketProps();if(this.product&&this.product.id){if(JCCatalogBigdataProducts.productsByRecommendation&&JCCatalogBigdataProducts.productsByRecommendation[this.product.id]){this.RememberProductRecommendation(JCCatalogBigdataProducts.productsByRecommendation[this.product.id],this.product.id)}}BX.ajax({method:"POST",dataType:"json",url:this.basketUrl,data:this.basketParams,onsuccess:BX.delegate(this.BasketResult,this)})};t.JCCatalogBigdataProducts.prototype.RememberRecommendation=function(t,e){var i=BX.findParent(t,{className:"bigdata_recommended_products_items"});var s=BX.findChild(i,{attr:{name:"bigdata_recommendation_id"}},true).value;this.RememberProductRecommendation(s,e)};t.JCCatalogBigdataProducts.prototype.RememberProductRecommendation=function(t,e){var i=BX.cookie_prefix+"_RCM_PRODUCT_LOG";var s=getCookie(i);var a=false;var o=[],r;if(s){o=s.split(".")}var h=o.length;while(h--){r=o[h].split("-");if(r[0]==e){r=o[h].split("-");r[1]=t;r[2]=BX.current_server_time;o[h]=r.join("-");a=true}else{if(BX.current_server_time-r[2]>3600*24*30){o.splice(h,1)}}}if(!a){o.push([e,t,BX.current_server_time].join("-"))}var n=o.join(".");var u=new Date((new Date).getTime()+1e3*3600*24*365*10);document.cookie=i+"="+n+"; path=/; expires="+u.toUTCString()+"; domain="+BX.cookie_domain};t.JCCatalogBigdataProducts.prototype.Basket=function(){var t="";if(!this.canBuy){return}switch(this.productType){case 1:case 2:if(this.basketData.useProps&&!this.basketData.emptyProps){this.InitPopupWindow();this.obPopupWin.setTitleBar(BX.message("CBD_TITLE_BASKET_PROPS"));if(BX(this.visual.BASKET_PROP_DIV)){t=BX(this.visual.BASKET_PROP_DIV).innerHTML}this.obPopupWin.setContent(t);this.obPopupWin.setButtons([new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CBD_BTN_MESSAGE_SEND_PROPS"),events:{click:BX.delegate(this.SendToBasket,this)}})]);this.obPopupWin.show()}else{this.SendToBasket()}break;case 3:this.SendToBasket();break}};t.JCCatalogBigdataProducts.prototype.BasketResult=function(t){var i="",s="",a="",o,r=[];if(!!this.obPopupWin)this.obPopupWin.close();if(!BX.type.isPlainObject(t))return;o="OK"===t.STATUS;if(o){BX.onCustomEvent("OnBasketChange");s=this.product.name;switch(this.productType){case 1:case 2:a=this.product.pict.SRC;break;case 3:a=!!this.offers[this.offerNum].PREVIEW_PICTURE?this.offers[this.offerNum].PREVIEW_PICTURE.SRC:this.defaultPict.pict.SRC;break}i='<div style="width: 100%; margin: 0; text-align: center;"><img src="'+a+'" height="130" style="max-height:130px"><p>'+s+"</p></div>";r=[new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CBD_BTN_MESSAGE_BASKET_REDIRECT"),events:{click:BX.delegate(function(){location.href=!!this.basketData.basketUrl?this.basketData.basketUrl:BX.message("CBD_BASKET_URL")},this)}})]}else{i=!!t.MESSAGE?t.MESSAGE:BX.message("CBD_BASKET_UNKNOWN_ERROR");r=[new e({ownerClass:this.obProduct.parentNode.parentNode.parentNode.className,text:BX.message("CBD_BTN_MESSAGE_CLOSE"),events:{click:BX.delegate(this.obPopupWin.close,this.obPopupWin)}})]}this.InitPopupWindow();this.obPopupWin.setTitleBar(o?BX.message("CBD_TITLE_SUCCESSFUL"):BX.message("CBD_TITLE_ERROR"));this.obPopupWin.setContent(i);this.obPopupWin.setButtons(r);this.obPopupWin.show()};t.JCCatalogBigdataProducts.prototype.InitPopupWindow=function(){if(!!this.obPopupWin)return;this.obPopupWin=BX.PopupWindowManager.create("CatalogSectionBasket_"+this.visual.ID,null,{autoHide:false,offsetLeft:0,offsetTop:0,overlay:true,closeByEsc:true,titleBar:true,closeIcon:true,contentColor:"white"})}})(window);function getCookie(t){var e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):undefined}function bx_rcm_recommendation_event_attaching(t){return null}function bx_rcm_adaptive_recommendation_event_attaching(t,e){var i=function(e){var i=BX(this),s;for(s in t){if(t[s].productUrl==i.getAttribute("href")){window.JCCatalogBigdataProducts.prototype.RememberProductRecommendation(t[s].recommendationId,t[s].productId);break}}};var s=BX(e);if(!s){s=document.body}var a=BX.findChildren(s,{tag:"a"},true);if(a){var o;for(o in a){BX.bind(a[o],"click",i)}}}function bx_rcm_get_from_cloud(t,e,i){var s="https://analytics.bitrix.info/crecoms/v1_0/recoms.php";var a=BX.ajax.prepareData(e);if(a){s+=(s.indexOf("?")!==-1?"&":"?")+a}var o=function(e){if(!BX.type.isArray(e.items)&&!BX.type.isPlainObject(e.items)||!BX.type.isNotEmptyString(e.id))return;BX.ajax({url:"/bitrix/components/bitrix/catalog.bigdata.products/ajax.php?"+BX.ajax.prepareData({AJAX_ITEMS:e.items,RID:e.id}),method:"POST",data:i,dataType:"html",processData:false,start:true,onsuccess:function(e){var i=BX.processHTML(e);BX(t).innerHTML=i.HTML;BX.ajax.processScripts(i.SCRIPT)}})};BX.ajax({method:"GET",dataType:"json",url:s,timeout:3,onsuccess:o,onfailure:o})}
/* End */
;; /* /bitrix/components/bitrix/catalog.smart.filter/templates/.default/script.min.js?164336792114556*/
; /* /bitrix/components/bitrix/catalog/templates/.default_old/bitrix/catalog.section/.default/script.js?164336791339848*/
; /* /bitrix/components/bitrix/sale.bestsellers/templates/.default/script.min.js?164336810721181*/
; /* /bitrix/components/bitrix/catalog.bigdata.products/templates/.default/script.min.js?164336786323818*/

//# sourceMappingURL=page_0a54794653eddcae36fcef0376b70197.map.js