/** @format */

export default function Achievement() {
  const data = [
    {
      qty: "16+",
      name: "Tahun Pengalaman",
    },
    {
      qty: "11+",
      name: "Instalasi Proyek",
    },
    {
      qty: "82%",
      name: "Menjadi Klien Tetap",
    },
    {
      qty: "5+",
      name: "Jangkauan antar Pulau",
    },
  ];

  return (
    <div className="bg-b-900 grid h-auto w-[600px] max-w-full grid-cols-2 gap-x-12 gap-y-7 rounded-[1.25rem] px-[52px] py-[40px] sm:w-full sm:grid-cols-2 sm:gap-y-4 sm:px-[1.5rem]">
      {data.map((datum, i) => (
        <div
          key={i}
          className="text-n-100 flex flex-col items-start gap-[12px]"
        >
          <p className="text-[2.6rem] font-bold sm:text-[2.25rem]">
            {datum.qty}
          </p>
          <p className="text-left text-[2.25rem] font-light sm:text-[1.25rem]">
            {datum.name}
          </p>
        </div>
      ))}
    </div>
  );
}
