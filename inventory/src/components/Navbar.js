import { NavLink } from "react-router-dom"

export const Navbar = ()=> {

    const getClass = ({ isActive }) => {
        return isActive ? "text-red-600" : "text-blue-100";
      };

    return (
        <div className="flex gap-10  bg-black text-xl font-bold flex-col p-4 justify-center ">


            <NavLink to={"/dashboard"}  className={getClass}>Dashboard</NavLink>
            <NavLink to={"/department"} className={getClass}  >Department</NavLink>
            <NavLink to={"/products"}  className={getClass} >Products</NavLink>


        </div>
    )
}