import { ArrowRight, Check, Shield, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 'bpc-157',
    name: 'BPC-157',
    category: 'Recovery',
    tagline: 'Gut health & injury recovery support',
    price: 89,
    icon: '/icons/heart.svg',
    tag: 'Best Seller',
  },
  {
    id: 'tb-500',
    name: 'TB-500',
    category: 'Repair',
    tagline: 'Tissue repair & mobility support',
    price: 99,
    icon: '/icons/activity.svg',
    tag: null,
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    category: 'Growth',
    tagline: 'Growth hormone support, lean recomposition',
    price: 79,
    icon: '/icons/zap.svg',
    tag: null,
  },
  {
    id: 'cjc-1295',
    name: 'CJC-1295',
    category: 'Lean Mass',
    tagline: 'Lean mass & accelerated recovery',
    price: 109,
    icon: '/icons/target.svg',
    tag: 'Popular',
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin',
    category: 'Anti-Aging',
    tagline: 'Sleep quality & anti-aging support',
    price: 85,
    icon: '/icons/award.svg',
    tag: null,
  },
  {
    id: 'apex-stack',
    name: 'The Apex Stack',
    category: 'Bundle',
    tagline: '5-peptide advanced combo protocol',
    price: 349,
    icon: '/icons/dumbbell.svg',
    tag: 'Best Value',
  },
];

export default function Shop() {
  const [cart, setCart] = useState<Set<string>>(new Set());

  const addToCart = (id: string) => {
    setCart((prev) => new Set(prev).add(id));
  };

  return (
    <>
      {/* Shop Hero */}
      <section className="pt-40 pb-16 px-6 bg-black">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="inline-block bg-red-600/10 text-red-500 px-4 py-2 border border-red-600/20 text-xs font-bold uppercase tracking-widest">
              Elite Access Only
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 uppercase tracking-wide">
              <ShoppingCart className="w-5 h-5 text-red-500" />
              Cart ({cart.size})
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 leading-[0.95] tracking-tight uppercase">
            The <span className="text-red-500">Arsenal</span>
          </h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest">Pharmaceutical-Grade. Individually Dosed.</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-6 bg-black">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-black p-8 border border-gray-800 hover:border-red-600/50 transition-all group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center">
                      <img src={product.icon} alt="" className="w-8 h-8" />
                    </div>
                    {product.tag && (
                      <div className="bg-red-600/10 text-red-500 px-3 py-1 border border-red-600/30 text-xs font-bold uppercase tracking-widest">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-2">{product.category}</div>
                  <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-1">{product.tagline}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                    <div className="font-black text-3xl text-red-500">${product.price}</div>
                    <button
                      onClick={() => addToCart(product.id)}
                      disabled={cart.has(product.id)}
                      className={`px-6 py-3 font-bold uppercase tracking-wide text-sm border transition-colors ${
                        cart.has(product.id)
                          ? 'bg-transparent text-red-500 border-red-600/50 cursor-default'
                          : 'bg-red-600 text-white border-red-500 hover:bg-red-700'
                      }`}
                    >
                      {cart.has(product.id) ? (
                        <span className="inline-flex items-center gap-2">
                          <Check className="w-4 h-4" /> Added
                        </span>
                      ) : (
                        'Add to Cart'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-[1440px] mx-auto grid sm:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-gray-400 text-sm uppercase tracking-wide">Third-Party Lab Tested</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-gray-400 text-sm uppercase tracking-wide">99%+ Purity Grade</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-gray-400 text-sm uppercase tracking-wide">60-Day Guarantee</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight uppercase">
            Not Sure Where To <span className="text-red-500">Start?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">
            Get a custom protocol built around your goals.
          </p>
          <a href="/#pricing" className="bg-red-600 text-white px-12 py-4 hover:bg-red-700 transition-all inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm border border-red-500 shadow-lg shadow-red-600/20">
            Request Access
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
