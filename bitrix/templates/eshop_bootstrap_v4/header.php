<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/templates/".SITE_TEMPLATE_ID."/header.php");
CJSCore::Init(array("fx"));

\Bitrix\Main\UI\Extension::load("ui.bootstrap4");

if (isset($_GET["theme"]) && in_array($_GET["theme"], array("blue", "green", "yellow", "red")))
{
	COption::SetOptionString("main", "wizard_eshop_bootstrap_theme_id", $_GET["theme"], false, SITE_ID);
}
$theme = COption::GetOptionString("main", "wizard_eshop_bootstrap_theme_id", "green", SITE_ID);

$curPage = $APPLICATION->GetCurPage(true);

?><!DOCTYPE html>
<html xml:lang="<?=LANGUAGE_ID?>" lang="<?=LANGUAGE_ID?>">
<head>
	<title><?$APPLICATION->ShowTitle()?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">
	<link rel="shortcut icon" type="image/x-icon" href="<?=SITE_DIR?>favicon.ico" />
	<? $APPLICATION->ShowHead(); ?>
	<link rel="stylesheet" type="text/css" href="<?=SITE_TEMPLATE_PATH?>/slick/slick.css">
  	<link rel="stylesheet" type="text/css" href="<?=SITE_TEMPLATE_PATH?>/slick/slick-theme.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.js"></script>
	<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
	<script src="<?=SITE_TEMPLATE_PATH?>/components/bitrix/news.list/bootstrap_v4/slider/slick/slick.js" type="text/javascript" charset="utf-8"></script>
	<script src="<?=SITE_TEMPLATE_PATH?>/components/bitrix/news.list/bootstrap_v4/slider/custom-slider.js"></script>
	<link href="<?=SITE_TEMPLATE_PATH?>/fonts/css/all.min.css" type="text/css" rel="stylesheet" />
	<script src="<?=SITE_TEMPLATE_PATH?>/script-prikol.js"></script>
</head>
<body class="bx-background-image bx-theme-<?=$theme?> <?=$APPLICATION->ShowProperty('this_page')?>-page" <?$APPLICATION->ShowProperty("backgroundImage");?>>
<div id="panel"><? $APPLICATION->ShowPanel(); ?></div>
	<?$APPLICATION->IncludeComponent(
		"bitrix:eshop.banner",
		"",
		array()
	);?>
<!-- <h1><?php $APPLICATION->GetCurPage(false)==="catalog/morozhenoe/"; /* Выводим «Заголовок страницы» */ ?></h1> -->
<div class="bx-wrapper" id="bx_eshop_wrap">
	<header class="bx-header">
		<div class="bx-header-section container">
			<!--region bx-header-->
			<div class="row pt-0 pt-md-3 mb-3 align-items-center" style="position: relative;">
				<div class="d-block d-md-none bx-menu-button-mobile" data-role='bx-menu-button-mobile-position'></div>
				<div class="col col-md-auto bx-header-logo">
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
					<a class="bx-logo-block d-none text-center" href="<?=SITE_DIR?>">
						<?$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_DIR."include/company_logo_mobile.php"
							),
							false
						);?>
					</a>
				</div>

				<div class="col-2 d-none d-md-block bx-header-personal">
					<?$APPLICATION->IncludeComponent(
						"bitrix:sale.basket.basket.line", 
						".default_old", 
						array(
							"PATH_TO_BASKET" => SITE_DIR."personal/cart/",
							"PATH_TO_PERSONAL" => SITE_DIR."personal/",
							"SHOW_PERSONAL_LINK" => "N",
							"SHOW_NUM_PRODUCTS" => "Y",
							"SHOW_TOTAL_PRICE" => "N",
							"SHOW_PRODUCTS" => "Y",
							"POSITION_FIXED" => "N",
							"SHOW_AUTHOR" => "N",
							"PATH_TO_REGISTER" => SITE_DIR."login/",
							"PATH_TO_PROFILE" => SITE_DIR."personal/",
							"COMPONENT_TEMPLATE" => ".default_old",
							"PATH_TO_ORDER" => SITE_DIR."personal/order/make/",
							"SHOW_EMPTY_VALUES" => "Y",
							"PATH_TO_AUTHORIZE" => "",
							"SHOW_REGISTRATION" => "N",
							"HIDE_ON_BASKET_PAGES" => "N",
							"SHOW_DELAY" => "Y",
							"SHOW_NOTAVAIL" => "Y",
							"SHOW_IMAGE" => "Y",
							"SHOW_PRICE" => "Y",
							"SHOW_SUMMARY" => "Y",
							"MAX_IMAGE_SIZE" => "70"
						),
						false
					);?>
				</div>

				<div class="col bx-header-contact">
					<div class="d-flex align-items-center justify-content-sm-between justify-content-end justify-content-md-center flex-lg-row">
						<div class="serch-box d-none d-sm-block">
							<div class="bx-header-phone-block">
								<!-- <i class="bx-header-phone-icon"></i> -->
								<span class="bx-header-phone-number">
									<?$APPLICATION->IncludeComponent(
										"bitrix:main.include",
										"",
										array(
											"AREA_FILE_SHOW" => "file",
											"PATH" => SITE_DIR."include/telephone.php"
										),
										false
									);?>
								</span>
							</div>
						</div>
						<div class="p-lg-3 p-1">
							<div class="header-autorithation">
								<!-- <div class="bx-worktime-title"><?=GetMessage('HEADER_WORK_TIME'); ?></div> -->
								<i id="openautorith" class="fa fa-user" aria-hidden="true"></i>
								<div id="autorith" class="autorith">
									<?$APPLICATION->IncludeComponent(
										"bitrix:main.include",
										"",
										array(
											"AREA_FILE_SHOW" => "file",
											"PATH" => SITE_DIR."include/schedule.php"
										),
										false
									);?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--endregion-->

			<!--region menu-->
			<div class="row mb-4 col-xl-10 col-12 d-none d-md-block">
				<div class="col pr-3">
					<?$APPLICATION->IncludeComponent(
						"bitrix:menu", 
						"bootstrap_v4", 
						array(
							"ROOT_MENU_TYPE" => "top",
							"MENU_CACHE_TYPE" => "A",
							"MENU_CACHE_TIME" => "36000000",
							"MENU_CACHE_USE_GROUPS" => "Y",
							"MENU_THEME" => "site",
							"CACHE_SELECTED_ITEMS" => "N",
							"MENU_CACHE_GET_VARS" => array(
							),
							"MAX_LEVEL" => "3",
							"CHILD_MENU_TYPE" => "catalog",
							"USE_EXT" => "Y",
							"DELAY" => "N",
							"ALLOW_MULTI_SELECT" => "N",
							"COMPONENT_TEMPLATE" => "bootstrap_v4"
						),
						false
					);?>
				</div>
			</div>
			<!--endregion-->

			<!--region search.title -->
			
			<!--endregion-->

			<!--region breadcrumb-->
			<?if ($curPage != SITE_DIR."index.php"):?>
				<div class="row mb-4">
					<div class="col" id="navigation">
						<?$APPLICATION->IncludeComponent(
							"bitrix:breadcrumb",
							"universal",
							array(
								"START_FROM" => "0",
								"PATH" => "",
								"SITE_ID" => "-"
							),
							false,
							Array('HIDE_ICONS' => 'Y')
						);?>
					</div>
				</div>
				<h1 id="pagetitle"><?$APPLICATION->ShowTitle(false);?></h1>
			<?endif?>
			<!--endregion-->
		</div>
	</header>

	<div class="workarea">
		<div class="container bx-content-section">