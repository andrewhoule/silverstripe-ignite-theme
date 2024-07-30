<?php

namespace Traits;

use SilverStripe\Security\Permission;

trait CMSPermissionProvider
{

    public function canCreate($member = null, $context = [])
    {
        return true;
    }

    public function canEdit($member = null, $context = [])
    {
        return true;
    }

    public function canDelete($member = null, $context = [])
    {
        return true;
    }

    public function canView($member = null, $context = [])
    {
        return true;
    }

    public function canPublish($member = null, $context = [])
    {
        return true;
    }

}
