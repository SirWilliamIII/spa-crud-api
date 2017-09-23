const myapp = new function() {
	const countries = document.getElementById('countries')
	this.element = countries


	this.countries = [
		'USA', 'Singapore', 'Thailand', 'Japan', 'France',
		'Germany', 'England', 'Scotland'
	]


	this.Count = function(data) {
		const el = document.getElementById('counter')
		let name = 'country'

		if(data) {
			if(data > 1) {
				name = 'countries'
			}
			element.innerHTML = data + ' ' + name
		} else {
			element.innerHTML = 'No ' + name
		}
	};

	this.FetchAll = function(data) {
		let data = ''

		if(this.countries.length > 0) {
			for(let i = 0; i < this.countries.length; i++) {
				data += '<tr>'
				data += '<td>' + this.countries[i] + '</td>'
				data += '<td><button onclick="appearance.Edit(' + i + ')">Edit</button></td>'
				data += '<td><button onclick="appearance.Delete(' + i + ')">Delete</button></td>'
				data += '</tr>'
			}
		}
		this.Count(this.countries.length)
		return this.element.innerHTML = data
	};

	function CloseInput() {
		document.getElementById('spoiler').style.display = 'none'
	}

};

