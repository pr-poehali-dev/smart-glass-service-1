import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProblemSolutionSection = () => {
  return (
    <>
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
    </>
  );
};

export default ProblemSolutionSection;
