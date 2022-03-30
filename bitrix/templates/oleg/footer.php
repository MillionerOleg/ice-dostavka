<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);
?>
			</div>
		</div>
		<div id="space-for-footer" class="container-fluid"></div>
	</div>
<div class="footer-bg container-fluid">
	<div id="footer" class="container">
		<div class="footer-top row w-100 text-center">
			<h1 class="footer-title col-12">Заказать разработку сайта</h1>
			<div class="f-description col-12">
				<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => SITE_TEMPLATE_PATH."footer/f-description.php", 
						"AREA_FILE_SUFFIX" => "f-description", 
						"AREA_FILE_RECURSIVE" => "Y", 
					)
				);?>
			</div>
			<div class="white-line w-100"></div>
		</div>
		<div class="footer-med row w-100">
			<div class="f-box col-12 col-lg-6">
				<div class="mini-title w-100">
					<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_TEMPLATE_PATH."footer/mini-title.php", 
							"AREA_FILE_SUFFIX" => "mini-title", 
							"AREA_FILE_RECURSIVE" => "Y", 
						)
					);?>
				</div>
				<div class="d-flex flex-column flex-sm-row">
					<div class="col-12 col-sm-6 contacts-box d-inline">
						<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_TEMPLATE_PATH."footer/contacts-box.php", 
								"AREA_FILE_SUFFIX" => "contacts-box", 
								"AREA_FILE_RECURSIVE" => "Y", 
							)
						);?>
						<div class="f-telephone">
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "file",
									"PATH" => SITE_TEMPLATE_PATH."footer/f-telephone.php", 
									"AREA_FILE_SUFFIX" => "f-telephone", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
							);?>
						</div>
					</div>
					<div class="col-12 col-sm-6 contacts-box d-inline">
						<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_TEMPLATE_PATH."footer/contacts-box2.php", 
								"AREA_FILE_SUFFIX" => "contacts-box2", 
								"AREA_FILE_RECURSIVE" => "Y", 
							)
						);?>
						<div class="f-telephone">
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "file",
									"PATH" => SITE_TEMPLATE_PATH."footer/f-telephone2.php", 
									"AREA_FILE_SUFFIX" => "f-telephone2", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
							);?>
						</div>
					</div>
				</div>
			</div>
			<div class="f-box col-12 col-sm-6 col-lg-3">
				<div class="mini-title w-100">
					<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_TEMPLATE_PATH."footer/mini-title2.php", 
							"AREA_FILE_SUFFIX" => "mini-title2", 
							"AREA_FILE_RECURSIVE" => "Y", 
						)
					);?>
				</div>
				<div class="col-12 contacts-box">
					<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_TEMPLATE_PATH."footer/contacts-box3.php", 
							"AREA_FILE_SUFFIX" => "contacts-box3", 
							"AREA_FILE_RECURSIVE" => "Y", 
						)
					);?>
					<div class="f-telephone">
						<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_TEMPLATE_PATH."footer/f-telephone3.php", 
								"AREA_FILE_SUFFIX" => "f-telephone3", 
								"AREA_FILE_RECURSIVE" => "Y", 
							)
						);?>
					</div>
				</div>
			</div>
			<div class="f-box col-12 col-sm-6 col-lg-3 p-lg-0">
				<div class="mini-title w-100">
					<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
							"AREA_FILE_SHOW" => "file",
							"PATH" => SITE_TEMPLATE_PATH."footer/mini-title3.php", 
							"AREA_FILE_SUFFIX" => "mini-title3", 
							"AREA_FILE_RECURSIVE" => "Y", 
						)
					);?>
				</div>
				<div class="col-12 p-0 contacts-box">
					<div class="col-12 social d-flex justify-content-center pb-2">
						<a href="https://vk.com/redline_web" target="_blank" rel="nofollow"><i class="fa fa-vk  float" aria-hidden="true"></i></a>
						<a href="https://www.instagram.com/redline_web/" target="_blank" rel="nofollow"><i class="fa fa-instagram  float" aria-hidden="true"></i></a>
						<a href="https://www.facebook.com/redline.by/" target="_blank" rel="nofollow"><i class="fa fa-facebook-f  float" aria-hidden="true"></i></a>
						<a href="https://www.linkedin.com/in/вебстудия-redline-a96a9a114" target="_blank" rel="nofollow"><i class="fa fa-linkedin-in  float" aria-hidden="true"></i></a>
					</div>
					<div class="f-images col-12 p-0">
						<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
								"AREA_FILE_SHOW" => "file",
								"PATH" => SITE_TEMPLATE_PATH."footer/f-images.php", 
								"AREA_FILE_SUFFIX" => "f-images", 
								"AREA_FILE_RECURSIVE" => "Y", 
							)
						);?>
					</div>
					<div class="footer-design col-12 d-flex mt-4 mt-lg-2 mb-4 mb-lg-0">
						<div class="redline">
							<a href="#" ><img src="<?=SITE_TEMPLATE_PATH?>/images/redline.svg" class="img-fluid" alt=""></a>
						</div>
						<div class="col p-0 ml-3">
							<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
									"AREA_FILE_SHOW" => "file",
									"PATH" => SITE_TEMPLATE_PATH."footer/footer-design.php", 
									"AREA_FILE_SUFFIX" => "footer-design", 
									"AREA_FILE_RECURSIVE" => "Y", 
								)
							);?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom row w-100">
			<div class="bottom-box col-12 col-lg-6">
				<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => SITE_TEMPLATE_PATH."footer/bottom-box.php", 
						"AREA_FILE_SUFFIX" => "bottom-box", 
						"AREA_FILE_RECURSIVE" => "Y", 
					)
				);?>
			</div>
			<div class="bottom-box d-flex justify-content-centet align-items-center col-12 col-lg-6 mt-4 mt-lg-0 mb-4 mb-lg-0">
				<?$APPLICATION->IncludeComponent("bitrix:main.include","",Array(
						"AREA_FILE_SHOW" => "file",
						"PATH" => SITE_TEMPLATE_PATH."footer/bottom-box2.php", 
						"AREA_FILE_SUFFIX" => "bottom-box2", 
						"AREA_FILE_RECURSIVE" => "Y", 
					)
				);?>
			</div>
		</div>
		<div class="nav-arrow row w-100">

		</div>
		<!-- <div id="footer-design"><?=GetMessage("FOOTER_DISIGN")?> -->
	</div>
	</div>
</div>
</body>
</html>