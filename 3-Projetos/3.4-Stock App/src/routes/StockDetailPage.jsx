import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import finnHub from '../assets/finnHub';
import StockChart from '../components/StockChart';
import StockData from '../components/StockData';

const formatData = (data) => {
  return data.t.map((el, index) => {
    return {
      x: el * 1000,
      y: Math.round((data.c[index] + Number.EPSILON) * 100) / 100,
    };
  });
};

const StockDetailPage = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const currentTime = Math.floor(date.getTime() / 1000);
      const oneWeek = currentTime - 7 * 24 * 60 * 60;
      const oneYear = currentTime - 365 * 24 * 60 * 60;

      let oneDay;
      if (date.getDay() === 6) {
        oneDay = currentTime - 2 * 24 * 60 * 60;
      } else if (date.getDay() === 0) {
        oneDay = currentTime - 3 * 24 * 60 * 60;
      } else {
        oneDay = currentTime - 24 * 60 * 60;
      }

      try {
        const responses = await Promise.all([
          finnHub.get('/stock/candle', {
            params: {
              symbol,
              from: oneDay,
              to: currentTime,
              resolution: 30,
            },
          }),
          finnHub.get('/stock/candle', {
            params: {
              symbol,
              from: oneWeek,
              to: currentTime,
              resolution: 60,
            },
          }),
          finnHub.get('/stock/candle', {
            params: {
              symbol,
              from: oneYear,
              to: currentTime,
              resolution: 'W',
            },
          }),
        ]);

        setChartData({
          day: formatData(responses[0].data),
          week: formatData(responses[1].data),
          year: formatData(responses[2].data),
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {chartData && (
        <div>
          <StockChart
            chartData={chartData}
            symbol={symbol}
          />
          <StockData symbol={symbol}/>
        </div>
      )}
    </div>
  );
};

export default StockDetailPage;
