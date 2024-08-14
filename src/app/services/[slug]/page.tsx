/** @format */

import Image from 'next/image';

import MainImage from '@/assets/images/article-3-img.jpg';
import Navbar from '@/components/shared/Navbar';

export default function ServiceDetail() {
  return (
    <section>
      <Navbar />
      <div className="outer-wrapper">
        <div className="inner-wrapper py-[64px] flex flex-col gap-9">
          <h1 className="text-[4rem] font-semibold text-center">
            HT dengan keamanan ekstra untuk pertambangan dan kilang minyak
          </h1>
          <h2 className="text-n-700 text-[1.5rem] text-center">
            MotoIndo membangun ekosistem teknologi keamanan Komunikasi, CCTV,
            dan Sensor yang terintegrasi serta komprehensif untuk berbagai
            kebutuhan anda.
          </h2>
          <p className="text-n-700">19 Juni 2024</p>
        </div>
        <div className="mt-[64px] inner-wrapper">
          <Image
            src={MainImage}
            className="w-full rounded-3xl"
            alt="main-image"
          />
        </div>
      </div>
    </section>
  );
}
