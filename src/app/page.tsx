import Image from "next/image";
import { TurkcelTimeLine } from "./components/Turkcell";
import { Timeline } from "./components/Arma";
import { MkuTimeline } from "./components/Mku";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Resume
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          In high school, I discovered my passion for technology, winning a
          scholarship and gaining hands-on experience in 3D modeling,
          HTML/CSS, IoT, and circuit design during a Maker Course at Özyeğin
          University, where I represented the university at the Maker Fair. At MKU
          Technology, I designed and prototyped an industrial soldering fan.
        </p>
        <p>
          As
          captain of ARMA UAV, I led my team to the Technofest finals,
          developing an autonomous UAV and managing budget and sponsor
          relations. At Turkcell, I worked on data analysis, Python automation,
          ERP, and MySQL systems, creating tools to enhance efficiency.
        </p>
        <h1 className="mb-8 text-2xl font-medium tracking-tight mt-10">
          Experience
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex flex-row items-center gap-4">
            <img src="/turkcell_logo.jpeg" alt="Turkcell logo" width={55} height={55} />
            <div className="w-full h-full flex flex-col gap-0">
              <p className="">Turkcell</p>
              <p className="text-[12px] font-extrabold">2022 - 2024 </p>
            </div>
          </div>
          <TurkcelTimeLine />
        </div>
        <div>
          <div className="flex flex-row items-center gap-4 h-fit">
            <img src="/arma_logo.png" alt="Arma logo" width={55} height={55} />
            <div className="w-full h-full flex flex-col gap-0">
              <p className="">ARMA SIHA</p>
              <p className="text-[14px] font-bold">Team Captain</p>
              <p className="text-[12px] font-extrabold">2022 - 2024 </p>
            </div>
          </div>
          <Timeline />
        </div>
        <div>
          <div className="flex flex-row items-center gap-4 h-fit">
            <img src="/mku_logo.png" alt="Arma logo" width={55} height={55} className="bg-black p-2" />
            <div className="w-full h-full flex flex-col gap-0">
              <p className="">MKU Tech</p>
              <p className="text-[14px] font-bold">Project Developer</p>
              <p className="text-[12px] font-extrabold">2021 - 2022 </p>
            </div>
          </div>
          <MkuTimeline />
        </div>

      </div>

    </section>
  );
}
