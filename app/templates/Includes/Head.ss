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
    <link rel="stylesheet" href="dist/app.css?v=1">
  <% else %>
    <link rel="stylesheet" href="dist/app.css?v=$Now">
  <% end_if %>

  <!-- Icons -->
  <link rel="icon" href="favicon.svg">
  <link rel="mask-icon" href="mask-icon.svg" color="#01304A">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <meta name="theme-color" content="#01304A">
  <link rel="manifest" href="manifest.json">
</head>
