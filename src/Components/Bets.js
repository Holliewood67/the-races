import React from 'react';

class Bets extends React.Component{
    constructor(props){
        super(props);
        this.state = ({message: 'Who will emerge victorious?'})
    }

    declareWinner(){
        if (this.props.blueProgress = 5){
            this.setState({message: 'BLUE WINS!'})
        }
    }

    componentDidUpdate(){
        this.declareWinner();
    }
    render(){
        return(
            <div>
            <h3>{this.state.message}</h3>
            </div>
        )
    }
}

export default Bets;