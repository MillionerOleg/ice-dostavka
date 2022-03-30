<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Интернет-магазин \"Одежда\"");
$APPLICATION->SetPageProperty('this_page', 'general');
?><?if (IsModuleInstalled("advertising")):?>
<?if ($curPage != SITE_DIR."index.php"):?>
	<div class="row mb-4">
		<div class="col-11">
			<?$APPLICATION->IncludeComponent(
				"bitrix:search.title",
				"bootstrap_v4",
				array(
					"NUM_CATEGORIES" => "1",
					"TOP_COUNT" => "5",
					"CHECK_DATES" => "N",
					"SHOW_OTHERS" => "N",
					"PAGE" => SITE_DIR."catalog/",
					"CATEGORY_0_TITLE" => GetMessage("SEARCH_GOODS") ,
					"CATEGORY_0" => array(
						0 => "iblock_catalog",
					),
					"CATEGORY_0_iblock_catalog" => array(
						0 => "all",
					),
					"CATEGORY_OTHERS_TITLE" => GetMessage("SEARCH_OTHER"),
					"SHOW_INPUT" => "Y",
					"INPUT_ID" => "title-search-input",
					"CONTAINER_ID" => "search",
					"PRICE_CODE" => array(
						0 => "BASE",
					),
					"SHOW_PREVIEW" => "Y",
					"PREVIEW_WIDTH" => "75",
					"PREVIEW_HEIGHT" => "75",
					"CONVERT_CURRENCY" => "Y"
				),
				false
			);?>
		</div>
	</div>
<?endif?>
<div class="row banners-top">
	<div class="nav-bar col-lg-3 col-12">
		 <?$APPLICATION->IncludeComponent(
			"bitrix:main.include",
			"",
			Array(
				"AREA_FILE_RECURSIVE" => "Y",
				"AREA_FILE_SHOW" => "file",
				"AREA_FILE_SUFFIX" => "left",
				"PATH" => SITE_TEMPLATE_PATH."catalog/nav-bar.php"
			)
		);?>
	</div>
	<div class="col-xl-7 col-lg-9 col-12 row h-100">
		<div class="mb-4 col-12">
			 <?$APPLICATION->IncludeComponent(
				"bitrix:advertising.banner",
				"bootstrap_v4",
				Array(
					"BS_ARROW_NAV" => "Y",
					"BS_BULLET_NAV" => "Y",
					"BS_CYCLING" => "Y",
					"BS_EFFECT" => "slide",
					"BS_HIDE_FOR_PHONES" => "Y",
					"BS_HIDE_FOR_TABLETS" => "N",
					"BS_INTERVAL" => "5000",
					"BS_KEYBOARD" => "Y",
					"BS_PAUSE" => "Y",
					"BS_WRAP" => "Y",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"CONTROL_NAV" => "Y",
					"CYCLING" => "N",
					"DEFAULT_TEMPLATE" => "bootstrap_v4",
					"DIRECTION_NAV" => "Y",
					"EFFECT" => "random",
					"JQUERY" => "Y",
					"NOINDEX" => "Y",
					"QUANTITY" => "3",
					"SPEED" => "500",
					"TYPE" => "MAIN"
				)
			);?>
		</div>
		<div class="mb-5 col-6">
			<?$APPLICATION->IncludeComponent(
				"bitrix:main.include",
				"",
				Array(
					"AREA_FILE_RECURSIVE" => "Y",
					"AREA_FILE_SHOW" => "sect",
					"AREA_FILE_SUFFIX" => "banner-one"
				)
			);?>
		</div>
		<div class="mb-5 col-6">
			 <?$APPLICATION->IncludeComponent(
				"bitrix:main.include",
				"",
				Array(
					"AREA_FILE_RECURSIVE" => "Y",
					"AREA_FILE_SHOW" => "sect",
					"AREA_FILE_SUFFIX" => "banner-two"
				)
			);?>
		</div>
	</div>
</div>
 <?endif?> 
<!-- <h2>Тренды сезона</h2> -->
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>