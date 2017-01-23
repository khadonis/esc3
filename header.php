<!doctype html>



<html <?php language_attributes(); ?>>



<head>



	<meta charset="<?php bloginfo('charset'); ?>">



	<meta name="viewport" content="width=device-width, initial-scale=1">



	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">



	<?php wp_head(); ?>



</head>



<body <?php body_class(); ?>>

<a href="#" class="scrollToTop"><i class="fa fa-angle-up"></i></a>



<div class="custom-loading-gif" ></div>

<!--<?php if ( get_theme_mod( 'show_preloader', 1 ) ): ?>



	<div class="preloader">



		<div class="spinner">



			<div class="bounce1"></div>



			<div class="bounce2"></div>



			<div class="bounce3"></div>



		</div>



	</div>



<?php endif; ?>-->







<div id="page">



	<header class="header header-default">



		<div class="container">



			<div class="row">



				<div class="col-xs-12">



					<div class="mast-head">



						<div class="mast-head-left">



							<h1 class="site-logo">



								<a href="<?php echo esc_url( home_url( '/' ) ); ?>">



									<?php if ( get_theme_mod( 'logo' ) ): ?>



										<img src="<?php echo esc_url( get_theme_mod( 'logo' ) ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"/>



									<?php else: ?>



										<?php bloginfo( 'name' ); ?>



									<?php endif; ?>



								</a>







							</h1>







							<?php if ( get_theme_mod( 'header_tagline', 1 ) ): ?>



								<p class="site-tagline"><?php bloginfo( 'description' ); ?></p>



							<?php endif; ?>



						</div><!-- .mast-head-left -->







						<div class="mast-head-right">



							<div class="mast-head-group">


<div class="weather-360-icon">
	

<a href="#" style="margin-right:15px;"><img src="http://www.theescapehotel.com/wp-content/uploads/2016/08/360-tour-icon-1.png" /></a>



								<?php if ( ! get_theme_mod( 'header_alt_menu', 1 ) ): ?>



									<nav class="nav">



										<?php wp_nav_menu( array(



											'theme_location' => 'main_menu',



											'container'      => '',



											'menu_id'        => '',



											'menu_class'     => 'navigation nav-clone'



										) ); ?>



									</nav>



								<?php endif; ?>







								<?php if ( get_theme_mod( 'header_weather', 1 ) ) {



									get_template_part( 'part-weather' );



								} ?>

</div>





								<?php if ( get_theme_mod( 'header_booking_button', 1 ) && get_theme_mod( 'booking_page' ) ): ?>



									<a href="http://www.reseliva.com/hotel/The-Escape-Hotel/index.php?lang=tr" target="_blank" class="btn btn-white btn-transparent">



										<?php esc_html_e( 'Rezervasyon', 'zermatt' ); ?>



									</a>



								<?php endif; ?>







								<?php get_template_part( 'part-language-switcher' ); ?>







								<?php if ( get_theme_mod( 'header_alt_menu', 1 ) ): ?>



									<div class="ci-dropdown ci-dropdown-left ci-dropdown-nav">



										<ul class="ci-dropdown-menu">



											<li>



												<button class="ci-dropdown-toggle" type="button">



													<i class="fa fa-navicon"></i>



												</button>







												<?php wp_nav_menu( array(



													'theme_location' => 'main_menu',



													'container'      => '',



													'menu_id'        => '',



													'menu_class'     => 'nav-clone'



												) ); ?>



											</li>



										</ul>



									</div><!-- .ci-dropdown-nav -->



								<?php endif; ?>







								<a href="#mobilemenu" class="mobile-trigger">



									<i class="fa fa-navicon"></i>



								</a>



							</div>



						</div>



						<!-- .mast-head-right -->



					</div>



				</div>



			</div>



		</div>



		<div id="mobilemenu"></div>



	</header>







<?php



	if ( ! is_page_template( 'template-frontpage.php' ) ) {



		get_template_part( 'part', 'page-hero' );



	} else {



		$slides = zermatt_get_slides( false, false, true );



		if ( $slides->post_count == 0 ) {



			get_template_part( 'part', 'page-hero' );



		}



	}



?>