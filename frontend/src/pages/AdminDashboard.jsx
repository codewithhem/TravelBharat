import "../styless/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>TravelBharat project overview and content summary.</p>
      </div>

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