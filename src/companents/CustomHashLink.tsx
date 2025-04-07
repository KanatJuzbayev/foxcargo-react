import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const currentHash = location.hash || "#promo"; // по умолчанию "Главная"

    setActive(currentHash === to);
  }, [location, to]);

  const handleScroll = (el: HTMLElement) => {
    const headerHeight = document.querySelector(".header")?.clientHeight || 0;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerHeight, // Добавляем небольшой отступ
      behavior: "smooth",
    });
  };

  return (
    <HashLink
      to={to}
      scroll={handleScroll}
      className={`${className} ${active ? "active" : ""}`.trim()}
    >
      {children}
    </HashLink>
  );
};

export default CustomHashLink;
