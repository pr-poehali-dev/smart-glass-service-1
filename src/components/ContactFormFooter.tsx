import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactFormFooter = () => {
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
    <>
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
    </>
  );
};

export default ContactFormFooter;
