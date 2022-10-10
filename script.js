const links = document.getElementsByTagName('a');

const diacritics = ["&#772;", "&#781;", "&#782;", "&#809;", "&#840;", "&#851;", "&#838;", "&#810;", "&#826;", "&#827;", "&#817;", "&#794;", "&#841;", "&#792;", "&#793;", "&#797;", "&#798;", "&#799;", "&#812;", "&#813;", "&#770;", "&#780;"];

for(const link of links){
	if(link.parentElement.nodeName.toLowerCase() != "banner") {
		link.addEventListener('mouseover', function handleMouseOver() {
		var startStr = link.innerHTML;
		var startLength = link.innerHTML.length;
		for (var i = startLength; i >= 0; i = i - 1) {
			if(startStr.charAt(i-1) != " "){
				var add = "";
				for(var j = 0; j < Math.floor(Math.random() * 9) + 3; j++){
					add += diacritics[Math.floor(Math.random() * 22)];
				}
				link.innerHTML = link.innerHTML.slice(0, i) + add + link.innerHTML.slice(i);
			}
		}
	});

	link.addEventListener('mouseout', function handleMouseOut() {
		link.innerHTML = link.innerHTML.replace(/[^\w\s\.\-&'@<>]/g, '');
	});
	}
}
