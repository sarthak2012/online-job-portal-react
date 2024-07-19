
import React from "react";
//imported icon search image from react icons
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] ">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[8px] bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100]"
              placeholder="Search job here..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100]"
              placeholder="Search by company"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100]"
              placeholder="Search by location"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="Role" className="text-[#808080]">
            Role:
          </label>
          <select
            name=""
            id="Role"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Frontend Developer</option>
            <option value="">Backed Developer</option>
            <option value="">IOS Developer</option>
            <option value="">Android Developer</option>
            <option value="">Development ADvocate</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="Type" className="text-[#808080]">
            Type:
          </label>
          <select
            name=""
            id="Type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-time</option>
            <option value="">Part-time</option>
            <option value="">Contract</option>
            <option value="">Remote</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="Level" className="text-[#808080]">
            Level:
          </label>
          <select
            name=""
            id="Level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Fresher</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Senior</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="Location" className="text-[#808080]">
            Location:
          </label>
          <select
            name=""
            id="Location"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Remote</option>
            <option value="">In-Office</option>
            <option value="">Hybrid</option>
          </select>
        </div>

        <span className="text-[#a1a1a1] cu">Clear all</span>
      </div>
    </div>
  );
}

export default SearchBar;
