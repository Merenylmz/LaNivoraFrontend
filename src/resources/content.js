const person = {
  firstName: "La Nivora",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Parfüm Şirketi",
  avatar: "/images/lanivoraLogo.jpg",
  email: "nivoraofficial2025@gmail.com",
  location: "Europe/Istanbul",
  languages: ["English", "Turkish"],
};

const newsletter = {
  display: true,
  // React JSX içinde ' kullanırken &apos; veya {"'"} şeklinde kullanabilirsin
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/people/Lanivora/61579440875720/#",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/nivoraaofficial/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Tiktok",
    icon: "tiktok",
    link: `https://www.tiktok.com/@lanivora?_t=ZS-8zOdmVdIm3R&_r=1`,
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: `https://www.youtube.com/@lanivora`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Home`,
  description: `This site belongs to the ${person.role} team.`,
  headline: <>En Seçkin Notalardan İlham Alan Parfümler</>,
  featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4"></strong></>,
    href: "/",
  },
  subline: (
    <>
      Dünyanın en nadide esansları, Lanivora&apos;nın usta işçiliğiyle bir araya geldi. Zarafet, tutku ve lüksün harmonisi.
      En güzel anılarınızı anımsatan, yeni anılar yaratacak bir koku. Lanivora ile sadece bir parfüm değil, hikayenizin bir sonraki bölümünü seçin.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Hakkımızda",
  title: `Hakkımızda – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Sunum",
    description: (
      <>
        Lanivora, sıradanlığın ötesine geçerek kokuyu bir sanata dönüştüren, lüks ve sofistike bir parfüm markasıdır. Her bir şişe, en nadide esansların ustaca harmanlanmasıyla ortaya çıkan eşsiz bir hikaye anlatır.
        Bizim için parfüm sadece bir koku değil, karakterinizin bir yansıması ve imzanızdır. Lanivora, dünyanın dört bir yanından özenle seçilmiş, en kaliteli ve doğal notaları kullanarak duyulara hitap eden unutulmaz parfümler oluşturur.
      </>
    ),
  },
  work: {
    display: true,
    title: "Koku Notalarımız",
    experiences: [
      {
        company: "La Nivora",
        timeframe: "Günümüz",
        role: "Parfüm",
        achievements: [
          <>
            Üst Nota: Bergamot, Limon, Nane
          </>,
          <>
            Orta Nota: Lavanta, Yasemin
          </>,
          <>
            Alt Nota: Sedir Ağacı, Amber, Misk
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/parfume1.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Parfüm Hakkında Genel Bilgiler",
    skills: [
      {
        title: "Parfüm Türü",
        description: <>Eau de Parfum (EDP)
          Kalıcılığı yüksek, yoğun koku profili.
        </>,
        images: [
          {
            src: "/images/projects/project-01/parfume2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/parfume3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Kullanım Zamanı",
        description: <>Kullanım Zamanı: Gündüz & Gece
          Çok yönlü kullanım için ideal.
        </>,
        images: [
          {
            src: "/images/projects/project-01/parfume4.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Ten Uyumu",
        description: <>Ten Uyumu: Kuru ve normal ciltler için önerilir.</>,
        images: [
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "İletişim",
  title: "Bizimle iletişim kurmak İsterseniz...",
  description: `...`,
};

const admin = {
  path: "/admin",
  label: "admin",
  title: "Control Panel",
  description: "......"
}

const work = {
  path: "/work",
  label: "Ürünlerimiz",
  title: `Ürünler – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const contact = {
  path: "/contact",
  label: "İletişim",
  title: "Bize Erişmek İsterseniz...",
  description: `...`,
};

const details = {
  path: "/details",
  label: "Detay",
  title: "Detay",
  description: "......"
}

const gallery = {
  path: "/gallery",
  label: "aasdasdsa",
  title: `${person.name} - Projeler`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, contact, details, admin };
