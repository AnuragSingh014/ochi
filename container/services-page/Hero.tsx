export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								services
							</h1>
						</div>
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
					
				</div>
			</div>
		</section>
	);
}
