import React, {useState} from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const {data, loading} = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : (tab === "Week" ? "week" : "day"));
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week", "Month"]} onTabChange = {onTabChange} />
      </ContentWrapper>

      <Carousel data ={data?.results} loading={loading} />
    </div>
  );
}

export default Trending;

// 3hr 05 Mns