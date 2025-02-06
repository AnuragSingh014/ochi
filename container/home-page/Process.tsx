import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {  phase1, phase2, phase3, phase4, phase5} from "@/public";


const serviceProcessItems = [
    {
       id: 1,
       phase: "01. Phase",
       name: "Discovery",
       src: phase1,
       review: "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.",
       button: "read"
    },
    {
       id: 2,
       phase: "02. Phase",
       name: "Storytelling",
       src: phase2,
       review: "Based on the answers, previous drafts, and additional research, we will develop a foundation of the deck — the structure of the presentation. We build a tone of voice, flow, and narrative to engage our audience. Here we will win people's minds.",
       button: "read"
    },
    {
       id: 3,
       phase: "03. Phase",
       name: "Design",
       src: phase3,
       review: "We use design to guide our audience's attention and keep them engaged. It's not only what you want them to do, but also how you make them feel. We make sure the Consulting wins people's hearts and leaves a perfect long-lasting impression.",
       button: "read"
    },
    {
       id: 4,
       phase: "04. Phase",
       name: "Feedback",
       src: phase4,
       review: "We want to stay on the same page. Hence, each phase wraps up presenting the work to you to collect and implement your feedback if such appears.",
       button: "read"
    },
    {
       id: 5,
       phase: "05. Phase",
       name: "Delivery",
       src: phase5,
       review: "We will carefully collect and prepare all the project files to ensure smooth future use.",
       button: "read"
    },
    {
       id: 6,
       phase: "06. Phase",
       name: "Delivery",
       src: phase5,
       review: "We will carefully collect and prepare all the project files to ensure smooth future use.",
       button: "read"
    },
    {
       id: 7,
       phase: "07. Phase",
       name: "Delivery",
       src: phase5,
       review: "We will carefully collect and prepare all the project files to ensure smooth future use.",
       button: "read"
    },
 ];

export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState(
		serviceProcessItems[0].id,
	);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y">
			<div className="w-full padding-x mb-[40px]">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Holistic process
				</h1>
			</div>
			{serviceProcessItems.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-[#21212155]"
							: "border-b border-[#21212155]"
					}`}>
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.phase}
							</h3>
						</div>
						<div className="w-[40%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.name}
							</h3>
						</div>
						<div className="w-[10%] sm:w-full xm:w-full flex items-end justify-end">
							<button
								className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
									activeAccordion === item.id
										? "text-gray-300"
										: "text-secondry link-flash"
								}`}
								onClick={() => toggleAccordion(item.id)}>
								{item.button}
							</button>
						</div>
					</div>
					<div
						className={`w-full flex justify-between padding-x sm:flex-col xm:flex-col`}>
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[40%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="w-[130px] h-[130px]">
												<Image
													src={item.src}
													alt="clientImg"
													className="w-full h-full object-cover rounded-[10px]"
												/>
											</div>
											<div>
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.review}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%]" />
					</div>
				</div>
			))}
		</section>
	);
}
