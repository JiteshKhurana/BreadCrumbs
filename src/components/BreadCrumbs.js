import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let BreadCrumbsPath = "";

  return (
    <div className="container mx-auto p-4">
      {pathnames?.length > 0 && (
        <Link to="/" className="text-blue-500 cursor-pointer">
          Home
        </Link>
      )}
      {pathnames.map((name, index) => {
        BreadCrumbsPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={BreadCrumbsPath} className="text-gray-700">
            / {name}
          </span>
        ) : (
          <Link
            key={BreadCrumbsPath}
            to={BreadCrumbsPath}
            className="text-blue-500 cursor-pointer"
          >
            / {name}
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
