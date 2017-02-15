import React, { Component } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Chart extends Component {

    average(data) {
        return _.round(_.sum(data) / data.length);
    }

    render() {
        const {data, color, units} = this.props;
        return (
            <div>
              <Sparklines height={ 120 }
                          width={ 180 }
                          data={ data }>
                <SparklinesLine color={ color } />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              <div>
                { this.average(data) }
                { units }
              </div>
            </div>
            );
    }
}

export default Chart;