export default function useGetMenuListing() {
  const data = [
    {
      id: 1,
      name: "Nasi Lemak Ayam",
      price: "Rm 1.00",
      desc: "Nasi Lemak disediakan bersama ayam goreng keemasan serta telur, kacang, timun dan sambal pedas",
      like: true,
      imgsrc: "/assets/nasi_lemak_image.jpeg"
    },
    {
      id: 2,
      name: "Tepung Pelita - 5 pcs",
      price: "Rm 2.50",
      desc: "Diperbuat daripada santan berkualiti tinggi serta daun pandan yang manis",
      like: false,
      imgsrc: "/assets/tepung_pelita_image.jpeg"
    },
    {
        id: 3,
        name: "Popia Basah - 5 pcs",
        price: "Rm 3.50",
        desc: "Kulit popia yang lembut digandingkan bersama inti kacang, lengkuas, tauge dan sambal",
        like: true,
        imgsrc: "/assets/popia_image.jpeg" 
    },
    {
        id: 4,
        name: "Pisang Goreng - 5 pcs",
        price: "Rm 3.50",
        desc: "Pisang Goreng yang rangup dan manis. Enak dimakan panas panas",
        like: true,
        imgsrc: "/assets/pisang_goreng.jpeg" 
    }
  ];

  return {data};
}
