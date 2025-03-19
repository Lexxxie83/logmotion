<?php
/**
 * Server-side rendering of the `core/latest-posts` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/latest-posts` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */

 
// alles zit straks in 1 frontend script. Dus altijd alles ingeladen.. 
// add_action('wp_enqueue_scripts','enqueue_if_block_is_present');

// function enqueue_if_block_is_present(){
//   if(is_singular()){
//      //We only want the script if it's a singular page
//      $id = get_the_ID();
//      if(has_block('indrukwekkend/faqs',$id)){
//         wp_enqueue_script('my-awesome-script',$path_of_script,$needed_scripts,$version_of_script,$load_in_footer);
//      }
//   }
// }

function render_block_indrukwekkend_faq( $attributes ) {

	$args = array(
		'posts_per_page'	=> -1,
		'post_status'		=> 'publish',
		'post_type'			=> 	'faq',
		'order'				=> $attributes['order'],
		'orderby'			=> $attributes['orderBy'],
		'suppress_filters'	=> false,
		
	);

	if ( isset( $attributes['categories'] ) ) {
		
		$category = array (
			'taxonomy' => 'onderwerpen',
			'field' => 'id',
			'terms' => $attributes['categories'],
		);

		array_push ($args,
			$args['tax_query'] = array( $category)
		);
	}

	$the_query = new WP_Query( $args );

	$list_items_markup = '';

if ($the_query->have_posts()):
	while ( $the_query->have_posts() ) : $the_query->the_post();
		$id = get_the_ID();
		$title = get_the_title( );


		$content = get_the_content();
		//$content = "teset";
		if ( ! $title ) {
			$title = __( '(no title)' );
		}

		$list_items_markup .= '<details open="false">';

		$list_items_markup .= sprintf(
			'<summary>%1$s</summary>',
			$title
		);

		$list_items_markup .= sprintf(
			// '<div class="details-wrapper"><div class="details-styling">%1$s</div></div>',
			'<div class="details-styling">%1$s</div>',
			$content
		);
		
		$list_items_markup .= "</details>\n";
	endwhile;
else:
	$list_items_markup = '<p>Er zijn geen veelgestelde vragen beschikbaar.</p>';
endif;

	$class = 'wp-block-indrukwekkend-faqs container collapse';
	if ( isset( $attributes['align'] ) ) {
		$class .= ' align' . $attributes['align'];
	}

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	return sprintf(
		'<section class="%1$s">%2$s</section>',
		esc_attr( $class ),
		$list_items_markup
	);
}

/**
 * Registers the `indrukwekkend/faq` block on server.
 */
function register_block_indrukwekkend_faq() {
	register_block_type(
		'indrukwekkend/faqs',
		array(
			'attributes'      => array(
				'align'                   => array(
					'type' => 'string',
					'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
				),
				'className'               => array(
					'type' => 'string',
				),
				'categories'              => array(
					'type' => 'string',
				),
				'order'                   => array(
					'type'    => 'string',
					'default' => 'asc',
				),
				'orderBy'                 => array(
					'type'    => 'string',
					'default' => 'title',
				),
			),
			'render_callback' => 'render_block_indrukwekkend_faq',
		)
	);
}
add_action( 'init', 'register_block_indrukwekkend_faq' );
