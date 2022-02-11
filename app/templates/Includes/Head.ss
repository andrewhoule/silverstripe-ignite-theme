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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><% if ID == "1" %>$SiteConfig.Title<% if $SiteConfig.Tagline %> | $SiteConfig.Tagline<% end_if %><% else %>$MenuTitle | $SiteConfig.Title<% end_if %></title>

  <!-- CSS -->
  <% if $IsLive %>
    <link rel="stylesheet" href="dist/index.css?v=1">
  <% else %>
    <link rel="stylesheet" href="dist/index.css?v=$Now">
  <% end_if %>

  <!-- Icons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
</head>
