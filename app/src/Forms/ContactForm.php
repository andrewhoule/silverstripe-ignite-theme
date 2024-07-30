<?php

namespace Forms;

use SilverStripe\Forms\Form;
use Models\ContactSubmission;
use SilverStripe\View\ArrayData;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\FormAction;
use SilverStripe\Control\Email\Email;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Control\RequestHandler;

class ContactForm extends Form
{

    public function __construct(RequestHandler $controller, $name)
    {
        parent::__construct(
            $controller,
            $name,
            $this->createFields(),
            $this->createActions(),
            $this->createRequired()
        );
    }

    protected function createFields()
    {
        $fields = FieldList::create(
            TextField::create('Name')
                ->setAttribute('Placeholder', 'Name *'),
            EmailField::create('Email')
                ->setAttribute('Placeholder', 'Email *'),
            TextareaField::create('Message')
                ->setAttribute('Placeholder', 'Message *')
        );

        return $fields;
    }

    protected function createActions()
    {
        return FieldList::create(
            FormAction::create('HandleForm', 'Send')
                ->setUseButtonTag(true)
        );
    }

    protected function createRequired()
    {
        return RequiredFields::create(
            'Name',
            'Email',
            'Message'
        );
    }

    public function HandleForm($data, $form, $request)
    {
        // Write the form data to the DB
        $submission = ContactSubmission::create();
        $form->saveInto($submission);
        $submission->write();

        // Email the form
        $config = SiteConfig::current_site_config();

        Email::create()
            ->setTo($config->Email)
            ->setFrom(['andrew@craftandfunction.com' => $config->Title])
            ->setSubject($config->Title . ' Contact Form Submission')
            ->setReplyTo($data['Email'])
            ->setHTMLTemplate('Email\\ContactEmail')
            ->setData(ArrayData::create([
                'Name' => $data['Name'],
                'Email' => $data['Email'],
                'Message' => $data['Message'],
            ]))
            ->send();

        $link = $current = $this->Controller->Link();

        // Using get page is better as it does not include the id of the element
        if ($this->controller->hasMethod('getPage')) {
            if ($page = $this->controller->getPage()) {
                $link = $page->Link();
            }
        }

        return $this->controller->redirect($link . '?success=1#contact-form');
    }

}
