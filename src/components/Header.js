import React from 'react';

const Header = (props) => (
      <header>
        <div className="row">
          <div className="col s11 m11 l11">
            <h2>Overview</h2>
            <span>{props.locality}</span>
          </div>
        </div>
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
