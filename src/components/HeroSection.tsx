import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
