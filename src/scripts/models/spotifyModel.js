import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $ 

//base url: https://api.spotify.com 

export var spotifyModel = Backbone.Model.extend({

})


export var spotifyCollection = Backbone.Collection.extend({
	model: spotifyModel, 

	url: function(){
		return 'https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US'
	},

	parse: function(payload){
		return payload.results
	}

})





 
