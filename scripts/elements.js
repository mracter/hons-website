function getHeader() {
	document.write('\
		<header>\
		<heading></heading> \
		<nav>\
		<ul>\
		<menu>\
		  <li><a href="index.html">ABOUT</a></li>\
		  <li><a href="alex.html">ALEX</a></li>\
		  <li><a href="mary.html">MARY</a></li>\
		  <li><a href="jamie.html">JAMIE</a></li>\
		  <li><a href="">DEMO</a>\
		  	<ul>\
		  		<li><a href="demo_alex.html">ALEX</a></li>\
		  		<li><a href="demo_jamie.html">JAMIE</a></li>\
		  		<li><a href="demo_mary.html">MARY</a></li>\
		  	</ul>\
		  </li>\
		  <li><a href="download.html">DOWNLOAD</a></li>\
		</menu>\
		</ul>\
		</nav>\
		</header>\
	');
}

function getFooter() {
	document.write('\
		<footer><p>&copy; 2014 Redbridge Mining Crew. All rights reserved.</p></footer>\
	');
}
