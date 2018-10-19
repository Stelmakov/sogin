<?php get_header(); ?>
    <div class="product">
        <div class="name">
            <h3><?php the_title(); ?></h3>
            <p>Артикул: <?php echo get_field('artikul') ?></p>
        </div>
        <div class="images">
            <?php $images = get_field('images'); ?>
            <div class="main_image">
                <img src="<?php echo $images[0]['image']; ?>" alt="main_image">
                <?php if(get_field('razmer1') && get_field('razmer2')) { ?>
                    <div class="sizes">
                        <p><?php echo get_field('razmer1'); ?></p>
                        <span class="cross"></span>
                        <p><?php echo get_field('razmer2'); ?></p>
                    </div>
                <?php } ?>
            </div>
            <div class="secondary_images">
                <?php foreach ($images as $image){ ?>
                    <img src="<?php echo $image['image']; ?>" alt="secondary_image">
                <?php } ?>
            </div>
        </div>
    </div>
<?php get_footer(); ?>