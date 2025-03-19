<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package faq
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function indrukwekkend_block_faq_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_enqueue_style(
		'indrukwekkend_blocks-faq-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `faqGlobal` object.
	wp_localize_script(
		'indrukwekkend_blocks-faq-block-js',
		'faqGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `faqGlobal` object.
		]
	);
}
add_action( 'init', 'indrukwekkend_block_faq_assets' );

add_action( 'enqueue_block_assets', 'indrukwekkend_block_faq_if_block_is_present' ); // Can only be loaded in the footer
// add_action( 'wp_enqueue_scripts', 'myplugin_enqueue_if_block_is_present' ); // Can be loaded in the both in head and footer
function indrukwekkend_block_faq_if_block_is_present(){

    if ( has_block( 'indrukwekkend/faqs' ) || has_block( 'indrukwekkend/faq-alt' ) ) {
 	//frontend js Let op! alleen mogelijk door webpack aanpassing!
	 wp_enqueue_script(
		'indrukwekkend_blocks-faq-frontend-js', // Handle.
		plugins_url('/dist/frontend.build.js', dirname(__FILE__)), // enqueue frontend js
		['wp-blocks', 'wp-components', 'wp-core-data', 'wp-data', 'wp-element', 'wp-polyfill'],
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/frontend.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	wp_localize_script('indrukwekkend_blocks-faq-frontend-js', 'dev_ajax', array('ajax_url' => admin_url('admin-ajax.php')));
    }
}


function indrukwekkend_block_faq_editor_assets() {

	// Register block editor script for backend.
	wp_enqueue_script(
		'indrukwekkend_blocks-faq-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data', 'wp-components', 'wp-core-data', 'wp-polyfill', 'lodash' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_enqueue_style(
		'indrukwekkend_blocks-faq-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'indrukwekkend_block_faq_editor_assets' );

// include 'faq'.'/index.php';
include 'faq-alt'.'/index.php';


/**
 * Register a custom post type called "faq".
 *
 * @see get_post_type_labels() for label keys.
 */
function wpdocs_codex_faq_init() {
    $labels = array(
        'name'                  => _x( 'FAQ', 'Post type general name', 'indrukwekkend' ),
        'singular_name'         => _x( 'FAQ', 'Post type singular name', 'indrukwekkend' ),
        'menu_name'             => _x( 'FAQ\'s', 'Admin Menu text', 'indrukwekkend' ),
        'name_admin_bar'        => _x( 'FAQ', 'Add New on Toolbar', 'indrukwekkend' ),
        'add_new'               => __( 'Nieuw', 'indrukwekkend' ),
        'add_new_item'          => __( 'Voeg nieuwe FAQ toe', 'indrukwekkend' ),
        'new_item'              => __( 'Nieuwe FAQ', 'indrukwekkend' ),
        'edit_item'             => __( 'Pas FAQ aan', 'indrukwekkend' ),
        'view_item'             => __( 'Bekijk FAQ', 'indrukwekkend' ),
        'all_items'             => __( 'Alle FAQ\'s', 'indrukwekkend' ),
        'search_items'          => __( 'Zoek FAQ', 'indrukwekkend' ),

        'archives'              => _x( 'FAQ archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'indrukwekkend' ),
        'insert_into_item'      => _x( 'Insert into FAQ', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'indrukwekkend' ),
        'uploaded_to_this_item' => _x( 'Uploaded to this FAQ', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'indrukwekkend' ),
        'filter_items_list'     => _x( 'Filter FAQs list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'indrukwekkend' ),
        'items_list_navigation' => _x( 'FAQs list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'indrukwekkend' ),
        'items_list'            => _x( 'FAQs list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'indrukwekkend' ),
    );
 
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'faq' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
		'menu_position'      => null,
		'menu_icon'           => 'dashicons-format-chat',
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt'),
    );
 
    register_post_type( 'faq', $args );
}
 
add_action( 'init', 'wpdocs_codex_faq_init' );

//hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_onderwerpen_faq_taxonomy', 0 );

function create_onderwerpen_faq_taxonomy() {
 
  $labels = array(
    'name' => _x( 'Onderwerpen', 'taxonomy general name' ),
    'singular_name' => _x( 'Onderwerp', 'taxonomy singular name' ),
    'search_items' =>  __( 'Zoek Onderwerpen' ),
    'all_items' => __( 'Alle Onderwerpen' ),
    'parent_item' => __( 'Hoofd Onderwerp' ),
    'parent_item_colon' => __( 'Hoofd Onderwerp:' ),
    'edit_item' => __( 'Pas Onderwerp aan' ), 
    'update_item' => __( 'Update Onderwerp' ),
    'add_new_item' => __( 'Voeg nieuw Onderwerp toe' ),
    'new_item_name' => __( 'Nieuwe Onderwerp Naam' ),
    'menu_name' => __( 'Onderwerpen' ),
  );    
 
// Now register the taxonomy
 
  register_taxonomy('onderwerpen',array('faq'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
	'show_admin_column' => true,
	'show_in_rest'       => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'topic' ),
  ));
 
}



