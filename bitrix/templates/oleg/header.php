<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
IncludeTemplateLangFile(__FILE__);
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">
<?$APPLICATION->ShowHead();?>
<link href="<?=SITE_TEMPLATE_PATH?>/common.css" type="text/css" rel="stylesheet" />
<link href="<?=SITE_TEMPLATE_PATH?>/colors.css" type="text/css" rel="stylesheet" />
<link href="<?=SITE_TEMPLATE_PATH?>/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="<?=SITE_TEMPLATE_PATH?>/fonts/css/all.min.css" type="text/css" rel="stylesheet" />
<script src="<?=SITE_TEMPLATE_PATH?>/script-prikol.js"></script>


	<!--[if lte IE 6]>
	<style type="text/css">
		
		#banner-overlay { 
			background-image: none;
			filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='<?=SITE_TEMPLATE_PATH?>images/overlay.png', sizingMethod = 'crop'); 
		}
		
		div.product-overlay {
			background-image: none;
			filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='<?=SITE_TEMPLATE_PATH?>images/product-overlay.png', sizingMethod = 'crop');
		}
		
	</style>
	<![endif]-->

	<title><?$APPLICATION->ShowTitle()?></title>
</head>
<body>
	<!-- <div id="feedback">
		<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
				"AREA_FILE_SHOW" => "file",
				"PATH" => SITE_TEMPLATE_PATH."header/feedback.php", 
				"AREA_FILE_SUFFIX" => "feedback", 
				"AREA_FILE_RECURSIVE" => "Y", 
			)
		);?>
	</div> -->
	<div id="shadow-all"></div>
	<div id="page-wrapper">
	<div id="panel"><?$APPLICATION->ShowPanel();?></div>
	<div id="header" class="container-fluid">
		<div class="container">
			<table id="logo" class="col-md-3 col-sm-5 col-5">
				<tr>
					<td><a href="<?=SITE_DIR?>" title="<?=GetMessage('CFT_MAIN')?>"><?
	$APPLICATION->IncludeFile(
		SITE_DIR."include/company_name.php",
		Array(),
		Array("MODE"=>"html")
	);
	?></a></td>
					</tr>
				</table>
					<div id="top-menu">
						<div id="top-menu-inner">
						<button id="closebtn" class="d-block d-md-none"><li class="fa fa-times"></li></button>
		<?$APPLICATION->IncludeComponent("bitrix:menu", "horizontal_multilevel", array(
			"ROOT_MENU_TYPE" => "top",
			"MAX_LEVEL" => "2",
			"CHILD_MENU_TYPE" => "left",
			"USE_EXT" => "Y",
			"MENU_CACHE_TYPE" => "A",
			"MENU_CACHE_TIME" => "36000000",
			"MENU_CACHE_USE_GROUPS" => "Y",
			"MENU_CACHE_GET_VARS" => ""
			),
			false,
			array(
			"ACTIVE_COMPONENT" => "Y"
			)
		);?>
						</div>
					</div>
					<div id="contacts" class="d-flex">
						<div class="messanger-title d-inline d-md-none d-lg-inline">
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "sect", 
									"AREA_FILE_SUFFIX" => "contacts", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
							);?>
						</div>
						<div class="messangers d-flex d-md-none d-lg-flex align-items-end">
							<a title="" class="messanger viber d-inline" href="viber://chat?number=+375295129553"><i class="fa fa-viber"></i></a>
							<a class="messanger whatsapp d-inline" href="https://wa.me/375295129553" target="_blank" onclick="ym(31671181,'reachGoal','WHATSAPPCLICK'); return true;"><i class="fa fa-whatsapp"></i></a>
							<a class="messanger telegram d-inline" rel="nofollow" href="tg://resolve?domain=BodrovR"><i class="fa fa-telegram"></i></a>
						</div>
						<div class="separato-red-small d-inline d-md-none d-lg-inline"></div>
						<a href="#" class="icon-img"><img src="<?=SITE_TEMPLATE_PATH?>/images/message.png" alt="" class="img-fluid"></a>
						<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "sect", 
								"AREA_FILE_SUFFIX" => "mail", 
								"AREA_FILE_RECURSIVE" => "Y", 
							)
						);?>
						<div class="separato-red-small"></div>
						<a href="#" class="icon-img"><img src="<?=SITE_TEMPLATE_PATH?>/images/mts.png" alt="" class="img-fluid"></a>
						<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "sect", 
								"AREA_FILE_SUFFIX" => "tel", 
								"AREA_FILE_RECURSIVE" => "Y", 
							)
						);?>
						<div class="separato-red-small"></div>
						<a href="#" class="icon-img"><img src="<?=SITE_TEMPLATE_PATH?>/images/telephone.png" alt="" class="img-fluid"></a>
						<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "sect", 
								"AREA_FILE_SUFFIX" => "message", 
								"AREA_FILE_RECURSIVE" => "Y", 
							)
						);?>
					</div>
					<div class="btn-group">
							<button id="openbtn-contacts" class="d-block d-md-none"><li class="fa fa-phone"></li></button>
                    		<button id="openbtn">BY <li class="fa fa-bars d-block d-md-none"></li></button>
						</div>
					</div>
			</div>
		
		<div id="content" class="container">
			<div class="busket-right">
				<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
						"AREA_FILE_SHOW" => "sect", 
						"AREA_FILE_SUFFIX" => "busket", 
						"AREA_FILE_RECURSIVE" => "Y", 
					)
				);?>
			</div>
			<div class="bread">
				<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
						"AREA_FILE_SHOW" => "sect", 
						"AREA_FILE_SUFFIX" => "bread", 
						"AREA_FILE_RECURSIVE" => "Y", 
					)
				);?>
			</div>
			<h1 id="pagetitle"><?$APPLICATION->ShowTitle(false);?></h1>
			<div id="workarea">
