import Navbar from './Navbar'

const siteSettings = {
  title: 'RiseNext',
  logo: '/logo.png',
  contactEmail: 'info@rise-next.org',
  contactPhone: '+250 780 066 261',
  location: {
    city: 'Kigali',
    country: 'Rwanda',
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/505870975939339/',
    linkedin: 'https://www.linkedin.com/company/nextrise-mentorship',
    instagram: 'https://www.instagram.com/risenext_/',
  },
}

export default function NavbarWrapper() {
  return <Navbar siteSettings={siteSettings} />
}
