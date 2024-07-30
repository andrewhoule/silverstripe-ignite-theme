<?php

namespace Util;

use SilverStripe\Control\Director;
use SilverStripe\Control\Controller;
use SilverStripe\SiteConfig\SiteConfig;

class Meta
{

    static function getMetaTitle($item)
   	{
        if ($item->MetaTitle) {
            return $item->MetaTitle;
        } else {
            return $item->Title;
        }
    }

    static function getMetaLink($item)
   	{
        $itemLink = $item->Link();

        if ($itemLink) {
            return Controller::join_links(
                Director::absoluteBaseURL(),
                $itemLink
            );
        }
    }

    static function getMetaDescription($item)
   	{
        $config = SiteConfig::current_site_config();

        if ($item->MetaDescription) {
            return $item->MetaDescription;
        } else {
            return $item->Title . ' | ' . $config->Title;
        }
    }

    static function getMetaImage($item)
   	{
        $config = SiteConfig::current_site_config();

        if ($item->hasMethod('MetaPhoto') && $item->MetaPhoto()->exists()) {
            return Controller::join_links(
                Director::AbsoluteBaseURL(),
                $item->MetaPhoto()->Fill(1200,1200)->URL
            );
        } elseif ($item->hasMethod('Photo') && $item->Photo()->exists()) {
            return Controller::join_links(
                Director::AbsoluteBaseURL(),
                $item->Photo()->Fill(1200,1200)->URL
            );
        } elseif ($config->hasMethod('DefaultMetaPhoto') && $config->DefaultMetaPhoto()->exists()) {
            return Controller::join_links(
                Director::AbsoluteBaseURL(),
                $config->DefaultMetaPhoto()->Fill(1200,1200)->URL
            );
        } else {
            return false;
        }
    }

}
