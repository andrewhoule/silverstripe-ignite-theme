<?php

namespace Util;

class Util
{

    public static function emphasize(string $text, string $tagName = 'span')
    {
        $startTag = "<{$tagName}>";
        $endTag = "</{$tagName}>";

        $formatted = str_replace('[', $startTag, trim($text));
        $formatted = str_replace(']', $endTag, trim($formatted));
        $formatted = str_replace('|', '<br>', trim($formatted));

        return trim($formatted);
    }

    public static function generateKebabCase(string $string)
    {
        $result = strtolower($string);
        $result = preg_replace("/[^a-z0-9_\s-]/", "", $result);
        $result = preg_replace("/[\s-]+/", " ", $result);
        $result = preg_replace("/[\s_]/", "-", $result);
        return $result;
    }

    public static function cleanPhoneNumber(string $number)
    {
        $clean = strtolower(trim(preg_replace('/(\s|\.|\-|\(|\))/', '', $number)));
        return preg_replace('/ext\.?/', 'x', $clean);
    }

    public static function CreateExcerpt($string, $length = 300)
    {
        $text = strip_tags($string);
        $length = abs((int)$length);

        if (strlen($text) > $length) {
            $text = preg_replace("/^(.{1,$length})(\s.*|$)/s", '\\1...', $text);
        }

        return $text;
    }

}
