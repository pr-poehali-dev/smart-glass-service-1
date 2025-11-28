import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за интерес!',
      description: 'Мы свяжемся с вами в ближайшее время для подготовки индивидуального предложения.',
    });
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://cdn.poehali.dev/projects/b0d149f9-9176-4ccb-8fd1-87802a23e3a8/files/b9503c2b-68a1-4cb6-88e0-59bf8745113e.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

        <div className="relative z-10 container mx-auto px-6 py-20 text-center animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Ваш фасад всегда чист и под контролем
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Smart-стекло нового поколения с функцией самоочистки и
              интеллектуальным управлением — для зданий, которым важно быть на
              шаг впереди
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 transition-all hover:scale-105"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Получить индивидуальное предложение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card/60 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-muted-foreground">
                экономии на обслуживании
              </div>
            </Card>
            <Card className="p-6 bg-card/60 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">2-3</div>
              <div className="text-muted-foreground">года окупаемости</div>
            </Card>
            <Card className="p-6 bg-card/60 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">
                мониторинг и поддержка
              </div>
            </Card>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Знакомо ли вам это?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-destructive/10 border-destructive/30 hover:bg-destructive/15 transition-all animate-fade-in">
              <div className="mb-4">
                <Icon name="AlertCircle" size={48} className="text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Потеря презентабельности
              </h3>
              <p className="text-muted-foreground">
                Ваши фасады теряют вид — уборка дорогая и долгая, грязь и
                разводы портят имидж здания
              </p>
            </Card>

            <Card className="p-8 bg-destructive/10 border-destructive/30 hover:bg-destructive/15 transition-all animate-fade-in">
              <div className="mb-4">
                <Icon name="TrendingDown" size={48} className="text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Неконтролируемые затраты
              </h3>
              <p className="text-muted-foreground">
                Температура и свет скачут: летом жарко, зимой темно, деньги
                утекают через окна
              </p>
            </Card>

            <Card className="p-8 bg-destructive/10 border-destructive/30 hover:bg-destructive/15 transition-all animate-fade-in">
              <div className="mb-4">
                <Icon name="Wrench" size={48} className="text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Сложная интеграция
              </h3>
              <p className="text-muted-foreground">
                Новые решения дороги и сложны в установке, подрядчики
                перекладывают ответственность
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Решение, где не нужно выбирать
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Smart-стекло с самоочищающимся покрытием и управлением
                  прозрачностью — это законченный продукт-сервис "под ключ"
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-3 mt-1" size={24} />
                    <span>
                      Ваши стеклянные поверхности всегда чисты, без ручного
                      труда
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-3 mt-1" size={24} />
                    <span>
                      Свет и приватность одним касанием или автоматически
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-3 mt-1" size={24} />
                    <span>
                      Управление в приложении или BMS, поддержка включена
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/b0d149f9-9176-4ccb-8fd1-87802a23e3a8/files/880cb451-e5fe-4c91-b87b-746ee4b9eaeb.jpg"
                  alt="Smart Glass Technology"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Под ключ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Преимущества для вашего бизнеса
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/60 backdrop-blur-lg hover:bg-card/80 transition-all group hover:scale-105">
              <div className="mb-4 text-primary">
                <Icon name="Droplets" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Чистота 24/7</h3>
              <p className="text-muted-foreground">
                Стекло само очищается — вы забываете про мойки, люльки и
                рекламации
              </p>
            </Card>

            <Card className="p-8 bg-card/60 backdrop-blur-lg hover:bg-card/80 transition-all group hover:scale-105">
              <div className="mb-4 text-primary">
                <Icon name="Sun" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Климат под контролем</h3>
              <p className="text-muted-foreground">
                Автоматическая регулировка света и тепла для лучшего
                микроклимата
              </p>
            </Card>

            <Card className="p-8 bg-card/60 backdrop-blur-lg hover:bg-card/80 transition-all group hover:scale-105">
              <div className="mb-4 text-primary">
                <Icon name="Settings" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">0 хлопот</h3>
              <p className="text-muted-foreground">
                Сервис и апгрейды — всё включено в подписку, никаких скрытых
                затрат
              </p>
            </Card>

            <Card className="p-8 bg-card/60 backdrop-blur-lg hover:bg-card/80 transition-all group hover:scale-105">
              <div className="mb-4 text-primary">
                <Icon name="BarChart3" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Аналитика для бизнеса
              </h3>
              <p className="text-muted-foreground">
                Доступ к отчетам об экономии энергии, воды и труда прямо в
                вашем кабинете
              </p>
            </Card>

            <Card className="p-8 bg-card/60 backdrop-blur-lg hover:bg-card/80 transition-all group hover:scale-105">
              <div className="mb-4 text-primary">
                <Icon name="MapPin" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Локальная гарантия</h3>
              <p className="text-muted-foreground">
                Быстрые поставки и поддержка на русском языке, никаких сложностей
                с импортом
              </p>
            </Card>

            <Card className="p-8 bg-card/60 backdrop-blur-lg hover:bg-card/80 transition-all group hover:scale-105">
              <div className="mb-4 text-primary">
                <Icon name="Shield" size={48} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Надёжность</h3>
              <p className="text-muted-foreground">
                Сертифицировано для российских стандартов энергоэффективности
              </p>
            </Card>
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Получите индивидуальное предложение
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму, и мы подготовим решение специально для вашего
                объекта
              </p>
            </div>

            <Card className="p-8 bg-card/60 backdrop-blur-lg border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Компания *
                    </label>
                    <Input
                      required
                      placeholder="ООО «Компания»"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="ivan@company.ru"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Телефон *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Расскажите о вашем объекте
                  </label>
                  <Textarea
                    placeholder="Площадь остекления, тип здания, особые требования..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background/50 min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20"
                >
                  Отправить запрос
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Smart Glass
                </h3>
                <p className="text-muted-foreground">
                  Интеллектуальные решения для современных зданий
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Phone" size={16} className="mr-2" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={16} className="mr-2" />
                    <span>info@smartglass.ru</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Документы</h4>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Политика конфиденциальности
                  </a>
                  <a
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Сертификаты
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center text-muted-foreground text-sm border-t border-border/50 pt-8">
              © 2024 Smart Glass. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
