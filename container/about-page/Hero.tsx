"use client";
import Link from "next/link";
import Image from "next/image";
import { ochiside } from "@/public";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full margin padding-x">
            <div>
              <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                WE ARE <br />
                <div className="flex items-center gap-[5px]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 1.5,
                    }}
                  >
                    {/* <Image
											width={120}
											height={50}
											src={ochiside}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/> */}
                  </motion.span>
                  <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                    InfluidityDESIGN
                  </h1>
                </div>
              </h1>
            </div>
          </div>
          <div className="w-full border-t border-[#21212155] pt-[20px]">
            <div className="w-full flex flex-col justify-between  padding-x sm:flex-col xm:flex-col gap-[20px]">
              <div className="w-full sm:w-full xm:w-full mt-4">
                <h3 className="font-semibold text-secondry 	text-4xl font-NeueMontreal">
                  About us:
                </h3>
              </div>
              <div className="w-full flex mt-2 justify-between sm:w-full xm:w-full sm:flex-col xm:flex-col gap-[20px]">
                <div className="w-[70%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">
                  <div className="flex flex-col gap-y-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry">
                      Business is not about checking boxes or templates—it’s
                      about solving real problems, adapting to change, and
                      building something that lasts.
                      <br /> Founded in 2017, Influidity Solution is built on
                      two principles: Infinity for endless possibilities, and
                      Fluidity for adaptability.
                      <br />
                      What does that mean for you? It means strategies that grow
                      as you grow, ideas that solve problems before they arise,
                      and a partner committed to your long-term success.
                      <br />
                      Whether you’re launching a startup, scaling your business,
                      or redefining your legacy, we cut through the noise to
                      deliver what works.
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-[20px]">
                    <p className="paragraph font-NeueMontreal text-secondry">
                      No fluff. No jargon. Just solutions that make your
                      business move smarter, adapt faster, and grow stronger.
                      <br /> We don’t sell services—we get you where you need to
                      be with strategies that don’t just work on paper but
                      thrive in the real world.
                      <br />
                      At Influidity, growth should be natural, seamless, and
                      inevitable.
                      <br />
                      When you get it right, success doesn’t have to be forced.
                      It just flows.
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-[20px]">
  <p className="paragraph font-NeueMontreal text-secondry">
    The rules of business have changed. In a world where speed and precision are everything, there’s no room for half-measures.
    <br /> At Influidity Solution, we don’t just advise—we build solutions that work in the real world, where challenges are constant, and results matter.
    <br />
    Since 2017, we’ve recognized that every organization is unique, with its own goals and challenges.
    <br />
    That’s why our strategies are tailored to fit your business—designed to drive real impact where it matters most.
  </p>
</div>

<div className="flex flex-col gap-y-[20px]">
  <p className="paragraph font-NeueMontreal text-secondry">
    No shortcuts. No one-size-fits-all solutions.
    <br /> Our approach is built on "Perfection along Constraints"—focusing on what truly moves the needle.
    <br />
    Whether it’s eliminating inefficiencies, enhancing customer experiences, or cutting unnecessary costs, we help businesses do more than just adapt—we help them thrive.
    <br />
    At Influidity Solution, we’re more than service providers. We’re partners invested in your success—because when you grow, we grow.
  </p>
</div>


                </div>
                <div className="flex w-fit h-fit gap-[5px] group">
                  <div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
                    <Link
                      href="/case"
                      className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in"
                    >
                      Our Work
                    </Link>
                  </div>
                  <div className="w-[35px] flex items-center justify-center h-[35px] border border-[#21212199] rounded-[50px] p-[12px]  group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
                    <p className="paragraph font-normal text-secondry group-hover:text-background">
                      <ArrowUpRight strokeWidth={1.25} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="padding-y" data-scroll data-scroll-speed="-.1">
        <Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
      </div> */}
      
    </section>
  );
}
