/** @format */

import ArticleImg from '@/assets/images/article-1-img.jpg';

import Button from './Button';
import CardArticle from './CardArticle';

interface IArticleList {
  isFull?: boolean;
}

export default function ArticleList({ isFull = false }: IArticleList) {
  const data = [
    {
      image: ArticleImg,
      title: "Instalasi Radio Repeater & Pembaruan sistem",
    },
    {
      image: ArticleImg,
      title: "Instalasi Rig-Base pada truk pertambang",
    },
    {
      image: ArticleImg,
      title: "HT dengan keamanan ekstra untuk\npertambangan dan kilang minyak",
    },
  ];

  return (
    <section className="inner-wrapper mt-[160px]">
      <p className="font-bold text-[2.5rem]">
        Sejak 2008 berkontribusi dalam keamanan
      </p>
      <p className="mt-[16px] mb-[64px] text-[1.25rem]">
        Lihat proyek terbaru kami
      </p>
      <div className="flex gap-[64px]">
        {data.map((datum, i) => (
          <CardArticle key={i} data={datum} />
        ))}
      </div>
      {!isFull && <Button customClass="mt-[80px]">Lihat Lebih Banyak</Button>}
    </section>
  );
}
