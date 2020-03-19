<?php
/**
 * Plugin Name: Peculiar Pointers
 * Plugin URI:  https://sortabrilliant.com/peculiar-pointers/
 * Description: Make your WordPress site a little weird by adding a peculiar pointer.
 * Author:      sorta brilliant
 * Author URI:  https://sortabrilliant.com/
 * Version:     1.0.1
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package peculiar-pointers
 */

namespace SortaBrilliant\PeculiarPointers;

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
		'peculiar-pointers',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'sortabrilliant/peculiar-pointers', [
		'editor_script' => 'peculiar-pointers',
	] );
}
add_action( 'init', __NAMESPACE__ . '\\register_block' );
