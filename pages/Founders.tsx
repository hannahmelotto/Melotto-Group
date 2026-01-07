
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Founders: React.FC = () => {
  const leaders = [
    {
      name: "Trever Gray",
      role: "Founder / CEO",
      bio: "Trever established Melotto Group with a vision to preserve human excellence in the digital age. With a background in strategic communication and editorial management, he oversees the group's long-term strategy and top-tier client relations.",
      image: "https://picsum.photos/id/64/400/500",
      placeholder: "Founder Headshot – Placeholder (Final Image to Be Provided)"
    },
    {
      name: "Hannah Melotto",
      role: "Co-Founder / COO",
      bio: "Hannah manages the precision of Melotto Group’s operational delivery. Her expertise in project architecture and quality standards ensures that every piece of content—from clinical trials to creative marketing—meets our uncompromising quality bar.",
      image: "https://picsum.photos/id/65/400/500",
      placeholder: "Founder Headshot – Placeholder (Final Image to Be Provided)"
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">Led by Humans, Guided by Standards.</h1>
          <p className="text-xl text-gray-600">
            Melotto Group is founder-led and hands-on. Our leadership team isn't removed from the delivery—they are actively involved in ensuring your projects meet the highest professional standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {leaders.map((leader, idx) => (
            <div key={idx} className="group">
              <div className="relative mb-8 overflow-hidden rounded-3xl bg-gray-100 aspect-[4/5]">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="object-cover w-full h-full grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white italic text-xs opacity-70">
                  {leader.placeholder}
                </div>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-2">{leader.name}</h2>
              <p className="text-brand font-semibold mb-6 uppercase tracking-widest text-sm">{leader.role}</p>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {leader.bio}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-brand transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-brand transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-gray-50 p-12 rounded-3xl border border-gray-100">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-serif font-bold">A Note from the Founders</h3>
            <p className="text-gray-600 italic leading-relaxed">
              "We started Melotto Group because we saw a gap in the market: the erosion of deep, meaningful human work in favor of fast, generic output. At Melotto Group, your project is more than just a task—it's a collaboration between professionals who care about your mission as much as you do."
            </p>
            <div className="pt-4 font-bold text-charcoal">
              Trever & Hannah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
