<?php
/**
 * WP Master Alert Boxes Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package MAB
 */
  
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */


add_action( 'enqueue_block_editor_assets', 'alert_block_assets' );

function alert_block_assets(){



	wp_enqueue_script(
 		'alert-init',
		plugin_dir_url( __FILE__ ) . '/js/init.js',
		array( 'wp-blocks', 'wp-element' ),
		//array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( dirname( __FILE__ ) . '/js/init.js' )
	);


	wp_enqueue_script(
 		'alert-init',
		plugin_dir_url( __FILE__ ) . '/js/icons.js',
		array( 'wp-blocks', 'wp-element' ),
		//array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( dirname( __FILE__ ) . '/js/icons.js' )
	);


	wp_enqueue_script(
 		'alert-tip',
		plugin_dir_url( __FILE__ ) . '/blocks/tip/tip.js',
		array( 'wp-blocks', 'wp-element' ),
		//array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( dirname( __FILE__ ) . '/blocks/tip/tip.js' )
	);

	wp_enqueue_script(
 		'alert-warning',
		plugin_dir_url( __FILE__ ) . '/blocks/warning/warning.js',
		array( 'wp-blocks', 'wp-element' ),
		//array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( dirname( __FILE__ ) . '/blocks/warning/warning.js' )
	);


	wp_enqueue_script(
 		'alert-note',
		plugin_dir_url( __FILE__ ) . '/blocks/note/note.js',
		array( 'wp-blocks', 'wp-element' ),
		//array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( dirname( __FILE__ ) . '/blocks/note/note.js' )
	);

	wp_enqueue_style(
		'alert-css',
		plugin_dir_url( __FILE__ ) . '/css/master-alert.css',
		array( 'wp-edit-blocks' ),
		filemtime( dirname( __FILE__ ) . '/css/master-alert.css' )
	);



}


add_action( 'wp_enqueue_scripts', 'alert_warning_front_end_assets' );

function alert_warning_front_end_assets(){

	wp_enqueue_style(
		'wp-block-alert-warning-css',
		plugin_dir_url( __FILE__ ) . '/css/warning.css',
		array(),
		filemtime( dirname( __FILE__ ) . '/css/warning.css' )
	);

	wp_enqueue_style(
		'wp-block-alert-tip-css',
		plugin_dir_url( __FILE__ ) . '/css/tip.css',
		array(),
		filemtime( dirname( __FILE__ ) . '/css/tip.css' )
	);

	wp_enqueue_style(
		'wp-block-alert-note-css',
		plugin_dir_url( __FILE__ ) . '/css/note.css',
		array(),
		filemtime( dirname( __FILE__ ) . '/css/note.css' )
	);

}





function master_alert_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'master-alerts',
				'title' => __( 'Wp Master Alert Boxes', 'master-alerts' ),
                'icon'  => 'wordpress',
			),
		)
	);
}
add_filter( 'block_categories', 'master_alert_block_category', 3, 2);
