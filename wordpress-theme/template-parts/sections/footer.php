<?php
/**
 * Footer Section Template Part
 * Maps to: App.tsx Footer component
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}
?>
<?php if ( function_exists( 'elementor' ) ) : ?>

  <footer class="elementor-section cybersplash-footer"
      style="
        position: relative;
        width: 100%;
        height: 793px;
        overflow: hidden;
        background: #fff;
        padding: 0;"
    >

    <!-- Background frame SVG -->
    <div class="cs-frame"
         style="
           position: absolute;
           inset: 0;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/f86f2b.png') ?>"
           alt="Frame"
           style="position: absolute; inset: 0; width: 100%; height: 100%; max-width: none;"
      />
    </div>

    <!-- Gold glitter dust left -->
    <div class="cs-glitter-dust-left"
         style="
           position: absolute;
           left: -475.75px;
           top: -36.98px;
           width: 1051.73px;
           height: 620.08px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/f040f5.png') ?>"
           alt="Glitter dust"
      />
    </div>

    <!-- Gold glitter dust right -->
    <div class="cs-glitter-dust-right"
         style="
           position: absolute;
           right: 1306px;
           top: -57.54px;
           width: 1051.73px;
           height: 620.08px;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/f040f5.png') ?>"
           alt="Glitter dust"
      />
    </div>

    <!-- Logo centered top -->
    <div class="cs-logo"
         style="
           position: absolute;
           left: 740.12px;
           top: 0;
           width: 394.31px;
           height: 378.61px;
           clip;"
    >
      <img src="<?= esc_url( get_template_directory_uri() . '/assets/images/ffe12b.png') ?>"
           alt="Logo"
      />
    </div>

  </section>

<?php endif; ?>