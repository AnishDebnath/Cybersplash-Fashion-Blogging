<?php
/**
 * Instagram Section Template Part
 * Maps to: React App.tsx Instagram component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <section class="elementor-section cybersplash-instagram"
      style="
        position: relative;
        width: 100%;
        height: 1741px;
        background: #ffffff;
        overflow: hidden;
        padding: 0;"
    >

    <!-- Gold border top-center -->
    <div class="cs-gold-border-ic"
         style="
           position: absolute;
           left: 616.29px;
           top: 289.15px;
           width: 686.05px;
           height: 63.17px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/a9870.png') ?>"
           alt="Gold border"
      />
    </div>

    <!-- Glitter stars top-left -->
    <div class="cs-glitter-stars-ic"
         style="
           position: absolute;
           left: 236.67px;
           top: 241.01px;
           width: 281.58px;
           height: 309.86px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/bb8c6.png') ?>"
           alt="Glitter stars"
      />
    </div>

    <!-- Three portrait photos -->
    <div class="cs-portrait-3"
         style="position: relative; top: 415.36px;"
    >
      <div class="cs-portrait-card"
           style="width: 639.54px; height: 724.83px; overflow: hidden; clip: rect(0 639.54 1136.96 0);"
         >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/e3a76.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -206.05px; width: 639.54px; height: 1136.96px; object-fit: cover;"
        />
      </div>

      <div class="cs-portrait-card"
           style="width: 639.54px; height: 724.83px; overflow: hidden; clip: rect(0 639.54 1136.96 0);"
         >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/f7dab.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -206.05px; width: 639.54px; height: 1136.96px; object-fit: cover;"
        />
      </div>

      <div class="cs-portrait-card"
           style="width: 640.91px; height: 724.86px; overflow: hidden; clip: rect(0 640.91 1112.21 0);"
         >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/6bb39.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -193.67px; width: 640.91px; height: 1112.21px; object-fit: cover;"
        />
      </div>
    </div>

    <!-- Elegant gold line -->
    <div class="cs-gold-line-ig"
         style="
           position: absolute;
           left: 576px;
           top: 1203.48px;
           width: 768px;
           height: 30.72px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/a2e9e.png') ?>"
           alt="Gold line"
      />
    </div>

    <!-- Golden horizontal line -->
    <div class="cs-horiz-line-ig"
         style="
           position: absolute;
           left: 649.5px;
           top: 1654.74px;
           width: 619.63px;
           height: 35.88px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/d81b9.png') ?>"
           alt="Horizontal line"
      />
    </div>

    <!-- Instagram title -->
    <div class="cs-ig-title"
         style="
           position: absolute;
           left: 212.72px;
           right: 149.17px;
           top: 184.25px;
           font-family: 'Alex Brush';
           font-size: 120; line-height: '178px';
           color: #dd72a6;
           text-align: center;"
    >
      <p style="margin: 0;">Follow on instagram @cybersplash</p>
    </div>

    <!-- Follow tagline -->
    <div class="cs-ig-tagline"
         style="
           position: absolute;
           left: 479.89px;
           right: 475.21px;
           top: 1375px;
           font-family: 'Cinzel Decorative';
           font-weight: 700;
           font-size: 45; line-height: '63px';
           color: #dd72a6;
           letter-spacing: 4px;
           text-align: center;"
    >
      <p style="margin: 0, marginTop: 150;">FOLLOW US FOR DAILY</p>
      <p style="margin: 0;">FASHION INSPIRATION, BEAUTY</p>
      <p style="margin: 0;">TRENDS, AND STYLING IDEAS</p>
      <p style="margin: 0;">THAT ELEVATE YOUR EVERYDAY</p>
      <p style="margin: 0;">LOOK.</p>
    </div>

  </section>

<?php endif; ?>