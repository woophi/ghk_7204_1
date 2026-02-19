import { Button } from '@alfalab/core-components/button/cssm';
import { Collapse } from '@alfalab/core-components/collapse/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { Grid } from '@alfalab/core-components/grid/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { BriefcaseMIcon } from '@alfalab/icons-glyph/BriefcaseMIcon';
import { BubbleLinesMIcon } from '@alfalab/icons-glyph/BubbleLinesMIcon';
import { ChartColumnThreeAscArrowMIcon } from '@alfalab/icons-glyph/ChartColumnThreeAscArrowMIcon';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { CrownMIcon } from '@alfalab/icons-glyph/CrownMIcon';
import { ShieldMIcon } from '@alfalab/icons-glyph/ShieldMIcon';
import { SquareAcademicCapMIcon } from '@alfalab/icons-glyph/SquareAcademicCapMIcon';
import { StarPointerMIcon } from '@alfalab/icons-glyph/StarPointerMIcon';
import { useEffect, useState } from 'react';
import expert from './assets/expert.png';
import hb from './assets/hb.png';
import oneImg from './assets/one.png';
import stud1 from './assets/stud_1.png';
import stud2 from './assets/stud_2.png';
import stud3 from './assets/stud_3.png';
import stud4 from './assets/stud_4.png';
import threeImg from './assets/three.png';
import twoImg from './assets/two.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const LINK =
  'alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&shouldUseBottomSafeArea=true&endpoint=v1/invest-main-screen-view/investment-longread/94356%3flocation=AM%26campaignCode=GH';

if (LS.getItem(LSKeys.ShowThx, false)) {
  window.location.replace(LINK);
}

const itemsWG = [
  {
    icon: <ShieldMIcon color="#fff" />,
    title: 'Страховку от потерь на фондовом рынке на 30 дней',
  },
  {
    icon: <BubbleLinesMIcon color="#fff" />,
    title: 'В социальной сети Альфа-Инвестиции статус участника, прошедшего обучающий трек от Альфа-Банка',
  },
  {
    icon: <ChartColumnThreeAscArrowMIcon color="#fff" />,
    title: 'Возможность поделиться успехами в обучении и инвестировании с родителями и друзьями',
  },
  {
    icon: <StarPointerMIcon color="#fff" />,
    title: 'Стикер на смартфон для оплаты покупок с эксклюзивным дизайном',
  },
];
const itemsExpert = [
  {
    icon: <BriefcaseMIcon width={16} height={16} color="#fff" />,
    title: 'Опыт работы',
    text: 'Опыт с 2011 года. Общий стаж работы с клиентами Альфа‑Банка составляет более 4 лет.',
  },
  {
    icon: <CrownMIcon width={16} height={16} color="#fff" />,
    title: 'Специализация',
    text: 'Анализ рыночных взаимосвязей, с углубленным изучением финансового менеджмента компаний и технического анализа',
  },
  {
    icon: <SquareAcademicCapMIcon width={16} height={16} color="#fff" />,
    title: 'Образование',
    text: 'Диплом с отличием Финансового Университета РФ и Бакалавриат Американского Университета Bloomsburg University of State PA',
  },
];

const faqs = [
  {
    question: 'С какого возраста можно учиться?',
    answers: ['Рекомендуем с 14 лет, так как открыть брокерский счет на свое имя можно только с 14 лет'],
  },
  {
    question: 'Сколько длится обучение?',
    answers: ['Первый поток длится 30 дней'],
  },
  {
    question: 'Возможно ли продолжить обучение?',
    answers: ['Да, будет доступен дополнительный поток для желающих получить дополнительные углубленные знания'],
  },
  {
    question: 'Какую максимальную сумму можно инвестировать?',
    answers: ['Максимальная сумма инвестиций без согласия родителя — 5 000₽, с согласия родителя — 30 000₽'],
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '7096_start_course', { var: 'var2' });
    setLoading(true);
    //  LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.glass}>
          <img src={hb} width="100%" height={238} alt="hb" style={{ objectFit: 'contain', margin: '0 auto' }} />
          <Typography.TitleResponsive tag="h1" view="medium" font="system" weight="medium" color="primary-inverted">
            Обучение инвестициям с наставником за 30 дней
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="primary-inverted">
            Для вашего ребенка от 14 лет с одним из лучших инвестиционных брокеров
            <br />
            Альфа-Банка
          </Typography.Text>
        </div>

        <Typography.TitleResponsive
          style={{ marginTop: '12px' }}
          tag="h2"
          view="small"
          font="system"
          weight="medium"
          color="primary-inverted"
        >
          Чему научитесь
        </Typography.TitleResponsive>

        <PureCell>
          <PureCell.Graphics verticalAlign="center">
            <img src={oneImg} width={48} height={48} alt="цифра 1" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" weight="bold" color="primary-inverted">
                Понимать инвестиции
              </Typography.Text>
              <Typography.Text view="primary-small" color="primary-inverted">
                Разберётесь, как работают акции, фонды и облигации — без заумных слов
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>
        <PureCell>
          <PureCell.Graphics verticalAlign="center">
            <img src={twoImg} width={48} height={48} alt="цифра 2" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" weight="bold" color="primary-inverted">
                Управлять рисками
              </Typography.Text>
              <Typography.Text view="primary-small" color="primary-inverted">
                Научитесь не ставить всё на одну карту и защищать свои деньги
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>
        <PureCell>
          <PureCell.Graphics verticalAlign="center">
            <img src={threeImg} width={48} height={48} alt="цифра 3" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-small" weight="bold" color="primary-inverted">
                Контролировать эмоции
              </Typography.Text>
              <Typography.Text view="primary-small" color="primary-inverted">
                Поймёте, как не паниковать при падении и не терять голову при росте
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <Typography.TitleResponsive
          style={{ marginTop: '12px' }}
          tag="h2"
          view="small"
          font="system"
          weight="medium"
          color="primary-inverted"
        >
          Что получите в конце обучения
        </Typography.TitleResponsive>
        {itemsWG.map((item, index) => (
          <PureCell key={index}>
            <PureCell.Graphics verticalAlign="top">{item.icon}</PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-medium" color="primary-inverted">
                  {item.title}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive
          style={{ marginTop: '12px' }}
          tag="h2"
          view="small"
          font="system"
          weight="medium"
          color="primary-inverted"
        >
          Что получите в рамках обучения
        </Typography.TitleResponsive>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium" color="primary-inverted">
                Прямые эфиры с персональным брокером
              </Typography.TitleResponsive>
              <Gap size={4} />

              <Typography.Text view="secondary-large" color="primary-inverted">
                Запись и эфиры доступны в приложении Альфа-Инвестиций
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud1} width={90} height={110} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium" color="primary-inverted">
                Доступ к рекомендациям и стратегиям от наставника
              </Typography.TitleResponsive>
              <Gap size={4} />

              <Typography.Text view="secondary-large" color="primary-inverted">
                Готовые стратегии от наставника для минимизации рисков и повышения доходности портфеля
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud2} width={90} height={130} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium" color="primary-inverted">
                Легкое и понятное обучение
              </Typography.TitleResponsive>
              <Gap size={4} />

              <Typography.Text view="secondary-large" color="primary-inverted">
                Краткий и доступный формат
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud3} width={99} height={90} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <PureCell className={appSt.box2}>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium" color="primary-inverted">
                Доступ к закрытому каналу наставника
              </Typography.TitleResponsive>
              <Gap size={4} />
              <Typography.Text view="secondary-large" color="primary-inverted">
                Обсуждение сигналов на фондовом рынке и доступ к портфелю наставника
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Graphics verticalAlign="center">
            <img src={stud4} width={106} height={130} alt="эксперт" />
          </PureCell.Graphics>
        </PureCell>

        <Typography.TitleResponsive
          style={{ marginTop: '12px' }}
          tag="h2"
          view="small"
          font="system"
          weight="medium"
          color="primary-inverted"
        >
          Кто будет наставником
        </Typography.TitleResponsive>

        <div className={appSt.box}>
          <PureCell>
            <PureCell.Graphics verticalAlign="center">
              <img src={expert} width={46} height={46} alt="эксперт" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="medium" color="primary-inverted">
                  Илья Шевченко
                </Typography.TitleResponsive>
                <Typography.Text view="secondary-large" color="secondary-inverted">
                  Финансовый эксперт · Альфа-Банк
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>

          {itemsExpert.map((item, index) => (
            <PureCell key={index}>
              <PureCell.Graphics verticalAlign="top">{item.icon}</PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="secondary-large" weight="medium" color="primary-inverted">
                    {item.title}
                  </Typography.Text>
                  <Gap size={8} />
                  <Typography.Text view="secondary-large" color="secondary-inverted">
                    {item.text}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
            </PureCell>
          ))}
        </div>

        <Typography.TitleResponsive
          style={{ marginTop: '12px' }}
          tag="h2"
          view="small"
          font="system"
          weight="medium"
          color="primary-inverted"
        >
          Потенциальная доходность
        </Typography.TitleResponsive>

        <Grid.Row gutter={{ mobile: 8, desktop: 16 }}>
          <Grid.Col width="6">
            <div className={appSt.box3}>
              <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold" color="primary-inverted">
                +20%
              </Typography.TitleResponsive>
              <Typography.Text view="primary-small" color="primary-inverted">
                С наставником
              </Typography.Text>
            </div>
          </Grid.Col>
          <Grid.Col width="6">
            <div className={appSt.box3}>
              <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold" color="primary-inverted">
                +4,5%
              </Typography.TitleResponsive>
              <Typography.Text view="primary-small" color="primary-inverted">
                Самостоятельно
              </Typography.Text>
            </div>
          </Grid.Col>
        </Grid.Row>
        <div></div>

        <Typography.TitleResponsive
          style={{ marginTop: '12px' }}
          tag="h2"
          view="small"
          font="system"
          weight="medium"
          color="primary-inverted"
        >
          Дополнительные вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => {
                window.gtag('event', '7096_children_faq', { faq: String(index + 1), var: 'var2' });

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.rowSb}
            >
              <Typography.Text view="primary-medium" weight="medium" color="primary-inverted">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon color="#fff" />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon color="#fff" />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              {faq.answers.map((answerPart, answerIndex) => (
                <Typography.Text
                  key={answerIndex}
                  tag="p"
                  defaultMargins={false}
                  view="primary-medium"
                  color="primary-inverted"
                >
                  {answerPart}
                </Typography.Text>
              ))}
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <Button
          style={{ backgroundColor: '#F2F3F5', color: '#030306E0' }}
          loading={loading}
          block
          view="primary"
          onClick={submit}
        >
          Начать обучение
          <br />
          <Typography.Text view="secondary-large">499 ₽ за весь курс</Typography.Text>
        </Button>
      </div>
    </>
  );
};
