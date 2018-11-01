var React, ReactDOM = require('react');


let A = (props) => {
    console.log(props);
}


let B = function (props) {
    console.log(props)
}

A("This is A");
B("This is B");


ReactDOM.render("Hello!")