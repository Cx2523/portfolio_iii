import React from 'react';
import 'animate.css';

class CssAnimateSequencer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderLetters: []
        }
        this.letters = props.string.split('');
        this.stepDuration = props.duration / this.letters.length;
    }

    componentWillMount() {
        this.setState({renderLetters: this.letters.map(letter => {
            return <div style={{visibility: 'hidden', fontSize:'100px'}}>{letter}</div>;
        })});
    }

    componentDidMount() {
        const promiseArray = this.letters.map((letter, i) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(letter);
                }, this.stepDuration * i);
            });
        });

        promiseArray.forEach((p, i) => {
            p.then(letter => this.setState(prevState => {
                return {
                    renderLetters: [
                        ...prevState.renderLetters.slice(0, i),
                        <div className={`animated ${this.props.animation}`} style={{fontSize: '100px'}}>{letter}</div>,
                        ...prevState.renderLetters.slice(i + 1, prevState.renderLetters.length)
                    ]
                }
            }));
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.renderLetters.map(letter => <div style={{display: 'inline-block'}}>{letter}</div>)
                }
            </div>
        );
    } 
}

export default CssAnimateSequencer;