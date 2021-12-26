import { Link, Outlet } from "react-router-dom";
import Rewards from "../Data/Data";

export default function Statuses() {
  let rewards = Rewards();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {rewards.map(status => (
          <Link
            
            to={`/statuses/${rewards.id}${rewards.status}`}
            key={rewards.id}
          >
            {rewards.user.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
