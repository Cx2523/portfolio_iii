import React from 'react';
import CSSTransitionGroup from 'react-transition-group';

const AnimationSequencer = ({ string, animation, duration }) => {
    const letters = string.split('');
    const stepDelay = duration / letters;

    return (
        <div>
            {
                letters.map((letter, i) => {
                    return (
                        <CSSTransitionGroup
                            transitionName="bounceInDown"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                        >
                            <div key={i}>{letter}</div>
                        </CSSTransitionGroup>
                    );
                })
            }
        </div>
    );



}

export default AnimationSequencer;