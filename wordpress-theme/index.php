<?php
/**
 * Index Template
 * Used when no other template matches.
 */

get_header(); ?>

  <main id="primary" class="content-area">

    <?php

    if ( have_posts() ) :

      /* Start the Loop */
      while ( have_posts() ) : the_post();

        /* Include the content template part */
        get_template_part( 'template-parts/content', get_post_format() );

      /* End the loop */
      endwhile;

    else :

      // If no content, show the "not found" template.
      get_template_part( 'template-parts/content', 'none' );

    endif; ?>

  </main>

<?php get_footer(); ?>