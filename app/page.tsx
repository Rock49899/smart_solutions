"use client";

/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
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

function Icon({
    title,
    className,
    children,
}: {
    title: string;
    className?: string;
    children: ReactNode;
}) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            role="img"
            aria-label={title}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <title>{title}</title>
            {children}
        </svg>
    );
}

function GroupsIcon(props: { className?: string }) {
    return (
        <Icon title="Groupes" {...props}>
            <circle cx="9" cy="8" r="3" />
            <circle cx="17" cy="9" r="2.4" />
            <path d="M4.5 19a5.5 5.5 0 0 1 11 0" />
            <path d="M12.5 18.8a4.5 4.5 0 0 1 7 .2" />
        </Icon>
    );
}

function CalendarIcon(props: { className?: string }) {
    return (
        <Icon title="Calendrier" {...props}>
            <rect x="4" y="5" width="16" height="15" rx="2" />
            <path d="M8 3v4" />
            <path d="M16 3v4" />
            <path d="M4 9h16" />
            <path d="M8 13h3" />
        </Icon>
    );
}

function TimerIcon(props: { className?: string }) {
    return (
        <Icon title="Minuteur" {...props}>
            <circle cx="12" cy="13" r="7" />
            <path d="M9 3h6" />
            <path d="M12 13l3-2" />
        </Icon>
    );
}

function UsersIcon(props: { className?: string }) {
    return (
        <Icon title="Utilisateurs" {...props}>
            <circle cx="9" cy="8" r="3" />
            <circle cx="17" cy="9.5" r="2.4" />
            <path d="M4.5 20a5.5 5.5 0 0 1 9 0" />
            <path d="M13.5 19.6a4.5 4.5 0 0 1 6 0.4" />
        </Icon>
    );
}

function BrainIcon(props: { className?: string }) {
    return (
        <Icon title="Idées" {...props}>
            <path d="M9 5.5a3 3 0 0 0-3 3V9a2.8 2.8 0 0 0 0 5.6 3 3 0 0 0 3 3h1" />
            <path d="M15 5.5a3 3 0 0 1 3 3V9a2.8 2.8 0 0 1 0 5.6 3 3 0 0 1-3 3h-1" />
            <path d="M10 7.5V17" />
            <path d="M14 7.5V17" />
        </Icon>
    );
}

function BanknoteIcon(props: { className?: string }) {
    return (
        <Icon title="Paiements" {...props}>
            <rect x="4" y="7" width="16" height="10" rx="2" />
            <circle cx="12" cy="12" r="2.2" />
            <path d="M7 9.5h0.01" />
            <path d="M17 14.5h0.01" />
        </Icon>
    );
}

function BuildingIcon(props: { className?: string }) {
    return (
        <Icon title="Bâtiment" {...props}>
            <path d="M5 20V6l7-3 7 3v14" />
            <path d="M9 20v-4h6v4" />
            <path d="M9 10h0.01" />
            <path d="M9 13h0.01" />
            <path d="M15 10h0.01" />
            <path d="M15 13h0.01" />
        </Icon>
    );
}

function ArchitectureIcon(props: { className?: string }) {
    return (
        <Icon title="Architecture" {...props}>
            <path d="M4 20h16" />
            <path d="M7 20V8l5-4 5 4v12" />
            <path d="M10 20v-6h4v6" />
            <path d="M9 11h0.01" />
            <path d="M15 11h0.01" />
        </Icon>
    );
}

function CheckIcon(props: { className?: string }) {
    return (
        <Icon title="Valider" {...props}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="m8.5 12 2.4 2.4L15.8 9.4" />
        </Icon>
    );
}

function CancelIcon(props: { className?: string }) {
    return (
        <Icon title="Refuser" {...props}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="m9 9 6 6" />
            <path d="m15 9-6 6" />
        </Icon>
    );
}

function AnimatedSectionTitle({ text }: { text: string }) {
    const words = text.trim().split(/\s+/);
    const totalChars = Math.max(Array.from(text.replace(/\s+/g, "")).length - 1, 1);
    let charIndex = 0;

    return (
        <h2 className={styles.animatedTitle} data-reveal-title aria-label={text}>
            {words.map((word, wordIndex) => (
                <span key={`${word}-${wordIndex}`} className={styles.animatedWord} aria-hidden="true">
                    {Array.from(word).map((char, localIndex) => {
                        const currentIndex = charIndex;
                        charIndex += 1;

                        return (
                            <span
                                key={`${word}-${wordIndex}-${char}-${localIndex}`}
                                className={styles.animatedChar}
                                style={{
                                    ["--char-index" as string]: currentIndex,
                                    ["--char-total" as string]: totalChars,
                                }}
                            >
                                {char}
                            </span>
                        );
                    })}
                    {wordIndex < words.length - 1 ? <span className={styles.animatedSpace}> </span> : null}
                </span>
            ))}
        </h2>
    );
}

export default function Home() {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

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

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateHeaderVisibility = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY;

            if (currentScrollY < 80 || delta < -4) {
                setIsHeaderHidden(false);
            } else if (delta > 6) {
                setIsHeaderHidden(true);
            }

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;
            window.requestAnimationFrame(updateHeaderVisibility);
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={styles.page}>
            <header className={`${styles.header} ${isHeaderHidden ? styles.headerHidden : ""}`}>
                <nav className={`${styles.desktopFrame} ${styles.nav}`}>
                    <div className={styles.logoRow}>
                        <img className={styles.headerLogo} alt="Logo Smart Solutions" src="/images/landing/finasmart.png" />
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
                        <div className={styles.heroIntro}>
                            <div className={styles.badge}>NOUVELLE COHORTE 2026</div>
                            <h1 className={styles.heroTitle}>
                                Mon Idée, <span>Mon Entreprise !</span>
                            </h1>
                            <p className={styles.heroText}>
                                Transforme une idée floue en un projet structuré, finançable et prêt à être lancé en <strong>10 semaines</strong>.
                            </p>
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

                        <div className={styles.heroActionsSlot}>
                            <div className={styles.heroActions}>
                                <a className={styles.ctaButton} href={FORM_LINK} target="_blank" rel="noreferrer">
                                    Rejoindre le programme
                                </a>
                                <div className={styles.placesChip}>
                                    <GroupsIcon className={styles.iconGlyph} />
                                    <span>Places limitées (15)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.statsSection}>
                    <div className={`${styles.desktopFrame} ${styles.statsGrid}`}>
                        <article>
                            <CalendarIcon className={styles.iconGlyph} />
                            <div>
                                <p>Démarrage</p>
                                <strong>20 mai 2026</strong>
                            </div>
                        </article>
                        <article>
                            <TimerIcon className={styles.iconGlyph} />
                            <div>
                                <p>Durée</p>
                                <strong>10 semaines intensives</strong>
                            </div>
                        </article>
                        <article>
                            <UsersIcon className={styles.iconGlyph} />
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
                            <article><BrainIcon className={styles.iconGlyph} /><p>J’ai plein d’idées, mais je ne sais pas par où commencer.</p></article>
                            <article><BanknoteIcon className={styles.iconGlyph} /><p>Je crains de lancer un projet qui ne sera pas rentable.</p></article>
                            <article><BuildingIcon className={styles.iconGlyph} /><p>Je ne sais pas comment convaincre une banque ou un partenaire.</p></article>
                            <article><ArchitectureIcon className={styles.iconGlyph} /><p>Mon projet manque de structure et de vision claire.</p></article>
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
                                    <CheckIcon className={styles.iconGlyph} />
                                    <span>Accompagnement personnalisé</span>
                                </div>
                                <div>
                                    <CheckIcon className={styles.iconGlyph} />
                                    <span>Outils de gestion modernes</span>
                                </div>
                                <div>
                                    <CheckIcon className={styles.iconGlyph} />
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
                                        <CancelIcon className={styles.iconGlyph} />
                                        <h3>Pas pour les solutions miracles</h3>
                                    </div>
                                    <p>Ceux qui cherchent une solution « magique » sans fournir d’effort réel.</p>
                                </li>
                            </ul>
                            <ul className={`${styles.restrictionList} ${styles.restrictionListSecondary}`}>
                                <li>
                                    <div className={styles.restrictionItemHead}>
                                        <CancelIcon className={styles.iconGlyph} />
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
                            <CheckIcon className={styles.iconGlyph} />
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