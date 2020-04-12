import React from 'react';

class SingleTodo extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<li> {this.props.todo}</li>
		);
	}
}
export default SingleTodo;