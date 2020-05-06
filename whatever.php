<?php
/**
 * Plugin Name: Whatever
 * Plugin URI:  https://sortabrilliant.com/whatever
 * Description: With Whatever you can embed whatever you want in your WordPress site.
 * Author:      sorta brilliant
 * Author URI:  https://sortabrilliant.com/
 * Version:     1.1.1
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package whatever
 */

namespace SortaBrilliant\Whatever;

/**
 * Registers the block and required assets.
 *
 * @return void
 */
function register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$asset_filepath = __DIR__ . '/build/index.asset.php';
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : [
		'dependencies' => [],
		'version'      => false,
	];

	wp_register_script(
		'whatever',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'whatever-editor-style',
		plugins_url( 'build/editor.css', __FILE__ ),
		[],
		$asset_file['version']
	);

	wp_register_style(
		'whatever-style',
		plugins_url( 'build/style.css', __FILE__ ),
		[],
		$asset_file['version']
	);

	register_block_type( 'sortabrilliant/whatever', [
		'editor_script'   => 'whatever',
		'editor_style'    => 'whatever-editor-style',
		'style'           => 'whatever-style',
	] );
}
add_action( 'init', __NAMESPACE__ . '\\register_block' );
