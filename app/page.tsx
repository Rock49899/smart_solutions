"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import styles from "./page.module.css";

const FORM_LINK = "https://forms.gle/Q5DDHKxCxrkKZgqa6";
const WHATSAPP_LINK = "https://wa.me/message/BOLTEEZATBGNC1";

const modules = [
    ["01", "L'éveil", "Mindset entrepreneurial et identification des opportunités réelles."],
    ["02", "De l'idée au projet", "Structuration du concept et validation du marché cible."],
    ["03", "Plan d'affaires", "Rédaction stratégique pour convaincre investisseurs et banques."],
    ["04", "Gestion et finances", "Maîtrise des chiffres, rentabilité et flux de trésorerie."],
    ["05", "Marketing", "Vente, acquisition clients et positionnement de marque."],
    ["06", "Pitch", "L'art de présenter son projet avec impact et assurance."],
    ["07", "Lancement", "Exécution opérationnelle et premiers pas officiels."],
] as const;

function AnimatedSectionTitle({ text }: { text: string }) {
    const totalChars = Math.max(text.length - 1, 1);

    return (
        <h2 className={styles.animatedTitle} data-reveal-title aria-label={text}>
            {Array.from(text).map((char, index) => (
                <span
                    key={`${char}-${index}`}
                    className={styles.animatedChar}
                    style={{
                        ["--char-index" as string]: index,
                        ["--char-total" as string]: totalChars,
                    }}
                    aria-hidden="true"
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </h2>
    );
}

export default function Home() {
    useEffect(() => {
        const titles = document.querySelectorAll<HTMLElement>("[data-reveal-title]");

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) {
            titles.forEach((title) => title.classList.add(styles.titleVisible));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(styles.titleVisible);
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.34,
                rootMargin: "0px 0px -12% 0px",
            },
        );

        titles.forEach((title) => observer.observe(title));

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <nav className={`${styles.desktopFrame} ${styles.nav}`}>
                    <div className={styles.logoRow}>
                        <img className={styles.logo} alt="Logo Smart Solutions" src="/images/landing/combi.png" />
                                </div>

                    <div className={styles.navLinks}>
                        <a href="#programme">Programme</a>
                        <a href="#propos">Qui sommes-nous ?</a>
                        <a className={styles.ctaButton} href={FORM_LINK} target="_blank" rel="noreferrer">
                            Postuler
                        </a>
                    </div>
                </nav>
            </header>

            <main className={styles.main}>
                <section className={styles.sectionPad}>
                    <div className={`${styles.desktopFrame} ${styles.heroGrid}`}>
                        <div>
                            <div className={styles.badge}>NOUVELLE COHORTE 2026</div>
                            <h1 className={styles.heroTitle}>
                                Mon Idée, <span>Mon Entreprise !</span>
                            </h1>
                            <p className={styles.heroText}>
                                Transforme une idée floue en un projet structuré, finançable et prêt à être lancé en <strong>10 semaines</strong>.
                            </p>
                            <div className={styles.heroActions}>
                                <a className={styles.ctaButton} href={FORM_LINK} target="_blank" rel="noreferrer">
                                    Rejoindre le programme
                                </a>
                                <div className={styles.placesChip}>
                                    <span className="material-symbols-outlined">groups</span>
                                    <span>Places limitées (15)</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroVisualWrap}>
                            <div className={styles.heroVisual}>
                                <img alt="Jeunes entrepreneurs en collaboration" src="/images/landing/entrepreneur.jpg" />
                            </div>
                            <div className={styles.inscriptionCard}>
                                <p>Inscription</p>
                                <strong>15 mars au 18 mai 2026</strong>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.statsSection}>
                    <div className={`${styles.desktopFrame} ${styles.statsGrid}`}>
                        <article>
                            <span className="material-symbols-outlined">calendar_today</span>
                            <div>
                                <p>Démarrage</p>
                                <strong>20 mai 2026</strong>
                            </div>
                        </article>
                        <article>
                            <span className="material-symbols-outlined">timer</span>
                            <div>
                                <p>Durée</p>
                                <strong>10 semaines intensives</strong>
                            </div>
                        </article>
                        <article>
                            <span className="material-symbols-outlined">person_add</span>
                            <div>
                                <p>Disponibilité</p>
                                <strong>15 places seulement</strong>
                            </div>
                        </article>
                    </div>
                </section>

                <section className={`${styles.sectionPad} ${styles.softBg}`}>
                    <div className={styles.desktopFrame}>
                        <div className={styles.centerHead}>
                            <AnimatedSectionTitle text="Est-ce que tu te reconnais ?" />
                            <div className={styles.underbar} />
                        </div>
                        <div className={styles.problemGrid}>
                            <article><span className="material-symbols-outlined">psychology</span><p>J’ai plein d’idées, mais je ne sais pas par où commencer.</p></article>
                            <article><span className="material-symbols-outlined">payments</span><p>Je crains de lancer un projet qui ne sera pas rentable.</p></article>
                            <article><span className="material-symbols-outlined">account_balance</span><p>Je ne sais pas comment convaincre une banque ou un partenaire.</p></article>
                            <article><span className="material-symbols-outlined">architecture</span><p>Mon projet manque de structure et de vision claire.</p></article>
                        </div>
                    </div>
                </section>

                <section className={`${styles.sectionPad} ${styles.promiseSection}`}>
                    <div className={`${styles.desktopFrame} ${styles.promiseGrid}`}>
                        <div className={styles.promiseImages}>
                            <div className={styles.imageCol1}>
                                <img alt="Mains professionnelles drafting business plan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCoeK7xFhJLc3qe8Ng2zfxJ4jDFK0G2Uh44h8mCYAp4VpgbtMSYItb32QXbYKJcNkqdUwosko3mFW5jcqxvudme8C1CEzF6dbOzbbUpBTCahi1x_0eqN-xozH4zFRNADjLNzLF5TUcblxjLX5uNkEDpfWS-UKcYz-AJqvwlcydQ3FxpiW0BkodjBw0T3OHs0QuLBQrlgeqvRCxsSOyQ8jZoYmFcE__2kssoTpLnXYkKAvpIVR2efWJ3MXHKkXJ0dO0xm1YGbbMEg" />
                                <img alt="Modern office avec blueprints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJGRCaGZi2JpPvXdIFkCsD-WSH2hKGUa6DHrCFasXc9GhauY3a2TJ4sB1j0uAK9HMmMUjmhl4E5YTpBgOmxMU5TuPk86-SsL2xOq5qx4328xd4JqYjnTfIIOy8HvviJz4MZqy6RsxctpEuroE1dQNYdNB12iVCLbAHUMGW67TTCVgaRfsZ45r-qnW1srdu-EeZnoTfSoErA1re7q4wJW4amlTDQk5GwdHXjIM7I1wDEAje1EuLoMFbIVmLrfHxxinCXgIo96kmmw" />
                            </div>
                            <div className={styles.imageCol2}>
                                <img alt="Entrepreneur confident en boardroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl95SvdVpKlkOs6wkfpGKf_UHn8G3fQ1KQhsbNnFSp4tY40vPR3la3FmJOJel1d8kvUmqarAuzk1rtf0KjWmOzBYTFTj6ze0hHsDipOydbZ1-IhYDwLYiQipp2S7Je1oUj6fOoSSYNhj9hoLNwpoKcgOUtBAfluyK2DmiMsiHMgL-cILX5T81HzRFhTTUStE91bPVqpKpmlaVTMOuehJvj3K8qNSRPgGRS-Etlod2g4CST0A54SyJnJiU5Lr4A71NAypRw2TVGxQ" />
                                <img alt="Handshake partenaires affaires" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQIgAS5xCkUjdCII5CpXk2Ajgu-Ew1pjBH9i2VI6lPCwuIWwt9Dq-S80JRd58WiMZ4CbpNewFSFzUcCjWOnyq4eJzGJTyq0sDYUv913UaOUJ6pFwkBwsUyJgaAhLaHNzOm-OKSRTxNVqGfwa8zI9XLTFtAliyBpaqO6rdMUbg0IgJpZ6LilvNDVkxZxRDrKjjAhVFutb1ccTkjOlU6SHU4Dom9YtFXEr26lo3eHvsfOr2kPgClTi5wvVmjJwCBmlw7qCMw22JFpA" />
                            </div>
                        </div>

                        <div className={styles.promiseContent}>
                            <AnimatedSectionTitle text="Notre Promesse" />
                            <p>
                                On te fait passer d&apos;une <strong>idée incertaine</strong> à quelque chose de <u>concret, structuré et exploitable</u>.
                            </p>
                            <div className={styles.promiseChecks}>
                                <div>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    <span>Accompagnement personnalisé</span>
                                </div>
                                <div>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    <span>Outils de gestion modernes</span>
                                </div>
                                <div>
                                    <span className="material-symbols-outlined">check_circle</span>
                                    <span>Réseau d&apos;entrepreneurs locaux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.sectionPad} id="programme">
                    <div className={styles.desktopFrame}>
                        <div className={styles.programHead}>
                            <div>
                                <p>Le Parcours</p>
                                <h2>7 Modules pour Bâtir ton Empire</h2>
                            </div>
                            <span>10 SEMAINES</span>
                        </div>

                        <div className={styles.moduleGrid}>
                            {modules.map(([num, title, text]) => (
                                <article key={num}>
                                    <strong>{num}</strong>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.restrictionSection}>
                    <div className={`${styles.desktopFrame} ${styles.restrictionCard}`}>
                        <AnimatedSectionTitle text="À qui ce programme ne s’adresse pas ?" />
                        <div className={styles.restrictionStack}>
                            <ul className={`${styles.restrictionList} ${styles.restrictionListPrimary}`}>
                                <li>
                                    <div className={styles.restrictionItemHead}>
                                        <span className="material-symbols-outlined">cancel</span>
                                        <h3>Pas pour les solutions miracles</h3>
                                    </div>
                                    <p>Ceux qui cherchent une solution « magique » sans fournir d’effort réel.</p>
                                </li>
                            </ul>
                            <ul className={`${styles.restrictionList} ${styles.restrictionListSecondary}`}>
                                <li>
                                    <div className={styles.restrictionItemHead}>
                                        <span className="material-symbols-outlined">cancel</span>
                                        <h3>Pas pour l’immobilisme</h3>
                                    </div>
                                    <p>Ceux qui ne sont pas prêts à se remettre en question et à apprendre.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.sectionPad} id="propos">
                    <div className={`${styles.desktopFrame} ${styles.aboutTopLogoWrap}`}>
                        <img className={styles.aboutTopLogo} alt="Logo Smart Solutions Benin" src="/images/landing/combi.png" />
                    </div>
                    <div className={`${styles.desktopFrame} ${styles.aboutGrid}`}>
                        <div>
                            <p className={styles.kicker}>Qui sommes-nous ?</p>
                            <AnimatedSectionTitle text="Un Centre Dédié à votre Réussite" />
                            <p>
                                Le programme MON IDEE, MON ENTREPRISE du centre <strong>SMART SOLUTIONS BENIN</strong> est né d’une volonté simple : donner aux porteurs d’idées les moyens réels de leurs ambitions.
                                Nous ne nous contentons pas de former ; nous bâtissons des entreprises pérennes.
                            </p>
                            <p>
                                Notre approche est 100% pratique, basée sur des années d’expérience terrain et une connaissance pointue du tissu économique local.
                                Rejoindre MON IDEE, MON ENTREPRISE, c’est intégrer une famille d’entrepreneurs visionnaires.
                            </p>
                        </div>

                        <div className={styles.aboutImageCard}>
                            <img alt="Fondateur visionnaire" src="/images/landing/bosss.jpg" />
                            <div>
                                <strong>Fondateur SSB</strong>
                                <p>Expert en Stratégie & Finance</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.sectionPad} id="postuler">
                    <div className={`${styles.desktopFrame} ${styles.finalCard}`}>
                        <AnimatedSectionTitle text="Une seule décision à prendre." />
                        <p>Le nombre de places est limité à 15 pour garantir un suivi d’excellence. Ne laisse pas passer ta chance.</p>
                        <a className={styles.bigCta} href={FORM_LINK} target="_blank" rel="noreferrer">
                            Postuler maintenant
                        </a>
                        <small>
                            <span className="material-symbols-outlined">check_circle</span>
                            Dépôt de candidature gratuit
                        </small>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.desktopFrame}>
                    <div className={styles.footerTop}>
                        <div>
                            <h3>Mon Idée, Mon Entreprise |  SMART SOLUTIONS BENIN</h3>
                            <p>Accélérateur de projets innovants et centre de formation stratégique pour les entrepreneurs de demain.</p>
                        </div>
                        <div className={styles.footerLinks}>
                            <a href="#programme">Programme</a>
                            <a href="#propos">Qui sommes-nous ?</a>
                            <a href={FORM_LINK} target="_blank" rel="noreferrer">Candidater</a>
                            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Contactez-nous</a>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>
                        <p>© 2026 Mon Idée, Mon Entreprise. Propulsé par Smart Solutions.</p>
                        <div>
                            <span>Mentions Légales</span>
                            <span>Confidentialité</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}