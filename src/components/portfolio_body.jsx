var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			projects: []
		}
	},
	render: function(){
		return <div className="col-xs-12 rm-padding">
			<div className="col-xs-12 col-lg-3 left-container">
					<div className="col-xs-12">
						<img src="/img/fgAvatar.svg" className="col-xs-12 img-circle "/>
					</div>
					<div className="col-xs-12 text-center">
						<h1>Flor Guzman</h1>
						<label className="title">Full Stack - Web Developer </label>
					</div>
					<hr className="col-xs-12 rm-padding" />

			</div>
			
			<div className="col-xs-12 col-lg-8 right-container">
			{ this.getDescription() }
			{ this.getPortfolioInfo() }
			</div>
		</div>
	}, 
	getDescription: function(){

		return <div className="col-xs-12">
			<p> List of websites!
			</p>
		</div>
	},
	getPortfolioInfo: function(){
		return <div className="col-xs-12">
			<div className="row">
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src="/img/default_post_img.png" alt="..." />
			      <div className="caption">
			        <h3>Thumbnail label</h3>
			        <p>
			        	<a href="#" className="btn btn-primary" role="button">One</a> 
			        </p>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	}
});