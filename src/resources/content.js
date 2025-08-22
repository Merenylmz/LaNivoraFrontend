import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "LaNivora",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Parfume Company",
  avatar: "/images/quarkendLogo.jpg",
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
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/quarkend0/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Home`,
  description: `This site belongs to the ${person.role} team.`,
  headline: <>Kodu değil, geleceği yazarız.</>,
  featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4"></strong></>,
    href: "/",
  },
  subline: (
    <>
      Biz Web geliştirme üzerine odaklı, Quarkend adında bir yazılım şirketiyiz.
      <br /> Yenilikçi web çözümleriyle dijital dünyada fark yaratıyoruz. Her projede kalite ve inovasyonu birleştirerek, markanızın dijitalde parlamasını sağlıyoruz.
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
        Lise sıralarında başlayan bir girişimcilik ruhuyla kurulan Quarkend, bugün web geliştirme alanında sağlam adımlar atmaktadır. Gelecekte mobil uygulama çözümleri ve yapay zeka teknolojileriyle hizmet yelpazemizi genişleterek, dijital dönüşümde öncü olmayı hedeflemekteyiz. Her projede kalite ve inovasyonu benimseyerek, paydaşlarımıza değer katmayı sürdüreceğiz.
      </>
    ),
  },
  work: {
    display: true,
    title: "İş Deneyimleri",
    experiences: [
      {
        company: "Web Geliştirme",
        timeframe: "Günümüz",
        role: "Geliştirme",
        achievements: [
          <>
            Dijital varlığınızı güçlendirmek için, işletmenizin ihtiyaçlarına özel, modern ve etkileşimli web geliştirme çözümleri sunuyoruz
          </>,
          <>
            İşletmenizin dijital hedeflerine ulaşması için kapsamlı web geliştirme ve gelecekteki mobil uygulama ve yapay zeka çözümlerimizle yanınızdayız.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
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
    title: "Kullanılan Teknolojiler",
    skills: [
      {
        title: "Node.js / Express.js",
        description: <>Backend tarafında kullanmış olduğumuz teknolojilerimiz</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js / Next UI",
        description: <>Frontend tarafında kullanmış olduğumuz teknolojimiz</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Laravel",
        description: <>Backend tarafında kullanmış olduğumuz teknolojilerimiz</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
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

const work = {
  path: "/work",
  label: "Projeler",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const contact = {
  path: "/contact",
  label: "İletişim",
  title: "Bize Erişmek İsterseniz...",
  description: `...`,
};

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

export { person, social, newsletter, home, about, blog, work, gallery, contact };
