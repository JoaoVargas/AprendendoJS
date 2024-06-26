import { useState, useEffect, useContext } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { WatchListContext } from '../contexts/WatchListContext';
import finnHub from '../assets/finnHub';
import '../assets/App.css';

const StockList = () => {
  const [stock, setStock] = useState([]);
  const { watchList, deleteStock } = useContext(WatchListContext);
  const navigate = useNavigate();

  const changeColor = (value) => {
    return value > 0 ? 'success' : 'danger';
  };

  const renderIcon = (value) => {
    return value > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />;
  };

  const handleStockSelect = (symbol) => {
    navigate(`/detail/${symbol}`);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      let responses = [];
      try {
        responses = await Promise.all(
          watchList.map((stock) => {
            return finnHub.get('/quote', {
              params: {
                symbol: stock,
              },
            });
          })
        );

        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol,
          };
        });

        if (isMounted) {
          setStock(data);
        }
      } catch (err) {
        console.log('Erro no fetch');
      }
    };
    fetchData();

    return () => (isMounted = false);
  }, [watchList]);

  return (
    <div>
      <table className='table hover mt-5'>
        <thead style={{ color: 'rgb(79,89,102)' }}>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Last</th>
            <th scope='col'>Chg</th>
            <th scope='col'>Chg%</th>
            <th scope='col'>High</th>
            <th scope='col'>Low</th>
            <th scope='col'>Open</th>
            <th scope='col'>Close</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {stock.map((stockData) => {
            return (
              <tr
                className='table-row'
                key={stockData.symbol}
                onClick={() => handleStockSelect(stockData.symbol)}
              >
                <th scope='row'>{stockData.symbol}</th>
                <td>{stockData.data.c}</td>
                <td className={`text-${changeColor(stockData.data.d)}`}>
                  {stockData.data.d} {renderIcon(stockData.data.d)}
                </td>
                <td className={`text-${changeColor(stockData.data.dp)}`}>
                  {stockData.data.dp} {renderIcon(stockData.data.dp)}
                </td>
                <td>{stockData.data.h}</td>
                <td>{stockData.data.l}</td>
                <td>{stockData.data.o}</td>
                <td>{stockData.data.pc}</td>
                <td>
                  <button
                    className='btn btn-danger btn-sm d-inline-block delete-button'
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteStock(stockData.symbol);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
