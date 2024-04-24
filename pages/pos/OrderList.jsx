import ComboBox from "@/components/common/ComboBox";
import {
  MinusCircleIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
  EllipsisVerticalIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function OrderList() {
  const options = [
    "Select an option",
    "Walk in customer",
    "John",
    "Smith",
    "Ana",
    "Elza",
  ];
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="p-6 bg-white">
      <div className="py-3 px-5 bg-slate-50 flex items-center justify-between rounded">
        <div>
          <h4>Order List</h4>
          <p className="text-gray-500 text-sm">Transaction ID : #65565</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <TrashIcon className="w-5 text-red-500" />
          <EllipsisVerticalIcon className="h-6" />
        </div>
      </div>

      <p className="font-semibold mt-5 mb-2">Customer Information</p>
      <div className="flex w-full items-center gap-2">
        <ComboBox
          className="flex-1"
          selected={selected}
          setSelected={setSelected}
          options={options}
        />
        <div className="p-3 bg-orange-400 text-white rounded flex items-center justify-center">
          <UserPlusIcon className="w-5" />
        </div>
      </div>
      <ComboBox
        className="mt-3"
        selected={selected}
        setSelected={setSelected}
        options={options}
      />

      <div className="flex items-center justify-between mt-5 mb-2 border-t py-5">
        <p className="font-semibold">
          Product Added{" "}
          <span className="rounded-full bg-orange-400 text-white px-2 text-xs py-1 ml-1">
            2
          </span>
        </p>
        <p className="text-sm text-red-500">Clear All</p>
      </div>

      <div className="flex items-center justify-between">
        {" "}
        <div className="flex items-start gap-2">
          <div className="bg-slate-50 p-4 rounded-md">
            <img
              src="/pos/products/pos-product-06.png"
              className="w-16"
              alt=""
            />
          </div>
          <div>
            <p className="bg-orange-400 rounded text-white px-2 text-sm w-fit">
              PT0005
            </p>
            <p className="text-sm font-medium my-2">Red Nike Laser</p>
            <p className="text-gray-600">$2000</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          {" "}
          <div className="flex items-center border py-1 px-2 bg-gray-100 gap-2 text-sm rounded-md">
            <PlusCircleIcon className="w-4 cursor-pointer" />
            3
            <MinusCircleIcon className="w-4 cursor-pointer" />
          </div>
          <PencilSquareIcon className="w-5" />
          <TrashIcon className="text-red-500 w-5" />
        </div>
      </div>
    </div>
  );
}
