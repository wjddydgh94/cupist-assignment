import { useEffect, useState } from "react";
import { CardDataType } from "types/card";
import additional_2 from "__mocks__/introduction_additional_2.json";

const useScroll = () => {
  const [data, setData] = useState<CardDataType[]>();
  const [isPageBottom, setIsPageBottom] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const handleScroll = () => {
    if (!isPageBottom) {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        setData(additional_2.data as CardDataType[]);
        setIsPageBottom(true);
      }
    }
  };

  const onClickDeleteButton = (id: number) => {
    const newData = data && data.filter((item) => item.id !== id);
    setData(newData);
  };

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    handleScroll();
  }, [scrollTop]);

  return { isPageBottom, data, onClickDeleteButton };
};

export default useScroll;
