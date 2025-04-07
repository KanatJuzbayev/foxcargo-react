import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

interface CustomHashLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CustomHashLink: React.FC<CustomHashLinkProps> = ({
  to,
  children,
  className = "",
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sectionId = to.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) return;

    const handleScroll = () => {
      const headerHeight = document.querySelector(".header")?.clientHeight || 0;
      const sectionTop = section.offsetTop - headerHeight;
      const sectionBottom = sectionTop + section.offsetHeight;

      const scrollY = window.scrollY;

      // Условие: если секция видна во viewport
      setActive(scrollY >= sectionTop && scrollY < sectionBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // проверить при первом рендере

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [to]);

  const handleScrollTo = (el: HTMLElement) => {
    const headerHeight = document.querySelector(".header")?.clientHeight || 0;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <HashLink
      to={to}
      scroll={handleScrollTo}
      className={`${className} ${active ? "active" : ""}`.trim()}
    >
      {children}
    </HashLink>
  );
};

export default CustomHashLink;
