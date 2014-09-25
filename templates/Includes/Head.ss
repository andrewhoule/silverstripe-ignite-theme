<!DOCTYPE html>
<html lang="$ContentLocale">
<head>
    <% base_tag %>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><% if ID == "1" %>$SiteConfig.Title | $SiteConfig.Tagline<% else %>$Title | $SiteConfig.Title<% end_if %></title>
    <meta name="description" content="$SiteConfig.Title - $SiteConfig.Tagline">
    <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0">
    <!-- CSS -->
    <link rel="stylesheet" href="$Themedir/css/style.css">
    <!-- JS -->
    <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <!-- Icons -->
    <link rel="shortcut icon" href="/favicon.ico" />
</head>