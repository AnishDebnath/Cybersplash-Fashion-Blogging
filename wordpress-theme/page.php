<?php
/**
 * Generic Page Template
 */

get_header(); ?>

  <main id="primary" class="content-area">

    <?php while ( have_posts() ) : the_post(); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="entry-header">
          <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
        </div>

        <div class="entry-content">
          <?php the_content(); ?>
        </div>
      </article>

    <?php endwhile; ?>

  </main>

<?php get_footer(); ?>