<?php

namespace Extensions;

use SilverStripe\Core\Extension;

class LinkExtension extends Extension
{

    public function getTargetAttr()
    {
        if ($this->owner->OpenInNew) {
            return 'target=_blank';
        }
    }

}
