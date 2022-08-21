---
sidebar_label: Казино
keywords:
- Казино Twitch Basedgebot
---

# Казино

> *<quote>Существует большое количество различных онлайн-казино. Но в данном обзоре мы рассмотрим только те, которые относятся к категории игровых автоматов. Все они являются популярными, так как дают возможность играть и выигрывать большие суммы денег. Играть в казино, как и везде, нужно не только за выигрыш, но и за удовольствие. В этом случае не важно, сколько вы хотите выиграть, главное – это получать удовольствие от процесса.</quote>*
>
> © <a class="slonbot casino" href="https://www.twitch.tv/slonb0t">SLONB0T</a>

### Описание

Упрощенная версия [рулетки.](https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%BB%D0%B5%D1%82%D0%BA%D0%B0) Главное отличие в том, что в [Basedge](/) ставить можно только на цвет. 
Существует всего 4 цвета: <code id="black">черный</code>, <code id="yellow">желтый</code>, <code id="red">красный</code> и <code id="green">зеленый</code> с коэффициентами <b>x2</b>, <b>x3</b>, <b>x5</b> и <b>x50</b> соответственно.
Чем выше коэффициент, тем больше риски и выше прогнозируемый выигрыш. При удачном исходе изначальная ставка умножается на выигрышный коэффициент, при неудачном - ставка стирается с [баланса.](/docs/commands/balance)

### Использование команды

<code>!казино bet amount</code>

<br/>
<br/>

>- <code>bet</code>  -  коэффициент ставки
>- <code>amount</code>  -  количество игровой валюты

:::note
Коэффициентом может быть как <i>число</i>, так и <i>цвет</i>

Пример:
<p><code>!казино x50 10к</code></p>

<p><code>!казино зеленое 10к</code></p>
:::

:::tip
Ставку можно обозначить при помощи постфикса <b>-к</b>

Пример: <code>!казино черное 5к</code>
:::

:::tip 
Чтобы сыграть на весь баланс, вместо суммы введите <b>все</b> или <b>all in</b>

Пример: <code>!казино черное все</code>
:::

### Пример использования

<img src="https://media1.giphy.com/media/xd75iFGEWWQdaGFRnw/giphy.gif?cid=790b76112ee569899542b6b3eb441b8b98b1d29ae98b91bf&rid=giphy.gif&ct=g" alt="Казино, пример использования" width="350"/>
<img src="https://media3.giphy.com/media/Hv1wghfKkgDrAerp7y/giphy.gif?cid=790b76115d3ef8bd5859030dbd54b8bd6e1c8b1da1cc2223&rid=giphy.gif&ct=g" alt="Казино, пример использования" width="350" id="example-right"/>

<details>
  <summary>Подробнее...</summary>
  <div>

| Global cooldown | 2 seconds⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ |
|:----------------|:----------------------|
| User cooldown   | 2 seconds             |
| Mod only        | No                    |
| Sub only        | No                    |
| Aliases         | !casino               |
  </div>
</details>

<p class="update">Last update on 19.08.2022</p>