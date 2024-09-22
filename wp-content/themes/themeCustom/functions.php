<?php
if (!function_exists('theme_custom_styles')):
    function theme_custom_styles() {
        wp_enqueue_style('theme-custom-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
        wp_enqueue_style('theme-custom-style-blocks', get_template_directory_uri() . '/assets/css/main.css', array(), wp_get_theme()->get('Version'));
        wp_enqueue_script('custom-modal-script', get_template_directory_uri() . '/assets/js/module.js', array(), wp_get_theme()->get('Version'), true);
        wp_enqueue_script('custom-modal-animation', get_template_directory_uri() . '/assets/js/animation.js', array(), wp_get_theme()->get('Version'), true);
    }
endif;
add_action('wp_enqueue_scripts', 'theme_custom_styles');

if (!function_exists('theme_custom_editor_styles')):
    function theme_custom_editor_styles() {
        add_editor_style('/assets/css/main.css', array(), wp_get_theme()->get('Version'));
    }
endif;
add_action('admin_init', 'theme_custom_editor_styles');
?>
