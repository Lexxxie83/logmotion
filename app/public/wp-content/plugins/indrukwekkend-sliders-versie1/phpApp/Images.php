<?php

/**
 * IMage filters. Voeg de beschikbaarheid van custom images toe. 
 * Sinds versie 0.0.1
 * 
 * Namespaced om vaker te kunnen gebruiken
 * Grootte van de afbeelding voor slider en large image op de masonry
 * 
 * 
 * TODO:
 * 
 */
namespace IndrukwekkendSliders;



/**
 * Class Assets.
 */
class Images {

  	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->init();
	}

  /**
	 * Initialize.
	 */
	private function init() {
		/**
		 * The 'enqueue_block_assets' hook includes styles and scripts both in editor and frontend,
		 * except when is_admin() is used to include them conditionally
		 */
		add_action( 'init', [ $this, 'add_custom_image_sizes' ] );
    add_filter( 'image_size_names_choose', [ $this, 'custom_sizes' ] );
	}


  public function add_custom_image_sizes() {
    /** 
    * Add custom image size for block featured image.
    * 
    * @link https://developer.wordpress.org/reference/functions/add_image_size/
    */
    add_image_size( 'sliderLargeImg', 1024, 576, array( 'center', 'center' ) );
    add_image_size( 'sliderSmallImg', 9999, 175, false );
  }

  function custom_sizes( $sizes ) {

    /** 
     * Register custom image size with sizes list to make it available.
     * Available in block editor toch??? 
     * 
     * 
     * @link https://developer.wordpress.org/reference/hooks/image_size_names_choose/
    */

    return array_merge( $sizes, array(
      'sliderLargeImg' => __('Large Slider Image (cropped)'),
      'sliderSmallImg' => __('Small Slider Image'),

    ) );
  }

}
?>
