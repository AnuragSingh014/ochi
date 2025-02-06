import Image from "next/image";
import { Ratings } from "@/components";

import {  nestle, officevibe, planetly } from "@/public";

const aboutPartberItems1 = [
	{
	   id: 1,
	   src: planetly,
	   title: "Planetly",
	   para: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our Consulting decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
	},
	{
	   id: 2,
	   src: officevibe,
	   title: "Officevibe",
	   para: "Influidityhas an impressive understanding of what's needed to do an effective presentation. The stakeholders at work said it's the best most complete PP template they've ever seen. Influidity  delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Influidity  design again for sure!"
	},
	{
	   id: 3,
	   src: nestle,
	   title: "Nestle",
	   para: "This is just a great experience for us! As an established company, you operate within different industries and expect immediate input with a certain level of service. Ihor and the team delivered exactly that. Fantastic result, quick delivery time, and highly responsive. This team is a hidden gem. We've already started to outline our next projects for them."
	},
	
 ];

 const aboutPartberItems2 = [
	{
	   id: 1,
	   src: planetly,
	   title: "Planetly",
	   para: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our Consulting decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
	},
	{
	   id: 2,
	   src: officevibe,
	   title: "Officevibe",
	   para: "Influidityhas an impressive understanding of what's needed to do an effective presentation. The stakeholders at work said it's the best most complete PP template they've ever seen. Influidity  delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Influidity  design again for sure!"
	},
	{
	   id: 3,
	   src: nestle,
	   title: "Nestle",
	   para: "This is just a great experience for us! As an established company, you operate within different industries and expect immediate input with a certain level of service. Ihor and the team delivered exactly that. Fantastic result, quick delivery time, and highly responsive. This team is a hidden gem. We've already started to outline our next projects for them."
	},
	
 ];

export default function Principles() {
	return (
		<section className="w-full bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry">
					We’ve built long-lasting partnerships
					<br className="sm:hidden xm:hidden" /> with the most ambitious brands
					<br className="sm:hidden xm:hidden" />
					across the globe:
				</h1>
			</div>
			<div className="w-[80%] p-3 border-t border-[#21212155] mt-[50px]">
				<div className="flex justify-between gap-[20px] sm:flex-col xm:flex-col pt-[50px]">
					{aboutPartberItems1.map((item) => (
						<div
							className="w-[40%] sm:w-[380px] xm:w-[350px]  padding-x py-[30px] shrink-0"
							key={item.id}>
							<div className="w-full h-full flex flex-col gap-[50px]">
								<div>
									<Image
										src={item.src}
										alt="img"
										width={80}
										height={80}
										className="w-[80px] h-[80px]"
									/>
								</div>
								<div className="flex flex-col gap-[20px]">
									<p className="paragraph text-secondry font-NeueMontreal font-normal underline">
										{item.title}
									</p>
									<p className="paragraph text-secondry font-NeueMontreal font-normal">
										{item.para}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-between gap-[20px] sm:flex-col xm:flex-col pt-[50px]">
					{aboutPartberItems2.map((item) => (
						<div
							className="w-[40%] sm:w-[380px] xm:w-[350px]  padding-x py-[30px] shrink-0"
							key={item.id}>
							<div className="w-full h-full flex flex-col gap-[50px]">
								<div>
									<Image
										src={item.src}
										alt="img"
										width={80}
										height={80}
										className="w-[80px] h-[80px]"
									/>
								</div>
								<div className="flex flex-col gap-[20px]">
									<p className="paragraph text-secondry font-NeueMontreal font-normal underline">
										{item.title}
									</p>
									<p className="paragraph text-secondry font-NeueMontreal font-normal">
										{item.para}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="padding-x padding-y">
				{/* <Ratings /> */}
			</div>
		</section>
	);
}
