<?php get_header(); ?>
<?php get_template_part('items-header'); ?>
    <div class="product_single">
        <div class="name">
            <h3><?php the_title(); ?></h3>
            <p class="artikul">Артикул: <?php echo get_field('artikul') ?></p>
        </div>
        <div class="left">
            <div class="images">
                <?php $images = get_field('images'); ?>
                <div class="main_image">
                    <a href="<?php echo $images[0]['image']; ?>" class="no-border no-hover">
                        <img src="<?php echo $images[0]['image']; ?>" alt="main_image">
                        <?php if(get_field('razmer1') && get_field('razmer2')) { ?>
                            <div class="sizes">
                                <p><?php echo get_field('razmer1'); ?></p>
                                <span class="cross"></span>
                                <p><?php echo get_field('razmer2'); ?></p>
                            </div>
                        <?php } ?>
                    </a>

                </div>
                <div class="secondary_images">
                    <?php for($i = 1; $i < sizeof($images); $i++){ ?>
                        <a href="<?php echo $images[$i]['image']; ?>" class="no-hover no-border">
                            <img src="<?php echo $images[$i]['image']; ?>" alt="secondary_image">
                        </a>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php
            global $wpdb;
            $results = $wpdb->get_results( "SELECT * FROM rates WHERE code = 'USD'" );
            $rate = $results[0]->value;
        ?>
        <div class="right">
            <div class="price_container">
                <div class="price">
                    <?php if (get_field('price_with_discount',get_the_ID()) ){ ?>
                        <img src="/wp-content/themes/sogin/img/price_with_discount.svg" alt="price">
                        <div class="price_inner">
                            <p class="price_top"><?php echo get_price(get_field('price',get_the_ID()),$rate); ?></p>
                            <p class="price_with_discount"><?php echo get_price(get_field('price_with_discount',get_the_ID()), $rate); ?></p>
                        </div>
                    <?php } else { ?>
                        <img src="/wp-content/themes/sogin/img/price.svg" alt="price">
                        <div class="price_inner">
                            <p class="normal_price"><?php echo get_price(get_field('price',get_the_ID()), $rate); ?></p>
                        </div>
                    <?php } ?>
                </div>
                <p class="base">за базовую комплектацию</p>
            </div>
            <?php if (get_field('credit',get_the_ID())){ ?>
                <p class="credit"><b>от <?php echo get_field('credit',get_the_ID()); ?> руб в месяц</b> в <a href="<?php echo get_permalink(84); ?>">рассрочку</a> до 6 месяцев без участия банка и переплат</p>
            <?php } ?>
            <div class="content">
                <?php echo apply_filters('the_content', get_post_field('post_content', get_the_ID())); ?>
                <a href="#" class="btn" id="call_designer">Вызвать дизайнера-замерщика</a>
            </div>
        </div>

    </div>
<?php get_footer(); ?>