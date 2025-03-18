<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '1Z5yL]0)7yGY|1$#/GbgM~MUw+*Ct+lnf &+{5DK__E,|s@cv%|D2u?A|uU?q;W;' );
define( 'SECURE_AUTH_KEY',   'pT_m8sBXMyl;8NWlZ4So@Up(pM/.F(Z#vk_?q>>nL8&U$;?6< g8,<gxkc f:tQj' );
define( 'LOGGED_IN_KEY',     'd1gD]DC`w)7)WL,w4FZs)*e~!hP^rfeSh^nHoS1&;(F9MH]9LpxC8s1@N96:#Bk9' );
define( 'NONCE_KEY',         'pXjZO 4/]cElI{;Fys5nyg%`2]X^H2WIpFaYiiS>5qWU4vpDbidTVWo@LhHv?$rB' );
define( 'AUTH_SALT',         'Q{V/5b:ubQ9*/gjC)QtM(S9iER]!VQ7M$>!P{=#5B<<G;aD}04=Pjn/d1QPkPm_[' );
define( 'SECURE_AUTH_SALT',  'q@&!Kb*~[.1c{zu>wSWn{rc).[JFV]geIiv-F8Zy-rCLv ]7hl-*:sA?Q2,`yyho' );
define( 'LOGGED_IN_SALT',    'H=3#C#C)Qlm_~jO!,Fe&2CR{**;L*a}Huxb;E/g[rc[gu]}S2y7UgftQ<l&3^%T,' );
define( 'NONCE_SALT',        '$(uO%1+e6pQ4McntWA2J4E s^Z@a4m-LL(<Oz0Z[aT-;wiNLaW[1^)kZ00r65wlz' );
define( 'WP_CACHE_KEY_SALT', '+=ua8kVY:,F(I[?m`x_jNY9*]u34q>}dHo2Q}sMeROX(h.}<bF^RYT6sq@6wN,J6' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
