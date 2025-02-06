import Image from "next/image";
import {
  after,
  chelengeBg,
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
} from "@/public";
import { BackgroundImg } from "@/components";

export default function Chelenge() {
  return (
    <section className="w-full mt-16 pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
     
      <div className="w-full padding-x padding-y">
        <BackgroundImg src={chelengeBg} />
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
          Company 1
        </h2>
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
            <div className="w-1/2 sm:w-full xm:w-full">
              <h3 className="text-2xl font-medium text-secondry font-NeueMontreal">
                Description:
              </h3>
            </div>
            <div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
              <div>
                <ul className="list-disc pl-5 font-NeueMontreal text-secondry">
                  <li>
                    Built by home service professionals on a mission to make
                    your “work easy.”
                  </li>
                  <li>
                    Workiz empowers service businesses to get more jobs done.
                  </li>
                  <li>Work easier and grow smarter.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase1}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>

		

        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase2}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
          Company 1
        </h2>
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
            <div className="w-1/2 sm:w-full xm:w-full">
              <h3 className="text-2xl font-medium text-secondry font-NeueMontreal">
                Description:
              </h3>
            </div>
            <div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
              <div>
                <ul className="list-disc pl-5 font-NeueMontreal text-secondry">
                  <li>
                    Built by home service professionals on a mission to make
                    your “work easy.”
                  </li>
                  <li>
                    Workiz empowers service businesses to get more jobs done.
                  </li>
                  <li>Work easier and grow smarter.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full padding-x padding-y">
        <BackgroundImg src={showcase3} />
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
          Company 1
        </h2>
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
            <div className="w-1/2 sm:w-full xm:w-full">
              <h3 className="text-2xl font-medium text-secondry font-NeueMontreal">
                Description:
              </h3>
            </div>
            <div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
              <div>
                <ul className="list-disc pl-5 font-NeueMontreal text-secondry">
                  <li>
                    Built by home service professionals on a mission to make
                    your “work easy.”
                  </li>
                  <li>
                    Workiz empowers service businesses to get more jobs done.
                  </li>
                  <li>Work easier and grow smarter.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase4}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase5}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
          Company 1
        </h2>
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
            <div className="w-1/2 sm:w-full xm:w-full">
              <h3 className="text-2xl font-medium text-secondry font-NeueMontreal">
                Description:
              </h3>
            </div>
            <div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
              <div>
                <ul className="list-disc pl-5 font-NeueMontreal text-secondry">
                  <li>
                    Built by home service professionals on a mission to make
                    your “work easy.”
                  </li>
                  <li>
                    Workiz empowers service businesses to get more jobs done.
                  </li>
                  <li>Work easier and grow smarter.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full padding-x padding-y">
        <BackgroundImg src={showcase6} />
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
          Company 1
        </h2>
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
            <div className="w-1/2 sm:w-full xm:w-full">
              <h3 className="text-2xl font-medium text-secondry font-NeueMontreal">
                Description:
              </h3>
            </div>
            <div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
              <div>
                <ul className="list-disc pl-5 font-NeueMontreal text-secondry">
                  <li>
                    Built by home service professionals on a mission to make
                    your “work easy.”
                  </li>
                  <li>
                    Workiz empowers service businesses to get more jobs done.
                  </li>
                  <li>Work easier and grow smarter.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[80%] sm:w-full xm:w-full mx-auto padding-x flex gap-[20px]">
        <div className="w-full">
          <Image
            src={after}
            className="w-full object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
          Company 1
        </h2>
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
            <div className="w-1/2 sm:w-full xm:w-full">
              <h3 className="text-2xl font-medium text-secondry font-NeueMontreal">
                Description:
              </h3>
            </div>
            <div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
              <div>
                <ul className="list-disc pl-5 font-NeueMontreal text-secondry">
                  <li>
                    Built by home service professionals on a mission to make
                    your “work easy.”
                  </li>
                  <li>
                    Workiz empowers service businesses to get more jobs done.
                  </li>
                  <li>Work easier and grow smarter.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

	  
    </section>
  );
}
