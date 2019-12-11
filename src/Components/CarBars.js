import React from 'react';

//Image Imports
import Blue0 from './Resources/Progress Bars/Blue/Blue0.png';
import Blue1 from './Resources/Progress Bars/Blue/Blue1.png';
import Blue2 from './Resources/Progress Bars/Blue/Blue2.png';
import Blue3 from './Resources/Progress Bars/Blue/Blue3.png';
import Blue4 from './Resources/Progress Bars/Blue/Blue4.png';
import Blue5 from './Resources/Progress Bars/Blue/Blue5.png';
import Red0 from './Resources/Progress Bars/Red/Red0.png';
import Red1 from './Resources/Progress Bars/Red/Red1.png';
import Red2 from './Resources/Progress Bars/Red/Red2.png';
import Red3 from './Resources/Progress Bars/Red/Red3.png';
import Red4 from './Resources/Progress Bars/Red/Red4.png';
import Red5 from './Resources/Progress Bars/Red/Red5.png';
import Green0 from './Resources/Progress Bars/Green/Green0.png';
import Green1 from './Resources/Progress Bars/Green/Green1.png';
import Green2 from './Resources/Progress Bars/Green/Green2.png';
import Green3 from './Resources/Progress Bars/Green/Green3.png';
import Green4 from './Resources/Progress Bars/Green/Green4.png';
import Green5 from './Resources/Progress Bars/Green/Green5.png';
import Yellow0 from './Resources/Progress Bars/Yellow/Yellow0.png';
import Yellow1 from './Resources/Progress Bars/Yellow/Yellow1.png';
import Yellow2 from './Resources/Progress Bars/Yellow/Yellow2.png';
import Yellow3 from './Resources/Progress Bars/Yellow/Yellow3.png';
import Yellow4 from './Resources/Progress Bars/Yellow/Yellow4.png';
import Yellow5 from './Resources/Progress Bars/Yellow/Yellow5.png';

class CarBars extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blueProgress: 0,
            redProgress: 0,
            greenProgress: 0,
            yellowProgress: 0,
            blueImgSource: Blue0,
            redImgSource: Red0,
            greenImgSource: Green0,
            yellowImgSource: Yellow0,
            message: 'Who will emerge vicotrious?',
            buttonText: 'START',
            winner: false,
            
        };
        this.advanceBlue = this.advanceBlue.bind(this);
        this.advanceRed = this.advanceRed.bind(this);
        this.advanceRandom = this.advanceRandom.bind(this);
        this.getImgSource = this.getImgSource.bind(this);
        this.buttonAction = this.buttonAction.bind(this);
    }

    //Determines image source based on progress tracker anjd declares winner message
    getImgSource(){
        switch(this.state.blueProgress){
            case 0:
                this.setState({blueImgSource: Blue0});
                break;
            case 1:
                this.setState({blueImgSource: Blue1});
                break;
            case 2:
                this.setState({blueImgSource: Blue2});
                break;
            case 3:
                this.setState({blueImgSource: Blue3});
                break;
            case 4:
                this.setState({blueImgSource: Blue4});
                break;
            case 5:
                this.setState({blueImgSource: Blue5, message: 'BLUE WINS!', buttonText: 'RESET', winner: true});
                this.props.advanceBlue();
                break;
        }
        switch(this.state.redProgress){
            case 0:
                this.setState({redImgSource: Red0});
                break;
            case 1:
                this.setState({redImgSource: Red1});
                break;
            case 2:
                this.setState({redImgSource: Red2});
                break;
            case 3:
                this.setState({redImgSource: Red3});
                break;
            case 4:
                this.setState({redImgSource: Red4});
                break;
            case 5:
                this.setState({redImgSource: Red5, message: 'RED WINS!', buttonText: 'RESET', winner: true});
                this.props.advanceRed();
                break;
        }
        switch(this.state.greenProgress){
            case 0:
                this.setState({greenImgSource: Green0});
                break;
            case 1:
                this.setState({greenImgSource: Green1});
                break;
            case 2:
                this.setState({greenImgSource: Green2});
                break;
            case 3:
                this.setState({greenImgSource: Green3});
                break;
            case 4:
                this.setState({greenImgSource: Green4});
                break;
            case 5:
                this.setState({greenImgSource: Green5, message: 'GREEN WINS!', buttonText: 'RESET', winner: true});
                this.props.advanceGreen();
                break;
        }
        switch(this.state.yellowProgress){
            case 0:
                this.setState({yellowImgSource: Yellow0});
                break;
            case 1:
                this.setState({yellowImgSource: Yellow1});
                break;
            case 2:
                this.setState({yellowImgSource: Yellow2});
                break;
            case 3:
                this.setState({yellowImgSource: Yellow3});
                break;
            case 4:
                this.setState({yellowImgSource: Yellow4});
                break;
            case 5:
                this.setState({yellowImgSource: Yellow5, message: 'YELLOW WINS!', buttonText: 'RESET', winner: true});
                this.props.advanceYellow();
                break;
        }
    }

    advanceBlue = () => {
        this.setState({blueProgress: this.state.blueProgress + 1}, () => {
            this.getImgSource();
            console.log('Blue');
            console.log(this.state.blueProgress);
        });
    }

    advanceRed = () => {
        this.setState({redProgress: this.state.redProgress + 1}, () => {
            this.getImgSource();
            console.log('Red');
            console.log(this.state.redProgress);
        });
    }

    advanceGreen = () => {
        this.setState({greenProgress: this.state.greenProgress + 1}, () => {
            this.getImgSource();
            console.log('Green');
            console.log(this.state.greenProgress);
        });
    }

    advanceYellow = () => {
        this.setState({yellowProgress: this.state.yellowProgress + 1}, () => {
            this.getImgSource();
            console.log('Yellow');
            console.log(this.state.yellowProgress);
        });
    }




    advanceRandom(){
        let randomGen = Math.ceil(Math.random() * 4);
        console.log(randomGen);
        this.setState({buttonText: 'GO'})
        switch(randomGen){
            case 1:
                this.advanceBlue();
                break;
            case 2:
                this.advanceRed();
                break;
            case 3:
                this.advanceGreen();
                break;
            case 4:
                this.advanceYellow();
                break;
        }
    }

    resetGame = () => {
        this.setState({
            blueProgress: 0,
            redProgress: 0,
            greenProgress: 0,
            yellowProgress: 0,
            message: 'Who will emerge vicotrious?',
            buttonText: 'START',
            winner: false}, () => {
            this.getImgSource();
        });
    }

    buttonAction(){
        switch(this.state.winner){
            case false:
                this.advanceRandom();
                break;
            case true:
                this.resetGame();
                break;
        }
    }

    render(){
        return (
            <div>
                <h3>{this.state.message}</h3>
                <img src={this.state.blueImgSource}></img>
                <br></br>
                <img src={this.state.redImgSource}></img>
                <br></br>
                <img src={this.state.greenImgSource}></img>
                <br></br>
                <img src={this.state.yellowImgSource}></img>
                <br></br>
                <button onClick={this.buttonAction}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default CarBars;