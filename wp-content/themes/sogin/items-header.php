<div class="slider_container">
    <div class="header_slider">
        <div class="slider_inner">
        <?php $slides = get_field('category_banners', 19); ?>
            <div class="slider_first">
                <div class="slider_first_inner">
                    <?php for ($i = 0;$i< 3;$i++){ ?>
                        <div class="slide">
                            <a class="no-border no-hover" href="<?php echo $slides[$i]['link']; ?>">
                                <img src="<?php echo $slides[$i]['image']; ?>" alt="slide">
                            </a>
                        </div>
                    <?php } ?>
                </div>
                <div class="arrow_next">
                    <p>смотрите дальше</p>
                    <img src="/wp-content/themes/sogin/img/arrow_right.svg" alt="arrow">
                </div>
            </div>
            <div class="slider_second">
                <div class="arrow_prev">
                    <img src="/wp-content/themes/sogin/img/arrow_left.svg" alt="arrow">
                </div>
                <div class="slider_second_inner">
                    <?php for ($i = 3;$i< 7;$i++){ ?>
                        <div class="slide">
                            <a class="no-border no-hover" href="<?php echo $slides[$i]['link']; ?>">
                                <img src="<?php echo $slides[$i]['image']; ?>" alt="slide">
                            </a>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="category_menu_container not_mobile">
    <?php wp_nav_menu( array( 'theme_location'=> 'category-menu')); ?>
</div>
<?php kama_breadcrumbs('<img src="/wp-content/themes/sogin/img/bread_arrow.svg"') ?>
<div class="full_width_mobile">
    <img class="full-width mobile" src="/wp-content/themes/sogin/img/home_banner_mobile_2.jpg" alt="home">
</div>
<a class="viber_mobile mobile btn" href="tel:<?php echo get_field( 'phone_3',19);?>">
    <p>Задайте вопрос дизайнеру-консультанту</p>
    <img src="/wp-content/themes/sogin/img/if_arrow-right_2561331.svg" class="arrow" alt="arrow_white">
    <img class="viber" src="/wp-content/themes/sogin/img/viber_white.svg" alt="viber_white">
</a>

<div class="banner not_mobile">
    <img class="full-width" src="/wp-content/themes/sogin/img/banner_home_3.png" alt="home">
    <a class="no-border no-hover" href="viber://add?number=<?php echo get_field( 'phone_3',19);?>">
        <img class="viber" style="visibility:hidden;" src="/wp-content/themes/sogin/img/viber.svg" alt="viber">
    </a>
</div>
