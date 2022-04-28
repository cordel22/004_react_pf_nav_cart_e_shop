/* import { Link, Outlet } from "react-router-dom"; */
import {
  NavLink,
  Outlet,
  useSearchParams,
 } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
              .map((invoice) => (
                <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
                /* <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`/invoices/${invoice.number}`}
                  key={invoice.number}
                >
                  {invoice.name}
                </Link> */

                /*  possibly
                // normal string
      <NavLink className="red" />

      // function
      <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />

                */
          
        ))}
      </nav>
      <Outlet />
    </div>
    </main>
  );
}