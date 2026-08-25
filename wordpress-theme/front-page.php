<?php
/**
 * Template Name: Homepage
 * Elementor Front Page
 */

get_header(); ?>

  <main id="primary" class="content-area">

    <!-- Hero Section -->
    <?php get_template_part( 'template-parts/sections/hero' ); ?>

    <!-- Editorial Section -->
    <?php get_template_part( 'template-parts/sections/editorial' ); ?>

    <!-- Latest Stories Section -->
    <?php get_template_part( 'template-parts/sections/latest-stories' ); ?>

    <!-- Style Categories Section -->
    <?php get_template_part( 'template-parts/sections/style-categories' ); ?>

    <!-- About Section -->
    <?php get_template_part( 'template-parts/sections/about' ); ?>

    <!-- Instagram Section -->
    <?php get_template_part( 'template-parts/sections/instagram' ); ?>

    <!-- Newsletter Section -->
    <?php get_template_part( 'template-parts/sections/newsletter' ); ?>

  </main>

<?php get_footer(); ?>