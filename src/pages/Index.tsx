import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const TERMINAL_IMG =
  'https://cdn.poehali.dev/projects/01f0a21a-86a3-4452-bf5a-3c9ac8a7e7b7/files/498013fc-9e37-4fa8-bfe6-918140c7bee3.jpg';

const NAV = [
  { id: 'how', label: 'Как работает' },
  { id: 'about', label: 'О терминале' },
  { id: 'compare', label: 'Сравнение' },
  { id: 'service', label: 'Обслуживание' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'contacts', label: 'Контакты' },
];

const Cross = () => (
  <span className="text-gold-light text-2xl leading-none select-none">✣</span>
);

const Ornament = ({ text }: { text?: string }) => (
  <div className="ornament-divider my-4">
    {text ? <span className="font-serif text-lg tracking-widest uppercase text-gold">{text}</span> : <Cross />}
  </div>
);

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-gold/20">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3">
            <Cross />
            <span className="font-script text-3xl text-gradient-gold leading-none pt-1">Лепта</span>
          </button>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-serif text-lg tracking-wide text-cream/80 hover:text-gold-light transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollTo('order')}
              className="hidden sm:inline-flex bg-gold hover:bg-gold-light text-ink font-serif text-lg font-semibold tracking-wide"
            >
              Заказать
            </Button>
            <button className="lg:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-gold/20 bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="container py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="font-serif text-xl text-left text-cream/80 hover:text-gold-light py-1"
                >
                  {n.label}
                </button>
              ))}
              <Button onClick={() => scrollTo('order')} className="bg-gold text-ink font-serif text-lg mt-2">
                Заказать терминал
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl animate-glow pointer-events-none" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <Icon name="Sparkles" size={16} className="text-gold-light" />
              <span className="font-serif text-sm tracking-widest uppercase text-gold-light">
                Электронный ящик для пожертвований
              </span>
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold leading-[1.05] mb-6">
              Терминал <span className="text-gradient-gold">пожертвований</span> для храмов и церквей
            </h1>
            <p className="font-body text-lg text-cream/70 max-w-xl mb-8 leading-relaxed">
              Сенсорный терминал самообслуживания с экраном 6 дюймов. Прихожанин выбирает сумму
              пожертвования и прикладывает банковскую карту — просто, удобно и благолепно.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('order')}
                className="bg-gold hover:bg-gold-light text-ink font-serif text-lg font-semibold tracking-wide px-8 h-12"
              >
                Заказать терминал
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                onClick={() => scrollTo('how')}
                variant="outline"
                className="border-gold/40 text-gold-light hover:bg-gold/10 hover:text-gold-light font-serif text-lg px-8 h-12 bg-transparent"
              >
                Как это работает
              </Button>
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-6 bg-gold/10 rounded-[2rem] blur-2xl animate-glow" />
            <div className="relative rounded-[1.5rem] overflow-hidden border-gold-frame animate-float">
              <img src={TERMINAL_IMG} alt="Терминал пожертвований Лепта" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
            {/* floating donate chips */}
            <div className="absolute -left-4 top-1/4 bg-card/90 backdrop-blur border border-gold/40 rounded-xl px-5 py-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <p className="font-serif text-3xl font-bold text-gradient-gold">100 ₽</p>
            </div>
            <div className="absolute -right-2 bottom-1/4 bg-card/90 backdrop-blur border border-gold/40 rounded-xl px-5 py-3 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
              <p className="font-serif text-3xl font-bold text-gradient-gold">500 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 relative">
        <div className="container">
          <Ornament text="Как работает" />
          <h2 className="text-center font-serif text-4xl lg:text-5xl font-semibold mb-16">
            Три простых шага к <span className="text-gradient-gold">пожертвованию</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Hand', t: 'Выбор суммы', d: 'Прихожанин касается экрана и выбирает сумму — 100 или 500 рублей, либо любую другую.' },
              { icon: 'CreditCard', t: 'Прикладывает карту', d: 'Бесконтактная оплата картой или телефоном. Безопасно, мгновенно, без наличных.' },
              { icon: 'HandHeart', t: 'Пожертвование принято', d: 'Средства поступают на счёт храма. На экране — слова благодарности.' },
            ].map((s, i) => (
              <div
                key={s.t}
                className="relative p-8 rounded-xl bg-card border-gold-frame text-center group hover:border-gold transition-all"
              >
                <div className="absolute top-4 right-5 font-serif text-5xl text-gold/15 font-bold">{i + 1}</div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon name={s.icon} size={32} className="text-gold-light" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-cream">{s.t}</h3>
                <p className="font-body text-cream/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About terminal */}
      <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative">
          <Ornament text="О терминале" />
          <h2 className="text-center font-serif text-4xl lg:text-5xl font-semibold mb-6">
            Полностью <span className="text-gradient-gold">российский продукт</span>
          </h2>
          <p className="text-center font-body text-lg text-cream/70 max-w-2xl mx-auto mb-16">
            Терминал собирается в России из российских комплектующих, а программное обеспечение
            работает на отечественной платформе и внесено в реестр ПО Минцифры России.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Factory',
                t: 'Сборка в России',
                d: 'Терминал полностью собирается на территории России из российских комплектующих.',
              },
              {
                icon: 'Cpu',
                t: 'Отечественная платформа',
                d: 'Программа работает на полностью российской платформе — без зарубежных зависимостей.',
              },
              {
                icon: 'BadgeCheck',
                t: 'Реестр ПО Минцифры',
                d: 'Программное обеспечение официально внесено в реестр российского ПО Минцифры России.',
              },
            ].map((s) => (
              <div
                key={s.t}
                className="p-8 rounded-xl bg-card border-gold-frame text-center group hover:border-gold transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon name={s.icon} size={32} className="text-gold-light" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3 text-cream">{s.t}</h3>
                <p className="font-body text-cream/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="py-24">
        <div className="container">
          <Ornament text="Сравнение" />
          <h2 className="text-center font-serif text-4xl lg:text-5xl font-semibold mb-16">
            Обычный ящик и <span className="text-gradient-gold">электронный терминал</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-xl bg-card/50 border border-cream/10">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Box" size={28} className="text-cream/40" />
                <h3 className="font-serif text-2xl font-semibold text-cream/70">Деревянный ящик</h3>
              </div>
              <ul className="space-y-4">
                {['Только наличные деньги', 'Нужно вскрывать и пересчитывать вручную', 'Риск кражи и потери', 'Нет учёта и отчётности', 'У прихожан не всегда есть наличные'].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-body text-cream/60">
                    <Icon name="X" size={20} className="text-destructive/70 mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-xl bg-card border-gold-frame relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-6 relative">
                <Icon name="MonitorSmartphone" size={28} className="text-gold-light" />
                <h3 className="font-serif text-2xl font-semibold text-gradient-gold">Терминал «Лепта»</h3>
              </div>
              <ul className="space-y-4 relative">
                {['Оплата картой и телефоном', 'Деньги сразу на счёте храма', 'Полная сохранность средств', 'Прозрачный учёт всех пожертвований', 'Удобно прихожанам любого возраста'].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-body text-cream/80">
                    <Icon name="Check" size={20} className="text-gold mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section id="service" className="py-24">
        <div className="container">
          <Ornament text="Обслуживание" />
          <h2 className="text-center font-serif text-4xl lg:text-5xl font-semibold mb-16">
            Заботимся о вас <span className="text-gradient-gold">круглый год</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Truck', t: 'Доставка и установка', d: 'Привезём и настроим терминал в вашем храме.' },
              { icon: 'Wrench', t: 'Тех. поддержка', d: 'Работаем на Android — обновления и помощь онлайн.' },
              { icon: 'ShieldCheck', t: 'Гарантия', d: 'Официальная гарантия на оборудование.' },
              { icon: 'FileText', t: 'Документы', d: 'Полный пакет документов и отчётность.' },
            ].map((s) => (
              <div key={s.t} className="p-6 rounded-xl bg-card border-gold-frame hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Icon name={s.icon} size={24} className="text-gold-light" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-cream">{s.t}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          {/* Geography of service */}
          <div className="mt-10 p-8 lg:p-10 rounded-xl bg-card border-gold-frame relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="w-20 h-20 shrink-0 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Icon name="MapPinned" size={40} className="text-gold-light" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-3 text-cream">
                  Точки обслуживания <span className="text-gradient-gold">по всей России</span>
                </h3>
                <p className="font-body text-cream/70 leading-relaxed max-w-2xl">
                  Гарантийное и постгарантийное обслуживание осуществляется по всей территории
                  страны — от Калининграда до Сахалина. Где бы ни находился ваш храм, мы рядом.
                </p>
              </div>
            </div>
            <div className="relative mt-6 flex items-center justify-center gap-3 font-serif text-lg tracking-wide text-gold-light">
              <span>Калининград</span>
              <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
              <Icon name="Plane" size={20} className="text-gold" />
              <span className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
              <span>Сахалин</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-secondary/30">
        <div className="container">
          <Ornament text="Галерея" />
          <h2 className="text-center font-serif text-4xl lg:text-5xl font-semibold mb-16">
            Терминал в <span className="text-gradient-gold">благолепии храма</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden border-gold-frame group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={TERMINAL_IMG}
                  alt={`Терминал пожертвований ${i + 1}`}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order / Contacts */}
      <section id="order" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div id="contacts">
            <Ornament text="Контакты" />
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-6">
              Свяжитесь <span className="text-gradient-gold">с нами</span>
            </h2>
            <p className="font-body text-cream/70 mb-8 leading-relaxed">
              Расскажем подробнее, рассчитаем стоимость и поможем оформить заказ терминала для вашего храма.
            </p>
            <div className="space-y-5">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (900) 000-00-00' },
                { icon: 'Mail', label: 'Эл. почта', value: 'info@lepta-terminal.ru' },
                { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Соборная, д. 1' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={22} className="text-gold-light" />
                  </div>
                  <div>
                    <p className="font-serif text-sm uppercase tracking-widest text-gold/70">{c.label}</p>
                    <p className="font-body text-lg text-cream">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-xl bg-card border-gold-frame relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            <h3 className="font-serif text-3xl font-semibold mb-6 relative">Заказать терминал</h3>
            <form className="space-y-4 relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                placeholder="Ваше имя"
                className="bg-secondary/50 border-gold/25 text-cream placeholder:text-cream/40 h-12 font-body focus-visible:ring-gold"
              />
              <Input
                placeholder="Телефон"
                className="bg-secondary/50 border-gold/25 text-cream placeholder:text-cream/40 h-12 font-body focus-visible:ring-gold"
              />
              <Input
                placeholder="Название храма"
                className="bg-secondary/50 border-gold/25 text-cream placeholder:text-cream/40 h-12 font-body focus-visible:ring-gold"
              />
              <Textarea
                placeholder="Комментарий"
                rows={4}
                className="bg-secondary/50 border-gold/25 text-cream placeholder:text-cream/40 font-body focus-visible:ring-gold resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-ink font-serif text-lg font-semibold tracking-wide h-12"
              >
                Отправить заявку
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
              <p className="font-body text-xs text-cream/40 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cross />
            <span className="font-script text-2xl text-gradient-gold pt-1">Лепта</span>
          </div>
          <p className="font-body text-sm text-cream/50">
            © 2026 «Лепта» — терминалы пожертвований для храмов и церквей
          </p>
        </div>
      </footer>
    </div>
  );
}