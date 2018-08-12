import React, {Component} from 'react';

// props: size, transitions([faces])
class PictureCube extends Component {
    constructor(props){
        super(props);
        this.state = {
            faceUp: 0
        }
    }

    verticalRotate = () => {
        let cube = document.querySelector('#cube');
        cube.addClass()
    }

    componentDidMount() {
        this.verticalRotate();
    }

    scene = {
        width: `${this.props.size}px`,
        height: `${this.props.size}px`,
        perspective: `${2 * this.props.size}px`
    };

    cube = {
        width: `${this.props.size}px`,
        height: `${this.props.size}px`,
        position: 'relative',
        transformStyle: "preserve-3d",
        transform: `translateZ(-${this.props.size / 2})`,
        transition: "transform 1s"
    };

    cubeFace = {
        position: 'absolute',
        width: `${this.props.size}px`,
        height: `${this.props.size}px`,
        opacity: '.5',
        backgroundColor: 'pink',
        color: 'white',
        fontSize: '2rem',
        border: "2px solid black"
    };

    frontFace = { transform: `rotateY(0deg) translateZ(${this.props.size / 2}px)` }
    backFace = { transform: `rotateY(180deg) translateZ(${this.props.size / 2}px)` }
    rightFace = { transform: `rotateY(90deg) translateZ(${this.props.size / 2}px)` }
    leftFace = { transform: `rotateY(-90deg) translateZ(${this.props.size / 2}px)` }
    topFace = { transform: `rotateX(90deg) translateZ(${this.props.size / 2}px)` }
    bottomFace = { transform: `rotateX(-90deg) translateZ(${this.props.size / 2}px)` }

    render(){
        return (
            <div style={this.scene}>
                <div id={"cube"} style={this.cube}>
                    <div style={{...this.cubeFace, ...this.frontFace}}>front</div>
                    <div style={{...this.cubeFace, ...this.backFace}}>back</div>
                    <div style={{...this.cubeFace, ...this.rightFace}}>right</div>
                    <div style={{...this.cubeFace, ...this.leftFace}}>left</div>
                    <div style={{...this.cubeFace, ...this.topFace}}>top</div>
                    <div style={{...this.cubeFace, ...this.bottomFace}}>bottom</div>
                </div>
            </div>
        );
    }
}

export default PictureCube;