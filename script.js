const links = document.getElementsByTagName('a');

const diacritics = ["&#851;", "&#867;", "&#868;", "&#869;", "&#870;", "&#871;", "&#872;", "&#873;", "&#874;", "&#875;", "&#876;", "&#877;", "&#878;"];

for(const link of links){
	if(link.parentElement.nodeName.toLowerCase() != "banner") {
		link.addEventListener('mouseover', function handleMouseOver() {
		var startStr = link.innerHTML;
		var startLength = link.innerHTML.length;
		for (var i = startLength; i > 0; i = i - 1) {
			if(startStr.charAt(i-1) != " "){
				var add = "";
				for(var j = 0; j < Math.floor(Math.random() * 9) + 3; j++){
					add += diacritics[Math.floor(Math.random() * 13)];
				}
				link.innerHTML = link.innerHTML.slice(0, i) + add + link.innerHTML.slice(i);
			}
		}
	});

	link.addEventListener('mouseout', function handleMouseOut() {
		link.innerHTML = link.innerHTML.replace(/[^\w\s\.\-&<>]/g, '');
	});
	}
}
