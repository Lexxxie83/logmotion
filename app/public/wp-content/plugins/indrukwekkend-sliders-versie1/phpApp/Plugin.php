<?php
/**
 * Plugin Class.
 *
 * @package aquila-features
 */

 namespace IndrukwekkendSliders;

/**
 * Class Plugin.
 */
class Plugin {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->init();
	}

	public function activate() {}
	public function deactivate() {}

	/**
	 * Initialize plugin
	 */
	private function init() {
		define( 'INDRUKWEKKEND_HROFFICE_PLUGIN_PATH', untrailingslashit( plugin_dir_path( __DIR__ ) ) );
		define( 'INDRUKWEKKEND_HROFFICE_PLUGIN_URL', untrailingslashit( plugin_dir_url( __DIR__ ) ) );
		define( 'INDRUKWEKKEND_HROFFICE_PLUGIN_BUILD_PATH', INDRUKWEKKEND_HROFFICE_PLUGIN_PATH . '/build' );
		define( 'INDRUKWEKKEND_HROFFICE_PLUGIN_BUILD_URL', INDRUKWEKKEND_HROFFICE_PLUGIN_URL . '/build' );
		define( 'INDRUKWEKKEND_HROFFICE_PLUGIN_VERSION', '1.0.0' );


		// Hier komen alle classes die worden ingeladen als de plugin wordt geactiveerd
		// API koppelinen enzo
		new Assets();
		new Images();
		// new Taxonomy();
		// new ACF();
		// new GFFilter();

	}
}
