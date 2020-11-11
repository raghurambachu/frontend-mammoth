import React from "react";
import DataTableRow from "./DataTableRow";

function DataTable() {
  return (
    <div className=" data-table-wrapper">
      <table className="w-full text-xs font-semibold text-left border-collapse table-fixed">
        <thead className="bg-gray-200 border">
          <tr>
            <th className="w-12 h-12"></th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 ">T </span>
              <span>Category</span>
            </th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 ">T </span>
              <span>Item</span>
            </th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 ">T </span>
              <span>Serving Size</span>
            </th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 "># </span>
              <span>Calories</span>
            </th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 "># </span>
              <span>Calories from Fat</span>
            </th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 "># </span>
              <span>Total Fat</span>
            </th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 "># </span>
              <span>Total Fat(%Daily Value)</span>
            </th>
            <th className="px-4 pt-2 pb-0 border ">
              <span className="text-sm font-thin text-gray-600 "># </span>
              <span>Saturated Fat</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <DataTableRow
            id="1"
            category="Breakfast"
            item="Egg McMuffin"
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
          <DataTableRow
            id="2"
            className="bg-gray-200"
            category="Breakfast"
            item="Egg White Delight"
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
          <DataTableRow
            id="3"
            category="Breakfast"
            item="Sausage McMuffin"
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
          <DataTableRow
            id="4"
            className="bg-gray-200"
            category="Breakfast"
            item="Sausage McMuffin with..."
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
          <DataTableRow
            id="5"
            category="Breakfast"
            item="Sausage McMuffin with..."
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
          <DataTableRow
            id="6"
            className="bg-gray-200"
            category="Breakfast"
            item="Sausage McMuffin with..."
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
          <DataTableRow
            id="7"
            className="bg-gray-200"
            category="Breakfast"
            item="Sausage McMuffin with..."
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
          <DataTableRow
            id="8"
            className="bg-gray-200"
            category="Breakfast"
            item="Sausage McMuffin with..."
            servingSize="4.8 oz (136g)"
            calories="300"
            caloriesFromFat="120"
            totalFat="13"
            totalFatPer="20"
            saturatedFat="5"
          />
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
