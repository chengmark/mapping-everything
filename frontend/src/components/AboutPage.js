import React from "react";
import { Container, ListGroup, Table, Image } from "react-bootstrap";

const port = "/2053/";

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <h3>About This Project</h3>
      <ListGroup className="mt-5 mb-5">
        <ListGroup.Item>
          {" "}
          <h4>1. Names and workload</h4>
          <Table striped>
            <thead>
              <tr>
                <th>Name</th>
                <th>Work done</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anju Otsuka</td>
                <td>
                  Implemented charting statistics for users and admin. 
                  Additionally assisted in implementation of routing for initial 
                  fetching of data from the open dataset. 
                </td>
              </tr>
              <tr>
                <td>Cheng Mo</td>
                <td>
                  Building database models, basic CRUD api for all the data,
                  data initialization on server start. Implementing user
                  management, user positioning, search by distance, update and
                  deletion of stops, uploading csv
                </td>
              </tr>
              <tr>
                <td>Dineth Perera</td>
                <td>
                  Handled Bus stop database model, NodeJs backend routing for
                  stop related queries and ETA calculation. Basic functionality
                  of Admin location creation and ETA view pages.
                </td>
              </tr>
              <tr>
                <td>Yousif Alebyary</td>
                <td>
                  Fetching data from the backend and state-management. Basic
                  functionality of list, map, user, login/signup, location and
                  about pages. Navigation and field search.
                </td>
              </tr>
            </tbody>
          </Table>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4 className="mb-4">2. How To & specification</h4>
          <h5>User:</h5>{" "}
          <p>
            The users can create a new account or login to their preexisting
            one. Once logged in they can add locations to their favorites (which
            will show on their user page), and also comment on locations. They
            can also see the most popular locations in a chart. The users can
            also set their "home" location from their userpage and find all
            locations that are a certain distance away from their home location
            using the search bar Whether logged in or not they can see all of
            the locations in a list or map, and see comments, and ETA. And also
            sort or search locations using a certain field. The users can see
            the list of locations by going to (/list), and they can see the
            location map by going to (/map). Links are provided in the navbar.
            Clicking a location marker on the map or an entry on the list shows
            the location's page with its information, location on map and ETA.
            The User can comment and add the location to favorites from that
            page
          </p>
          <h5>Admin:</h5>
          <p>
            The admin has the ability to see the most active users by comments
            and favorites. They can also perform CRUD operations on any user or
            location, as well as flushing the entire location database. The
            admin view is accessed by going to /admin. They can see user charts
            and change userdata in their user page (/admin), and they can change
            location data or flush it from the list page (/list)
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>3. Design of data schemas</h4>
          <Image
            fluid
            rounded
            src={process.env.PUBLIC_URL + "uml.jpg"}
            className="mt-1 mb-1"
          />
          <Image
            fluid
            rounded
            src={process.env.PUBLIC_URL + "route.png"}
            className="mt-1 mb-1"
          />
          <Image
            fluid
            rounded
            src={process.env.PUBLIC_URL + "stop.png"}
            className="mt-1 mb-1"
          />
          <Image
            fluid
            rounded
            src={process.env.PUBLIC_URL + "user.png"}
            className="mt-1 mb-1"
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>4. Technologies in use and advantages:</h4>
          <h5>Technologies in use:</h5>
          Mongoose, Express, React, NodeJs
          <Table striped className="mt-3 mb-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Advantages</th>
                <th>Disadvantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
                <td>
                  <p>
                    Easy to use: Everyone in our group has changed atleast part
                    of the react code
                  </p>
                  <p>
                    Uses virtual DOM so it does not render the entire page
                    everytime data changes
                  </p>
                </td>
                <td>
                  <p>
                    Only handles rendering, so we needed other modules to handle
                    data fetching and routing
                  </p>
                  <p>Multiple State-management solutions can be confusing</p>
                </td>
              </tr>
              <tr>
                <td>MongoDB + Mongoose</td>
                <td>
                  <p>
                    Schema-less nature (NoSQL) of MongDB gives more flexibility
                    in the data stored compared to other SQL technologies.
                  </p>
                  <p>
                    MongoDB utilises JSON-style (BSON) storage format, which
                    allows for easy access and manipulation of data.
                  </p>
                  <p>Mongoose has easy to use syntax</p>
                </td>
                <td>
                  <p>Mongoose does not run as fast as native MongoDB</p>
                  <p>High memory consumption</p>
                </td>
              </tr>
              <tr>
                <td>NodeJs</td>
                <td>
                  <p>Offers high performance</p>
                </td>
                <td>
                  <p>
                    Requires a good understanding of asynchronous programming
                    for API calls/database access
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>5. Academic honesty Article</h4>
          Yes. We have read the academic honesty article carefully.
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default AboutPage;
