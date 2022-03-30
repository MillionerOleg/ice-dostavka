
; /* Start:"a:4:{s:4:"full";s:116:"/bitrix/templates/eshop_bootstrap_v4/components/bitrix/sale.basket.basket.line/.default_old/script.js?16433681064656";s:6:"source";s:101:"/bitrix/templates/eshop_bootstrap_v4/components/bitrix/sale.basket.basket.line/.default_old/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
'use strict';

function BitrixSmallCart(){}

BitrixSmallCart.prototype = {

	activate: function ()
	{
		this.cartElement = BX(this.cartId);
		this.fixedPosition = this.arParams.POSITION_FIXED == 'Y';
		if (this.fixedPosition)
		{
			this.cartClosed = true;
			this.maxHeight = false;
			this.itemRemoved = false;
			this.verticalPosition = this.arParams.POSITION_VERTICAL;
			this.horizontalPosition = this.arParams.POSITION_HORIZONTAL;
			this.topPanelElement = BX("bx-panel");

			this.fixAfterRender(); // TODO onready
			this.fixAfterRenderClosure = this.closure('fixAfterRender');

			var fixCartClosure = this.closure('fixCart');
			this.fixCartClosure = fixCartClosure;

			if (this.topPanelElement && this.verticalPosition == 'top')
				BX.addCustomEvent(window, 'onTopPanelCollapse', fixCartClosure);

			var resizeTimer = null;
			BX.bind(window, 'resize', function() {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(fixCartClosure, 200);
			});
		}
		this.setCartBodyClosure = this.closure('setCartBody');
		BX.addCustomEvent(window, 'OnBasketChange', this.closure('refreshCart', {}));
	},

	fixAfterRender: function ()
	{
		this.statusElement = BX(this.cartId + 'status');
		if (this.statusElement)
		{
			if (this.cartClosed)
				this.statusElement.innerHTML = this.openMessage;
			else
				this.statusElement.innerHTML = this.closeMessage;
		}
		this.productsElement = BX(this.cartId + 'products');
		this.fixCart();
	},

	closure: function (fname, data)
	{
		var obj = this;
		return data
			? function(){obj[fname](data)}
			: function(arg1){obj[fname](arg1)};
	},

	toggleOpenCloseCart: function ()
	{
		if (this.cartClosed)
		{
			BX.removeClass(this.cartElement, 'close');
			this.statusElement.innerHTML = this.closeMessage;
			this.cartClosed = false;
		}
		else // Opened
		{
			BX.addClass(this.cartElement, 'close');
			this.statusElement.innerHTML = this.openMessage;
			this.cartClosed = true;
		}
		setTimeout(this.fixCartClosure, 100);
	},

	setVerticalCenter: function(windowHeight)
	{
		var top = windowHeight/2 - (this.cartElement.offsetHeight/2);
		if (top < 5)
			top = 5;
		this.cartElement.style.top = top + 'px';
	},

	fixCart: function()
	{
		// set horizontal center
		if (this.horizontalPosition == 'hcenter')
		{
			var windowWidth = 'innerWidth' in window
				? window.innerWidth
				: document.documentElement.offsetWidth;
			var left = windowWidth/2 - (this.cartElement.offsetWidth/2);
			if (left < 5)
				left = 5;
			this.cartElement.style.left = left + 'px';
		}

		var windowHeight = 'innerHeight' in window
			? window.innerHeight
			: document.documentElement.offsetHeight;

		// set vertical position
		switch (this.verticalPosition) {
			case 'top':
				if (this.topPanelElement)
					this.cartElement.style.top = this.topPanelElement.offsetHeight + 5 + 'px';
				break;
			case 'vcenter':
				this.setVerticalCenter(windowHeight);
				break;
		}

		// toggle max height
		if (this.productsElement)
		{
			if (this.cartClosed)
			{
				if (this.maxHeight)
				{
					BX.removeClass(this.cartElement, 'max_height');
					this.maxHeight = false;
				}
			}
			else // Opened
			{
				if (this.maxHeight)
				{
					if (this.productsElement.scrollHeight == this.productsElement.clientHeight)
					{
						BX.removeClass(this.cartElement, 'max_height');
						this.maxHeight = false;
					}
				}
				else
				{
					if (this.verticalPosition == 'top' || this.verticalPosition == 'vcenter')
					{
						if (this.cartElement.offsetTop + this.cartElement.offsetHeight >= windowHeight)
						{
							BX.addClass(this.cartElement, 'max_height');
							this.maxHeight = true;
						}
					}
					else
					{
						if (this.cartElement.offsetHeight >= windowHeight)
						{
							BX.addClass(this.cartElement, 'max_height');
							this.maxHeight = true;
						}
					}
				}
			}

			if (this.verticalPosition == 'vcenter')
				this.setVerticalCenter(windowHeight);
		}
	},

	refreshCart: function (data)
	{
		if (this.itemRemoved)
		{
			this.itemRemoved = false;
			return;
		}
		data.sessid = BX.bitrix_sessid();
		data.siteId = this.siteId;
		data.templateName = this.templateName;
		data.arParams = this.arParams;
		BX.ajax({
			url: this.ajaxPath,
			method: 'POST',
			dataType: 'html',
			data: data,
			onsuccess: this.setCartBodyClosure
		});
	},

	setCartBody: function (result)
	{
		if (this.cartElement)
			this.cartElement.innerHTML = result;
		if (this.fixedPosition)
			setTimeout(this.fixAfterRenderClosure, 100);
	},

	removeItemFromCart: function (id)
	{
		this.refreshCart ({sbblRemoveItemFromCart: id});
		this.itemRemoved = true;
		BX.onCustomEvent('OnBasketChange');
	}
};

/* End */
;
; /* Start:"a:4:{s:4:"full";s:101:"/bitrix/templates/eshop_bootstrap_v4/components/bitrix/menu/bootstrap_v4/script.min.js?16433677884044";s:6:"source";s:82:"/bitrix/templates/eshop_bootstrap_v4/components/bitrix/menu/bootstrap_v4/script.js";s:3:"min";s:86:"/bitrix/templates/eshop_bootstrap_v4/components/bitrix/menu/bootstrap_v4/script.min.js";s:3:"map";s:86:"/bitrix/templates/eshop_bootstrap_v4/components/bitrix/menu/bootstrap_v4/script.map.js";}"*/
(function(e){if(!e.BX||BX.CatalogMenu)return;BX.CatalogMenu={items:{},idCnt:1,currentItem:null,overItem:null,outItem:null,timeoutOver:null,timeoutOut:null,getItem:function(e){if(!BX.type.isDomNode(e))return null;var o=!e.id||!BX.type.isNotEmptyString(e.id)?e.id="menu-item-"+this.idCnt++:e.id;if(!this.items[o])this.items[o]=new t(e);return this.items[o]},itemOver:function(e){var t=this.getItem(e);if(!t)return;if(this.outItem==t){clearTimeout(t.timeoutOut)}this.overItem=t;if(t.timeoutOver){clearTimeout(t.timeoutOver)}t.timeoutOver=setTimeout(function(){if(BX.CatalogMenu.overItem==t){t.itemOver()}},100)},itemOut:function(e){var t=this.getItem(e);if(!t)return;this.outItem=t;if(t.timeoutOut){clearTimeout(t.timeoutOut)}t.timeoutOut=setTimeout(function(){if(t!=BX.CatalogMenu.overItem){t.itemOut()}if(t==BX.CatalogMenu.outItem){t.itemOut()}},100)},removeHover:function(e){if(typeof e!=="object")return false;var t=e.parentNode.querySelectorAll('[data-role="bx-menu-item"]');for(var o=0;o<t.length;o++){if(e==t[o])continue;if(BX.hasClass(t[o],"bx-hover"))BX.removeClass(t[o],"bx-hover")}}};var t=function(e){this.element=e;this.popup=BX.findChild(e,{className:"bx_children_container"},false,false);this.isLastItem=BX.lastChild(this.element.parentNode)==this.element};t.prototype.itemOver=function(){if(!BX.hasClass(this.element,"bx-hover")){BX.addClass(this.element,"bx-hover");var e=BX.findChild(this.element,{className:"bx-nav-2-lvl-container"},true,false);if(e){var t=e.getBoundingClientRect().left+e.offsetWidth;if(t>document.body.clientWidth)e.style.right=0}}};t.prototype.itemOut=function(){BX.removeClass(this.element,"bx-hover")}})(window);BX.namespace("BX.Main.MenuComponent");BX.Main.MenuComponent.CatalogHorizontal=function(){var e=function(e,t){this.menuBlockId=e||"";this.itemImgDesc=t||"";this.resizeMenu();BX.bind(window,"resize",BX.proxy(this.resizeMenu,this))};e.prototype.clickInMobile=function(e,t){if(!BX.hasClass(e,"bx-hover")){t.preventDefault()}};e.prototype.toggleInMobile=function(e){var t=BX.findParent(e,{className:"bx-nav-parent"});var o=e.firstChild;if(BX.hasClass(t,"bx-opened")){BX.removeClass(t,"bx-opened");BX.removeClass(o,"bx-nav-angle-top");BX.addClass(o,"bx-nav-angle-bottom")}else{BX.addClass(t,"bx-opened");BX.addClass(o,"bx-nav-angle-top");BX.removeClass(o,"bx-nav-angle-bottom")}};e.prototype.resizeMenu=function(){var e=this.templateWrap;var t=document.body.querySelector("[data-role='bx-menu-mobile']");var o=document.body.querySelector("[data-role='bx-menu-button-mobile']");var i=document.body.querySelector("[data-role='bx-menu-button-mobile-position']");if(document.body.clientWidth<=767){if(!t){t=BX.create("div",{attrs:{className:"bx-aside-nav","data-role":"bx-menu-mobile"},children:[BX.clone(BX("ul_"+this.menuBlockId))]});document.body.insertBefore(t,document.body.firstChild)}if(!o){o=BX.create("div",{attrs:{className:"bx-aside-nav-control bx-closed","data-role":"bx-menu-button-mobile"},children:[BX.create("i",{attrs:{className:"bx-nav-bars"}})],events:{click:function(){if(BX.hasClass(this,"bx-opened")){BX.removeClass(this,"bx-opened");BX.removeClass(t,"bx-opened");BX.addClass(this,"bx-closed");document.body.style.overflow="";BX.removeClass(document.body,"bx-opened")}else{BX.addClass(this,"bx-opened");BX.addClass(t,"bx-opened");BX.removeClass(this,"bx-closed");document.body.style.overflow="hidden";BX.addClass(document.body,"bx-opened")}}}});i.appendChild(o)}}else{BX.removeClass(t,"bx-opened");BX.removeClass(document.body,"bx-opened");document.body.style.overflow="";if(o)BX.removeClass(o,"bx-opened")}};e.prototype.changeSectionPicure=function(e,t){var o=BX.findParent(e,{className:"bx-nav-1-lvl"});if(!o)return;var i=o.querySelector("[data-role='desc-img-block']");if(!i)return;var n=BX.findChild(i,{tagName:"img"},true,false);if(n)n.src=this.itemImgDesc[t]["PICTURE"];var a=BX.findChild(i,{tagName:"a"},true,false);if(a)a.href=e.href;var s=BX.findChild(i,{tagName:"p"},true,false);if(s)s.innerHTML=this.itemImgDesc[t]["DESC"]};return e}();
/* End */
;; /* /bitrix/templates/eshop_bootstrap_v4/components/bitrix/sale.basket.basket.line/.default_old/script.js?16433681064656*/
; /* /bitrix/templates/eshop_bootstrap_v4/components/bitrix/menu/bootstrap_v4/script.min.js?16433677884044*/

//# sourceMappingURL=template_4f896a4977faa1fc49cbf446419743cf.map.js