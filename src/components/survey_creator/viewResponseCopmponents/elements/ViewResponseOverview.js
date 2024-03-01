"use client";
import { FaShareAltSquare } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { IoBarChartSharp } from "react-icons/io5";
import {
  MdOutlineIncompleteCircle,
  MdOutlineStarRate,
  MdSwitchAccessShortcutAdd,
} from "react-icons/md";
import ViewResponseBarChart from "./ViewResponseBarChart";
import ViewResponsePieChart from "./ViewResponsePieChart";
import ViewResponseStat from "./ViewResponseStat";
export default function ViewResponseOverview() {
  return (
    <section className="p-6 my-6 ">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <ViewResponseStat name="Total Survey" data="200">
          <IoMdAnalytics className="text-6xl" />
        </ViewResponseStat>

        <ViewResponseStat name="Total Share" data="3000">
          <FaShareAltSquare className="text-6xl" />
        </ViewResponseStat>

        <ViewResponseStat name="Total Response" data="2000">
          <MdSwitchAccessShortcutAdd className="text-6xl" />
        </ViewResponseStat>
        <ViewResponseStat name="Response Rate" data="80%">
          <MdOutlineStarRate className="text-6xl" />
        </ViewResponseStat>
        <ViewResponseStat name="Completion Rate" data="80%">
          <MdOutlineIncompleteCircle className="text-6xl" />
        </ViewResponseStat>

        <ViewResponseStat name="Average Rating" data="80%">
          <IoBarChartSharp className="text-6xl" />
        </ViewResponseStat>
      </div>
      <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 mt-16">
        <ViewResponseBarChart />
        <ViewResponsePieChart />
      </div>
    </section>
  );
}
