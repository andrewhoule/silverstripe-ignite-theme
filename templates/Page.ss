<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><% if ID == "1" %>$SiteConfig.Title | $SiteConfig.Tagline<% else %>$SiteConfig.Title | $Title<% end_if %></title>
        <meta name="description" content="$SiteConfig.Title - $SiteConfig.Tagline">
        <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />

        <!-- CSS -->
        <link rel="stylesheet" href="$Themedir/stylesheets/css/style.css">
        <!--[if IE 8]><link rel="stylesheet" href="$Themedir/stylesheets/css/ie8.css" /><![endif]-->
        <!--[if lt IE 8]><link rel="stylesheet" href="$Themedir/stylesheets/css/ie7.css" /><![endif]-->

        <!-- JS -->
        <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

        <!-- Icons -->
        <link rel="shortcut icon" href="$Themedir/images/favicon.ico" />

    </head>
    <body>
        <header id="branding">

        </header><!-- branding -->

        <section id="main-content" class="template-content">
            $Layout
        </section><!-- main-content -->

        <footer id="site-info">

        </footer><!-- site-info -->
        
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script src="$Themedir/js/vendor/respond.min.js"></script>
        <script src="$Themedir/js/functions.js"></script>
    </body>
</html>
