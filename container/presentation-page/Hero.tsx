import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
	const controls = useAnimation();
	const [bgColor, setBgColor] = useState("#FF5733");
	const [textColor, setTextColor] = useState("#FFFFFF");

	// Define color options
	const colors = [
		{ bg: "#083400", text: "#87ea5c" },
		{ bg: "#370305", text: "#ffd5f0" },
		{ bg: "#8ce3e2", text: "#21231c" },
		{ bg: "#3b3418", text: "#ffea4b" },
	];

	let colorIndex = 0;

	// Function to change colors
	const changeColors = () => {
		colorIndex = (colorIndex + 1) % colors.length;
		setBgColor(colors[colorIndex].bg);
		setTextColor(colors[colorIndex].text);
	};

	// Start animation loop
	useEffect(() => {
		const startAnimation = async () => {
			while (true) {
				// Change colors at the start of each loop
				changeColors();

				// Move text to the end position and fade in
				await controls.start({
					x: -200, // Start from the left
					opacity: 0, // Start with 0 opacity (invisible)
					transition: {
						duration: 0, // Instant transition to the start position
					},
				});

				// Animate text to the right and fade in
				await controls.start({
					x: 100, // Move to the right
					opacity: 1, // Fade in to full opacity
					transition: {
						duration: 1, // Duration of the movement and fade
						ease: "easeInOut",
					},
				});

				// Reset text position and fade out
				await controls.start({
					x: -200, // Reset to the start position
					opacity: 0, // Fade out to 0 opacity
					transition: {
						duration: 1, // Duration of the fade out
						ease: "easeInOut",
					},
				});
			}
		};

		startAnimation();
	}, []);

	return (
		<section
			className="w-full h-screen flex justify-center items-center sticky top-0"
			style={{ backgroundColor: bgColor }} // Dynamic background
		>
			<motion.h1
				className="heading tracking-[-1.3px] font-semibold font-FoundersGrotesk uppercase text-center"
				style={{
					fontSize: "16rem",
					color: textColor, // Dynamic text color
				}}
				animate={controls}
			>
				Consulting
			</motion.h1>
		</section>
	);
}