<?php

namespace {

    use SilverStripe\Control\Director;
    use SilverStripe\CMS\Controllers\ContentController;

    class PageController extends ContentController
    {

        public function IsLive()
        {
            return Director::isLive();
        }

        public function ClassNameSlug()
        {
            $items = explode('\\', $this->ClassName);
            return array_values(array_slice($items, -1))[0];
        }

        public function CSSClassName()
        {
            return strtolower($this->ClassNameSlug());
        }

    }
}
