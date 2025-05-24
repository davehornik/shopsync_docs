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
            to="/docs/intro"
          >
            🔍 Najít řešení problému
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageSections() {
  return (
    <section className="margin-top--xl margin-bottom--xl">
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2>📚 Dokumentace</h2>
            <p>
              Podrobný popis funkcí, napojení a konfigurace aplikace ShopSync.
              Ideální pro vývojáře i správce e-shopu.
            </p>
            <Link to="/docs/intro">Přejít do dokumentace →</Link>
          </div>
          <div className="col col--6">
            <h2>🛠️ Návody a řešení problémů</h2>
            <p>
              Postupy krok za krokem, jak vyřešit běžné i méně obvyklé situace.
              Od propojení s Pohodou až po úpravy ceníků.
            </p>
            <Link to="/docs/navody/uvod">Zobrazit návody →</Link>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--6">
            <h2>❓ FAQ</h2>
            <p>
              Nejčastější otázky a odpovědi – pro nové i pokročilé uživatele.
            </p>
            <Link to="/docs/faq">Prohlédnout FAQ →</Link>
          </div>
          <div className="col col--6">
            <h2>📞 Kontakt na podporu</h2>
            <p>
              Pokud nenajdete odpověď v dokumentaci, jsme tu pro vás.
              <br />
              <strong>Telefon:</strong> +420 776 357 361
              <br />
              <strong>Email:</strong> podpora@shopsync.cz
            </p>
            <Link to="/docs/kontakt">Další možnosti kontaktu →</Link>
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
