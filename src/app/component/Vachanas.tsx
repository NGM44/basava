import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import React from "react";

const basavannaImages = [
  "https://mysticalbee.com/wp-content/uploads/2021/11/5Teachings-of-Basavanna.jpg",
  "https://www.jatinverma.org/uploads/2021_05/913.png",
  "https://images.news9live.com/h-upload/2022/05/31/405638-newproject48.jpg?w=1200&enlarge=true",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa15hIv-n1GEynfpc-4SbMc0DKhyeZQXmw3w&usqp=CAU",
  "https://w0.peakpx.com/wallpaper/444/949/HD-wallpaper-basavanna-god-hindu-india-kannada-karnataka-lingayat-maharastra-shiva-veerashiva.jpg",
  "https://m.media-amazon.com/images/I/81kDcJRZM0L._AC_UF1000,1000_QL80_.jpg",
  "https://previews.123rf.com/images/fincioenj/fincioenj1312/fincioenj131200041/24732407-portrait-the-statue-of-sri-basavanna-on-its-pedestal-stands-at-the-edge-of-cubban-park-in-bangalore.jpg",
];

const colors = [
  "#3D6AC2",
  "#BC43B4",
  "#776fff"
]

const Vachanas = ({ vachana,index }: { vachana: string,index:number }) => {
  return (
    <div className="relative overflow-hidden text-balance border border-white rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
      <img
        className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
        src={basavannaImages[index % 7]}
        alt=""
      />
      <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
      <div
        className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className={`aspect-[1/1] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[${colors[index % 3]}] opacity-40`}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <figure className="relative isolate">
        <blockquote className="mt-6 text-sm font-semibold leading-loose text-slate-200">
          <p>{vachana}</p>
        </blockquote>
        <figcaption className="mt-6 text-sm leading-6 text-gray-300">
          <strong className="font-semibold  text-slate-200">Vishwaguru Basavana</strong>
        </figcaption>
        <p className="text-right text-xs font-semibold  text-slate-300">
          basava.org
        </p>
      </figure>
    </div>
  );
};

export default Vachanas;
