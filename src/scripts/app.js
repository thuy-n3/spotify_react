import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $ 

import appView from './components/appView.js'
import {spotifyModel, spotifyCollection} from './models/spotifyModel.js'


const app = function() {

	var AppRouter = Backbone.Router.extend({

		routes: {
			'*path' :"showHomeView",
		}, 

		showHomeView: function(){
			var scollection = new spotifyCollection()

			scollection.fetch().then(function(response){
				console.log(scollection)
			})

			ReactDOM.render(<appView/>, document.querySelector('container'))

		},

		 initialize: function(){
		 	console.log('app routing')
		 	Backbone.history.start()
		 }

	})

	var spotR = new AppRouter()

}

app()