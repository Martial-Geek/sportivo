import events from "@/constants/events";
import Image from "next/image";
import Link from "next/link";

const EventRegistration = ({ params }) => {
  const imgUrl = events.find((event) => event.id === params.eventId).imageSrc;
  const formLink = events.find((event) => event.id === params.eventId).formLink;
  const description = events.find(
    (event) => event.id === params.eventId
  ).description;

  return (
    <div>
      <div className="mx-32 my-72 flex flex-col gap-20 sm:mx-72 sm:flex-row">
        <div className="flex flex-col justify-around gap-y-16" id="left">
          <p className="h1-bold self-center tracking-wider text-white">
            {params.eventId.toUpperCase()}
          </p>
          <Image
            src={imgUrl}
            height={500}
            width={500}
            alt={params.eventID}
            className="h-[370px] w-[500px] rounded-xl"
          />
        </div>
        <div className="flex w-full flex-col justify-end sm:w-3/5" id="right">
          <div className="flex px-8 py-12 text-2xl leading-10 text-white sm:leading-9">
            {params.eventId === "chess" || params.eventId === "kabaddi" ? (
              <p className="pt-48">{description}</p>
            ) : (
              <ol className="leading-10">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            )}
          </div>
          <Link href={formLink} target="_blank" className="mx-auto sm:mx-0">
            <button className="m-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
