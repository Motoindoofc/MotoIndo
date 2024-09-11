const routeToWhatsApp = (itemName: string) => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const message = process.env.NEXT_PUBLIC_MESSAGE_TEMPLATE;

  if (!phoneNumber) return;

  const text = `?text=${message?.replace("[item]", itemName)}`;
  const whatsappLink = `https://wa.me/[number]${message ? text : ""}`.replace(
    "[number]",
    phoneNumber,
  ); 
  window.open(whatsappLink, "_blank");
};

export default routeToWhatsApp