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
    <div className="w-[600px] h-[460px] bg-b-900 flex content-stretch justify-between flex-wrap	py-[40px] px-[52px] rounded-[1.25rem] gap-[28px]">
      {data.map((datum, i) => (
        <div
          key={i}
          className="w-[220px] h-[155px] flex flex-col gap-[12px] text-n-100">
          <p className="text-[2.6rem] font-bold">{datum.qty}</p>
          <p className="text-[2.25rem] font-light">{datum.name}</p>
        </div>
      ))}
    </div>
  );
}
