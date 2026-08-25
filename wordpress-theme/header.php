<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <header id="masthead" class="site-header">
    <div class="container">
      <nav class="site-navigation" role="navigation">
        <?php
          wp_nav_menu( [
            'theme_location' => 'primary',
            'menu_class'     => 'main-navigation',
          ] );
        ?>
      </nav>
    </div>
  </header><!-- #masthead -->
</body>
</html>