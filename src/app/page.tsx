import React from "react";
import Topbar from "./components/topbar";
import DoodleSwitcher from "./components/doodle-switcher";
import LatticeCard from "./components/lattice-card";

export default function Home() {

  const latticeNodes = [
    {nodeName:'Socratica', nodeCity: 'waterloo', nodeCountry: 'CAN', imageURL: 'https://zkp2p.xyz/logo512.png' },
    {nodeName:'Socratica', nodeCity: 'waterloo', nodeCountry: 'CAN', imageURL: 'https://zkp2p.xyz/logo512.png' },
    {nodeName:'Socratica', nodeCity: 'waterloo', nodeCountry: 'CAN', imageURL: 'https://zkp2p.xyz/logo512.png' },
    {nodeName:'Socratica', nodeCity: 'waterloo', nodeCountry: 'CAN', imageURL: 'https://zkp2p.xyz/logo512.png' },
    {nodeName:'Socratica', nodeCity: 'waterloo', nodeCountry: 'CAN', imageURL: 'https://zkp2p.xyz/logo512.png' },
    {nodeName:'Socratica', nodeCity: 'waterloo', nodeCountry: 'CAN', imageURL: 'https://zkp2p.xyz/logo512.png' },
]


  return (
    <div className="bg-primary min-h-screen min-w-full flex flex-col px-10">
      <Topbar />
      <div className="flex flex-col justify-center mt-8">
        <DoodleSwitcher />
        <video
          src="/landing-video.mov"
          autoPlay
          loop
          muted
          className="mt-4 rounded-2xl"
        />
      </div>

      <div className="mt-8 flex">
        <div className="w-3/5">
          <p className="font-tiempos text-5xl leading-none">
            Socratica is an open collective of makers, artists, founders,
            researchers, designers, and everything <i>in-between</i>.
          </p>
        </div>
        <div className="w-[15%]" />
        <div className="w-1/4">
          <p className="text-lg">
            We are multidisciplinary in our crafts, and a safe space for our
            shared love of making things*.
          </p>
          <p className="mt-10 text-lg text-soft-grey">
            *whatever your thing may be.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <a className="bg-black text-white rounded-full flex items-center px-6 py-3 uppercase font-dm-mono">
          <img src="/images/right-arrow.svg" className="mr-2" />
          Join a Session
        </a>
      </div>

      <div className="relative pb-28">
        {/* <div className="mt-24 pl-10 max-w-[25vw]">
          <p className="font-untitled font-light text-xl leading-snug">
            Socratica is an open collective of makers, artists, founders,
            researchers, designers, and everything in-between.
          </p>
        </div> */}

        {/* <img
          src="images/mascots/orange.svg"
          alt="Orange Mascot"
          className="absolute top-0 right-[10%]"
        />
        <img
          src="images/mascots/gray.svg"
          alt="Gray Mascot"
          className="absolute top-[80%] right-[15%]"
        />
        <img
          src="images/mascots/green.svg"
          alt="Green Mascot"
          className="absolute top-[30%] right-[40%]"
        />
        <img
          src="images/mascots/blue.svg"
          alt="Blue Mascot"
          className="absolute top-[75%] right-[72%]"
        /> */}
      </div>

      <div className="mt-32 mx-auto max-w-[75%]">
        {/* <p className="font-tiempos text-6xl text-center leading-[1]">
          We host weekly coworking sessions for you to get started on that thing
          you’ve been putting off.
        </p> */}
      </div>


      {/* START: LANDING PAGE LATTICE SECTION */}
      <div className="h-[900px] bg-[url('../../public/Left-Side-Lines.svg')] bg-fill bg-center border-t border-t-[1px] border-t-[#A09D98]">
      <p className="text-[#A09D98] mt-[10px] font-dm-mono">HERE, THERE, EVERYWHERE</p>
          <div>
            <div className="font-dm-mono text-lg text-center leading-[1] pb-[30px] mx-auto mt-[100px] flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
                <path d="M22.0278 20.7452C20.8091 20.7452 20.0723 19.98 20.1289 18.7897L20.4123 13.2065L15.2826 16.6074C14.9708 16.8342 14.5741 16.9475 14.1206 16.9475C13.2137 16.9475 12.3351 16.239 12.3351 15.0487C12.3351 14.3118 12.6752 13.83 13.4121 13.4049L18.8252 10.5424L13.4121 7.67995C12.6752 7.28318 12.3351 6.77303 12.3351 6.03616C12.3351 4.87418 13.2137 4.16565 14.1206 4.16565C14.5741 4.16565 14.9708 4.27901 15.2826 4.4774L20.4123 7.79332L20.1289 1.98337C20.0723 0.793044 20.8091 0.027832 22.0278 0.027832C23.1898 0.027832 23.87 0.736362 23.8416 1.98337L23.5299 7.79332L28.6029 4.4774C28.9147 4.27901 29.3115 4.16565 29.7649 4.16565C30.6719 4.16565 31.5504 4.87418 31.5504 6.03616C31.5504 6.77303 31.2103 7.28318 30.4735 7.67995L25.0603 10.5424L30.4735 13.4049C31.2103 13.83 31.5504 14.3118 31.5504 15.0487C31.5504 16.239 30.6719 16.9475 29.7649 16.9475C29.3115 16.9475 28.9147 16.8342 28.6029 16.6074L23.5299 13.2065L23.8416 18.7897C23.8983 20.0367 23.1898 20.7452 22.0278 20.7452ZM9.89776 41.491C8.67909 41.491 7.94222 40.7258 7.9989 39.5354L8.28232 33.9522L3.15256 37.3532C2.84081 37.5799 2.44403 37.6933 1.99057 37.6933C1.08365 37.6933 0.205078 36.9847 0.205078 35.7944C0.205078 35.0575 0.545172 34.5757 1.28204 34.1506L6.69521 31.2882L1.28204 28.4257C0.545172 28.0289 0.205078 27.5188 0.205078 26.7819C0.205078 25.6199 1.08365 24.9114 1.99057 24.9114C2.44403 24.9114 2.84081 25.0248 3.15256 25.2231L8.28232 28.5391L7.9989 22.7291C7.94222 21.5388 8.67909 20.7736 9.89776 20.7736C11.0598 20.7736 11.7399 21.4821 11.7116 22.7291L11.3998 28.5391L16.4729 25.2231C16.7847 25.0248 17.1814 24.9114 17.6349 24.9114C18.5418 24.9114 19.4204 25.6199 19.4204 26.7819C19.4204 27.5188 19.0803 28.0289 18.3434 28.4257L12.9303 31.2882L18.3434 34.1506C19.0803 34.5757 19.4204 35.0575 19.4204 35.7944C19.4204 36.9847 18.5418 37.6933 17.6349 37.6933C17.1814 37.6933 16.7847 37.5799 16.4729 37.3532L11.3998 33.9522L11.7116 39.5354C11.7683 40.7825 11.0598 41.491 9.89776 41.491ZM34.2712 41.491C33.0525 41.491 32.3156 40.7258 32.3723 39.5354L32.6557 33.9522L27.526 37.3532C27.2142 37.5799 26.8175 37.6933 26.364 37.6933C25.4571 37.6933 24.5785 36.9847 24.5785 35.7944C24.5785 35.0575 24.9186 34.5757 25.6555 34.1506L31.0686 31.2882L25.6555 28.4257C24.9186 28.0289 24.5785 27.5188 24.5785 26.7819C24.5785 25.6199 25.4571 24.9114 26.364 24.9114C26.8175 24.9114 27.2142 25.0248 27.526 25.2231L32.6557 28.5391L32.3723 22.7291C32.3156 21.5388 33.0525 20.7736 34.2712 20.7736C35.4332 20.7736 36.1134 21.4821 36.085 22.7291L35.7733 28.5391L40.8463 25.2231C41.1581 25.0248 41.5549 24.9114 42.0083 24.9114C42.9152 24.9114 43.7938 25.6199 43.7938 26.7819C43.7938 27.5188 43.4537 28.0289 42.7169 28.4257L37.3037 31.2882L42.7169 34.1506C43.4537 34.5757 43.7938 35.0575 43.7938 35.7944C43.7938 36.9847 42.9152 37.6933 42.0083 37.6933C41.5549 37.6933 41.1581 37.5799 40.8463 37.3532L35.7733 33.9522L36.085 39.5354C36.1417 40.7825 35.4332 41.491 34.2712 41.491Z" fill="#131313"/>
              </svg>
              <p className="mt-[15px]">LATTICE</p>
            </div>
            <h1 className="font-tiempos text-6xl text-center leading-[1]">
              Independently-run nodes around the <span><br></br></span> <span className="italic">world</span> that run sessions of their own.
            </h1>
          </div>
          <div className="flex flex-row mx-auto justify-center gap-[10%] py-[50px]">
            <p><span className="text-[#A09D98]">We’re based in Waterloo, but </span>our friends of <span><br></br></span> Socratica <span className="text-[#A09D98]">exist all over the world as part of the</span> <span><br></br></span>Socratica Lattice.</p>
            <button className="font-dm-mono flex flex-row self-center gap-[8px] uppercase border-[1px] border-[#CFCCC4] border-solid px-[25px] py-[10px] rounded-[95px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.9824 20.997C16.9456 20.997 20.9691 16.9734 20.9691 12.0102C20.9691 7.04695 16.9456 3.02344 11.9824 3.02344C7.01911 3.02344 2.99561 7.04695 2.99561 12.0102C2.99561 16.9734 7.01911 20.997 11.9824 20.997Z" stroke="#131313" stroke-width="1.49779" stroke-miterlimit="10"/>
              <path d="M3.5105 9.01465H20.4543" stroke="#131313" stroke-width="1.49779" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5105 15.0059H20.4543" stroke="#131313" stroke-width="1.49779" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9823 20.7538C14.0503 20.7538 15.7268 16.8393 15.7268 12.0105C15.7268 7.18163 14.0503 3.26709 11.9823 3.26709C9.91425 3.26709 8.23779 7.18163 8.23779 12.0105C8.23779 16.8393 9.91425 20.7538 11.9823 20.7538Z" stroke="#131313" stroke-width="1.49779" stroke-miterlimit="10"/>
              </svg>
              Visit the lattice
              </button>
          </div>

          <div className="relative mb-[50px]">
            {/* Outer wrapper for horizontal scrolling */}
            <div className="flex overflow-x-auto space-x-4 py-4 hide-scroll-bar">
              {/* Map through your card data */}
              <div className="min-w-[200px] h-[100%]"></div>
              {latticeNodes.map((node, index) => (
              // blank div for space at start of card list
                <div key={index} className="flex-shrink-0 min-w-[200px]"> 

                  <LatticeCard
                    imageURL={node.imageURL}
                    nodeName={node.nodeName}
                    nodeCity={node.nodeCity}
                    nodeCountry={node.nodeCountry}
                  />
                </div>
              ))}
            </div>
          </div>
      </div>
      {/* END: LANDING PAGE LATTICE SECTION */}

    </div>
  );
}


