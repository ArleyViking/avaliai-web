import { Link, useLocation } from "react-router-dom";
import { cloneElement } from "react";

export function NavLink({ href, children }) {
  const { pathname } = useLocation();
  const active = pathname === href;

  console.log(pathname, href);
  return (
    <Link to={href}>
      {cloneElement(children, {
        "aria-current": active,
        className: active ? "active" : "",
      })}
    </Link>
  );
}
