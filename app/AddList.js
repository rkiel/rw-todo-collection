var React = require('react');

function getInitialState() {
  return {
    listName: ''
  };
}

function handleChange(e) {
  this.setState({
    listName: e.target.value
  })
}

function handleSubmit(e) {
  this.props.add(this.state);
  this.setState({
    listName: ''
  });
}

function render() {
  return (
      <div className='col-sm-6'>
        <h3 className='text-center'>Create New List</h3>
        <span>List Name:</span>
        <input type='text' className="form-control" value={this.state.listName} onChange={this.handleChange} placeholder='List Name' />
        <button onClick={this.handleSubmit} className='btn btn-primary'>Submit</button>
      </div>
  );
}

var AddList = React.createClass({
  getInitialState: getInitialState,
  handleChange:    handleChange,
  handleSubmit:    handleSubmit,
  render:          render
});

module.exports = AddList;
