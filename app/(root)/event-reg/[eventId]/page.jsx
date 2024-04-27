import events from "@/constants/events";
import Image from "next/image";
import Link from "next/link";

const EventRegistration = ({ params }) => {
  console.log(params.eventId);
  const imgUrl = events.find((event) => event.id === params.eventId).imageSrc;
  const formLink = events.find((event) => event.id === params.eventId).formLink;

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ultrices luctus justo, in tristique mi pellentesque nec. In lectus
            arcu, iaculis ut urna in, rutrum tempor urna. Morbi varius tincidunt
            erat, eu venenatis sem mollis in. Proin porta, sapien eget feugiat
            tincidunt, lorem quam tristique libero, pretium egestas libero eros
            eu enim. Sed eget nisl tristique nibh tristique fringilla. Mauris
            rutrum id orci in aliquam. Curabitur at pellentesque diam, in
            posuere ipsum. Suspendisse et condimentum magna. In a risus id ex
            dapibus semper porttitor et ante. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Duis feugiat
            felis in lacus blandit, at scelerisque erat auctor. Morbi varius,
            dolor vel tempor ultrices, purus nulla malesuada magna, nec placerat
            felis ligula quis sem. Duis pulvinar laoreet porttitor.
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
