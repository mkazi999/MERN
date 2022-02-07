import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h2>The Welcome page</h2>
      <Route path='/welcome/new-user'>
          <p>welcome, new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
