
var React = require('react');
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');

function getInitialState() {
  return {
    list: []
  }
}

function addNewList(newList) {
  this.setState({
    list: this.state.list.concat([{newTitle: newList.listName, index: this.state.length}])
  });
}

function render() {
  var listItems = this.state.list.map(function(item){
    return (
      <ListContainer title={item.newTitle} key={item.index} />
    );
  }.bind(this));
    return (
      <div className="container">
        <div className="row">
          <AddList add={this.addNewList} />
          {listItems}
        </div>
      </div>
    )
  }
var App = React.createClass({
  getInitialState: getInitialState,
    addNewList: addNewList,
  render:          render
});

React.render(
  <App />,
  document.getElementById('app')
)
