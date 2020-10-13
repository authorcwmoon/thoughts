const title = 'The Journal of C.W. Moon - Small thoughts big stories.';
const description =
  'Spinning up stories that land on your table.';

const SEO = {
  title,
  description,
  canonical: 'https://cwmoon.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://cwmoon.com',
    title,
    description,
    images: [
      {
        // url: 'https://leerob.io/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  // twitter: {
  //   handle: '@leeerob',
  //   site: '@leeerob',
  //   cardType: 'summary_large_image'
  // }
};

export default SEO;
