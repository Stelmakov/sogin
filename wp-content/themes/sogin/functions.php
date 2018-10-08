<?php
add_theme_support( 'menus' );
function post_types()
{
    register_post_type('kitchen', array(
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'has_archive' => true,
        'hierarchical' => false,
        'rewrite' => array(
            'slug' => 'kitchens',
            'with_front' => true,
        ),
        'labels' => array(
            'name' => 'Кухни',
            'add_new' => 'Добавить кухню',
            'add_new_item' => 'Добавить кухню',
            'edit_item' => 'Редактировать кухню',
            'all_items' => 'Все кухни',
            'singular_name' => 'Кухня',
        ),
        'menu_icon' => 'dashicons-carrot',
        'taxonomies' => array( 'kitchens' ),
    ));

    register_post_type('garderob', array(
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'has_archive' =>true,
        'hierarchical' => true,
        'rewrite' => array(
            'slug' => 'garderobi',
            'with_front' => true,
        ),
        'labels' => array(
            'name' => 'Гардеробы',
            'add_new' => 'Добавить гардероб',
            'add_new_item' => 'Добавить гардероб',
            'edit_item' => 'Редактировать гардероб',
            'all_items' => 'Все гардеробы',
            'singular_name' => 'Гардероб',
        ),
        'menu_icon' => 'dashicons-analytics',
        'taxonomies' => array( 'garderobi' ),
    ));

    register_post_type('gorka', array(
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'has_archive' =>true,
        'hierarchical' => true,
        'rewrite' => array(
            'slug' => 'gorki',
            'with_front' => true,
        ),
        'labels' => array(
            'name' => 'Горки',
            'add_new' => 'Добавить горку',
            'add_new_item' => 'Добавить горку',
            'edit_item' => 'Редактировать горку',
            'all_items' => 'Все горки',
            'singular_name' => 'Горка',
        ),
        'menu_icon' => 'dashicons-book-alt',
        'taxonomies' => array( 'gorki' ),
    ));
}

function custom_taxonomy()
{

    $labels = array(
        'name'                       => _x( 'Кухни', 'Taxonomy General Name', 'text_domain' ),
        'singular_name'              => _x( 'Кухня', 'Taxonomy Singular Name', 'text_domain' ),
        'menu_name'                  => __( 'Категории', 'text_domain' ),
        'all_items'                  => __( 'Все категории', 'text_domain' ),
        'parent_item'                => __( 'Родительская категория', 'text_domain' ),
        'parent_item_colon'          => __( 'Родительская категория:', 'text_domain' ),
        'new_item_name'              => __( 'Имя новой категории', 'text_domain' ),
        'add_new_item'               => __( 'Добавить новую категорию', 'text_domain' ),
        'edit_item'                  => __( 'Редактировать', 'text_domain' ),
        'update_item'                => __( 'Обновить', 'text_domain' ),
        'view_item'                  => __( 'Просмотреть', 'text_domain' ),
        'separate_items_with_commas' => __( 'Разделите значения запятой', 'text_domain' ),
        'add_or_remove_items'        => __( 'Добавьте или удалите значения', 'text_domain' ),
        'choose_from_most_used'      => __( 'Выберите из самых используемых', 'text_domain' ),
        'popular_items'              => __( 'Популярные', 'text_domain' ),
        'search_items'               => __( 'Поиск', 'text_domain' ),
        'not_found'                  => __( 'Not Found', 'text_domain' ),
        'no_terms'                   => __( 'No items', 'text_domain' ),
        'items_list'                 => __( 'Список категорий', 'text_domain' ),
        'items_list_navigation'      => __( 'Навигация', 'text_domain' ),
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
    );
    register_taxonomy( 'kitchens', array( 'kitchens' ), $args );

    $labels = array(
        'name'                       => _x( 'Гардеробы', 'Taxonomy General Name', 'text_domain' ),
        'singular_name'              => _x( 'Гардероб', 'Taxonomy Singular Name', 'text_domain' ),
        'menu_name'                  => __( 'Категории', 'text_domain' ),
        'all_items'                  => __( 'Все категории', 'text_domain' ),
        'parent_item'                => __( 'Родительская категория', 'text_domain' ),
        'parent_item_colon'          => __( 'Родительская категория:', 'text_domain' ),
        'new_item_name'              => __( 'Имя новой категории', 'text_domain' ),
        'add_new_item'               => __( 'Добавить новую категорию', 'text_domain' ),
        'edit_item'                  => __( 'Редактировать', 'text_domain' ),
        'update_item'                => __( 'Обновить', 'text_domain' ),
        'view_item'                  => __( 'Просмотреть', 'text_domain' ),
        'separate_items_with_commas' => __( 'Разделите значения запятой', 'text_domain' ),
        'add_or_remove_items'        => __( 'Добавьте или удалите значения', 'text_domain' ),
        'choose_from_most_used'      => __( 'Выберите из самых используемых', 'text_domain' ),
        'popular_items'              => __( 'Популярные', 'text_domain' ),
        'search_items'               => __( 'Поиск', 'text_domain' ),
        'not_found'                  => __( 'Not Found', 'text_domain' ),
        'no_terms'                   => __( 'No items', 'text_domain' ),
        'items_list'                 => __( 'Список категорий', 'text_domain' ),
        'items_list_navigation'      => __( 'Навигация', 'text_domain' ),
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
    );
    register_taxonomy( 'garderobi', array( 'garderobi' ), $args );

    $labels = array(
        'name'                       => _x( 'Горка', 'Taxonomy General Name', 'text_domain' ),
        'singular_name'              => _x( 'Горка', 'Taxonomy Singular Name', 'text_domain' ),
        'menu_name'                  => __( 'Категории', 'text_domain' ),
        'all_items'                  => __( 'Все категории', 'text_domain' ),
        'parent_item'                => __( 'Родительская категория', 'text_domain' ),
        'parent_item_colon'          => __( 'Родительская категория:', 'text_domain' ),
        'new_item_name'              => __( 'Имя новой категории', 'text_domain' ),
        'add_new_item'               => __( 'Добавить новую категорию', 'text_domain' ),
        'edit_item'                  => __( 'Редактировать', 'text_domain' ),
        'update_item'                => __( 'Обновить', 'text_domain' ),
        'view_item'                  => __( 'Просмотреть', 'text_domain' ),
        'separate_items_with_commas' => __( 'Разделите значения запятой', 'text_domain' ),
        'add_or_remove_items'        => __( 'Добавьте или удалите значения', 'text_domain' ),
        'choose_from_most_used'      => __( 'Выберите из самых используемых', 'text_domain' ),
        'popular_items'              => __( 'Популярные', 'text_domain' ),
        'search_items'               => __( 'Поиск', 'text_domain' ),
        'not_found'                  => __( 'Not Found', 'text_domain' ),
        'no_terms'                   => __( 'No items', 'text_domain' ),
        'items_list'                 => __( 'Список категорий', 'text_domain' ),
        'items_list_navigation'      => __( 'Навигация', 'text_domain' ),
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true,
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
    );
    register_taxonomy( 'gorki', array( 'gorki' ), $args );
}

add_action( 'init', 'custom_taxonomy', 2 );
add_action('init', 'post_types');

function register_menu() {
    register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_menu' );