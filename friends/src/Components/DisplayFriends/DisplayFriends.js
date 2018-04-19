import React, {Component} from 'react';


export class DisplayFriends extends Component {
  constructor(props){
    super(props);
    this.state= {
      showButtons: false
    };
  }
  render(){
    let displayFriends = null;
    if (this.props.friends.length > 0) {
      displayFriends = (
        <React.Fragment>
          {this.props.friends.map((friendObj, i) => {
            let displayButtons = null;
            if (this.state.showButtons === true) {
              displayButtons = (
                <div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>
              );
            }
            return (
              <div key={friendObj.id}className='listItem'>
                <p className='centerText'>{friendObj.name}</p>
                <p>Age: {friendObj.age}</p>
                <p>{friendObj.email}</p>
                <button className='displayButttons' onMouseUp={() => this.setState({showButtons: !this.state.showButtons})}> V </button>
                {displayButtons}
              </div>
            );
          })}
        </React.Fragment>
      );
    };
    return (
      <div className='listContainer'>
        {displayFriends}
      </div>
    );
  }
}
