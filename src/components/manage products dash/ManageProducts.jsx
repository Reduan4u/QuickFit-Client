"use client";

import Image from "next/image";
import MyLineChart from "./MyLineChart";
import ProductStat from "./ProductStat";
import RealityChart from "./RealityChart";
import RevenueChart from "./RevenueChart";

function ManageProducts(props) {
  const cardClasses =
    "flex items-center p-5 justify-center gap-2 bg-gradient-to-r from-dashPrimary to-dashSecondary shadow-xl rounded hover:scale-110 transition duration-300";
  return (
    <div className="bg-gray-300 py-10 text-white">
      {/*=== sales stats === */}
      <div className="grid grid-cols-4 gap-10 p-5 ">
        {/* 1. order completed  */}
        <div className={cardClasses}>
          <Image
            height={500}
            width={500}
            src="https://cdn1.iconfinder.com/data/icons/basic-22/512/1044_cart11_c-512.png"
            className="w-20 h-20 text-blue-700"
          />

          <div>
            <p className="font-semibold">Orders Completed</p>
            <h1 className="text-4xl tracking-wider font-bold">10</h1>
          </div>
        </div>

        {/*2. total revenue */}
        <div className={cardClasses}>
          <Image
            height={500}
            width={500}
            src="https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/FINANCIAL_GROWTH-512.png"
            className="w-20 h-20 text-sky-400"
          />

          <div>
            <p className="font-semibold">Total Revenue</p>
            <h1 className="text-4xl tracking-wider font-bold">$105</h1>
          </div>
        </div>
        {/* 3. Total Customers */}
        <div className={cardClasses}>
          <Image 
            height={500}
            width={500}
            src="https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/4-64.png"
            className="w-20 h-20 text-purple-600"
          />

          <div>
            <p className="font-semibold">Total Customers</p>
            <h1 className="text-4xl tracking-wider font-bold">15</h1>
          </div>
        </div>
        {/* 4. Total Sales  */}
        <div className={cardClasses}>
          <Image 
            height={500}
            width={500}
            src="https://cdn3.iconfinder.com/data/icons/vol-5/128/statistic-256.png"
            className="w-20 h-20 "
          />

          <div>
            <p className="font-semibold">Total Sales</p>
            <h1 className="text-4xl tracking-wider font-bold">$300</h1>
          </div>
        </div>
      </div>

      {/*=== earning and reserves orders stats === */}
      <div className="flex lg:flex-row gap-10 p-5">
        {/* line charts */}
        <div className="w-2/3 bg-gradient-to-r from-dashPrimary to-dashSecondary p-5 rounded shadow-xl">
          <MyLineChart></MyLineChart>
        </div>

        {/* reserves website and cash orders div  */}
        <div className="w-1/3 flex flex-col items-center justify-center">
          {/* reserves in website */}
          <div className="bg-gradient-to-r from-dashPrimary to-dashSecondary p-5 rounded shadow-xl">
            <div className="flex items-center gap-5">
              <Image 
                height={500}
                width={500}
                src="https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/browser-64.png"
                className="w-20 h-20"
              />

              <div>
                <p className="text-xl font-medium text-dashTertiary">
                  Order Reserved From Website
                </p>
                <h1 className="text-3xl tracking-wider font-bold  text-white">
                  $220
                </h1>
              </div>
            </div>
            {/* progress bar  */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 mt-3">
              <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300 w-[60%]"></div>
            </div>
          </div>

          {/* reserves in cash  */}
          <div className="mt-10 bg-gradient-to-r from-dashPrimary to-dashSecondary p-5 rounded shadow-xl">
            <div className="flex items-center gap-5">
              <Image 
                height={500}
                width={500}
                src="https://cdn4.iconfinder.com/data/icons/office-and-business-conceptual-flat/169/36-64.png"
                className="w-20 h-20"
              />

              <div>
                <p className="text-xl font-medium text-dashTertiary">
                  Order Reserved From Cash On Delivery
                </p>
                <h1 className="text-3xl tracking-wider font-bold text-dashTertiary">
                  $80
                </h1>
              </div>
            </div>
            {/* progress bar  */}
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-3">
              <div class="bg-blue-600 h-2.5 rounded-full w-[40%] "></div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= showing products ==== */}
      <div className="p-5">
        <ProductStat></ProductStat>
      </div>

      {/* ======= total revenue , customer staisfaction and reality ======= */}
      <div className="flex gap-10 p-5 ">
        <div className="w-1/2 bg-gradient-to-r from-dashPrimary to-dashSecondary p-5">
          <h2 className="text-2xl font-semibold tracking-wide text-center mb-5">
            Offline vs Online Sales
          </h2>
          <RevenueChart></RevenueChart>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-dashPrimary to-dashSecondary p-5">
          <h2 className="text-2xl font-semibold tracking-wide text-center mb-5">
            Reality vs Target
          </h2>
          <RealityChart />
        </div>
      </div>
    </div>
  );
}

export default ManageProducts;
