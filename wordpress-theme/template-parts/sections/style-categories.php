<?php
/**
 * Style Categories Section Template Part
 * Maps to: React App.tsx StyleCategories component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <section class="elementor-section cybersplash-style-categories"
      style="
        position: relative;
        width: 100%;
        height: 1247px;
        background: #fffff9;
        overflow: hidden;
        padding: 0;
      "
  >

    <!-- Glitter stars -->
    <div class="cs-glitter-stars"
         style="
           position: absolute;
           left: 995.99px;
           top: -30.26px;
           width: 476.52px;
           height: 309.86px;
         "
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/bb8c6.png') ?>"
           alt="Glitter stars"
           style="position: absolute; left: 0; top: -107.26px; width: 476.52px; height: 524.36px; object-fit: contain;"
      />
    </div>

    <!-- Golden floral branch top-right -->
    <div class="cs-floral-branch"
         style="
           position: absolute;
           right: 1557.96px;
           top: 19.13px;
           width: 422.72px;
           height: 236.23px;
           overflow: hidden;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/528be.png') ?>"
           alt="Floral branch"
           style="position: absolute; left: -3.8px; top: -2.06px; width: 422.72px; height: 238.31px; object-fit: contain;"
      />
    </div>

    <!-- Golden geom line top-left -->
    <div class="cs-geom-line-tl"
         style="
           position: absolute;
           left: 158.33px;
           top: 166.17px;
           width: 553.56px;
           height: 50.5px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/d2a6e.png') ?>"
           alt="Golden geom line"
      />
    </div>

    <!-- Title "STYLE CATEGORIES" -->
    <div class="cs-categories-title"
         style="
           position: absolute;
           left: 53.66px;
           right: 974.16px;
           top: 88.76px;
           font-family: 'Cinzel Decorative';
           font-weight: 700;
           font-size: 72; line-height: '82px';
           color: #c1536b;
           letter-spacing: 2.5px;"
    >
      <p style="margin: 0;">STYLE CATEGORIES</p>
    </div>

    <!-- Three category images -->
    <div class="cs-category-images"
         style="position: relative; top: 277.9px;"
    >
      <div class="cs-category-card"
           style="width: 618.28px; height: 740.1px; overflow: hidden; clip: rect(0 618.28 1104.07 0); border-radius: 40px;"
         >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/8c317.png') ?>"
             alt="Minimalism"
             style="position: absolute; left: 0; top: -181.97px; width: 618.28px; height: 1104.07px; object-fit: cover; border-radius: 40px;"
        />
      </div>

      <div class="cs-category-card"
           style="width: 618.28px; height: 740.1px; overflow: hidden; clip: rect(0 618.28 927.99 0); border-radius: 40px;"
         >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/2633f.png') ?>"
             alt="Street Style"
             style="position: absolute; left: 0; top: -93.94px; width: 618.28px; height: 927.99px; object-fit: cover; border-radius: 40px;"
        />
      </div>

      <div class="cs-category-card"
           style="width: 618.28px; height: 740.1px; overflow: hidden; clip: rect(0 618.28 927.99 0); border-radius: 40px;"
         >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/12864.png') ?>"
             alt="Cozy Chic"
             style="position: absolute; left: 0; top: -23.66px; width: 618.28px; height: 927.99px; object-fit: cover; border-radius: 40px;"
        />
      </div>
    </div>

    <!-- Category titles -->
    <div class="cs-category-titles"
         style="position: absolute; top: 833.72px;"
    >
      <div style="font-family: 'Lora'; font-style: italic; font-size: 44; line-height: '60px'; color: #fff;">Minimalism</div>
      <div style="font-family: 'Lora'; font-style: italic; font-size: 44; line-height: '60px'; color: #fff;">Street Style</div>
      <div style="font-family: 'Lora'; font-style: italic; font-size: 44; line-height: '60px'; color: #fff;">Cozy Chic</div>
    </div>

    <!-- See More button -->
    <div class="cs-see-more"
         style="
           position: absolute;
           left: 738.96px;
           top: 1106.5px;
           width: 436.44px;
           height: 88.92px;
           background: linear-gradient(135deg, #dd72a6 0%, #c1536b 100%);
           border-radius: 60px;
           display: inline-flex;
           align-items: center;
           justify-content: center;
           gap: 18px;
           color: #fff;"
       >
       <span style="font-family: 'Arimo'; font-size: 39.4; letter-spacing: 3.2665px; color: #fff;">SEE MORE</span>
     </div>

     <!-- Bottom star confetti -->
     <div class="cs-category-confetti"
          style="position: absolute; bottom: 0; left: 832.28px; width: 622px; height: 434.63px;">
       <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/4b1b4.png') ?>"
            alt="Star confetti"
       />
     </div>

   </section>

<?php endif; ?>