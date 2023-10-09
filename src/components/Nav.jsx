import { FiLogIn } from "react-icons/fi";

function Nav({toggle}) {
  return (
    <div className="pb-10 max-w-4xl mx-auto">
      <div className="flex justify-between p-4 items-center rounded-md bottom-4 shadow-lg">
        <div className="bg-cus">
          <h1 className=" font-bold text-2xl  ">Linkly</h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          {/* <button
            type="button"
            className="inline-flex items-center gap-3 justify-center rounded-full dark:text-grey  bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Login
            <FiLogIn />
          </button> */}
          
          <label className="toggleDarkBtn">
          <input type="checkbox" onClick={toggle} />
          <span className="slideBtnTg  round"></span>
        </label>
        </div>
      </div>
    </div>
  );
}

export default Nav;
