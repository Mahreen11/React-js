import React from 'react';

class Single extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<li> {this.props.todo} <button onClick={this.props.del}>X</button></li>
		);
	}
}
export default Single;