<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Başlıksız Belge</title>
</head>

<body>
<?php if ( get_theme_mod( 'single_room_random_testimonial', 1 ) ) {
		get_template_part( 'part', 'random-testimonial' );
	} ?>
</body>
</html>