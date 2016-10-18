var React = require('react');

var AddTodo = React.createClass({

    render: function() {
        var sectionOptions = this.props.sections.map(function(section) {
            console.log('> render', section);
            return (
                <option key={section.section_id} value={section.section_id}>{section.title}</option>
            );     
        });
        return (
            <div className="add-todo">
                <input type="text" />
                <select name="add-to-section">
                    {sectionOptions}
                </select>
            </div>
        );
    }
});

module.exports = AddTodo;
