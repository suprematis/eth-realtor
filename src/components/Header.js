import React from 'react';

const Header = (props) => (
      <header>
        <h3 className="medium">Current Housing Listings</h3>
        <h4 className="medium">
          <span>{props.locality}</span>
        </h4>
      </header>
);



// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>Current Housing Listings</h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//
//       </header>
//     )
//   }
// }

export default Header;
