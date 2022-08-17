import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Не отходя от чата',
    Svg: require('@site/static/img/desktop.svg').default,
    description: (
      <>
          Все полезные функции прямо в чате. Узнай <a href='/Basedge-Documentation/docs/Команды/commands'>цвет никнейма,</a> <a href='/Basedge-Documentation/docs/Команды/commands'>погоду</a> или <a href='/Basedge-Documentation/docs/Команды/commands'>решение примера</a> в два клика.
      </>
    ),
  },
  {
    title: 'Игровые команды',
    Svg: require('@site/static/img/gamba.svg').default,
    description: (
      <>
          <a href='/Basedge-Documentation/docs/Игры/Слоты'>Слоты,</a> <a href='/Basedge-Documentation/docs/Игры/Казино'>казино,</a> <a href='/Basedge-Documentation/docs/Игры/Баккара'>баккара</a> и <a href='/Basedge-Documentation/docs/Игры/Рулетка'>рулетка</a> в одном месте. Единый <a href='/Basedge-Documentation/docs/Игры/Баланс'>баланс</a> для всего, <a href='/Basedge-Documentation/docs/Игры/Перевод'>взаимодействие</a>  с игроками.
      </>
    ),
  },
  {
    title: 'Помощь в модерации',
    Svg: require('@site/static/img/blades.svg').default,
    description: (
      <>
          Защита от <a href='/Basedge-Documentation/docs/Модерация/moderation'>спама</a>, <a href='/Basedge-Documentation/docs/Модерация/moderation'>фильтр фраз,</a> управление<a href='/Basedge-Documentation/docs/Модерация/moderation'> стримом</a> и добавление<p> <a href='/Basedge-Documentation/docs/Модерация/moderation'>кастомных команд.</a></p>
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
