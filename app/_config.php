<?php

use SilverStripe\Admin\CMSMenu;
use SilverStripe\Reports\ReportAdmin;
use SilverStripe\VersionedAdmin\ArchiveAdmin;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;

TinyMCEConfig::get('cms')
    ->enablePlugins('hr')
    ->setButtonsForLine(1, [
        'bold',
        'italic',
        '|',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        '|',
        'bullist',
        'numlist',
        '|',
        'sslink',
        'blockquote',
        'hr',
        '|',
        'pastetext',
        '|',
        'ssmedia',
        'ssembed',
        'code',
    ])
    ->setButtonsForLine(2, '');

// Hide Some CMS Admin Items
CMSMenu::remove_menu_class(ReportAdmin::class);
CMSMenu::remove_menu_class(ArchiveAdmin::class);
