<?php
/**
 * WP Master Alert Boxes.
 *
 * @package   WP_Master_Alert_Boxes
 * @author    Ningmua Bruno <bfaschats@gmail.com>
 * @license   GPL-3.0+
 * @link      https://about.me/bfaschat
 * @copyright 2010-2020 Ningmua Bruno, Bfas237 Forum
 *
 * @wordpress-plugin
 * Plugin Name:       WP Master Alert Boxes
 * Plugin URI:        https://github.com/Bfas237/Wp-Master-Alert-Boxes
 * Description:       WP Master Alert Boxes is the most elegant and dynamic alert boxes for your WordPress site. Try it once, use it forever.
 * Version:           1.0.0
 * Author:            Ningmua Bruno, Bfas237 Forum
 * Author URI:        https://about.me/bfaschat
 * Text Domain:       wp-master-alert-boxes
 * Domain Path:       /languages
 * License:           GPL-3.0+
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.txt
 */ 

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'assets/init.php';
