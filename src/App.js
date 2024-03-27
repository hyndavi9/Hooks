import React,{useState,useContext,useEffect,createContext} from "react";
const ThemeContext=createContext();
const ThemeProvider=({children})=> {
  const [theme,setTheme]=useState('light');
  const toggleTheme=()=> {
    setTheme((prevTheme)=>(prevTheme==='light' ? 'dark':'light'));
  };
  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent=()=>{
  const {theme,toggleTheme} = useContext(ThemeContext);

  const themedComponentStyle={
    background:theme === 'light' ? '#fff':'#333',
    color:theme === 'light' ? '#333':'#fff',
    padding:'20px',
    margin:'20px 0',
    
  
    };
    return(
      <div style={themedComponentStyle}>
        <h3>Themed Component</h3>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>toggleTheme </button>
      </div>
    );
    };
    const CounterComponent=() => {
      const [count,setCount]=useState(0);

      useEffect(() => {
        document.title=`Count: ${count}`;
      },[count]);
      const counterStyle = {
        padding:'20px',
        margin:'20px 0',
        border:'1px solid #ccc',
        borderRadius: '8px',
      };
      return(
        <div style={counterStyle}>
          <h2>Counter Component</h2>
          <p>Count: {count}</p>
          <button onClick={()=>setCount(count + 1)} >Increment</button>
        <button onClick={()=>setCount(count - 1 )} disabled={count === 0}>Decrement  </button>
        <ThemeComponent />
      </div>
    );
};

  const UserInfoComponent=() => {
    const [UserInfo,setUserInfo] = useState({ name: '',age:0 });

    useEffect(() => {
      const fetchUserInfo = async() => {
        setTimeout(() => {
          setUserInfo({ name: 'Hyndu',age: 10000});
        },1000);
      };
      fetchUserInfo();
    },[]);
    const userInfoStyle = {
      padding:'20px',
        margin:'20px 0',
        border:'1px solid #ccc',
        borderRadius: '8px',
    };
    return(
      <div style={userInfoStyle}>
        <h2>UserInfo Component</h2>
        <p>Name: {UserInfo.name}</p>
        <p>Age: {UserInfo.age}</p>
      </div>
    );
  };

  const App = () => {
    const appStyle = {
      padding:'20px',
        margin:'auto',
      fontFamily:'Arial,sans-serif',
      maxWidth: '600px',
    };
    return (
      <ThemeProvider>
        <div style={{ textAlign: 'center',marginTop:'10px'}}>
          <h1 style={{borderBottom: '2px solid orange',color:'blue'}}>All Hooks @ Once</h1>
        </div>
        <div style={appStyle}>
          <CounterComponent/>
          <UserInfoComponent/>
        </div>
      </ThemeProvider>
    );
  };
  export default App;