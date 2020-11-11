import React from "react";

function DataTableRow(props) {
  return (
    <tr className={`text-gray-700 ${props.className || ""} `}>
      <td className="p-1 text-center border text">{props.id}</td>
      <td className="px-4 py-1 text-xs font-semibold border">
        {props.category}
      </td>
      <td className="px-4 py-1 text-xs font-semibold border">{props.item}</td>
      <td className="px-4 py-1 text-xs font-semibold border">
        {props.servingSize}
      </td>
      <td className="px-4 py-1 text-xs font-semibold border">
        {props.calories}
      </td>
      <td className="px-4 py-1 text-xs font-semibold border">
        {props.caloriesFromFat}
      </td>
      <td className="px-4 py-1 text-xs font-semibold border">
        {props.totalFat}
      </td>
      <td className="px-4 py-1 text-xs font-semibold border">
        {props.totalFatPer}
      </td>
      <td className="px-4 py-1 text-xs font-semibold border">
        {props.saturatedFat}
      </td>
    </tr>
  );
}

export default DataTableRow;
