var React = require('react');

module.exports = React.createClass({

	render: function(){
		return <div className="col-xs-12 contact">
	     	<h2>Ways to make contact</h2>
	     	<div className ="socialmedia">
	     		<a target="_blank" onClick={this.handleOnClick}>
		     		<i className="fa fa-envelope-o fa-3"></i>
		     	</a>
		     	<a href="https://github.com/florgb02" target="_blank">
		     		<i className="fa fa-github fa-3"></i>
		     	</a>
				<a href="https://www.linkedin.com/in/flor-guzman-9b07b126" target="_blank">
		     		<i className="fa fa-linkedin fa-3"></i>
		     	</a>
		     	<a href="https://twitter.com/FlorGuzmanb" target="_blank">
		     		<i className="fa fa-twitter fa-3"></i>
				</a>
			</div>
	     	
	    </div>
	},
	handleOnClick: function(){
		window.location.href = "mailto:flor.guzmanb@gmail.com";

	}
});