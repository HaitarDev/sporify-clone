"use client";

import { BiPlus } from "react-icons/bi";
import { RiPlayListFill } from "react-icons/ri";

function Library() {
  function onClick() {}
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-3">
        <div className="flex gap-2 text-neutral-400">
          <RiPlayListFill size={24} />
          Your Library
        </div>
        <button onClick={onClick}>
          <BiPlus
            size={26}
            className="text-neutral-400 hover:text-white transition "
          />
        </button>
      </div>

      <div>List of Songs</div>
    </div>
  );
}
export default Library;
