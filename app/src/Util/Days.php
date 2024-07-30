<?php

namespace Util;

class Days
{

  	protected static $days = [
        'Monday' => 'Monday',
        'Tuesday' => 'Tuesday',
        'Wednesday' => 'Wednesday',
        'Thursday' => 'Thursday',
        'Friday' => 'Friday',
        'Saturday' => 'Saturday',
        'Sunday' => 'Sunday',
    ];

	static function getDaysDropdown()
	{
    	$dropdown = Self::$days;
    	return $dropdown;
  	}

}
