

import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/DashboardLayout.jsx';
import Dashboard from './pages/DashBoard/DashBoard.jsx';
import Events from './pages/Events/Events.jsx';
import CreateEvents from './pages/Events/CreateEvents.jsx';
import EventDetails from './pages/Events/EventDetails.jsx';
import Placeholder from './pages/Placeholder.jsx';

const ProtectedRoute = ({ children }) => children;
const Login = () => <Placeholder title="Login" description="Authentication flow coming soon." />;
const Users = () => (
  <Placeholder title="Users" description="Manage users and assignments here." />
);
const Reports = () => (
  <Placeholder title="Reports" description="Visualize performance metrics and KPIs." />
);

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
        children={[
          <Route key="dashboard" index element={<Dashboard />} />,
          <Route key="events" path="events" element={<Events />} />,
          <Route key="create-event" path="events/create" element={<CreateEvents />} />,
          <Route key="event-details" path="events/:id" element={<EventDetails />} />,
          <Route key="users" path="users" element={<Users />} />,
          <Route key="reports" path="reports" element={<Reports />} />,
        ]}
      />
    </Routes>
  );
}

export default App;
