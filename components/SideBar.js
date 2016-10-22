var React = require('react');

var SideBar = React.createClass({

    render: function() {
        var currentList = this.props.currentList;
        var viewAllClass = "";
        if (!currentList) {
            viewAllClass = "selected";
        }
        var listNodes = this.props.lists.map(function(list) {
            var className = (list === currentList) ? "selected" : "";
            return (
                <li key={list.get('list_id')}
                    className={className}>{list.get('list_name')}</li>
            );
        });

        return (
            <div className="side-bar">
                <div className={viewAllClass}>View All</div>
                <ul>
                    {listNodes}
                </ul>
            </div>
        );
    }
});

module.exports = SideBar;
