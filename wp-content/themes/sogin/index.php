<?php get_header(); ?>
<a class="no-hover no-border not_mobile" href="/shkaf">
    <img class="full-width" src="<?php echo get_field( 'banner_1');?>" alt="shkafi-kupe">
</a>
<a class="no-hover no-border mobile full_width_mobile" href="/shkaf">
    <img src="<?php echo get_field( 'banner_1_mobile');?>" alt="shkafi-kupe">
</a>
<div class="empty_separator"></div>
<?php $cats = get_field('cats');?>
<div class="main_categories not_mobile">

    <div class="category_row">
        <?php for ($i = 0; $i<3; $i++){ ?>
            <div class="category">
                <a class="no-hover no-border" href="<?php echo $cats[$i]['link']?>">
                    <div class="inner">
                        <div class="header">
                            <div class="h1 <?php echo $cats[$i]['color']?>"><p><?php echo $cats[$i]['first_header'] ?></p></div>
                            <?php if ($cats[$i]['arrow'] == 'white'){  ?>
                                <img class="arrow" src="/wp-content/themes/sogin/img/arrow_right_white.svg">
                            <?php } else {  ?>
                                <img class="arrow" src="/wp-content/themes/sogin/img/arrow_right.svg">
                            <?php } ?>
                        </div>
                        <p class="<?php echo $cats[$i]['color']?>"><?php echo $cats[$i]['second_header'] ?></p>
                    </div>
                    <img class="back" src="<?php echo $cats[$i]['image'] ?>">
                </a>
            </div>
        <?php } ?>
    </div>
    <div class="empty_separator"></div>
    <div class="category_row">
        <?php for ($i = 3; $i<6; $i++){ ?>
            <div class="category">
                <a class="no-hover no-border" href="<?php echo $cats[$i]['link']?>">
                    <div class="inner">
                        <div class="header">
                            <div class="h1 <?php echo $cats[$i]['color']?>"><p><?php echo $cats[$i]['first_header'] ?></p></div>
                            <?php if ($cats[$i]['arrow'] == 'white'){  ?>
                                <img class="arrow" src="/wp-content/themes/sogin/img/arrow_right_white.svg">
                            <?php } else {  ?>
                                <img class="arrow" src="/wp-content/themes/sogin/img/arrow_right.svg">
                            <?php } ?>
                        </div>
                        <p class="<?php echo $cats[$i]['color']?>"><?php echo $cats[$i]['second_header'] ?></p>
                    </div>
                    <img class="back" src="<?php echo $cats[$i]['image'] ?>">
                </a>
            </div>
        <?php } ?>
    </div>
</div>
<div class="main_categories_mobile mobile">
    <?php foreach ($cats as $cat){ ?>
    <?php } ?>
    </div>
<div class="empty_separator_mini"></div>
<div class="home_arrow_right arrow_big"><div class="arrow_inner"></div><img src="/wp-content/themes/sogin/img/arrow_right.svg"></div>
<div class="home_benefits">
    <div class="item">
        <p class="top">Точные сроки</p>
        <p class="bottom">от 1 дня</p>
    </div>
    <div class="item">
        <p class="top">Собственное производство</p>
        <p class="bottom">даем лучшую цену</p>
    </div>
    <div class="item">
        <p class="top">Доставка и сборка</p>
        <p class="bottom">бесплатно</p>
    </div>
    <div class="item">
        <p class="top">Рассрочка 0%</p>
        <p class="bottom">без участия банка и переплат</p>
    </div>
    <div class="item">
        <p class="top">Дизайнер- замерщик</p>
        <p class="bottom">бесплатный выезд</p>
    </div>
    <div class="item">
        <p class="top">Подарок</p>
        <p class="bottom">каждому покупателю</p>
    </div>
</div>
<div class="home_arrow_right arrow_small"><div class="arrow_inner"></div><img src="/wp-content/themes/sogin/img/arrow_right.svg"><p>С О Г И Н - Л Ю К С</p></div>
<div class="empty_separator_mini"></div>
<div class="banner">
    <img class="full-width" src="/wp-content/themes/sogin/img/banner_home_3.png" alt="home">
    <a class="no-border no-hover" href="viber://add?number=<?php echo get_field( 'phone_3',19);?>">
        <img class="viber" src="/wp-content/themes/sogin/img/viber.svg" alt="viber">
    </a>
</div>
<div class="empty_separator_mini"></div>
<img class="full-width" src="/wp-content/themes/sogin/img/home_banner_4.jpg" alt="home">
<div class="empty_separator_mini"></div>
<div class="banner_mini">
    <p>Нас рекомендуют своим близким, друзьям, коллегам и соседям</p>
</div>
<div class="empty_separator"></div>
<img class="full-width" src="/wp-content/themes/sogin/img/banner_home_5.png" alt="home">
<div class="empty_separator_mini"></div>
<div class="footer">

</div>

<?php get_footer(); ?>
