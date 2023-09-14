import React from "react";
import { Link, Outlet } from "react-router-dom";
import useSelectItem from "../../customHooks/useSelectItem";
import useAdmin from "../../customHooks/useAdmin";
import useInstructor from "../../customHooks/useInstructor";

const Dashboard = () => {
  const [seatData] = useSelectItem();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isInstructor);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-12">
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <Link
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                  data-mdb-toggle="collapse"
                  href="#collapseExample1"
                  aria-expanded="true"
                  aria-controls="collapseExample1"
                >
                  <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                  <span>Expanded menu</span>
                </Link>
                <ul
                  id="collapseExample1"
                  className=" text-center collapse show p-4 list-group"
                >
                  {isAdmin ? (
                    <>
                      <li className="list-group-item py-3">
                        <Link
                          to={"/"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-house-chimney"></i> &nbsp;
                          Admin Home
                        </Link>
                      </li>
                      <li className="list-group-item py-3">
                        <Link
                          to={"/dashboard/myclasses"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          Manage Classes +
                          <span className="badge bg-secondary p-2">
                            {seatData?.length || 0}
                          </span>
                        </Link>
                      </li>

                      <li className="list-group-item py-3">
                        <Link
                          to={"/dashboard/manageclasses"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-users-rectangle"></i> &nbsp; Manage
                          Classes
                        </Link>
                      </li>

                      <li className="list-group-item py-3">
                        <Link
                          to={"/dashboard/allusers"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-user"></i> &nbsp; Manage
                          Users
                        </Link>
                      </li>
                    </>
                  ) : isInstructor ? (
                    <>
                      <li className="list-group-item py-3">
                        <Link
                          to={"/"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-house-chimney"></i> &nbsp;
                          Instructor Home
                        </Link>
                      </li>
                      <li className="list-group-item py-3">
                        <Link
                          to={"/dashboard/myclasses"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          Total Classes +
                          <span className="badge bg-secondary p-2"></span>
                        </Link>
                      </li>
                      <li className="list-group-item py-3">
                        <Link
                          to={"/dashboard/myaddclass"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-users-rectangle"></i> &nbsp;
                          My Added Classes
                        </Link>
                      </li>

                      <li className="list-group-item py-3">
                        <Link
                          to={"/dashboard/addclass"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-plus"></i> &nbsp; Add a
                          class
                        </Link>
                      </li>

                      <li className="list-group-item py-3">
                        <Link className="text-reset text-decoration-none fs-5">
                          Feedback
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="list-group-item py-3">
                        <Link
                          to={"/"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-house-chimney"></i> &nbsp;
                          Student Home
                        </Link>
                      </li>
                      <li className="list-group-item py-3">
                        <Link
                          to={"/dashboard/myclasses"}
                          className="text-reset text-decoration-none fs-5"
                        >
                          <i className="fa-solid fa-screen-users"></i>
                          My Enrolled Classes +
                          <span className="badge bg-secondary p-2">
                            {seatData?.length || 0}
                          </span>
                        </Link>
                      </li>

                      <li className="list-group-item py-3">
                        <Link className="text-reset text-decoration-none fs-5">
                          <i className="fa-solid fa-wallet"></i> &nbsp; Payment
                          History
                        </Link>
                      </li>
                    </>
                  )}

                  <hr />
                  <li className="list-group-item py-3">
                    <Link
                      to={"/"}
                      className="text-reset text-decoration-none fs-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="list-group-item py-3">
                    <Link
                      to={"/classes"}
                      className="text-reset text-decoration-none fs-5"
                    >
                      Go to All Class page
                    </Link>
                  </li>
                </ul>

                <Link
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                  data-mdb-toggle="collapse"
                  href="#collapseExample2"
                  aria-expanded="true"
                  aria-controls="collapseExample2"
                >
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Collapsed menu</span>
                </Link>
                <ul
                  id="collapseExample2"
                  className="collapse list-group list-group-flush"
                >
                  <li className="list-group-item py-1">
                    <Link className="text-reset">My Classes</Link>
                  </li>
                  <li className="list-group-item py-1">
                    <Link to={"/"} className="text-reset">
                      Home
                    </Link>
                  </li>
                  <li className="list-group-item py-1">
                    <Link to={"/classes"} className="text-reset">
                      Link
                    </Link>
                  </li>
                  <li className="list-group-item py-1">
                    <Link to={"/"} className="text-reset"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-lg-8 col-12 p-5 bg-body-tertiary">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
