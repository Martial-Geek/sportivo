import "../app/plainstyles.css";
import Image from "next/image";
import events from "@/constants/events";

const Events = () => {
  return (
    <section className="events" id="events">
      <h1 className="heading my-32 text-7xl">
        Our <span>Events</span>
      </h1>
      <div className="flex flex-col gap-28">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {events.map((event, index) => (
            <div className="flex flex-col gap-12 bg-[#333] p-8" key={index}>
              <h2 className="mx-auto font-serif text-4xl font-semibold text-white">
                {event.name}
              </h2>
              <Image
                src={event.imageSrc}
                alt="Event Image"
                width={300}
                height={300}
                className="mx-auto h-[20vh] w-[50vw] sm:h-[25vh] sm:w-[15vw]"
              />

              <button
                id="gullycricketregisterBtn"
                className="mx-auto w-fit rounded bg-blue-500 p-4 text-3xl font-bold text-white hover:bg-blue-700"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
