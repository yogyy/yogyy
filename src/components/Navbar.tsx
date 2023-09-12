import { useEffect, useState } from "react";

const navlink = ['home', 'blog', 'guestbook']

export default function Navbar() {
  const [curr, setCurr] = useState(false)
  useEffect(() => {
    if (window !== undefined) {
      const curr = window.location.pathname
      setCurr(true)
    }
  }, []);

  return (
    <nav className="text-sm font-medium mt-8 mb-16 w-fit">
      <ul className="flex flex-row gap-3">
        {navlink.map((nav) => (
          <li key={nav}>
            <a onClick={() => console.log(curr)} href={`#${nav}`}>
              <div className="">{nav}</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
