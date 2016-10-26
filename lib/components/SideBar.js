var React = require('react');
var visibilities = require('../Data/visibilities');

var FilterLink = React.createClass({


    onLinkClick: function onLinkClick() {
        this.props.onFilterLinkClick(
            this.props.visibilityMode,
            this.props.visibilityArg
        );
    },

    render: function render() {
        var filterName = this.props.filterName;
        var className = (!!this.props.isSelected) ? "selected" : "";

        return (
            <li onClick={this.onLinkClick} className={className}>{filterName}</li>
        );
    }
});

var SideBar = React.createClass({

    render: function() {
        var viewAllIsSelected = false;
        var viewAllText = "View All";
        var selectedListId = false;

        var visibilityMode = this.props.visibilityMode;
        var visibilityArg  = this.props.visibilityArg;

        switch (visibilityMode) {
            case visibilities.MODE_ALL:
                viewAllIsSelected = true;
                break;

            case visibilities.MODE_LIST:
                selectedListId = visibilityArg;
                break;
        }

        var onFilterLinkClick = this.props.onFilterLinkClick;

        var listNodes = this.props.lists.map(function(list) {
            var isSelected = (list.get('list_id') === selectedListId);
            return (
                <FilterLink
                    filterName={list.get('list_name')}
                    isSelected={isSelected}
                    key={list.get('list_id')}
                    onFilterLinkClick={onFilterLinkClick}
                    visibilityArg={list.get('list_id')}
                    visibilityMode={visibilities.MODE_LIST}
                />
            );
        });
        console.log('> Rendering the sidebar...', visibilityMode, visibilityArg);
        return (
            <div className="side-bar">
                <ul>
                    <FilterLink
                        filterName={viewAllText}
                        isSelected={viewAllIsSelected}
                        key={-1}
                        onFilterLinkClick={onFilterLinkClick}
                        visibilityArg={undefined}
                        visibilityMode={visibilities.MODE_ALL}
                    />
                    {listNodes}
                </ul>
            </div>
        );
    }
});

module.exports = SideBar;
