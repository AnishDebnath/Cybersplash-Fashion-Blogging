<?php
/**
 * Editorial Section Template Part
 * Maps to: React App.tsx Editorial component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <section class="elementor-section cybersplash-editorial"
      style="
        position: relative;
        width: 100%;
        height: 1635px;
        background: #fffff9;
        overflow: hidden;
        padding: 0;
      "
  >

    <!-- Editorial photo -->
    <div class="cs-editorial-photo"
         style="
           position: absolute;
           left: 33.46px;
           top: 0;
           width: 1853.08px;
           height: 1191.91px;
           overflow: hidden;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/aa62e.png') ?>"
           alt="Editorial fashion photo"
           style="position: absolute; left: 0; top: -137.58px; width: 1853.06px; height: 1362px; object-fit: cover;"
      />
    </div>

    <!-- Gold leaf left -->
    <div class="cs-gold-leaf"
         style="
           position: absolute;
           left: 112.67px;
           top: 1215.92px;
           width: 169.58px;
           height: 418.73px;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/10437.png') ?>"
           alt="Gold leaf"
      />
    </div>

    <!-- Sparkles right -->
    <div class="cs-sparkles-right"
         style="
           position: absolute;
           right: 1617.82px;
           top: 1215.71px;
           width: 302.17px;
           height: 418.95px;
           overflow: hidden;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/e41910.png') ?>"
           alt="Sparkles"
           style="position: absolute; left: -21.99px; top: 0; width: 346.16px; height: 418.95px; object-fit: contain;"
      />
    </div>

    <!-- Star confetti bottom-left -->
    <div class="cs-star-confetti"
         style="
           position: absolute;
           left: -279.54px;
           top: 1323.65px;
           width: 561.8px;
           height: 470.22px;
           overflow: hidden;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/4b1b4.png') ?>"
           alt="Star confetti"
           style="position: absolute; left: -55.58px; top: 0; width: 672.95px; height: 470.22px; object-fit: contain;"
      />
    </div>

    <!-- Golden geometric line -->
    <div class="cs-geom-line"
         style="
           position: absolute;
           left: 599.74px;
           top: 1558.76px;
           width: 768px;
           height: 44.47px;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/d81b9.png') ?>"
           alt="Golden geometric line"
      />
    </div>

    <!-- Date label -->
    <div class="cs-date-label"
         style="
           position: absolute;
           left: 724.78px;
           top: 1212.9px;
           font-family: 'Inter', font-size: 28.1, letter-spacing: '6.92px';
           color: #000;
           text-align: center;
         "
    >
      <p style="margin: 0;">MARCH 2026 — FASHION</p>
    </div>

    <!-- Title -->
    <div class="cs-editorial-title"
         style="
           position: absolute;
           left: 421.29px;
           right: 379.18px;
           top: 1330px;
           font-family: 'Lora';
           font-style: italic;
           font-size: 64; line-height: '89px';
           color: #dd72a6;
           text-align: center;
         "
    >
      <p style="margin: 0;">The Return of Effortless Elegance</p>
    </div>

    <!-- Description -->
    <div class="cs-editorial-desc"
         style="
           position: absolute;
           left: 296.73px;
           right: 234.39px;
           top: 1468px;
           font-family: 'Alice';
           font-size: 29; line-height: '40px';
           color: #000;
           text-align: center;
         "
    >
      <p style="margin: 0;">Fashion trends may come and go, but true elegance remains timeless. This season</p>
      <p style="margin: 0;">embraces soft tones, minimal silhouettes, and confident simplicity that defines modern</p>
      <p style="margin: 0;">style.</p>
    </div>

  </section>

<?php endif; ?>