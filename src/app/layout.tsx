import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';

import classNames from 'classnames';

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  SpacingToken,
} from '@once-ui-system/core';
import { Footer, Header, RouteGuard, Providers } from '@/components';
import { baseURL, effects, fonts, style, dataStyle, home } from '@/resources';
import { SpeedInsights } from '@vercel/speed-insights/next';
import store from '@/store/store';
import ReduxProvider from '@/store/ReduxProvider';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    author: {name: "Quarkend Teams", url: "https://quarkend.com"},
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <head>
        <meta name="keywords" content="    
          'nextjs geliştirme',
          'web tasarım',
          'web geliştirme',
          'seo uyumlu web sitesi',
          'kurumsal web sitesi',
          'e-ticaret sitesi',
          'react geliştirme',
          'full stack geliştirme',
          'özel yazılım',
          'mobil uyumlu web sitesi',
          'dijital ajans',
          'istanbul web tasarım',
          'reklam yönetimi',
          'web geliştirme',
          quarkend, web geliştirme, web tasarım, web sitesi, sosyal medya yönetimi, dijital pazarlama, SEO optimizasyonu, reklam kampanyası, kurumsal site, içerik yönetimi, yazılım geliştirme, frontend tasarım, backend mimarisi, kullanıcı deneyimi, mobil uyumlu site, hızlı yüklenen site, baştan sona proje, Laravel, Next.js, MDX, performans optimizasyonu, etkileşimli arayüz, modern yazılım
          " 
        />
        <meta property="og:title" content={home.title}/>
        <meta property="og:description" content={home.description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https:/quarkend.com"/>
        <meta property="og:site_name" content="https:/quarkend.com"/>
        <meta property="og:locale" content="tr_TR"/>
        <meta property="og:image" content="https://www.quarkend.com/_next/image?url=%2Fimages%2FquarkendLogo.jpg"/>
        <meta property="og:image:alt" content="Quarkend Image"/>

        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';

                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    'solid-style': style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    'viz-style': dataStyle.variant,
                  })};

                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });

                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };

                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);

                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: '100vh' }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          {/* Google Tag Manager noscript */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WZ4RFSTQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          <Background
            position="fixed"
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: effects.mask.cursor,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{
              display: effects.grid.display,
              opacity: effects.grid.opacity as opacity,
              color: effects.grid.color,
              width: effects.grid.width,
              height: effects.grid.height,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
              thickness: effects.lines.thickness,
              angle: effects.lines.angle,
              color: effects.lines.color,
            }}
          />
          <Flex fillWidth minHeight="16" hide="s" />
          <Header />
          <Flex
            zIndex={0}
            fillWidth
            padding="l"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <ReduxProvider>
                <RouteGuard>
                  {children}
                  <SpeedInsights />
                </RouteGuard>
              </ReduxProvider>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
