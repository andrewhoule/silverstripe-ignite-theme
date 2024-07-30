<?php

namespace Traits;

use SilverStripe\Security\Permission;

trait OnlyAdminCanCreate
{

    public function canCreate($member = null, $context = [])
    {
        if (Permission::checkMember($member, 'ADMIN')) {
            return true;
        }
    }

}
