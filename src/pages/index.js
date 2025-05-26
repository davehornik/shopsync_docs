import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Oficiální dokumentace a centrum nápovědy pro ShopSync.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="#"
          >
            🔍 Najít řešení problému
            (placeholder)
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageSections() {
  return (
    <section className="margin-top--xl margin-bottom--xl homepage-sections">
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2>📚 Dokumentace</h2>
            <p>
              Podrobný popis funkcí, napojení a konfigurace aplikace ShopSync.
              Ideální pro vývojáře i správce e-shopu.
            </p>
            <Link to="/docs/dokumentace">Přejít do dokumentace →</Link>
          </div>
          <div className="col col--6">
            <h2>🛠️ Návody</h2>
            <p>
              Postupy krok za krokem – od nastavení až po složitější scénáře a úpravy napojení.
            </p>
            <Link to="/docs/navody/uvod-navody">Zobrazit návody →</Link>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--6">
            <h2>🧯 Řešení problémů</h2>
            <p>
              Nejčastější chyby při integraci a jejich oprava. Vhodné pro samostatné řešení potíží.
            </p>
            <Link to="/docs/reseni-problemu/">Zobrazit chyby a řešení →</Link>
          </div>
          <div className="col col--6">
            <h2>❓ FAQ</h2>
            <p>
              Nejčastější otázky a odpovědi – pro nové i pokročilé uživatele.
            </p>
            <Link to="/docs/faq">Prohlédnout FAQ →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Vítejte – ${siteConfig.title}`}
      description="Oficiální dokumentace, návody a podpora pro ShopSync.">
      <HomepageHeader />
      <main>
        <HomepageSections />
      </main>
    </Layout>
  );
}
