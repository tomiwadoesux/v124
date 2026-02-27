"use client";

import Arrow from "./Arrow";
import Ayotomcs from "./ayotomcs";
import Image from "next/image";
import Chrome from "./Chrome";
import Addto from "./Addto";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import IconChrm from "./IconChrm";
import { client, urlFor } from "../lib/client";

export default function Body() {
  const menuItemsRef = useRef([]);
  const headerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [bucketList, setBucketList] = useState([]);
  const [stampData, setStampData] = useState([]);
  const [currentStampIndex, setCurrentStampIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-char", {
        opacity: 0,
        y: 10,
        duration: 0.05,
        stagger: 0.02,
        ease: "power2.out",
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    menuItemsRef.current.forEach((item) => {
      if (!item) return;

      const handleMouseEnter = () => {
        gsap.to(item, {
          backgroundColor: "#4447a9",
          color: "#ffffff",
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(item, {
          backgroundColor: "transparent",
          color: "#000000",
          duration: 0.2,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listQuery = '*[_type == "list"]';
        const listData = await client.fetch(listQuery);
        setBucketList(listData);

        const guestbookQuery =
          '*[_type == "guestbook"]{name, "image": coalesce(image, stamp, photo, picture, mainImage, profileImage, avatar, stampImage), _id} | order(_createdAt desc)';
        const guestbookData = await client.fetch(guestbookQuery);
        setStampData(guestbookData);
      } catch (error) {
        console.error("Failed to fetch Sanity data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (stampData && stampData.length > 1) {
      const interval = setInterval(() => {
        setCurrentStampIndex((prevIndex) => (prevIndex + 1) % stampData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [stampData]);

  const getBlurClass = (id) => {
    if (hoveredCard && hoveredCard !== id) {
      return " blur-[2px] opacity-50 transition-all duration-300";
    }
    return " transition-all duration-300";
  };

  const currentStamp =
    stampData && stampData.length > 0 ? stampData[currentStampIndex] : null;

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="animate-char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="pb-8">
      <div
        ref={headerRef}
        className="px-7 pt-12 pb-2 lg:px-11 flex flex-col gap-1"
      >
        <h1 className="text-4xl lg:text-6xl uppercase tracking-tighter">
          {splitText("B00kmarked")}
        </h1>
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#4447a9]">
            {splitText("The Chrome Extension")}
          </span>
          <h4 className="text-xs lg:text-sm text-black/60">
            {splitText("That organizes browser bookmarks in a visual way")}
          </h4>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="  px-11 pt-16 grid grid-cols-14 gap-3 ">
          <div className="col-span-3 ">
            <div className="flex gap-5 flex-col">
              {/* Card 1:Currently Working On */}
              <div
                className={`border-[0.9] border-black/10 rounded-[2rem] shadow-lg cursor-pointer ${getBlurClass(1)}`}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  window.open("https://justclarify.ayotomcs.me", "_blank")
                }
              >
                <div className="col-span-4 p-4 flex flex-col justify-between w-full h-auto  rounded-[2rem] border-13  border-white">
                  <div className=" self-end">
                    <Arrow hovered={hoveredCard === 1} />
                  </div>
                  <div className="self-center">
                    <Ayotomcs />
                  </div>

                  <h4 className="text-sm font-bold tracking-wider text-center">
                    Currently Working On
                  </h4>
                  <div className="pt-1 px-6">
                    <svg
                      className="w-full  h-px"
                      viewBox="0 0 100 1"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0"
                        y1="0.5"
                        x2="100"
                        y2="0.5"
                        stroke="black"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </div>
                  <h4
                    className="text-sm pt-3 tracking-wider text-center"
                    style={{
                      hyphens: "auto",
                      WebkitHyphens: "auto",
                      wordBreak: "break-word",
                    }}
                    lang="en"
                  >
                    An ambient In Browser Explatation tool that explains
                    highlighted text to stop switching tabs to search for
                    context and focus on the content.
                  </h4>
                </div>
              </div>
              {/* Card 2: Bucket List */}
              <div
                className={`border-[0.9] shadow-lg border-black/10 rounded-[2rem] cursor-pointer ${getBlurClass(2)}`}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  window.open("https://ayotomcs.me/list/", "_blank")
                }
              >
                <div className="col-span-4 flex flex-col gap-4 rounded-[2rem] border-13  border-white p-4  aspect-9/16">
                  <div className="flex flex-row justify-between flex-shrink-0">
                    <h4 className="text-sm font-bold">Maybe a Bucket List</h4>
                    <Arrow hovered={hoveredCard === 2} />
                  </div>

                  <div className="flex gap-4  flex-col overflow-y-auto flex-1 max-h-96">
                    {bucketList.length > 0 ? (
                      bucketList.map((item, index) => (
                        <div key={item._id || index}>
                          <h4 className=" pb text-xs">
                            {item.title || item.text || "Bucket List Item"}
                          </h4>
                          <div className="pt-1">
                            <svg
                              className="w-full  h-px"
                              viewBox="0 0 100 1"
                              preserveAspectRatio="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                x1="0"
                                y1="0.5"
                                x2="100"
                                y2="0.5"
                                stroke="black"
                                strokeWidth="0.7"
                              />
                            </svg>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-center">Loading list...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <div className="flex gap-5 flex-col">
              {/* Card 3: Interface Image */}
              <div
                className={`border-[0.9] shadow-lg border-black/10 rounded-[2rem] cursor-pointer ${getBlurClass(3)}`}
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/b00kmarked/dnmjgkiniamlgbacpajcgpmfehndkimd",
                    "_blank",
                  )
                }
              >
                <div className="col-span-4  rounded-[2rem] border-13  border-white w-full overflow-hidden">
                  <Image
                    src="/interface.webp"
                    alt="Interface"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Card 4: Download Extension */}
              <div
                className={`border-[0.9] shadow-lg border-black/10  self-center w-fit rounded-[2rem] cursor-pointer ${getBlurClass(4)}`}
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/b00kmarked/dnmjgkiniamlgbacpajcgpmfehndkimd",
                    "_blank",
                  )
                }
              >
                <div className="col-span-4 self-center rounded-[2rem] border-13 flex flex-row gap-2 py-1 px-3  border-white w-fit h-auto">
                  {" "}
                  <IconChrm />{" "}
                  <h1 className="self-center">Download The Extension</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <div className="flex gap-5 flex-col">
              {/* Card 5: The Look */}
              <div
                className={`border-[0.9] shadow-lg border-black/10 rounded-[2rem] ${getBlurClass(5)}`}
                onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="col-span-4  rounded-[2rem] border-13 gap-3  border-white p-2 flex-col flex aspect-9/16">
                  <h1 className="text-center text-lg">The Look</h1>
                  <Chrome />
                  <hr className="border-t shadow-lg border-black/20 w-full" />

                  <div className="px-2">
                    <div className=" bg-[#F7F5F4]  flex-col flex gap-2 text-sm rounded-2xl border-7 border-white p-3">
                      <h4
                        ref={(el) => (menuItemsRef.current[0] = el)}
                        className="px-2 py-1 rounded cursor-pointer"
                      >
                        Back
                      </h4>
                      <h4
                        //   ref={(el) => (menuItemsRef.current[1] = el)}
                        className="opacity-50 px-2 py-1 rounded cursor-pointer"
                      >
                        Foward
                      </h4>
                      <h4
                        ref={(el) => (menuItemsRef.current[2] = el)}
                        className="px-2 py-1 rounded cursor-pointer"
                      >
                        Reload
                      </h4>
                      <hr className="border-t border-black/20 w-full" />
                      <h4
                        ref={(el) => (menuItemsRef.current[3] = el)}
                        className="px-2 py-1 rounded cursor-pointer"
                      >
                        Save As...
                      </h4>
                      <h4
                        ref={(el) => (menuItemsRef.current[4] = el)}
                        className="px-2 py-1 rounded cursor-pointer"
                      >
                        Print...
                      </h4>
                      <h4
                        ref={(el) => (menuItemsRef.current[5] = el)}
                        className="px-2 py-1 rounded cursor-pointer"
                      >
                        Cast...
                      </h4>
                      <h4
                        ref={(el) => (menuItemsRef.current[6] = el)}
                        className="px-2 py-1 text-nowrap rounded cursor-pointer"
                      >
                        Translate to English
                      </h4>
                      <hr className="border-t border-black/20 w-full" />
                      <a
                        ref={(el) => (menuItemsRef.current[7] = el)}
                        href="https://chromewebstore.google.com/detail/b00kmarked/dnmjgkiniamlgbacpajcgpmfehndkimd/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4 className="flex flex-row gap-2 px-2 text-nowrap py-1 rounded cursor-pointer">
                          <span>
                            <Addto />
                          </span>{" "}
                          Add to B00kmarked
                        </h4>
                      </a>{" "}
                      <hr className="border-t border-black/20 w-full" />
                      <h4
                        ref={(el) => (menuItemsRef.current[8] = el)}
                        className="px-2 py-1 rounded cursor-pointer"
                      >
                        Veiw Page Source
                      </h4>
                      <h4
                        ref={(el) => (menuItemsRef.current[9] = el)}
                        className="px-2 py-1 rounded cursor-pointer"
                      >
                        Inspect
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 6: Stamp */}
              <div
                className={`border-[0.9] shadow-lg border-black/10  self-center w-fit rounded-[2rem] cursor-pointer ${getBlurClass(6)}`}
                onMouseEnter={() => setHoveredCard(6)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  window.open("https://ayotomcs.me/guestbook/", "_blank")
                }
              >
                <div className="col-span-4  rounded-[2rem] border-13 p-4  border-white  w-full h-auto">
                  <div className="flex flex-row justify-between">
                    <h4 className="text-sm font-bold">
                      Now that you&apos;re here, add a stamp to my website :)
                    </h4>
                    <div>
                      <Arrow hovered={hoveredCard === 6} />
                    </div>
                  </div>
                  <div className="pt-5 ">
                    {currentStamp && currentStamp.image ? (
                      <img
                        key={currentStamp._id || currentStampIndex}
                        src={urlFor(currentStamp.image).url()}
                        alt="stamp"
                        className="w-full h-auto"
                      />
                    ) : (
                      <Image
                        key={`fallback-${currentStampIndex}`}
                        src="/stamp.webp"
                        alt="stamp"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto r"
                      />
                    )}
                  </div>
                  <div className="pt-3">
                    <h4 className="text-sm text-center">
                      Added by{" "}
                      <span className="font-bold">
                        {" "}
                        {currentStamp
                          ? currentStamp.name
                          : "Israel da Legend"}{" "}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className=" pt-8 pb-8  px-7 ">
          <div className="col-span-8">
            <div className="flex gap-3 flex-col">
              <div
                className="border-[0.9] shadow-lg border-black/10 rounded-[1rem] cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/b00kmarked/dnmjgkiniamlgbacpajcgpmfehndkimd",
                    "_blank",
                  )
                }
              >
                <div className="col-span-4  rounded-[1rem] border-9  border-white w-full overflow-hidden">
                  <Image
                    src="/interface.webp"
                    alt="Interface"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div
                className="border-[0.9] shadow-lg border-black/10  self-center w-fit rounded-[1rem] cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/b00kmarked/dnmjgkiniamlgbacpajcgpmfehndkimd",
                    "_blank",
                  )
                }
              >
                <div className="col-span-4 self-center rounded-[1rem] border-9 flex flex-row gap-2 py-0 px-2  border-white w-fit h-auto">
                  {" "}
                  <div className="scale-80">
                    <IconChrm />{" "}
                  </div>
                  <h1 className=" text-sm self-center">
                    Download The Extension
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex pt-7 gap-4">
            <div
              className="border-[0.9] border-black/10 rounded-[2rem] shadow-lg cursor-pointer"
              onClick={() =>
                window.open("https://justclarify.ayotomcs.me", "_blank")
              }
            >
              <div className="col-span-4 p-4 flex flex-col justify-between w-full h-auto  rounded-[2rem] border-13  border-white">
                <div className=" self-end">
                  <Arrow hovered={hoveredCard === 1} />
                </div>
                <div className="self-center">
                  <Ayotomcs />
                </div>

                <h4 className="text-base font-bold tracking-wider text-center">
                  Currently Working On
                </h4>
                <div className="pt-1 px-6">
                  <svg
                    className="w-full  h-px"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0"
                      y1="0.5"
                      x2="100"
                      y2="0.5"
                      stroke="black"
                      strokeWidth="0.7"
                    />
                  </svg>
                </div>
                <h4
                  className="text-sm pt-3 tracking-wider text-center"
                  style={{
                    hyphens: "auto",
                    WebkitHyphens: "auto",
                    wordBreak: "break-word",
                  }}
                  lang="en"
                >
                  An ambient In Browser Explatation tool that explains
                  highlighted text to stop switching tabs to search for context
                  and focus on the content.
                </h4>
              </div>
            </div>
          </div>

          <div className="flex pt-7 flex-col gap-7 md:gap-4 md:flex-row">
            <div
              className="border-[0.9] flex-1 shadow-lg border-black/10 rounded-[2rem] cursor-pointer"
              onClick={() => window.open("https://ayotomcs.me/list/", "_blank")}
            >
              <div className="col-span-4 flex flex-col gap-4 rounded-[2rem] border-13  border-white p-4  h">
                <div className="flex flex-row justify-between flex-shrink-0">
                  <h4 className="text-base font-bold">Maybe a Bucket List</h4>
                  <Arrow hovered={hoveredCard === 2} />
                </div>

                <div className="flex gap-4  flex-col overflow-y-auto flex-1 max-h-96">
                  {bucketList.length > 0 ? (
                    bucketList.map((item, index) => (
                      <div key={item._id || index}>
                        <h4 className=" pb text-xs">
                          {item.title || item.text || "Bucket List Item"}
                        </h4>
                        <div className="pt-1">
                          <svg
                            className="w-full  h-px"
                            viewBox="0 0 100 1"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              x1="0"
                              y1="0.5"
                              x2="100"
                              y2="0.5"
                              stroke="black"
                              strokeWidth="0.7"
                            />
                          </svg>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-center">Loading list...</p>
                  )}
                </div>
              </div>
            </div>
            <div
              className="border-[0.9] flex-1 shadow-lg border-black/10 h-auto  rounded-[2rem] cursor-pointer"
              onClick={() =>
                window.open("https://ayotomcs.me/guestbook/", "_blank")
              }
            >
              <div className="col-span-4  rounded-[2rem] border-13 p-4  border-white  w-full h-auto">
                <div className="flex flex-row justify-between">
                  <h4 className="text-base font-bold">
                    Now that you&apos;re here, <br /> add a stamp to my website
                    :)
                  </h4>
                  <div>
                    <Arrow hovered={hoveredCard === 6} />
                  </div>
                </div>
                <div className="pt-5 ">
                  {currentStamp && currentStamp.image ? (
                    <img
                      key={currentStamp._id || currentStampIndex}
                      src={urlFor(currentStamp.image).url()}
                      alt="stamp"
                      className="w-full h-auto"
                    />
                  ) : (
                    <Image
                      key={`fallback-${currentStampIndex}`}
                      src="/stamp.webp"
                      alt="stamp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto r"
                    />
                  )}
                </div>
                <div className="pt-3">
                  <h4 className="text-sm text-center">
                    Added by{" "}
                    <span className="font-bold">
                      {" "}
                      {currentStamp
                        ? currentStamp.name
                        : "Israel da Legend"}{" "}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
