import { background } from "@/public";
import { achiveItems } from "@/constants";
import { BackgroundImg } from "@/components";
import { TextMask } from "@/animation";

export default function Archive() {
	return (
		<section className="w-full padding-y">
			<div className="padding-x w-full">
				<BackgroundImg src={background} />
			</div>
		</section>
	);
}
