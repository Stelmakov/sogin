
<div class="home_container">
    <div class="a_container">
        <a class="header" href="/otzivi/">Мнение клиентов</a>
    </div>
    <?php $otzivi = get_posts(array(
        'posts_per_page' => 2,
        'category' => 1,
    )); ?>
    <div class="inner">
        <?php foreach ($otzivi as $otziv){  ?>
            <div class="otziv">
                <img src="<?php echo get_field('image',$otziv->ID)?>" alt="<?php echo $otziv->post_title; ?>" >
                <div class="a_cont">
                    <a class="no-hover no-border" href="<?php echo get_permalink($otziv->ID) ?>"><?php echo $otziv->post_title; ?></a>
                </div>
            </div>
        <?php } ?>
    </div>
</div>
<div class="empty_separator"></div>
<div class="home_container">
    <div class="a_container">
        <a class="header" href="/works/">Последние выполненные работы</a>
    </div>
    <?php $works = get_posts(array(
        'posts_per_page' => 2,
        'category' => 5,
    )); ?>
    <div class="inner">
        <?php foreach ($works as $work){  ?>
            <div class="work">
                <div class="work_container">
                    <?php if(get_field('razmer1',$work->ID) && get_field('razmer2',$work->ID)) { ?>
                        <div class="sizes">
                            <p><?php echo get_field('razmer1',$work->ID); ?></p>
                            <span class="cross"></span>
                            <p><?php echo get_field('razmer2',$work->ID); ?></p>
                        </div>
                    <?php } ?>
                    <img src="<?php echo get_field('image',$work->ID)?>" alt="<?php echo $work->post_title; ?>" >
                </div>
                <div class="a_cont">
                    <a href="<?php echo get_permalink($work->ID) ?>"><?php echo $work->post_title; ?></a>
                </div>
                <p class="address"><?php echo get_field('address',$work->ID)?></p>
            </div>
        <?php } ?>
    </div>
</div>
<div class="empty_separator"></div>
<div class="footer_calls">
    <div class="footer_form">
        <div class="inner">
            <p>Некоторые вопросы по конструкции мебели проще обсудить по телефону</p>
            <input type="text" name="s" id="phoneinput" placeholder="+375" />
            <a href="#" class="btn" id="callme">Перезвонить мне</a>
        </div>
    </div>
    <div class="footer_viber">
        <p>или задавайте вопросы в</p>
        <a class="no-border no-hover" href="viber://add?number=<?php echo get_field( 'phone_3',19);?>"><img src="/wp-content/themes/sogin/img/viber.svg" alt="viber"></a>
    </div>
</div>
<div class="empty_separator"></div>

<div class="footer">
    <div class="footer_item">
        <div class="logo">
            <img src="/wp-content/themes/sogin/img/logo.svg" alt="logo">
            <p class="logo_bottom">Шкафы-купе и кухни на заказ в Минске</p>
            <a href="#" class="btn btn-inverted">Вызвать дизайнера- замерщика</a>
        </div>
    </div>
    <div class="footer_item">
        <div class="contact">
            <div class="items">
                <p  class="top_text">Звоните с 9 до 22</p>
                <a class="bold" href="tel:<?php echo get_field( 'phone_1',19);?>"><?php echo get_field( 'phone_1',19);?></a>
                <a class="bold" href="tel:<?php echo get_field( 'phone_2',19);?>"><?php echo get_field( 'phone_2',19);?></a>
                <a class="bold" href="tel:<?php echo get_field( 'phone_3',19);?>"><?php echo get_field( 'phone_3',19);?></a>
                <p class="bottom_text">Акции, конкурсы, скидки в наших сообществах</p>
                <div class="social_links">
                    <div class="item">
                        <a class="no-hover no-border" href="#"><img src="/wp-content/themes/sogin/img/facebook.svg" alt="facebook"></a>
                    </div>
                    <div class="item">
                        <a class="no-hover no-border" href="#"><img src="/wp-content/themes/sogin/img/vk.svg" alt="vk"></a>
                    </div>
                    <div class="item">
                        <a class="no-hover no-border" href="#"><img src="/wp-content/themes/sogin/img/instagram.svg" alt="instagram"></a>
                    </div>
                    <div class="item">
                        <a class="no-hover no-border" href="#"><img src="/wp-content/themes/sogin/img/ok.svg" alt="ok"></a>
                    </div>
                    <div class="item">
                        <a class="no-hover no-border" href="#"><img src="/wp-content/themes/sogin/img/youtube.svg" alt="youtube"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer_item footer_menu">
        <div class="menu">
            <?php wp_nav_menu( array( 'theme_location'=> 'footer-menu')); ?>
        </div>
    </div>
    <div class="footer_item">
        <img class="logo_tof" src="/wp-content/themes/sogin/img/logo_tof.svg" alt="tof">
    </div>
</div>
</div>
</body>
<?php wp_footer(); ?>
</html>
