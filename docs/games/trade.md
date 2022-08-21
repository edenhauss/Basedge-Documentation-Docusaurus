---
sidebar_label: Трейд
keywords:
- Трейд Twitch Basedgebot
---

# Трейд

> *<quote>Трейд — это не только одежда, обувь и аксессуары, это образ жизни, который мы создаем вокруг себя и своей семьи. Трейд — это успехи в жизни и на личном фронте, успех в карьере и бизнесе, повышение самооценки, повышение доходов, улучшение здоровья, физического и психического благополучия.</quote>*
>
> © <a class="slonbot trade" href="https://www.twitch.tv/slonb0t">SLONB0T</a>

### Описание

Суть игры заключается в торговле акциями на повышение или понижение. В [Basedge](/) ты предугадываешь исход движения графика.
В случае совпадения предикта с исходом ставка умножается на процент изменения графика, в случае проигрыша - делится.
Таким образом, при проигрыше Вы теряете не всю ставку, а лишь ее часть.

### Использование команды

<code>!трейд predict amount</code>

<br/>
<br/>

>- <code>predict</code> - исход 
>- <code>amount</code> - количество игровой валюты

:::note
Исходом может быть как <i>вверх</i>, так и <i>вниз</i>

Пример:
<p><code>!трейд вверх 10к</code></p>

<p><code>!трейд вниз 10к</code></p>
:::

:::tip
Ставку можно обозначить при помощи постфикса <b>-к</b>

Пример: <code>!трейд вверх 5к</code>
:::

:::tip
Чтобы сыграть на весь баланс, вместо суммы введите <b>все</b> или <b>all in</b>

Пример: <code>!трейд вверх все</code>
:::

### Пример использования

<img src="https://media3.giphy.com/media/GBYpEm0BOsqj9by7XS/giphy.gif?cid=790b7611040b86bda9d5abc7033c7bb8acc8673dbae0416a&rid=giphy.gif&ct=g" alt="Трейд, пример использования" width="350"/>
<img src="https://media4.giphy.com/media/tOC5MbHkxsRpaBJVPK/giphy.gif?cid=790b7611e52077dbffa7e80dbace2303c653b58a9af2d396&rid=giphy.gif&ct=g" alt="Трейд, пример использования" width="350" id="example-right"/>

<details>
  <summary>Подробнее...</summary>
  <div>

| Global cooldown | 2 seconds⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ |
|:----------------|:----------------------|
| User cooldown   | 2 seconds             |
| Mod only        | No                    |
| Sub only        | No                    |
| Aliases         | !trade                |

  </div>
</details>

<p class="update">Last update on 19.08.2022</p>