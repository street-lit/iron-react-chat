var navbarLoggedOut = React.createClass({
  render: function() {
    return (
  	  <nav className="#ff3d00 deep-orange accent-3">
  	    <div className="nav-wrapper">
  	      <a href="/welcome" className="brand-logo">Chatterbox!</a>
  	      <ul id="nav-mobile" className="right hide-on-med-and-down">
  	        <li><a href="/welcome">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/chatrooms">All Rooms</a></li>
  	        <li><a href="/users">All Users</a></li>
  	        <li><a href="/login">Login</a></li>
            <li><a href="/users/new">Sign Up</a></li>
  	      </ul>
  	    </div>
  	  </nav>
    );
  }
});
