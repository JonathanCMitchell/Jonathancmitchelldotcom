/**
 * Created by jj on 2/12/17.
 */
import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const Omakase = (props) => {
    return (
        <Card className="col-md-6 col-xs-12 Project-Card">
            <CardMedia>
                <img src={props.imageurl} />
            </CardMedia>
            <CardTitle
                title="Omakase"
                subtitle="A location-based food ranking application, (“Yelp for a single dish item”)"
            />
            <CardText>
              <li>• Product manager for a team of 4, taught git workflow to team members, validated all commits and pull requests</li>
              <li>• Designed relational database schema in SQL to accomplish MVP and authentication features</li>
              <li>• Implemented models to read/write data to and from a MySql database using an Object-relational mapping tool</li>
            </CardText>
            <CardActions>
                <a href="http://tryomakase.herokuapp.com"
                   target ="_blank">
                    <i className="fa fa-eye fa-3x"></i>
                </a>
                <a href="http://github.com/Omakaseinc/omakase"
                   target ="_blank">
                    <i className="fa fa-github fa-3x"></i>
                </a>
            </CardActions>
        </Card>
    )
};



export default Omakase