"use client";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import Topbar from "../components/topbar";
import MobileNavbar from "../components/mobile-navbar";

export default function AboutPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div
            className={`${isDarkMode ? "bg-off-black" : "bg-primary"} min-h-screen min-w-full flex flex-col px-10`}
        >
            {!isMobile && (
                <Topbar isDarkMode={isDarkMode} isHeaderVisible={true} />
            )}
            {isMobile && <MobileNavbar />}

            {/* QUOTES BLOCKS - should probably turn the blocks into a component*/}
            <div className="grid grid-cols-4 min-w-full mt-[70px] mb-[100px]">
                <div className="col-span-4 sm:col-span-3 md:col-span-2">
                    <div className="flex flex-row mb-[30px]">
                        <h1 className="font-tiempos text-3xl sm:text-5xl leading-none tracking-[-2px]">
                            The <br className=""></br>Wall of Love{" "}
                        </h1>
                        <Image
                            className="self-end ml-3 mb-2 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12"
                            src={"/images/logo.svg"}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </div>

                    <a
                        className={`font-dm-mono flex flex-row w-fit self-center gap-[8px] uppercase bg-[#041010] border-[1px] border-[#CFCCC4] border-solid px-[25px] py-[10px] rounded-[95px]  text-white cursor-pointer whitespace-nowrap mb-[20px] md:mb-[0px]`}
                    >
                        <Image
                            src={
                                isDarkMode
                                    ? "/images/right-arrow.svg"
                                    : "/images/right-arrow.svg"
                            }
                            alt="right-arrow"
                            width={14}
                            height={14}
                        />
                        SUBMIT MORE LOVE
                    </a>
                </div>

                <div className="h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-4 md:col-span-2">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[#131313] text-[10px] sm:text-[16px] md:text-md">
                        &quot;I&apos;d say Socratica is doing much more than
                        just its part, not fully versed, but from what I&apos;ve
                        seen and heard, I&apos;d say they are doing some of the{" "}
                        <span className="font-bold">
                            best community work that&apos;s ever been done for
                            Canadian tech
                        </span>
                        , or at least it&apos;s trending that way if it
                        continues&quot;
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                            Internet Vin
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Toronto
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#ffffff] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-4 md:col-span-1">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[#131313]">
                        &quot;socratica did the impossible (got someone to call
                        waterloo a city of dreams)&quot;
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#131313] font-[500] tracking-[-1px]">
                            AJ
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Toronto
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#649AEA] h-[300px] p-[30px] flex flex-col justify-between col-span-4 sm:col-span-4 md:col-span-3">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <div className="flex flex-row items-center">
                        <h1 className="text-[#FBEFEF] font-tiempos text-xl sm:text-2xl md:text-4xl leading-none tracking-[-1px] col-span-4 sm:col-span-4 sm:col-span-1">
                            “the greatest student event <br></br>I’ve ever seen”
                        </h1>
                        <Image
                            className="mx-auto w-14 h-14 sm:w-48 sm:h-48 sm:w-48 sm:h-48"
                            src={"/images/mascots/light-blue.svg"}
                            alt="mascot"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#D1DEEE] font-[500] tracking-[-1px]">
                            Cory Levy
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                            <p className="text-[#D1DEEE] font-[500] tracking-[-1px]">
                                San Francisco
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBEFEF] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[#706F6B] font-tiempos text-4xl leading-none tracking-[-1px]">
                        “the <span className="text-[#000000]">reason</span> why
                        I came{" "}
                        <span className="text-[#000000]">to waterloo</span>”
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#131313] font-[500] tracking-[-1px]">
                            Rishi Kothari
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Waterloo
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FF6D24] h-[300px] p-[30px]  flex flex-col justify-between col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <Image
                        className="mx-auto"
                        src={"/images/mascots/grey.svg"}
                        alt="mascot"
                        width={60}
                        height={60}
                    />
                    <h1 className="text-[#FFFCF3] text-sm md:text-md">
                        ngl i&apos;m getting more socratica symposium posts than
                        from ycombinator&apos;s demo day
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#FFEAD9] font-[500] tracking-[-1px]">
                            @Leejoo
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                            <p className="text-[#FFEAD9] font-[500] tracking-[-1px]">
                                Twitter
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBEFEF] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-4 md:col-span-2">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[#706F6B] text-xl tracking-[-1px]">
                        &quot;You have something very special here that I have
                        not experienced.{" "}
                        <span className="text-[#000000]">
                            It was a bit like church for engineers without god.{" "}
                        </span>
                        Dripping with community and support.{" "}
                        <br className="hidden sm:inline"></br>Thank you. You
                        have shown me something{" "}
                        <span className="text-[#000000]">
                            new about human potential together&quot;
                        </span>
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#131313] font-[500] tracking-[-1px]">
                            Mike Janzen
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Waterloo
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#554F79] h-[300px] p-[30px]  flex flex-col justify-between col-span-4 sm:col-span-4 md:col-span-4">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <Image
                        className="mx-auto"
                        src={"/images/mascots/orange.svg"}
                        alt="mascot"
                        width={90}
                        height={90}
                    />
                    <h1 className="text-[#FBF8EF] font-tiempos text-2xl sm:text-4xl md:text-6xl leading-none tracking-[-1px] text-center">
                        don&apos;t be stupid,{" "}
                        <span className="text-[#A09D98]">go to socratica</span>
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#CDC9CE] font-[500] tracking-[-1px]">
                            Anonymous
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Waterloo
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#9C5400] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <Image
                        className="mx-auto"
                        src={"/images/mascots/beige.svg"}
                        alt="mascot"
                        width={60}
                        height={60}
                    />
                    <h1 className="text-[#FFFCF3] text-sm md:text-md">
                        {" "}
                        my{" "}
                        <span className="font-bold">
                            dream travel destination
                        </span>{" "}
                        for 2024 is waterloo, ontario
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#FFFCF3] font-[500] tracking-[-1px]">
                            Dan
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                            <p className="text-[#FFFCF3] font-[500] tracking-[-1px]">
                                Twitter
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBEFEF] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[#706F6B] font-tiempos text-4xl leading-none tracking-[-1px]">
                        “socratica was{" "}
                        <span className="text-[#000000]">the highlight</span> of
                        my time{" "}
                        <span className="text-[#000000]">at waterloo</span>”
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#131313] font-[500] tracking-[-1px]">
                            Jaclyn
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                New York
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBEFEF] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-2 md:col-span-2">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[#706F6B] font-tiempos text-4xl leading-none tracking-[-1px]">
                        “twitter makes waterloo look{" "}
                        <span className="text-[#000000]">
                            <br className="hidden sm:inline"></br>
                            so fun, what the hell&quot;
                        </span>
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#131313] font-[500] tracking-[-1px]">
                            Random
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Twitter
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBEFEF] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-2 md:col-span-1">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-[#131313]">
                        &quot;their hacker culture and socratica is why Waterloo
                        is{" "}
                        <span className="font-bold">
                            one of the only academic institutions left on planet
                            earth
                        </span>{" "}
                        where the opportunity cost of young, ambitious people
                        spending their time there isn&apos;t net negative&quot;
                    </h1>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#131313] font-[500] tracking-[-1px]">
                            Farhaj
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Dubai
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBEFEF] h-[300px] p-[30px] border-[#CFCCC4] border-[1px] border-solid flex flex-col justify-between col-span-4 sm:col-span-4 md:col-span-3">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />
                    <div className="flex flex-row items-center">
                        <h1 className="text-[#131313] font-tiempos text-2xl sm:text-3xl md:text-4xl leading-none tracking-[-1px]">
                            &quot;realizing that I couldn&apos;t attend<br></br>{" "}
                            the socratica symposium<br></br>{" "}
                            <span className="text-[#706F6B]">
                                ruined my day
                            </span>
                            &quot;
                        </h1>
                        <Image
                            className="mx-auto w-12 h-12 sm:w-36 sm:h-36 md:h-48 md:w-48"
                            src={"/images/mascots/purple.svg"}
                            alt="mascot"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#131313] font-[500] tracking-[-1px]">
                            @chaoticdesigned
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#9E9797] font-[500] tracking-[-1px]">
                                Twitter
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#899248] h-[300px] p-[30px] flex flex-col justify-between col-span-4 sm:col-span-4 md:col-span-4">
                    <Image
                        src={"/images/quotation.svg"}
                        alt="quotation symbol"
                        width={40}
                        height={40}
                    />

                    <div className="flex flex-row items-center">
                        <div className="w-[20%]"></div>
                        <h1 className="text-[#E9EDC9] font-tiempos text-2xl sm:text-4xl md:text-6xl leading-none tracking-[-1px] text-center">
                            “I would sign up{" "}
                            <span className="text-[#AAB172]">even harder</span>{" "}
                            &quot;
                        </h1>
                        <Image
                            className="mx-auto w-12 h-12 sm:w-36 sm:h-36 md:h-36 md:w-36"
                            src={"/images/mascots/green.svg"}
                            alt="mascot"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="text-[#DBDBC0] font-[500] tracking-[-1px]">
                            Anonymous
                        </p>
                        <div className="flex gap-2">
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            <p className="text-[#E9EDC9] font-[500] tracking-[-1px]">
                                Waterloo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* END OF QUOTES BLOCKS*/}

            {/* WHO WHAT WHERE WHEN SECTION */}
            <div>
                <h1 className="text-[#131313] font-tiempos text-4xl leading-none tracking-[-1px]">
                    We are multidiscplinary in our crafts, & united by{" "}
                    <br className="hidden md:inline"></br>our shared love for
                    making.
                </h1>

                <div className="grid grid-cols-4 gap-3 mt-[50px] mb-[50px]">
                    <div className="col-span-2 sm:col-span-1">
                        <a
                            className={`font-dm-mono flex flex-row w-fit self-center gap-[8px] uppercase bg-[#FBF8EF] border-[2px] border-[#E0D9D4] border-dashed px-[25px] py-[10px] rounded-[95px]  text-[#000000]`}
                        >
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            WHO?
                        </a>
                        <p className="mt-[15px] text-[#41403F] font-[300]">
                            We’re a community of folks from all backgrounds and
                            skillsets, coming together under one roof.
                        </p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <a
                            className={`font-dm-mono flex flex-row w-fit self-center gap-[8px] uppercase bg-[#FBF8EF] border-[2px] border-[#E0D9D4] border-dashed px-[25px] py-[10px] rounded-[95px]  text-[#000000]`}
                        >
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            WHAT?
                        </a>
                        <p className="mt-[15px] text-[#41403F] font-[300]">
                            United by the mutual love for learning, making, and
                            creating.
                        </p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <a
                            className={`font-dm-mono flex flex-row w-fit self-center gap-[8px] uppercase bg-[#FBF8EF] border-[2px] border-[#E0D9D4] border-dashed px-[25px] py-[10px] rounded-[95px]  text-[#000000]`}
                        >
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            WHERE?
                        </a>
                        <p className="mt-[15px] text-[#41403F] font-[300]">
                            Socratica is a place for you to get these things
                            done, surrounded by others doing their own thing,
                            too.
                        </p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <a
                            className={`font-dm-mono flex flex-row w-fit self-center gap-[8px] uppercase bg-[#FBF8EF] border-[2px] border-[#E0D9D4] border-dashed px-[25px] py-[10px] rounded-[95px]  text-[#000000]`}
                        >
                            <Image
                                src={"/images/block.svg"}
                                alt="block icon"
                                width={14}
                                height={14}
                            />
                            WHEN? WHY?
                        </a>
                        <p className="mt-[15px] text-[#41403F] font-[300]">
                            That passion project you’ve been meaning to work on.
                            That app you’ve been meaning to program. The
                            painting you’ve been meaning to finish.
                        </p>
                    </div>
                </div>
            </div>
            {/* END OF: WHO WHAT WHERE WHEN SECTION */}

            {/* PICS! */}
            <div className="relative w-full my-[50px]">
                <div className="relative grid grid-cols-4 gap-4 h-fit w-full">
                    {/* First Row */}
                    <div className="relative col-span-4 sm:col-span-2 h-[300px]">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/group-photo.png"
                            alt="group photo"
                            layout="fill"
                        />
                    </div>
                    <div className="relative h-[300px] col-span-2 sm:col-span-1">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/session.png"
                            alt="session photo"
                            layout="fill"
                        />
                    </div>
                    <div className="relative h-[300px] col-span-2 sm:col-span-1">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/socratica-screen.png"
                            alt="socratica screen from kickoff photo"
                            layout="fill"
                        />
                    </div>

                    {/* Second Row */}
                    <div className="relative col-span-4 sm:col-span-2 h-[300px]">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/chantelle.png"
                            alt="demoer chantelle with a guitar on stage signing her song at symposium photo"
                            layout="fill"
                        />
                    </div>
                    <div className="relative col-span-4 sm:col-span-2 h-[300px]">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/brian-robot.png"
                            alt="brian demoing his self balancing robot at symposim booth photo"
                            layout="fill"
                        />
                    </div>

                    {/* Third Row */}
                    <div className="relative col-span-2 sm:col-span-1 h-[300px]">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/gang-on-stage.png"
                            alt="demoer hudzah presenting his vertical farm on stage at symposium photo"
                            layout="fill"
                        />
                    </div>
                    <div className="relative col-span-2 sm:col-span-1 h-[300px]">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/inayah.png"
                            alt="symposium hosts hudzah and inyah on stage photo"
                            layout="fill"
                        />
                    </div>
                    <div className="relative col-span-4 sm:col-span-2 h-[300px]">
                        <Image
                            className="rounded-[20px] object-cover"
                            src="/images/wall-of-love/kickoff-gang.png"
                            alt="group photo at the fall 2023 kickoff on a roof top"
                            layout="fill"
                        />
                    </div>

                    {/* Polaroid Images Overlay */}
                    <div className="absolute  top-[40%] left-[10%] rotate-[-10deg] z-20">
                        <Image
                            className="w-[300px] drop-shadow-lg"
                            src="/images/wall-of-love/polaroid1.png"
                            alt="polaroid 1"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="absolute  bottom-[10%] left-[20%] md:top-[50%] md:left-[45%] rotate-[2deg] z-20">
                        <Image
                            className="w-[300px] drop-shadow-lg"
                            src="/images/wall-of-love/polaroid2.png"
                            alt="polaroid 2"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="absolute top-[15%] left-[70%] sm:top-[10%] sm:left-[70%] rotate-[-5deg] z-20">
                        <Image
                            className="w-[300px] drop-shadow-lg"
                            src="/images/wall-of-love/polaroid3.png"
                            alt="polaroid 3"
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className="absolute top-[20%] left-[20%] sm:top-[50%] sm:left-[90%] md:top-[20%] md:left-[20%] lg:top-[75%] lg:left-[90%] rotate-[-5deg] z-20">
                        <Image
                            className="w-[300px] drop-shadow-lg"
                            src="/images/wall-of-love/hand.png"
                            alt="hand holding phone taking a video of a demo"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
            {/* END OF : PICS! */}
        </div>
    );
}
