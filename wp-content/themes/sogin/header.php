<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700,500&amp;subset=cyrillic-ext" rel="stylesheet">
    <script type="text/javascript" src="/wp-content/themes/sogin/js/jquery.min.js"></script>
    <script type="text/javascript" src="/wp-content/themes/sogin/js/jquery-ui.js"></script>
    <script type="text/javascript" src="/wp-content/themes/sogin/js/jquery.touch.min.js"></script>
    <script type="text/javascript" src="/wp-content/themes/sogin/js/jquery.modal.min.js"></script>
    <script type="text/javascript" src="/wp-content/themes/sogin/js/sogin.js"></script>
    <link rel="stylesheet" href="/wp-content/themes/sogin/style.css">
    <?php if (is_single()){ ?>
        <link rel="stylesheet" href="/wp-content/themes/sogin/css/baguetteBox.min.css">
        <script type="text/javascript" src="/wp-content/themes/sogin/js/baguetteBox.min.js"></script>
    <?php } ?>
    <title><?php bloginfo('name',19); ?><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>

<body>
<div class="sog_container">
    <div class="top_menu not_mobile">
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
                    <a href="#vizov" rel="modal:open" class="btn btn-header no-hover no-border">Вызвать дизайнера-замерщика</a>
                </div>
            </div>
        </div>
    </div>
    <div class="mobile_menu_container">
        <div class="mobile_menu">
            <li><?php if (!is_home()){ ?> <a class="no-hover no-border" href=/">Главная</a><?php } else { ?><span>Главная</span><?php } ?></li>
            <p class="menu_header">Каталог</p>
            <?php $items = array(
                    'shkaf' => array('Шкафы-купе','shkafi'),
                    'kitchen' => array('Кухни','kitchens'),
                    'garderob' => array('Гардеробы','garderobi'),
                    'gorka' => array('Горки','gorki'),
            ); ?>
            <?php foreach ($items as $key => $item) { ?>
                <div class="menu_expand_container">
                    <div class="menu_expand_header">
                        <img src="/wp-content/themes/sogin/img/arrow_right_green.svg" alt="arrow">
                        <a class="no-hover" href="/<?php echo $key; ?>"><?php echo $item[0]; ?></a>
                    </div>
                    <div class="children">
                        <div class="menu_items">
                            <?php
                            global $wpdb;
                            $head_term = get_queried_object();
                            $results = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}posts WHERE post_excerpt = 'category_type'" );

                            $content = unserialize($results[0]->post_content);
                            $types_list = $content['choices'];
                            foreach ($types_list as $key => $type){
                                $args = array(
                                    'hide_empty' => false,
                                    'meta_query' => array(
                                        array(
                                            'key'       => 'category_type',
                                            'value'     => $key,
                                            'compare'   => 'LIKE'
                                        )
                                    )
                                );
                                $terms = get_terms( $item[1], $args );
                                if ($terms){
                                    ?>
                                    <div class="category_group">
                                        <p class="category_header"><?php echo $type; ?></p>
                                        <ul>
                                            <?php foreach ($terms as $term){ ?>
                                                <li>
                                                    <a  href="/<?php echo $term->taxonomy. '/' . $term->slug?>"><?php echo $term->name; ?></a>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    </div>

                                <?php } } ?>
                        </div>
                    </div>
                </div>
            <?php } ?>
            <p class="menu_header">Меню сайта</p>
            <div class="menu_items">
                <?php wp_nav_menu( array( 'theme_location'=> 'header-menu')); ?>
            </div>
        </div>
    </div>
    <div class="top_menu_mobile mobile">
        <div class="top">
            <div class="logo">
                <img src="/wp-content/themes/sogin/img/logo_mobile.svg" alt="logo">
                <p class="logo_bottom">Шкафы-купе и кухни на заказ в Минске</p>
            </div>
            <button class="hamburger hamburger--spin" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
        </div>
        <div class="phones">
            <p  class="bottom_text">Звоните с 9 до 22</p>
            <div class="phone">
                <a class="bold" href="tel:<?php echo get_field( 'phone_1',19);?>"><?php echo get_field( 'phone_1',19);?></a>
            </div>
            <div class="phone">
                <a class="bold" href="tel:<?php echo get_field( 'phone_2',19);?>"><?php echo get_field( 'phone_2',19);?></a>
            </div>
            <div class="phone">
                <a class="bold" href="tel:<?php echo get_field( 'phone_3',19);?>"><?php echo get_field( 'phone_3',19);?></a>
            </div>
        </div>
    </div>