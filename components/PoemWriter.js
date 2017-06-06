import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ""
    };
    this.updatePoem = this.updatePoem.bind(this)
  }

  updatePoem(event) {
    let text = event.target.value.split(`\n`)

    if (text.length !== 3) {
      new Error('Poem must be 3 lines long')
    } else if (text[0].trim().split(' ').length !== 5 &&     text[1].trim().split(' ').length !== 3 && text[2].trim().split(' ').length !== 5) {
      new Error('Each line of the poem must be the correct lengths')
    } else {
      this.setState({
        poem: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.updatePoem}/>
        <p>{this.state.poem}</p>
        {this.state.poem.length === 0 ?
          <div id="poem-validation-error" style={{color: 'red'}} >This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}
