<?php
/**
 * About Section Template Part
 * Maps to: App.tsx About component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <section class="elementor-section cybersplash-about"
      style="
        position: relative;
        width: 100%;
        height: 1062px;
        background: #ffffff;
        overflow: hidden;
        padding: 0;
      "
  >

    <!-- Glitter stars center -->
    <div class="cs-stars-about"
         style="
           position: absolute;
           left: 870.42px;
           top: 530.6px;
           width: 281.58px;
           height: 309.86px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/abb8c6.png') ?>"
           alt="Stars"
      />
    </div>

    <!-- Portrait left half -->
    <div class="cs-portrait-left"
         style="
           position: absolute;
           left: 0;
           top: 0;
           width: 1043.98px;
           height: 1062px;
           overflow: hidden;
           clip: rect(0 1043.98 1062 0);"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/a1b2ff.png') ?>"
           alt="Portrait"
           style="position: absolute; left: -1.31px; top: -3.87px; width: 1065.06px; height: 1065.06px; object-fit: cover;"
      />
    </div>

    <!-- Golden geometric line -->
    <div class="cs-geom-line-about"
         style="
           position: absolute;
           left: 1139.74px;
           top: 926.39px;
           width: 619.63px;
           height: 35.88px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/ad81b9.png') ?>"
           alt="Golden line"
      />
    </div>

    <!-- Gold border vintage -->
    <div class="cs-gold-border"
         style="
           position: absolute;
           left: 1246.78px;
           top: 993.43px;
           width: 405.55px;
           height: 37.34px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/aa9870.png') ?>"
           alt="Gold border"
      />
    </div>

    <!-- Gold divider -->
    <div class="cs-gold-divider"
         style="
           position: absolute;
           left: 1257.56px;
           top: 265.02px;
           width: 384px;
           height: 30.88px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/a3ca48.png') ?>"
           alt="Gold divider"
      />
    </div>

    <!-- Bouquet top-right -->
    <div class="cs-bouquet"
         style="
           position: absolute;
           right: 1715.29px;
           top: 0;
           width: 260.03px;
           height: 470.66px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/ae2eb5.png') ?>"
           alt="Bouquet"
      />
    </div>

    <!-- Gold abstract top -->
    <div class="cs-abstract-top"
         style="
           position: absolute;
           left: 492.22px;
           top: -270.99px;
           width: 245.44px;
           height: 341.48px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/a11571.png') ?>"
           alt="Abstract"
      />
    </div>

    <!-- Star confetti center-right -->
    <div class="cs-star-confetti-rc"
         style="
           position: absolute;
           right: 1044px;
           top: 0;
           width: 288.91px;
           height: 369.75px;
           overflow: hidden;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/a4b1b4.png') ?>"
           alt="Star confetti"
           style="position: absolute; left: -250.71px; top: 0; width: 539.63px; height: 377.06px; object-fit: contain;"
      />
    </div>

    <!-- Confetti explosion bottom-right -->
    <div class="cs-confetti-br"
         style="
           position: absolute;
           right: 1629.04px;
           top: 737.25px;
           width: 432.53px;
           height: 414.16px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/aa0d31.png') ?>"
           alt="Confetti"
      />
    </div>

    <!-- About text -->
    <div class="cs-about-text"
         style="
           position: absolute;
           left: 1335.25px;
           right: 229.43px;
           top: 60px;
           font-family: 'Lora';
           font-style: italic;
           font-size: 84.3; line-height: '105.42px';
           color: #dd72a6;
           text-align: center;
           width: 360px;"
      >
      <p style="margin: 0, width: 360;">About</p>
    </div>

    <div class="cs-about-title"
         style="
           position: absolute;
           left: 1214.75px;
           right: 109.93px;
           top: 166px;
           font-family: 'Lora';
           font-style: italic;
           font-size: 84.3; line-height: '105.42px';
           color: #dd72a6;
           text-align: center;
           width: 580px;"
      >
      <p style="margin: 0, width: 580;">Cybersplash</p>
    </div>

    <div class="cs-about-platform"
         style="
           position: absolute;
           left: 1149.91px;
           right: 179.05px;
           top: 580px;
           font-family: 'Alice';
           font-style: italic;
           font-size: 35; line-height: '48px';
           color: #000;
           text-align: center;"
    >
      <p style="margin: 0, border-style: none; border-color: rgba(0,0,0,0);">Cybersplash is a modern</p>
      <p style="margin: 0;">fashion and lifestyle platform</p>
      <p style="margin: 0;">for women who embrace</p>
      <p style="margin: 0;">elegance, confidence, and</p>
      <p style="margin: 0;">individuality. We curate the</p>
      <p style="margin: 0;">latest trends, styling ideas,</p>
      <p style="margin: 0;">and inspiring stories to help</p>
      <p style="margin: 0;">you express your personal</p>
      <p style="margin: 0;">style effortlessly.</p>
    </div>

  </section>

<?php endif; ?>