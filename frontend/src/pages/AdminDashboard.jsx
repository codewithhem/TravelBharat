import "../styless/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>TravelBharat project overview and content summary.</p>
      </div>
      <div className="admin-demo-banner">
        <h2>🚧 Demo Admin Dashboard</h2>
        <p>
          This is a preview of the upcoming admin panel.
          Login authentication, role-based access, and CRUD operations will be implemented in future releases.
        </p>
      </div>
      <section className="future-section">
        <h2>🚀 Future Updates</h2>
        <p className="future-subtitle">
          Planned features for the next version of TravelBharat.
        </p>

        <div className="future-grid">
          <div className="future-card">
            <h3>🗺️ Interactive Map</h3>
            <p>Google Maps or Leaflet integration to show tourist places on map.</p>
          </div>

          <div className="future-card">
            <h3>🔐 Admin Authentication</h3>
            <p>Secure admin login using JWT and role-based access control.</p>
          </div>

          <div className="future-card">
            <h3>❤️ Favorites</h3>
            <p>Users can save their favorite states and tourist places.</p>
          </div>

          <div className="future-card">
            <h3>⭐ Reviews & Ratings</h3>
            <p>Users can rate and review tourist places.</p>
          </div>

          <div className="future-card">
            <h3>📅 Trip Planner</h3>
            <p>Users can create a custom travel plan for selected destinations.</p>
          </div>

          <div className="future-card">
            <h3>🌦️ Weather Info</h3>
            <p>Live weather updates for tourist places using Weather API.</p>
          </div>
        </div>
      </section>

      <div className="admin-stats">
        <div className="admin-card">
          <h2>28</h2>
          <p>Total States</p>
        </div>

        <div className="admin-card">
          <h2>84+</h2>
          <p>Tourist Places</p>
        </div>

        <div className="admin-card">
          <h2>84+</h2>
          <p>Popular Foods</p>
        </div>

        <div className="admin-card">
          <h2>5</h2>
          <p>Categories</p>
        </div>
      </div>

      <div className="admin-info">
        <h2>Future Admin Features</h2>
        <p>✔ Add, update and delete states</p>
        <p>✔ Manage tourist places and food details</p>
        <p>✔ Upload destination images</p>
        <p>✔ Content verification and moderation</p>
      </div>
    </div>

  );
}

export default AdminDashboard;