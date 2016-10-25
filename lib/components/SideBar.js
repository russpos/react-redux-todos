var React = require('react');

var SideBar = React.createClass({

    render: function() {
        console.log('rendering sidebar ', this.props.visibility);
        var viewAllClass = "";

        var listNodes = this.props.lists.map(function(list) {
            //var className = (list === currentList) ? "selected" : "";
            var className = '';
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
