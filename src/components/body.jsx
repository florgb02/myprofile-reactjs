var React = require('react');
var RightContent = require('./right_section');

module.exports = React.createClass({

	render: function(){
		return <div className="col-xs-12 rm-padding">
			<RightContent />
			<div className="col-xs-12 col-lg-8 right-container">
				{ this.getDescription() }
				{ this.getResumeInfo() }
			</div>
		</div>
	}, 
	getDescription: function(){

		return <div className="col-xs-12">
			<p>Hi!, 
			</p>
		</div>
	},
	getResumeInfo: function(){
		return <div className="col-xs-12">
			
		</div>
	}
});