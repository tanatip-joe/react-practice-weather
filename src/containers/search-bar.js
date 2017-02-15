import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        };
    }

    input = null;

    _onKeyPress(target) {
        if (target.key === 'Enter') {
            this.setState({
                keyword: this.input.value
            });
        }
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.keyword);
        this.setState({
            keyword: ''
        });
    }

    render() {
        const {keyword} = this.state;
        return (
            <div>
              <form className="input-group"
                    onSubmit={ (event) => this.onFormSubmit(event) }>
                <input placeholder="Get a five-day forecast in your favorite cities"
                       className="form-control"
                       value={ keyword }
                       onChange={ () => this.setState({
                                      keyword: this.input.value
                                  }) }
                       ref={ (elm) => this.input = elm } />
                <span className="input-group-btn"><button className="btn btn-secondary"
                                                          type="submit"> Submit </button></span>
              </form>
            </div>
            );
    }
}

function mapStateToProps() {

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchWeather
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);