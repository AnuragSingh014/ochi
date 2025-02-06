import Link from "next/link";
import Image from "next/image";
import { latestItemss } from "@/constants";
import { Rounded, Tags } from "@/components";
import { motion } from "framer-motion";
import { contactHero } from "@/public";
import Form from "./Form";
import { Marquee } from "@/components";
import { publicationItems } from "@/constants";

export default function Hero() {
  const str = [
    {
      id: 1,
      title: "all",
      href: "/",
    },
    {
      id: 2,
      title: "presentation template",
      href: "/",
    },
    {
      id: 3,
      title: "public speaking",
      href: "/",
    },
    {
      id: 4,
      title: "storytelling",
      href: "/",
    },
  ];
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full margin padding-x">
            <section className="w-full padding-x">
              <div className="w-full flex flex-col">
                <div className="w-full margin">
                  <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
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
                        <Image
                          width={120}
                          height={50}
                          src={contactHero}
                          alt="img"
                          className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
                        />
                      </motion.span>
                      <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                        START YOUR <br />
                      </h1>
                    </div>
                    CAREER WITH US
                  </h1>
                </div>
              </div>
            </section>

            
          </div>
		  <div className="w-full border-t border-[#21212155]">
              <p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
              We create&nbsp;
                <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                  eye-catching&nbsp;
                </span>
                and&nbsp;
                <span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
                  eye-opening&nbsp;
                </span>
                presentations that educate, inspire and influence action.
              </p>
            </div>
		  <Form />
          
          <section className="w-full bg-marquee padding-y rounded-t-[20px] mt-[-10px] z-30 relative">
			<div className="w-full bg-marquee z-10 relative">
				
			</div>
			<div className="w-full padding-x">
				<div className="w-full flex justify-between pt-[20px] sm:flex-col xm:flex-col gap-y-[20px]">
					<div className="w-[30%] sm:w-full xm:w-full">
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							Latest publication
						</h3>
					</div>
					<div className="w-[70%] flex gap-y-[20px] sm:flex-col xm:flex-col sm:w-full xm:w-full gap-[10px]">
						{publicationItems.map((item) => (
							<div
								className="w-full flex justify-between gap-[20px] sm:flex-col xm:flex-col"
								key={item.id}>
								<div className="w-full flex gap-[20px] rounded-[20px] flex-col">
									<div className="group overflow-hidden rounded-[20px]">
										<Image
											src={item.src}
											alt="asd"
											className="w-full h-full group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]	"
										/>
									</div>
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<span className="w-[10px] h-[10px] rounded-full bg-white" />
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-white">
											{item.title}
										</h1>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>

          <div className="w-full padding-x">
            <div className="w-[50%] sm:w-full xm:w-full flex gap-[20px] padding-y sm:flex-col xm:flex-col gap-y-[20px]">
              {/* {latestItemss.map((item) => (
                <div key={item.id} className="group relative overflow-hidden">
                  <Link href={item.href}>
                    <div className="overflow-hidden rounded-[15px] transition cursor-pointer  transform duration-[1s] ease-[.4,0,.2,1]">
                      <Image
                        src={item.src}
                        alt="img"
                        className="sm:w-full xm:w-full hover:scale-[1.09] group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
                      />
                    </div>
                    <div className="flex gap-y-[10px] absolute left-[25px] top-[-100px] group-hover:top-[20px] flex-col">
                      {item.links.map((link) => (
                        <div
                          className="transform translate-y-[-200%] group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                          key={link.id}
                        >
                          <div className="rounded-[50px] border border-secondry py-[3px] px-[15px] cursor-pointer">
                            <Link
                              className="small-text font-NeueMontreal text-secondry uppercase"
                              href={"/"}
                            >
                              {link.title}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-[7px] mt-[10px]">
                      <h3 className="paragraph font-NeueMontreal font-normal text-secondry">
                        Presenting to an International Audience: <br /> Tips and
                        Lessons Learned.
                      </h3>
                      <p className="paragraph font-NeueMontreal font-normal text-gray-400">
                        {item.subTitle}
                      </p>
                      <p className="paragraph font-NeueMontreal font-normal text-gray-400">
                        {item.date}
                      </p>
                    </div>
                  </Link>
                </div>
              ))} */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
