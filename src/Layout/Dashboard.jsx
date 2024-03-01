
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { PiAddressBookFill } from "react-icons/pi";

import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = UseAdmin();
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaListUl />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <PiAddressBookFill />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsersLine />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaRegCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdRateReview />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <TbBrandBooking />
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* Shared NavLink */}
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <BiSolidFoodMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <MdOutlineMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
