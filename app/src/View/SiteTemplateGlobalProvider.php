<?php

namespace View;

use Util\Util;
use SilverStripe\View\TemplateGlobalProvider;

class SiteTemplateGlobalProvider implements TemplateGlobalProvider
{

    public static function get_template_global_variables()
    {
        return [
            'TextEmphasize' => [
                'method' => 'TextEmphasize',
                'casting' => 'HTMLFragment',
            ]
        ];
    }

    public static function TextEmphasize($text, $tag = 'span')
    {
        return Util::emphasize($text, $tag);
    }

}
