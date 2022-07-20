import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>about project</h1>
        <p>
          uncle khashi one of the best creative web developers around the world
          has built this feedback app , share your feedback w me!
        </p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to home bebe</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
