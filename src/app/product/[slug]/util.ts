/** @format */

const routeToWhatsApp = (itemName: string) => {
  let phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "0851 3488 8834";
  const message = process.env.NEXT_PUBLIC_MESSAGE_TEMPLATE;

  if (!phoneNumber) return;

  phoneNumber = phoneNumber.replace(/\s+/g, "");

  const text = `?text=${message?.replace("[item]", itemName)}`;
  const whatsappLink = `https://wa.me/[number]${message ? text : ""}`.replace(
    "[number]",
    phoneNumber
  );
  window.open(whatsappLink, "_blank");
};

export default routeToWhatsApp;
