<?php

namespace Extensions;

use SilverStripe\ORM\DataExtension;

class LinkExtension extends DataExtension
{

    public function getTargetAttr()
    {
        if ($this->owner->OpenInNew) {
            return 'target=_blank';
        }
    }

}
