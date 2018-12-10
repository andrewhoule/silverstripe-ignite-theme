<!doctype html>
<html lang="$ContentLocale">
<head>
  <!-- Meta -->
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
  <meta name="twitter:site" content="@twitter">
  <meta name="twitter:title" content="$MenuTitle">
  <meta name="twitter:description" content="<% if $MetaDescription %>$MetaDescription<% else %>$SiteConfig.Title - $SiteConfig.Tagline<% end_if %>">
  <meta name="twitter:url" content="$AbsoluteLink">
  <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0">
  <title><% if ID == "1" %>$SiteConfig.Title<% if $SiteConfig.Tagline %> | $SiteConfig.Tagline<% end_if %><% else %>$MenuTitle | $SiteConfig.Title<% end_if %></title>

  <!-- CSS -->
  <link rel="stylesheet" href="dist/bundle.css">

  <!-- Icons -->
  <link rel="shortcut icon" href="{$AbsoluteBaseURL}favicon.ico">
</head>
