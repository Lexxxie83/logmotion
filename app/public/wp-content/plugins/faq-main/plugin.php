<?php
/**
 * Plugin Name: CPT - FAQ
 * Plugin URI: https://github.com/indrukwekkend/
 * Description: Custom post type Veelgestelde vragen. Hierin kun je verschillende categorieen aanmaken en dan per categorie in een pagina een lijst met veelgestelde vragen plaatsen.
 * Author: Hans-Peter Hioolen
 * Author URI: https://indrukwekkend.nl
 * Version: 0.0.4
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
