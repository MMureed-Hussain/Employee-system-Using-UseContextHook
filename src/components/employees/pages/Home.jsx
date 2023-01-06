import React from "react";
import { EmployeeList } from "../EmployeeList";
import { Heading } from "../Heading";
// import { GlobalContext } from '../reducers/GlobalState'

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          CRUD with React Context API and Hooks
        </h3>
        <EmployeeList />
        <Heading />
      </div>
    </>
  );
}
