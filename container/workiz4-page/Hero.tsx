import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { workiz, workizhero } from "@/public";
import { BackgroundImg, Rounded } from "@/components";

export default function Hero() {
	return (
		<section className="w-full rounded-b-[20px]">
			<div className="w-full pb-[200px]">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								<div className="flex items-center gap-[5px]">
									
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										Marketing Connsulting
									</h1>
								</div>
							</h1>
						</div>
					</div>

					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry pt-16 pb-14">
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

						<p className="w-[80%] sm:w-full xm:w-full text-4xl font-normal padding-x  font-NeueMontreal text-secondry pb-14">
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

					
				</div>
			</div>
			
		</section>
	);
}
