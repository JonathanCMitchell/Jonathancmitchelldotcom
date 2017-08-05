/**
 * Created by jonathanmitchell on 8/5/17.
 */


/**
 * Created by jj on 2/12/17.
 */

import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const SpeedEstimator = (props) => {
  return (
      <Card className="col-md-6 col-xs-12 Project-Card">
        <CardMedia>
          <img src={props.imageurl} />
        </CardMedia>
        <CardTitle
            title="Speed Estimator"
            subtitle="Neural network dashboard cam speed estimator for autonomous vehicles trained on 8616 images extracted from a video"
        />
        <CardText>
          <li>• Utilized dense optical flow analysis and architected conv-net processing pipeline to achieve MSE of ~5.6</li>
        </CardText>
        <CardActions>
          <a href="https://github.com/JonathanCMitchell/speedChallenge"
             target ="_blank">
            <i className="fa fa-github fa-3x"></i>
          </a>
          <a href="https://youtu.be/1QjPMWIpJ7I"
             target ="_blank">
            <i className="fa fa-youtube fa-3x"></i>
          </a>
          <a href="https://chatbotslife.com/autonomous-vehicle-speed-estimation-from-dashboard-cam-ca96c24120e4"
             target ="_blank">
            <i className="fa fa-medium fa-3x"></i>
          </a>
          <a href="https://github.com/JonathanCMitchell/speedChallenge/blob/master/NvidiaModel-OpticalFlowDense_kerasnew.ipynb"
             target ="_blank">
            <i className="fa fa-code fa-3x"></i>
          </a>

        </CardActions>
      </Card>
  )
};



export default SpeedEstimator
