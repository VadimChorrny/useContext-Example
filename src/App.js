import { Context } from './context/Context';
import CarDetails from './pages/CarPage/CarDetails';
import './styles/Index.css';

function App() {
  const data = {
    name: 'Vadym',
    logo: 'https://yt3.ggpht.com/ytc/AMLnZu8W4zHc3gYJmK1Z8U1HCuZOdRpr1YaGhOEpr9ek3w=s900-c-k-c0x00ffffff-no-rj',
    themes: {
      dark: {
        background: '#17202A',
      },
      light: {
        background: '#fff',
      },
      language: {
        ua: {
          logo: 'Добрий день',
          main_text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        en: {
          logo: 'Hello everybody!',
          main_text: '',
        },
      },
    },
  };

  return (
    <div className='App'>
      <Context.Provider value={data}>
        {' '}
        {/* Second Step - Initialization */}
        <CarDetails />
      </Context.Provider>
    </div>
  );
}

export default App;
