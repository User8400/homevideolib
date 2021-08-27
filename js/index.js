var elCard = document.querySelectorAll('.c_element');

[].forEach.call (elCard, function(elementCard) {
	console.log(elementCard.id);

	elementCard.onclick = function(e) {
		elem = document.getElementById(this.id);
		data_doc_id = elem.getAttribute("elem_id");

		console.log(elem.getAttribute("elem_id"));
		//console.log(elem.getAttribute(this.id));
	}
});