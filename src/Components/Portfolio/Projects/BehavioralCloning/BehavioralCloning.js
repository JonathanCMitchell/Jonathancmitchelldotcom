/**
 * Created by jj on 2/25/17.
 */
/**
 * Created by jj on 2/12/17.
 * TODO: resize image to match other images, consider inputting convnet
 * TODO: write down bullet points as seen on resume
 */

/**
 * Created by jj on 2/12/17.
 */

import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const BehavioralCloning = (props) => {
    console.log('behavioral cloning props : ', props.imageurl)
    return (
        <Card className="col-md-6 col-xs-12 Project-Card">
            <CardMedia>
                <img src={props.imageurl} />
            </CardMedia>
            <CardTitle
                title="Behavioral Cloning - Self-Driving-Car Simulation"
                subtitle="Trained a Convolutional neural network to predict steering angles in a self-driving vehicle simulation"
            />
            <CardText>
                <li>• Implemented Convolutional Neural Network using keras, Numpy, Scikit, Pandas</li>
                <li>• Performed extensive data augmentation, creation, and modification to achieve a normalized distribution of steering data</li>
                <li>• Architected a complex pre-processing pipeline to feed into the network</li>
            </CardText>
            <CardActions>
                <a href="https://github.com/JonathanCMitchell/CarND-Behavioral-Cloning-P3"
                   target ="_blank">
                    <i className="fa fa-github fa-3x"></i>
                </a>
                <a href="https://youtu.be/gX1NCGVETNk"
                   target ="_blank">
                    <i className="fa fa-youtube fa-3x"></i>
                </a>
                <a href="https://medium.com/@jmitchell1991/behavioral-cloning-self-driving-car-simulation-14531358c87e"
                   target ="_blank">
                    <i className="fa fa-medium fa-3x"></i>
                </a>
                <a href="https://github.com/JonathanCMitchell/CarND-Behavioral-Cloning-P3/blob/Master/Pipeline-Final.ipynb"
                   target ="_blank">
                    <i className="fa fa-code fa-3x"></i>
                </a>
                <a href="https://github.com/JonathanCMitchell/CarND-Behavioral-Cloning-P3/blob/Master/Pipeline-Final.pdf"
                    target ="_blank">
                    <i className="fa fa-file-pdf-o fa-3x"></i>
                </a>
            </CardActions>
        </Card>
    )
};



export default BehavioralCloning
