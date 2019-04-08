import React from 'react';

const person = (props) => {
    render() {
        return (
            <div>
                <p> I am a {props.name}and I am {props.age} year old </p>
                <p> i eat {props.food} and am sad</p>
                <p> {props.children}</p>
            </div>
        )
    };
}
export default person;