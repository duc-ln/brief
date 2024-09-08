<?php
if (!function_exists('bief_setup')):
	function bief_setup() {
		add_theme_support( 'wp-block-styles' );
		add_editor_style('style.css');
	}
endif;
add_action( 'after_setup_theme', 'bief_setup' );

if (!function_exists('bief_styles')):
function bief_styles () {
	// Register styles
	wp_enqueue_style('bief-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
	wp_enqueue_style('bief-style-blocks', get_template_directory_uri().'/assets/css/blocks.css');
}
endif;
add_action('wp_enqueue_scripts', 'bief_styles'); 