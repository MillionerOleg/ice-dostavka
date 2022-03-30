<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Контакты");
?><div class="d-flex justify-content-center justify-content-lg-start flex-column flex-lg-row">
	<div class="contact-main-box">
		<ul class="telephones">
			<li>
			<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "sect",
		"AREA_FILE_SUFFIX" => "contact1"
	)
);?> </li>
			<li>
			<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "sect",
		"AREA_FILE_SUFFIX" => "contact2"
	)
);?> </li>
			<li>
			<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "sect",
		"AREA_FILE_SUFFIX" => "contact3"
	)
);?> </li>
		</ul>
	</div>
	<ul class="contact-main-box">
		<li class="time">
		<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "sect",
		"AREA_FILE_SUFFIX" => "time-main"
	)
);?> </li>
	</ul>
	<ul class="contact-main-box align-items-start">
		<li class="e-mail">
		<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "sect",
		"AREA_FILE_SUFFIX" => "email-main"
	)
);?> </li>
		<li class="unp">
		<?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "sect",
		"AREA_FILE_SUFFIX" => "unp-main"
	)
);?> </li>
	</ul>
</div>
<p>
 <b><span class="golos-medium">Адрес:</span></b>
</p>
<p>
 <span class="golos-medium"><img width="15" src="/bitrix/templates/eshop_bootstrap_v4/images/location.png" height="21"><span class="regular">&nbsp;Республика Беларусь г. Минск, ул. П.Бровки 30, офис 29</span><br>
 </span>
</p>
<div class="mb-2 embed-responsive embed-responsive-16by9">
	 <?$APPLICATION->IncludeComponent(
	"bitrix:map.yandex.view",
	".default",
	Array(
		"API_KEY" => "",
		"COMPONENT_TEMPLATE" => ".default",
		"CONTROLS" => array(0=>"ZOOM",1=>"MINIMAP",2=>"TYPECONTROL",3=>"SCALELINE",),
		"INIT_MAP_TYPE" => "MAP",
		"MAP_DATA" => "a:3:{s:10:\"yandex_lat\";d:53.90533458950713;s:10:\"yandex_lon\";d:27.541218359866427;s:12:\"yandex_scale\";i:13;}",
		"MAP_HEIGHT" => "400",
		"MAP_ID" => "",
		"MAP_WIDTH" => "1288",
		"OPTIONS" => array(0=>"ENABLE_SCROLL_ZOOM",1=>"ENABLE_DBLCLICK_ZOOM",2=>"ENABLE_DRAGGING",)
	)
);?>
</div>
 <br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php")?>