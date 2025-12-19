import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const [bookingDate, setBookingDate] = useState<Date | undefined>(new Date());
  const [trialDialogOpen, setTrialDialogOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  const practices = [
    {
      name: 'Хатха йога',
      description: 'Классическое направление йоги с акцентом на физические асаны и дыхательные практики',
      duration: '90 минут',
      level: 'Все уровни'
    },
    {
      name: 'Виньяса флоу',
      description: 'Динамичная практика с плавными переходами между позами в ритме дыхания',
      duration: '75 минут',
      level: 'Средний'
    },
    {
      name: 'Инь йога',
      description: 'Медитативная практика с длительным удержанием поз для глубокого расслабления',
      duration: '90 минут',
      level: 'Все уровни'
    },
    {
      name: 'Аштанга йога',
      description: 'Интенсивная практика с фиксированной последовательностью асан',
      duration: '90 минут',
      level: 'Продвинутый'
    }
  ];

  const schedule = [
    { time: '07:00', practice: 'Утренняя виньяса', teacher: 'Анна Светлова', studio: 'Центр' },
    { time: '09:30', practice: 'Хатха йога', teacher: 'Михаил Волков', studio: 'Парк' },
    { time: '12:00', practice: 'Инь йога', teacher: 'Елена Морозова', studio: 'Центр' },
    { time: '18:00', practice: 'Виньяса флоу', teacher: 'Анна Светлова', studio: 'Набережная' },
    { time: '19:30', practice: 'Аштанга йога', teacher: 'Дмитрий Соколов', studio: 'Парк' },
    { time: '20:30', practice: 'Вечерняя медитация', teacher: 'Елена Морозова', studio: 'Центр' }
  ];

  const tariffs = [
    {
      name: 'Разовое занятие',
      price: '1 200 ₽',
      features: ['Доступ ко всем практикам', 'Любая студия', 'Коврик и реквизит']
    },
    {
      name: 'Абонемент 8 занятий',
      price: '8 000 ₽',
      popular: true,
      features: ['Действует 30 дней', 'Все направления', 'Заморозка 7 дней', 'Скидка 17%']
    },
    {
      name: 'Абонемент безлимит',
      price: '12 000 ₽',
      features: ['Безлимитное посещение', 'Все студии', 'Заморозка 14 дней', 'Гостевое занятие']
    }
  ];

  const teachers = [
    {
      name: 'Анна Светлова',
      specialty: 'Виньяса, Хатха йога',
      experience: '12 лет',
      image: 'https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/ad17ca64-9ee8-4765-903a-119d21172556.jpg'
    },
    {
      name: 'Михаил Волков',
      specialty: 'Хатха, Аштанга йога',
      experience: '8 лет',
      image: 'https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/ad17ca64-9ee8-4765-903a-119d21172556.jpg'
    },
    {
      name: 'Елена Морозова',
      specialty: 'Инь йога, Медитация',
      experience: '10 лет',
      image: 'https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/ad17ca64-9ee8-4765-903a-119d21172556.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      specialty: 'Аштанга, Виньяса',
      experience: '15 лет',
      image: 'https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/ad17ca64-9ee8-4765-903a-119d21172556.jpg'
    }
  ];

  const locations = [
    {
      name: 'Студия «Центр»',
      address: 'ул. Тверская, 12',
      metro: 'Пушкинская',
      phone: '+7 (495) 123-45-67'
    },
    {
      name: 'Студия «Парк»',
      address: 'ул. Садовая, 45',
      metro: 'Парк Культуры',
      phone: '+7 (495) 123-45-68'
    },
    {
      name: 'Студия «Набережная»',
      address: 'Пречистенская наб., 23',
      metro: 'Кропоткинская',
      phone: '+7 (495) 123-45-69'
    }
  ];

  const reviews = [
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Прекрасная студия с профессиональными преподавателями. Хожу уже полгода и чувствую, как изменилось мое тело и внутреннее состояние.',
      date: '2 недели назад'
    },
    {
      name: 'Алексей П.',
      rating: 5,
      text: 'Отличное расположение студий, удобное расписание. Особенно нравятся утренние занятия с Анной.',
      date: '1 месяц назад'
    },
    {
      name: 'Ольга С.',
      rating: 5,
      text: 'Инь йога с Еленой - это нечто особенное. Такого глубокого расслабления я не испытывала никогда.',
      date: '3 недели назад'
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/3ef7e931-a3bc-4ffe-8132-d0023f908c15.jpg',
    'https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/8ceaf368-0180-497e-9092-c51df652b7ec.jpg',
    'https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/ad17ca64-9ee8-4765-903a-119d21172556.jpg'
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Студия Йоги</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О студии</a>
            <a href="#practices" className="hover:text-primary transition-colors">Практики</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#teachers" className="hover:text-primary transition-colors">Преподаватели</a>
            <a href="#locations" className="hover:text-primary transition-colors">Студии</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
            <DialogTrigger asChild>
              <Button>Записаться</Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Путь к гармонии<br />через йогу
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя древнюю практику йоги в современном пространстве. 
            Три студии в центре Москвы, профессиональные преподаватели и разнообразие направлений.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на занятие
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Запись на занятие</DialogTitle>
                  <DialogDescription>
                    Выберите дату, время и направление йоги
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label>Выберите дату</Label>
                    <Calendar
                      mode="single"
                      selected={bookingDate}
                      onSelect={setBookingDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Направление</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите практику" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hatha">Хатха йога</SelectItem>
                        <SelectItem value="vinyasa">Виньяса флоу</SelectItem>
                        <SelectItem value="yin">Инь йога</SelectItem>
                        <SelectItem value="ashtanga">Аштанга йога</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Время</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="07:00">07:00 - Утренняя практика</SelectItem>
                        <SelectItem value="09:30">09:30 - Утренняя практика</SelectItem>
                        <SelectItem value="12:00">12:00 - Дневная практика</SelectItem>
                        <SelectItem value="18:00">18:00 - Вечерняя практика</SelectItem>
                        <SelectItem value="19:30">19:30 - Вечерняя практика</SelectItem>
                        <SelectItem value="20:30">20:30 - Вечерняя практика</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Студия</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите студию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="center">Студия «Центр» - м. Пушкинская</SelectItem>
                        <SelectItem value="park">Студия «Парк» - м. Парк Культуры</SelectItem>
                        <SelectItem value="embankment">Студия «Набережная» - м. Кропоткинская</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <Label>Ваши данные</Label>
                    <div className="grid gap-4">
                      <Input placeholder="Имя" />
                      <Input type="tel" placeholder="Телефон" />
                      <Input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <Button className="w-full" size="lg" onClick={() => setBookingDialogOpen(false)}>
                    Подтвердить запись
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog open={trialDialogOpen} onOpenChange={setTrialDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Пробное занятие
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Пробное занятие</DialogTitle>
                  <DialogDescription>
                    Первое занятие со скидкой 50%. Заполните форму, и мы свяжемся с вами для подбора удобного времени.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Sparkles" className="text-accent" size={24} />
                      <span className="font-semibold text-lg">600 ₽</span>
                      <span className="text-sm text-muted-foreground line-through">1 200 ₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Включает коврик, реквизит и консультацию преподавателя
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Выберите направление</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Какая практика вас интересует?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hatha">Хатха йога</SelectItem>
                        <SelectItem value="vinyasa">Виньяса флоу</SelectItem>
                        <SelectItem value="yin">Инь йога</SelectItem>
                        <SelectItem value="ashtanga">Аштанга йога</SelectItem>
                        <SelectItem value="any">Не знаю, помогите выбрать</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Ваши данные</Label>
                    <div className="space-y-3">
                      <Input placeholder="Имя" />
                      <Input type="tel" placeholder="Телефон" />
                      <Input type="email" placeholder="Email (необязательно)" />
                    </div>
                  </div>
                  <Button className="w-full" size="lg" onClick={() => setTrialDialogOpen(false)}>
                    Записаться на пробное занятие
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашей студии</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы создали пространство, где древние традиции йоги сочетаются с современным подходом к практике. 
                Наша миссия — помочь каждому найти гармонию между телом и разумом.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                С 2015 года мы приглашаем людей всех возрастов и уровней подготовки открыть для себя 
                преображающую силу йоги. У нас вы найдете классические и современные направления, 
                опытных преподавателей и поддерживающее сообщество единомышленников.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Студии</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Преподавателей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/345a2eb3-882c-4e89-878f-7025d6bdfb0c/files/3ef7e931-a3bc-4ffe-8132-d0023f908c15.jpg"
                alt="Студия йоги"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="practices" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши практики</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите направление, которое подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{practice.name}</CardTitle>
                    <Badge variant="secondary">{practice.level}</Badge>
                  </div>
                  <CardDescription className="text-base">{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {practice.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Расписание</h2>
            <p className="text-lg text-muted-foreground">
              Занятия проводятся ежедневно во всех студиях
            </p>
          </div>
          <Tabs defaultValue="weekday" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="weekday">Будни</TabsTrigger>
              <TabsTrigger value="weekend">Выходные</TabsTrigger>
            </TabsList>
            <TabsContent value="weekday">
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-4 items-center">
                        <div className="text-2xl font-bold text-primary">{item.time}</div>
                        <div className="md:col-span-2">
                          <div className="font-semibold text-lg">{item.practice}</div>
                          <div className="text-sm text-muted-foreground">{item.teacher}</div>
                        </div>
                        <div className="flex items-center justify-end">
                          <Icon name="MapPin" size={16} className="mr-2 text-muted-foreground" />
                          <span className="text-sm">{item.studio}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="weekend">
              <div className="space-y-3">
                {schedule.slice(0, 4).map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-4 items-center">
                        <div className="text-2xl font-bold text-primary">{item.time}</div>
                        <div className="md:col-span-2">
                          <div className="font-semibold text-lg">{item.practice}</div>
                          <div className="text-sm text-muted-foreground">{item.teacher}</div>
                        </div>
                        <div className="flex items-center justify-end">
                          <Icon name="MapPin" size={16} className="mr-2 text-muted-foreground" />
                          <span className="text-sm">{item.studio}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-lg text-muted-foreground">
              Выберите удобный формат посещения
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative ${tariff.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{tariff.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tariff.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши преподаватели</h2>
            <p className="text-lg text-muted-foreground">
              Опытные мастера с многолетней практикой
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {teacher.specialty}
                  </CardDescription>
                  <div className="text-xs text-muted-foreground mt-2">
                    Опыт: {teacher.experience}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">
              Атмосфера наших студий
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={image}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят наши ученики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши студии</h2>
            <p className="text-lg text-muted-foreground">
              Три удобные локации в центре Москвы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {locations.map((location, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all ${activeLocation === index ? 'border-primary border-2' : ''}`}
                  onClick={() => setActiveLocation(index)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{location.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-start gap-2 mt-2">
                        <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-start gap-2 mt-2">
                        <Icon name="Train" size={16} className="mt-1 flex-shrink-0" />
                        <span>м. {location.metro}</span>
                      </div>
                      <div className="flex items-start gap-2 mt-2">
                        <Icon name="Phone" size={16} className="mt-1 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="bg-muted rounded-xl h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Map" size={48} className="mx-auto mb-4" />
                <p>Интерактивная карта</p>
                <p className="text-sm mt-2">{locations[activeLocation].name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Ответим на все вопросы и поможем выбрать подходящую практику
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded-lg border bg-background"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 rounded-lg border bg-background"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border bg-background min-h-[120px]"
                    placeholder="Расскажите, что вас интересует"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Студия Йоги</h3>
              <p className="text-sm text-muted-foreground">
                Путь к гармонии через древние практики
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О студии</a></li>
                <li><a href="#practices" className="hover:text-primary transition-colors">Практики</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors">Расписание</a></li>
                <li><a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@yoga-studio.ru</li>
                <li>Ежедневно 7:00 - 22:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Youtube" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Студия Йоги. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;