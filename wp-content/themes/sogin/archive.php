<?php get_header(); ?>
<?php get_template_part('items-header'); ?>
<div class="category">
    <div class="left_menu">
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
                $terms = get_terms( $head_term->taxonomies[0], $args );
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
    <div class="category_inner">
        <h3><?php echo $head_term->label; ?></h3>
        <div class="products">
            <?php

            if ($_GET['page']){
                $current_page = $_GET['page'];
            } else {
                $current_page = 1;
            }
            $posts_per_page = 15;
            $query = new WP_Query( $args = array(
                'post_type'             =>  $head_term->name,
                'post_status'           => 'publish',
                'posts_per_page'        => $posts_per_page,
                'offset'                 => $current_page * $posts_per_page - $posts_per_page

            ));
            $results = $wpdb->get_results( "SELECT * FROM rates WHERE code = 'USD'" );
            $rate = $results[0]->value;
            if ( $query->have_posts() ):
                while( $query->have_posts() ):
                    $query->the_post();?>
                <div class="product">
                    <div class="image">
                        <a class="no-hover no-border"href="<?php echo get_permalink($query->post->ID); ?>">
                            <?php if(get_field('razmer1',$query->post->ID) && get_field('razmer2',$query->post->ID)) { ?>
                                <div class="sizes">
                                    <p><?php echo get_field('razmer1',$query->post->ID); ?></p>
                                    <span class="cross"></span>
                                    <p><?php echo get_field('razmer2',$query->post->ID); ?></p>
                                </div>
                            <?php } ?>
                            <?php $images = get_field('images',$query->post->ID); ?>
                            <img src="<?php echo $images[0]['image']; ?>" alt="product">
                        </a>
                    </div>
                    <div class="product_footer">
                        <div class="name">
                            <a href="<?php echo get_permalink($query->post->ID); ?>"><?php echo $query->post->post_title; ?></a>
                            <p>Артикул: <?php echo get_field('artikul', $query->post->ID); ?></p>
                        </div>
                        <div class="price">
                                <?php if (get_field('price_with_discount', $query->post->ID) ){ ?>
                                    <img src="/wp-content/themes/sogin/img/price_with_discount.svg" alt="price">
                                    <div class="price_inner">
                                        <p class="price_top"><?php echo get_price(get_field('price', $query->post->ID),$rate); ?></p>
                                        <p class="price_with_discount"><?php echo get_price(get_field('price_with_discount', $query->post->ID), $rate); ?></p>
                                    </div>
                                <?php } else { ?>
                                    <img src="/wp-content/themes/sogin/img/price.svg" alt="price">
                                    <div class="price_inner">
                                        <p class="normal_price"><?php echo get_price(get_field('price', $query->post->ID), $rate); ?></p>
                                    </div>
                                <?php } ?>
                                <?php if (get_field('credit', $query->post->ID)){ ?>
                                    <p class="credit">от <?php echo get_field('credit',$query->post->ID); ?> руб в месяц</p>
                                <?php } ?>
                        </div>
                    </div>

                </div>

              <?php  endwhile;
                if ($query->post_count >= $posts_per_page){ ?>
                    <div class="pagination">
                        <?php for ($i = 1; $i <= $query->max_num_pages; $i++){ ?>
                            <?php if ($i == $current_page){ ?>
                                <span><?php echo $i; ?></span>
                            <?php } else {  ?>
                                <a class="no-hover" href="?page=<?php echo $i; ?>"><?php echo $i; ?></a>
                            <?php } ?>
                        <?php } ?>
                    </div>
               <?php  }
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>

</div>
<?php get_footer(); ?>