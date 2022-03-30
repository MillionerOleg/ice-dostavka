<?php
	Class star_owlcarousel extends CModule {
		var $MODULE_ID = "star.owlcarousel";
		var $MODULE_VERSION;
		var $MODULE_VERSION_DATE;
		var $MODULE_NAME;
		var $MODULE_DESCRIPTION;
		var $MODULE_GROUP_RIGHTS = "N";
		var $PARTNER_NAME;
		var $PARTNER_URI;

		function star_owlcarousel() {
			IncludeModuleLangFile(__FILE__);
			include(dirname(__FILE__)."/version.php");

			$this->MODULE_VERSION = $arModuleVersion["VERSION"];
			$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
			$this->MODULE_NAME = GetMessage("STAR_OWLCAROUSEL_MODULE_NAME");
			$this->MODULE_DESCRIPTION = GetMessage("STAR_OWLCAROUSEL_MODULE_DESC");

			$this->PARTNER_NAME = GetMessage("STAR_OWLCAROUSEL_PARTNER_NAME");
			$this->PARTNER_URI = GetMessage("STAR_OWLCAROUSEL_PARTNER_URI");
		}

		function InstallFiles() {
			CopyDirFiles($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/".$this->MODULE_ID."/install/components", $_SERVER["DOCUMENT_ROOT"]."/bitrix/components", true, true);
			return true;
		}

		function UnInstallFiles() {
			DeleteDirFilesEx("/bitrix/components/star/owlcarousel/");
			return true;
		}

		function DoInstall() {
			$this->InstallFiles();
			RegisterModule($this->MODULE_ID);
		}
	 
		function DoUninstall() {
			$this->UnInstallFiles();
			UnRegisterModule($this->MODULE_ID);
		}
	}
?>