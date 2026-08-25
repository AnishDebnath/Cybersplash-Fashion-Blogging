<?php
/**
 * Hero Section Template Part
 * Maps to: App.tsx Hero component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <section class="elementor-section cybersplash-hero"
      style="
        position: relative;
        width: 100%;
        height: 3606px;
        background: #ffffff;
        overflow: hidden;
        padding: 0;
      "
  >

    <!-- Corner border top-left -->
    <div class="cs-corner cs-corner-tl"
         style="
           position: absolute;
           left: 0;
           top: 0;
           width: 421.59px;
           height: 421.77px;
           background: #fff;
         "
    ></div>

    <!-- Corner border top-right (mirrored) -->
    <div class="cs-corner cs-corner-tr"
         style="
           position: absolute;
           right: 0;
           top: 0;
           width: 421.59px;
           height: 421.77px;
           transform: scaleX(-1);
           background: #fff;
         "
    ></div>

    <!-- Carousel -->
    <div class="cs-hero-carousel"
         style="
           position: absolute;
           left: 0;
           top: 817px;
           width: 100%;
           height: 960px;
           overflow: hidden;
         "
    >
      {/* Slides with zoom/fade animation */}
    </div>

    <!-- Navigation -->
    <nav class="cs-nav"
         style="
           position: absolute;
           left: 0;
           top: 696.21px;
           transform: translateY(-50%);
         "
    >
      <?php
      $nav_items = [
        ['label' => 'HOME',    'left' => 235.25],
        ['label' => 'FASHION', 'left' => 434.16],
        ['label' => 'BEAUTY',  'left' => 688.61],
        ['label' => 'LIFESTYLE', 'left' => 924.41, 'tracking' => '3.3733px'],
        ['label' => 'ABOUT',   'left' => 1197.39],
        ['label' => 'CONTACT', 'left' => 1405.57],
      ];

      foreach ( $nav_items as $item ) : ?>
        <span class="cs-nav-item"
              style="
                position: absolute;
                left: <?= esc_attr( $item['left'] ) ?>px;
                top: 696.21px;
                transform: translateY(-50%);
                font-family: 'Arimo', font-size: 33.7, line-height: '46.383px';
                letter-spacing: <?= esc_attr( $item['tracking'] ?? '7.4214px' ) ?>;
                text-align: center;
              "
        >
          <?= esc_html( $item['label'] ) ?>
        </span>
      <?php endforeach; ?>
    </nav>

    <!-- Text layers from React hero -->
    <div class="cs-hero-text"
         style="
           position: absolute;
           left: 9.04px;
           right: 1480.5px;
           top: 2346px;
           transform: translateY(-50%);
           font-family: 'Alice', font-size: 50, line-height: '69px';
           color: #fff;
         "
    >
      <p style="margin: 0;">Elegant Neutral</p>
      <p style="margin: 0;">Looks</p>
    </div>

  </section>

<?php endif; ?>