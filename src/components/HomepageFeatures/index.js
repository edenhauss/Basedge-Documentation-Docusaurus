import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Не отходя от чата',
    Svg: require('@site/static/img/desktop.svg').default,
    description: (
      <>
          Все полезные функции прямо в чате. Узнай <a href='/Basedge-Documentation/docs/commands/color'>цвет никнейма,</a> <a href='/Basedge-Documentation/docs/commands/weather'>погоду</a> или <a href='/Basedge-Documentation/docs/commands/math'>решение примера</a> в два клика.
      </>
    ),
  },
  {
    title: 'Игровые команды',
    Svg: require('@site/static/img/gamba.svg').default,
    description: (
      <>
          <a href='/Basedge-Documentation/docs/games/slots'>Слоты,</a> <a href='/Basedge-Documentation/docs/games/casino'>казино,</a> <a href='/Basedge-Documentation/docs/games/baccarat'>баккара</a> и <a href='/Basedge-Documentation/docs/games/roulette'>рулетка</a> в одном месте. Единый <a href='/Basedge-Documentation/docs/commands/balance'>баланс</a> для всего, <a href='/Basedge-Documentation/docs/commands/transfer'>взаимодействие</a>  с игроками.
      </>
    ),
  },
  {
    title: 'Помощь в модерации',
    Svg: require('@site/static/img/blades.svg').default,
    description: (
      <>
          Защита от <a href='/Basedge-Documentation/docs/mod/spam'>спама</a>, <a href='/Basedge-Documentation/docs/mod/filter'>фильтр фраз,</a> управление<a href='/Basedge-Documentation/docs/mod/title'> стримом</a> и добавление<p> <a href='/Basedge-Documentation/docs/mod/custom_commands'>кастомных команд.</a></p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
