const phone = '+91 89495 40259';
const phoneDigits = phone.replace(/\D/g, '');

export const business = {
  name: 'Maple & Thyme',
  location: 'Jaipur, Rajasthan, India',
  email: 'info.mapleandthyme@gmail.com',
  phone,
  phoneHref: `tel:+${phoneDigits}`,
  whatsapp: `https://wa.me/${phoneDigits}`,
  mapsUrl:
    'https://www.google.com/maps/place/Maple+and+thyme/@26.8231513,75.8693648,17z/data=!4m6!3m5!1s0x396dc9bacc4023a3:0xb63fba433a936230!8m2!3d26.8231513!4d75.8693648!16s%2Fg%2F11zxds05zn?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D',
};

export const galleryItems = [
  { id: 0, title: 'The space', art: 'arch' },
  { id: 1, title: 'The table', art: 'plate' },
  { id: 2, title: 'The moments', art: 'cup' },
];