import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    let games = [
        {link: "casino", title: "Казино"},
        {link: "roulette", title: "Рулетка"},
        {link: "slots", title: "Слоты"},
        {link: "trade", title: "Трейд"},
    ];

    let num = Math.floor(Math.random() * games.length);

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to={`/docs/games/${games[num]['link']}`}>
                        {games[num]['title']}
                    </Link>
                    <Link
                        className="button button--primary button--lg"
                        to="/docs/connect">
                        Подключение
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            description="EZ игровой бот EZ">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}

let games_link = ["casino", "roulette", "slots", "trade"];
let games = ["Казино", "Рулетка", "Слоты", "Трейд"];