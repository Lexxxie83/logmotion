<?php
/**
 * Plugin Name: Image Galery: Slider en Masonry (indrukwekkend)
 * Plugin URI: https://github.com/indrukwekkend/
 * Description: Eenvoudige slider en eenvoudige Masonry plugin gebaseerd op Slick React en Slick Image, instelbare marge
 * 
 * Author: Hans-Peter Hioolen
 * Author URI: https://indrukwekkend.nl
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package indrukwekkend
 * @version 1.0.0
 * 
 */


 if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly



 require_once __DIR__ . '/vendor/autoload.php';
 
 use IndrukwekkendSliders\Plugin;

 
 if ( class_exists( 'IndrukwekkendSliders\Plugin' ) ) {
 
	 $the_plugin = new Plugin();
 }
 
 require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

