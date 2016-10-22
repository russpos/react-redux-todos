var React = require('react');

var AddTodo = React.createClass({

    getInitialState: function getInitialState() {
        return {
            title: "",
            list_id: this.props.currentList.get('list_id')
        };
    },

    onAddButtonClick: function onAddButtonClick() {
        console.log('Hi>', this.state);

    },

    onListSelectChange: function onListSelectChange(event) {
        this.setState({
            list_id: parseInt(event.target.value, 10)
        });
    },

    onTitleChange: function onTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    },

    render: function() {
        var listOptions = this.props.lists.map(function(list) {
            return (
                <option key={list.get('list_id')} value={list.get('list_id')}>{list.get('list_name')}</option>
            );     
        });
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={this.onTitleChange} />
                <select onChange={this.onListSelectChange} defaultValue={this.state.list_id} name="add-to-section">
                    {listOptions}
                </select>
                <button onClick={this.onAddButtonClick}>Add</button>
            </div>
        );
    }
});

module.exports = AddTodo;
