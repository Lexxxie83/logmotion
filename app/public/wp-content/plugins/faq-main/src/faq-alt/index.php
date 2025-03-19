<?php
/**
 * Server-side rendering of the `indrukwekkend/faq-alt` block.
 *
 * @package WordPress
 */

/**
 * Renders the `indrukwekkend/faq-alt` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 * 
 *  based on https://codepen.io/Coding_Journey/pen/RwNgYmm
 * 
 */

function render_block_indrukwekkend_faq_alt( $attributes ) {

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

		$list_items_markup .= '<div class="accordion-item">';

		$list_items_markup .= sprintf(
			'<div class="accordion-item-header">%1$s<div class="toggler-icon"><i class="fas fa-plus"></i></div></div>',
			$title
		);

		$list_items_markup .= sprintf(
			// '<div class="details-wrapper"><div class="details-styling">%1$s</div></div>',
			'<div class="accordion-item-body"><div class="accordion-item-body-content">%1$s</div></div>',
			$content
		);
		
		$list_items_markup .= "</div>\n";
	endwhile;
else:
	$list_items_markup = '<p>Er zijn geen veelgestelde vragen beschikbaar.</p>';
endif;

	$class = 'wp-block-indrukwekkend-faq-alt container accordion';
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
function register_block_indrukwekkend_faq_alt() {
	register_block_type(
		'indrukwekkend/faq-alt',
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
			'render_callback' => 'render_block_indrukwekkend_faq_alt',
		)
	);
}
add_action( 'init', 'register_block_indrukwekkend_faq_alt' );