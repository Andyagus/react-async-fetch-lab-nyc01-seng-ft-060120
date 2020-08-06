// create your App component here
import React from 'react'

class App extends React.Component{
	
	state = {
		loading: true,
		person: null,
	}

	async componentDidMount(){
		const url = "http://api.open-notify.org/astros.json"

		const response = await fetch(url);
		const data = await response.json();
		this.setState({person: data["people"][1].name, loading: false});

	}


	render(){

		if(this.state.loading){
			return <div> Loading... </div>
		}else{
			return <div> {this.state.person} </div>
		}
	}
}

export default App 