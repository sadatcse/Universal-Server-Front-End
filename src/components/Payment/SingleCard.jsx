"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import UseAxioSecure from "@/Hook/UseAxioSecure";
const SingleCard = ({ name, price, styled }) => {
  const router = useRouter();
  const axiosSecure = UseAxioSecure();
  const makePayment = async () => {
    try {
      // const apiUrl = "http://localhost:5000"; // try server with local host
      const apiUrl = "https://universal-survey-backend.vercel.app";

      // const cart = [
      //   {
      //     id: "1",
      //     name: "Widget A",
      //     price: 10.99,
      //     quantity: 2,
      //   },
      //   {
      //     id: "2",
      //     name: "Widget B",
      //     price: 5.49,
      //     quantity: 1,
      //   },
      //   {
      //     id: "3",
      //     name: "Widget C",
      //     price: 7.99,
      //     quantity: 3,
      //   },
      // ];

      const body = {
        products: { name, price, image_url: "https://i.ibb.co/DKx3VMX/d.png" },
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(`${apiUrl}/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      // const response = await axiosSecure.post(`/create-checkout-session`, body);

      const session = await response.json();

      // const result = stripe.redirectToCheckout({ successUrl: session.url });

      router.push(session.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`shadow-lg rounded-xl border hover:shadow-xl  p-4 px-7 ${
        styled && "bg-blue-400 text-white border-none"
      } border-gray-100`}
    >
      <p className="text-center my-2 text-lg">{name}</p>
      <p className="text-center font-bold text-4xl mt-3">${price}</p>
      <div
        className={`space-y-3 text-sm  mt-9 ${
          styled ? "text-white" : "text-gray-500"
        }`}
      >
        <li>500 requests</li>
        <li>Unlimited Projects</li>
        <li>
          Extended free trial{" "}
          <span
            className={`border ml-2 ${
              styled ? "text-gray-100" : "text-gray-400"
            } text-sm px-2 rounded-md`}
          >
            For early users
          </span>
        </li>
      </div>
      <div className="flex justify-center mt-16 mb-4">
        <button
          className={`btn w-2/3  ${
            styled
              ? "bg-white hover:bg-slate-50 hover:text-blue-500 text-blue-400 shadow"
              : "bg-blue-400 text-white hover:bg-blue-500 shadow shadow-blue-300"
          } border-none`}
          onClick={makePayment}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
