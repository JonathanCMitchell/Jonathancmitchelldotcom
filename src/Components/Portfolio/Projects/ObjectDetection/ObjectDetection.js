/**
 * Created by jonathanmitchell on 5/12/17.
 */
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

const ObjectDetection = (props) => {
  console.log('behavioral cloning props : ', props.imageurl)
  return (
      <Card className="col-md-6 col-xs-12 Project-Card">
        <CardMedia>
          <img src={props.imageurl} />
        </CardMedia>
        <CardTitle
            title="Object Detection - Vehicle Detection and Lane Finding"
            subtitle="Detects vehicles and lane lines from a video stream using a support vector machine and computer vision techniques"
        />
        <CardText>
        <li>• Designed cell-based window search method to extract image features and predict vehicle locations</li>
        <li>• Implemented adaptive color thresholds, filtering, windowing, and morphological operations to detect lane lines</li>
        </CardText>
        <CardActions>
          <a href="https://github.com/JonathanCMitchell/ObjectDetector"
             target ="_blank">
            <i className="fa fa-github fa-3x"></i>
          </a>
          <a href="https://youtu.be/YnIMM0QoqFU"
             target ="_blank">
            <i className="fa fa-youtube fa-3x"></i>
          </a>
        </CardActions>
      </Card>
  )
};



export default ObjectDetection
