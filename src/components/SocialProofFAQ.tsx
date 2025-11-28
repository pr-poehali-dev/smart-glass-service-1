import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const SocialProofFAQ = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
              Нам доверяют
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 bg-card/60 backdrop-blur-lg">
                <div className="flex items-start mb-6">
                  <Icon name="Quote" size={48} className="text-primary mr-4" />
                  <div>
                    <p className="text-lg mb-4 italic">
                      "Больше всего поразило, что после дождя фасад и правда
                      сияет — а сервис не подвёл ни разу за год. Перестал думать
                      про графики мойки и рекламации от арендаторов."
                    </p>
                    <div className="font-semibold">Александр М.</div>
                    <div className="text-sm text-muted-foreground">
                      Директор по эксплуатации бизнес-центра
                    </div>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                <Card className="p-6 bg-card/60 backdrop-blur-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary">80%</div>
                      <div className="text-sm text-muted-foreground">
                        экономии расходов
                      </div>
                    </div>
                    <Icon name="TrendingDown" size={48} className="text-primary" />
                  </div>
                </Card>

                <Card className="p-6 bg-card/60 backdrop-blur-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary">2-3 года</div>
                      <div className="text-sm text-muted-foreground">
                        окупаемость
                      </div>
                    </div>
                    <Icon name="Clock" size={48} className="text-primary" />
                  </div>
                </Card>

                <Card className="p-6 bg-card/60 backdrop-blur-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        ISO/ГОСТ
                      </div>
                      <div className="text-sm text-muted-foreground">
                        сертифицировано
                      </div>
                    </div>
                    <Icon name="Award" size={48} className="text-primary" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Частые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-card/60 backdrop-blur-lg border-primary/20 px-6 rounded-lg"
            >
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                Что если покрытие перестанет работать или стекло повредится?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ваша подписка включает полный сервис: бесплатная диагностика,
                замена или ремонт покрытия проводится за наш счёт в кратчайшие
                сроки. Мы гарантируем непрерывную работу системы и берём на себя
                все риски.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-card/60 backdrop-blur-lg border-primary/20 px-6 rounded-lg"
            >
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                Стекло точно интегрируется с моей BMS или "умным зданием"?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, мы подключаемся к любым современным системам управления
                зданиями через стандартные протоколы (BACnet, Modbus, MQTT). Наши
                инженеры проведут полную интеграцию и обучат ваших специалистов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-card/60 backdrop-blur-lg border-primary/20 px-6 rounded-lg"
            >
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                Какие гарантии на оборудование и покрытие?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы предоставляем 5 лет гарантии на оборудование и 10 лет на
                самоочищающееся покрытие. В рамках сервисной подписки все
                обновления, апгрейды и профилактика включены без дополнительной
                оплаты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-card/60 backdrop-blur-lg border-primary/20 px-6 rounded-lg"
            >
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                Какова стоимость решения?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стоимость зависит от площади остекления, типа здания и требуемого
                функционала. Мы предлагаем гибкие модели: покупка или подписка.
                Средняя окупаемость составляет 2-3 года за счёт экономии на
                обслуживании и энергоэффективности.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-card/60 backdrop-blur-lg border-primary/20 px-6 rounded-lg"
            >
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                Сколько времени занимает установка?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для типового объекта установка занимает от 2 до 4 недель в
                зависимости от площади. Мы работаем с минимальным влиянием на
                эксплуатацию здания и можем выполнять работы поэтапно.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default SocialProofFAQ;
