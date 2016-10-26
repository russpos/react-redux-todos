var React = require('react');
var visibilities = require('../Data/visibilities');

var SideBar = React.createClass({

    render: function() {
        console.log('rendering sidebar ', this.props.visibility);
        var viewAllClass = "";
        var selectedListId = false;

        switch (this.props.visibility.get('mode')) {
            case visibilities.MODE_ALL:
                var viewAllClass = "selected";
                break;

            case visibilities.MODE_LIST:
                selectedListId = this.props.visibility.get('args');
                break;
        }

        var listNodes = this.props.lists.map(function(list) {
            var className = (list.get('list_id') === selectedListId) ? "selected" : "";
            return (
                <li key={list.get('list_id')}
                    className={className}>{list.get('list_name')}</li>
            );
        });

        return (
            <div className="side-bar">
                <ul>
                <li className={viewAllClass}>View All</li>
                    {listNodes}
                </ul>
            </div>
        );
    }
});

module.exports = SideBar;
