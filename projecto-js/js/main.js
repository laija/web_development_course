$(document).ready(function(){
	// Slider
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200,
		responsive: true,
		pager: true
	});

	// Post
	var posts = [
		{
			title: 'Prueba de titulo1',
			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet imperdiet diam. Quisque varius, ligula nec euismod faucibus, elit ante porta sem, id vestibulum lacus felis vel nisi. Integer quis gravida nulla. Etiam vehicula, metus ut scelerisque vestibulum, nunc quam ultricies enim, quis pellentesque turpis tortor et velit. Cras sagittis id nulla sed cursus. In hac habitasse platea dictumst. Sed eu massa et orci congue pulvinar. Praesent vestibulum diam sit amet odio facilisis fringilla. Morbi sed sapien tincidunt, vestibulum nulla quis, dapibus justo. Cras convallis feugiat lorem nec tincidunt. Quisque eu velit tempus nunc pulvinar vulputate a ac tellus. Morbi ultrices lacus sit amet feugiat tincidunt.'
		},
		{
			title: 'Prueba de titulo2',
			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet imperdiet diam. Quisque varius, ligula nec euismod faucibus, elit ante porta sem, id vestibulum lacus felis vel nisi. Integer quis gravida nulla. Etiam vehicula, metus ut scelerisque vestibulum, nunc quam ultricies enim, quis pellentesque turpis tortor et velit. Cras sagittis id nulla sed cursus. In hac habitasse platea dictumst. Sed eu massa et orci congue pulvinar. Praesent vestibulum diam sit amet odio facilisis fringilla. Morbi sed sapien tincidunt, vestibulum nulla quis, dapibus justo. Cras convallis feugiat lorem nec tincidunt. Quisque eu velit tempus nunc pulvinar vulputate a ac tellus. Morbi ultrices lacus sit amet feugiat tincidunt.'
		},
		{
			title: 'Prueba de titulo3',
			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet imperdiet diam. Quisque varius, ligula nec euismod faucibus, elit ante porta sem, id vestibulum lacus felis vel nisi. Integer quis gravida nulla. Etiam vehicula, metus ut scelerisque vestibulum, nunc quam ultricies enim, quis pellentesque turpis tortor et velit. Cras sagittis id nulla sed cursus. In hac habitasse platea dictumst. Sed eu massa et orci congue pulvinar. Praesent vestibulum diam sit amet odio facilisis fringilla. Morbi sed sapien tincidunt, vestibulum nulla quis, dapibus justo. Cras convallis feugiat lorem nec tincidunt. Quisque eu velit tempus nunc pulvinar vulputate a ac tellus. Morbi ultrices lacus sit amet feugiat tincidunt.'
		},
		{
			title: 'Prueba de titulo4',
			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet imperdiet diam. Quisque varius, ligula nec euismod faucibus, elit ante porta sem, id vestibulum lacus felis vel nisi. Integer quis gravida nulla. Etiam vehicula, metus ut scelerisque vestibulum, nunc quam ultricies enim, quis pellentesque turpis tortor et velit. Cras sagittis id nulla sed cursus. In hac habitasse platea dictumst. Sed eu massa et orci congue pulvinar. Praesent vestibulum diam sit amet odio facilisis fringilla. Morbi sed sapien tincidunt, vestibulum nulla quis, dapibus justo. Cras convallis feugiat lorem nec tincidunt. Quisque eu velit tempus nunc pulvinar vulputate a ac tellus. Morbi ultrices lacus sit amet feugiat tincidunt.'
		},
		{
			title: 'Prueba de titulo5',
			date: 'Publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet imperdiet diam. Quisque varius, ligula nec euismod faucibus, elit ante porta sem, id vestibulum lacus felis vel nisi. Integer quis gravida nulla. Etiam vehicula, metus ut scelerisque vestibulum, nunc quam ultricies enim, quis pellentesque turpis tortor et velit. Cras sagittis id nulla sed cursus. In hac habitasse platea dictumst. Sed eu massa et orci congue pulvinar. Praesent vestibulum diam sit amet odio facilisis fringilla. Morbi sed sapien tincidunt, vestibulum nulla quis, dapibus justo. Cras convallis feugiat lorem nec tincidunt. Quisque eu velit tempus nunc pulvinar vulputate a ac tellus. Morbi ultrices lacus sit amet feugiat tincidunt.'
		},								
	];
	posts.forEach((item, index) =>{
		var post =`
			<article class="post">
				<h2>${item.title}</h2>
				<span class="date" >${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer mas</a>
			</article>
		`;
		$("#posts").append(post);
		//console.log(posts);
	});

	// Selector de tema 
	var theme=$("#theme");
	$("#to-green").click(function(){
		theme.attr("href","css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href","css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
	});

	//scroll arriaba de la web 
	$('.subit').click(function(e){
		e.preventDefault(); // para que no lleve a otro sitio 
		$('html, body').animate({
			scrollTop: 0
		}, 500)
		return false;
	})

});
