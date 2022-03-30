<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
				</div><!--end .bx-content -->


				<!--endregion -->

			</div><!--end row-->
			<?$APPLICATION->IncludeComponent(
				"bitrix:main.include",
				"",
				Array(
					"AREA_FILE_SHOW" => "sect",
					"AREA_FILE_SUFFIX" => "bottom",
					"AREA_FILE_RECURSIVE" => "N",
					"EDIT_MODE" => "html",
				),
				false,
				Array('HIDE_ICONS' => 'Y')
			);?>
		</div><!--end .container.bx-content-section-->
	</div><!--end .workarea-->

	<footer class="bx-footer">
		<div class="bx-footer-section footer-box">
			<div class="container">
				<div class="row">
					<div class="bot-menu col-sm-6 col-lg-3 order-2 mb-4 mb-lg-0 text-center">
						<? $APPLICATION->IncludeComponent(
							"bitrix:menu", 
							"bottom_menu", 
							array(
								"ROOT_MENU_TYPE" => "top",
								"MAX_LEVEL" => "1",
								"MENU_CACHE_TYPE" => "A",
								"CACHE_SELECTED_ITEMS" => "N",
								"MENU_CACHE_TIME" => "36000000",
								"MENU_CACHE_USE_GROUPS" => "Y",
								"MENU_CACHE_GET_VARS" => array(
								),
								"COMPONENT_TEMPLATE" => "bottom_menu",
								"CHILD_MENU_TYPE" => "left",
								"USE_EXT" => "N",
								"DELAY" => "N",
								"ALLOW_MULTI_SELECT" => "N"
							),
							false
						);?>
					</div>
					<div class="col-sm-6 col-lg-3 order-3 mb-4 mb-lg-0 d-flex justify-content-end justify-content-center">
					<ul class="location">
							<li class="address">
								<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "address", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
								);?>
							</li>
							<li class="time">
								<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "time", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
								);?>
							</li>
							<li class="unp">
								<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "unp", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
								);?>
							</li>
						</ul>
					</div>
					<div class="col-sm-6 col-lg-3 order-4 mb-4 mb-lg-0 d-flex justify-content-lg-end justify-content-center">
						<ul class="telephones">
							<li>
								<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "contact1", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
								);?>
							</li>
							<li>
								<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "contact2", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
								);?>
							</li>
							<li>
								<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "contact3", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
								);?>
							</li>
							<li class="e-mail">
								<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "contact4", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
								);?>
							</li>
						</ul>
					</div>
					<div class="col-sm-6 col-lg-3 order-1 d-flex align-items-center justify-content-center">
						<div class="mb-3">
							<a class="bx-logo-block d-block" href="<?=SITE_DIR?>">
								<?$APPLICATION->IncludeComponent(
									"bitrix:main.include",
									"",
									array(
										"AREA_FILE_SHOW" => "file",
										"PATH" => SITE_DIR."include/company_logo.php"),
									false
								);?>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bx-footer-section-custom pt-3 pb-2">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-8 col-12  text-white text-left">
						<? $APPLICATION->IncludeComponent("bitrix:main.include", "", array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_DIR."include/copyright.php"
						), false);?>
					</div>
					<div class="col-md-6 col-sm-4 col-12 pt-2 pt-sm-0 bx-up d-flex justify-content-end">
						<!-- <a href="javascript:void(0)" data-role="eshopUpButton" class="text-white"><i class="fa fa-caret-up"></i> <?=GetMessage("FOOTER_UP_BUTTON")?></a> -->
						<label class="pr-3" for="redline">Разработка сайта</label>
						<img id="redline" src="<?=SITE_TEMPLATE_PATH?>/images/redline.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</footer>
	<div class="col d-md-none">
		<?$APPLICATION->IncludeComponent("bitrix:sale.basket.basket.line", "bootstrap_v4", array(
				"PATH_TO_BASKET" => SITE_DIR."personal/cart/",
				"PATH_TO_PERSONAL" => SITE_DIR."personal/",
				"SHOW_PERSONAL_LINK" => "N",
				"SHOW_NUM_PRODUCTS" => "Y",
				"SHOW_TOTAL_PRICE" => "Y",
				"SHOW_PRODUCTS" => "N",
				"POSITION_FIXED" =>"Y",
				"POSITION_HORIZONTAL" => "center",
				"POSITION_VERTICAL" => "bottom",
				"SHOW_AUTHOR" => "Y",
				"PATH_TO_REGISTER" => SITE_DIR."login/",
				"PATH_TO_PROFILE" => SITE_DIR."personal/"
			),
			false,
			array()
		);?>
	</div>
</div> <!-- //bx-wrapper -->


<script>
	BX.ready(function(){
		var upButton = document.querySelector('[data-role="eshopUpButton"]');
		BX.bind(upButton, "click", function(){
			var windowScroll = BX.GetWindowScrollPos();
			(new BX.easing({
				duration : 500,
				start : { scroll : windowScroll.scrollTop },
				finish : { scroll : 0 },
				transition : BX.easing.makeEaseOut(BX.easing.transitions.quart),
				step : function(state){
					window.scrollTo(0, state.scroll);
				},
				complete: function() {
				}
			})).animate();
		})
	});
</script>
</body>
</html>