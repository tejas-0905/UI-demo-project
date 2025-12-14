import Section from "./Section";
import { socials } from "../constants";
import { novacortex } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col gap-10">
        <div className="flex justify-center">
          <a href="#hero" className="block w-[12rem]">
            <img src={novacortex} width={190} height={40} alt="novacortex" />
          </a>
        </div>
        
        <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <div className="flex flex-col gap-4">
            <p className="caption text-n-4 lg:block">
              © {new Date().getFullYear()} NovaCortex AI. All rights reserved.
            </p>
            <p className="caption text-n-4 lg:block">
              Revolutionizing the way you interact with AI
            </p>
          </div>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 hover:scale-110 transition-transform duration-300"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
