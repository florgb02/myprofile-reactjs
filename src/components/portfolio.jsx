var React = require('react');
var Header = require('./header');
var Body = require('./portfolio_body');
var Footer = require('./footer');

module.exports = React.createClass({

	render: function(){
		return <div>
			<div className="container">
				<Body />
			</div>
		</div>
	}

});