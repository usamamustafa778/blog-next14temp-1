import {
  ArrowPathIcon,
  ArrowPathRoundedSquareIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import OrderList from "./OrderList";

const originalCategories = [
  { title: "All Categories", img: "/pos/category-01.png" },
  { title: "Headphones", img: "/pos/category-02.png" },
  { title: "Shoes", img: "/pos/category-03.png" },
  { title: "Mobiles", img: "/pos/category-04.png" },
  { title: "Watches", img: "/pos/category-05.png" },
  { title: "Laptops", img: "/pos/category-06.png" },
];

// Prepend the last item and append the first item to the array
const categories = [
  originalCategories[originalCategories.length - 1],
  ...originalCategories,
  originalCategories[0],
];

export default function Pos() {
  const [translateValue, setTranslateValue] = useState(0);
  const cardWidth = 180; // Adjust based on your card width + gap
  const sliderRef = useRef();

  useEffect(() => {
    // Adjust translateValue to start from the first "real" item, not the cloned one
    setTranslateValue(-cardWidth);
  }, [cardWidth]);

  const slideRight = () => {
    if (translateValue === -(cardWidth * originalCategories.length)) {
      // Jump to the first "real" item instantly (without animation) when reaching the cloned last item
      sliderRef.current.style.transition = "none";
      setTranslateValue(-cardWidth);
      // Trigger reflow to apply the transition; then slide to the next item
      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.3s ease-out";
        setTranslateValue((value) => value - cardWidth);
      }, 10);
    } else {
      setTranslateValue((value) => value - cardWidth);
    }
  };

  const slideLeft = () => {
    if (translateValue === 0) {
      // Jump to the last "real" item instantly (without animation) when reaching the cloned first item
      sliderRef.current.style.transition = "none";
      setTranslateValue(-(cardWidth * originalCategories.length));
      // Trigger reflow; then slide to the previous item
      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.3s ease-out";
        setTranslateValue((value) => value + cardWidth);
      }, 10);
    } else {
      setTranslateValue((value) => value + cardWidth);
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="flex items-center gap-2 p-6">
        <button className="btnPrimary bg-blue-950">
          <ShoppingCartIcon className="w-5" /> View Orders
        </button>
        <button className="btnPrimary bg-sky-600">
          <ArrowPathIcon className="w-5" /> Reset
        </button>
        <button className="btnPrimary bg-orange-400">
          <ArrowPathRoundedSquareIcon className="w-5" /> Transaction
        </button>
      </div>
      <div className="grid grid-cols-pos w-full">
        <div className="relative overflow-hidden">
          <div className="bg-gray-50 p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">Categories</p>
                <p className="text-gray-600 text-sm">
                  Select From Below Categories
                </p>
              </div>
              <div className="flex items-center justify-end gap-4">
                <ChevronLeftIcon
                  onClick={slideLeft}
                  className="w-7 p-1 bg-white rounded-full shadow"
                />
                <ChevronRightIcon
                  onClick={slideRight}
                  className="w-7 p-1 bg-white rounded-full shadow"
                />
              </div>
            </div>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex items-center gap-3 transition-transform mt-4 duration-300 text-center w-full"
              style={{ transform: `translateX(${translateValue}px)` }}
            >
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 flex items-center flex-col text-gray-500 text-sm"
                >
                  <img src={item.img} alt="" className="w-12" />
                  <p className="mt-3 mb-1 whitespace-nowrap w-40">
                    {item.title}
                  </p>
                  <p>{index - 1} Items</p>{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded">
            <p className="text-lg font-semibold">Products</p>
          </div>
        </div>
        <OrderList />
      </div>
    </div>
  );
}
