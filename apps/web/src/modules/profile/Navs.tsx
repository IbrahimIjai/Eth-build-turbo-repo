
import React, { useEffect, useState }  from 'react';
import { motion } from 'framer-motion';
export default function ProfileNavs({tabs, setSelectedTab, selected}) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const topOffset = window.pageYOffset || document.documentElement.scrollTop;
          setIsSticky(topOffset > 20); // Set isSticky to true if topOffset is greater than 0
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div className={`${isSticky && "sticky " } flex items-center gap-8 lg:gap-12`}>
    {tabs?.map((item, i) => {
        return (
            <div className="w-full" key={i}>
                <div
                    onClick={() => {
                        setSelectedTab(item);
                    }}
                    className="cursor-pointer w-full text-white relative flex flex-col gap-1">
                    <p className="whitespace-nowrap font-bold text-blue-200 text-[.85rem] lg:text-[1rem]">
                        {item.label}
                    </p>
                    {item == selected && (
                        <motion.div
                            layoutId="underline"
                            className="bg-primary h-[2px]"></motion.div>
                    )}
                </div>
            </div>
        );
    })}
</div>
  )
}
