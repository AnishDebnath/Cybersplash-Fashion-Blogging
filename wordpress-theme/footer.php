<footer id="colophon" class="site-footer">
  <div class="container">
    <div class="site-info">
      <?php
        wp_nav_menu( [
          'theme_location' => 'footer',
          'menu'           => 'footer-menu',
        ] );
      ?>
      <div class="site-copyright">
        <span><?php printf( esc_html__( 'Cybersplash Fashion %s', 'cybersplash' ), date( 'Y' ) ); ?></span>
      </div>
    </div>
  </div>
</footer><!-- #colophon -->

<?php wp_footer(); ?>
</body>
</html>