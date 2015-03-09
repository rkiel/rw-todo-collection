
var React = require('react');
var ListContainer = require('./ListContainer');
var AddList = require('./AddList');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <AddList />
          <ListContainer title='Days Are Numbered' />
        </div>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)
