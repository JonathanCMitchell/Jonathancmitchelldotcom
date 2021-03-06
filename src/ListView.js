/**
 * Created by jj on 2/3/17.
 */
import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import ListViewItem from './ListViewItem'
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios'
import { IndexLink } from 'react-router'
import { Link } from 'react-router'

class ListView extends Component {
    constructor(props) {
        super(props);
        this.renderListViewItems = this.renderListViewItems.bind(this);
        this.handleListViewItemChange = this.handleListViewItemChange.bind(this)
        this.handleInputData = this.handleInputData.bind(this)
    }
    renderListViewItems() {
        var data = {"name": "Bello", "hometown": "Taiwan"}
        var data2 = {"name": "Jonathan", "hometown": "Los Angeles"}
        var arr = [data, data2]
        console.log('arr length: ', arr.length) // 2
        return arr.map((data) => {
            return (
                <ListViewItem handleChange = {this.handleListViewItemChange} city={data.hometown} name = {data.name} />
            )
        })
    }

    handleInputData() {
    axios.get('gamereviewapi.herokuapp.com/api/search/games/?score=10')
        .then((data) => {
            console.log('data from response: ', data)
        })

    }

    handleListViewItemChange(event) {
        console.log('inside ListView inside handleListViewItemChange event: ', event.target.value)
    }

    render() {


        return (
            <div>
                <FlatButton backgroundColor={"red"} type="Submit" onChange={this.handleInputData()} />
                <button>

                    <IndexLink to="/ListViewItem">To List View ITem</IndexLink>
                </button>


                <button>

                    <Link to="/ListViewItem">To Listee View ITem</Link>
                </button>
                <Paper><ul>{this.renderListViewItems()}</ul></Paper>
                <Paper>
                    <p>Blog content ish man lumina starta arsa ibut ibimson dimsun alamoni. Blog content
                        ish man lumina starta arsa ibut ibimson dimsun alamoni. Blog content ish man lumina
                        starta arsa ibut ibimson dimsun alamoni</p>

                </Paper>
            </div>


        )
    }
}

export default ListView


// <FlatButtonon onClick={this.handleInputData()}/>
//
