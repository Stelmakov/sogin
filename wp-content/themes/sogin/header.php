<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700,500&amp;subset=cyrillic-ext" rel="stylesheet">
    <link rel="stylesheet" href="/wp-content/themes/sogin/style.css">
    <title><?php bloginfo('name',19); ?><?php wp_title(); ?></title>

    <?php wp_head(); ?>
</head>

<body>
<div class="sog_container">
    <div class="top_menu">
        <div class="logo">
            <img src="/wp-content/themes/sogin/img/logo.svg" alt="logo">
            <p class="logo_bottom">Шкафы-купе и кухни на заказ в Минске</p>
        </div>
        <div class="menus">
            <div class="header_menu">
                <?php wp_nav_menu( array( 'theme_location'=> 'header-menu')); ?>
            </div>
            <div class="bottom_menu">
                <div class="items">
                    <div class="item">
                        <a class="bold" href="tel:<?php echo get_field( 'phone_1',19);?>"><?php echo get_field( 'phone_1',19);?></a>
                    </div>
                    <div class="item">
                        <a class="bold" href="tel:<?php echo get_field( 'phone_2',19);?>"><?php echo get_field( 'phone_2',19);?></a>
                        <p  class="bottom_text">Звоните с 9 до 22</p>
                    </div>
                    <div class="item">
                        <a class="bold" href="tel:<?php echo get_field( 'phone_3',19);?>"><?php echo get_field( 'phone_3',19);?></a>
                        <p class="bottom_text">Задайте вопрос в <a class="no-border no-hover" href="viber://add?number=<?php echo get_field( 'phone_3',19);?>"><img src="/wp-content/themes/sogin/img/viber.svg" alt="viber"></a></p>
                    </div>
                </div>
                <div class="button">
                    <a href="#" class="btn btn-header no-hover no-border">Вызвать дизайнера-замерщика</a>
                </div>
            </div>
        </div>
    </div>