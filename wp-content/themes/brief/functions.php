<?php
if (!function_exists('brief_setup')):
	function brief_setup() {
		add_theme_support( 'wp-block-styles' );
		add_editor_style('style.css');
	}
endif;
add_action( 'after_setup_theme', 'brief_setup' );

if (!function_exists('brief_styles')):
function brief_styles () {
	// Register styles
	wp_enqueue_style('brief-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
	wp_enqueue_style('brief-style-blocks', get_template_directory_uri().'/assets/css/blocks.css');
}
endif;
add_action('wp_enqueue_scripts', 'brief_styles'); 