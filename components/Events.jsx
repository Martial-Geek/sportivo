import React from "react";
import "../app/plainstyles.css";

const Events = () => {
  return (
    <section class="events" id="events">
      <h1 class="heading my-32 text-7xl">
        Our <span>Events</span>
      </h1>
      <div class="flex flex-col gap-28">
        <div class="flex flex-col items-center gap-24 sm:flex-row sm:justify-around">
          <div class="flex flex-col gap-12 bg-[#333] p-8">
            <h2 class="font-satoshi mx-auto text-4xl font-semibold text-white">
              Gully Cricket
            </h2>
            <img
              src="assets/gully_Cricket.gif"
              alt="Event Image"
              class="h-[20vh] w-[50vw] sm:h-[25vh] sm:w-[15vw]"
            />
            <button
              onclick="cricket()"
              id="gullycricketregisterBtn"
              class="mx-auto w-fit rounded bg-blue-500 p-4 text-3xl font-bold text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
          <div class="flex flex-col gap-12 bg-[#333] p-8">
            <h2 class="font-satoshi mx-auto text-4xl font-semibold text-white">
              Futsal
            </h2>
            <img
              src="assets/futsalgif.gif"
              alt="Event Image"
              class="h-[20vh] w-[50vw] sm:h-[25vh] sm:w-[15vw]"
            />
            <button
              onclick="football()"
              id="gullycricketregisterBtn"
              class="mx-auto w-fit rounded bg-blue-500 p-4 text-3xl font-bold text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
          <div class="flex flex-col gap-12 bg-[#333] p-8">
            <h2 class="font-satoshi mx-auto text-4xl font-semibold text-white">
              Chess
            </h2>
            <img
              src="assets/chess.gif"
              alt="Event Image"
              class="h-[20vh] w-[50vw] sm:h-[25vh] sm:w-[15vw]"
            />
            <button
              onclick="chess()"
              id="gullycricketregisterBtn"
              class="mx-auto w-fit rounded bg-blue-500 p-4 text-3xl font-bold text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </div>
        <div class="flex flex-col items-center gap-24 sm:flex-row sm:justify-around">
          <div class="flex flex-col gap-12 bg-[#333] p-8">
            <h2 class="font-satoshi mx-auto text-4xl font-semibold text-white">
              Volley Ball
            </h2>
            <img
              src="assets/VOLLEYBAL.gif"
              alt="Event Image"
              class="h-[20vh] w-[50vw] sm:h-[25vh] sm:w-[15vw]"
            />
            <button
              onclick="volleyball()"
              id="gullycricketregisterBtn"
              class="mx-auto w-fit rounded bg-blue-500 p-4 text-3xl font-bold text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
          <div class="flex flex-col gap-12 bg-[#333] p-8">
            <h2 class="font-satoshi mx-auto text-4xl font-semibold text-white">
              Badminton
            </h2>
            <img
              src="assets/badminton.gif"
              alt="Event Image"
              class="h-[20vh] w-[50vw] sm:h-[25vh] sm:w-[15vw]"
            />
            <button
              onclick="badminton()"
              id="gullycricketregisterBtn"
              class="mx-auto w-fit rounded bg-blue-500 p-4 text-3xl font-bold text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
          <div class="flex flex-col gap-12 bg-[#333] p-8">
            <h2 class="font-satoshi mx-auto text-4xl font-semibold text-white">
              Table Tennis
            </h2>
            <img
              src="assets/table tennis.gif"
              alt="Event Image"
              class="h-[20vh] w-[50vw] sm:h-[25vh] sm:w-[15vw]"
            />
            <button
              onclick="tabletennis()"
              id="gullycricketregisterBtn"
              class="mx-auto w-fit rounded bg-blue-500 p-4 text-3xl font-bold text-white hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
