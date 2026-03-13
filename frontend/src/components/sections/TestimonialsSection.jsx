import React from 'react';
import { motion } from 'framer-motion';
import { Star, Tractor, Store } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const testimonials = [
  {
    type: 'farmer',
    quotes: "Earlier, I used to sell my onions at ₹4/kg to the local trader. Last month, using KrishiMitra, I found a restaurant in Pune that bought the entire truckload at ₹18/kg. The payment was instant and secure.",
    name: "Ramesh Gavhane",
    location: "Nashik, MH",
    role: "Onion Farmer",
    rating: 5,
    initials: "RG",
    color: "bg-farm-green"
  },
  {
    type: 'buyer',
    quotes: "As a health-food cafe owner, finding reliable organic produce was a nightmare. Now I directly chat with farmers in Satara and get fresh deliveries twice a week. It's cheaper for me and better for them.",
    name: "Priya Sharma",
    location: "Mumbai, MH",
    role: "Cafe Owner",
    rating: 5,
    initials: "PS",
    color: "bg-farm-gold",
    textColor: "text-farm-green"
  },
  {
    type: 'farmer',
    quotes: "I was hesitant about using an app, but the interface is so simple. I just upload a photo of my tomatoes and set the price. The AI even suggested the optimal rate based on current market trends.",
    name: "Subhash Patil",
    location: "Pune, MH",
    role: "Tomato Farmer",
    rating: 4.5,
    initials: "SP",
    color: "bg-farm-green-light"
  },
  {
    type: 'buyer',
    quotes: "The transparency is what I love most. No hidden fees, no unnecessary middleman cuts. I know exactly who grew my wheat and how much they are getting paid.",
    name: "Vikram Singh",
    location: "Delhi, DL",
    role: "Retail Store Owner",
    rating: 5,
    initials: "VS",
    color: "bg-orange-500"
  },
  {
    type: 'farmer',
    quotes: "Since joining KrishiMitra, my income has doubled. I'm now planning to buy a new tractor next season. This platform is a blessing for small farmers like me.",
    name: "Gopal Krishna",
    location: "Guntur, AP",
    role: "Chilli Farmer",
    rating: 5,
    initials: "GK",
    color: "bg-teal-600"
  }
];

const TestimonialCard = ({ data, index }) => {
  const isFarmer = data.type === 'farmer';

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 15, y: 30 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
      className="bg-farm-cream rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden break-inside-avoid mb-6"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${isFarmer ? 'bg-farm-green/10' : 'bg-farm-gold/20'} -z-10 transition-transform group-hover:scale-150 duration-500`}></div>
      
      <div className="text-farm-gold text-6xl font-display leading-none mb-4 absolute top-4 left-6 opacity-40">
        "
      </div>

      <p className="text-gray-700 relative z-10 font-medium mb-8 text-lg mt-6">
        {data.quotes}
      </p>

      <div className="flex items-center gap-4 border-t border-gray-200/50 pt-6">
        <div className="relative">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${data.color} ${data.textColor}`}>
            {data.initials}
          </div>
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-2 border-farm-cream ${isFarmer ? 'bg-farm-green text-white' : 'bg-farm-gold text-farm-green'}`}>
            {isFarmer ? <Tractor size={10} /> : <Store size={10} />}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900">{data.name}</h4>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{data.role}</span>
            <span>•</span>
            <span>{data.location}</span>
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="absolute top-8 right-8 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={`${i < Math.floor(data.rating) ? 'text-farm-gold fill-farm-gold' : 'text-gray-300'} drop-shadow-sm`} />
        ))}
      </div>

    </motion.div>
  );
};

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#0F2D1F] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-20 filter blur-[100px] bg-farm-gold pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4 drop-shadow-md">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-farm-gold mx-auto rounded-full"></div>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((test, index) => (
            <TestimonialCard key={index} data={test} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
