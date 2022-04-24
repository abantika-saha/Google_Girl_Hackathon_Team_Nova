import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './style.css'


class CourseCard extends Component {
    constructor(props) {
        super(props);

        
    }
    //==========================================================================
    
    //==========================================================================
    render() {
        const { Name, SubCode, Teacher, id} = this.props;

        return (
            
                <div className="courseCard">
                    
                    <div className="courseCard__title">{Name}
                    </div>
                    
                    <div className="courseCard__title">{SubCode}</div>
                    <div className="courseCard__title">{Teacher}</div>
                    
                </div>
            
        );
    }
}
export default CourseCard;

