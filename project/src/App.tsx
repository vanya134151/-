import React from 'react';
import { Stamp as Steam, Clock, PhoneCall, MapPin, Thermometer, Users, Leaf, Droplets } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?auto=format&fit=crop&q=80&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Дмитриевские бани</h1>
            <p className="text-xl md:text-2xl">Традиции русской бани с 1985 года</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Steam className="w-8 h-8" />}
            title="Русская парная"
            description="Традиционная парная с березовыми вениками"
          />
          <FeatureCard
            icon={<Thermometer className="w-8 h-8" />}
            title="Разные режимы"
            description="Температура и влажность под ваши предпочтения"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Семейные залы"
            description="Просторные залы для всей семьи"
          />
          <FeatureCard
            icon={<Leaf className="w-8 h-8" />}
            title="Травяные чаи"
            description="Большой выбор целебных напитков"
          />
        </div>
      </div>

      {/* Services */}
      <div className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              image="https://images.unsplash.com/photo-1588860939994-ce39f6c55e09?auto=format&fit=crop&q=80&w=800"
              title="Классическая баня"
              price="от 1500₽/час"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
              title="Массаж"
              price="от 2000₽"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800"
              title="СПА-процедуры"
              price="от 3000₽"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Контакты</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-6 h-6 text-amber-700" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-amber-700" />
                <span>ул. Дмитриевская, 15</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-700" />
                <span>Ежедневно с 9:00 до 23:00</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">О нас</h2>
            <p className="text-gray-600 leading-relaxed">
              Дмитриевские бани - это место, где традиции русской бани соединяются с современным комфортом. 
              Мы предлагаем нашим гостям исключительный сервис и атмосферу настоящей русской бани. 
              Наши профессиональные банщики помогут вам получить максимум пользы и удовольствия от посещения.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Дмитриевские бани. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-amber-700 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ServiceCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-amber-700 font-medium">{price}</p>
      </div>
    </div>
  );
}

export default App;