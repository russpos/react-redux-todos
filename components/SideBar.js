var React = require('react');

var SideBar = React.createClass({

    render: function() {
        return (
            <div className="side-bar">
                <ul>
                    <li>Add an item</li>
                    <li>Lists</li>
                </ul>
            </div>
        );
    }
});

module.exports = SideBar;
