'use strict';
 // Define a LikeButton component
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // At first, the user didn't click "Like"
    this.state = { liked: false };
  }
   render() {
    // If the user clicked "Like", show a message
    if (this.state.liked) {
      return 'You liked this.';
    }
     // Otherwise, show the "Like" button
    return React.createElement(
      'button', // This can be any DOM tag, try changing it to 'h1'
      {
        // This object contains button's "props" (short for properties).
        // They may be DOM attributes or event handlers.
        onClick: () => this.setState({ liked: true })
      },
      // Put any content here!
      'Like'
    );
  }
}
 // Find the DOM container we defined in HTML.
let domContainer = document.querySelector('.like_button_root');
 // Show the LikeButton component inside our DOM container.
ReactDOM.render(
  React.createElement(LikeButton),
  domContainer
);