<?php
/**
 * Newsletter Section Template Part
 * Maps to: App.tsx Newsletter component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <section class="elementor-section cybersplash-newsletter"
      style="
        position: relative;
        width: 100%;
        height: 1132px;
        background: #ffffff;
        overflow: hidden;
        padding: 0;"
    >

    <!-- Glitter stars corners -->
    <div class="cs-stars-nl"
         style="
           position: absolute;
           left: -52.91px;
           top: 0;
           width: 501.92px;
           height: 257.03px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/nbb8c6.png') ?>"
           alt="Stars"
           style="position: absolute; left: 0; top: -156px; width: 501.92px; height: 552.33px; object-fit: contain;"
      />
    </div>

    <div class="cs-stars-nl2"
         style="
           position: absolute;
           right: 1417.34px;
           top: 0;
           width: 502.66px;
           height: 257.03px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/nbb8c6.png') ?>"
           alt="Stars"
           style="position: absolute; left: 0; top: -148.05px; width: 502.66px; height: 553.13px; object-fit: contain;"
      />
    </div>

    <!-- Three portrait photos -->
    <div class="cs-portrait-nl"
         style="position: relative; top: 257.04px;"
    >
      <div class="cs-portrait-card"
           style="width: 567.13px; height: 628.37px; overflow: hidden; clip: rect(0 567.13 845.37 0);"
        >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/n3748b.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -108.5px; width: 567.13px; height: 845.37px; object-fit: cover;"
        />
      </div>

      <div class="cs-portrait-card"
           style="width: 567.13px; height: 628.37px; overflow: hidden; clip: rect(0 567.13 756.16 0);"
        >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/nf5dd3.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -63.9px; width: 567.13px; height: 756.16px; object-fit: cover;"
        />
      </div>

      <div class="cs-portrait-card"
           style="width: 567.13px; height: 628.37px; overflow: hidden; clip: rect(0 567.13 851.22 0);"
        >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/nc07de.png') ?>"
             alt="Portrait"
             style="position: absolute; left: 0; top: -111.43px; width: 567.13px; height: 851.22px; object-fit: cover;"
        />
      </div>
    </div>

    <!-- Category labels -->
    <div class="cs-category-labels"
         style="position: absolute; top: 570.52px;"
    >
      <div style="font-family: 'Cinzel Decorative'; font-weight: 700; font-size: 32; line-height: '44px'; color: #fff; text-align: center; letter-spacing: 2px;">Fashion</div>
      <div style="font-family: 'Cinzel Decorative'; font-weight: 700; font-size: 32; line-height: '44px'; color: #fff; text-align: center; letter-spacing: 2px;">Inspiration</div>
      <div style="font-family: 'Cinzel Decorative'; font-weight: 700; font-size: 32; line-height: '44px'; color: #fff; text-align: center; letter-spacing: 2px;">Travel</div>
    </div>

    <!-- Title "The Fashion Edit" -->
    <div class="cs-newsletter-title"
         style="
           position: absolute;
           left: 517.9px;
           right: 572.7px;
           top: 117.57px;
           font-family: 'Alex Brush';
           font-size: 120; line-height: '168px';
           color: #dd72a6;
           text-align: center;"
    >
      <p style="margin: 0;">The Fashion Edit</p>
    </div>

    <!-- Subscribe description -->
    <div class="cs-newsletter-desc"
         style="
           position: absolute;
           left: 39.02px;
           right: 1250.58px;
           top: 1019.4px;
           font-family: 'Inter';
           font-size: 33.5; line-height: '49.195px';
           color: #000;"
    >
      <p style="margin: 0, width: 640;">Unlock a world of luxury fashion, expert</p>
      <p style="margin: 0;">styling tips, and exclusive updates</p>
    </div>

    <!-- First name input -->
    <div class="cs-input-first"
         style="
           position: absolute;
           left: 817.04px;
           top: 973.77px;
           width: 390.39px;
           height: 80.39px;"
    >
      <div style="position: absolute; inset: 0; background: #fff; border: 1px solid #d9d7d7; box-sizing: border-box;"></div>
      <input
        type="text"
        placeholder="First name"
        class="cs-input"
        style="position: absolute; left: 21px; top: 50%; transform: translateY(-50%); width: calc(100% - 42px); height: auto; font-size: 29.9; letter-spacing: 2.0395px;"
      />
    </div>

    <!-- Email input -->
    <div class="cs-input-email"
         style="
           position: absolute;
           left: 1222.15px;
           top: 973.77px;
           width: 390.39px;
           height: 80.39px;"
    >
      <div style="position: absolute; inset: 0; background: #fff; border: 1px solid #d9d7d7; box-sizing: border-box;"></div>
      <input
        type="email"
        placeholder="Email Address"
        class="cs-input"
        style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); width: calc(100% - 40px); height: auto; font-size: 29.9; letter-spacing: 2.0395px;"
      />
    </div>

    <!-- Subscribe button -->
    <div class="cs-subscribe-btn"
         style="
           position: absolute;
           left: 1626.59px;
           top: 973.77px;
           width: 202.77px;
           height: 80.39px;"
    >
      <div style="
        position: absolute;
        inset: 0;
        mask-image: url(<?= esc_url( get_template_directory_uri() . '/assets/images/n38008.png') ?>);
        webkit-mask-image: url(<?= esc_url( get_template_directory_uri() . '/assets/images/n38008.png') ?>);
        mask-size: 202.77px 80.39px;
        webkit-mask-size: 202.77px 80.39px;
        mask-repeat: no-repeat;
        webkit-mask-repeat: no-repeat;
        background: #000"
      >
      </div>
      <div style="
        position: absolute;
        inset: 0;
        mask-image: url(<?= esc_url( get_template_directory_uri() . '/assets/images/nbbeee.png') ?>);
        webkit-mask-image: url(<?= esc_url( get_template_directory_uri() . '/assets/images/nbbeee.png') ?>);
        mask-size: 202.75px 80.38px;
        webkit-mask-size: 202.75px 80.38px;
        mask-repeat: no-repeat;
        webkit-mask-repeat: no-repeat;"
      >
        <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/n2a4e0.png') ?>"
             alt="Subscribe"
             style="position: absolute; inset: -5.81% -2.31%; display: block; max-width: none; width: 104.62%; height: 111.62%;"
        />
      </div>
      <div style="
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Lora';
        font-size: 29.9;
        color: #fff;
        letter-spacing: 2.0395px;
        pointer-events: none;"
      >Subscribe</div>
    </div>

  </section>

<?php endif; ?>