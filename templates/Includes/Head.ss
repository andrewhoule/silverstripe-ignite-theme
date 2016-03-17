<!doctype html>
<!--[if lt IE 7]> <html class="ie6" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="ie7" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="ie9" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->
<html lang="$ContentLocale">
<head>
  <% base_tag %>
  $MetaTags(false)
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="<% if $MetaDescription %>$MetaDescription<% else %>$SiteConfig.Title - $SiteConfig.Tagline<% end_if %>">
  <meta property="og:title" content="$MenuTitle">
  <meta property="og:url" content="$AbsoluteLink">
  <meta property="og:description" content="<% if $MetaDescription %>$MetaDescription<% else %>$SiteConfig.Title - $SiteConfig.Tagline<% end_if %>">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@andrewhoule">
  <meta name="twitter:title" content="$MenuTitle">
  <meta name="twitter:description" content="<% if $MetaDescription %>$MetaDescription<% else %>$SiteConfig.Title - $SiteConfig.Tagline<% end_if %>">
  <meta name="twitter:url" content="$AbsoluteLink">
  <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0">
  <title><% if ID == "1" %>$SiteConfig.Title<% if $SiteConfig.Tagline %> | $SiteConfig.Tagline<% end_if %><% else %>$MenuTitle | $SiteConfig.Title<% end_if %></title>
  <!-- CSS -->
  <link rel="stylesheet" href="$Themedir/css/layout.css">
  <!-- JS -->
  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- Icons -->
  <link rel="shortcut icon" href="/favicon.ico">
</head>