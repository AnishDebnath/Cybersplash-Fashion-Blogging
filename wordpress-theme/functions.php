<?php
/**
 * Cybersplash Fashion - Functions
 * Theme setup and asset enqueueing
 */

if ( function_exists( 'add_theme_support' ) ) {

  // Post thumbnails
  add_theme_support( 'post-thumbnails' );

  // Menus
  register_nav_menus( [
    'primary' => esc_html__( 'Primary Menu', 'cybersplash' ),
  ] );

  // Elementor compatibility - content width
  if ( ! isset( $content_width ) ) {
    $content_width = 1920;
  }

  // WordPress block styles
  add_theme_support( 'wp-block-styles' );

  // Editor styles
  add_theme_support( 'editor-stylesheet' );
  add_theme_support( 'editor-font-sizes', [
    [
      'name' => 'Small',
      'size' => 13,
      'slug' => 'small',
    ],
    [
      'name' => 'Medium',
      'size' => 20,
      'slug' => 'medium',
    ],
    [
      'name' => 'Large',
      'size' => 36,
      'slug' => 'large',
    ],
    [
      'name' => 'H2 Size',
      'size' => 44,
      'slug' => 'h2',
    ],
    [
      'name' => 'H3 Size',
      'size' => 60,
      'slug' => 'h3',
    ],
  ] );
  add_theme_support( 'editor-color-palette', [
    [
      'name' => 'Primary',
      'color' => '#dd72a6',
      'slug' => 'primary',
    ],
    [
      'name' => 'Secondary',
      'color' => '#c1536b',
      'slug' => 'secondary',
    ],
    [
      'name' => 'Background',
      'color' => '#fffff9',
      'slug' => 'background',
    ],
    [
      'name' => 'Dark',
      'color' => '#333',
      'slug' => 'dark',
    ],
  ] );
}

// Enqueue styles
function cybersplash_styles() {

  // Google fonts
  wp_enqueue_style(
    'cybersplash-fonts',
    'https://fonts.googleapis.com/css2?family=Alice&family=Lora:ital,wght@0,400;0,700;1,400&family=Arimo:wght@400;700&family=Cinzel+Decorative:wght@700&family=Inter:wght@400;700&family=Alex+Brush&display=swap',
    [],
    null
  );

  // Main theme stylesheet
  wp_enqueue_style(
    'cybersplash-style',
    get_stylesheet_uri(),
    [],
    '1.0.0'
  );

  // Elementor style fallback
  if ( function_exists( 'elementor' ) ) {
    wp_enqueue_style( 'elementor-frontend' );
  }
}
add_action( 'wp_enqueue_scripts', 'cybersplash_styles' );

// Enqueue scripts
function cybersplash_scripts() {

  // Main theme JS
  wp_enqueue_script(
    'cybersplash-main',
    get_template_directory_uri() . '/assets/js/main.js',
    [ 'jquery' ],
    '1.0.0',
    true
  );

  // Alpine.js for simple interactivity if needed
  wp_enqueue_script(
    'cybersplash-alpine',
    'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
    [],
    '3.0.0',
    true
  );

  // Elementor frontend script
  if ( function_exists( 'elementor' ) ) {
    wp_enqueue_script( 'elementor-frontend' );
  }
}
add_action( 'wp_enqueue_scripts', 'cybersplash_scripts' );

// Customizer settings
function cybersplash_customizer( $wp_customize ) {

  // Color palette
  $wp_customize->add_setting( 'cybersplash_primary_color', [
    'default' => '#dd72a6',
    'sanitize_callback' => 'sanitize_hex_color',
  ] );

  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'cybersplash_primary_color', [
    'label' => esc_html__( 'Primary Color', 'cybersplash' ),
    'section' => 'colors',
  ] ) );

  // Background color
  $wp_customize->add_setting( 'cybersplash_bg_color', [
    'default' => '#fffff9',
    'sanitize_callback' => 'sanitize_hex_color',
  ] );

  $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'cybersplash_bg_color', [
    'label' => esc_html__( 'Background Color', 'cybersplash' ),
    'section' => 'colors',
  ] ) );
}
add_action( 'customize_register', 'cybersplash_customizer' );

// Register sidebars
function cybersplash_widgets_init() {
  register_sidebar( [
    'name'          => esc_html__( 'Sidebar', 'cybersplash' ),
    'id'            => 'sidebar-1',
    'description'   => esc_html__( 'Widgets in the sidebar area', 'cybersplash' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ] );
}
add_action( 'widgets_init', 'cybersplash_widgets_init' );
?>