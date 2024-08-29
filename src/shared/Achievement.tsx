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
    <div className="w-[600px] h-auto bg-b-900 grid grid-cols-2 gap-x-12 gap-y-7 py-[40px] px-[52px] rounded-[1.25rem] max-w-full sm:gap-y-4 sm:px-0 sm:grid-cols-2">
      {data.map((datum, i) => (
        <div
          key={i}
          className="flex flex-col items-start text-n-100 gap-[12px]">
          <p className="text-[2.6rem] font-bold sm:text-[2.25rem]">
            {datum.qty}
          </p>
          <p className="text-[2.25rem] font-light sm:text-[1.25rem] text-left">
            {datum.name}
          </p>
        </div>
      ))}
    </div>
  );
}
