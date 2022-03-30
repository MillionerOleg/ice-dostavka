<?if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();?>

<div class="bx_small_cart">
	<img src="<?=SITE_TEMPLATE_PATH?>/components/bitrix/sale.basket.basket.line/.default_old/images/bag.png" alt="busket">
	<a href="<?=$arParams['PATH_TO_BASKET']?>"><?=GetMessage('TSB1_CART')?></a>
	<?if ($arParams['SHOW_NUM_PRODUCTS'] == 'Y' && ($arResult['NUM_PRODUCTS'] > 0 || $arParams['SHOW_EMPTY_VALUES'] == 'Y')):?>
		<strong><?=GetMessage('POKUPOK').' '.$arResult['NUM_PRODUCTS']?></strong>
	<?endif?>
	<?if ($arParams['SHOW_TOTAL_PRICE'] == 'Y'):?>
		<br>
		<span class="icon_spacer"></span>
		<?=GetMessage('TSB1_TOTAL_PRICE')?>
		<?if ($arResult['NUM_PRODUCTS'] > 0 || $arParams['SHOW_EMPTY_VALUES'] == 'Y'):?>
			<strong><?=$arResult['TOTAL_PRICE']?></strong>
		<?endif?>
	<?endif?>
	<?if ($arParams['SHOW_PERSONAL_LINK'] == 'Y'):?>
		<br>
		<span class="icon_info"></span>
		<a class="link_profile" href="<?=$arParams['PATH_TO_PERSONAL']?>"><?=GetMessage('TSB1_PERSONAL')?></a>
	<?endif?>
	<?if ($arParams['SHOW_AUTHOR'] == 'Y'):?>
		<br>
		<span class="icon_profile"></span>
		<?if ($USER->IsAuthorized()):
			$name = trim($USER->GetFullName());
			if (! $name)
				$name = trim($USER->GetLogin());
			if (strlen($name) > 15)
				$name = substr($name, 0, 12).'...';
			?>
			<a class="link_profile" href="<?=$arParams['PATH_TO_PROFILE']?>"><?=$name?></a>
			&nbsp;
			<a class="link_profile" href="?logout=yes"><?=GetMessage('TSB1_LOGOUT')?></a>
		<?else:?>
			<a class="link_profile" href="<?=$arParams['PATH_TO_REGISTER']?>?login=yes"><?=GetMessage('TSB1_LOGIN')?></a>
			&nbsp;
			<a class="link_profile" href="<?=$arParams['PATH_TO_REGISTER']?>?register=yes"><?=GetMessage('TSB1_REGISTER')?></a>
		<?endif?>
	<?endif?>
	<i class="fa fa-caret-down"></i>
</div>
