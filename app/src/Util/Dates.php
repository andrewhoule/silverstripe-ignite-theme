<?php

namespace Util;

class Dates
{

    static function ShortDate($date)
    {
        return $date->Format('LLL d');
    }

    static function FullDate($date)
    {
        return $date->Format('LLL d, y');
    }

}
