<?php
/**
 * Hero Section Template Part
 * Maps to: React App.tsx Hero component
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

    <!-- Hero Carousel -->
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
      {/* Slide 1 */}
      <div style="
        position: absolute;
        inset: 0;
        overflow: hidden;
        opacity: 1;
        transition: opacity 1s ease;
      ">
        <img
          src="<?= esc_url( get_template_directory_uri() . '/assets/images/62320.png') ?>"
          alt="Hero Slide 1"
          style="width: 100%; height: 100%; object-fit: cover; display: block; transform-origin: center;"
        />
      </div>

      {/* Slide 2 */}
      <div style="
        position: absolute;
        inset: 0;
        overflow: hidden;
        opacity: 0;
        transition: opacity 1s ease;
      ">
        <img
          src="<?= esc_url( get_template_directory_uri() . '/assets/images/94f52.png') ?>"
          alt="Hero Slide 2"
          style="width: 100%; height: 100%; object-fit: cover; display: block;"
        />
      </div>

      {/* Slide 3 */}
      <div style="
        position: absolute;
        inset: 0;
        overflow: hidden;
        opacity: 0;
        transition: opacity 1s ease;
      ">
        <img
          src="<?= esc_url( get_template_directory_uri() . '/assets/images/038a6.png') ?>"
          alt="Hero Slide 3"
          style="width: 100%; height: 100%; object-fit: cover; display: block;"
        />
      </div>
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

    <!-- Text content -->
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

    <!-- Bottom gold divider -->
    <div style="
      position: absolute;
      bottom: 0;
      left: '50%';
      transform: translateX(-50%);
      width: 500;
      height: 3;
      background: linear-gradient(to right, transparent, #c9a96e 40%, #c9a96e 60%, transparent);
    " />
  </section>

<?php endif; ?>