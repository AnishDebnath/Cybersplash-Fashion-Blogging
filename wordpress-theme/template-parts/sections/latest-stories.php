<?php
/**
 * Latest Stories Section Template Part
 * Maps to: App.tsx LatestStories component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <section class="elementor-section cybersplash-latest-stories"
      style="
        position: relative;
        width: 100%;
        height: 3817px;
        background: #ffffff;
        overflow: hidden;
        padding: 0;
      "
  >

    <!-- Decorative assets -->
    <div class="cs-decorative-assets"
         style="
           position: absolute;
           top: 0;
           left: 1280px;
           width: 220px;
           height: 220px;
           opacity: 0.95;
           pointer-events: none;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/13dasd.png') ?>"
           alt="Decorative asset"
           style="object-fit: contain; object-position: center;"
      />
    </div>

    <!-- Top glitter stars -->
    <div class="cs-glitter-stars"
         style="
           position: absolute;
           left: 218.53px;
           top: -39.2px;
           width: 281.58px;
           height: 309.86px;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/sbb8c6.png') ?>"
           alt="Glitter stars"
      />
    </div>

    <!-- Sparkling glitter top-left -->
    <div class="cs-glitter-tl"
         style="
           position: absolute;
           left: -125.38px;
           top: -19.35px;
           width: 411.5px;
           height: 410.61px;
           overflow: hidden;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/sa238c.png') ?>"
           alt="Glitter"
           style="position: absolute; left: 0; top: -38.19px; width: 411.5px; height: 486.98px; object-fit: contain;"
      />
    </div>

    <!-- Title "Latest Stories" -->
    <div class="cs-stories-title"
         style="
           position: absolute;
           left: 506.31px;
           right: 605.77px;
           top: 89.2px;
           font-family: 'Lora';
           font-style: italic;
           font-size: 131.1; line-height: '147.584px';
           color: #c1536b;
           text-align: center;
         "
    >
      <p style="margin: 0;">Latest Stories</p>
    </div>

    <!-- Aesthetic golden line -->
    <div class="cs-golden-line"
         style="
           position: absolute;
           left: 717.98px;
           top: 176.15px;
           width: 384px;
           height: 19.52px;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/se83bf.png') ?>"
           alt="Golden line"
      />
    </div>

    <!-- Row 1 portraits -->
    <div class="cs-portrait-row"
         style="
           position: relative;
           top: 470.93px;
         "
    >
      <div class="cs-portrait-card"
           style="width: 603.38px; height: 685.8px; overflow: hidden; clip: rect(0 603.38 754.22 0);"
        >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/8bd87.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -34.2px; width: 603.38px; height: 754.22px; object-fit: cover;"
        />
      </div>

      <div class="cs-portrait-card"
           style="width: 603.38px; height: 773.59px; overflow: hidden; clip: rect(0 603.38 773.59 0);"
        >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/47efc.png') ?>"
             alt="Portrait"
             style="position: absolute; left: -7.27px; top: 0; width: 617.89px; height: 773.59px; object-fit: cover;"
        />
      </div>

      <div class="cs-portrait-card"
           style="width: 603.35px; height: 509.89px; overflow: hidden; clip: rect(0 603.35 509.89 0);"
        >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/sb2e79.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -165.26px; width: 603.35px; height: 739.19px; object-fit: cover;"
        />
      </div>
    </div>

    <!-- Article text -->
    <div class="cs-article-text"
         style="position: absolute; top: 313.56px;"
    >
      <div style="
        left: 91.61px;
        right: 1376.78px;
        top: 313.56px;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 22.1; line-height: '30.922px';
        color: #000;
        text-align: center;
        letter-spacing: 5.5323px;"
      >
        <p style="margin: 0;">MARCH 1, 2026 &#8211; LIFESTYLE</p>
      </div>

      <div style="
        left: 110.8px;
        right: 1401.54px;
        top: 396.75px;
        font-family: 'Lora';
        font-style: italic;
        font-size: 38; line-height: '42px';
        color: #dd72a6;
        text-align: center;"
      >
        <p style="margin: 0;">The Royal Aesthetic:</p>
        <p style="margin: 0;">Inspired Living</p>
      </div>

      <div style="
        left: 74.6px;
        right: 1365.33px;
        top: 1239.31px;
        font-family: 'Alice';
        font-size: 25; line-height: '34px';
        color: #000;
        text-align: center;"
      >
        <p style="margin: 0;">Step into a world of timeless</p>
        <p style="margin: 0;">elegance inspired by rich textures</p>
        <p style="margin: 0;">and graceful living.</p>
      </div>
    </div>

    <!-- Explore More button -->
    <div class="cs-explore-more"
         style="
           position: absolute;
           left: 711.9px;
           top: 3627.31px;
           width: 531.34px;
           height: 108.25px;
           background: linear-gradient(135deg, #dd72a6 0%, #c1536b 100%);
           border-radius: 60px;
           display: inline-flex;
           align-items: center;
           justify-content: center;
           gap: 18px;
           color: #fff;"
      >
      <span style="font-family: 'Arimo'; font-size: 28; letter-spacing: 5px; color: #fff;">EXPLORE MORE</span>
      <span style="font-size: 24; color: #fff;">→</span>
    </div>

  </section>

<?php endif; ?>