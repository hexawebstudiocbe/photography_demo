export const BRAND = 'Mangala Clicks'
export const PHONE = '919999999999' // WhatsApp number, country code first, no +
export const PHONE_DISPLAY = '+91 99999 99999'

// Unsplash stock photos. Replace with your own in /public/photos for real work.
const u = (id, w, h) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`
const svc = (id) => u(id, 700, 480)

export const heroSlides = [
  u('1604017011826-d3b4c23f8914', 1800, 1100),
  u('1583939003579-730e3918a45a', 1800, 1100),
  u('1515488042361-ee00e0ddd4e4', 1800, 1100),
  u('1530103862676-de8c9debad1d', 1800, 1100),
  u('1492684223066-81342ee5ff30', 1800, 1100),
]

export const services = [
  { id: 'wedding', img: svc('1583939003579-730e3918a45a'), icon: '💍', title: 'Wedding', text: 'Muhurtham, thali, saptapadi, reception. Every ritual captured candid and cinematic.' },
  { id: 'baby', img: svc('1515488042361-ee00e0ddd4e4'), icon: '🍼', title: 'Baby Shower & Newborn', text: 'Valaikappu, seemantham, cradle ceremony and newborn shoots, soft and warm.' },
  { id: 'bday', img: svc('1558636508-e0db3814bd1d'), icon: '🎂', title: 'Birthday', text: 'Kids birthdays, first birthday, milestone 50th and 60th Shashtiabdapoorthi.' },
  { id: 'party', img: svc('1492684223066-81342ee5ff30'), icon: '🎉', title: 'Party & Corporate', text: 'Engagement, house warming, anniversary, college and corporate events.' },
  { id: 'puberty', img: svc('1596944924616-7b38e7cfac36'), icon: '🌺', title: 'Half Saree & Puberty', text: 'Manjal neerattu vizha and half saree function with traditional styling.' },
  { id: 'personal', img: svc('1544005313-94ddf0286df2'), icon: '📸', title: 'Personal & Portrait', text: 'Pre-wedding, couple, maternity, family and portfolio shoots at heritage spots.' },
]

export const gallery = [
  { id: 1, cat: 'wedding', title: 'Wedding Ceremony', src: u('1583939003579-730e3918a45a', 800, 1000), full: u('1583939003579-730e3918a45a', 1400, 1750), ratio: 1.25 },
  { id: 2, cat: 'baby', title: 'Baby Shower', src: u('1515488042361-ee00e0ddd4e4', 800, 1000), full: u('1515488042361-ee00e0ddd4e4', 1400, 1750), ratio: 1 },
  { id: 3, cat: 'bday', title: 'Birthday Party', src: u('1558636508-e0db3814bd1d', 800, 1000), full: u('1558636508-e0db3814bd1d', 1400, 1750), ratio: 1.4 },
  { id: 4, cat: 'wedding', title: 'Bride & Groom', src: u('1604017011826-d3b4c23f8914', 800, 1000), full: u('1604017011826-d3b4c23f8914', 1400, 1750), ratio: 1.1 },
  { id: 5, cat: 'personal', title: 'Portrait Shoot', src: u('1544005313-94ddf0286df2', 800, 1000), full: u('1544005313-94ddf0286df2', 1400, 1750), ratio: 1.3 },
  { id: 6, cat: 'party', title: 'Celebration Night', src: u('1492684223066-81342ee5ff30', 800, 1000), full: u('1492684223066-81342ee5ff30', 1400, 1750), ratio: 1 },
  { id: 7, cat: 'baby', title: 'Little Smiles', src: u('1503454537195-1dcabb73ffb9', 800, 1000), full: u('1503454537195-1dcabb73ffb9', 1400, 1750), ratio: 1.35 },
  { id: 8, cat: 'wedding', title: 'Wedding Reception', src: u('1583939411023-14783179e581', 800, 1000), full: u('1583939411023-14783179e581', 1400, 1750), ratio: 1.2 },
  { id: 9, cat: 'personal', title: 'Studio Portrait', src: u('1509967419530-da38b4704bc6', 800, 1000), full: u('1509967419530-da38b4704bc6', 1400, 1750), ratio: 1.25 },
  { id: 10, cat: 'bday', title: 'Balloons & Fun', src: u('1530103862676-de8c9debad1d', 800, 1000), full: u('1530103862676-de8c9debad1d', 1400, 1750), ratio: 1.05 },
  { id: 11, cat: 'party', title: 'Cheers with Friends', src: u('1541532713592-79a0317b6b77', 800, 1000), full: u('1541532713592-79a0317b6b77', 1400, 1750), ratio: 1.3 },
  { id: 12, cat: 'wedding', title: 'Ring Ceremony', src: u('1465495976277-4387d4b0b4c6', 800, 1000), full: u('1465495976277-4387d4b0b4c6', 1400, 1750), ratio: 1.4 },
]

export const categories = [
  { key: 'all', label: 'All' },
  { key: 'wedding', label: 'Wedding' },
  { key: 'baby', label: 'Baby Shower' },
  { key: 'bday', label: 'Birthday' },
  { key: 'party', label: 'Party' },
  { key: 'personal', label: 'Personal' },
]

export const packages = [
  { name: 'Silver', price: '₹25,000', note: 'Birthday, baby shower, small functions', items: ['4 hours coverage', '1 photographer', '200 edited photos', 'Online gallery', 'Delivery in 10 days'] },
  { name: 'Gold', price: '₹65,000', note: 'Most booked for weddings', featured: true, items: ['Full day coverage', '2 photographers', '600 edited photos', 'Cinematic highlight reel', 'Premium 30-page album', 'Drone shots'] },
  { name: 'Platinum', price: '₹1,25,000', note: 'Multi-day wedding', items: ['2-3 days coverage', '3 photographers + videographer', '1200 edited photos', 'Pre-wedding shoot', '2 premium albums', 'Same-week teaser'] },
]

export const testimonials = [
  { name: 'Priya & Karthik', place: 'Madurai', text: 'Caught every tear and laugh during our muhurtham. Album felt like a movie. Whole family cried again.' },
  { name: 'Lakshmi', place: 'Coimbatore', text: 'Valaikappu photos so natural. Team patient with elders and kids. Highly recommend.' },
  { name: 'Arun Kumar', place: 'Chennai', text: 'Son first birthday covered perfectly. Delivery earlier than promised. Great value.' },
]

export const cities = ['Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Salem', 'Tirunelveli', 'Thanjavur', 'Erode', 'Vellore', 'Tiruppur', 'Kanyakumari', 'Pondicherry']

export const stats = [
  { n: 500, suffix: '+', label: 'Events Covered' },
  { n: 12, suffix: '+', label: 'Districts Served' },
  { n: 8, suffix: '', label: 'Years Experience' },
  { n: 100, suffix: '%', label: 'Happy Families' },
]
