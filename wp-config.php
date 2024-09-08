<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'interior' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



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
define( 'AUTH_KEY',         'v3oWX6TPQnEwkzJYVT3yYUlUQUI04QaVg2eq1LM4p56gtNgYwRktUGCS6FhbItaS' );
define( 'SECURE_AUTH_KEY',  'wkXrvjLe7o4UeAzMrZgx7GngS8Bj7Lj0yelvV8QfSG7WtDuYyWQGXiPTcGeTvimv' );
define( 'LOGGED_IN_KEY',    'ZHoGTUsQoBpAgFdlQMwSAINcUSq5Z3rkpHNiJyqfiQJlZIXPHKHlBoDyTV2oX6BP' );
define( 'NONCE_KEY',        'cq6m6jqMgyBt81ZVEingUMwiCx2beHeHXhCYmutiIacaaGoIlKlcXAWmDHRzT6K9' );
define( 'AUTH_SALT',        'CXax4fhcw6yynRoSBF6efWmoua5mFMH0pgQfL1Rb9Yi1fZYsxGxoHj5F6u4gEaAP' );
define( 'SECURE_AUTH_SALT', 'L2b5smxHhJYfILHdvnORhfTLQy6j22a59TgSC4wZxzJGBqF7jZTieM1LlpEReJXR' );
define( 'LOGGED_IN_SALT',   '9TA7D1IGpY99qbEUzVq6kFy9nTzkxGh5KT69eGwEXFNnRduAEeNx9NLmjlAYBm3i' );
define( 'NONCE_SALT',       'EUGtOS7JOugZ1IKJSwNa7saNKVYeknKHqlWXP1uTnytUcPHGFJW0CBXIvrC4qB3S' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
